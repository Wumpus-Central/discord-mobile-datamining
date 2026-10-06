// === Module 13201: PremiumPlanWhatYouLoseActionSheet ===

// Module 13201 (PremiumPlanWhatYouLoseActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10407 */;
import AssetRegistryDefault from "AssetRegistry" /* 13156 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13206 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13207 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13208 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13209 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, hideActionSheetResult, tmp2, tmp3;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: { paddingTop: 24, paddingHorizontal: 24 }, title: obj2, subtitle: obj3, item: obj4, itemLabel: { marginTop: 8 }, footer: { paddingHorizontal: 16 }, button: { marginBottom: 8 }, keepText: obj5 };
obj2 = { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { marginBottom: 16, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
obj5 = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let imageSource;
  let items;
  let text;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  ({ imageSource, text } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp8 = metroRequire(FastImageDefault, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.itemLabel) {
    let tmp9;
    if (cResult[3] === text) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.item) {
      if (cResult[6] === tmp5) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp4.item, children: items };
    items = [tmp5, tmp9];
    const tmp14 = metroImportDefault(View, obj3);
    cResult[5] = tmp4.item;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj4 = { variant: "text-md/medium", style: tmp4.itemLabel, children: text };
  const tmp10 = metroRequire(Text_Text.Text, obj4);
  cResult[2] = tmp4.itemLabel;
  cResult[3] = text;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let imageSource;
  let items;
  let text;
  ({ imageSource, text } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.item, children: items };
  items = [metroRequire(FastImageDefault, { source: imageSource }), ];
  const obj2 = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = metroRequire(Text_Text.Text, obj2);
  return metroImportDefault(View, obj);
});
let obj6 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((subscription) => {
  let analyticsLocations;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let mode;
  let onContinue;
  let tmp12;
  let tmp29;
  let tmp5;
  let tmpResult5;
  let tmpResult6;
  let obj = onContinue(analyticsLocations[7]);
  const cResult = obj.c(69);
  ({ mode, onContinue } = subscription);
  subscription = subscription.subscription;
  const tmp4 = closure_8();
  if (cResult[0] !== subscription) {
    const tmpResult = onContinue(analyticsLocations[10]);
    const premiumTypeFromSubscription = tmpResult.getPremiumTypeFromSubscription(subscription);
    cResult[0] = subscription;
    cResult[1] = premiumTypeFromSubscription;
    tmp5 = premiumTypeFromSubscription;
  } else {
    tmp5 = cResult[1];
  }
  analyticsLocations = subscription(tmp2[11])().analyticsLocations;
  const tmpResult4 = onContinue(analyticsLocations[12]);
  const whatYouLoseProfileTier1Source = tmpResult4.useWhatYouLoseProfileTier1Source();
  subscription(analyticsLocations[13])(null != tmp5, "Expected premium type");
  if (PremiumTypes.TIER_0 === tmp5) {
    let tmp26;
    let tmp27;
    const _Symbol8 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { imageSource: subscription(analyticsLocations[14]), text: intl7.format(onContinue(analyticsLocations[15]).t["0hUHi6"], {}) };
      intl7 = onContinue(tmp2[15]).intl;
      cResult[2] = obj2;
      tmp26 = obj2;
    } else {
      tmp26 = cResult[2];
    }
    const _Symbol9 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { imageSource: subscription(analyticsLocations[16]), text: intl8.format(onContinue(analyticsLocations[15]).t.wFWO6D, {}) };
      intl8 = onContinue(tmp2[15]).intl;
      cResult[3] = obj3;
      tmp27 = obj3;
    } else {
      tmp27 = cResult[3];
    }
    if (cResult[4] === tmp26) {
      let tmp28;
      if (cResult[5] === tmp27) {
        tmp28 = cResult[6];
      }
      tmp12 = tmp28;
    }
    const items = [tmp26, tmp27];
    cResult[4] = tmp26;
    cResult[5] = tmp27;
    cResult[6] = items;
    tmp28 = items;
  } else if (PremiumTypes.TIER_1 === tmp5) {
    let tmp19;
    const _Symbol5 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = onContinue(tmp2[15]).intl;
      const formatResult = intl4.format(onContinue(analyticsLocations[15]).t.xCaYwE, {});
      cResult[7] = formatResult;
      tmp19 = formatResult;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] === tmp19) {
      let tmp21;
      let tmp22;
      let tmp23;
      if (cResult[9] === whatYouLoseProfileTier1Source) {
        tmp21 = cResult[10];
      }
      const _Symbol6 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { imageSource: subscription(analyticsLocations[17]), text: intl5.format(onContinue(analyticsLocations[15]).t.wK04T1, {}) };
        intl5 = onContinue(tmp2[15]).intl;
        cResult[11] = obj4;
        tmp22 = obj4;
      } else {
        tmp22 = cResult[11];
      }
      const _Symbol7 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { imageSource: subscription(analyticsLocations[18]), text: intl6.format(onContinue(analyticsLocations[15]).t.K4Hv69, {}) };
        intl6 = onContinue(tmp2[15]).intl;
        cResult[12] = obj5;
        tmp23 = obj5;
      } else {
        tmp23 = cResult[12];
      }
      if (cResult[13] === tmp21) {
        if (cResult[14] === tmp22) {
          let tmp24;
          if (cResult[15] === tmp23) {
            tmp24 = cResult[16];
          }
          tmp12 = tmp24;
        }
      }
      const items1 = [tmp21, tmp22, tmp23];
      cResult[13] = tmp21;
      cResult[14] = tmp22;
      cResult[15] = tmp23;
      cResult[16] = items1;
      tmp24 = items1;
    }
    obj6 = { imageSource: whatYouLoseProfileTier1Source, text: tmp19 };
    cResult[8] = tmp19;
    cResult[9] = whatYouLoseProfileTier1Source;
    cResult[10] = obj6;
    tmp21 = obj6;
  } else if (PremiumTypes.TIER_2 === tmp5) {
    let tmp14;
    let tmp15;
    let tmp16;
    const _Symbol2 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { imageSource: subscription(analyticsLocations[19]), text: intl.format(onContinue(analyticsLocations[15]).t["gpqr+n"], {}) };
      intl = onContinue(tmp2[15]).intl;
      cResult[17] = obj7;
      tmp14 = obj7;
    } else {
      tmp14 = cResult[17];
    }
    const _Symbol3 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { imageSource: subscription(analyticsLocations[18]), text: intl2.format(onContinue(analyticsLocations[15]).t.wRxEDW, {}) };
      intl2 = onContinue(tmp2[15]).intl;
      cResult[18] = obj8;
      tmp15 = obj8;
    } else {
      tmp15 = cResult[18];
    }
    const _Symbol4 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { imageSource: subscription(analyticsLocations[17]), text: intl3.format(onContinue(analyticsLocations[15]).t["4WZ7T2"], {}) };
      intl3 = onContinue(tmp2[15]).intl;
      cResult[19] = obj9;
      tmp16 = obj9;
    } else {
      tmp16 = cResult[19];
    }
    if (cResult[20] === tmp14) {
      if (cResult[21] === tmp15) {
        let tmp17;
        if (cResult[22] === tmp16) {
          tmp17 = cResult[23];
        }
        tmp12 = tmp17;
      }
    }
    const items2 = [tmp14, tmp15, tmp16];
    cResult[20] = tmp14;
    cResult[21] = tmp15;
    cResult[22] = tmp16;
    cResult[23] = items2;
    tmp17 = items2;
  } else {
    const _Symbol = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [];
      cResult[24] = items3;
      tmp12 = items3;
    } else {
      tmp12 = cResult[24];
    }
  }
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = subscription(analyticsLocations[20]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    cResult[25] = B;
    tmp29 = B;
  } else {
    class B {
      constructor() {
        obj = subscription(analyticsLocations[20]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
  }
  B = tmp29;
  if (cResult[26] === analyticsLocations) {
    let tmp30;
    class B {
      constructor() {
        obj = subscription(analyticsLocations[20]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    if (cResult[29] !== onContinue) {
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
      cResult[29] = onContinue;
      cResult[30] = U;
      tmp30 = U;
    } else {
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
    }
    U = tmp30;
    if (cResult[31] !== tmp5) {
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
      const obj10 = { premiumType: tmp5 };
      cResult[31] = tmp5;
      cResult[32] = closure_6(subscription(analyticsLocations[22]), obj10);
      const tmp32 = closure_6(subscription(analyticsLocations[22]), obj10);
    } else {
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
    }
    const body = tmp4.body;
    if (cResult[33] !== mode) {
      let stringResult;
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
      if (mode === obj6.CANCEL) {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        stringResult = obj14.string(onContinue(tmp2[15]).t.PWq8TL);
      } else {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        stringResult = obj13.string(onContinue(tmp2[15]).t["7VcWW0"]);
      }
      cResult[33] = mode;
      cResult[34] = stringResult;
    } else {
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
    }
    if (cResult[35] === tmp4.title) {
      let format2Result;
      class U {
        constructor(arg0) {
          tmp = onContinue(subscription);
          tmp2 = closure_3();
          return;
        }
      }
      if (cResult[38] === mode) {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        if (cResult[41] === tmp4.subtitle) {
          class U {
            constructor(arg0) {
              tmp = onContinue(subscription);
              tmp2 = closure_3();
              return;
            }
          }
          if (cResult[44] !== tmp12) {
            class U {
              constructor(arg0) {
                tmp = onContinue(subscription);
                tmp2 = closure_3();
                return;
              }
            }
            cResult[44] = tmp12;
            cResult[45] = tmp47;
          } else {
            class U {
              constructor(arg0) {
                tmp = onContinue(subscription);
                tmp2 = closure_3();
                return;
              }
            }
          }
          if (cResult[46] === tmp4.body) {
            class U {
              constructor(arg0) {
                tmp = onContinue(subscription);
                tmp2 = closure_3();
                return;
              }
            }
          }
          const obj11 = { style: body, children: items4 };
          items4 = [tmp35, tmp43, tmp47];
          cResult[46] = tmp4.body;
          cResult[47] = tmp43;
          cResult[48] = tmp47;
          cResult[49] = tmp35;
          cResult[50] = closure_7(U, obj11);
          const tmp51 = closure_7(U, obj11);
        }
        const obj12 = { variant: "text-md/medium", style: tmp4.subtitle, children: tmp38 };
        cResult[41] = tmp4.subtitle;
        cResult[42] = tmp38;
        cResult[43] = closure_6(onContinue(analyticsLocations[9]).Text, obj12);
        const tmp45 = closure_6(onContinue(analyticsLocations[9]).Text, obj12);
      }
      if (mode === obj6.CANCEL) {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        const format2 = tmp42.format;
        const obj15 = { subscriptionName: tmpResult5.getPremiumTypeDisplayName(tmp5, true) };
        const jh5mUz = onContinue(tmp2[15]).t.jh5mUz;
        tmpResult5 = onContinue(analyticsLocations[10]);
        format2Result = format2(jh5mUz, obj15);
      } else {
        class U {
          constructor(arg0) {
            tmp = onContinue(subscription);
            tmp2 = closure_3();
            return;
          }
        }
        const format = tmp40.format;
        const obj16 = { subscriptionName: tmpResult6.getPremiumTypeDisplayName(tmp5, true) };
        const Qk34Ik = onContinue(tmp2[15]).t.Qk34Ik;
        tmpResult6 = onContinue(analyticsLocations[10]);
        format2Result = format(Qk34Ik, obj16);
      }
      cResult[38] = mode;
      cResult[39] = tmp5;
      cResult[40] = format2Result;
    }
    const obj17 = { variant: "heading-xl/extrabold", style: tmp4.title, children: tmp33 };
    cResult[35] = tmp4.title;
    cResult[36] = tmp33;
    cResult[37] = closure_6(onContinue(analyticsLocations[9]).Text, obj17);
    const tmp37 = closure_6(onContinue(analyticsLocations[9]).Text, obj17);
  }
  class F {
    constructor() {
      tmp = closure_0(closure_2[21]);
      obj = { subscription, analyticsLocations, fromStep: closure_0(closure_2[21]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[21]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      trackPremiumSubscriptionCancellationFlowStep = tmp.trackPremiumSubscriptionCancellationFlowStep;
      result = trackPremiumSubscriptionCancellationFlowStep(obj);
      tmp3 = closure_3();
      return;
    }
  }
  cResult[26] = analyticsLocations;
  cResult[27] = subscription;
  cResult[28] = F;
}) : ((arg0) => {
  let Button;
  let format2Result;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let mode;
  let obj11;
  let require;
  let stringResult;
  let subscription;
  let tmp2Result;
  let tmp2Result2;
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  let tmp = closure_8();
  let obj = require("PremiumUtils");
  premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[11])().analyticsLocations;
  let obj2 = require("WhatYouLoseProfileTier1");
  const whatYouLoseProfileTier1Source = obj2.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[13])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
      const obj2 = { imageSource: AssetRegistryDefault2, text: intl7.format(intl9.t["0hUHi6"], {}) };
      intl7 = intl9.intl;
      const items = [obj2, ];
      const obj3 = { imageSource: AssetRegistryDefault3, text: intl8.format(intl9.t.wFWO6D, {}) };
      intl8 = intl9.intl;
      items[1] = obj3;
      return items;
    } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
      const obj4 = { imageSource: whatYouLoseProfileTier1Source, text: intl4.format(intl9.t.xCaYwE, {}) };
      intl4 = intl9.intl;
      const items1 = [obj4, , ];
      const obj5 = { imageSource: AssetRegistryDefault, text: intl5.format(intl9.t.wK04T1, {}) };
      intl5 = intl9.intl;
      items1[1] = obj5;
      obj6 = { imageSource: AssetRegistryDefault4, text: intl6.format(intl9.t.K4Hv69, {}) };
      intl6 = intl9.intl;
      items1[2] = obj6;
      return items1;
    } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
      const obj = { imageSource: AssetRegistryDefault5, text: intl.format(intl9.t["gpqr+n"], {}) };
      intl = intl9.intl;
      const items2 = [obj, , ];
      const obj7 = { imageSource: AssetRegistryDefault4, text: intl2.format(intl9.t.wRxEDW, {}) };
      intl2 = intl9.intl;
      items2[1] = obj7;
      const obj8 = { imageSource: AssetRegistryDefault, text: intl3.format(intl9.t["4WZ7T2"], {}) };
      intl3 = intl9.intl;
      items2[2] = obj8;
      return items2;
    } else {
      return [];
    }
  }, items);
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  let items1 = [closure_6(subscription(premiumTypeFromSubscription[22]), { premiumType: premiumTypeFromSubscription }), , ];
  let obj3 = { style: tmp.body, children: items2 };
  let obj4 = { variant: "heading-xl/extrabold", style: tmp.title, children: stringResult };
  const Text = require("Text/Text").Text;
  const tmp10 = obj6;
  if (mode === obj6.CANCEL) {
    let intl2 = require("intl").intl;
    stringResult = intl2.string(require("intl").t.PWq8TL);
  } else {
    let intl = require("intl").intl;
    stringResult = intl.string(require("intl").t["7VcWW0"]);
  }
  items2 = [closure_6(Text, obj4), , ];
  let obj5 = { variant: "text-md/medium", style: tmp.subtitle, children: format2Result };
  const Text2 = require("Text/Text").Text;
  if (mode === tmp10.CANCEL) {
    let intl4 = require("intl").intl;
    const format2 = intl4.format;
    obj6 = { subscriptionName: tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    const jh5mUz = require("intl").t.jh5mUz;
    tmp2Result = require("PremiumUtils");
    format2Result = format2(jh5mUz, obj6);
  } else {
    let intl3 = require("intl").intl;
    const format = intl3.format;
    let obj7 = { subscriptionName: tmp2Result2.getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    const Qk34Ik = require("intl").t.Qk34Ik;
    tmp2Result2 = require("PremiumUtils");
    format2Result = format(Qk34Ik, obj7);
  }
  let obj8 = { children: items1 };
  items2[1] = closure_6(Text2, obj5);
  items2[2] = memo.map((item, index) => {
    const obj = {};
    const merged = Object.assign(item);
    return closure_1_6(closure_1_9, obj, index);
  });
  items1[1] = closure_7(whatYouLoseProfileTier1Source, obj3);
  const obj9 = { style: tmp.footer, children: items3 };
  const obj10 = { style: tmp.button, children: closure_6(Button, obj11) };
  obj11 = {
    text: intl5.string(require("intl").t["3PatSz"]),
    grow: true,
    onPress() {
      _require(PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE]);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  Button = require("components/Button/Button").Button;
  intl5 = require("intl").intl;
  items3 = [closure_6(whatYouLoseProfileTier1Source, obj10), ];
  const obj12 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      const trackPremiumSubscriptionCancellationFlowStep = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationFlowStep;
      const obj = { subscription, analyticsLocations, fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = trackPremiumSubscriptionCancellationFlowStep(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    children: intl6.string(require("intl").t.rzVN6j)
  };
  const Text3 = require("Text/Text").Text;
  intl6 = require("intl").intl;
  items3[1] = closure_6(Text3, obj12);
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj9);
  return closure_7(BottomSheet, obj8);
});
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default tmp4;
export const WhatYouLoseMode = obj6;