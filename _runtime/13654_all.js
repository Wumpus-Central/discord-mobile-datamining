// _runtime/13654_all.js
import { all } from "13655_all.js";

export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};