// discord_app/modules/premium/native/SubscriptionRenewalMutationsNotice.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { isNoneSubscription } from "../../../records/SubscriptionPlanRecord.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { padding: 10, marginVertical: 5, marginHorizontal: 15, borderRadius: ThemesDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let obj1 = { alignSelf: "center", marginLeft: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
createCacheKey[2] = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingLeft: 10, marginRight: 15, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
const result = require("set").fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  ({ subscription, renewalMutations } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon };
  const items = [callback(Button.WarningCircle, obj), ];
  obj = { style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = getPremiumPlanItemDefault.getDisplayName(renewalMutations.planId);
      const obj4 = getPremiumPlanItemDefault;
    }
    obj1 = { planName: null, date: null };
    obj1[0] = displayName;
    obj1[1] = subscription.currentPeriodEnd;
    obj[1] = intl.format(tmp7, obj1);
    items[1] = callback(Button.LegacyText, obj);
    obj[1] = items;
    return closure_6(View, obj);
  }
  displayName = getPremiumPlanItem.getExternalPlanDisplayName(renewalMutations);
};