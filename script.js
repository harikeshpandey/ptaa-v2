const names = document.getElementById("names");

const deanMessage = document.getElementById("deanMessage");
const chancMessage = document.getElementById("chancMessage");
const sercMessage = document.getElementById("secrMessage");

const deanName = document.getElementById("deanButton");
const chancName = document.getElementById("chancButton");
const sercName = document.getElementById("secrButton");


// const membershipBtn = document.getElementById('membershipBtn');
// const membershipDialog = document.getElementById('membershipDialog');
// const dialogTitle = document.getElementById('dialogTitle');
// const dialogMessage = document.getElementById('dialogMessage');
// const choiceButtons = document.getElementById('choiceButtons');
// const closeButton = document.getElementById('closeButton');

// membershipBtn.addEventListener('click', () => {
//     membershipDialog.style.display = 'flex';
//     // Reset dialog to initial state
//     dialogTitle.textContent = 'PTAA Membership Verification';
//     dialogMessage.textContent = 'Are you a member of PTAA?';
//     choiceButtons.style.display = 'flex';
//     closeButton.style.display = 'none';
//   });
  
names.addEventListener("click", function(e){
  if(e.target.id == "chancButton"){
      chancMessage.classList.remove("hidden");
      deanMessage.classList.add("hidden");
      sercMessage.classList.add("hidden");


      chancName.classList.add("active");
      deanName.classList.remove("active");
      sercName.classList.remove("active");
  }
  else if(e.target.id == "deanButton"){
      deanMessage.classList.remove("hidden");
      chancMessage.classList.add("hidden");
      sercMessage.classList.add("hidden");


      chancName.classList.remove("active");
      deanName.classList.add("active");
      sercName.classList.remove("active");
  }
  else if(e.target.id == "secrButton"){
      sercMessage.classList.remove("hidden");
      deanMessage.classList.add("hidden");
      chancMessage.classList.add("hidden");


      chancName.classList.remove("active");
      deanName.classList.remove("active");
      sercName.classList.add("active");
  }
})

// function handleResponse(isMember) {
//     if (isMember) {
//       dialogTitle.textContent = 'Welcome PTAA Member!';
//       dialogMessage.textContent = 'Thank you for being a part of PTAA. You can access member benefits.';
//     } else {
//       dialogTitle.textContent = 'Join PTAA';
//       dialogMessage.textContent = 'Consider joining PTAA to connect with alumni and access exclusive benefits.';
//     }
//     choiceButtons.style.display = 'none';
//     closeButton.style.display = 'flex';
//   }
  
//   // Close dialog
//   function closeDialog() {
//     membershipDialog.style.display = 'none';
//   }
  
//   // Close dialog when clicking outside
//   membershipDialog.addEventListener('click', (e) => {
//     if (e.target === membershipDialog) {
//       closeDialog();
//     }
//   });
  
//   // Close dialog when pressing Escape key
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && membershipDialog.style.display === 'flex') {
//       closeDialog();
//     }
//   });



  