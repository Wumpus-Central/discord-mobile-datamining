import { Range } from "13050_Range.js";
// _runtime/13053_Range.js

export default (arg0, arg1) => {
  const tmp = new Range /* Range */(arg0, arg1);
  return new Range /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};