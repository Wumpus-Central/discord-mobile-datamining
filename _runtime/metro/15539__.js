// _runtime/metro/15539__.js
import _mod15522 from "15522__.js";
import _mod15540 from "15540__.js";

export default (arg0, arg1, arg2) => {
  const arr = _mod15540(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod15522(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod15522(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
