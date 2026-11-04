// _runtime/metro/16177__.js
import _mod16174 from "16174__.js";

export default (arg0, arg1) => {
  const tmp = new _mod16174(arg0, arg1);
  return new _mod16174(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
