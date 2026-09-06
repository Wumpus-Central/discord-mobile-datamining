// === Module 4334: ? ===

// Module 4334
import c from "c" /* 4316 */;
import _mod4329 from "module_4329" /* 4329 */;
import _slicedToArray from "module_32" /* 32 */;

const RiveColor2 = tmp(4324);
require = fn;
fn(19).useCallback;
const f30504 = (colorProperty, arg1) => colorProperty.colorProperty(arg1);

export const useRiveColor = function useRiveColor(FillColor, instance) {
  let obj = c;
  const cResult = obj.c(8);
  const tmp4 = _slicedToArray(_mod4329.useRiveProperty(instance, FillColor, f30504), 3);
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
    let tmp8 = fromIntResult;
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
    let tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4[2]) {
    if (cResult[5] === tmp10) {
      if (cResult[6] === tmp8) {
        let tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  obj = { value: tmp8, setValue: tmp10, error: tmp7 };
  cResult[4] = tmp4[2];
  cResult[5] = tmp10;
  cResult[6] = tmp8;
  cResult[7] = obj;
  tmp11 = obj;
};