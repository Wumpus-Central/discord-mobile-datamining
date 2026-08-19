// === Module 7922: AccountCreditTier ===

// Module 7922 (AccountCreditTier)
import applyDefault from "apply" /* 12 */;
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2917 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import Text from "Text" /* 4734 */;
import GameIcon from "GameIcon" /* 7149 */;
import GameIconDefault from "GameIcon" /* 7149 */;
import { View } from "get ActivityIndicator" /* 17 */;
import addEntitlement from "addEntitlement" /* 5357 */;
import { SubscriptionStatusTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function AccountCreditTier(arg0) {
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = callback2();
  let obj = getPremiumPlanItem;
  obj1 = getPremiumPlanItemDefault;
  const result = obj.castPremiumSubscriptionAsSkuId(obj1.getSkuIdForPlan(planId));
  let obj2 = getPremiumPlanItemDefault;
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(planId);
  if (hasPremiumGroup) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(messagesProxyDefault["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num = getPremiumPlanItem.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = getSystemLocale.intl;
          if (num == null) {
            num = 0;
          }
          obj = { date: null };
          obj[0] = num;
          stringResult = intl2.formatToPlainString(getSystemLocale.t["5CNRRA"], obj);
          const tmp2Result = getPremiumPlanItem;
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = getSystemLocale.intl;
    obj = { planName: null };
    obj[0] = tierDisplayNameByPlanId;
    stringResult = intl.formatToPlainString(getSystemLocale.t.eNXZ5O, obj);
  }
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  obj1 = { style: items, children: null };
  items[1] = divider;
  obj2 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
  const items1 = [callback(GameIconDefault, obj2), , ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = getSystemLocale.intl;
  obj4[3] = intl4.format(getSystemLocale.t.LzobT9, { planName: tierDisplayNameByPlanId });
  const items2 = [callback(Text.Text, obj4), ];
  let tmp21Result = !tmp17;
  if (!(null != currentSubscription && currentSubscription.isPurchasedExternally)) {
    const obj5 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj5[0] = tmp.subText;
    obj5[3] = stringResult;
    tmp21Result = callback(Text.Text, obj5);
  }
  items2[1] = tmp21Result;
  obj3[1] = items2;
  items1[1] = callback(View, obj3);
  const obj6 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = getSystemLocale.intl;
  obj6[3] = intl5.format(getSystemLocale.t["ess/xl"], { count: months });
  items1[2] = callback(Text.Text, obj6);
  obj1[1] = items1;
  return callback(View, obj1);
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", padding: 16 };
createCacheKey[3] = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
createCacheKey[4] = { lineHeight: 20 };
createCacheKey[5] = { lineHeight: 16 };
createCacheKey[6] = { lineHeight: 20, alignSelf: "flex-start" };
createCacheKey[7] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[8] = { marginTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  c3 = undefined;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = callback2();
  let obj = currentSubscription(589);
  const items = [closure_4];
  dependencyMap = obj.useStateFromStoresArray(items, () => unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp11Result = applyDefault;
      const found = applyDefault(Array.from(entitlements)).filter((item, index) => {
        let tmp = null != item.subscriptionPlanId;
        if (tmp) {
          tmp = null != item.parentId;
        }
        if (tmp) {
          tmp = !item.consumed;
        }
        return tmp;
      });
      const tmp11ResultResult = applyDefault(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      c3 = valueResult;
      obj = { style: null, children: null };
      obj[0] = style;
      obj = { style: null, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
      obj[0] = tmp.title;
      const intl = tmp2(1236).intl;
      obj[4] = intl.string(tmp2(1236).t.YugZY0);
      const items1 = [callback(tmp2(4734).Text, obj), , , ];
      obj1 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj1[0] = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj1[1] = keys.map((item, index) => {
        const keys = Object.keys(_undefined);
        return closure_1_6(AccountCreditTier, { planId: item, months: _undefined[item].length, currentSubscription, shouldAddDivider: item !== keys[Object.keys(Object, _undefined).length - 1], unconsumedFractionalPremiumUnits: closure_2, hasPremiumGroup: closure_1 }, item);
      });
      items1[1] = callback(c3, obj1);
      const obj2 = { style: null, variant: "text-sm/medium", children: null };
      obj2[0] = tmp.creditDescription;
      const intl2 = tmp2(1236).intl;
      obj2[2] = intl2.string(tmp2(1236).t.kNEjGm);
      items1[2] = callback(tmp2(4734).Text, obj2);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj3 = { style: null, variant: "text-sm/medium", children: null };
          obj3[0] = tmp.creditDescription;
          const intl3 = tmp2(1236).intl;
          obj3[2] = intl3.string(tmp2(1236).t.azRP0E);
          tmp9Result = callback(tmp2(4734).Text, obj3);
        }
      }
      items1[3] = tmp9Result;
      obj[1] = items1;
      return callback(c3, obj);
    }
    obj8 = getPremiumPlanItemDefault;
  }
  return null;
};