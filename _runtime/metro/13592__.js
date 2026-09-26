// _runtime/metro/13592__.js
import _mod13589 from "13589__.js";

export default (arg0, arg1) => {
  const tmp = new _mod13589(arg0, arg1);
  return new _mod13589(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
