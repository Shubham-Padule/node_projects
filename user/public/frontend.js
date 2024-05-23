document.addEventListener('DOMContentLoaded', function () {
    const addUserForm = document.getElementById('addUserForm');
    const userTableBody = document.getElementById('userTableBody');
  
    // Fetch all users and display them
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users');
        const users = response.data;
        userTableBody.innerHTML = users.map(user => `
          <tr>
            <td>${user.uName}</td>
            <td>${user.uCity}</td>
            <td>
              <button class="btn btn-primary btn-sm" onclick="editUser('${user._id}')">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deleteUser('${user._id}')">Delete</button>
            </td>
          </tr>
        `).join('');
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  
    // Add a new user
    addUserForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formData = new FormData(addUserForm);
      const userData = {
        uName: formData.get('uName'),
        uCity: formData.get('uCity')
      };
  
      try {
        await axios.post('/api/users', userData);
        fetchUsers(); // Refresh the user list
        addUserForm.reset(); // Clear the form fields
      } catch (error) {
        console.error('Error adding user:', error);
      }
    });
  
    // Edit user
    window.editUser = async function (userId) {
      // Implement edit functionality
      console.log('Edit user:', userId);
    };
  
    // Delete user
    window.deleteUser = async function (userId) {
      if (confirm("Are you sure you want to delete this user?")) {
        try {
          await axios.delete(`/api/users/${userId}`);
          fetchUsers(); // Refresh the user list
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      }
    };
  
    // Initial fetch of users
    fetchUsers();
  });
  