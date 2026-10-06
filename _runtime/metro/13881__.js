// _runtime/metro/13881__.js
import _mod13878 from "13878__.js";

let set;

export default (arg0, arg1) => {
  set = new _mod13878(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
