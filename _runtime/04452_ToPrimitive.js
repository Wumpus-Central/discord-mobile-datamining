// _runtime/04452_ToPrimitive.js

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = require(4453) /* ToPrimitive */(arg0, arguments[1]);
  } else {
    tmp3 = require(4453) /* ToPrimitive */(arg0);
  }
  return tmp3;
};