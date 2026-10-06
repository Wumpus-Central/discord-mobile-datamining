// _runtime/metro/04654__.js
import react from "../00019_react.js";
import react2 from "../00576_react.js";
import _mod4649 from "04649__.js";
import _slicedToArray from "00032__slicedToArray.js";

let tmp;
const RiveColor2 = tmp(4644);
react.useCallback;
const f31263 = (colorProperty, arg1) => colorProperty.colorProperty(arg1);

export const useRiveColor = function useRiveColor(arg0, arg1) {
  let closure_0;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  const obj2 = _mod4649;
  const tmp4 = _slicedToArray(obj2.useRiveProperty(arg1, arg0, f31263), 3);
  [tmp5, tmp6] = tmp4;
  require = tmp6;
  if (cResult[0] !== tmp5) {
    let fromIntResult;
    if (undefined !== tmp5) {
      let RiveColor = RiveColor2.RiveColor;
      fromIntResult = RiveColor.fromInt(tmp5);
    }
    cResult[0] = tmp5;
    cResult[1] = fromIntResult;
    tmp8 = fromIntResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const fn = function p(str) {
      let fromHexStringResult = str;
      if (typeof str === "string") {
        const RiveColor = RiveColor2.RiveColor;
        fromHexStringResult = RiveColor.fromHexString(str);
      }
      tmp6(fromHexStringResult.toInt());
    };
    cResult[2] = tmp6;
    cResult[3] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4[2]) {
    if (cResult[5] === tmp10) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  const obj3 = { value: tmp8, setValue: tmp10, error: tmp4[2] };
  cResult[4] = tmp4[2];
  cResult[5] = tmp10;
  cResult[6] = tmp8;
  cResult[7] = obj3;
  tmp11 = obj3;
};
