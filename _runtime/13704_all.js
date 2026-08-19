// _runtime/13704_all.js
import all from "13699_all.js";
import _mod13705 from "metro/13705__.js";


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(_mod13705(arg0) + " is not a function");
    throw tmp6;
  }
};