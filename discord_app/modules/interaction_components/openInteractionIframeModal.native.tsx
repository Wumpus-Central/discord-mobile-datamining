// === Module 17400: openInteractionIframeModal ===

// Module 17400 (openInteractionIframeModal)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _openInteractionIframeModal(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        obj = require("ModalActionCreators");
        obj.pushLazy(require("asyncRequireImpl")(paths[3], paths.paths), closure_0, React4);
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c1 = tmp;
      throw tmp10;
    }
  }
};
let closure_4 = fn(17401).INTERACTION_IFRAME_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/openInteractionIframeModal.native.tsx");

export default function openInteractionIframeModal() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};