const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainerDiv = document.querySelector('.team-container');
const newMemberForm = document.querySelector('#new-member');

const memberForm = {
  nameInput: newMemberForm.querySelector ('#name'),
  roleInput: newMemberForm.querySelector ('#role'),
  emailInput: newMemberForm.querySelector ('#email'),
  imgInput: newMemberForm.querySelector ('#img')
};


const teamMemberCardTemplate = ({name, role, email, img}) => `
  <div class="team-card">
    <div class="card-image">
      <img src="${img}" alt="${name}"/>
    </div>
    <div class="card-text">
      <h3 class="name">${name}</h3>
      <p class="role">${role}</p>
      <p class="email">${email}</p> 
    </div>
    <button id="${name}">Delete</button>
  </div>
`;

const renderTeam = () => {
  let html = '';
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    html += teamMemberCardTemplate(member);
  }

  teamContainerDiv.innerHTML = html;

  const buttons = teamContainerDiv.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const { id: memberName } = button;

      let index = -1;
      for (i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].name === memberName) index = i;
      }
      
      if (index === -1) return;

      teamMembers.splice(index, 1);   

      renderTeam();
    });
  }
};

const onFormSubmit = event => {
  event.preventDefault();

  const name = memberForm.nameInput.value;
  const role = memberForm.roleInput.value;
  const email = memberForm.emailInput.value;
  const img = memberForm.imgInput.value;

  teamMembers.push({name, role, email, img});

  renderTeam();
};

newMemberForm.addEventListener('submit', onFormSubmit);

renderTeam();


/*
<div class="team-card">
 <div class="card-image">
  <img src="img/male1.png" alt="Marco Bianchi">
  </div>
  <div class="card-text">
    <h3 class="name">Marco Bianchi</h3>
    <p class="role">Designer</p>
    <p class="email">marcobianchi@team.com</p>    
  </div>   
</div> 
*/