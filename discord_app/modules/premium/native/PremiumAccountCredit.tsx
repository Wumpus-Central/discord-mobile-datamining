// discord_app/modules/premium/native/PremiumAccountCredit.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3162 from "../premium_group/PremiumGroup.messages.js";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import BoostGemIcon from "../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EntitlementStore from "../../../stores/game_store/EntitlementStore.tsx";

const PremiumUtilsDefault = PremiumUtils;
const GameIconDefault = GameIcon;

require = fn;
function AccountCreditTier(arg0) {
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = closure_8();
  const obj = PremiumUtils;
  const result = obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId));
  const result1 = PremiumUtils.isPremiumGuildSubscriptionPlan(planId);
  const obj4 = PremiumUtilsDefault;
  if (result1) {
    let displayName = obj4.getDisplayName(planId);
  } else {
    displayName = obj4.getTierDisplayNameByPlanId(planId);
  }
  if (hasPremiumGroup) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3162["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num = PremiumUtils.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = util.intl;
          if (num == null) {
            num = 0;
          }
          const obj5 = { date: num };
          stringResult = intl2.formatToPlainString(util.t["5CNRRA"], obj5);
          const tmp2Result = PremiumUtils;
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = util.intl;
    const obj6 = { planName: displayName };
    stringResult = intl.formatToPlainString(util.t.eNXZ5O, obj6);
  }
  let tmp18 = result1;
  if (!result1) {
    tmp18 = null != currentSubscription && currentSubscription.isPurchasedExternally;
    const tmp20 = null != currentSubscription && currentSubscription.isPurchasedExternally;
  }
  const items = [tmp.creditItem];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  const obj7 = { style: items, children: null };
  items[1] = divider;
  if (result1) {
    const obj8 = { style: tmp.boostIcon, children: null };
    const obj9 = { size: "md", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    obj8.children = timestampProducer(BoostGemIcon.BoostGemIcon, obj9);
    let tmp24Result = timestampProducer(View, obj8);
    let tmp27 = timestampProducer;
  } else {
    const obj10 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
    tmp24Result = timestampProducer(GameIconDefault, obj10);
    tmp27 = timestampProducer;
    const tmp4Result = GameIconDefault;
  }
  const items1 = [tmp24Result, ,];
  const obj11 = { style: tmp.textContainer, children: null };
  const obj12 = {
    style: tmp.headerText,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl4 = util.intl;
  obj12.children = intl4.format(util.t.LzobT9, { planName: displayName });
  const items2 = [tmp27(Text_Text.Text, obj12)];
  let tmp27Result = !tmp18;
  if (!tmp18) {
    const obj13 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp27Result = tmp27(Text_Text.Text, obj13);
  }
  items2[1] = tmp27Result;
  obj11.children = items2;
  items1[1] = React5(View, obj11);
  const obj14 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = util.intl;
  obj14.children = intl5.format(util.t["ess/xl"], { count: months });
  items1[2] = tmp27(Text_Text.Text, obj14);
  obj7.children = items1;
  return React5(View, obj7);
}
const View = fn(17).View;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  title: { marginBottom: 12 },
  creditList: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  creditItem: { flexDirection: "row", alignItems: "center", padding: 16 },
  boostIcon: null,
  textContainer: null,
  headerText: null,
  subText: null,
  timeText: null,
  divider: null,
  creditDescription: null,
};
let size = {
  width: fn(7412).GameIconImageSize[fn(undefined, 7412).GameIconSizes.SMALL],
  height: fn(7412).GameIconImageSize[fn(undefined, 7412).GameIconSizes.SMALL],
  alignItems: "center",
  justifyContent: "center",
};
obj2.boostIcon = size;
obj2.textContainer = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
obj2.headerText = { lineHeight: 20 };
obj2.subText = { lineHeight: 16 };
obj2.timeText = { lineHeight: 20, alignSelf: "flex-start" };
let obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.creditDescription = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  c3 = undefined;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = closure_8();
  const items = [EntitlementStore];
  dependencyMap = currentSubscription(504).useStateFromStoresArray(items, () =>
    unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits(),
  );
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp11Result = _modDef12;
      const found = _modDef12(Array.from(entitlements)).filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const tmp11ResultResult = _modDef12(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      c3 = valueResult;
      const obj2 = { style, children: null };
      const obj3 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "eyebrow",
        color: "text-default",
        children: null,
      };
      const intl = tmp2(1115).intl;
      obj3.children = intl.string(tmp2(1115).t.YugZY0);
      const items1 = [closure_6(tmp2(4752).Text, obj3), , ,];
      const obj4 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj4.style = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj4.children = keys.map((planId) => {
        const keys = Object.keys(_undefined);
        return timestampProducer(
          AccountCreditTier,
          {
            planId,
            months: _undefined[planId].length,
            currentSubscription,
            shouldAddDivider: planId !== keys[Object.keys(Object, _undefined).length - 1],
            unconsumedFractionalPremiumUnits,
            hasPremiumGroup,
          },
          planId,
        );
      });
      items1[1] = closure_6(c3, obj4);
      const obj5 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
      const intl2 = tmp2(1115).intl;
      obj5.children = intl2.string(tmp2(1115).t.Z5b2Gf);
      items1[2] = closure_6(tmp2(4752).Text, obj5);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj6 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
          const intl3 = tmp2(1115).intl;
          obj6.children = intl3.string(tmp2(1115).t.azRP0E);
          tmp9Result = closure_6(tmp2(4752).Text, obj6);
        }
      }
      items1[3] = tmp9Result;
      obj2.children = items1;
      return closure_7(c3, obj2);
    }
    obj8 = PremiumUtilsDefault;
  }
  return null;
}
