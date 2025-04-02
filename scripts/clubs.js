
function writeClubs() {
  var clubsRef = db.collection("clubs")

  clubsRef.add({
    code: "ACICC01",
    name: "American Concrete Institute Chapter Club",
    email: "bcitacichapter@gmail.com",
    details: "The ACI Chapter is a club for students passionate about concrete technology. Through this club, students can participate in social events, field trips, and informational sessions. The highlight of the BCIT ACI Chapter is the annual ACI Student Competition. Each year students engage in a challenge with different concrete design requirements. The competition is held in a different city each year. Competitions include Eco Concrete, FRC Bowling Ball Design, and Mortar Workability. With a different competition each year, members gain an opportunity to try varying disciplines while advancing career-applicable skills. The chapter has been awarded Outstanding University by the American Concrete Institute for 2017, 2016, 2015, 2012, 2011, and 2010.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "ASC02",
    name: "ASCM Student Chapter",
    email: "bcitaschapter@gmail.com",
    details: "The ASCM Student Chapter is a student-run organization with members from the two-year Business Operations Management Diploma program. ASCM stands for “Association of Supply Chain Management.”",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });


    clubsRef.add({
    code: "ACC03",
    name: "Architectural Connections Club",
    email: "archconnections.bcit@gmail.com",
    details: "The purpose of this club is to foster connections for the students interested in architecture at. Connections between classmates, connections between the diploma and degree architectural programs, connections between students and educators, connections between education and the industry, and connections between past students (alumni) and current students. This organization is a stepping stone in giving students a voice to organize events, improve their education and, a greater sense of unity in the architectural programs to create a legacy for future architectural students.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BAAC04",
    name: "BCIT Accounting Association",
    email: "accountingassociation.bcit@gmail.com",
    details: "We are a BCIT student-run club that organizes networking events for accounting students. Our mission is to be a representative for financial management students exploring networking opportunities in the accounting and finance industries. Have you ever wondered what it would be like to be a real financial professional? Well, instead of waiting until after you’ve graduated to get a taste of the accounting or finance industry, we have made it our goal to get students involved now!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BAC05",
    name: "BCIT Anime Club",
    email: "animeclubbcit@gmail.com",
    details: "Started in 2013, the club’s objective was to bring fans of anime and manga in BCIT together, whether it be in-person events or screenings (now online). We plan to host events primarily in the Burnaby Campus, but some events may be in the Downtown Campus as well! To get involved, join the discord server to learn more about the club!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BCC06",
    name: "BCIT Chess Club",
    email: "bcitchessclub@gmail.com",
    details: "Take a break from your classes and studies to play a game of chess. BCIT Chess Club is finally giving the opportunity for chess players and those interested in chess to gather around to exhibit and hone their skills. Even players without prior knowledge or players with introductory knowledge of chess can participate in the chess lessons held by club members. Everyone knows that chess players are always one step ahead!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BGA07",
    name: "Board Games Association",
    email: "alexanderfarlinger@gmail.com",
    details: "From Mahjong to Catan, D&D to Magic: The Gathering, and everything in between; the Board Games Association is on a mission to kick back and have some fun at BCIT. We play games every Friday and host tons of events each month. Check us out at our Discord below!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BBCC08",
    name: "Bridge Building Competition Club",
    email: "bcittroitskyteam@gmail.com",
    details: "BBCC is a group of passionate engineering students that participate in the Troitsky Bridge Building competition every year. BCIT students compete with other universities around Canada to design and build the most efficient bridge. This bridge is built using only white glue, popsicle sticks and dental floss. BBCC is an opportunity for students to collaborate with each other and obtain new skills that will support them in their engineering careers.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BSC09",
    name: "Building Science Club",
    email: "bsc.bcit@gmail.com",
    details: "We are the platform for sharing innovation and leadership in building design, construction, and operation. We convene anyone concerned about building science, energy efficiency and environmental responsibility to dive into the details of creating better buildings. Whether you’re interested in building science, Passive House, net-zero, LEED, or just better building practice, please explore, learn, and engage!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "CC10",
    name: "Computing Club",
    email: "bcitcomputingclub@gmail.com",
    details: "BCIT Computing Club was originally founded by CST students to help build community at the Downtown Campus. We’ll also be hosting crash courses in various technologies to help each other develop industry-relevant skills, as well as whiteboarding and exam prep sessions. You don’t have to be a CST student to join, everyone with an interest in computing is welcome!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "DC11",
    name: "Dance Club",
    email: "bcitdance@gmail.com",
    details: "Our vision is to create a vibrant and inclusive community for students who are passionate and interested about dance and want to explore their creative potential. All skills levels are invited to join, and we hope to help other students improve their mental and physical health along with appreciation of different cultures and forming new social connections.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });


  clubsRef.add({
    code: "DH12",
    name: "Dev Hub",
    email: "dh.bcit@gmail.com",
    details: "The BCIT Dev Hub was founded by a group of dedicated Part-time and Full-time students to create a connected community that promotes technological development for both Part-time and Full-time students from any department. Formerly known as the PTS Computing Club, our mission is to foster a collaborative environment that empowers students to enhance their technical skills into development and grow academically. We aim to create a platform that connects students across different departments and encourages collaboration and innovation.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

clubsRef.add({
    code: "ESS13",
    name: "Engineering Students’ Society",
    email: "ess.bcit@gmail.com",
    details: "The BCIT Engineering Students’ Society (BCIT ESS) is a partnership between Mechanical, Electrical and Civil engineering students, brought together to enrich the life of all BCIT engineering students by coordinating social events, interdisciplinary projects, competitions, and professional seminars.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

clubsRef.add({
    code: "EA014",
    name: "Esports Association",
    email: "ea.bcit@gmail.com",
    details: "The BCIT eSports Association is a group for anybody who enjoys gaming, from beginners to professionals. It brings people from the community together to build connections, memorable experiences, and fantastic opportunities.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "FA15",
    name: "Finance Association",
    email: "bcitfa.assoc@gmail.com",
    details: "Our goal is to connect our members to each other and the industry by creating and organizing events, panels and programs which educate on current leading-edge topics in the financial sector. We are here to open up your career possibilities. Email us your questions to get started!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

clubsRef.add({
    code: "FC16",
    name: "Firearms Club",
    email: "bcitsafirearmsclub@gmail.com",
    details: "The BCITSA Firearms Club aims to introduce students to firearms in a Canadian context, providing information about safety, applicable laws and history relating to them. We also offer students a chance to try out firearms in a safe and legal setting, as well as offer guidance in getting started with the Canadian firearms licensing process if desired. As part of this we offer a casual introduction to organized shooting sports of different disciplines, as well as the local firearms communities in the area.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "GC17",
    name: "Geomatics Club",
    email: "gc.bcit@gmail.com",
    details: "The BCIT Geomatics Club consists of students in the geomatics diploma and degree programs, working together to supply fellow students with help in their studies, offer a window into the workforce, and supply resources to attend geomatics-related events.Feel free to send us an email if you are interested.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

clubsRef.add({
    code: "MA18",
    name: "Marketing Association",
    email: "ma.bcit@gmail.com",
    details: "The BCIT Marketing Association (BCITMA) is one of the longest standing associations at BCIT. As a collegiate chapter of the American Marketing Association (AMA), BCITMA provides professional development, networking, and real-world learning experiences for its members. Every year BCITMA competes annually at the AMA Collegiate Conference in New Orleans. Competing against Ivy League schools such as the University of Pennsylvania, the conference allows BCITMA members the recognition of their hard work and skills on an international level.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

clubsRef.add({
    code: "REA19",
    name: "Real Estate Association",
    email: "bcitrea@outlook.com",
    details: "The BCIT Real Estate Association provides opportunities for students to connect with industry professionals and gain valuable experience that can help them after graduation. We offer a variety of events and programs throughout the school year to help our members learn and grow in their field. Join us today and take the first step towards a bright future in real estate!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

clubsRef.add({
    code: "HRA20",
    name: "Human Resources Association",
    email: "bcithra@gmail.com",
    details: "The Human Resources Association (HRA) is a student-led group committed to providing students who are interested in a career in the field of Human Resource Management with networking and other opportunities to aid in the transition from university to career.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "JDCW21",
    name: "JDC West",
    email: "bcit@jdcwest.com",
    details: "BCIT is the first polytechnic to be invited to western Canada’s premier business competition, JDC West. Every year, 600 students from 12 top business schools attend this highly-competitive and dynamic event. In preparation, student competitors undergo industry training which gives them a unique set of tools to excel professionally. Widely recognized by industry as representing the brightest business students in the country, JDC West is a one-way ticket to your dream job.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "MC22",
    name: "Motorsports Club",
    email: "bcitmotorsports@gmail.com",
    details: "BCIT Motorsports was founded to help connect auto enthusiasts throughout all schools at BCIT. We want to build great cars and participate in various events.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "OC23",
    name: "Outdoor Club",
    email: "bcitoutdoorsclub@gmail.com",
    details: "The Outdoors Club is a student run club dedicated to organize outdoor adventures for students to meet new like-minded people and have some fun. We will plan group activities such as hiking, biking, camping, skiing/snowboarding, beach days, or any other outdoors activities.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "RC24",
    name: "Racing Club",
    email: "bcitracing@gmail.com",
    details: "Check back here shortly, our club description will be added soon.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "PLC25",
    name: "Powerlifting Club",
    email: "bcitpowerlifting@yahoo.ca",
    details: "BCIT Powerlifting was created to gather like minded individuals at BCIT. Our aim is to educate students on the proper ways to lift weights while encouraging others to get healthy, active, and connecting others.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "SNAC26",
    name: "Student Nursing Association Club",
    email: "bcitsna@gmail.com",
    details: "The BCIT SNA is a student-run organization that acts to enhance the education of BCIT nursing students. Operating with faculty support, we seek to provide extended learning opportunities, and to engage nursing students in the Community at large. Our vision statement is to achieve excellence in cultivating community and global leaders through encouraging student engagement, professional development and personal growth in the BCIT nursing student population.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "UCMC27",
    name: "University Christian Ministries",
    email: "UCMbcit@gmail.com",
    details: "BCIT UCM is a student club that holds small group meetings, Bible studies, and other events on the Burnaby campus. Our purpose is to build a Christian community that will enhance our relationship with God, care for and encourage fellow believers, and share our experience of Jesus Christ with those around us. All are welcome!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "WICC28",
    name: "Women in Computing Club",
    email: "wicbcit@gmail.com",
    details: "BCIT Women in Computing is a group of like-minded individuals who support equality in the Technology field. Our goal is to support current female students to thrive in their academics while also forming strong connections with female professionals working in Vancouver’s Tech community. WIC is not exclusive to only female students, but we welcome anyone who supports the club’s visions.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "YWIBC29",
    name: "Young Women in Business Club",
    email: "info@wib.ca",
    details: "YWiB BCIT was founded with the purpose of connecting ambitions students across various schools that share the same belief of female empowerment in the professional workplace. YWiB is a progressively growing network across Greater Vancouver and has since grown nationally. It provides opportunities that facilitate growth for its members. Members have access to networking opportunities and meeting industry professionals that share their insight and experience through workshops and seminars.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BUBC30",
    name: "BCIT-UBC Biotechnology Club",
    email: "ubc.bcit.biotech@gmail.com",
    details: "The Biotechnology Club was founded in 2008 with the focus of bridging the gap between BCIT and UBC students in the Biotechnology program. The purpose of this club is the bring perspective and experience to the current students and to unite the Biotechnology community through social and networking events.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "BITMANC31",
    name: "Business Information Technology management Club",
    email: "bitmanclub@gmail.com",
    details: "The BITMAN association’s mission is to act as a conduit between our members and the IT Industry, building strong relationships that will be mutually beneficial for the industry and the students.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "GTTMC32",
    name: "Global Trade and Transportation Mangement Club",
    email: "gttmclub@gmail.com",
    details: "The Business Management Association engages management students in the practical application of program concepts through brand development workshops, networking, and creating value through partnerships. Although leadership positions are restricted to students of the Business Management Diploma, membership is welcome to all students at BCIT. Our events focus on improving your brand and your network. Members are encouraged to get involved with their own success by participating and collaborating.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "CSMEC33",
    name: "Canadian Society for Mechanical Engineering",
    email: "general.bcfpa@gmail.com",
    details: "The aim of BCIT Mechanical Engineering Student Society is to foster relationships and bring together mechanical engineering students, faculty and professionals by way of academic, social and recreational events.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "CFAC34",
    name: "Coding for All Club",
    email: "codingforallclub@gmail.com",
    details: "We are a club geared towards making coding fun. We focus on instilling that technology is enjoyable and impressive. Through holding teaching/ mentoring events for a younger generation, we will bring prospective students together with current students. These social activities will build confidence to pursue a computer science education.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "DSC35",
    name: "Developers Student Club",
    email: "developersclubbcit@gmail.com",
    details: "Developer Student Club (DSC) is a community group, sponsored by Google, for BCIT computing students from any academic background in their undergraduate or graduate term. Our goal is to spread technical knowledge and empower students to impact their communities through technology.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "EBC36",
    name: "ENACTUS BCIT Club",
    email: "enactusbcit@gmail.com",
    details: "Enactus BCIT is a club of students who believe that entrepreneurial action matched with sustainable business practices can empower our Greater Vancouver community, and communities around the world. With the mentorship of faculty advisors and industry professionals, Enactus BCIT members apply their schooling to launch social impact ventures that address the 17 UN Sustainable Development goals within our communities.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "ECC37",
    name: "English Corner Club",
    email: "pdadkhah@my.bcit.ca",
    details: "English Corner is an informal space to practice conversational English and make new friends. At English Corner participants share their ideas and discover ways to build community. English Corner is facilitated by trained volunteers. The group meets every Wednesday @ 3 pm on the library main floor. Drop-ins are welcome.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "IEEE38",
    name: "IEEE BCIT Student Branch",
    email: "exec@ieeebcit.org",
    details: "IEEE stands for The Institute of Electrical and Electronics Engineers. IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. At BCIT our Student Branch represents students in the Electrical and Computer Engineering program.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  // clubsRef.add({
  //   code: "39",
  //   name: "(Name of Club)",
  //   email: "(club email)",
  //   details: "(Details)",
  //   last_updated: firebase.firestore.FieldValue.serverTimestamp()
  // });

  clubsRef.add({
    code: "IDSC40",
    name: "Indigenous Culture Club",
    email: "aborigionalcultureclub@gmail.com",
    details: "The BCIT Indigenous Culture Club is a student-run organization for any student on campus who is interested in Indigenous culture, history, issues, or activities. The members of this club are First Nations, Metis, Inuit, non-Indigenous, and come from many different backgrounds and experience. Through traditional teachings and practices we aim to provide a platform in which to connect the BCIT community.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "ITSC41",
    name: "International Social Club",
    email: "bcitsa.socialclub@gmail.com",
    details: "The BCIT International Social Club aims to serve the international student community at BCIT by providing social events that bring students together to have fun, learn about other cultures, network, and to support each other while away from home. It is a place to meet friends from around the world while here at BCIT!",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "MIEC42",
    name: "Mining Engineering Club",
    email: "bcit.miningclub@gmail.com",
    details: "The intent of the Mining Engineering Club is to build relationships between mining students, faculty, student chapters and industry professionals through activities such as field trips, social events, academic projects and competitions.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "MSC43",
    name: "Muslim Student Club",
    email: "bcit.muslimstudentclub@gmail.com",
    details: "The Muslim Students Association is a multifaceted club dedicated to be a resource on Islam for Muslims and non-Muslims alike. We are there for anybody interested in learning about Islam from the source! Our club activities also include hosting Friday prayer services, discussions, social events, and sporting events and in doing so we seek to unify Muslim students from all different cultural backgrounds.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "USC44",
    name: "Ukraine Students Club",
    email: "bcitusc@gmail.com",
    details: "The BCIT Ukrainian Students Club is a place where you can make new friends and spend a great time. It is a place where passionate and creative students meet. Place where we provide support and community. Thank you for your interest in our club.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "CSCEC45",
    name: "The Canadian Society for Civil Engineering Club",
    email: "presidnet@bcitcsce.ca",
    details: "The Canadian Society for Civil Engineering promotes the development, acquisition, and exchange of professional knowledge in the field of Civil Engineering. Our student club assists in doing this by hosting technical seminars, supporting student competitions and social events, and mostly help develop networks between the BCIT students, faculty, and industry.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "LGBTQ46",
    name: "LGBTQ+ Club",
    email: "bcitlgbtqclub@gmail.com",
    details: "The LGBTQ+ Club is for anyone who self identifies as Lesbian, Gay, Bisexual, Transgender, Queer, Two-Spirited, Non-Binary, Pansexual, Asexual or anything else that falls under the umbrella of the rainbow. All events are welcome to all LGBTQ+ BCIT students who want to socialize with each other. All events are scent-free, check out the Facebook page for more information. All events are safe space, no harassment, discrimination, or hate speech aloud. Join us for our welcoming, fun, engaging and entertaining monthly event(s) held the (approximately) third week of each month. Check out the Facebook page for event listings.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  clubsRef.add({
    code: "WHCC47",
    name: "White Hat Cyber Crew Club",
    email: "whitehatcybercrew@gmail.com",
    details: "Introducing the White Hat Cyber Crew – your key to unlocking the world of cybersecurity! Ready to fortify your digital defenses and explore the thrilling realm of online security? Join us on an exciting adventure into the world of ethical hacking and cyber protection. At White Hat Cyber Crew, we’re committed to arming you with the skills and know-how to become a digital hero. Dive into our engaging workshops, hands-on projects, and enlightening events designed to make learning cybersecurity accessible and enjoyable. Whether you’re a tech enthusiast or just curious about the cybersecurity landscape, our crew provides the perfect platform to connect with fellow enthusiasts and embark on this vital journey. Don’t miss out join us today and proudly become a part of the White Hat Cyber Crew.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

}


// writeClubs();

var currentUser;

function doAll() {
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
          currentUser = db.collection("users").doc(user.uid); //global
          console.log(currentUser);
      } else {
          // No user is signed in.
          console.log("No user is signed in");
          window.location.href = "FireBaselogin.html";
      }
  });
}
doAll();

document.addEventListener("DOMContentLoaded", function () {
  displayCardsDynamically("clubs");
});

function setupAccordions() {
  let acc = document.querySelectorAll(".accordion"); // Select all accordions
  acc.forEach((accordion) => {
    accordion.removeEventListener("click", toggleAccordion); // Remove existing listeners
    accordion.addEventListener("click", toggleAccordion); // Attach new listener
  });
}

function toggleAccordion() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null; // Collapse the panel
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; // Expand the panel
  }
}

function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("accordionTemplate");
  let container = document.getElementById(collection + "-go-here");

  if (!cardTemplate || !container) {
    console.error("Missing template or container element.");
    return;
  }

  db.collection(collection)
    .get()
    .then((allClubs) => {
      allClubs.forEach((doc) => {
        let data = doc.data();
        let newcard = cardTemplate.content.cloneNode(true);

        let docID = doc.id;

        newcard.querySelector(".card-title").innerHTML = data.name;
        newcard.querySelector(".card-name").innerHTML = data.name;
        newcard.querySelector(".card-email").innerHTML = data.email;
        newcard.querySelector(".card-text").innerHTML = data.details;
        newcard.querySelector(".card-img-top").src = `/images/club/${data.code}.png`;

        newcard.querySelector('i').id = 'save-' + docID;   //guaranteed to be unique
        newcard.querySelector('i').onclick = () => saveBookmark(docID);

        container.appendChild(newcard);
      });

      // Apply accordion functionality only after all cards are added
      setupAccordions();

      
      currentUser.get().then(userDoc => {
        //get the user name
        var bookmarks = userDoc.data().bookmarks;
        if (bookmarks.includes(docID)) {
           document.getElementById('save-' + docID).innerText = 'bookmark';
        }
  })

    })
    .catch((error) => console.error("Error fetching clubs:", error));
}


function saveBookmark(clubsDocID) {

  // Manage the backend process to store the clubsDocID in the database, recording which hike was bookmarked by the user.
  currentUser.update({
          // Use 'arrayUnion' to add the new bookmark ID to the 'bookmarks' array.
          // This method ensures that the ID is added only if it's not already present, preventing duplicates.
          bookmarks: firebase.firestore.FieldValue.arrayUnion(clubsDocID)
      })
      // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
      .then(function () {
          console.log("bookmark has been saved for" + clubsDocID);
          let iconID = 'save-' + clubsDocID;
          //console.log(iconID);
          //this is to change the icon of the hike that was saved to "filled"
          document.getElementById(iconID).innerText = 'bookmark';
      });
}

saveBookmark();