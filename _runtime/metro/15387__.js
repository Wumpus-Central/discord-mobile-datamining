// _runtime/metro/15387__.js
import _mod15384 from "15384__.js";

export default (arg0, arg1) => {
  const tmp = new _mod15384(arg0, arg1);
  return new _mod15384(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
