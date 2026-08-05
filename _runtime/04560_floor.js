// _runtime/04560_floor.js

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = require("metro/00566__.js")(arg0);
  }
  return tmp;
};