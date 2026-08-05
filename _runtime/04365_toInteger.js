// _runtime/04365_toInteger.js

export default function toInteger(arg0) {
  const tmp = require("04366_toFinite.js") /* toFinite */(arg0);
  const result = tmp % 1;
  let num = 0;
  if (tmp == tmp) {
    let diff = tmp;
    if (result) {
      diff = tmp - result;
    }
    num = diff;
  }
  return num;
};