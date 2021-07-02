const creditDebitCard = document.querySelector('.creditDebitCard')
const cvv = document.querySelector('.cvv')
const payCard = document.querySelector('.payCard');
const small = document.getElementsByTagName('small')[4]
const smallCard = document.getElementsByTagName('small')[5]

creditDebitCard.addEventListener('change', function(){
    if(creditDebitCard.value.length === 16 ){
        console.log('Nice Good To go....')
        small.style.display = 'block';
        smallCard.style.display = 'none';


    }
    else{
        console.log('Enter a vaild card details')
        smallCard.style.display = 'block';
        small.style.display = 'none';

    }
})


cvv.addEventListener('change', function(){
    if(cvv.value.length === 3){
        console.log('high secure cvv does not reveal')
    }
    else{
        console.log('Enter a valid cvv....')
    }
})



