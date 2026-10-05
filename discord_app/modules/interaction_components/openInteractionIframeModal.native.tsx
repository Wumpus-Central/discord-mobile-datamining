// discord_app/modules/interaction_components/openInteractionIframeModal.native.tsx
import InteractionIframeConstants from "native/InteractionIframeConstants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c1;

let obj = function _openInteractionIframeModal() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj = require("ModalActionCreators");
          obj.pushLazy(require("asyncRequire")(paths[3], paths.paths), closure_0, closure_2_4);
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/openInteractionIframeModal.native.tsx");

export default function openInteractionIframeModal() {
  return obj(...arguments);
}
