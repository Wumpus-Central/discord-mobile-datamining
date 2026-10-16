// _runtime/metro/15046__.js
import _mod15043 from "15043__.js";

export default (arg0, arg1) => {
  const tmp = new _mod15043(arg0, arg1);
  return new _mod15043(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
