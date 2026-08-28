// discord_app/modules/parent_tools/native/FamilyCenterActivityRow.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getEmptyActivityFormatter from "../FamilyCenterUtils.tsx";
import FamilyCenterActivityPurchaseRowDefault from "FamilyCenterActivityPurchaseRow.tsx";
import FamilyCenterActivityGiftRowDefault from "FamilyCenterActivityGiftRow.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/UserStore.tsx";
import closure_5 from "../FamilyCenterStore.tsx";
import { ACTION_TO_TEXT } from "../FamilyCenterConstants.tsx";
import { GuildFeatures } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { container: null, avatar: null, avatarContainer: null, textContainer: null, text: null };
obj = { display: "flex", flexDirection: "row", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj[0] = obj;
createCacheKey = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[1] = createCacheKey;
obj[2] = { marginRight: 12, alignItems: "flex-start" };
obj[3] = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj[4] = { display: "flex", flexDirection: "row", flexShrink: 1 };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((action) => {
  action = action.action;
  const tmp = callback3();
  const value = ACTION_TO_TEXT.get(action.display_type);
  _modDef38(null != value, "No text for action type");
  let obj = action(647);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp3Result = tmp3(11);
    const extractTimestampResult = tmp3Result.extractTimestamp(action.event_id);
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.avatarContainer;
    obj1 = { avatarStyle: null, user: null, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: "Warning" };
    obj1[0] = tmp.avatar;
    obj1[1] = stateFromStores;
    obj1[4] = stateFromStores.avatarDecoration;
    obj[1] = callback(tmp6(1297).Avatar, obj1);
    const items1 = [callback(View, obj), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.textContainer;
    const obj3 = { style: null, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj3[0] = tmp.text;
    tmp3Result = tmp3(4290);
    obj3[5] = tmp3Result.getName(stateFromStores);
    const items2 = [callback(tmp6(4442).Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "channels-default", children: null };
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj4[2] = tmp6(7285).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
    items2[1] = callback(tmp6(4442).Text, obj4);
    obj2[1] = items2;
    items1[1] = callback2(View, obj2);
    obj[1] = items1;
    return callback2(View, obj);
  }
});
const unpackModuleId = memoResult;
memoResult.displayName = "FamilyCenterActivityRowUser";
let obj2 = { container: { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 }, avatar: null, avatarText: null, text: null, headerContainer: null, badge: null, header: null, headerAndIconContainer: null };
let obj3 = { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj2[1] = { borderRadius: ThemesDefault.radii.md, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
obj2[2] = createCacheKey;
obj2[3] = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj2[4] = { display: "flex", flexDirection: "row" };
obj2[5] = { marginRight: 4 };
obj2[6] = { paddingRight: 16 };
obj2[7] = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_12 = createCacheKey.createStyles(obj2);
const memoResult1 = importAllResult.memo((action) => {
  action = action.action;
  const tmp = callback4();
  let obj = action(647);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getGuild(action.entity_id));
  const value = ACTION_TO_TEXT.get(action.display_type);
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
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, textStyle: null, guild: null, size: null, animate: true };
    ({ avatar: obj3[0], avatarText: obj3[1] } = tmp);
    obj[2] = stateFromStores;
    let tmp6Result = tmp6(5969);
    obj[3] = tmp2(5969).GuildIconSizes.NORMAL;
    const items1 = [callback(tmp6Result, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.text;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.headerContainer;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.headerAndIconContainer;
    let tmp11Result = null;
    if (hasItem) {
      const obj4 = { style: null, guild: null, size: null, disableColor: true };
      obj4[0] = tmp.badge;
      obj4[1] = stateFromStores;
      tmp6Result = tmp6(7620);
      obj4[2] = tmp6(7620).Sizes.SMALL;
      tmp11Result = tmp11(tmp6Result, obj4);
    }
    const items2 = [tmp11Result, ];
    const obj5 = { style: null, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj5[0] = tmp.header;
    obj5[5] = stateFromStores.name;
    items2[1] = callback(tmp2(4442).Text, obj5);
    obj3[1] = items2;
    obj2[1] = closure_9(View, obj3);
    const items3 = [callback(View, obj2), ];
    tmp11Result = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj6 = { variant: "text-xs/medium", color: "channels-default", children: null };
      const intl = tmp2(1236).intl;
      const obj7 = { members: null };
      obj7[0] = stateFromStores.approximateMemberCount;
      obj6[2] = intl.format(tmp6(2370)["5JmNgg"], obj7);
      tmp11Result = tmp11(tmp2(4442).Text, obj6);
    }
    items3[1] = tmp11Result;
    obj1[1] = items3;
    items1[1] = closure_9(View, obj1);
    obj[1] = items1;
    return closure_9(View, obj);
  }
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
let obj4 = { borderRadius: ThemesDefault.radii.md, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  action = action.action;
  let obj = getEmptyActivityFormatter;
  if (!obj.isUserAction(action)) {
    let tmpResult = tmp(7285);
    if (!tmpResult.isGuildAction(action)) {
      tmpResult = tmp(7285);
      if (!tmpResult.isPurchase(action)) {
        if (!tmpResult1.isGift(action)) {
          return null;
        }
        tmpResult1 = tmp(7285);
      }
    }
  }
  if (tmpResult2.isPurchase(action)) {
    const purchaseInfo = store.getPurchaseInfo(action.entity_id);
    let tmp14 = null;
    if (null != purchaseInfo) {
      obj = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
      ({ sku_id: obj11[0], subscription_plan_id: obj11[1], total: obj11[2], currency: obj11[3] } = purchaseInfo);
      tmp14 = callback(FamilyCenterActivityPurchaseRowDefault, obj);
    }
    return tmp14;
  } else {
    if (tmpResult3.isGift(action)) {
      const giftInfo = store.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const giftRowDisplayInfo = tmp(14443).getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        obj = { skuId: null, subscriptionPlanId: null, price: null, gifterUserId: null, claimed: null, offeredAt: null, claimedAt: null };
        obj[0] = skuId;
        obj[1] = subscriptionPlanId;
        obj[2] = price;
        obj[3] = gifterUserId;
        obj[4] = claimed;
        obj[5] = offeredAt;
        obj[6] = claimedAt;
        return callback(FamilyCenterActivityGiftRowDefault, obj);
      }
    } else {
      if (tmpResult5.isUserAction(action)) {
        obj1 = { action: null };
        obj1[0] = action;
        let tmp4Result = tmp4(closure_11, obj1);
      } else {
        const obj2 = { action: null };
        obj2[0] = action;
        tmp4Result = tmp4(memoResult1, obj2);
      }
      const obj3 = { children: null };
      obj3[0] = tmp4Result;
      return callback(View, obj3);
    }
    tmpResult3 = tmp(7285);
  }
  tmpResult2 = getEmptyActivityFormatter;
};