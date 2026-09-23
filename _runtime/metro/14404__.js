// _runtime/metro/14404__.js
import _mod14401 from "14401__.js";

export default (arg0, arg1) => {
  const tmp = new _mod14401(arg0, arg1);
  return new _mod14401(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
