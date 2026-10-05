// === Module 10811: PremiumGiftDMPurchaseSuccess ===

// Module 10811 (PremiumGiftDMPurchaseSuccess)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10393 */;
import NativeGiftContext from "NativeGiftContext" /* 10430 */;
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation" /* 10562 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: obj2, description: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let onClose;
  const tmp2 = navigation;
  let obj = onClose(navigation[6]);
  const cResult = obj.c(9);
  const obj2 = onClose(navigation[7]);
  const nativeGiftContext = obj2.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const obj3 = onClose(navigation[8]);
  navigation = obj3.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "PremiumGiftDMSuccessActions" };
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp(tmp2[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  if (cResult[1] === prePurchaseGiftingBadgeProgress) {
    if (cResult[2] === enabled) {
      if (cResult[3] === navigation) {
        let tmp7;
        let tmp8;
        let tmp11;
        if (cResult[4] === onClose) {
          tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[11]).intl;
          const stringResult = intl.string(prePurchaseGiftingBadgeProgress(tmp2[12]).bGKjmg);
          cResult[6] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj5 = { text: tmp8, variant: "primary", onPress: tmp7 };
          const tmp13 = closure_5(onClose(tmp2[13]).Button, obj5);
          cResult[7] = tmp7;
          cResult[8] = tmp13;
          tmp11 = tmp13;
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
        const obj = { currentProgress: tmp2 };
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
}) : (() => {
  let intl;
  let onClose;
  let obj = onClose(navigation[7]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const obj2 = onClose(navigation[8]);
  navigation = obj2.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftDMSuccessActions" }).enabled;
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: tmp2 };
        navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  const obj3 = { text: intl.string(prePurchaseGiftingBadgeProgress(navigation[12]).bGKjmg), variant: "primary", onPress: callback };
  const Button = onClose(navigation[13]).Button;
  intl = onClose(navigation[11]).intl;
  return closure_5(Button, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let obj4;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = closure_8();
  const obj2 = NativeGiftContext;
  const giftStyle = obj2.useNativeGiftContext().giftStyle;
  if (cResult[0] !== giftStyle) {
    const obj3 = { children: hasOwnProperty(PremiumGiftBackgroundAnimationDefault, obj4) };
    obj4 = { giftStyle };
    const tmp9 = hasOwnProperty(View, obj3);
    cResult[0] = giftStyle;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  const title = tmp4.title;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.MqZXbv);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.title) {
    const obj5 = { style: title, variant: "heading-lg/bold", children: tmp10 };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[3] = tmp4.title;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  const description = tmp4.description;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl3.intl;
    const stringResult1 = intl2.string(intl3.t.Y1keV0);
    cResult[5] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.description) {
    const obj6 = { style: description, variant: "text-md/medium", children: tmp15 };
    const tmp19 = hasOwnProperty(Text_Text.Text, obj6);
    cResult[6] = tmp4.description;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp5) {
    if (cResult[9] === tmp12) {
      let tmp20;
      if (cResult[10] === tmp17) {
        tmp20 = cResult[11];
      }
      return tmp20;
    }
  }
  const obj7 = { children: items };
  items = [tmp5, tmp12, tmp17];
  const tmp21 = metroImportDefault(metroRequire, obj7);
  cResult[8] = tmp5;
  cResult[9] = tmp12;
  cResult[10] = tmp17;
  cResult[11] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  let intl;
  let intl2;
  let items;
  const tmp = closure_8();
  const obj2 = { children: items };
  items = [, , ];
  const obj = NativeGiftContext;
  const obj3 = { children: hasOwnProperty(PremiumGiftBackgroundAnimationDefault, { giftStyle: obj.useNativeGiftContext().giftStyle }) };
  items[0] = hasOwnProperty(View, obj3);
  const obj4 = { style: tmp.title, variant: "heading-lg/bold", children: intl.string(intl3.t.MqZXbv) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-md/medium", children: intl2.string(intl3.t.Y1keV0) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[2] = hasOwnProperty(Text2, obj5);
  return metroImportDefault(metroRequire, obj2);
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default tmp5;
export const PremiumGiftDMSuccessActions = tmp4;