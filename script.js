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


 const scriptURL = "https://script.google.com/macros/s/AKfycbxGi7xqvWaS06Jceo49u1UPcpbIM9iPfSlHwLz0jWSTnEie1sSIvGpqdQO-y1c3EgPy/exec"; // Add your Google Apps Script URL

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
 
         console.log("Fetched Data:", data);  // ✅ DEBUG: Check fetched data
 
         if (!Array.isArray(data)) {
             message.textContent = "Data format error. Check Google Sheets structure.";
             console.error("Unexpected Data Format:", data);
             return;
         }
 
         // ✅ Find matching student
         let matchedUser = data.find(user => 
             String(user.ID).trim() === userID && String(user.Password).trim() === userPass
         );
 
         console.log("Matched User:", matchedUser);  // ✅ DEBUG: Check matched user
 
         if (matchedUser) {
             displayResults(matchedUser); // ✅ Show student results
         } else {
             message.textContent = "Incorrect ID or Password. Please try again.";
         }
     } catch (error) {
         console.error("Error fetching data:", error);
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
 
     // ✅ Fix for Google Drive Image Links
     const studentImage = student.Image ? student.Image.trim() : "";
     let driveImageURL = studentImage.includes("drive.google.com")
         ? studentImage.replace("https://drive.google.com/file/d/", "https://lh3.googleusercontent.com/d/")
                      .replace("/view?usp=drive_link", "")
         : studentImage;
 
     document.getElementById("studentImage").innerHTML = driveImageURL
         ? `<img src="${driveImageURL}" alt="Student Photo" class="student-photo">`
         : `<p>No Image Available</p>`;

         console.log("Student Image URL:", student.Image);



 
     // Clear previous table content
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
         if (student[`${subject} Term 1 Marks`]) {
             resultsTable.innerHTML += `
                 <tr>
                     <td>${subject}</td>
                     <td>${student[`${subject} Term 1 Marks`] || "-"}</td>
                     <td>${student[`${subject} Term 2 Marks`] || "-"}</td>
                     <td>${student[`${subject} Term 3 Marks`] || "-"}</td>
                 </tr>
             `;
         }
     });
 
     document.getElementById("term1Position").textContent = `Term 1 Position: ${student["Term 1 Position"]}`;
     document.getElementById("term2Position").textContent = `Term 2 Position: ${student["Term 2 Position"]}`;
     document.getElementById("term3Position").textContent = `Term 3 Position: ${student["Term 3 Position"]}`;
 }
 
 function goBack() {
     document.querySelector(".results-box").style.display = "none";
     document.querySelector(".login-box").style.display = "block";
 }
 