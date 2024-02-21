/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside first wait ");
      resolve("return from first wait");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside second wait");
      resolve("return from second wait");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside third wait ");
      resolve("return from third wait");
    }, t * 1000);
  });
}
function calculateTime(t1, t2, t3) {
  let startTime = Date.now();
  Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((values) => {
    console.log(values);
    let endTime = Date.now();
    console.log(endTime - startTime);
  });
}
calculateTime(3, 2, 5);
module.exports = calculateTime;
