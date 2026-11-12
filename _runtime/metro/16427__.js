// _runtime/metro/16427__.js
import _mod16424 from "16424__.js";

export default (arg0, arg1) => {
  const tmp = new _mod16424(arg0, arg1);
  return new _mod16424(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
