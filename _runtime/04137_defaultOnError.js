// _runtime/04137_defaultOnError.js
import _mod4138 from "metro/04138__.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";
import { c } from "04139_c.js";

require = arg1;
let closure_2 = ["onError", "hybridRef"];
({ useEffect: c4, useRef: c5 } = noop);
function defaultOnError(message) {
  return console.error("[" + _mod4138.RiveErrorType[message.type] + "] " + message.message);
}

export const RiveView = function RiveView(arg0) {
  let obj = c;
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ onError, hybridRef } = arg0);
    _require = hybridRef;
    const tmp9 = callback(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onError;
    cResult[2] = tmp9;
    cResult[3] = hybridRef;
    let tmp5 = tmp9;
    let tmp4 = onError;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
  }
  if (tmp4 == null) {
    tmp4 = defaultOnError;
  }
  dependencyMap = callback3(null);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function y() {
      return () => {
        if (ref.current) {
          closure_1_0(closure_1_1[5]).callDispose(tmp.current);
          tmp.current = null;
          const obj = closure_1_0(closure_1_1[5]);
        }
      };
    };
    const items = [];
    cResult[4] = fn;
    cResult[5] = items;
    let tmp11 = items;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  callback2(tmp10, tmp11);
  if (cResult[6] !== tmp6) {
    const fn2 = function b(current) {
      closure_1.current = current;
      let f;
      if (closure_0 != null) {
        f = obj.f;
      }
      if (f) {
        obj.f(current);
      }
    };
    cResult[6] = tmp6;
    cResult[7] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] !== tmp4) {
    obj = { f: null };
    obj[0] = tmp4;
    cResult[8] = tmp4;
    cResult[9] = obj;
    let tmp14 = obj;
  } else {
    tmp14 = cResult[9];
  }
  if (cResult[10] !== tmp13) {
    obj = { f: null };
    obj[0] = tmp13;
    cResult[10] = tmp13;
    cResult[11] = obj;
    let tmp15 = obj;
  } else {
    tmp15 = cResult[11];
  }
  if (cResult[12] === tmp5) {
    if (cResult[13] === tmp14) {
      if (cResult[14] === tmp15) {
        let tmp16 = cResult[15];
      }
      return tmp16;
    }
  }
  obj1 = {};
  const merged = Object.assign(tmp5);
  obj1.onError = tmp14;
  obj1.hybridRef = tmp15;
  const tmp18 = jsx(require("04115_NitroRiveView.js").NitroRiveView, {});
  cResult[12] = tmp5;
  cResult[13] = tmp14;
  cResult[14] = tmp15;
  cResult[15] = tmp18;
  tmp16 = tmp18;
};