import { Event } from './Event';
//import{} from "button"

const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/8ba3fc71/events')
    const responseConverted = await response.json();

    // console.log(responseConverted);
    return responseConverted
}
// loadData();

const renderElements = (data) => {
    //console.log(data)

    const events = document.querySelector('.events');


    // data.forEach(element => {
    //     const card = document.createElement('div');
    //     card.classList.add('event_card')
    //     events.appendChild(card);
    //     card.innerHTML = `
    //         <h1 class="event_name">${element.name}</h1>
    //         <img class="event_image" src="${element.image_url}" alt="Event Photo" width:400px/>
    //         <p class="event_about">${element.description} </p>
    //         <button class="event_reg_button"> Register </button>`


    // });

    data.forEach((element) => {

        const eventCard = new Event(element.id, element.name, element.date, element.description, element.image_url);

        //eventCard.render();

        //console.log(eventCard);

    })


    // data available
}
const loadDataAndRender = async () => {
    const data = await loadData()
    // data available
    renderElements(data)

    // const regButton = this.element.querySelector('.event_reg_button');
    // textRatingButton.addEventListener('click', async () => {
    //     //open registration form;
    // });
}


loadDataAndRender()

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// no data ever

// const event1 = new Event('Something', '27-05-2022');
// const event2 = new Event('Something', '27-05-2022');
// const event3 = new Event('Something', '27-05-2022');



// const event2 = new Event('Something else');
// const event3 = new Event('Something else');
// button
