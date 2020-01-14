function convert(...args) {
  for (let i = args.length; --i >= 0;) {
    args[i] = typeof args[i] === 'string' ? Number(args[i]) : String(args[i]);
  }
  return args;
}

function executeforEach(array, callback) {
  for (let item of array) {
    callback(item);
  }
}

function mapArray(array, callback) {
  const result = [];
  executeforEach(array, item => result.push(callback(Number(item))));
  return result;
}

function filterArray(array, callback) {
  const result = [];
  executeforEach(array, item => callback(item) ? result.push(item) : 0);
  return result;
}

function flipOver(str) {
  let result = '';
  for (let i of str) {
    result += i;
  }
  return result;
}

function makeListFromRange(range) {
  let result = [];
  if (range) {
    for (let i = parseInt(range[0]); i <= parseInt(range[1]); i++) {
      result.push(i);
    }
  }
  return result;
}

function getArrayOfKeys(array, key) {
  const result = [];
  executeforEach(array, item => result.push(item[key]));
  return result;
}

function substitute(array) {
  const sblimiter = 30;
  return mapArray(array, item => item < sblimiter ? '*' : item);
}

function getPastDay(date, number) {
  const millisec = 86400000;
  return new Date(date.getTime() - number * millisec).getDate();
}

function formatDate(date) {
  const number = 9;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours() > number ? date.getHours() : '0' + date.getHours();
  const min = date.getMinutes() > number ? date.getMinutes() : '0'+date.getMinutes();
  
  return `${year}/${month}/${day} ${hour}:${min}`;
}
