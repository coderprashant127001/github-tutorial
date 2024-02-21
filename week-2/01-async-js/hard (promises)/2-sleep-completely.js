/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('inside set timeout')
        let set = true;
        if(set){
          resolve('return from resolve ')
        }
        else{
          reject('return from reject')
        }
      }, milliseconds*1000)
    })
  }
  sleep(5)
  .then(() => {
    console.log('inside then')
  })
  
  

module.exports = sleep;
