// discord_app/modules/screen/useWindowDimensionsSharedValue.native.tsx
import updateSharedValueIfChangedDefault from "../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions.native.tsx";
import ReanimatedRexport from "../reanimated/ReanimatedRexport.tsx";
import useWindowDimensions from "useWindowDimensions.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {};
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = ReanimatedRexport.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = ReanimatedRexport.makeMutable(obj);
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
getWindowDimensionsWorklet.__closure = {
  windowDimensionsSharedValueIgnoringKeyboard: mutable1,
  windowDimensionsSharedValue: mutable,
};
getWindowDimensionsWorklet.__workletHash = 17271034964949;
getWindowDimensionsWorklet.__initData = {
  code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}",
};
const result = size.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable1 : mutable;
}
export { getWindowDimensionsWorklet };
