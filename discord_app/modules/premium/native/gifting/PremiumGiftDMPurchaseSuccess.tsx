// === Module 11431: PremiumGiftDMPurchaseSuccess ===

// Module 11431 (PremiumGiftDMPurchaseSuccess)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import PremiumGiftModal from "PremiumGiftModal" /* 11010 */;
import NativeGiftContext from "NativeGiftContext" /* 11047 */;
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation" /* 11180 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { title: { marginTop: nativeDefault.space.PX_24, textAlign: "center" }, description: null };
let obj3 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.description = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  const tmp = closure_8();
  const obj2 = { children: null };
  const items = [hasOwnProperty(View, { children: hasOwnProperty(PremiumGiftBackgroundAnimationDefault, { giftStyle: NativeGiftContext.useNativeGiftContext().giftStyle }) }), , ];
  const obj4 = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.MqZXbv);
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.Y1keV0);
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  obj2.children = items;
  return React5(timestampProducer, obj2);
};
export const PremiumGiftDMSuccessActions = function PremiumGiftDMSuccessActions() {
  const nativeGiftContext = onClose(navigation[5]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj = onClose(navigation[5]);
  navigation = onClose(navigation[6]).useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftDMSuccessActions" }).enabled;
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: tmp };
        navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  const obj3 = { text: null, variant: "primary", onPress: null };
  const intl = onClose(navigation[10]).intl;
  obj3.text = intl.string(prePurchaseGiftingBadgeProgress(navigation[11]).bGKjmg);
  obj3.onPress = callback;
  return closure_5(onClose(navigation[9]).Button, obj3);
};