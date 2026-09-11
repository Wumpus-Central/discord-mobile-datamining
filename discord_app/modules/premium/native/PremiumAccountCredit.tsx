// discord_app/modules/premium/native/PremiumAccountCredit.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3074 from "../premium_group/PremiumGroup.messages.js";
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
  let obj = PremiumUtils;
  let obj1 = PremiumUtilsDefault;
  const result = obj.castPremiumSubscriptionAsSkuId(obj1.getSkuIdForPlan(planId));
  let obj2 = PremiumUtils;
  const result1 = obj2.isPremiumGuildSubscriptionPlan(planId);
  let obj3 = PremiumUtilsDefault;
  if (result1) {
    let displayName = obj3.getDisplayName(planId);
  } else {
    displayName = obj3.getTierDisplayNameByPlanId(planId);
  }
  if (hasPremiumGroup) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3074["5asczk"]);
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
          obj = { date: num };
          stringResult = intl2.formatToPlainString(util.t["5CNRRA"], obj);
          const tmp2Result = PremiumUtils;
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = util.intl;
    obj = { planName: displayName };
    stringResult = intl.formatToPlainString(util.t.eNXZ5O, obj);
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
  obj1 = { style: items, children: null };
  items[1] = divider;
  if (result1) {
    obj2 = { style: tmp.boostIcon, children: null };
    obj3 = { size: "md", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    obj2.children = timestampProducer(BoostGemIcon.BoostGemIcon, obj3);
    let tmp24Result = timestampProducer(View, obj2);
    let tmp27 = timestampProducer;
  } else {
    const obj4 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
    tmp24Result = timestampProducer(GameIconDefault, obj4);
    tmp27 = timestampProducer;
    const tmp4Result = GameIconDefault;
  }
  const items1 = [tmp24Result, ,];
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = {
    style: tmp.headerText,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl4 = util.intl;
  obj6.children = intl4.format(util.t.LzobT9, { planName: displayName });
  const items2 = [tmp27(Text_Text.Text, obj6)];
  let tmp27Result = !tmp18;
  if (!tmp18) {
    const obj7 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp27Result = tmp27(Text_Text.Text, obj7);
  }
  items2[1] = tmp27Result;
  obj5.children = items2;
  items1[1] = React5(View, obj5);
  const obj8 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = util.intl;
  obj8.children = intl5.format(util.t["ess/xl"], { count: months });
  items1[2] = tmp27(Text_Text.Text, obj8);
  obj1.children = items1;
  return React5(View, obj1);
}
const View = fn(17).View;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4606);
let createStyles = {
  title: { marginBottom: 12 },
  creditList: null,
  creditItem: null,
  boostIcon: null,
  textContainer: null,
  headerText: null,
  subText: null,
  timeText: null,
  divider: null,
  creditDescription: null,
};
createStyles = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.creditList = createStyles;
createStyles.creditItem = { flexDirection: "row", alignItems: "center", padding: 16 };
let size = {
  width: fn(7245).GameIconImageSize[fn(undefined, 7245).GameIconSizes.SMALL],
  height: fn(7245).GameIconImageSize[fn(undefined, 7245).GameIconSizes.SMALL],
  alignItems: "center",
  justifyContent: "center",
};
createStyles.boostIcon = size;
createStyles.textContainer = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
createStyles.headerText = { lineHeight: 20 };
createStyles.subText = { lineHeight: 16 };
createStyles.timeText = { lineHeight: 20, alignSelf: "flex-start" };
createStyles.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.creditDescription = { marginTop: 8 };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  c3 = undefined;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = closure_8();
  let obj = currentSubscription(504);
  const items = [EntitlementStore];
  dependencyMap = obj.useStateFromStoresArray(items, () =>
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
      obj = { style, children: null };
      obj = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "eyebrow",
        color: "text-default",
        children: null,
      };
      const intl = tmp2(1114).intl;
      obj.children = intl.string(tmp2(1114).t.YugZY0);
      const items1 = [closure_6(tmp2(4602).Text, obj), , ,];
      const obj1 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj1.style = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj1.children = keys.map((planId) => {
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
      items1[1] = closure_6(c3, obj1);
      const obj2 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
      const intl2 = tmp2(1114).intl;
      obj2.children = intl2.string(tmp2(1114).t.Z5b2Gf);
      items1[2] = closure_6(tmp2(4602).Text, obj2);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj3 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
          const intl3 = tmp2(1114).intl;
          obj3.children = intl3.string(tmp2(1114).t.azRP0E);
          tmp9Result = closure_6(tmp2(4602).Text, obj3);
        }
      }
      items1[3] = tmp9Result;
      obj.children = items1;
      return closure_7(c3, obj);
    }
    obj8 = PremiumUtilsDefault;
  }
  return null;
}
