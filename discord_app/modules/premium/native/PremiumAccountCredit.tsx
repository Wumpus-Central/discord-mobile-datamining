// === Module 7547: AccountCreditTier ===

// Module 7547 (AccountCreditTier)
import "noop";
import { View } from "get ActivityIndicator";
import addEntitlement from "addEntitlement";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function AccountCreditTier(arg0) {
  let currentSubscription;
  let hasPremiumGroup;
  let months;
  let planId;
  let shouldAddDivider;
  let unconsumedFractionalPremiumUnits;
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = createCacheKey();
  let obj = require(3901) /* getPremiumPlanItem */;
  let obj1 = importDefault(3901);
  const result = obj.castPremiumSubscriptionAsSkuId(obj1.getSkuIdForPlan(planId));
  let obj2 = importDefault(3901);
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(planId);
  if (hasPremiumGroup) {
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp4(2837)["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num = tmp2(3901).extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = tmp2(1236).intl;
          if (num == null) {
            num = 0;
          }
          obj = { date: null };
          obj[0] = num;
          stringResult = intl2.formatToPlainString(tmp2(1236).t["5CNRRA"], obj);
          const tmp2Result = tmp2(3901);
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = tmp2(1236).intl;
    obj = { planName: null };
    obj[0] = tierDisplayNameByPlanId;
    stringResult = intl.formatToPlainString(tmp2(1236).t.eNXZ5O, obj);
  }
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  obj1 = { style: items, children: null };
  items[1] = divider;
  obj2 = { size: null, skuId: null };
  obj2[0] = require(5591) /* GameIcon */.GameIconSizes.SMALL;
  obj2[1] = result;
  const items1 = [callback(importDefault(5591), obj2), , ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(1236).intl;
  obj4[3] = intl4.format(require(1236) /* getSystemLocale */.t.LzobT9, { planName: tierDisplayNameByPlanId });
  const items2 = [callback(require(4251) /* Text */.Text, obj4), ];
  let tmp21Result = !tmp17;
  if (!(null != currentSubscription && currentSubscription.isPurchasedExternally)) {
    const obj5 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj5[0] = tmp.subText;
    obj5[3] = stringResult;
    tmp21Result = tmp21(tmp2(4251).Text, obj5);
  }
  items2[1] = tmp21Result;
  obj3[1] = items2;
  items1[1] = closure_7(View, obj3);
  const obj6 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = tmp2(1236).intl;
  obj6[3] = intl5.format(require(1236) /* getSystemLocale */.t["ess/xl"], { count: months });
  items1[2] = callback(require(4251) /* Text */.Text, obj6);
  obj1[1] = items1;
  return closure_7(View, obj1);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: { marginBottom: 12 }, creditList: null, creditItem: null, textContainer: null, headerText: null, subText: null, timeText: null, divider: null, creditDescription: null };
createCacheKey = { borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", padding: 16 };
createCacheKey[3] = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
createCacheKey[4] = { lineHeight: 20 };
createCacheKey[5] = { lineHeight: 16 };
createCacheKey[6] = { lineHeight: 20, alignSelf: "flex-start" };
createCacheKey[7] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[8] = { marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
let result = require("addEntitlement").fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  let creditListContainerStyle;
  let entitlements;
  let importDefault;
  let style;
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  let dependencyMap;
  let c3;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = createCacheKey();
  let obj = currentSubscription(589);
  const items = [addEntitlement];
  dependencyMap = obj.useStateFromStoresArray(items, () => unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp11Result = tmp11(12);
      const found = tmp11(12)(Array.from(entitlements)).filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const tmp11ResultResult = tmp11(12)(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      c3 = valueResult;
      obj = { style: null, children: null };
      obj[0] = style;
      obj = { style: null, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
      obj[0] = tmp.title;
      const intl = tmp2(1236).intl;
      obj[4] = intl.string(tmp2(1236).t.YugZY0);
      const items1 = [callback(tmp2(4251).Text, obj), , , ];
      const obj1 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj1[0] = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj1[1] = keys.map((planId) => {
        const keys = Object.keys(_undefined);
        return outer1_6(outer1_9, { planId, months: _undefined[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, _undefined).length - 1], unconsumedFractionalPremiumUnits: closure_2, hasPremiumGroup: closure_1 }, planId);
      });
      items1[1] = callback(c3, obj1);
      const obj2 = { style: null, variant: "text-sm/medium", children: null };
      obj2[0] = tmp.creditDescription;
      const intl2 = tmp2(1236).intl;
      obj2[2] = intl2.string(tmp2(1236).t.kNEjGm);
      items1[2] = callback(tmp2(4251).Text, obj2);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj3 = { style: null, variant: "text-sm/medium", children: null };
          obj3[0] = tmp.creditDescription;
          const intl3 = tmp2(1236).intl;
          obj3[2] = intl3.string(tmp2(1236).t.azRP0E);
          tmp9Result = callback(tmp2(4251).Text, obj3);
        }
      }
      items1[3] = tmp9Result;
      obj[1] = items1;
      return closure_7(c3, obj);
    }
    obj8 = importDefault(3901);
    tmp11 = importDefault;
  }
  return null;
};