// === Module 11180: PremiumGiftDuration ===

// Module 11180 (PremiumGiftDuration)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4355 */;
import Text_Text from "Text/Text" /* 4632 */;
import TableRow from "TableRow" /* 5686 */;
import RowButton2 from "RowButton" /* 8718 */;
import NativeGiftContext from "NativeGiftContext" /* 10828 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10880 */;
import noop from "module_19" /* 19 */;

require = fn;
function PremiumGiftDurationButton(arg0) {
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
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, SubscriptionIntervalTypes } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
let createStyles = fn(4636);
let obj2 = { container: { marginTop: nativeDefault.space.PX_8 }, containerSelected: null, labelContainer: null, labelPromo: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.containerSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
obj2.labelContainer = { flexDirection: "row" };
let obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, borderWidth: 2 };
obj2.labelPromo = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4636);
const obj7 = { durationContainer: null, durationTitle: null };
let obj5 = { marginStart: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj7.durationContainer = { marginHorizontal: nativeDefault.space.PX_16 };
const obj8 = { marginHorizontal: nativeDefault.space.PX_16 };
obj7.durationTitle = { marginTop: nativeDefault.space.PX_24 };
let closure_11 = createStyles.createStyles(obj7);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  const tmp = closure_11();
  planInterval = planInterval(10828).useNativeGiftContext().planInterval;
  const obj2 = { style: tmp.durationContainer, children: null };
  const obj3 = { style: tmp.durationTitle, variant: "text-sm/semibold", children: null };
  const intl = planInterval(1114).intl;
  obj3.children = intl.string(planInterval(1114).t["8XT6Nf"]);
  items = [closure_6(planInterval(4632).Text, obj3), ];
  items[1] = items.map((planInterval, index) => timestampProducer(PremiumGiftDurationButton, { selected: planInterval === planInterval, planInterval }, index));
  obj2.children = items;
  return closure_7(View, obj2);
};