// === Module 10781: PremiumGiftDuration ===

// Module 10781 (PremiumGiftDuration)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import react_native2 from "react-native" /* 4594 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRow from "TableRow" /* 5993 */;
import RowButton2 from "RowButton" /* 8897 */;
import NativeGiftContext from "NativeGiftContext" /* 10430 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10483 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let SubscriptionIntervalTypes;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
let obj7;
const View = react_native.View;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, SubscriptionIntervalTypes } = PremiumConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSelected: obj3, labelContainer: { flexDirection: "row" }, labelPromo: obj4 };
obj2 = { marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
obj4 = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let RowButton;
  let Text;
  let accessibilityRole;
  let accessibilityState;
  let obj9;
  let planInterval;
  let selected;
  let str3;
  let tmp11;
  const obj = react2;
  const cResult = obj.c(31);
  ({ selected, planInterval } = arg0);
  const obj2 = NativeGiftContext;
  const nativeGiftContext = obj2.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const premiumType = nativeGiftContext.premiumType;
  const tmp5 = closure_9();
  if (selected) {
    RowButton = TableRow.TableRow;
  } else {
    RowButton = RowButton2.RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + React3 + "%";
  }
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, planInterval);
  if (cResult[0] !== selected) {
    const obj3 = { selected };
    cResult[0] = selected;
    cResult[1] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[1];
  }
  const tmpResult = react_native2;
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp11);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp5.containerSelected;
  }
  if (cResult[2] === tmp5.container) {
    let tmp13;
    let tmp14;
    let tmp16;
    if (cResult[3] === selected) {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== planInterval) {
      let stringResult;
      if (planInterval === SubscriptionIntervalTypes.MONTH) {
        const intl2 = intl4.intl;
        stringResult = intl2.string(intl4.t.Mh9bTt);
      } else {
        const intl = intl4.intl;
        stringResult = intl.string(intl4.t.DRgqMo);
      }
      cResult[5] = planInterval;
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp14) {
      const obj4 = { variant: "text-md/semibold", children: tmp14 };
      const tmp18 = metroRequire(Text_Text.Text, obj4);
      cResult[7] = tmp14;
      cResult[8] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === combined) {
      let tmp19;
      if (cResult[10] === tmp5.labelPromo) {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp5.labelContainer) {
        if (cResult[13] === tmp16) {
          let tmp23;
          let tmp26;
          if (cResult[14] === tmp19) {
            tmp23 = cResult[15];
          }
          if (cResult[16] !== tmp10) {
            class M {
              constructor() {
                tmp = setPlanInterval(planInterval);
                return;
              }
            }
            cResult[16] = tmp10;
            cResult[17] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[17];
          }
          if (cResult[18] === planInterval) {
            let tmp29;
            if (cResult[19] === setPlanInterval) {
              tmp29 = cResult[20];
            }
            if (cResult[21] === RowButton) {
              if (cResult[22] === accessibilityRole) {
                if (cResult[23] === accessibilityState) {
                  if (cResult[24] === tmp23) {
                    if (cResult[25] === tmp26) {
                      let tmp30;
                      if (cResult[26] === tmp29) {
                        tmp30 = cResult[27];
                      }
                      if (cResult[28] === tmp30) {
                        let tmp34;
                        if (cResult[29] === tmp13) {
                          tmp34 = cResult[30];
                        }
                        return tmp34;
                      }
                      class M {
                        constructor() {
                          tmp = setPlanInterval(planInterval);
                          return;
                        }
                      }
                      const obj6 = { style: tmp13, children: tmp30 };
                      const tmp36 = metroRequire(View, obj6);
                      cResult[28] = tmp30;
                      cResult[29] = tmp13;
                      cResult[30] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                }
              }
            }
            class M {
              constructor() {
                tmp = setPlanInterval(planInterval);
                return;
              }
            }
            tmp32[0] = tmp23;
            tmp32[1] = tmp26;
            tmp32[2] = tmp29;
            tmp32[4] = accessibilityRole;
            tmp32[5] = accessibilityState;
            const tmp33 = metroRequire(RowButton, tmp32);
            cResult[21] = RowButton;
            cResult[22] = accessibilityRole;
            cResult[23] = accessibilityState;
            cResult[24] = tmp23;
            cResult[25] = tmp26;
            cResult[26] = tmp29;
            cResult[27] = tmp33;
            tmp30 = tmp33;
          }
          class M {
            constructor() {
              tmp = setPlanInterval(planInterval);
              return;
            }
          }
          cResult[18] = planInterval;
          cResult[19] = setPlanInterval;
          cResult[20] = M;
          tmp29 = M;
        }
      }
      const obj7 = { style: tmp5.labelContainer, children: items };
      items = [tmp16, tmp19];
      const tmp25 = metroImportDefault(View, obj7);
      cResult[12] = tmp5.labelContainer;
      cResult[13] = tmp16;
      cResult[14] = tmp19;
      cResult[15] = tmp25;
      tmp23 = tmp25;
    }
    let tmp20 = null != combined;
    if (tmp20) {
      const obj8 = { style: null, children: metroRequire(Text, obj9) };
      class M {
        constructor() {
          tmp = setPlanInterval(planInterval);
          return;
        }
      }
      obj9 = { variant: "text-md/bold", color: "text-overlay-light", children: str3.toUpperCase() };
      Text = Text_Text.Text;
      const intl3 = intl4.intl;
      const obj10 = { discount: combined };
      str3 = intl3.formatToPlainString(intl4.t.IAybsG, obj10);
      tmp20 = metroRequire(View, obj8);
    }
    cResult[9] = combined;
    cResult[10] = tmp5.labelPromo;
    cResult[11] = tmp20;
    tmp19 = tmp20;
  }
  const items1 = [tmp5.container, selected];
  cResult[2] = tmp5.container;
  cResult[3] = selected;
  cResult[4] = items1;
  tmp13 = items1;
}) : ((arg0) => {
  let RowButton;
  let Text2;
  let accessibilityRole;
  let accessibilityState;
  let items1;
  let obj5;
  let obj7;
  let planInterval;
  let selected;
  let str3;
  let stringResult;
  ({ selected, planInterval } = arg0);
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const premiumType = nativeGiftContext.premiumType;
  const tmp4 = closure_9();
  if (selected) {
    RowButton = TableRow.TableRow;
  } else {
    RowButton = RowButton2.RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + React3 + "%";
  }
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, planInterval);
  const tmpResult = react_native2;
  const radioA11yNative = tmpResult.useRadioA11yNative({ selected });
  items = [tmp4.container, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp4.containerSelected;
  }
  items[1] = selected;
  const obj2 = { style: items, children: metroRequire(RowButton, obj7) };
  const obj3 = { style: tmp4.labelContainer, children: items1 };
  const Text = Text_Text.Text;
  if (planInterval === SubscriptionIntervalTypes.MONTH) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.Mh9bTt);
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.DRgqMo);
  }
  items1 = [metroRequire(Text, { variant: "text-md/semibold", children: stringResult }), ];
  let tmp11Result = null != combined;
  if (tmp11Result) {
    const obj4 = { style: tmp4.labelPromo, children: metroRequire(Text2, obj5) };
    obj5 = { variant: "text-md/bold", color: "text-overlay-light", children: str3.toUpperCase() };
    Text2 = Text_Text.Text;
    const intl3 = intl4.intl;
    const obj6 = { discount: combined };
    str3 = intl3.formatToPlainString(intl4.t.IAybsG, obj6);
    tmp11Result = metroRequire(View, obj4);
  }
  items1[1] = tmp11Result;
  obj7 = {
    label: metroImportDefault(View, obj3),
    trailing: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: tmp9 }),
    onPress() {
      setPlanInterval(planInterval);
    },
    arrow: false,
    accessibilityRole,
    accessibilityState,
    start: true,
    end: true
  };
  return metroRequire(View, obj2);
});
createStyles = createStyles_mod;
let obj5 = { durationContainer: obj6, durationTitle: obj7 };
obj6 = { marginHorizontal: nativeDefault.space.PX_16 };
const createStyles2 = createStyles.createStyles;
obj7 = { marginTop: nativeDefault.space.PX_24 };
let closure_11 = createStyles2(obj5);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let durationContainer;
  let durationTitle;
  let first;
  let planInterval;
  let tmp10;
  let tmp7;
  let obj = planInterval(576);
  const cResult = obj.c(9);
  const tmp4 = closure_11();
  const obj2 = planInterval(10430);
  planInterval = obj2.useNativeGiftContext().planInterval;
  ({ durationContainer, durationTitle } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(planInterval(1126).t["8XT6Nf"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.durationTitle) {
    const obj3 = { style: durationTitle, variant: "text-sm/semibold", children: first };
    const tmp9 = closure_6(planInterval(4886).Text, obj3);
    cResult[1] = tmp4.durationTitle;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== planInterval) {
    const mapped = items.map((planInterval, index) => {
      const obj = { selected: planInterval === planInterval, planInterval };
      return metroRequire(closure_10, obj, index);
    });
    cResult[3] = planInterval;
    cResult[4] = mapped;
    tmp10 = mapped;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4.durationContainer) {
    if (cResult[6] === tmp7) {
      let tmp13;
      if (cResult[7] === tmp10) {
        tmp13 = cResult[8];
      }
      return tmp13;
    }
  }
  const obj4 = { style: durationContainer, children: items };
  items = [tmp7, tmp10];
  const tmp14 = closure_7(View, obj4);
  cResult[5] = tmp4.durationContainer;
  cResult[6] = tmp7;
  cResult[7] = tmp10;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  let intl;
  let planInterval;
  const tmp = closure_11();
  let obj = planInterval(10430);
  planInterval = obj.useNativeGiftContext().planInterval;
  const obj2 = { style: tmp.durationContainer, children: items };
  const obj3 = { style: tmp.durationTitle, variant: "text-sm/semibold", children: intl.string(planInterval(1126).t["8XT6Nf"]) };
  const Text = planInterval(4886).Text;
  intl = planInterval(1126).intl;
  items = [closure_6(Text, obj3), ];
  items[1] = items.map((planInterval, index) => {
    const obj = { selected: planInterval === planInterval, planInterval };
    return metroRequire(closure_10, obj, index);
  });
  return closure_7(View, obj2);
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default tmp7;