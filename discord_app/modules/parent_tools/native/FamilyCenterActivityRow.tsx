// discord_app/modules/parent_tools/native/FamilyCenterActivityRow.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2484 from "../FamilyCenter.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import GuildBadgeDefault from "../../guild/native/GuildBadge.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import FamilyCenterActivityPurchaseRowDefault from "FamilyCenterActivityPurchaseRow.tsx";
import FamilyCenterActivityGiftRowUtils from "../FamilyCenterActivityGiftRowUtils.tsx";
import FamilyCenterActivityGiftRowDefault from "FamilyCenterActivityGiftRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const View = fn(17).View;
const ACTION_TO_TEXT = fn(7866).ACTION_TO_TEXT;
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4827);
let obj = {
  container: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  avatar: null,
  avatarContainer: null,
  textContainer: null,
  text: null,
};
let obj3 = {
  display: "flex",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
obj.avatar = {
  borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.avatarContainer = { marginRight: 12, alignItems: "flex-start" };
obj.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj.text = { display: "flex", flexDirection: "row", flexShrink: 1 };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((action) => {
  action = action.action;
  const tmp = closure_10();
  value = ACTION_TO_TEXT.get(action.display_type);
  _modDef38(null != value, "No text for action type");
  const items = [UserStore];
  const stateFromStores = action(563).useStateFromStores(items, () => UserStore.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(action.event_id);
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.avatarContainer, children: null };
    const obj4 = {
      avatarStyle: tmp.avatar,
      user: stateFromStores,
      guildId: "HermesInternal",
      disablePlaceholder: null,
      avatarDecoration: stateFromStores.avatarDecoration,
    };
    obj3.children = closure_8(tmp6(1177).Avatar, obj4);
    const items1 = [closure_8(View, obj3)];
    const obj5 = { style: tmp.textContainer, children: null };
    const obj6 = {
      style: tmp.text,
      variant: "text-md/semibold",
      color: "interactive-text-active",
      ellipsizeMode: "tail",
      lineClamp: 1,
      children: null,
    };
    const tmp3Result = SnowflakeUtilsDefault;
    obj6.children = UserUtilsDefault.getName(stateFromStores);
    const items2 = [closure_8(tmp6(4823).Text, obj6)];
    const obj7 = { variant: "text-xs/medium", color: "channels-default", children: null };
    const tmp3Result2 = UserUtilsDefault;
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj7.children = tmp6(7920).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
    items2[1] = closure_8(tmp6(4823).Text, obj7);
    obj5.children = items2;
    items1[1] = closure_9(View, obj5);
    obj2.children = items1;
    return closure_9(View, obj2);
  }
  const obj = action(563);
});
memoResult.displayName = "FamilyCenterActivityRowUser";
createStyles = fn(4827);
let obj5 = {
  container: null,
  avatar: null,
  avatarText: null,
  text: null,
  headerContainer: null,
  badge: null,
  header: null,
  headerAndIconContainer: null,
};
let obj4 = {
  borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj5.container = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
let size = {
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  height: 40,
  width: 40,
  margin: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  marginRight: 12,
};
obj5.avatar = size;
let obj7 = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
obj5.avatarText = { color: nativeDefault.colors.TEXT_DEFAULT };
obj5.text = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj5.headerContainer = { display: "flex", flexDirection: "row" };
obj5.badge = { marginRight: 4 };
obj5.header = { paddingRight: 16 };
obj5.headerAndIconContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_12 = createStyles.createStyles(obj5);
const memoResult1 = noop.memo((action) => {
  action = action.action;
  const tmp = closure_12();
  const items = [FamilyCenterStore];
  const stateFromStores = action(563).useStateFromStores(items, () => FamilyCenterStore.getGuild(action.entity_id));
  value = ACTION_TO_TEXT.get(action.display_type);
  _modDef38(null != value, "No text for action type");
  if (undefined === stateFromStores) {
    return null;
  } else {
    const features2 = stateFromStores.features;
    let hasItem = features2.has(GuildFeatures.VERIFIED);
    if (!hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(GuildFeatures.PARTNERED);
    }
    const obj2 = { style: tmp.container, children: null };
    const obj4 = { style: null, textStyle: null, guild: null, size: null, animate: true };
    ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp);
    obj4.guild = stateFromStores;
    obj4.size = tmp2(5887).GuildIconSizes.NORMAL;
    const items1 = [closure_8(GuildIconDefault, obj4)];
    const obj5 = { style: tmp.text, children: null };
    const obj6 = { style: tmp.headerContainer, children: null };
    const obj7 = { style: tmp.headerAndIconContainer, children: null };
    let tmp11Result = null;
    if (hasItem) {
      const obj8 = {
        style: tmp.badge,
        guild: stateFromStores,
        size: GuildBadgeDefault.Sizes.SMALL,
        disableColor: true,
      };
      tmp11Result = closure_8(GuildBadgeDefault, obj8);
      const tmp6Result2 = GuildBadgeDefault;
    }
    const items2 = [tmp11Result];
    const obj9 = {
      style: tmp.header,
      variant: "text-md/semibold",
      color: "interactive-text-active",
      ellipsizeMode: "tail",
      lineClamp: 1,
      children: stateFromStores.name,
    };
    items2[1] = closure_8(tmp2(4823).Text, obj9);
    obj7.children = items2;
    obj6.children = closure_9(View, obj7);
    const items3 = [closure_8(View, obj6)];
    let tmp11Result2 = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj10 = { variant: "text-xs/medium", color: "channels-default", children: null };
      const intl = tmp2(1115).intl;
      const obj19 = { members: stateFromStores.approximateMemberCount };
      obj10.children = intl.format(_modDef2484["5JmNgg"], obj19);
      tmp11Result2 = closure_8(tmp2(4823).Text, obj10);
    }
    items3[1] = tmp11Result2;
    obj5.children = items3;
    items1[1] = closure_9(View, obj5);
    obj2.children = items1;
    return closure_9(View, obj2);
  }
  const obj = action(563);
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  action = action.action;
  if (!obj.isUserAction(action)) {
    if (!tmpResult.isGuildAction(action)) {
      if (!tmpResult7.isPurchase(action)) {
        if (!tmpResult8.isGift(action)) {
          return null;
        }
        tmpResult8 = FamilyCenterUtils;
      }
      tmpResult7 = FamilyCenterUtils;
    }
    tmpResult = FamilyCenterUtils;
  }
  obj = FamilyCenterUtils;
  if (tmpResult9.isPurchase(action)) {
    const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
    let tmp14 = null;
    if (null != purchaseInfo) {
      ({
        sku_id: obj11.skuId,
        subscription_plan_id: obj11.subscriptionPlanId,
        total: obj11.total,
        currency: obj11.currency,
      } = purchaseInfo);
      tmp14 = React6(FamilyCenterActivityPurchaseRowDefault, {
        skuId: null,
        subscriptionPlanId: null,
        total: null,
        currency: null,
      });
      const obj2 = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
    }
    return tmp14;
  } else {
    if (tmpResult10.isGift(action)) {
      const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const giftRowDisplayInfo = FamilyCenterActivityGiftRowUtils.getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        const obj3 = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
        return React6(FamilyCenterActivityGiftRowDefault, obj3);
      }
    } else {
      if (tmpResult12.isUserAction(action)) {
        const obj4 = { action };
        let tmp4Result = React6(memoResult, obj4);
      } else {
        const obj5 = { action };
        tmp4Result = React6(memoResult1, obj5);
      }
      const obj6 = { children: tmp4Result };
      return React6(View, obj6);
    }
    tmpResult10 = FamilyCenterUtils;
  }
  tmpResult9 = FamilyCenterUtils;
}
