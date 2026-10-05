// _runtime/metro/13863__.js
import _mod13860 from "13860__.js";

export default (arg0, arg1) => {
  const tmp = new _mod13860(arg0, arg1);
  return new _mod13860(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
