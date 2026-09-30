// _runtime/metro/13787__.js
import _mod13784 from "13784__.js";

export default (arg0, arg1) => {
  const tmp = new _mod13784(arg0, arg1);
  return new _mod13784(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
