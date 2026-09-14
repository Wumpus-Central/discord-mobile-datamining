// === Module 12163: useWindowDimensionsSharedValue ===

// Module 12163 (useWindowDimensionsSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11488 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 12164 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4373 */;
import useWindowDimensions_mod from "useWindowDimensions" /* 1477 */;
import size from "module_2" /* 2 */;

let ReanimatedRexport = ReanimatedRexport_mod;
let useWindowDimensions = useWindowDimensions_mod;
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = ReanimatedRexport.makeMutable({});
let ReanimatedRexport = ReanimatedRexport_mod;
let useWindowDimensions = useWindowDimensions_mod;
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = ReanimatedRexport.makeMutable({});
subscribeToWindowDimensionsDefault((arg0, arg1) => {
  updateSharedValueIfChangedDefault(mutable, arg0);
  updateSharedValueIfChangedDefault(mutable1, arg1);
});
function getWindowDimensionsWorklet(arg0) {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  if (true === ignoreKeyboard) {
    value = mutable1.get();
  } else {
    value = mutable.get();
  }
  return value;
}
getWindowDimensionsWorklet.__closure = { windowDimensionsSharedValueIgnoringKeyboard: mutable1, windowDimensionsSharedValue: mutable };
getWindowDimensionsWorklet.__workletHash = 17271034964949;
getWindowDimensionsWorklet.__initData = { code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}" };
const result = size.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable1 : mutable;
};
export { getWindowDimensionsWorklet };