const leftCards = document.querySelector('.left-cards');                  //get div which is container of all left cards
const jsonUrl = '../data/cards.JSON'                                     //API's URL
// fetch(jsonUrl)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Nese Zibili Cixdi");
//     }
//   })
//   .then(data => {
//     addCards(data);
//   })
//   .catch((error) => console.error("Salam  :", error));


async function GetCardData(url) {                         // its a async function to get datas from api
  try {                                                  // using try statement for sure to every step in brackets is successful
    var response = await fetch(url);                    //in there we're creating a response from response of fetch's request
    if (response.ok) {                                 //checking if response status is ok (status code == 200) 
      var data = await response.json();               //creating a data from that responses value with parsing json value (responses value is fetched data)
    }
    else {
      throw new Error("Nese Zibili Cixdi");        //if response status code is not equal to 200 we're giving error message
    }
    addCards(await data);                        //and finally we're sending all the datas to addCards methods (this method contains a template literal with data values and adds card to view)
  }
  catch (error) {                              //if try (attempt to do all the process) is not successful then catch catches the problems reason
    console.error("Salam  :", error);
  }
}

GetCardData(jsonUrl);//using the method to add cards to view

function addCards(dataForView) {
  for (let index = 0; index < dataForView.length; index++) {
    let testm;
    if (index != 6) {
      testm = ` <div class="card">
          <img src="${dataForView[index].url}" alt="${dataForView[index].category}" />
          <div class="container">
            <h5>${dataForView[index].category}</h5>
            <p class="second-text">
              ${dataForView[index].quote}
            </p>
            <p>${dataForView[index].date} <span>By </span>${dataForView[index].by} </p>
          </div>
        </div>
        `;
    }
    else {
      testm = `<div class="card wide">
        <img src="${dataForView[index].url}" alt="${dataForView[index].category}" />
        <div class="container">
          <h5>${dataForView[index].category}</h5>
           <p class="second-text">
              ${dataForView[index].quote}
            </p>
            <p>${dataForView[index].date} <span>By </span>${dataForView[index].by} ${dataForView[index].comment_count} comments</p>
          <p class="wide-text">
            ${dataForView[index].description}
          </p>
        </div>
      </div>`
    }
    leftCards.innerHTML += testm;
  }
};