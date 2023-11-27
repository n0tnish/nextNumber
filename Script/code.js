
const elements = ['Nakba - 1948. 15000 Palestinians killed in a war that lasted 9months, 3weeks and 2days.', 'Between the 7th of October and 25th November, 14800 Palestinian men, women and children have been killed by the terrorist state of Isra-Hell', '75 Years of occupation, ethnic cleansing, genocide and gross human rights violations doesngt just get wiped away because the freedom fighters Hamas evened the playing-field for a day or two. ', 'Between 1948 (when the Nakha happened) and 2021, Isra-hell has been responsible for 63543 casualties, including 31227 fatalities. These are not just statistics. These were real people, with hopes, dreams and aspirations much like you and I.', 'free Palestine', 'free Gaza', 'From the river to the sea, Palestine will be free'];
let currentIndex = 0;

function displayNextElement() {
  let outputElement = document.getElementById("output");

  if (currentIndex < elements.length - 1) {
    currentIndex++; 
  } else {
    currentIndex = 0; 
  }

  outputElement.innerHTML = elements[currentIndex];
}