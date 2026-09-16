// _runtime/metro/14153__.js
import _mod14150 from "14150__.js";

export default (arg0, arg1) => {
  const tmp = new _mod14150(arg0, arg1);
  return new _mod14150(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
