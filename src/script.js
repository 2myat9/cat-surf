const CAT_URL = "https://api.thecatapi.com/v1/breeds";
let breedList = [];
let isDataLoaded = false;

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const promise = fetch(CAT_URL);
promise
  .then((response) => {
    processedResponse = response.json();
    return processedResponse;
  })
  .then((processedResponse) => {
    breedList = processedResponse.map((cat) => {
      return {
        name: cat.name,
        website: cat.wikipedia_url,
      };
    });
    isDataLoaded = true;
  });

const findMatches = (wordToMatch, breedList) => {
  return breedList.filter((breed) => {
    const regex = new RegExp(wordToMatch, "gi");
    return breed.name.match(regex);
  });
};

const displayMatches = (event) => {
  const matchedArray = findMatches(event.target.value, breedList);

  const html = matchedArray.map((breed) => {
    return `
      <li><span>${breed.name}</span>
      <span><a href="${breed.website}" target="blank">see more</a> </span></li>
      `;
  });

  // html is an array so use join to turn it into a string
  suggestions.innerHTML = html.join("");
};

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
