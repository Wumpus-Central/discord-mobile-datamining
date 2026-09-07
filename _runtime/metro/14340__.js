// _runtime/metro/14340__.js
import _mod14323 from "14323__.js";
import _mod14341 from "14341__.js";

export default (arg0, arg1, arg2) => {
  const arr = _mod14341(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp6 = _mod14323(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = _mod14323(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
