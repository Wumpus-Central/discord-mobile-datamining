// _runtime/00633_castFunction.js

export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = require("00634_identity.js") /* identity */;
  }
  return tmp;
};