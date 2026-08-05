// _runtime/00633_castFunction.js

export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = require(634) /* identity */;
  }
  return tmp;
};