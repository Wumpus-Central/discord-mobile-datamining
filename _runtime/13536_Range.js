// _runtime/13536_Range.js
import Range from "13533_Range.js";


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};