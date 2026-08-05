// _runtime/13053_Range.js

export default (arg0, arg1) => {
  const tmp = new require("13050_Range.js") /* Range */(arg0, arg1);
  return new require("13050_Range.js") /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};