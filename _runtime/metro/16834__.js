// _runtime/metro/16834__.js
import _mod16807 from "16807__.js";

export default (arg0) => {
  if (_mod16807(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
