// _runtime/metro/15326__.js
import _mod15323 from "15323__.js";

export default (arg0, arg1) => {
  const tmp = new _mod15323(arg0, arg1);
  return new _mod15323(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
