document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('loginMessage');

    // Placeholder for authentication logic
    if (email === 'user@example.com' && password === 'password123') {
        loginMessage.textContent = '';
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('todoContainer').style.display = 'block';
    } else {
        loginMessage.textContent = 'Invalid email or password!';
    }
});

document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');

    if (todoInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = todoInput.value;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor = '#d9534f';
        deleteButton.style.color = '#fff';
        deleteButton.style.border = 'none';
        deleteButton.style.padding = '5px 10px';
        deleteButton.style.borderRadius = '5px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        todoInput.value = '';
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('todoContainer').style.display = 'none';
});
