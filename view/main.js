document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const contact = document.querySelector('#phone').value

    if(name == '' || email === '' || contact === '') {
        alert('Enter the deatils carefully!')
    } else {
        const usersObject = {
            name: name,
            email: email,
            contact: contact
        }
        alert('User added sucessfully')
        
        console.log(usersObject)

        // Posting the data from the form to the API
        const xhr = new XMLHttpRequest()
        const url = 'http://localhost:5500/users'

        xhr.open('POST', url)

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = () => {
            if(xhr.status === 201 && xhr.readyState === 4) {
                response = JSON.parse(xhr.responseText)
                console.log(response)
            }
        }
        xhr.send(JSON.stringify(usersObject))
    }
})