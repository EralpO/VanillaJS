const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seats:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')
const movie = document.getElementById('movie')

let ticketPrice = +movie.value;

movie.addEventListener('change',(e)=>{
  ticketPrice = +e.target.value
  updateSelectedCount();
})

//How many tickets and the price of the tickets(span)
function updateSelectedCount(){
    const Counter = document.querySelectorAll('.row .seat.selected').length;
    count.innerText = Counter
    total.innerText = Counter*ticketPrice
}



//Seat Click Event Listener
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})

