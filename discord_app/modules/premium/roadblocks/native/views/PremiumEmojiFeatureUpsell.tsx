// === Module 10327: PremiumEmojiFeatureUpsell ===

// Module 10327 (PremiumEmojiFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 6625 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell" /* 9964 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = { code: "function PremiumEmojiFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumEmojiFeatureUpsell.tsx");

export default function PremiumEmojiFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp3 = useKeyboardIsOpenDefault();
  ReanimatedRexport;
  const fn = function c() {
    value = shouldShow.get();
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
  fn.__initData = __initData;
  let tmp8 = null;
  if (!tmp3) {
    let obj = { style: tmp5.container, children: null };
    obj = { shouldShow: tmp7, featureName: EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp7, featureName: EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE });
    tmp8 = <View shouldShow={tmp7} featureName={EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE} />;
    const tmpResult = PremiumFeatureUpsellDefault;
  }
  return tmp8;
};