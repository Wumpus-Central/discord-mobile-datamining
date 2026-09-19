// _runtime/metro/14311__.js
import _mod14308 from "14308__.js";

export default (arg0, arg1) => {
  const tmp = new _mod14308(arg0, arg1);
  return new _mod14308(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
