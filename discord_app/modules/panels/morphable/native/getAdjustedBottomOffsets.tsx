// === Module 19519: getAdjustedBottomOffsets ===

// Module 19519 (getAdjustedBottomOffsets)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){let[IS_ANDROID]=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};})" }, ];
items[1] = PlatformUtils.isAndroid();
let c0;
[tmp2, tmp3] = items;
function getAdjustedBottomOffsets(arg0) {
  ({ screenBottomOffset, keyboardHeight } = arg0);
  let bottomOffset = screenBottomOffset;
  if (keyboardHeight > 0) {
    let num = 0;
    if (!c0) {
      num = keyboardHeight;
    }
    bottomOffset = screenBottomOffset + (num - tmp);
  }
  return { bottomOffset };
}
const items1 = [tmp3];
getAdjustedBottomOffsets.__closure = items1;
getAdjustedBottomOffsets.__workletHash = 5580789789641;
getAdjustedBottomOffsets.__initData = tmp2;
const result = size.fileFinishedImporting("modules/panels/morphable/native/getAdjustedBottomOffsets.tsx");

export default getAdjustedBottomOffsets;