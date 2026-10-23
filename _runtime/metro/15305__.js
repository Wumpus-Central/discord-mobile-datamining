// _runtime/metro/15305__.js
import _mod15302 from "15302__.js";

export default (arg0, arg1) => {
  const tmp = new _mod15302(arg0, arg1);
  return new _mod15302(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
