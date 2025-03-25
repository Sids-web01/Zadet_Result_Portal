const navLinks = document.querySelectorAll('header nav a')
const logo = document.querySelector('.logo')

const sections = document.querySelectorAll('section')
const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

const activiepage = () => {
    const header = document.querySelector('header')
    const barsbox = document.querySelector('.bars-box')

    header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100)




    navLinks.forEach(link => {
        link.classList.remove('active')
    })

    barsbox.classList.remove('active')
    setTimeout(() => {
        barsbox.classList.add('active')
    }, 1100)

    sections.forEach(section => {
        section.classList.remove('active')
    })
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activiepage()

            link.classList.add('active')

            setTimeout(() => {
                sections[idx].classList.add('active')

            }, 1100)


        }
    })
})

logo.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activiepage()

        navLinks[0].classList.add('active')
        setTimeout(() => {
            sections[0].classList.add('active')

        }, 1100)
    }
})
const resumebtns = document.querySelectorAll('.resume-btn')

resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumebtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail => {
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')

    })
})

const goToMenuBtn = document.querySelector('#homeBtn');

// New button functionality to go to the Menu section
goToMenuBtn.addEventListener('click', () => {
    activiepage()  // Call the existing function to reset the active states

    // Find the Menu section and add the 'active' class to it
    const targetSection = document.querySelector('#contactsection')
    targetSection.classList.add('active')

    // Optionally, make the button active if you want
    goToMenuBtn.classList.add('active')
})

// Select your 'Go to Order' button



const scriptURL = "https://script.google.com/macros/s/AKfycbwC27zhUEcgscr9coIgc8M7XadpJjYvjagksgygqa-yDQQlGeUftGh9sSsHj5-Ag2j6/exec";

async function checkResult() {
    const userID = document.getElementById("studentID").value.trim();
    const userPass = document.getElementById("studentPass").value.trim();
    const message = document.getElementById("message");

    if (!userID || !userPass) {
        message.textContent = "Please enter both ID and Password.";
        return;
    }

    try {
        const response = await fetch(scriptURL);
        const data = await response.json();

        if (!Array.isArray(data)) {
            message.textContent = "Data format error. Check Google Sheets structure.";
            return;
        }

        let matchedUser = data.find(user => String(user.ID).trim() === userID && String(user.Password).trim() === userPass);

        if (matchedUser) {
            displayResults(matchedUser);
        } else {
            message.textContent = "Incorrect ID or Password. Please try again.";
        }
    } catch (error) {
        message.textContent = "Error fetching data. Try again later.";
    }
}

function displayResults(student) {
    document.querySelector(".login-box").style.display = "none";
    document.querySelector(".results-box").style.display = "block";

    document.getElementById("studentDetails").innerHTML = `
        <p><strong>Name:</strong> ${student.Name}</p>
        <p><strong>Gender:</strong> ${student.Gender}</p>
        <p><strong>ID:</strong> ${student.ID}</p>
        <p><strong>Class:</strong> ${student.Class}</p>
        <p><strong>Guardian:</strong> ${student.Guardian}</p>
        <p><strong>Teacher:</strong> ${student.Teacher}</p>
        <p><strong>Contact:</strong> ${student.Contact}</p>
    `;

    const studentImage = document.getElementById("studentImage");

if (student.Image && student.Image.trim() !== "") {
    let imageURL = student.Image.trim();
    console.log("Original Image URL from Google Sheets:", imageURL);

    // ✅ Convert Google Drive link if needed
    const match = imageURL.match(/\/d\/(.+?)\//);
    if (match) {
        const fileID = match[1];
        // Use alternative Google link
        imageURL = `https://lh3.googleusercontent.com/d/${fileID}=s400`;
        console.log("Converted Google Drive Image URL:", imageURL);
    }

    studentImage.src = imageURL;
    studentImage.style.display = "flex";

    studentImage.onerror = function () {
        console.error("Image failed to load:", imageURL);
        studentImage.style.display = "none";
    };
} else {
    console.warn("No image found for student.");
    studentImage.style.display = "none";
}

    

    // Populate Results Table
    const resultsTable = document.getElementById("resultsTable");
    resultsTable.innerHTML = `
        <tr>
            <th>Subject</th>
            <th>Term 1</th>
            <th>Term 2</th>
            <th>Term 3</th>
        </tr>
    `;

    const subjects = [
        "Math", "English", "Science", "Social Studies", "History",
        "Geography", "Physics", "Chemistry", "Biology", "ICT",
        "Religious Studies", "Physical Education", "Art"
    ];

    subjects.forEach(subject => {
        resultsTable.innerHTML += `
            <tr>
                <td>${subject}</td>
                <td>${student[`${subject} Term 1 Marks`] || "-"}</td>
                <td>${student[`${subject} Term 2 Marks`] || "-"}</td>
                <td>${student[`${subject} Term 3 Marks`] || "-"}</td>
            </tr>
        `;
    });

    document.getElementById("term1Position").textContent = `Term 1 Position: ${student["Term 1 Position"] || "N/A"}`;
    document.getElementById("term2Position").textContent = `Term 2 Position: ${student["Term 2 Position"] || "N/A"}`;
    document.getElementById("term3Position").textContent = `Term 3 Position: ${student["Term 3 Position"] || "N/A"}`;
}

function goBack() {
    document.querySelector(".results-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
}