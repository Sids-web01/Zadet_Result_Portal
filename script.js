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

// jss1 pupils
const studentData = {
    "ZPISS001": {
        password: "3210",
        image: "main.jpg",
        details: {
            name: "Kadija Khalil Massah",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Sallu Khalil",
            contact: "O76 44 66 07",
            remarks: ""
        },
        results: {
            term1Position: 45,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 61, term2: "", term3: "" },
                Language_Arts: { term1: 48, term2: "", term3: "" },
                Mathematics: { term1: 70, term2: "", term3: "" },
                P_H_E: { term1: 51, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 55, term2: "", term3: "" },
                Home_Economics: { term1: 62, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 82, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
                
            }
        }
    },
    "ZPISS002": {
        password: "2150",
        image: "main.jpg",
        details: {
            name: "Maguette Amira Tholley",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Marry Chame",
            contact: "032 832 174",
            remarks: "."
        },
        results: {
            term1Position: 9,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 90, term2: "", term3: "" },
                Integrated_Sci: { term1: 91, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 84, term2: "", term3: "" },
                P_H_E: { term1: 70, term2: "", term3: "" },
                Religious_Education: { term1: 60, term2: "", term3: "" },
                Social_studies: { term1: 84, term2: "", term3: "" },
                Home_Economics: { term1: 81, term2: "", term3: "" },
                Business_Studies: { term1: 86, term2: "", term3: "" },
                C_P_A: { term1: 75, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS003": {
        password: "2233",
        image: "vibebg5.jpeg",
        details: {
            name: "Diana Umu Jonjo",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Sia Jonjo",
            contact: "088 614 244",
            remarks: "."
        },
        results: {
            term1Position: 8,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 88, term2: "", term3: "" },
                Language_Arts: { term1: 98, term2: "", term3: "" },
                Mathematics: { term1: 82, term2: "", term3: "" },
                P_H_E: { term1: 70, term2: "", term3: "" },
                Religious_Education: { term1: 93, term2: "", term3: "" },
                Social_studies: { term1: 87, term2: "", term3: "" },
                Home_Economics: { term1: 89, term2: "", term3: "" },
                Business_Studies: { term1: 91, term2: "", term3: "" },
                C_P_A: { term1: 73, term2: "", term3: "" },
                Computer_Studies: { term1: 65, term2: "", term3: "" },
            }
        }
    },
    "ZPISS004": {
        password: "0192",
        image: "vibebg5.jpeg",
        details: {
            name: "Augustina E C King",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Claudius King",
            contact: "088 79 34 30",
            remarks: "."
        },
        results: {
            term1Position: 6,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 85, term2: "", term3: "" },
                Integrated_Sci: { term1: 95, term2: "", term3: "" },
                Language_Arts: { term1: 90, term2: "", term3: "" },
                Mathematics: { term1: 85, term2: "", term3: "" },
                P_H_E: { term1: 88, term2: "", term3: "" },
                Religious_Education: { term1: 85, term2: "", term3: "" },
                Social_studies: { term1: 78, term2: "", term3: "" },
                Home_Economics: { term1: 90, term2: "", term3: "" },
                Business_Studies: { term1: 91, term2: "", term3: "" },
                C_P_A: { term1: 78, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS005": {
        password: "4356",
        image: "vibebg5.jpeg",
        details: {
            name: "Augusta I C King",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Claudius King",
            contact: "088 79 34 30",
            remarks: "."
        },
        results: {
            term1Position: 14,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 85, term2: "", term3: "" },
                Integrated_Sci: { term1: 80, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 72, term2: "", term3: "" },
                P_H_E: { term1: 69, term2: "", term3: "" },
                Religious_Education: { term1: 78, term2: "", term3: "" },
                Social_studies: { term1: 71, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 91, term2: "", term3: "" },
                C_P_A: { term1: 69, term2: "", term3: "" },
                Computer_Studies: { term1: 80, term2: "", term3: "" },
            }
        }
    },
    "ZPISS006": {
        password: "1278",
        image: "vibebg5.jpeg",
        details: {
            name: "Rugiatu Jalloh",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Billo Jalloh",
            contact: "034 69 51 41",
            remarks: "."
        },
        results: {
            term1Position: 47,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 55, term2: "", term3: "" },
                Integrated_Sci: { term1: 70, term2: "", term3: "" },
                Language_Arts: { term1: 68, term2: "", term3: "" },
                Mathematics: { term1: 64, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 58, term2: "", term3: "" },
                Social_studies: { term1: 60, term2: "", term3: "" },
                Home_Economics: { term1: 50, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 71, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
            }
        }
    },
    "ZPISS007": {
        password: "1298",
        image: "vibebg5.jpeg",
        details: {
            name: "Nawal B Tholley",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mary chame",
            contact: "032 832 174",
            remarks: "."
        },
        results: {
            term1Position: 3,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 95, term2: "", term3: "" },
                Integrated_Sci: { term1: 92, term2: "", term3: "" },
                Language_Arts: { term1: 97, term2: "", term3: "" },
                Mathematics: { term1: 99, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 98, term2: "", term3: "" },
                Social_studies: { term1: 90, term2: "", term3: "" },
                Home_Economics: { term1: 90, term2: "", term3: "" },
                Business_Studies: { term1: 86, term2: "", term3: "" },
                C_P_A: { term1: 78, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS008": {
        password: "1299",
        image: "vibebg5.jpeg",
        details: {
            name: "Mariatu Fatmed Sesay",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Mohamed M Sesay",
            contact: "076 866 961",
            remarks: "."
        },
        results: {
            term1Position: 22,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 58, term2: "", term3: "" },
                Integrated_Sci: { term1: 74, term2: "", term3: "" },
                Language_Arts: { term1: 93, term2: "", term3: "" },
                Mathematics: { term1: 71, term2: "", term3: "" },
                P_H_E: { term1: 53, term2: "", term3: "" },
                Religious_Education: { term1: 75, term2: "", term3: "" },
                Social_studies: { term1: 62, term2: "", term3: "" },
                Home_Economics: { term1: 80, term2: "", term3: "" },
                Business_Studies: { term1: 78, term2: "", term3: "" },
                C_P_A: { term1: 37, term2: "", term3: "" },
                Computer_Studies: { term1: 90, term2: "", term3: "" },
            }
        }
    },
    "ZPISS009": {
        password: "2156",
        image: "vibebg5.jpeg",
        details: {
            name: "Haja Y Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Fatamata Sawaneh",
            contact: "079 650 777",
            remarks: "."
        },
        results: {
            term1Position: 5,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 93, term2: "", term3: "" },
                Integrated_Sci: { term1: 86, term2: "", term3: "" },
                Language_Arts: { term1: 100, term2: "", term3: "" },
                Mathematics: { term1: 82, term2: "", term3: "" },
                P_H_E: { term1: 77, term2: "", term3: "" },
                Religious_Education: { term1: 90, term2: "", term3: "" },
                Social_studies: { term1: 81, term2: "", term3: "" },
                Home_Economics: { term1: 90, term2: "", term3: "" },
                Business_Studies: { term1: 95, term2: "", term3: "" },
                C_P_A: { term1: 65, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS010": {
        password: "2157",
        image: "vibebg5.jpeg",
        details: {
            name: "Mariam S kamara",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. mohamed Kamara",
            contact: "030 88 22 91",
            remarks: "."
        },
        results: {
            term1Position: 12,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 90, term2: "", term3: "" },
                Language_Arts: { term1: 100, term2: "", term3: "" },
                Mathematics: { term1: 76, term2: "", term3: "" },
                P_H_E: { term1: 78, term2: "", term3: "" },
                Religious_Education: { term1: 35, term2: "", term3: "" },
                Social_studies: { term1: 78, term2: "", term3: "" },
                Home_Economics: { term1: 85, term2: "", term3: "" },
                Business_Studies: { term1: 85, term2: "", term3: "" },
                C_P_A: { term1: 61, term2: "", term3: "" },
                Computer_Studies: { term1: 98, term2: "", term3: "" },
            }
        }
    },
    "ZPISS011": {
        password: "2158",
        image: "vibebg5.jpeg",
        details: {
            name: "Aminata A Turay",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alpha Turay",
            contact: "073 555 860",
            remarks: "."
        },
        results: {
            term1Position: 7,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 88, term2: "", term3: "" },
                Integrated_Sci: { term1: 90, term2: "", term3: "" },
                Language_Arts: { term1: 100, term2: "", term3: "" },
                Mathematics: { term1: 70, term2: "", term3: "" },
                P_H_E: { term1: 77, term2: "", term3: "" },
                Religious_Education: { term1: 88, term2: "", term3: "" },
                Social_studies: { term1: 79, term2: "", term3: "" },
                Home_Economics: { term1: 90, term2: "", term3: "" },
                Business_Studies: { term1: 92, term2: "", term3: "" },
                C_P_A: { term1: 72, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS012": {
        password: "2159",
        image: "vibebg5.jpeg",
        details: {
            name: "Sarah Sillah",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. fanta Sillah",
            contact: "088 82 61 67",
            remarks: "."
        },
        results: {
            term1Position: 13,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 80, term2: "", term3: "" },
                Integrated_Sci: { term1: 68, term2: "", term3: "" },
                Language_Arts: { term1: 97, term2: "", term3: "" },
                Mathematics: { term1: 79, term2: "", term3: "" },
                P_H_E: { term1: 73, term2: "", term3: "" },
                Religious_Education: { term1: 83, term2: "", term3: "" },
                Social_studies: { term1: 79, term2: "", term3: "" },
                Home_Economics: { term1: 82, term2: "", term3: "" },
                Business_Studies: { term1: 76, term2: "", term3: "" },
                C_P_A: { term1: 62, term2: "", term3: "" },
                Computer_Studies: { term1: 75, term2: "", term3: "" },
            }
        }
    },
    "ZPISS013": {
        password: "2171",
        image: "vibebg5.jpeg",
        details: {
            name: "Hannah K B Sesay",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs Kadie",
            contact: "076 344 584",
            remarks: "."
        },
        results: {
            term1Position: 17,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 73, term2: "", term3: "" },
                Integrated_Sci: { term1: 82, term2: "", term3: "" },
                Language_Arts: { term1: 81, term2: "", term3: "" },
                Mathematics: { term1: 49, term2: "", term3: "" },
                P_H_E: { term1: 55, term2: "", term3: "" },
                Religious_Education: { term1: 73, term2: "", term3: "" },
                Social_studies: { term1: 78, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 72, term2: "", term3: "" },
                C_P_A: { term1: 70, term2: "", term3: "" },
                Computer_Studies: { term1: 84, term2: "", term3: "" },
            }
        }
    },
    "ZPISS014": {
        password: "2172",
        image: "vibebg5.jpeg",
        details: {
            name: "Fatima Conteh",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Adama Tarawally",
            contact: "099 81 18 60",
            remarks: "."
        },
        results: {
            term1Position: 31,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 55, term2: "", term3: "" },
                Integrated_Sci: { term1: 69, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 63, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 90, term2: "", term3: "" },
                Social_studies: { term1: 71, term2: "", term3: "" },
                Home_Economics: { term1: 50, term2: "", term3: "" },
                Business_Studies: { term1: 59, term2: "", term3: "" },
                C_P_A: { term1: 85, term2: "", term3: "" },
                Computer_Studies: { term1: 75, term2: "", term3: "" },
            }
        }
    },
    "ZPISS015": {
        password: "6678",
        image: "vibebg5.jpeg",
        details: {
            name: "Marika Fofanah",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Aminata Fofanah",
            contact: "088 80 94 46",
            remarks: "."
        },
        results: {
            term1Position: 36,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 73, term2: "", term3: "" },
                Integrated_Sci: { term1: 64, term2: "", term3: "" },
                Language_Arts: { term1: 68, term2: "", term3: "" },
                Mathematics: { term1: 62, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 63, term2: "", term3: "" },
                Social_studies: { term1: 63, term2: "", term3: "" },
                Home_Economics: { term1: 64, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 72, term2: "", term3: "" },
                Computer_Studies: { term1: 75, term2: "", term3: "" },
            }
        }
    },
    "ZPISS016": {
        password: "9905",
        image: "vibebg5.jpeg",
        details: {
            name: "Isha Osman Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alhaji Bangura",
            contact: "079 65 99 05",
            remarks: "."
        },
        results: {
            term1Position: 42,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 44, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 61, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 70, term2: "", term3: "" },
                Social_studies: { term1: 69, term2: "", term3: "" },
                Home_Economics: { term1: 50, term2: "", term3: "" },
                Business_Studies: { term1: 28, term2: "", term3: "" },
                C_P_A: { term1: 76, term2: "", term3: "" },
                Computer_Studies: { term1: 85, term2: "", term3: "" },
            }
        }
    },
    "ZPISS017": {
        password: "0764",
        image: "vibebg5.jpeg",
        details: {
            name: "Isatu S mansaray",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr.Foday Mansaray",
            contact: "076 444 135",
            remarks: "."
        },
        results: {
            term1Position: 50,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 28, term2: "", term3: "" },
                Integrated_Sci: { term1: 64, term2: "", term3: "" },
                Language_Arts: { term1: 88, term2: "", term3: "" },
                Mathematics: { term1: 69, term2: "", term3: "" },
                P_H_E: { term1: 53, term2: "", term3: "" },
                Religious_Education: { term1: 72, term2: "", term3: "" },
                Social_studies: { term1: 28, term2: "", term3: "" },
                Home_Economics: { term1: 48, term2: "", term3: "" },
                Business_Studies: { term1: 25, term2: "", term3: "" },
                C_P_A: { term1: 72, term2: "", term3: "" },
                Computer_Studies: { term1: 60, term2: "", term3: "" },
            }
        }
    },
    "ZPISS018": {
        password: "3857",
        image: "vibebg5.jpeg",
        details: {
            name: "Emmanuela M Lavalie",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr Lavalie",
            contact: "030 38 57 71",
            remarks: "."
        },
        results: {
            term1Position: 25,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 73, term2: "", term3: "" },
                Integrated_Sci: { term1: 71, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 55, term2: "", term3: "" },
                P_H_E: { term1: 55, term2: "", term3: "" },
                Religious_Education: { term1: 88, term2: "", term3: "" },
                Social_studies: { term1: 71, term2: "", term3: "" },
                Home_Economics: { term1: 58, term2: "", term3: "" },
                Business_Studies: { term1: 53, term2: "", term3: "" },
                C_P_A: { term1: 75, term2: "", term3: "" },
                Computer_Studies: { term1: 83, term2: "", term3: "" },
            }
        }
    },
    "ZPISS019": {
        password: "4266",
        image: "vibebg5.jpeg",
        details: {
            name: "Kadija Kanu",
            class: "JSS 1",
            age: 14,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Mohamed Kamara",
            contact: "030 42 66 22",
            remarks: "."
        },
        results: {
            term1Position: 41,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 65, term2: "", term3: "" },
                Integrated_Sci: { term1: 75, term2: "", term3: "" },
                Language_Arts: { term1: 83, term2: "", term3: "" },
                Mathematics: { term1: 51, term2: "", term3: "" },
                P_H_E: { term1: 55, term2: "", term3: "" },
                Religious_Education: { term1: 60, term2: "", term3: "" },
                Social_studies: { term1: 58, term2: "", term3: "" },
                Home_Economics: { term1: 55, term2: "", term3: "" },
                Business_Studies: { term1: 59, term2: "", term3: "" },
                C_P_A: { term1: 73, term2: "", term3: "" },
                Computer_Studies: { term1: 65, term2: "", term3: "" },
            }
        }
    },
    "ZPISS020": {
        password: "9821",
        image: "vibebg5.jpeg",
        details: {
            name: "Blessing K Y Mattia",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Ishmeal Mattia",
            contact: "077 98 21 01",
            remarks: "."
        },
        results: {
            term1Position: 46,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 77, term2: "", term3: "" },
                Language_Arts: { term1: 78, term2: "", term3: "" },
                Mathematics: { term1: 76, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 58, term2: "", term3: "" },
                Social_studies: { term1: 34, term2: "", term3: "" },
                Home_Economics: { term1: 28, term2: "", term3: "" },
                Business_Studies: { term1: 52, term2: "", term3: "" },
                C_P_A: { term1: 64, term2: "", term3: "" },
                Computer_Studies: { term1: 55, term2: "", term3: "" },
            }
        }
    },
     "ZPISS021": {
        password: "8155",
        image: "vibebg5.jpeg",
        details: {
            name: "Fatmata M Bangura",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Musa Bangura",
            contact: "072 81 55 11",
            remarks: "."
        },
        results: {
            term1Position: 48,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 59, term2: "", term3: "" },
                Integrated_Sci: { term1: 45, term2: "", term3: "" },
                Language_Arts: { term1: 73, term2: "", term3: "" },
                Mathematics: { term1: 51, term2: "", term3: "" },
                P_H_E: { term1: 52, term2: "", term3: "" },
                Religious_Education: { term1: 68, term2: "", term3: "" },
                Social_studies: { term1: 56, term2: "", term3: "" },
                Home_Economics: { term1: 55, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 70, term2: "", term3: "" },
                Computer_Studies: { term1: 65, term2: "", term3: "" },
            }
        }
    },
    "ZPISS022": {
        password: "7759",
        image: "vibebg5.jpeg",
        details: {
            name: "Daniella G Pratt",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Oliver Pratt",
            contact: "030 77 59 30",
            remarks: "."
        },
        results: {
            term1Position: 27,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 73, term2: "", term3: "" },
                Integrated_Sci: { term1: 87, term2: "", term3: "" },
                Language_Arts: { term1: 72, term2: "", term3: "" },
                Mathematics: { term1: 70, term2: "", term3: "" },
                P_H_E: { term1: 54, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 72, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 76, term2: "", term3: "" },
                Computer_Studies: { term1: 60, term2: "", term3: "" },
            }
        }
    },
    "ZPISS023": {
        password: "7640",
        image: "vibebg5.jpeg",
        details: {
            name: "Isata K Conteh",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Momoh",
            contact: "076 61 40 51",
            remarks: "."
        },
        results: {
            term1Position: 30,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 55, term2: "", term3: "" },
                Integrated_Sci: { term1: 84, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 62, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1:80 , term2: "", term3: "" },
                Social_studies: { term1: 72, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 66, term2: "", term3: "" },
                Computer_Studies: { term1: 72, term2: "", term3: "" },
            }
        }
    },
    "ZPISS024": {
        password: "6436",
        image: "vibebg5.jpeg",
        details: {
            name: "elizabeth R Tarawally",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Mabinty Tarawally",
            contact: "080 64 36 56",
            remarks: "."
        },
        results: {
            term1Position: 34,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 58, term2: "", term3: "" },
                Integrated_Sci: { term1: 54, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 52, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 81, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 57, term2: "", term3: "" },
                C_P_A: { term1: 870, term2: "", term3: "" },
                Computer_Studies: { term1: 80, term2: "", term3: "" },
            }
        }
    },
    "ZPISS025": {
        password: "9913",
        image: "vibebg5.jpeg",
        details: {
            name: "Kadija M Convay",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Rugiatu Bangura",
            contact: "088 99 13 80",
            remarks: "."
        },
        results: {
            term1Position: 51,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 40, term2: "", term3: "" },
                Integrated_Sci: { term1: 45, term2: "", term3: "" },
                Language_Arts: { term1: 90, term2: "", term3: "" },
                Mathematics: { term1: 73, term2: "", term3: "" },
                P_H_E: { term1: 34, term2: "", term3: "" },
                Religious_Education: { term1: 70, term2: "", term3: "" },
                Social_studies: { term1: 38, term2: "", term3: "" },
                Home_Economics: { term1: 37, term2: "", term3: "" },
                Business_Studies: { term1: 63, term2: "", term3: "" },
                C_P_A: { term1: 38, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
            }
        }
    },
    "ZPISS026": {
        password: "1303",
        image: "vibebg5.jpeg",
        details: {
            name: "Makalay H Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Mariama Lenoh",
            contact: "030 13 03 45",
            remarks: "."
        },
        results: {
            term1Position: 23,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 63, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 59, term2: "", term3: "" },
                P_H_E: { term1: 55, term2: "", term3: "" },
                Religious_Education: { term1: 70, term2: "", term3: "" },
                Social_studies: { term1: 73, term2: "", term3: "" },
                Home_Economics: { term1: 65, term2: "", term3: "" },
                Business_Studies: { term1: 70, term2: "", term3: "" },
                C_P_A: { term1: 74, term2: "", term3: "" },
                Computer_Studies: { term1: 85, term2: "", term3: "" },
            }
        }
    },
    "ZPISS027": {
        password: "6019",
        image: "vibebg5.jpeg",
        details: {
            name: "Zainab B Kamara",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Ramatu Sesay",
            contact: "078 60 19 23",
            remarks: "."
        },
        results: {
            term1Position: 16,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 80, term2: "", term3: "" },
                Language_Arts: { term1: 93, term2: "", term3: "" },
                Mathematics: { term1: 66, term2: "", term3: "" },
                P_H_E: { term1: 65, term2: "", term3: "" },
                Religious_Education: { term1: 78, term2: "", term3: "" },
                Social_studies: { term1: 72, term2: "", term3: "" },
                Home_Economics: { term1: 65, term2: "", term3: "" },
                Business_Studies: { term1: 84, term2: "", term3: "" },
                C_P_A: { term1: 73, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS028": {
        password: "8106",
        image: "vibebg5.jpeg",
        details: {
            name: "Alimatu A Bah",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alpha Bah",
            contact: "076 81 06 98",
            remarks: "."
        },
        results: {
            term1Position: 23,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 65, term2: "", term3: "" },
                Integrated_Sci: { term1: 84, term2: "", term3: "" },
                Language_Arts: { term1: 95, term2: "", term3: "" },
                Mathematics: { term1: 69, term2: "", term3: "" },
                P_H_E: { term1: 52, term2: "", term3: "" },
                Religious_Education: { term1: 73, term2: "", term3: "" },
                Social_studies: { term1: 75, term2: "", term3: "" },
                Home_Economics: { term1: 70, term2: "", term3: "" },
                Business_Studies: { term1: 25, term2: "", term3: "" },
                C_P_A: { term1: 64, term2: "", term3: "" },
                Computer_Studies: { term1: 97, term2: "", term3: "" },
            }
        }
    },
    "ZPISS029": {
        password: "5481",
        image: "vibebg5.jpeg",
        details: {
            name: "Hajaratu Kamara",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Abdul Kamara",
            contact: "077 54 81 70",
            remarks: "."
        },
        results: {
            term1Position: 19,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 70, term2: "", term3: "" },
                Integrated_Sci: { term1: 72, term2: "", term3: "" },
                Language_Arts: { term1: 82, term2: "", term3: "" },
                Mathematics: { term1: 52, term2: "", term3: "" },
                P_H_E: { term1: 53, term2: "", term3: "" },
                Religious_Education: { term1: 78, term2: "", term3: "" },
                Social_studies: { term1: 71, term2: "", term3: "" },
                Home_Economics: { term1: 85, term2: "", term3: "" },
                Business_Studies: { term1: 83, term2: "", term3: "" },
                C_P_A: { term1: 55, term2: "", term3: "" },
                Computer_Studies: { term1: 90, term2: "", term3: "" },
            }
        }
    },
    "ZPISS030": {
        password: "4840",
        image: "vibebg5.jpeg",
        details: {
            name: "Suhad Conteh",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alimamy Conteh ",
            contact: "030 48 40 19",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Agricultural_Sci: { term1: 65, term2: "", term3: "" },
                Integrated_Sci: { term1: 54, term2: "", term3: "" },
                Language_Arts: { term1: 69, term2: "", term3: "" },
                Mathematics: { term1: 54, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 73, term2: "", term3: "" },
                Social_studies: { term1: 67, term2: "", term3: "" },
                Home_Economics: { term1: 53, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 73, term2: "", term3: "" },
                Computer_Studies: { term1: 72, term2: "", term3: "" },
            }
        }
    },
    "ZPISS031": {
        password: "2310",
        image: "vibebg5.jpeg",
        details: {
            name: "Dorabell G Kamara",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Anet Koroma",
            contact: "077 23 10 32",
            remarks: "."
        },
        results: {
            term1Position: 32,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 76, term2: "", term3: "" },
                Language_Arts: { term1: 95, term2: "", term3: "" },
                Mathematics: { term1: 65, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 80, term2: "", term3: "" },
                Social_studies: { term1: 78, term2: "", term3: "" },
                Home_Economics: { term1: 53, term2: "", term3: "" },
                Business_Studies: { term1: 53, term2: "", term3: "" },
                C_P_A: { term1: 76, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
            }
        }
    },
    "ZPISS032": {
        password: "6132",
        image: "vibebg5.jpeg",
        details: {
            name: "Aminata Y Jabbie",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Salieu Jabbie",
            contact: "077 61 32 15",
            remarks: "."
        },
        results: {
            term1Position: 34,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 46, term2: "", term3: "" },
                Language_Arts: { term1: 73, term2: "", term3: "" },
                Mathematics: { term1: 60, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 72, term2: "", term3: "" },
                Home_Economics: { term1: 68, term2: "", term3: "" },
                Business_Studies: { term1: 55, term2: "", term3: "" },
                C_P_A: { term1: 75, term2: "", term3: "" },
                Computer_Studies: { term1: 93, term2: "", term3: "" },
            }
        }
    },
    "ZPISS033": {
        password: "9877",
        image: "vibebg5.jpeg",
        details: {
            name: "Mary Baimba",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Baimba",
            contact: "032 98 77 24",
            remarks: "."
        },
        results: {
            term1Position: 17,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 70, term2: "", term3: "" },
                Integrated_Sci: { term1: 78, term2: "", term3: "" },
                Language_Arts: { term1: 90, term2: "", term3: "" },
                Mathematics: { term1: 68, term2: "", term3: "" },
                P_H_E: { term1: 59, term2: "", term3: "" },
                Religious_Education: { term1: 75, term2: "", term3: "" },
                Social_studies: { term1: 87, term2: "", term3: "" },
                Home_Economics: { term1: 80, term2: "", term3: "" },
                Business_Studies: { term1: 30, term2: "", term3: "" },
                C_P_A: { term1: 75, term2: "", term3: "" },
                Computer_Studies: { term1: 83, term2: "", term3: "" },
            }
        }
    },
    "ZPISS037": {
        password: "3437",
        image: "vibebg5.jpeg",
        details: {
            name: "Isatu I Yansaneh",
            class: "JSS 1",
            age: 13,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Yansaneh",
            contact: "077 343 771 ",
            remarks: "."
        },
        results: {
            term1Position: 26,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 60, term2: "", term3: "" },
                Integrated_Sci: { term1: 72, term2: "", term3: "" },
                Language_Arts: { term1: 89, term2: "", term3: "" },
                Mathematics: { term1: 49, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 83, term2: "", term3: "" },
                Social_studies: { term1: 68, term2: "", term3: "" },
                Home_Economics: { term1: 74, term2: "", term3: "" },
                Business_Studies: { term1: 63, term2: "", term3: "" },
                C_P_A: { term1: 77, term2: "", term3: "" },
                Computer_Studies: { term1: 75, term2: "", term3: "" },
            }
        }
    },

    // jss 1 boys
    "ZPISS034": {
        password: "4058",
        image: "vibebg5.jpeg",
        details: {
            name: "Mohamed Feika",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Feika",
            contact: "078 40 58 54",
            remarks: "."
        },
        results: {
            term1Position: 14,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 58, term2: "", term3: "" },
                Integrated_Sci: { term1: 90, term2: "", term3: "" },
                Language_Arts: { term1: 90, term2: "", term3: "" },
                Mathematics: { term1: 83, term2: "", term3: "" },
                P_H_E: { term1: 63, term2: "", term3: "" },
                Religious_Education: { term1: 73, term2: "", term3: "" },
                Social_studies: { term1: 62, term2: "", term3: "" },
                Home_Economics: { term1: 79, term2: "", term3: "" },
                Business_Studies: { term1: 86, term2: "", term3: "" },
                C_P_A: { term1: 74, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS035": {
        password: "8178",
        image: "vibebg5.jpeg",
        details: {
            name: "Josephus P Kanu",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Joseph Kanu",
            contact: "076 817 801",
            remarks: "."
        },
        results: {
            term1Position: 1,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 93, term2: "", term3: "" },
                Integrated_Sci: { term1: 99, term2: "", term3: "" },
                Language_Arts: { term1: 100, term2: "", term3: "" },
                Mathematics: { term1: 99, term2: "", term3: "" },
                P_H_E: { term1: 87, term2: "", term3: "" },
                Religious_Education: { term1: 83, term2: "", term3: "" },
                Social_studies: { term1: 93, term2: "", term3: "" },
                Home_Economics: { term1: 93, term2: "", term3: "" },
                Business_Studies: { term1: 97, term2: "", term3: "" },
                C_P_A: { term1: 93, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS036": {
        password: "1729",
        image: "vibebg5.jpeg",
        details: {
            name: "Mohamed M Konneh",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Konneh",
            contact: "031 729 101",
            remarks: "."
        },
        results: {
            term1Position: 28,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 60, term2: "", term3: "" },
                Integrated_Sci: { term1: 50, term2: "", term3: "" },
                Language_Arts: { term1: 75, term2: "", term3: "" },
                Mathematics: { term1: 61, term2: "", term3: "" },
                P_H_E: { term1: 55, term2: "", term3: "" },
                Religious_Education: { term1: 75, term2: "", term3: "" },
                Social_studies: { term1: 78, term2: "", term3: "" },
                Home_Economics: { term1: 60, term2: "", term3: "" },
                Business_Studies: { term1: 63, term2: "", term3: "" },
                C_P_A: { term1: 83, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },


    //jss 2 girls
    "ZPISS040": {
        password: "6132",
        image: "vibebg5.jpeg",
        details: {
            name: "Samuella Kamara",
            class: "JSS 2",
            age: 12,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Kadiatu Sesay",
            contact: "077 61 32 15",
            remarks: "."
        },
        results: {
            term1Position: 28,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 60, term2: "", term3: "" },
                Integrated_Sci: { term1: 88, term2: "", term3: "" },
                Language_Arts: { term1: 60, term2: "", term3: "" },
                Mathematics: { term1: 65, term2: "", term3: "" },
                P_H_E: { term1: 52, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 67, term2: "", term3: "" },
                Home_Economics: { term1: 55, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 43, term2: "", term3: "" },
                Computer_Studies: { term1: 60, term2: "", term3: "" },
            }
        }
    },
    "ZPISS041": {
        password: "8027",
        image: "vibebg5.jpeg",
        details: {
            name: "Kadiatu K Sankoh",
            class: "JSS 2",
            age: 12,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Amie Kallon",
            contact: "031 80 27 52",
            remarks: "."
        },
        results: {
            term1Position: 16,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 77, term2: "", term3: "" },
                Integrated_Sci: { term1: 90, term2: "", term3: "" },
                Language_Arts: { term1: 60, term2: "", term3: "" },
                Mathematics: { term1: 68, term2: "", term3: "" },
                P_H_E: { term1: 80, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 85, term2: "", term3: "" },
                Home_Economics: { term1: 60, term2: "", term3: "" },
                Business_Studies: { term1: 91, term2: "", term3: "" },
                C_P_A: { term1: 42, term2: "", term3: "" },
                Computer_Studies: { term1: 72, term2: "", term3: "" },
            }
        }
    },
    "ZPISS042": {
        password: "3894",
        image: "vibebg5.jpeg",
        details: {
            name: "Humu Rashidatu Dainkeh",
            class: "JSS 2",
            age: 11,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Karim Dainkeh",
            contact: "030 389 481",
            remarks: "."
        },
        results: {
            term1Position: 7,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 78, term2: "", term3: "" },
                Integrated_Sci: { term1: 96, term2: "", term3: "" },
                Language_Arts: { term1: 63, term2: "", term3: "" },
                Mathematics: { term1: 81, term2: "", term3: "" },
                P_H_E: { term1: 77, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 76, term2: "", term3: "" },
                Home_Economics: { term1: 98, term2: "", term3: "" },
                Business_Studies: { term1: 84, term2: "", term3: "" },
                C_P_A: { term1: 40, term2: "", term3: "" },
                Computer_Studies: { term1: 97, term2: "", term3: "" },
            }
        }
    },
    "ZPISS043": {
        password: "1763",
        image: "vibebg5.jpeg",
        details: {
            name: "Oliver D K Mansaray",
            class: "JSS 2",
            age: 13,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Daniel Mansaray",
            contact: "030 17 63 86",
            remarks: "."
        },
        results: {
            term1Position: 20,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 60, term2: "", term3: "" },
                Integrated_Sci: { term1: 95, term2: "", term3: "" },
                Language_Arts: { term1: 60, term2: "", term3: "" },
                Mathematics: { term1: 84, term2: "", term3: "" },
                P_H_E: { term1: 54, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 76, term2: "", term3: "" },
                Home_Economics: { term1: 54, term2: "", term3: "" },
                Business_Studies: { term1: 55, term2: "", term3: "" },
                C_P_A: { term1: 34, term2: "", term3: "" },
                Computer_Studies: { term1: 85, term2: "", term3: "" },
            }
        }
    },
    "ZPISS044": {
        password: "6321",
        image: "vibebg5.jpeg",
        details: {
            name: "Haja M B A Conteh",
            class: "JSS 2",
            age: 11,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Alimamay Conteh",
            contact: "088 63 21 43",
            remarks: "."
        },
        results: {
            term1Position: 15,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 98, term2: "", term3: "" },
                Integrated_Sci: { term1: 95, term2: "", term3: "" },
                Language_Arts: { term1: 55, term2: "", term3: "" },
                Mathematics: { term1: 82, term2: "", term3: "" },
                P_H_E: { term1: 65, term2: "", term3: "" },
                Religious_Education: { term1: 48, term2: "", term3: "" },
                Social_studies: { term1: 81, term2: "", term3: "" },
                Home_Economics: { term1: 83, term2: "", term3: "" },
                Business_Studies: { term1: 78, term2: "", term3: "" },
                C_P_A: { term1: 40, term2: "", term3: "" },
                Computer_Studies: { term1: 80, term2: "", term3: "" },
            }
        }
    },
    "ZPISS045": {
        password: "8811",
        image: "vibebg5.jpeg",
        details: {
            name: "Fatima Karim Kargbo",
            class: "JSS 2",
            age: 14,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Abdul Karim Kargbo",
            contact: "076 88 11 47",
            remarks: "."
        },
        results: {
            term1Position: 19,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 100, term2: "", term3: "" },
                Integrated_Sci: { term1: 84, term2: "", term3: "" },
                Language_Arts: { term1: 48, term2: "", term3: "" },
                Mathematics: { term1: 82, term2: "", term3: "" },
                P_H_E: { term1: 66, term2: "", term3: "" },
                Religious_Education: { term1: 58, term2: "", term3: "" },
                Social_studies: { term1: 76, term2: "", term3: "" },
                Home_Economics: { term1: 75, term2: "", term3: "" },
                Business_Studies: { term1: 62, term2: "", term3: "" },
                C_P_A: { term1: 46, term2: "", term3: "" },
                Computer_Studies: { term1: 70, term2: "", term3: "" },
            }
        }
    },
    "ZPISS046": {
        password: "3701",
        image: "vibebg5.jpeg",
        details: {
            name: "Joseph A Mungu",
            class: "JSS 2",
            age: 12,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Fayia",
            contact: "088 37 0111",
            remarks: "."
        },
        results: {
            term1Position: 23,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 65, term2: "", term3: "" },
                Integrated_Sci: { term1: 88, term2: "", term3: "" },
                Language_Arts: { term1: 75, term2: "", term3: "" },
                Mathematics: { term1: 74, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 58, term2: "", term3: "" },
                Social_studies: { term1: 79, term2: "", term3: "" },
                Home_Economics: { term1: 63, term2: "", term3: "" },
                Business_Studies: { term1: 55, term2: "", term3: "" },
                C_P_A: { term1: 41, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
            }
        }
    },
    "ZPISS047": {
        password: "8245",
        image: "vibebg5.jpeg",
        details: {
            name: "Abdul Razak Kargbo",
            class: "JSS 2",
            age: 13,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Karim Kargbo",
            contact: "076 82 45 53",
            remarks: "."
        },
        results: {
            term1Position: 1,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 100, term2: "", term3: "" },
                Integrated_Sci: { term1: 99, term2: "", term3: "" },
                Language_Arts: { term1: 88, term2: "", term3: "" },
                Mathematics: { term1: 99, term2: "", term3: "" },
                P_H_E: { term1: 95, term2: "", term3: "" },
                Religious_Education: { term1: 95, term2: "", term3: "" },
                Social_studies: { term1: 100, term2: "", term3: "" },
                Home_Economics: { term1: 100, term2: "", term3: "" },
                Business_Studies: { term1: 95, term2: "", term3: "" },
                C_P_A: { term1: 44, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS048": {
        password: "5921",
        image: "vibebg5.jpeg",
        details: {
            name: "Alimamy M Bangura",
            class: "JSS 2",
            age: 11,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Abu Bakarr Bangura",
            contact: "030 592113",
            remarks: "."
        },
        results: {
            term1Position: 9,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 82, term2: "", term3: "" },
                Language_Arts: { term1: 58, term2: "", term3: "" },
                Mathematics: { term1: 81, term2: "", term3: "" },
                P_H_E: { term1: 69, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 84, term2: "", term3: "" },
                Home_Economics: { term1: 85, term2: "", term3: "" },
                Business_Studies: { term1: 91, term2: "", term3: "" },
                C_P_A: { term1: 45, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS049": {
        password: "2843",
        image: "vibebg5.jpeg",
        details: {
            name: "Mohamed Daboh",
            class: "JSS 2",
            age: 12,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Osinatu Saccoh",
            contact: "076 284 322",
            remarks: "."
        },
        results: {
            term1Position: 5,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 85, term2: "", term3: "" },
                Integrated_Sci: { term1: 95, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 90, term2: "", term3: "" },
                P_H_E: { term1: 75, term2: "", term3: "" },
                Religious_Education: { term1: 80, term2: "", term3: "" },
                Social_studies: { term1: 86, term2: "", term3: "" },
                Home_Economics: { term1: 88, term2: "", term3: "" },
                Business_Studies: { term1: 82, term2: "", term3: "" },
                C_P_A: { term1: 43, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS050": {
        password: "7195",
        image: "vibebg5.jpeg",
        details: {
            name: "Alieu S Kamara",
            class: "JSS 2",
            age: 14,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Suba Kamara",
            contact: "077 71 95 92",
            remarks: "."
        },
        results: {
            term1Position: 21,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 95, term2: "", term3: "" },
                Integrated_Sci: { term1: 65, term2: "", term3: "" },
                Language_Arts: { term1: 48, term2: "", term3: "" },
                Mathematics: { term1: 54, term2: "", term3: "" },
                P_H_E: { term1: 72, term2: "", term3: "" },
                Religious_Education: { term1: 48, term2: "", term3: "" },
                Social_studies: { term1: 76, term2: "", term3: "" },
                Home_Economics: { term1: 70, term2: "", term3: "" },
                Business_Studies: { term1: 68, term2: "", term3: "" },
                C_P_A: { term1: 47, term2: "", term3: "" },
                Computer_Studies: { term1: 76, term2: "", term3: "" },
            }
        }
    },
    "ZPISS051": {
        password: "6170",
        image: "vibebg5.jpeg",
        details: {
            name: "Mohamed K Fawundu",
            class: "JSS 2",
            age: 13,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Fawundu",
            contact: "099 61 70 33",
            remarks: "."
        },
        results: {
            term1Position: 22,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 85, term2: "", term3: "" },
                Integrated_Sci: { term1: 75, term2: "", term3: "" },
                Language_Arts: { term1: 37, term2: "", term3: "" },
                Mathematics: { term1: 66, term2: "", term3: "" },
                P_H_E: { term1: 66, term2: "", term3: "" },
                Religious_Education: { term1: 68, term2: "", term3: "" },
                Social_studies: { term1: 74, term2: "", term3: "" },
                Home_Economics: { term1: 55, term2: "", term3: "" },
                Business_Studies: { term1: 55, term2: "", term3: "" },
                C_P_A: { term1: 45, term2: "", term3: "" },
                Computer_Studies: { term1: 75, term2: "", term3: "" },
            }
        }
    },
    "ZPISS052": {
        password: "9818",
        image: "vibebg5.jpeg",
        details: {
            name: "Alim B Sesay",
            class: "JSS 2",
            age: 12,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Kadija Sesay",
            contact: "034 98 18 98",
            remarks: "."
        },
        results: {
            term1Position: 3,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 100, term2: "", term3: "" },
                Integrated_Sci: { term1: 97, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 87, term2: "", term3: "" },
                P_H_E: { term1: 70, term2: "", term3: "" },
                Religious_Education: { term1: 95, term2: "", term3: "" },
                Social_studies: { term1: 98, term2: "", term3: "" },
                Home_Economics: { term1: 100, term2: "", term3: "" },
                Business_Studies: { term1: 92, term2: "", term3: "" },
                C_P_A: { term1: 37, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS053": {
        password: "3490",
        image: "vibebg5.jpeg",
        details: {
            name: "Ibrahim T Tholley",
            class: "JSS 2",
            age: 11,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Kadiatu Tholley",
            contact: "077 34 90 61",
            remarks: "."
        },
        results: {
            term1Position: 8,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 92, term2: "", term3: "" },
                Integrated_Sci: { term1: 91, term2: "", term3: "" },
                Language_Arts: { term1: 97, term2: "", term3: "" },
                Mathematics: { term1: 89, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 88, term2: "", term3: "" },
                Social_studies: { term1: 40, term2: "", term3: "" },
                Home_Economics: { term1: 85, term2: "", term3: "" },
                Business_Studies: { term1: 86, term2: "", term3: "" },
                C_P_A: { term1: 43, term2: "", term3: "" },
                Computer_Studies: { term1: 90, term2: "", term3: "" },
            }
        }
    },
    "ZPISS054": {
        password: "3523",
        image: "vibebg5.jpeg",
        details: {
            name: "Ezekeil F Kuyateh",
            class: "JSS 2",
            age: 13,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Tina Kanu",
            contact: "030 35 23 63",
            remarks: "."
        },
        results: {
            term1Position: 10,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 100, term2: "", term3: "" },
                Integrated_Sci: { term1: 85, term2: "", term3: "" },
                Language_Arts: { term1: 55, term2: "", term3: "" },
                Mathematics: { term1: 74, term2: "", term3: "" },
                P_H_E: { term1: 63, term2: "", term3: "" },
                Religious_Education: { term1: 68, term2: "", term3: "" },
                Social_studies: { term1: 75, term2: "", term3: "" },
                Home_Economics: { term1: 93, term2: "", term3: "" },
                Business_Studies: { term1: 81, term2: "", term3: "" },
                C_P_A: { term1: 34, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS055": {
        password: "0600",
        image: "vibebg5.jpeg",
        details: {
            name: "Zakaria A Bundu",
            class: "JSS 1",
            age: 11,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Elfrida Bundu",
            contact: "031 06 00 80",
            remarks: "."
        },
        results: {
            term1Position: 39,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 46, term2: "", term3: "" },
                Language_Arts: { term1: 83, term2: "", term3: "" },
                Mathematics: { term1: 77, term2: "", term3: "" },
                P_H_E: { term1: 51, term2: "", term3: "" },
                Religious_Education: { term1: 68, term2: "", term3: "" },
                Social_studies: { term1: 66, term2: "", term3: "" },
                Home_Economics: { term1: 68, term2: "", term3: "" },
                Business_Studies: { term1: 67, term2: "", term3: "" },
                C_P_A: { term1: 64, term2: "", term3: "" },
                Computer_Studies: { term1: 53, term2: "", term3: "" },
            }
        }
    },
    "ZPISS056": {
        password: "4000",
        image: "vibebg5.jpeg",
        details: {
            name: "Alie Kamara",
            class: "JSS 2",
            age: 13,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Alie Kamara",
            contact: "099 40 00 64",
            remarks: "."
        },
        results: {
            term1Position: 21,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 61, term2: "", term3: "" },
                Language_Arts: { term1: 48, term2: "", term3: "" },
                Mathematics: { term1: 54, term2: "", term3: "" },
                P_H_E: { term1: 72, term2: "", term3: "" },
                Religious_Education: { term1: 48, term2: "", term3: "" },
                Social_studies: { term1: 76, term2: "", term3: "" },
                Home_Economics: { term1: 70, term2: "", term3: "" },
                Business_Studies: { term1: 68, term2: "", term3: "" },
                C_P_A: { term1: 47, term2: "", term3: "" },
                Computer_Studies: { term1: 76, term2: "", term3: "" },
            }
        }
    },
    "ZPISS057": {
        password: "4583",
        image: "vibebg5.jpeg",
        details: {
            name: "Abdul Sesay",
            class: "JSS 2",
            age: 12,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Fatmata Deen",
            contact: "088 45 83 17",
            remarks: "."
        },
        results: {
            term1Position: 18, 
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 80, term2: "", term3: "" },
                Integrated_Sci: { term1: 85, term2: "", term3: "" },
                Language_Arts: { term1: 78, term2: "", term3: "" },
                Mathematics: { term1: 67, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 63, term2: "", term3: "" },
                Social_studies: { term1: 79, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 74, term2: "", term3: "" },
                C_P_A: { term1: 39, term2: "", term3: "" },
                Computer_Studies: { term1: 82, term2: "", term3: "" },
            }
        }
    },
    "ZPISS058": {
        password: "6670",
        image: "vibebg5.jpeg",
        details: {
            name: "Kadiatu G Turay",
            class: "JSS 2",
            age: 15,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Gbassay bangura",
            contact: "077 66 70 12",
            remarks: "."
        },
        results: {
            term1Position: 27,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 55, term2: "", term3: "" },
                Integrated_Sci: { term1: 85, term2: "", term3: "" },
                Language_Arts: { term1: 40, term2: "", term3: "" },
                Mathematics: { term1: 54, term2: "", term3: "" },
                P_H_E: { term1: 52, term2: "", term3: "" },
                Religious_Education: { term1: 60, term2: "", term3: "" },
                Social_studies: { term1: 77, term2: "", term3: "" },
                Home_Economics: { term1: 73, term2: "", term3: "" },
                Business_Studies: { term1: 55, term2: "", term3: "" },
                C_P_A: { term1: 42, term2: "", term3: "" },
                Computer_Studies: { term1: 74, term2: "", term3: "" },
            }
        }
    },
    "ZPISS059": {
        password: "1235",
        image: "vibebg5.jpeg",
        details: {
            name: "Medisha E Kamara",
            class: "JSS 2",
            age: 12,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Mohamed Kamara",
            contact: "088 12 35 50",
            remarks: "."
        },
        results: {
            term1Position: 25,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 78, term2: "", term3: "" },
                Integrated_Sci: { term1: 86, term2: "", term3: "" },
                Language_Arts: { term1: 50, term2: "", term3: "" },
                Mathematics: { term1: 79, term2: "", term3: "" },
                P_H_E: { term1: 51, term2: "", term3: "" },
                Religious_Education: { term1: 50, term2: "", term3: "" },
                Social_studies: { term1: 40, term2: "", term3: "" },
                Home_Economics: { term1: 80, term2: "", term3: "" },
                Business_Studies: { term1: 55, term2: "", term3: "" },
                C_P_A: { term1: 44, term2: "", term3: "" },
                Computer_Studies: { term1: 70, term2: "", term3: "" },
            }
        }
    },
    "ZPISS060": {
        password: "4967",
        image: "vibebg5.jpeg",
        details: {
            name: "Alimatu Kamara",
            class: "JSS 2",
            age: 13,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Mariatu Kamara",
            contact: "088 49 67 45",
            remarks: "."
        },
        results: {
            term1Position: 26,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 95, term2: "", term3: "" },
                Language_Arts: { term1: 38, term2: "", term3: "" },
                Mathematics: { term1: 78, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 35, term2: "", term3: "" },
                Social_studies: { term1: 72, term2: "", term3: "" },
                Home_Economics: { term1: 65, term2: "", term3: "" },
                Business_Studies: { term1: 83, term2: "", term3: "" },
                C_P_A: { term1: 39, term2: "", term3: "" },
                Computer_Studies: { term1: 52, term2: "", term3: "" },
            }
        }
    },
    "ZPISS061": {
        password: "7410",
        image: "vibebg5.jpeg",
        details: {
            name: "Aminata S Massaquoi",
            class: "JSS 2",
            age: 13,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Aminata Kamara",
            contact: "032 74 10 22",
            remarks: "."
        },
        results: {
            term1Position: 12,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 88, term2: "", term3: "" },
                Integrated_Sci: { term1: 85, term2: "", term3: "" },
                Language_Arts: { term1: 58, term2: "", term3: "" },
                Mathematics: { term1: 69, term2: "", term3: "" },
                P_H_E: { term1: 84, term2: "", term3: "" },
                Religious_Education: { term1: 53, term2: "", term3: "" },
                Social_studies: { term1: 79, term2: "", term3: "" },
                Home_Economics: { term1: 83, term2: "", term3: "" },
                Business_Studies: { term1: 80, term2: "", term3: "" },
                C_P_A: { term1: 39, term2: "", term3: "" },
                Computer_Studies: { term1: 99, term2: "", term3: "" },
            }
        }
    },
    "ZPISS062": {
        password: "3109",
        image: "vibebg5.jpeg",
        details: {
            name: "Doreen Victoria Wright",
            class: "JSS 2",
            age: 14,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Juliana Showers",
            contact: "078 310 929",
            remarks: "."
        },
        results: {
            term1Position: 13,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 88, term2: "", term3: "" },
                Integrated_Sci: { term1: 89, term2: "", term3: "" },
                Language_Arts: { term1: 50, term2: "", term3: "" },
                Mathematics: { term1: 82, term2: "", term3: "" },
                P_H_E: { term1: 68, term2: "", term3: "" },
                Religious_Education: { term1: 73, term2: "", term3: "" },
                Social_studies: { term1: 80, term2: "", term3: "" },
                Home_Economics: { term1: 70, term2: "", term3: "" },
                Business_Studies: { term1: 81, term2: "", term3: "" },
                C_P_A: { term1: 46, term2: "", term3: "" },
                Computer_Studies: { term1: 80, term2: "", term3: "" },
            }
        }
    },
    "ZPISS063": {
        password: "8357",
        image: "vibebg5.jpeg",
        details: {
            name: "Evenatu Kargbo",
            class: "JSS 2",
            age: 13,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "Mrs. Esther Massaquoi",
            contact: "077 83 57 88",
            remarks: "."
        },
        results: {
            term1Position: 29,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 73, term2: "", term3: "" },
                Integrated_Sci: { term1: 78, term2: "", term3: "" },
                Language_Arts: { term1: 25, term2: "", term3: "" },
                Mathematics: { term1: 70, term2: "", term3: "" },
                P_H_E: { term1: 25, term2: "", term3: "" },
                Religious_Education: { term1: 25, term2: "", term3: "" },
                Social_studies: { term1: 45, term2: "", term3: "" },
                Home_Economics: { term1: 74, term2: "", term3: "" },
                Business_Studies: { term1: 72, term2: "", term3: "" },
                C_P_A: { term1: 60, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
            }
        }
    },
    "ZPISS064": {
        password: "4368",
        image: "vibebg5.jpeg",
        details: {
            name: "Yakuba D Kamara",
            class: "JSS 2",
            age: 14,
            gender: "Male",
            teacher: "Uncle Ezekiel",
            guardian: "Mr. Dauda Kamara",
            contact: "076 43 68 70",
            remarks: "."
        },
        results: {
            term1Position: 17,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 80, term2: "", term3: "" },
                Integrated_Sci: { term1: 78, term2: "", term3: "" },
                Language_Arts: { term1: 90, term2: "", term3: "" },
                Mathematics: { term1: 50, term2: "", term3: "" },
                P_H_E: { term1: 71, term2: "", term3: "" },
                Religious_Education: { term1: 68, term2: "", term3: "" },
                Social_studies: { term1: 43, term2: "", term3: "" },
                Home_Economics: { term1: 80, term2: "", term3: "" },
                Business_Studies: { term1: 88, term2: "", term3: "" },
                C_P_A: { term1: 35, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS065": {
        password: "6132",
        image: "vibebg5.jpeg",
        details: {
            name: "",
            class: "JSS ",
            age: 14,
            gender: "Female",
            teacher: "Uncle Ezekiel",
            guardian: "",
            contact: "",
            remarks: "."
        },
        results: {
            term1Position: "",
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 68, term2: "", term3: "" },
                Integrated_Sci: { term1: 61, term2: "", term3: "" },
                Language_Arts: { term1: 48, term2: "", term3: "" },
                Mathematics: { term1: 70, term2: "", term3: "" },
                P_H_E: { term1: 51, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 55, term2: "", term3: "" },
                Home_Economics: { term1: 62, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 82, term2: "", term3: "" },
                Computer_Studies: { term1: 50, term2: "", term3: "" },
            }
        }
    },
    "ZPISS066": {
        password: "5739",
        image: "vibebg5.jpeg",
        details: {
            name: "Ibrahim S M Suma",
            class: "JSS 1 ",
            age: 11,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mrs. Kamara",
            contact: "030 57 39 29",
            remarks: "."
        },
        results: {
            term1Position: 20,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 78, term2: "", term3: "" },
                Language_Arts: { term1: 87, term2: "", term3: "" },
                Mathematics: { term1: 73, term2: "", term3: "" },
                P_H_E: { term1: 25, term2: "", term3: "" },
                Religious_Education: { term1: 78, term2: "", term3: "" },
                Social_studies: { term1: 77, term2: "", term3: "" },
                Home_Economics: { term1: 78, term2: "", term3: "" },
                Business_Studies: { term1: 60, term2: "", term3: "" },
                C_P_A: { term1: 74, term2: "", term3: "" },
                Computer_Studies: { term1: 85, term2: "", term3: "" },
            }
        }
    },
    "ZPISS067": {
        password: "3551",
        image: "vibebg5.jpeg",
        details: {
            name: "Mohamed Thoranka",
            class: "JSS 1",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mr. Mohamed Thoranka",
            contact: "077 355 179",
            remarks: "."
        },
        results: {
            term1Position: 37,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 55, term2: "", term3: "" },
                Integrated_Sci: { term1: 69, term2: "", term3: "" },
                Language_Arts: { term1: 78, term2: "", term3: "" },
                Mathematics: { term1: 61, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 68, term2: "", term3: "" },
                Social_studies: { term1: 68, term2: "", term3: "" },
                Home_Economics: { term1: 58, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 81, term2: "", term3: "" },
                Computer_Studies: { term1: 75, term2: "", term3: "" },
            }
        }
    },
    "ZPISS068": {
        password: "6524",
        image: "vibebg5.jpeg",
        details: {
            name: "Tommy Ray James",
            class: "JSS 1",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mr. Ray James",
            contact: "077 65 24 69",
            remarks: "."
        },
        results: {
            term1Position: 4,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 78, term2: "", term3: "" },
                Integrated_Sci: { term1: 97, term2: "", term3: "" },
                Language_Arts: { term1: 100, term2: "", term3: "" },
                Mathematics: { term1: 91, term2: "", term3: "" },
                P_H_E: { term1: 77, term2: "", term3: "" },
                Religious_Education: { term1: 75, term2: "", term3: "" },
                Social_studies: { term1: 81, term2: "", term3: "" },
                Home_Economics: { term1: 88, term2: "", term3: "" },
                Business_Studies: { term1: 91, term2: "", term3: "" },
                C_P_A: { term1: 86, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS069": {
        password: "0785",
        image: "vibebg5.jpeg",
        details: {
            name: "Samuel S Conteh",
            class: "JSS 1 ",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mrs Isatu Sesay",
            contact: "078 57 30 27",
            remarks: "."
        },
        results: {
            term1Position: 29,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 70, term2: "", term3: "" },
                Integrated_Sci: { term1: 52, term2: "", term3: "" },
                Language_Arts: { term1: 90, term2: "", term3: "" },
                Mathematics: { term1: 54, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 65, term2: "", term3: "" },
                Social_studies: { term1: 78, term2: "", term3: "" },
                Home_Economics: { term1: 80, term2: "", term3: "" },
                Business_Studies: { term1: 70, term2: "", term3: "" },
                C_P_A: { term1: 73, term2: "", term3: "" },
                Computer_Studies: { term1: 70, term2: "", term3: "" },
            }
        }
    },
    "ZPISS070": {
        password: "6633",
        image: "vibebg5.jpeg",
        details: {
            name: "Daniel S Fayia",
            class: "JSS 1",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mr. Amadu fayia",
            contact: "076 663 326",
            remarks: "."
        },
        results: {
            term1Position: 10,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 80, term2: "", term3: "" },
                Integrated_Sci: { term1: 92, term2: "", term3: "" },
                Language_Arts: { term1: 99, term2: "", term3: "" },
                Mathematics: { term1: 93, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 83, term2: "", term3: "" },
                Social_studies: { term1: 76, term2: "", term3: "" },
                Home_Economics: { term1: 65, term2: "", term3: "" },
                Business_Studies: { term1: 67, term2: "", term3: "" },
                C_P_A: { term1: 78, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS071": {
        password: "9990",
        image: "vibebg5.jpeg",
        details: {
            name: "Abdul Rahman Kamara",
            class: "JSS 1",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mr. Alhassan Kamara",
            contact: "",
            remarks: "."
        },
        results: {
            term1Position: 21,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 60, term2: "", term3: "" },
                Integrated_Sci: { term1: 61, term2: "", term3: "" },
                Language_Arts: { term1: 80, term2: "", term3: "" },
                Mathematics: { term1: 94, term2: "", term3: "" },
                P_H_E: { term1: 57, term2: "", term3: "" },
                Religious_Education: { term1: 83, term2: "", term3: "" },
                Social_studies: { term1: 75, term2: "", term3: "" },
                Home_Economics: { term1: 54, term2: "", term3: "" },
                Business_Studies: { term1: 51, term2: "", term3: "" },
                C_P_A: { term1: 81, term2: "", term3: "" },
                Computer_Studies: { term1: 90, term2: "", term3: "" },
            }
        }
    },
    "ZPISS072": {
        password: "9475",
        image: "vibebg5.jpeg",
        details: {
            name: "Rycourt D Shyllon",
            class: "JSS 1",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mrs. Matha Musa",
            contact: "076 94 755 82",
            remarks: "."
        },
        results: {
            term1Position: 11,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 75, term2: "", term3: "" },
                Integrated_Sci: { term1: 60, term2: "", term3: "" },
                Language_Arts: { term1: 98, term2: "", term3: "" },
                Mathematics: { term1: 52, term2: "", term3: "" },
                P_H_E: { term1: 73, term2: "", term3: "" },
                Religious_Education: { term1: 85, term2: "", term3: "" },
                Social_studies: { term1: 69, term2: "", term3: "" },
                Home_Economics: { term1: 98, term2: "", term3: "" },
                Business_Studies: { term1: 80, term2: "", term3: "" },
                C_P_A: { term1: 78, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS073": {
        password: "2463",
        image: "vibebg5.jpeg",
        details: {
            name: "Abubakarr S Mansaray",
            class: "JSS 1",
            age: 12,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mr. Sheka Mansaray",
            contact: "077 24 63 90",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 83, term2: "", term3: "" },
                Integrated_Sci: { term1: 96, term2: "", term3: "" },
                Language_Arts: { term1: 98, term2: "", term3: "" },
                Mathematics: { term1: 92, term2: "", term3: "" },
                P_H_E: { term1: 73, term2: "", term3: "" },
                Religious_Education: { term1: 100, term2: "", term3: "" },
                Social_studies: { term1: 84, term2: "", term3: "" },
                Home_Economics: { term1: 83, term2: "", term3: "" },
                Business_Studies: { term1: 93, term2: "", term3: "" },
                C_P_A: { term1: 75, term2: "", term3: "" },
                Computer_Studies: { term1: 95, term2: "", term3: "" },
            }
        }
    },
    "ZPISS074": {
        password: "0126",
        image: "vibebg5.jpeg",
        details: {
            name: "Ridwaan S Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Male",
            teacher: "Aunty Jane",
            guardian: "Mrs Aminata Sherrif",
            contact: "030 012 643",
            remarks: "."
        },
        results: {
            term1Position: 49,
            term2Position: "",
            term3Position: "",
            subjects: {
                Agricultural_Sci: { term1: 60, term2: "", term3: "" },
                Integrated_Sci: { term1: 65, term2: "", term3: "" },
                Language_Arts: { term1: 58, term2: "", term3: "" },
                Mathematics: { term1: 70, term2: "", term3: "" },
                P_H_E: { term1: 50, term2: "", term3: "" },
                Religious_Education: { term1: 40, term2: "", term3: "" },
                Social_studies: { term1: 55, term2: "", term3: "" },
                Home_Economics: { term1: 50, term2: "", term3: "" },
                Business_Studies: { term1: 50, term2: "", term3: "" },
                C_P_A: { term1: 72, term2: "", term3: "" },
                Computer_Studies: { term1: 63, term2: "", term3: "" },
            }
        }
    },
   











    

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