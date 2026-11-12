// === Module 13704: useWindowDimensionsSharedValue ===

// Module 13704 (useWindowDimensionsSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11923 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 13705 */;
import module_1652_mod from "module_1652" /* 1652 */;
import useWindowDimensions_mod from "useWindowDimensions" /* 1493 */;
import size from "module_2" /* 2 */;

let module_1652 = module_1652_mod;
let useWindowDimensions = useWindowDimensions_mod;
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = module_1652.makeMutable({});
let module_1652 = module_1652_mod;
let useWindowDimensions = useWindowDimensions_mod;
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = module_1652.makeMutable({});
subscribeToWindowDimensionsDefault((arg0, arg1) => {
  updateSharedValueIfChangedDefault(mutable, arg0);
  updateSharedValueIfChangedDefault(mutable1, arg1);
});
const items = [{ code: "(function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){let[windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue]=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();})" }, mutable1, mutable];
let closure_129_0;
let closure_129_1;
[tmp7, tmp8, tmp9] = items;
function getWindowDimensionsWorklet() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  if (true === ignoreKeyboard) {
    value = importDefault.get();
  } else {
    value = dependencyMap.get();
  }
  return value;
}
const items1 = [tmp8, tmp9];
getWindowDimensionsWorklet.__closure = items1;
getWindowDimensionsWorklet.__workletHash = 2245429898348;
getWindowDimensionsWorklet.__initData = tmp7;
const result = size.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable1 : mutable;
};
export { getWindowDimensionsWorklet };