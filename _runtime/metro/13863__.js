// _runtime/metro/13863__.js
import _mod13860 from "13860__.js";

let set;

export default (arg0, arg1) => {
  set = new _mod13860(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
