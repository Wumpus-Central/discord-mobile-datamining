import { Range } from "13050_Range.js";
// _runtime/13057_Range.js

export default (arg0, arg1) => {
  try {
    const tmp8 = new Range /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};