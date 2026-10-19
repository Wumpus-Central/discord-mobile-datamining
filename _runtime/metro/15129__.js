// _runtime/metro/15129__.js
import _mod15126 from "15126__.js";

export default (arg0, arg1) => {
  const tmp = new _mod15126(arg0, arg1);
  return new _mod15126(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
