// === Module 4630: RiveView ===

// Module 4630 (RiveView)
import Fragment from "Fragment" /* 21 */;
import RiveErrorType from "RiveErrorType" /* 4631 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let closure_2 = ["onError", "hybridRef"];
({ useEffect: closure_4, useRef: hasOwnProperty } = react);
const jsx = Fragment.jsx;
function defaultOnError(message) {
  return console.error("[" + RiveErrorType.RiveErrorType[message.type] + "] " + message.message);
}

export const RiveView = function RiveView(arg0) {
  let closure_0;
  let closure_1;
  let hybridRef;
  let onError;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ onError, hybridRef } = arg0);
    _require = hybridRef;
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onError;
    cResult[2] = tmp9;
    cResult[3] = hybridRef;
    tmp5 = tmp9;
    tmp4 = onError;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
  }
  if (tmp4 == null) {
    tmp4 = defaultOnError;
  }
  dependencyMap = closure_5(null);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function y() {
      let ref;
      return () => {
        if (ref.current) {
          const obj = closure_0(ref[5]);
          obj.callDispose(ref.current);
          ref.current = null;
        }
      };
    };
    const items = [];
    cResult[4] = fn;
    cResult[5] = items;
    tmp11 = items;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  closure_4(tmp10, tmp11);
  if (cResult[6] !== hybridRef) {
    const fn2 = function b(current) {
      closure_1.current = current;
      let f;
      if (closure_0 != null) {
        f = closure_0.f;
      }
      if (f) {
        closure_0.f(current);
      }
    };
    cResult[6] = hybridRef;
    cResult[7] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] !== tmp4) {
    const obj2 = { f: tmp4 };
    cResult[8] = tmp4;
    cResult[9] = obj2;
    tmp14 = obj2;
  } else {
    tmp14 = cResult[9];
  }
  if (cResult[10] !== tmp13) {
    const obj3 = { f: tmp13 };
    cResult[10] = tmp13;
    cResult[11] = obj3;
    tmp15 = obj3;
  } else {
    tmp15 = cResult[11];
  }
  if (cResult[12] === tmp5) {
    if (cResult[13] === tmp14) {
      let tmp16;
      if (cResult[14] === tmp15) {
        tmp16 = cResult[15];
      }
      return tmp16;
    }
  }
  const NitroRiveView = tmp(4608).NitroRiveView;
  const merged = Object.assign(tmp5);
  const tmp18 = <NitroRiveView onError={tmp14} hybridRef={tmp15} />;
  cResult[12] = tmp5;
  cResult[13] = tmp14;
  cResult[14] = tmp15;
  cResult[15] = tmp18;
  tmp16 = tmp18;
};