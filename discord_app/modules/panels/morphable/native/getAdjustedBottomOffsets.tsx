// discord_app/modules/panels/morphable/native/getAdjustedBottomOffsets.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

PlatformUtils = PlatformUtils.isAndroid();
const fn = function t(arg0) {
  ({ screenBottomOffset, keyboardHeight } = arg0);
  let bottomOffset = screenBottomOffset;
  if (keyboardHeight > 0) {
    let num = 0;
    if (!PlatformUtils) {
      num = keyboardHeight;
    }
    bottomOffset = screenBottomOffset + (num - tmp);
  }
  return { bottomOffset };
};
fn.__closure = { IS_ANDROID: PlatformUtils };
fn.__workletHash = 9166664651792;
fn.__initData = {
  code: "function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){const{IS_ANDROID}=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};}",
};
const result = size.fileFinishedImporting("modules/panels/morphable/native/getAdjustedBottomOffsets.tsx");

export default fn;
