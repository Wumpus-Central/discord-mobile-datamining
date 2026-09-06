// _runtime/metro/14048__.js
import _mod14045 from "14045__.js";

export default (arg0, arg1) => {
  const tmp = new _mod14045(arg0, arg1);
  return new _mod14045(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
