// discord_app/modules/premium/native/gifting/PremiumGiftDuration.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import RowButton2 from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import NativeGiftContext from "../../../payments/native/NativeGiftContext.tsx";
import usePremiumProductPricingStringDefault from "../hooks/usePremiumProductPricingString.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1392);
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, SubscriptionIntervalTypes } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
let createStyles = fn(5092);
let obj2 = { container: { marginTop: nativeDefault.space.PX_8 }, containerSelected: null, labelContainer: null, labelPromo: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.containerSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
obj2.labelContainer = { flexDirection: "row" };
let obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
obj2.labelPromo = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftDurationButton(arg0) {
  const cResult = c.c(31);
  ({ selected, planInterval } = arg0);
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const tmp5 = closure_9();
  if (selected) {
    let RowButton = TableRow.TableRow;
  } else {
    RowButton = RowButton2.RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + React4 + "%";
  }
  const tmp10 = usePremiumProductPricingStringDefault(nativeGiftContext.premiumType, planInterval);
  if (cResult[0] !== selected) {
    const obj3 = { selected };
    cResult[0] = selected;
    cResult[1] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp11);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp5.containerSelected;
  }
  if (cResult[2] === tmp5.container) {
    if (cResult[3] === selected) {
      let tmp13 = cResult[4];
    }
    if (cResult[5] !== planInterval) {
      if (planInterval === SubscriptionIntervalTypes.MONTH) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.Mh9bTt);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.DRgqMo);
      }
      cResult[5] = planInterval;
      cResult[6] = stringResult;
    } else {
      if (cResult[7] !== cResult[6]) {
        const obj4 = { variant: "text-md/semibold", children: tmp14 };
        const tmp19 = timestampProducer(Text_Text.Text, obj4);
        cResult[7] = tmp14;
        cResult[8] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] === combined) {
        if (cResult[10] === tmp5.labelPromo) {
          let tmp20 = cResult[11];
        }
        if (cResult[12] === tmp5.labelContainer) {
          if (cResult[13] === tmp17) {
            if (cResult[14] === tmp20) {
              let tmp24 = cResult[15];
            }
            if (cResult[16] !== tmp10) {
              { variant: "text-md/semibold", children: null }.children = tmp10;
              class D {
                constructor() {
                  tmp = setPlanInterval(planInterval);
                  return;
                }
              }
              cResult[16] = tmp10;
              cResult[17] = tmp29;
              let tmp27 = tmp29;
              const obj5 = { variant: "text-md/semibold", children: null };
            } else {
              tmp27 = cResult[17];
            }
            if (cResult[18] === planInterval) {
              if (cResult[19] === setPlanInterval) {
                let tmp30 = cResult[20];
              }
              if (cResult[21] === RowButton) {
                if (cResult[22] === accessibilityRole) {
                  if (cResult[23] === accessibilityState) {
                    if (cResult[24] === tmp24) {
                      if (cResult[25] === tmp27) {
                        if (cResult[26] === tmp30) {
                          let tmp31 = cResult[27];
                        }
                        if (cResult[28] === tmp31) {
                          if (cResult[29] === tmp13) {
                            let tmp35 = cResult[30];
                          }
                          return tmp35;
                        }
                        class D {
                          constructor() {
                            tmp = setPlanInterval(planInterval);
                            return;
                          }
                        }
                        const obj6 = { style: tmp13, children: tmp31 };
                        const tmp37 = timestampProducer(View, obj6);
                        cResult[28] = tmp31;
                        cResult[29] = tmp13;
                        cResult[30] = tmp37;
                        tmp35 = tmp37;
                      }
                    }
                  }
                }
              }
              class D {
                constructor() {
                  tmp = setPlanInterval(planInterval);
                  return;
                }
              }
              tmp33[0] = tmp24;
              tmp33[1] = tmp27;
              tmp33[2] = tmp30;
              tmp33[4] = accessibilityRole;
              tmp33[5] = accessibilityState;
              const tmp34 = timestampProducer(RowButton, tmp33);
              cResult[21] = RowButton;
              cResult[22] = accessibilityRole;
              cResult[23] = accessibilityState;
              cResult[24] = tmp24;
              cResult[25] = tmp27;
              cResult[26] = tmp30;
              cResult[27] = tmp34;
              tmp31 = tmp34;
            }
            class D {
              constructor() {
                tmp = setPlanInterval(planInterval);
                return;
              }
            }
            cResult[18] = planInterval;
            cResult[19] = setPlanInterval;
            cResult[20] = D;
            tmp30 = D;
          }
        }
        const obj7 = { style: tmp5.labelContainer, children: null };
        items = [tmp17, tmp20];
        obj7.children = items;
        const tmp26 = React5(View, obj7);
        cResult[12] = tmp5.labelContainer;
        cResult[13] = tmp17;
        cResult[14] = tmp20;
        cResult[15] = tmp26;
        tmp24 = tmp26;
      }
      if (tmp21) {
        const obj8 = { style: null, children: null };
        class D {
          constructor() {
            tmp = setPlanInterval(planInterval);
            return;
          }
        }
        const obj9 = { variant: "text-md/bold", color: "text-overlay-light", children: null };
        const intl3 = util.intl;
        const obj10 = { discount: combined };
        obj9.children = intl3.formatToPlainString(util.t.IAybsG, obj10).toUpperCase();
        obj8.children = timestampProducer(Text_Text.Text, obj9);
        tmp21 = timestampProducer(View, obj8);
        const str3 = intl3.formatToPlainString(util.t.IAybsG, obj10);
      }
      cResult[9] = combined;
      cResult[10] = tmp5.labelPromo;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  }
  const items1 = [tmp5.container, selected];
  cResult[2] = tmp5.container;
  cResult[3] = selected;
  cResult[4] = items1;
  tmp13 = items1;
  const tmpResult = useA11yRolesNative;
}) : (function PremiumGiftDurationButton(arg0) {
  ({ selected, planInterval } = arg0);
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const tmp4 = closure_9();
  if (selected) {
    let RowButton = TableRow.TableRow;
  } else {
    RowButton = RowButton2.RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + React4 + "%";
  }
  const tmp9 = usePremiumProductPricingStringDefault(nativeGiftContext.premiumType, planInterval);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  items = [tmp4.container, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp4.containerSelected;
  }
  const obj2 = { style: items, children: null };
  items[1] = selected;
  const obj3 = { style: tmp4.labelContainer, children: null };
  if (planInterval === SubscriptionIntervalTypes.MONTH) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.Mh9bTt);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.DRgqMo);
  }
  const items1 = [timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: stringResult }), ];
  let tmp11Result = null != combined;
  if (tmp11Result) {
    const obj4 = { style: tmp4.labelPromo, children: null };
    const obj5 = { variant: "text-md/bold", color: "text-overlay-light", children: null };
    const intl3 = util.intl;
    const obj6 = { discount: combined };
    obj5.children = intl3.formatToPlainString(util.t.IAybsG, obj6).toUpperCase();
    obj4.children = timestampProducer(Text_Text.Text, obj5);
    tmp11Result = timestampProducer(View, obj4);
    const str3 = intl3.formatToPlainString(util.t.IAybsG, obj6);
  }
  const tmpResult = useA11yRolesNative;
  items1[1] = tmp11Result;
  obj3.children = items1;
  obj2.children = timestampProducer(RowButton, {
    label: React5(View, obj3),
    trailing: timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: tmp9 }),
    onPress() {
      setPlanInterval(planInterval);
    },
    arrow: false,
    accessibilityRole,
    accessibilityState,
    start: true,
    end: true
  });
  return timestampProducer(View, obj2);
});
createStyles = fn(5092);
let obj8 = { durationContainer: null, durationTitle: null };
let obj5 = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj8.durationContainer = { marginHorizontal: nativeDefault.space.PX_16 };
let obj9 = { marginHorizontal: nativeDefault.space.PX_16 };
obj8.durationTitle = { marginTop: nativeDefault.space.PX_24 };
let closure_11 = createStyles.createStyles(obj8);
ReactCompilerGating = fn(558);
let obj10 = { marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftDuration() {
  const cResult = planInterval(576).c(9);
  const tmp4 = closure_11();
  const obj = planInterval(576);
  planInterval = planInterval(10054).useNativeGiftContext().planInterval;
  ({ durationContainer, durationTitle } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["8XT6Nf"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.durationTitle) {
    const obj3 = { style: durationTitle, variant: "text-sm/semibold", children: first };
    const tmp9 = closure_6(tmp(5088).Text, obj3);
    cResult[1] = tmp4.durationTitle;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== planInterval) {
    const mapped = items.map((planInterval, index) => timestampProducer(closure_10, { selected: planInterval === planInterval, planInterval }, index));
    cResult[3] = planInterval;
    cResult[4] = mapped;
    let tmp10 = mapped;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4.durationContainer) {
    if (cResult[6] === tmp7) {
      if (cResult[7] === tmp10) {
        let tmp13 = cResult[8];
      }
      return tmp13;
    }
  }
  const obj4 = { style: durationContainer, children: null };
  items = [tmp7, tmp10];
  obj4.children = items;
  const tmp14 = closure_7(View, obj4);
  cResult[5] = tmp4.durationContainer;
  cResult[6] = tmp7;
  cResult[7] = tmp10;
  cResult[8] = tmp14;
  tmp13 = tmp14;
  const obj2 = planInterval(10054);
}) : (function PremiumGiftDuration() {
  const tmp = closure_11();
  planInterval = planInterval(10054).useNativeGiftContext().planInterval;
  const obj2 = { style: tmp.durationContainer, children: null };
  const obj3 = { style: tmp.durationTitle, variant: "text-sm/semibold", children: null };
  const intl = planInterval(1126).intl;
  obj3.children = intl.string(planInterval(1126).t["8XT6Nf"]);
  items = [closure_6(planInterval(5088).Text, obj3), ];
  items[1] = items.map((planInterval, index) => timestampProducer(closure_10, { selected: planInterval === planInterval, planInterval }, index));
  obj2.children = items;
  return closure_7(View, obj2);
});