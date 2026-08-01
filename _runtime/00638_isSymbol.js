// === Module 638: isSymbol ===

// Module 638 (isSymbol)

export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "e";
  if (typeof arg0 !== "e") {
    let tmp2 = require(620) /* isObjectLike */(arg0);
    if (tmp2) {
      tmp2 = "[object Symbol]" == tmp3(607)(arg0);
    }
    tmp = tmp2;
    tmp3 = require;
  }
  return tmp;
};