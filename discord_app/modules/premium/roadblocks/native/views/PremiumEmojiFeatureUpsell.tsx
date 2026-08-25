// === Module 8873: PremiumEmojiFeatureUpsell ===

// Module 8873 (PremiumEmojiFeatureUpsell)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { position: "absolute", bottom: arg0 + ThemesDefault.space.PX_12, left: 0, right: 0 };
  obj[0] = obj;
  return obj;
});
let closure_6 = { code: "function PremiumEmojiFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumEmojiFeatureUpsell.tsx");

export default function PremiumEmojiFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp = inPortalKeyboard;
  const tmp3 = inPortalKeyboard(shouldShow[6])();
  const tmp4 = bottomSheetIndex;
  bottomSheetIndex(shouldShow[8]);
  const fn = function c() {
    let value = shouldShow.get();
    if (!value) {
      return value;
    } else {
      value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        let tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
    }
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 10168295304319;
  fn.__initData = closure_6;
  let tmp8 = null;
  if (!tmp3) {
    let obj = { style: null, children: null };
    obj[0] = tmp5.container;
    obj = { shouldShow: null, featureName: null };
    obj[0] = tmp7;
    obj[1] = tmp4(tmp2[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    obj[1] = jsx(tmp(tmp2[9]), { shouldShow: null, featureName: null });
    tmp8 = <View shouldShow={null} featureName={null} />;
    const tmpResult = tmp(tmp2[9]);
  }
  return tmp8;
};