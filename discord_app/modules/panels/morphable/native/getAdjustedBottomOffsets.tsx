// === Module 16231: t ===

// Module 16231 (t)
import obj132 from "obj132" /* 500 */;

obj132 = obj132.isAndroid();
const fn = function t(arg0) {
  ({ screenBottomOffset, keyboardHeight } = arg0);
  let bottomOffset = screenBottomOffset;
  if (keyboardHeight > 0) {
    let num = 0;
    if (!obj132) {
      num = keyboardHeight;
    }
    bottomOffset = screenBottomOffset + (num - tmp);
  }
  return { bottomOffset };
};
fn.__closure = { IS_ANDROID: obj132 };
fn.__workletHash = 9166664651792;
fn.__initData = { code: "function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){const{IS_ANDROID}=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};}" };
const result = obj132.fileFinishedImporting("modules/panels/morphable/native/getAdjustedBottomOffsets.tsx");

export default fn;