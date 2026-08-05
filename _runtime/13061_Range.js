// _runtime/13061_Range.js

export default (arg0, arg1, arg2) => {
  const obj = new require("13050_Range.js") /* Range */(arg0, arg2);
  return obj.intersects(new require("13050_Range.js") /* Range */(arg1, arg2), arg2);
};