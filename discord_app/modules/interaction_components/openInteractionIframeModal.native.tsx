// discord_app/modules/interaction_components/openInteractionIframeModal.native.tsx
import set from "set";
import { INTERACTION_IFRAME_MODAL_KEY as closure_4 } from "INTERACTION_IFRAME_MODAL_KEY";

const require = arg1;
function _openInteractionIframeModal() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c1 = 0;
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
            obj = v0(outer1_2[2]);
            obj.pushLazy(callback(outer1_2[4])(outer1_2[3], outer1_2.paths), callback, outer1_4);
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
  const _openInteractionIframeModal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("module_4572").fileFinishedImporting("modules/interaction_components/openInteractionIframeModal.native.tsx");

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