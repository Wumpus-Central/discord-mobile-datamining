// === Module 13348: PremiumAccountCredit ===

// Module 13348 (PremiumAccountCredit)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import Text_Text from "Text/Text" /* 4556 */;
import GameIcon from "GameIcon" /* 7172 */;
import noop from "module_19" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;

const PremiumUtilsDefault = PremiumUtils;
const GameIconDefault = GameIcon;

require = fn;
function AccountCreditTier(arg0) {
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = closure_8();
  let obj = PremiumUtils;
  let obj1 = PremiumUtilsDefault;
  const result = obj.castPremiumSubscriptionAsSkuId(obj1.getSkuIdForPlan(planId));
  let obj2 = PremiumUtilsDefault;
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(planId);
  if (hasPremiumGroup) {
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp4(3063)["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num = tmp2(4218).extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = tmp2(1114).intl;
          if (num == null) {
            num = 0;
          }
          obj = { date: num };
          stringResult = intl2.formatToPlainString(tmp2(1114).t["5CNRRA"], obj);
          const tmp2Result = tmp2(4218);
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = tmp2(1114).intl;
    obj = { planName: tierDisplayNameByPlanId };
    stringResult = intl.formatToPlainString(tmp2(1114).t.eNXZ5O, obj);
  }
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  obj1 = { style: items, children: null };
  items[1] = divider;
  obj2 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
  const items1 = [timestampProducer(GameIconDefault, obj2), , ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(1114).intl;
  obj4.children = intl4.format(util.t.LzobT9, { planName: tierDisplayNameByPlanId });
  const items2 = [timestampProducer(Text_Text.Text, obj4), ];
  let tmp21Result = !tmp17;
  if (!(null != currentSubscription && currentSubscription.isPurchasedExternally)) {
    const obj5 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp21Result = tmp21(tmp2(4556).Text, obj5);
  }
  items2[1] = tmp21Result;
  obj3.children = items2;
  items1[1] = React5(View, obj3);
  const obj6 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = tmp2(1114).intl;
  obj6.children = intl5.format(util.t["ess/xl"], { count: months });
  items1[2] = timestampProducer(Text_Text.Text, obj6);
  obj1.children = items1;
  return React5(View, obj1);
}
const View = fn(17).View;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { title: { marginBottom: 12 }, creditList: null, creditItem: null, textContainer: null, headerText: null, subText: null, timeText: null, divider: null, creditDescription: null };
createStyles = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.creditList = createStyles;
createStyles.creditItem = { flexDirection: "row", alignItems: "center", padding: 16 };
createStyles.textContainer = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
createStyles.headerText = { lineHeight: 20 };
createStyles.subText = { lineHeight: 16 };
createStyles.timeText = { lineHeight: 20, alignSelf: "flex-start" };
createStyles.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.creditDescription = { marginTop: 8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  c3 = undefined;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = closure_8();
  let obj = currentSubscription(504);
  const items = [EntitlementStore];
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
      obj = { style, children: null };
      obj = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
      const intl = tmp2(1114).intl;
      obj.children = intl.string(tmp2(1114).t.YugZY0);
      const items1 = [closure_6(tmp2(4556).Text, obj), , , ];
      const obj1 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj1.style = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj1.children = keys.map((planId) => {
        const keys = Object.keys(_undefined);
        return timestampProducer(AccountCreditTier, { planId, months: _undefined[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, _undefined).length - 1], unconsumedFractionalPremiumUnits, hasPremiumGroup }, planId);
      });
      items1[1] = closure_6(c3, obj1);
      const obj2 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
      const intl2 = tmp2(1114).intl;
      obj2.children = intl2.string(tmp2(1114).t.kNEjGm);
      items1[2] = closure_6(tmp2(4556).Text, obj2);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj3 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
          const intl3 = tmp2(1114).intl;
          obj3.children = intl3.string(tmp2(1114).t.azRP0E);
          tmp9Result = closure_6(tmp2(4556).Text, obj3);
        }
      }
      items1[3] = tmp9Result;
      obj.children = items1;
      return closure_7(c3, obj);
    }
    obj8 = PremiumUtilsDefault;
    tmp11 = importDefault;
  }
  return null;
};