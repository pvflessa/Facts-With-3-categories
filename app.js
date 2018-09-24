const mathFacts = document.querySelector('.mathFacts')
const yearFacts = document.querySelector('.yearFacts')
const dateFacts = document.querySelector('.dateFacts')
const fact = document.querySelector('#fact')
const factText = document.querySelector('#factText')
const factYear = document.querySelector('#factYear')
const factTextYear = document.querySelector('#factTextYear')
const factDate = document.querySelector('#factDate')
const factTextDate = document.querySelector('#factTextDate')


const math = document.querySelector('#mathbtn')

math.addEventListener('click',getMathDiv)


function getMathDiv(){

 mathFacts.style.display= 'block'
 yearFacts.style.display= 'none'
 dateFacts.style.display='none'

 const numberInput = document.querySelector('#numberInput')

 numberInput.addEventListener('input',function(){


   const number = numberInput.value

   fetch(`http://numbersapi.com/${number}`)
   .then(response => response.text())
   .then(data => {
      if(number != ''){

        fact.style.display= 'block'
        factText.innerText = data
      }
   })
   .catch(err => console.log(data) )

 })



}



const year = document.querySelector('#yearbtn')

year.addEventListener('click',getYearDiv)


function getYearDiv(){
  mathFacts.style.display= 'none'
  dateFacts.style.display='none'
  yearFacts.style.display= 'block'


  const yearInput = document.querySelector('#yearInput')
  yearInput.addEventListener('input',function(){
    const year = yearInput.value



    fetch(`http://numbersapi.com/${year}/year`)
    .then(response => response.text())
    .then(data => {
      console.log(data)
      if(year != ''){
           factYear.style.display= 'block'
           factTextYear.innerText = data
         }
    })
    .catch(err => console.log(data) )

  })

}
const dateBtn = document.querySelector('#datebtn')

dateBtn.addEventListener('click',getDateDiv)


function getDateDiv(){

  mathFacts.style.display= 'none'
  yearFacts.style.display= 'none'
  dateFacts.style.display='block'

  const submitDate=document.querySelector('#submitDate')

  submitDate.addEventListener('submit',function(e){
    e.preventDefault()
    const month = document.querySelector('#monthInput').value
    const day = document.querySelector('#dayInput').value

 

    fetch(`http://numbersapi.com/${month}/${day}/date`)
    .then(response => response.text())
    .then(data => {
      console.log(data)
      if( month != '' && day != '' ){

                   factDate.style.display= 'block'
                   factTextDate.innerText = data
      }else{
        alert('Fill in Month and Day')
      }


    })
    .catch(err => console.log(data) )


  })

}
