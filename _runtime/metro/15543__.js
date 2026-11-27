// _runtime/metro/15543__.js
import _mod15540 from "15540__.js";

export default (arg0, arg1) => {
  const tmp = new _mod15540(arg0, arg1);
  return new _mod15540(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
