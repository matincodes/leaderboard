const cardContainer = document.querySelector('.card-container')
const ul = document.querySelector('.ul')

const cardMarkup = (name, point) => `
<div class="card">
<div class="responsive-image">
  <img style="width: 100%;" src="./images/gold.png" alt="">
</div>
<h2>${name}</h2>
<h3>${point}</h3>
<small>points</small>
<p>stage 3</p>
</div>
`

const listMarkup = ({name, username, email, score}) => `
<li>
<h2>${name}</h2>
<p>${username}</p>
<p>${email}</p>
<h3>${score}</h3>
<img src="./images/more.png" alt="">
</li>
`

const users = [
  {
    "id": 1,
    "name": "Oluwanifemi Bamgbose",
    "username": "@OluwanifemiBam",
    "email": "nifemibams@gmail.com",
    "score": 19
  },

  {
    "id": 2,
    "name": "Wahab Giwa",
    "username": "@aukoda",
    "email": "kodagiwa@gmail.com",
    "score": 16
  },

  {
    "id": 3,
    "name": "Paul Amusan",
    "username": "@paulthaprodigy",
    "email": "amusanolumide@gmail.com",
    "score": 15
  },

  {
    "id": 4,
    "name": "Adebayo Ilerioluwa",
    "username": "@Adebayo",
    "email": "adebayorilerioluwa@gmail.com",
    "score": 9
  },

  {
    "id": 5,
    "name": "Duru-young Raymond",
    "username": "@DYC",
    "email": "duruyoungrc@gmail.com",
    "score": 9
  },

  {
    "id": 6,
    "name": "Oluwafemi Adenuga",
    "username": "@femosocratis",
    "email": "phemmylintry@gmail.com",
    "score": 9
  },

  {
    "id": 7,				
    "name": "Martins Arem",
    "username": "@mcsepro",
    "email": "aremson4love@gmail.com",
    "score": 7
  },

  {
    "id": 8,
    "name": "Samuel Omilo",
    "username": "@millz",
    "email": "omilosamuel@gmail.com",
    "score": 7
  },

  {
    "id": 9,
    "name": "Olaiya Ifedapo",
    "username": "@Princewill",
    "email": "princewillolaiya@gmail.com",
    "score": 6
  },

  {
    "id": 10,
    "name": "Umar Muhammad Zakari",
    "username": "@Umar",
    "email": "umarfarouqft@gmail.com",
    "score": 6
  },

  {
    "id": 11,
    "name": "Jafar Kamar",
    "username": "@Jafar",
    "email": "kamsy74@gmail.com",
    "score": 6
  },

  {
    "id": 12,
    "name": "Oluwayanmife Akeju",
    "username": "@yanmifeakeju",
    "email": "yanmifeakeju@gmail.com",
    "score": 4
  },

  {
    "id": 13,
    "name": "Echefu Louis",
    "username": "@louis1",
    "email": "echefulouis456@gmail.com",
    "score": 4
  },

  {
    "id": 14,
    "name": "Izuagbala Toju",
    "username": "@Afrikanist",
    "email": "intrepidjayson@gmail.com",
    "score": 4
  },

  {
    "id": 15,
    "name": "Arbaaz Khan",
    "username": "@arbaaz",
    "email": "crispyzingy@gmail.com",
    "score": 3
  },

  {
    "id": 16,
    "name": "Victor Okonkwo",
    "username": "@Vic",
    "email": "emmyvic98@gmail.com",
    "score": 3
  },

  {
    "id": 17,
    "name": "Aj Khalil",
    "username": "@aj",
    "email": "samwel.naftali@strathmore.edu",
    "score": 3
  },

  {
    "id": 18,
    "name": "Adebisi Oreoluwa",
    "username": "@Oreoluwa19",
    "email": "oreoluwaadekusibe@gmail.com",
    "score": 3
  },

  {
    "id": 19,
    "name": "semiu biliaminu",
    "username": "@code-dash",
    "email": "codedash@gmail.com",
    "score": 3
  },

  {
    "id": 20,
    "name": "Omodara Opeyemi Stephen",
    "username": "@resourcefulmind",
    "email": "resourcefulmindoso@gmail.com",
    "score": 3
  },

  {
    "id": 21,
    "name": "Emmanuel Ezenwigbo",
    "username": "@SkyCoder",
    "email": "emmanuelezenwigbo@gmail.com",
    "score": 2
  },

  {
    "id": 22,
    "name": "Emmanuel Afuadajo",
    "username": "@aquils",
    "email": "aquilaafuadajo@gmail.com",
    "score": 2
  },

  {
    "id": 23,
    "name": "Emmanuel Idoko",
    "username": "@pidoxy",
    "email": "pidox31102002@gmail.com",
    "score": 2
  },

  {
    "id": 24,
    "name": "Habib Afolabi",
    "username": "@abib",
    "email": "thehabibafolabi@gmail.com",
    "score": 2
  },

  {
    "id": 25,
    "name": "Adedigba Adedotun",
    "username": "@Adédòtun",
    "email": "@Adedigbaadedotun2000@gmail.com",
    "score": 2
  },

  {
    "id": 26,
    "name": "Fajuyagbe Ezekiel",
    "username": "@Eaxysunshine",
    "email": "fajuyagbeezekiel90@gmail.com",
    "score": 2
  },

  {
    "id": 27,
    "name": "Odumosu Temiloluwa",
    "username": "@temilollu",
    "email": "temiloluwaodumosu25@gmail.com",
    "score": 2
  },

  {
    "id": 28,
    "name": "Nwokocha Amarachi",
    "username": "@KamaraB",
    "email": "nwokichaamarachi@gmail.com",
    "score": 2
  },

  {
    "id": 29,
    "name": "Sunday Morenikeji",
    "username": "@areel007",
    "email": "morenikejicodexiphaar@gmail.com",
    "score": 2
  },

  {
    "id": 30,
    "name": "Emmanuel Omisade",
    "username": "@emmanuelniyi",
    "email": "yomshadeemmans@gmail.com",
    "score": 2
  }
]

users.forEach((user) => {
  ul.insertAdjacentHTML('beforebegin', listMarkup(user))
})



// const getUsers = () => {
//   const usersList = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
//     res.json()
//   }).then(users => console.log(users))
// }

// getUsers()