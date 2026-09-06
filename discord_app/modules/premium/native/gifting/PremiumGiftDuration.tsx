// === Module 11045: PremiumGiftDuration ===

// Module 11045 (PremiumGiftDuration)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import Text_Text from "Text/Text" /* 4556 */;
import NativeGiftContext from "NativeGiftContext" /* 10699 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10751 */;
import noop from "module_19" /* 19 */;

require = fn;
function PremiumGiftDurationButton(arg0) {
  ({ selected, planInterval } = arg0);
  let obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const setPlanInterval = nativeGiftContext.setPlanInterval;
  const tmp4 = closure_9();
  if (selected) {
    let RowButton = tmp(5605).TableRow;
  } else {
    RowButton = tmp(8595).RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + React4 + "%";
  }
  const tmp5 = SubscriptionIntervalTypes;
  const tmp9 = usePremiumProductPricingStringDefault(nativeGiftContext.premiumType, planInterval);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  items = [tmp4.container, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp4.containerSelected;
  }
  obj = { style: items, children: null };
  items[1] = selected;
  obj = { style: tmp4.labelContainer, children: null };
  if (planInterval === tmp5.MONTH) {
    const intl2 = tmp(1114).intl;
    let stringResult = intl2.string(tmp(1114).t.Mh9bTt);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.DRgqMo);
  }
  const items1 = [timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: stringResult }), ];
  let tmp11Result = null != combined;
  if (tmp11Result) {
    const obj1 = { style: tmp4.labelPromo, children: null };
    const obj2 = { variant: "text-md/bold", color: "text-overlay-light", children: null };
    const intl3 = tmp(1114).intl;
    const obj3 = { discount: combined };
    obj2.children = intl3.formatToPlainString(tmp(1114).t.IAybsG, obj3).toUpperCase();
    obj1.children = tmp11(tmp(4556).Text, obj2);
    tmp11Result = tmp11(tmp12, obj1);
    const str3 = intl3.formatToPlainString(tmp(1114).t.IAybsG, obj3);
  }
  const tmpResult = useA11yRolesNative;
  items1[1] = tmp11Result;
  obj.children = items1;
  obj.children = timestampProducer(RowButton, {
    label: React5(View, obj),
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
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, SubscriptionIntervalTypes } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
fn(4560);
let createStyles = { container: null, containerSelected: null, labelContainer: null, labelPromo: null };
createStyles = { marginTop: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.containerSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
createStyles.labelContainer = { flexDirection: "row" };
let obj1 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
createStyles.labelPromo = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(createStyles);
fn(4560);
let obj3 = { durationContainer: null, durationTitle: null };
let obj2 = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj3.durationContainer = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles = { marginTop: nativeDefault.space.PX_24 };
obj3.durationTitle = createStyles;
let closure_11 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  const tmp = closure_11();
  let obj = planInterval(10699);
  planInterval = obj.useNativeGiftContext().planInterval;
  obj = { style: tmp.durationContainer, children: null };
  obj = { style: tmp.durationTitle, variant: "text-sm/semibold", children: null };
  const intl = planInterval(1114).intl;
  obj.children = intl.string(planInterval(1114).t["8XT6Nf"]);
  items = [closure_6(planInterval(4556).Text, obj), ];
  items[1] = items.map((planInterval, index) => timestampProducer(PremiumGiftDurationButton, { selected: planInterval === planInterval, planInterval }, index));
  obj.children = items;
  return closure_7(View, obj);
};