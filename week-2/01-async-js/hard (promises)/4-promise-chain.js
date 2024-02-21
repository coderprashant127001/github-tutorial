/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function forall(t, st) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Hi there ");
      console.log(st);
      resolve();
    }, t * 1000)
  );
}

function wait1(t) {
  return new Promise((resolve, reject) => {
    forall(t, "from 1")
      .then(() => resolve())
  })
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    forall(t, "from 2")
      .then(() => resolve())
  })
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    forall(t, "from 3")
      .then(() => resolve())
  })
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      let end = Date.now();
      return start - end;
    })
}

calculateTime(5, 2, 2)
  .then((time) => {
    console.log(time);
  })

module.exports = calculateTime;

// https://quickest-juniper-f9c.notion.site/Week-2-NodeJS-and-ExpressJS-concepts-bd3a6a6cd1c64764bee7865a082fa979
