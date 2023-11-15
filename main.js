






// checkRooms()
//     .then(checkTickets)
//     .then(succes)
//     .catch(failed);

 

// function succes(data){
//     console.log('---succes---');
//     console.log('otvet na per shage',data);
//     console.log('edem v otpusk')

// }


// function failed(data){
//     console.log('----failed----');
//     console.log('Otvet na predydushcem shage:', data);
//     console.log('Otusk otmena');

// }

// function checkTickets(data){

//         return new Promise(function(resolve,reject){
//                   setTimeout(() => {
//                     console.log('-----then1-----');
//                     console.log('otvet na per shage',data);
//                     console.log('Proveryaem bilety');
                    
//                     const availableTickets = true;

    
//                     if (availableTickets) {
//                         let message = 'Bilety est';
//                         resolve(message);
//                     } else {
//                         let message = 'Biletov NET';
//                         reject ('message');
    
//                     }
    
    
    
//                   },1000)
    
//         });
    
    
// }

// functio n checkRooms(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('Proveryaem nomera v otele....');
//             const availableRooms = true;
//             if (availableRooms) {
//                     resolve('Nomera est')
    
//             } else {
//                     reject('Nomerov NET')
    
//             }
    
//         },1500)
//     })
// }


// www.cbr-xml-daily.ru/latest.js

const response = fetch('https://www.cbr-xml-daily.ru/daily_json.js');

console.log(response);


async function getCurrencies(){


    
}
