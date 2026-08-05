// discord_app/modules/parent_tools/native/FamilyCenterActivityRow.tsx
import importAllResult from "messagesProxy";
import { View } from "getGuildBadgeSource";
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { ACTION_TO_TEXT } from "items";
import { GuildFeatures } from "ME";
import jsxProd from "getGiftRowDisplayInfo";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
import { FamilyCenterActivityGiftRow } from "FamilyCenterActivityGiftRow.tsx";
import { FamilyCenterActivityPurchaseRow } from "FamilyCenterActivityPurchaseRow.tsx";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { container: null, avatar: null, avatarContainer: null, textContainer: null, text: null };
obj = { display: "flex", flexDirection: "row", borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj[0] = obj;
createCacheKey = { borderRadius: null, backgroundColor: null };
createCacheKey[0] = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2;
createCacheKey[1] = require("Themes").colors.BACKGROUND_SURFACE_HIGH;
obj[1] = createCacheKey;
obj[2] = { marginRight: 12, alignItems: "flex-start" };
obj[3] = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj[4] = { display: "flex", flexDirection: "row", flexShrink: 1 };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((action) => {
  action = action.action;
  const tmp = callback3();
  const value = ACTION_TO_TEXT.get(action.display_type);
  00038__(null != value, "No text for action type");
  let obj = action(647);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp3Result = tmp3(11);
    const extractTimestampResult = tmp3Result.extractTimestamp(action.event_id);
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.avatarContainer;
    const obj1 = { avatarStyle: null, user: null, guildId: "T", disablePlaceholder: null, avatarDecoration: "Warning" };
    obj1[0] = tmp.avatar;
    obj1[1] = stateFromStores;
    obj1[4] = stateFromStores.avatarDecoration;
    obj[1] = callback(tmp6(1297).Avatar, obj1);
    const items1 = [callback(View, obj), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.textContainer;
    const obj3 = { style: null, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj3[0] = tmp.text;
    tmp3Result = tmp3(4094);
    obj3[5] = tmp3Result.getName(stateFromStores);
    const items2 = [callback(tmp6(4251).Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "channels-default", children: null };
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj4[2] = tmp6(6946).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
    items2[1] = callback(tmp6(4251).Text, obj4);
    obj2[1] = items2;
    items1[1] = callback2(View, obj2);
    obj[1] = items1;
    return callback2(View, obj);
  }
});
const unpackModuleId = memoResult;
memoResult.displayName = "FamilyCenterActivityRowUser";
let obj2 = { container: null, avatar: null, avatarText: null, text: null, headerContainer: null, badge: null, header: null, headerAndIconContainer: null };
obj2[0] = { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
let obj3 = { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj2[1] = { borderRadius: require("Themes").radii.md, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
createCacheKey = { color: require("Themes").colors.TEXT_DEFAULT };
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
  const items = [freshTeenActivityWithMap];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(action.entity_id));
  const value = ACTION_TO_TEXT.get(action.display_type);
  00038__(null != value, "No text for action type");
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
    let tmp6Result = tmp6(5646);
    obj[3] = tmp2(5646).GuildIconSizes.NORMAL;
    const items1 = [callback(tmp6Result, obj), ];
    const obj1 = { style: null, children: null };
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
      tmp6Result = tmp6(8221);
      obj4[2] = tmp6(8221).Sizes.SMALL;
      tmp11Result = tmp11(tmp6Result, obj4);
    }
    const items2 = [tmp11Result, ];
    const obj5 = { style: null, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj5[0] = tmp.header;
    obj5[5] = stateFromStores.name;
    items2[1] = callback(tmp2(4251).Text, obj5);
    obj3[1] = items2;
    obj2[1] = closure_9(View, obj3);
    const items3 = [callback(View, obj2), ];
    tmp11Result = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj6 = { variant: "text-xs/medium", color: "channels-default", children: null };
      const intl = tmp2(1236).intl;
      const obj7 = { members: null };
      obj7[0] = stateFromStores.approximateMemberCount;
      obj6[2] = intl.format(tmp6(2255)["5JmNgg"], obj7);
      tmp11Result = tmp11(tmp2(4251).Text, obj6);
    }
    items3[1] = tmp11Result;
    obj1[1] = items3;
    items1[1] = closure_9(View, obj1);
    obj[1] = items1;
    return closure_9(View, obj);
  }
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
let obj4 = { borderRadius: require("Themes").radii.md, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  let claimed;
  let claimedAt;
  let gifterUserId;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  action = action.action;
  let obj = getEmptyActivityFormatter;
  if (!obj.isUserAction(action)) {
    let tmpResult = tmp(6946);
    if (!tmpResult.isGuildAction(action)) {
      tmpResult = tmp(6946);
      if (!tmpResult.isPurchase(action)) {
        if (!tmpResult1.isGift(action)) {
          return null;
        }
        tmpResult1 = tmp(6946);
      }
    }
  }
  if (tmpResult2.isPurchase(action)) {
    const purchaseInfo = store.getPurchaseInfo(action.entity_id);
    let tmp14 = null;
    if (null != purchaseInfo) {
      obj = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
      ({ sku_id: obj11[0], subscription_plan_id: obj11[1], total: obj11[2], currency: obj11[3] } = purchaseInfo);
      tmp14 = callback(FamilyCenterActivityPurchaseRow, obj);
    }
    return tmp14;
  } else {
    if (tmpResult3.isGift(action)) {
      const giftInfo = store.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const giftRowDisplayInfo = tmp(14028).getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        obj = { skuId: null, subscriptionPlanId: null, price: null, gifterUserId: null, claimed: null, offeredAt: null, claimedAt: null };
        obj[0] = skuId;
        obj[1] = subscriptionPlanId;
        obj[2] = price;
        obj[3] = gifterUserId;
        obj[4] = claimed;
        obj[5] = offeredAt;
        obj[6] = claimedAt;
        return callback(FamilyCenterActivityGiftRow, obj);
      }
    } else {
      if (tmpResult5.isUserAction(action)) {
        const obj1 = { action: null };
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
    tmpResult3 = tmp(6946);
  }
  tmpResult2 = getEmptyActivityFormatter;
};