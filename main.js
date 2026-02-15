const listContainer = document.querySelector("#user-list");
const searchInput = document.querySelector("#search");
const cityFilter = document.querySelector("#city-filter");
const ageFilter = document.querySelector("#age-filter");
const educationFilter = document.querySelector("#education-filter");
const users = [
  {
    name: "Ali Reza",
    age: 25,
    gender: "male",
    city: "Tehran",
    education: "bachelor",
  },
  {
    name: "Sara Mohammadi",
    age: 22,
    gender: "female",
    city: "Mashhad",
    education: "diploma",
  },
  {
    name: "Hamed Karimi",
    age: 30,
    gender: "male",
    city: "Isfahan",
    education: "master",
  },
  {
    name: "Neda Hosseini",
    age: 27,
    gender: "female",
    city: "Shiraz",
    education: "phd",
  },
  {
    name: "Reza Ahmadi",
    age: 24,
    gender: "male",
    city: "Tehran",
    education: "bachelor",
  },
  {
    name: "Maryam Jafari",
    age: 29,
    gender: "female",
    city: "Mashhad",
    education: "master",
  },
  {
    name: "Saeid Nazari",
    age: 33,
    gender: "male",
    city: "Isfahan",
    education: "phd",
  },
  {
    name: "Fatemeh Ebrahimi",
    age: 21,
    gender: "female",
    city: "Shiraz",
    education: "diploma",
  },
  {
    name: "Amir Hosseini",
    age: 26,
    gender: "male",
    city: "Tehran",
    education: "bachelor",
  },
  {
    name: "Leila Rahimi",
    age: 28,
    gender: "female",
    city: "Mashhad",
    education: "master",
  },
  {
    name: "Mohammad Tabrizi",
    age: 31,
    gender: "male",
    city: "Isfahan",
    education: "phd",
  },
  {
    name: "Elham Mohseni",
    age: 23,
    gender: "female",
    city: "Shiraz",
    education: "bachelor",
  },
  {
    name: "Navid Ghorbani",
    age: 34,
    gender: "male",
    city: "Tehran",
    education: "master",
  },
  {
    name: "Shirin Shiri",
    age: 24,
    gender: "female",
    city: "Mashhad",
    education: "diploma",
  },
  {
    name: "Omid Kiani",
    age: 29,
    gender: "male",
    city: "Isfahan",
    education: "phd",
  },
  {
    name: "Parisa Ahmadi",
    age: 26,
    gender: "female",
    city: "Shiraz",
    education: "bachelor",
  },
  {
    name: "Kaveh Farhadi",
    age: 32,
    gender: "male",
    city: "Tehran",
    education: "master",
  },
  {
    name: "Sahar Karimi",
    age: 28,
    gender: "female",
    city: "Mashhad",
    education: "phd",
  },
  {
    name: "Ehsan Bahrami",
    age: 27,
    gender: "male",
    city: "Isfahan",
    education: "bachelor",
  },
  {
    name: "Ladan Vaziri",
    age: 24,
    gender: "female",
    city: "Shiraz",
    education: "diploma",
  },
  {
    name: "Pouya Shafiei",
    age: 31,
    gender: "male",
    city: "Tehran",
    education: "phd",
  },
  {
    name: "Niloofar Etemadi",
    age: 23,
    gender: "female",
    city: "Mashhad",
    education: "bachelor",
  },
  {
    name: "Mehdi Nouri",
    age: 35,
    gender: "male",
    city: "Isfahan",
    education: "master",
  },
  {
    name: "Shahram Motamedi",
    age: 29,
    gender: "male",
    city: "Shiraz",
    education: "bachelor",
  },
  {
    name: "Azadeh Khorasani",
    age: 22,
    gender: "female",
    city: "Tehran",
    education: "diploma",
  },
  {
    name: "Babak Ebrahimi",
    age: 33,
    gender: "male",
    city: "Mashhad",
    education: "phd",
  },
  {
    name: "Mahsa Fathi",
    age: 27,
    gender: "female",
    city: "Isfahan",
    education: "master",
  },
  {
    name: "Arash Pirooz",
    age: 30,
    gender: "male",
    city: "Shiraz",
    education: "bachelor",
  },
  {
    name: "Taraneh Shafiee",
    age: 26,
    gender: "female",
    city: "Tehran",
    education: "phd",
  },
  {
    name: "Sina Ahmadi",
    age: 28,
    gender: "male",
    city: "Mashhad",
    education: "master",
  },
];

function renderUsers(list) {
    listContainer.innerHTML = `
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          ${list.map(user => `
            <tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
              <td>${user.city}</td>
              <td>${user.education}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }
  

renderUsers(users);

function applyFilters() {
  let result = users;

  const searchValue = searchInput.value.toLowerCase();
  const selectedCity = cityFilter.value;
  const selectedAge = ageFilter.value;
  const selectedEducation = educationFilter.value;

  if (searchValue) {
    result = result.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );
  }

  if (selectedCity) {
    result = result.filter((user) => user.city === selectedCity);
  }

  if (selectedAge) {
    const [min, max] = selectedAge.split("-").map(Number);
    result = result.filter((user) => user.age >= min && user.age <= max);
  }

  if (selectedEducation) {
    result = result.filter((user) => user.education === selectedEducation);
  }

  renderUsers(result);
}
searchInput.addEventListener("input", applyFilters);
cityFilter.addEventListener("change", applyFilters);
ageFilter.addEventListener("change", applyFilters);
educationFilter.addEventListener("change", applyFilters);
