// _runtime/metro/16234__.js
import _mod16231 from "16231__.js";

export default (arg0, arg1) => {
  const tmp = new _mod16231(arg0, arg1);
  return new _mod16231(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
