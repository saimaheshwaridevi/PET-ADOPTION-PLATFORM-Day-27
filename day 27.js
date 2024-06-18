const petList = document.querySelector('.pet-list');

// Replace with your actual pet data (image URL, name, breed, age, etc.)
const pets = [
  {
    image: 'bichon.jpg',
    name: 'Bichon Frise',
    breed: '',
    age: 5
  },
  {
    image: 'Papillon3.jpg',
    name: 'Papillon',
    breed: 'Continental Toy Spaniel',
    age: 15 
  },
  {
    image: 'AmericanBulldog.jpg',
    name: 'American Bull dog',
    breed: 'AmericanBulldog',
    age: 11
  },
  {
    image: 'Husky.jpg',
    name: 'Husky',
    breed: 'Siberian  Husky',
    age: 8
  },
  {
    image: 'JackRussellTerrier.jpg',
    name: 'Jack Russell Terrier',
    breed: 'British Breed',
    age: 6
  },
  {
    image: 'borderterrier.jpg',
    name: 'Border Terrier',
    breed: 'Small Rough Coated Terrier',
    age: 4
  },
  {
    image: 'Avanese.jpg',
    name: 'Avanese',
    breed: 'Bichon',
    age: 2
  },
  {
    image: 'AustralianCattleDog.jpg',
    name: 'Australian Cattle Dog',
    breed: 'Herding God',
    age: 4
  },
  {
    image: 'Pomeranian.jpg',
    name: 'Pomeranian',
    breed: 'Germany Breed',
    age: 4
  }
  // Add more pets here
];

function createPetCard(pet) {
  const petCard = document.createElement('div');
  petCard.classList.add('pet');

  const petImage = document.createElement('img');
  petImage.src = pet.image;
  petCard.appendChild(petImage);

  const petInfo = document.createElement('div');
  petInfo.classList.add('pet-info');

  const petName = document.createElement('h3');
  petName.classList.add('pet-name');
  petName.textContent = pet.name;
  petInfo.appendChild(petName);

  const petDetails = document.createElement('p');
  petDetails.classList.add('pet-details');
  petDetails.textContent = `${pet.breed}, ${pet.age} years old`;
  petInfo.appendChild(petDetails);

  petCard.appendChild(petInfo);

  return petCard;
}
 // Get all navigation links
 const navLinks = document.querySelectorAll('nav a');
            
 // Add click event listener to each navigation link
 navLinks.forEach(link => {
     link.addEventListener('click', function(event) {
         event.preventDefault(); // Prevent default link behavior

         // Save the clicked link in local storage
         const page = this.getAttribute('href').substring(); // Extract page name from href attribute
         localStorage.setItem('lastClickedPage', page);

         // Redirect to the clicked page
         window.location.href = this.href;
     });
 });

pets.forEach(pet => {
  const petCard = createPetCard(pet);
  petList.appendChild(petCard);
});