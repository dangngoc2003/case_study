function save() {
    let fullname = document.getElementById('fullname').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('number').value;

    let email = document.getElementById('email').value;
    let gender = "";

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    if (fullname && age && address && phone && email && gender) {

        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

        students.push({
            fullname: fullname, age: age, address: address, phone: phone, email: email, gender: gender,
        });

        localStorage.setItem('students', JSON.stringify(students));

        this.renderlistStudent();

    }
}

function renderlistStudent() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    if (students.length === 0) {
        document.getElementById('list-student').style.display = 'none';
        return false;
    }
    document.getElementById('list-student').style.display = 'block'

    let tableContent = `<tr>
            <td>#</td>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td>Gender</td></tr>`;

    students.forEach((student, index) => {
        let studentId = index;
        let genderLabel = student.gender == 1 ? 'Male' : 'Female';
        index++;
        tableContent += `<tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${genderLabel}</td>
            <td>
            <a href="#" onclick="editstudent()" ">Edit</a>   | <a href="#" onclick="deleteStudent(${studentId})">Delete</a>
            </td>
        </tr>`
    })

    document.getElementById('view-student').innerHTML = tableContent;
}

function deleteStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id, 1);

    localStorage.setItem("students", JSON.stringify(students));
    renderlistStudent();
}

function editstudent(index){


}




