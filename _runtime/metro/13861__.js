// _runtime/metro/13861__.js
import _mod13858 from "13858__.js";

export default (arg0, arg1) => {
  const tmp = new _mod13858(arg0, arg1);
  return new _mod13858(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
