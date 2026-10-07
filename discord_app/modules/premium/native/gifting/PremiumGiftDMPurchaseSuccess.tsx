// === Module 10824: PremiumGiftDMPurchaseSuccess ===

// Module 10824 (PremiumGiftDMPurchaseSuccess)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10406 */;
import NativeGiftContext from "NativeGiftContext" /* 10443 */;
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation" /* 10575 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { title: { marginTop: nativeDefault.space.PX_24, textAlign: "center" }, description: null };
let obj3 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.description = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = onClose(navigation[6]).c(9);
  let obj = onClose(navigation[6]);
  const nativeGiftContext = onClose(navigation[7]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const obj2 = onClose(navigation[7]);
  navigation = onClose(navigation[8]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "PremiumGiftDMSuccessActions" };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp(tmp2[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  if (cResult[1] === prePurchaseGiftingBadgeProgress) {
    if (cResult[2] === enabled) {
      if (cResult[3] === navigation) {
        if (cResult[4] === onClose) {
          let tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[11]).intl;
          const stringResult = intl.string(prePurchaseGiftingBadgeProgress(tmp2[12]).bGKjmg);
          cResult[6] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj5 = { text: tmp8, variant: "primary", onPress: tmp7 };
          const tmp13 = closure_5(tmp(tmp2[13]).Button, obj5);
          cResult[7] = tmp7;
          cResult[8] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
  }
  const fn = function f() {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: tmp };
        navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  };
  cResult[1] = prePurchaseGiftingBadgeProgress;
  cResult[2] = enabled;
  cResult[3] = navigation;
  cResult[4] = onClose;
  cResult[5] = fn;
  tmp7 = fn;
  const obj3 = onClose(navigation[8]);
}) : (() => {
  const nativeGiftContext = onClose(navigation[7]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj = onClose(navigation[7]);
  navigation = onClose(navigation[8]).useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[9]).GiftingBadgeExperiment;
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
  const intl = onClose(navigation[11]).intl;
  obj3.text = intl.string(prePurchaseGiftingBadgeProgress(navigation[12]).bGKjmg);
  obj3.onPress = callback;
  return closure_5(onClose(navigation[13]).Button, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  const tmp4 = closure_8();
  const giftStyle = NativeGiftContext.useNativeGiftContext().giftStyle;
  if (cResult[0] !== giftStyle) {
    const obj3 = { children: null };
    const obj4 = { giftStyle };
    obj3.children = hasOwnProperty(PremiumGiftBackgroundAnimationDefault, obj4);
    const tmp9 = hasOwnProperty(View, obj3);
    cResult[0] = giftStyle;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.MqZXbv);
    cResult[2] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.title) {
    const obj5 = { style: tmp4.title, variant: "heading-lg/bold", children: tmp10 };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[3] = tmp4.title;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.Y1keV0);
    cResult[5] = stringResult1;
    let tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.description) {
    const obj6 = { style: tmp4.description, variant: "text-md/medium", children: tmp15 };
    const tmp19 = hasOwnProperty(Text_Text.Text, obj6);
    cResult[6] = tmp4.description;
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp5) {
    if (cResult[9] === tmp12) {
      if (cResult[10] === tmp17) {
        let tmp20 = cResult[11];
      }
      return tmp20;
    }
  }
  const obj7 = { children: null };
  const items = [tmp5, tmp12, tmp17];
  obj7.children = items;
  const tmp21 = React5(timestampProducer, obj7);
  cResult[8] = tmp5;
  cResult[9] = tmp12;
  cResult[10] = tmp17;
  cResult[11] = tmp21;
  tmp20 = tmp21;
}) : (() => {
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
});
export const PremiumGiftDMSuccessActions = tmp3;