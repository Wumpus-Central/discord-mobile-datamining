// _runtime/13061_Range.js
import { Range } from "13050_Range.js";

export default (arg0, arg1, arg2) => {
  const obj = new Range /* Range */(arg0, arg2);
  return obj.intersects(new Range /* Range */(arg1, arg2), arg2);
};