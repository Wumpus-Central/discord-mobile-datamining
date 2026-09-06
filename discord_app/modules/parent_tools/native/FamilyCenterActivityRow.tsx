// === Module 14900: FamilyCenterActivityRow ===

// Module 14900 (FamilyCenterActivityRow)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7593 */;
import FamilyCenterActivityPurchaseRowDefault from "FamilyCenterActivityPurchaseRow" /* 14901 */;
import FamilyCenterActivityGiftRowDefault from "FamilyCenterActivityGiftRow" /* 14905 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const View = fn(17).View;
const ACTION_TO_TEXT = fn(7538).ACTION_TO_TEXT;
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = { container: null, avatar: null, avatarContainer: null, textContainer: null, text: null };
obj = { display: "flex", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj.container = obj;
let createStyles = { borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.avatar = createStyles;
obj.avatarContainer = { marginRight: 12, alignItems: "flex-start" };
obj.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj.text = { display: "flex", flexDirection: "row", flexShrink: 1 };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((action) => {
  action = action.action;
  const tmp = closure_10();
  value = ACTION_TO_TEXT.get(action.display_type);
  _modDef38(null != value, "No text for action type");
  let obj = action(563);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp3Result = tmp3(11);
    const extractTimestampResult = tmp3Result.extractTimestamp(action.event_id);
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.avatarContainer, children: null };
    const obj1 = { avatarStyle: tmp.avatar, user: stateFromStores, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: stateFromStores.avatarDecoration };
    obj.children = closure_8(tmp6(1178).Avatar, obj1);
    const items1 = [closure_8(View, obj), ];
    const obj2 = { style: tmp.textContainer, children: null };
    const obj3 = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    tmp3Result = tmp3(4404);
    obj3.children = tmp3Result.getName(stateFromStores);
    const items2 = [closure_8(tmp6(4556).Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "channels-default", children: null };
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj4.children = tmp6(7593).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
    items2[1] = closure_8(tmp6(4556).Text, obj4);
    obj2.children = items2;
    items1[1] = closure_9(View, obj2);
    obj.children = items1;
    return closure_9(View, obj);
  }
});
memoResult.displayName = "FamilyCenterActivityRowUser";
createStyles = fn(4560);
let obj2 = { container: { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 }, avatar: null, avatarText: null, text: null, headerContainer: null, badge: null, header: null, headerAndIconContainer: null };
let size = { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
obj2.avatar = size;
let obj3 = { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj2.avatarText = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.text = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj2.headerContainer = { display: "flex", flexDirection: "row" };
obj2.badge = { marginRight: 4 };
obj2.header = { paddingRight: 16 };
obj2.headerAndIconContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_12 = createStyles.createStyles(obj2);
const memoResult1 = noop.memo((action) => {
  action = action.action;
  const tmp = closure_12();
  let obj = action(563);
  const items = [FamilyCenterStore];
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getGuild(action.entity_id));
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
    obj = { style: tmp.container, children: null };
    obj = { style: null, textStyle: null, guild: null, size: null, animate: true };
    ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp);
    obj.guild = stateFromStores;
    let tmp6Result = tmp6(5584);
    obj.size = tmp2(5584).GuildIconSizes.NORMAL;
    const items1 = [closure_8(tmp6Result, obj), ];
    const obj1 = { style: tmp.text, children: null };
    const obj2 = { style: tmp.headerContainer, children: null };
    const obj3 = { style: tmp.headerAndIconContainer, children: null };
    let tmp11Result = null;
    if (hasItem) {
      const obj4 = { style: tmp.badge, guild: stateFromStores, size: null, disableColor: true };
      tmp6Result = tmp6(5590);
      obj4.size = tmp6(5590).Sizes.SMALL;
      tmp11Result = tmp11(tmp6Result, obj4);
    }
    const items2 = [tmp11Result, ];
    const obj5 = { style: tmp.header, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: stateFromStores.name };
    items2[1] = closure_8(tmp2(4556).Text, obj5);
    obj3.children = items2;
    obj2.children = closure_9(View, obj3);
    const items3 = [closure_8(View, obj2), ];
    tmp11Result = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj6 = { variant: "text-xs/medium", color: "channels-default", children: null };
      const intl = tmp2(1114).intl;
      const obj7 = { members: stateFromStores.approximateMemberCount };
      obj6.children = intl.format(tmp6(2396)["5JmNgg"], obj7);
      tmp11Result = tmp11(tmp2(4556).Text, obj6);
    }
    items3[1] = tmp11Result;
    obj1.children = items3;
    items1[1] = closure_9(View, obj1);
    obj.children = items1;
    return closure_9(View, obj);
  }
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  action = action.action;
  let obj = FamilyCenterUtils;
  if (!obj.isUserAction(action)) {
    let tmpResult = tmp(7593);
    if (!tmpResult.isGuildAction(action)) {
      tmpResult = tmp(7593);
      if (!tmpResult.isPurchase(action)) {
        if (!tmpResult1.isGift(action)) {
          return null;
        }
        tmpResult1 = tmp(7593);
      }
    }
  }
  if (tmpResult2.isPurchase(action)) {
    const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
    let tmp14 = null;
    if (null != purchaseInfo) {
      obj = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
      ({ sku_id: obj11.skuId, subscription_plan_id: obj11.subscriptionPlanId, total: obj11.total, currency: obj11.currency } = purchaseInfo);
      tmp14 = React6(FamilyCenterActivityPurchaseRowDefault, obj);
    }
    return tmp14;
  } else {
    if (tmpResult3.isGift(action)) {
      const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const giftRowDisplayInfo = tmp(14904).getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        obj = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
        return React6(FamilyCenterActivityGiftRowDefault, obj);
      }
    } else {
      if (tmpResult5.isUserAction(action)) {
        const obj1 = { action };
        let tmp4Result = tmp4(memoResult, obj1);
      } else {
        const obj2 = { action };
        tmp4Result = tmp4(memoResult1, obj2);
      }
      const obj3 = { children: tmp4Result };
      return React6(View, obj3);
    }
    tmpResult3 = tmp(7593);
  }
  tmpResult2 = FamilyCenterUtils;
};