// _runtime/metro/16586__.js
import _mod16583 from "16583__.js";

export default (arg0, arg1) => {
  const tmp = new _mod16583(arg0, arg1);
  return new _mod16583(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
