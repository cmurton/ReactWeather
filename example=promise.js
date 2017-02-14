function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    var someNumber = a + b;
    if (typeof someNumber === 'number') {
      resolve(someNumber)
    }
    else {
      reject('Invalid number')
    }

  });
}

addPromise('d', 5).then(function (someNumber) {
  console.log('promise success', someNumber);
}, function (err) {
  console.log('promise error', err);
});
