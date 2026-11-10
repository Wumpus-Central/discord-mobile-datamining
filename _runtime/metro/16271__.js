// _runtime/metro/16271__.js
import _mod16268 from "16268__.js";

export default (arg0, arg1) => {
  const tmp = new _mod16268(arg0, arg1);
  return new _mod16268(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
