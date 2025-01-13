 const navLinks = document.querySelectorAll('header nav a')
 const logo = document.querySelector('.logo')

 const sections = document.querySelectorAll('section')
 const menuicon = document.querySelector('#menu-icon')
 const navbar = document.querySelector('header nav')

 menuicon.addEventListener('click', () =>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
 })
 
 const activiepage = () =>{
    const header = document.querySelector('header')
    const barsbox = document.querySelector('.bars-box')

    header.classList.remove('active')
    setTimeout(() =>{
        header.classList.add('active')
    }, 1100)




    navLinks.forEach(link =>{
        link.classList.remove('active')
    })

    barsbox.classList.remove('active')
    setTimeout(() =>{
        barsbox.classList.add('active')
    }, 1100)

    sections.forEach(section =>{
        section.classList.remove('active')
    })
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
 }

 navLinks.forEach((link, idx) =>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')){
            activiepage()

            link.classList.add('active')

            setTimeout(() =>{
                sections[idx].classList.add('active')

            },1100)


        }
    })
 })
 
 logo.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activiepage()

        navLinks[0].classList.add('active')
        setTimeout(() =>{
            sections[idx].classList.add('active')

        },1100)
    }
 })
 const resumebtns = document.querySelectorAll('.resume-btn')

 resumebtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () =>{
        const resumeDetails= document.querySelectorAll('.resume-detail')

        resumebtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail =>{
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')
        
    })
 })

 
// Hardcoded student data (ID, Password, Details, and Results)
const studentData = {
    "SID001": {
        password: "1234",
        image: "main.jpg",
        details: {
            name: "Abu Bakarr Sidique kamara",
            class: "SSS 3",
            age: 17,
            gender: "Male",
            teacher: "Mrs. Thompson",
            guardian: "Mr Kamara",
            contact: "079 63 02 74",
            remarks: "Excellent performance in Term 2."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Abu Bakarr Sidique kamara",
            class: "SSS 3",
            age: 17,
            gender: "Male",
            teacher: "Mrs. Thompson",
            guardian: "Mr Kamara",
            contact: "079 63 02 74",
            remarks: "Excellent performance in Term 2."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    }

};

// Function to check student ID and password
function checkResult() {
    const studentID = document.getElementById("studentID").value.toUpperCase();
    const studentPass = document.getElementById("studentPass").value;
    const resultBox = document.querySelector(".results-box");
    const loginBox = document.querySelector(".login-box");
    const message = document.getElementById("message");
    const studentImage = document.getElementById("studentImage");
    const studentDetails = document.getElementById("studentDetails");
    const resultsTable = document.getElementById("resultsTable");
    const term1Position = document.getElementById("term1Position");
    const term2Position = document.getElementById("term2Position");
    const term3Position = document.getElementById("term3Position");

    if (studentData[studentID] && studentData[studentID].password === studentPass) {
        const student = studentData[studentID];
        resultBox.style.display = "block";
        loginBox.style.display = "none";

        // Set student image
        studentImage.src = student.image;

        // Set student details
        const details = student.details;
        studentDetails.innerHTML = ` 
            <p><strong>Name:</strong> ${details.name}</p>
            <p><strong>Class:</strong> ${details.class}</p>
            <p><strong>Age:</strong> ${details.age}</p>
            <p><strong>Gender:</strong> ${details.gender}</p>
            <p><strong>Class Teacher:</strong> ${details.teacher}</p>
            <p><strong>Guardian:</strong> ${details.guardian}</p>
            <p><strong>Contact:</strong> ${details.contact}</p>
            <p><strong>Remarks:</strong> ${details.remarks}</p>
        `;

        // Set results table
        resultsTable.innerHTML = "";
        const subjects = student.results.subjects;
        for (let subject in subjects) {
            const result = subjects[subject];
            const row = `<tr>
                <td>${subject}</td>
                <td>${result.term1}</td>
                <td>${result.term2}</td>
                <td>${result.term3}</td>
            </tr>`;
            resultsTable.innerHTML += row;
        }

        // Set term positions
        term1Position.textContent = `Term 1 Position: ${student.results.term1Position}`;
        term2Position.textContent = `Term 2 Position: ${student.results.term2Position}`;
        term3Position.textContent = `Term 3 Position: ${student.results.term3Position}`;
    } else {
        message.textContent = "Invalid Student ID or Password. Please try again.";
    }
}

// Function to go back to the login page
function goBack() {
    document.querySelector(".results-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
    document.getElementById("studentID").value = "";
    document.getElementById("studentPass").value = "";
    document.getElementById("message").textContent = "";
}