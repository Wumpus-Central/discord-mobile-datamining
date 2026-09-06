// discord_app/modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import NativeGiftContext from "../../../payments/native/NativeGiftContext.tsx";
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { title: null, description: null };
createStyles = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
createStyles.title = createStyles;
createStyles.description = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  const tmp = closure_8();
  let obj = { children: null };
  obj = {
    children: hasOwnProperty(PremiumGiftBackgroundAnimationDefault, {
      giftStyle: obj.useNativeGiftContext().giftStyle,
    }),
  };
  const items = [hasOwnProperty(View, obj), ,];
  const obj1 = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.MqZXbv);
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.Y1keV0);
  items[2] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items;
  return React5(timestampProducer, obj);
}
export const PremiumGiftDMSuccessActions = function PremiumGiftDMSuccessActions() {
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
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
  obj = { text: null, variant: "primary", onPress: null };
  const intl = onClose(navigation[10]).intl;
  obj.text = intl.string(prePurchaseGiftingBadgeProgress(navigation[11]).bGKjmg);
  obj.onPress = callback;
  return closure_5(onClose(navigation[9]).Button, obj);
};
