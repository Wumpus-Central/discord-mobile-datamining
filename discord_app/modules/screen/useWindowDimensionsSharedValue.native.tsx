// === Module 11155: mutable ===

// Module 11155 (mutable)
import obj132 from "obj132" /* 2 */;
import uDefault from "u" /* 10561 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 11156 */;
import module_4115 from "module_4115" /* 4115 */;
import useWindowDimensions from "useWindowDimensions" /* 1494 */;

let obj = {};
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = module_4115.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = module_4115.makeMutable(obj);
subscribeToWindowDimensionsDefault((arg0, arg1) => {
  uDefault(mutable, arg0);
  uDefault(mutable1, arg1);
});
function getWindowDimensionsWorklet(arg0) {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  if (true === ignoreKeyboard) {
    let value = mutable1.get();
  } else {
    value = mutable.get();
  }
  return value;
}
getWindowDimensionsWorklet.__closure = { windowDimensionsSharedValueIgnoringKeyboard: mutable1, windowDimensionsSharedValue: mutable };
getWindowDimensionsWorklet.__workletHash = 17271034964949;
getWindowDimensionsWorklet.__initData = { code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}" };
const result = obj132.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable1 : mutable;
};
export { getWindowDimensionsWorklet };