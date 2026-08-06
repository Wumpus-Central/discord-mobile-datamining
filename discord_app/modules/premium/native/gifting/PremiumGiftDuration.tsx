// discord_app/modules/premium/native/gifting/PremiumGiftDuration.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { useInitialValue } from "../../../../hooks/useInitialValue.tsx";
import { apexExperiment } from "../../gifting/experiments/NitroGiftPriceCopyExperiment.tsx";

let SubscriptionIntervalTypes;
let c5;
let error;
let metroImportAll;
const require = arg1;
function PremiumGiftDurationButton(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let planInterval;
  let selected;
  ({ selected, planInterval } = arg0);
  let setPlanInterval;
  let obj = planInterval(9529);
  const nativeGiftContext = obj.useNativeGiftContext();
  setPlanInterval = nativeGiftContext.setPlanInterval;
  const tmp4 = createCacheKey();
  if (selected) {
    let RowButton = tmp(5354).TableRow;
  } else {
    RowButton = tmp(7893).RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_5 + "%";
  }
  const tmp5 = SubscriptionIntervalTypes;
  const tmp9 = setPlanInterval(9961)(nativeGiftContext.premiumType, planInterval);
  const radioA11yNative = planInterval(4002).useRadioA11yNative({ selected });
  const items = [tmp4.container, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (selected) {
    selected = tmp4.containerSelected;
  }
  obj = { style: items, children: null };
  items[1] = selected;
  obj = { style: tmp4.labelContainer, children: null };
  if (planInterval === tmp5.MONTH) {
    const intl2 = tmp(1236).intl;
    let stringResult = intl2.string(tmp(1236).t.Mh9bTt);
  } else {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.DRgqMo);
  }
  const items1 = [closure_7(planInterval(4281).Text, { variant: "text-md/semibold", children: stringResult }), ];
  let tmp11Result = null != combined;
  if (tmp11Result) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp4.labelPromo;
    const obj2 = { variant: "text-md/bold", color: "text-overlay-light", children: null };
    const intl3 = tmp(1236).intl;
    const obj3 = { discount: null };
    obj3[0] = combined;
    obj2[2] = intl3.formatToPlainString(tmp(1236).t.IAybsG, obj3).toUpperCase();
    obj1[1] = tmp11(tmp(4281).Text, obj2);
    tmp11Result = tmp11(tmp12, obj1);
    const str3 = intl3.formatToPlainString(tmp(1236).t.IAybsG, obj3);
  }
  const tmp13 = closure_8;
  const tmpResult = planInterval(4002);
  items1[1] = tmp11Result;
  obj[1] = items1;
  obj[1] = closure_7(RowButton, {
    label: closure_8(View, obj),
    trailing: closure_7(planInterval(4281).Text, { variant: "text-md/semibold", children: tmp9 }),
    onPress() {
      setPlanInterval(planInterval);
    },
    arrow: false,
    accessibilityRole,
    accessibilityState,
    start: true,
    end: true
  });
  return closure_7(View, obj);
}
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: c5, SubscriptionIntervalTypes } = GuildFeatures);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
createCacheKey = { container: null, containerSelected: null, labelContainer: null, labelPromo: null };
createCacheKey = { marginTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.lg, borderWidth: 2 };
createCacheKey[2] = { flexDirection: "row" };
let obj1 = { borderColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.lg, borderWidth: 2 };
createCacheKey[3] = { marginStart: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { durationContainer: null, durationTitle: null };
let obj2 = { marginStart: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
obj3[0] = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey = { marginTop: require("Themes").space.PX_24 };
obj3[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj3);
const obj4 = { marginHorizontal: require("Themes").space.PX_16 };
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  const tmp = callback3();
  let obj = planInterval(9529);
  planInterval = obj.useNativeGiftContext().planInterval;
  const tmp2 = useInitialValue(apexExperiment.useConfig({ location: "PremiumGiftDuration" }).monthlyDefaultSelected);
  importDefault = tmp2;
  let items = [tmp2];
  const memo = React.useMemo(() => {
    if (closure_1) {
      const items = [];
      HermesBuiltin.arraySpread(tmp, 0);
      let reversed = items.reverse();
    } else {
      reversed = tmp;
    }
    return reversed;
  }, items);
  obj = { style: tmp.durationContainer, children: null };
  obj = { style: tmp.durationTitle, variant: "text-sm/semibold", children: null };
  const intl = planInterval(1236).intl;
  obj[2] = intl.string(planInterval(1236).t["8XT6Nf"]);
  const items1 = [callback(planInterval(4281).Text, obj), memo.map((planInterval) => outer1_7(outer1_11, { selected: planInterval === planInterval, planInterval }, arg1))];
  obj[1] = items1;
  return callback2(View, obj);
};