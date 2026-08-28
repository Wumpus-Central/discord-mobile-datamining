// === Module 16909: _openInteractionIframeModal ===

// Module 16909 (_openInteractionIframeModal)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { INTERACTION_IFRAME_MODAL_KEY as closure_4 } from "INTERACTION_IFRAME_MODAL_KEY" /* 16910 */;

const require = arg1;
function _openInteractionIframeModal() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj = v0(closure_1_2[2]);
            obj.pushLazy(callback(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), callback, closure_1_4);
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          v0 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/interaction_components/openInteractionIframeModal.native.tsx");

export default function openInteractionIframeModal() {
  const self = this;
  const apply = _openInteractionIframeModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};