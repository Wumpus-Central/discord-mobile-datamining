// _runtime/metro/13795__.js
import _mod13792 from "13792__.js";

export default (arg0, arg1) => {
  const tmp = new _mod13792(arg0, arg1);
  return new _mod13792(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
