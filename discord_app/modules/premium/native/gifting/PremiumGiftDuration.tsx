// discord_app/modules/premium/native/gifting/PremiumGiftDuration.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import GuildFeatures from "../../PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function PremiumGiftDurationButton(arg0) {
  ({ selected, planInterval } = arg0);
  let setPlanInterval;
  let obj = planInterval(9758);
  const nativeGiftContext = obj.useNativeGiftContext();
  setPlanInterval = nativeGiftContext.setPlanInterval;
  const tmp4 = callback3();
  if (selected) {
    let RowButton = tmp(5480).TableRow;
  } else {
    RowButton = tmp(8121).RowButton;
  }
  let combined = null;
  if (planInterval === SubscriptionIntervalTypes.YEAR) {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_4 + "%";
  }
  const tmp5 = SubscriptionIntervalTypes;
  const tmp9 = setPlanInterval(10195)(nativeGiftContext.premiumType, planInterval);
  const radioA11yNative = planInterval(4109).useRadioA11yNative({ selected });
  items = [tmp4.container, ];
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
  const items1 = [closure_6(planInterval(4376).Text, { variant: "text-md/semibold", children: stringResult }), ];
  let tmp11Result = null != combined;
  if (tmp11Result) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp4.labelPromo;
    const obj2 = { variant: "text-md/bold", color: "text-overlay-light", children: null };
    const intl3 = tmp(1236).intl;
    const obj3 = { discount: null };
    obj3[0] = combined;
    obj2[2] = intl3.formatToPlainString(tmp(1236).t.IAybsG, obj3).toUpperCase();
    obj1[1] = tmp11(tmp(4376).Text, obj2);
    tmp11Result = tmp11(tmp12, obj1);
    const str3 = intl3.formatToPlainString(tmp(1236).t.IAybsG, obj3);
  }
  const tmp13 = closure_7;
  const tmpResult = planInterval(4109);
  items1[1] = tmp11Result;
  obj[1] = items1;
  obj[1] = closure_6(RowButton, {
    label: closure_7(View, obj),
    trailing: closure_6(planInterval(4376).Text, { variant: "text-md/semibold", children: tmp9 }),
    onPress() {
      setPlanInterval(planInterval);
    },
    arrow: false,
    accessibilityRole,
    accessibilityState,
    start: true,
    end: true
  });
  return closure_6(View, obj);
}
noopAll;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: c4, SubscriptionIntervalTypes } = GuildFeatures);
({ jsx: closure_6, jsxs: error } = jsxProd);
let items = [, ];
({ YEAR: arr[0], MONTH: arr[1] } = SubscriptionIntervalTypes);
createCacheKey = { container: null, containerSelected: null, labelContainer: null, labelPromo: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.lg, borderWidth: 2 };
createCacheKey[2] = { flexDirection: "row" };
let obj1 = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.lg, borderWidth: 2 };
createCacheKey[3] = { marginStart: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { durationContainer: null, durationTitle: null };
let obj2 = { marginStart: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round };
obj3[0] = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey = { marginTop: ThemesDefault.space.PX_24 };
obj3[1] = createCacheKey;
let closure_11 = createCacheKey.createStyles(obj3);
const obj4 = { marginHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDuration.tsx");

export default function PremiumGiftDuration() {
  const tmp = callback4();
  let obj = planInterval(9758);
  planInterval = obj.useNativeGiftContext().planInterval;
  obj = { style: tmp.durationContainer, children: null };
  obj = { style: tmp.durationTitle, variant: "text-sm/semibold", children: null };
  const intl = planInterval(1236).intl;
  obj[2] = intl.string(planInterval(1236).t["8XT6Nf"]);
  items = [callback(planInterval(4376).Text, obj), ];
  items[1] = items.map((planInterval) => closure_1_6(closure_1_10, { selected: planInterval === planInterval, planInterval }, arg1));
  obj[1] = items;
  return callback2(View, obj);
};