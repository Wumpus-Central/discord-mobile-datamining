
export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = require(634) /* identity */;
  }
  return tmp;
};