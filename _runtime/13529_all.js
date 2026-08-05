import { all } from "13502_all.js";
// _runtime/13529_all.js

export default (arg0) => {
  if (all /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};