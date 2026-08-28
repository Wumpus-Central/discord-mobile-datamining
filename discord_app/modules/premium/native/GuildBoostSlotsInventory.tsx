// discord_app/modules/premium/native/GuildBoostSlotsInventory.tsx
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import applyDefault from "../../../../_runtime/00012_apply.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconSizes from "../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import useCountdownDefault from "../../../hooks/useCountdown.tsx";
import registerAssetDefault from "../../../../_runtime/13092_registerAsset.js";
import getSubscriptionPlaceholderPatternSource from "../../../design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../user_settings/ThemeStore.tsx";
import closure_8 from "../../../stores/GuildStore.tsx";
import closure_9 from "../../../stores/billing/GuildBoostSlotStore.tsx";
import closure_10 from "../../../stores/billing/SubscriptionStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../rebrand/native/TextStyles.tsx";

require = arg1;
function GuildBoostSlotCooldown(cooldownEndsAt) {
  cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
  const items = [cooldownEndsAt];
  const memo = React.useMemo(() => new Date(cooldownEndsAt), items);
  const tmp = callback3();
  ({ days, hours, minutes } = useCountdownDefault(memo, 15000));
  const tmp3 = useCountdownDefault(memo, 15000);
  let tmp5 = null;
  if (valueOfResult > Date.now()) {
    let obj = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj[0] = tmp.subscriptionSlotInfoCooldown;
    const intl = cooldownEndsAt(1236).intl;
    obj = { days: null, hours: null, minutes: null };
    obj[0] = days;
    obj[1] = hours;
    obj[2] = minutes;
    obj[3] = intl.format(cooldownEndsAt(1236).t.NffSH8, obj);
    tmp5 = callback(cooldownEndsAt(4442).Text, obj);
  }
  return tmp5;
}
function GuildBoostSlotsInventoryRow(arg0) {
  ({ title, subtitle, action, isLast } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.subscriptionSlot, children: null };
  obj = { style: tmp.subscriptionSlotInner, children: null };
  obj = { style: tmp.subscriptionSlotInfo, children: null };
  const items = [callback(Text.Text, { style: tmp.subscriptionSlotInfoTitle, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: title }), subtitle];
  obj[1] = items;
  const items1 = [callback2(closure_5, obj), action];
  obj[1] = items1;
  const items2 = [callback2(closure_5, obj), ];
  let tmp4Result = null;
  if (!isLast) {
    const obj2 = { style: null };
    obj2[0] = tmp.subscriptionSlotBorder;
    tmp4Result = callback(tmp3, obj2);
  }
  items2[1] = tmp4Result;
  obj[1] = items2;
  return callback2(closure_5, obj);
}
function GuildBoostSlot(guildBoostSlot) {
  guildBoostSlot = guildBoostSlot.guildBoostSlot;
  if (null == guildBoostSlot.guild) {
    return null;
  } else {
    let id = null;
    if (null != guildBoostSlot.premiumGuildSubscription) {
      id = guildBoostSlot.premiumGuildSubscription.id;
    }
    let extractTimestampResult = null;
    if (null != id) {
      let obj = DISCORD_EPOCHDefault;
      extractTimestampResult = obj.extractTimestamp(id);
    }
    let formatToPlainStringResult = null;
    if (null != extractTimestampResult) {
      const intl = guildBoostSlot(1236).intl;
      obj = { date: null };
      const _Date = Date;
      const date = new Date(extractTimestampResult);
      obj[0] = date;
      formatToPlainStringResult = intl.formatToPlainString(guildBoostSlot(1236).t["ePe+Xh"], obj);
    }
    obj = { title: null, subtitle: null, action: null, isLast: null };
    obj[0] = formatToPlainStringResult;
    let tmp6Result = null;
    if (null != guildBoostSlot.cooldownEndsAt) {
      obj1 = { cooldownEndsAt: null };
      obj1[0] = guildBoostSlot.cooldownEndsAt;
      tmp6Result = tmp6(GuildBoostSlotCooldown, obj1);
    }
    obj[1] = tmp6Result;
    tmp6Result = null;
    if (!guildBoostSlot.isOnCooldown()) {
      const obj2 = { accessibilityRole: "button", onPress: null, children: null };
      obj2[1] = function onPress() {
        const guildBoostSlots = [guildBoostSlot];
        return guildBoostSlot(closure_1_3[16]).openTransferModal({ guildBoostSlots });
      };
      const obj3 = { variant: "text-md/medium", color: "control-brand-foreground", children: null };
      const intl2 = guildBoostSlot(1236).intl;
      obj3[2] = intl2.string(guildBoostSlot(1236).t.jqqLb6);
      obj2[2] = tmp6(guildBoostSlot(4442).Text, obj3);
      tmp6Result = tmp6(guildBoostSlot(5033).PressableOpacity, obj2);
    }
    obj[2] = tmp6Result;
    obj[3] = tmp;
    return closure_11(GuildBoostSlotsInventoryRow, obj);
  }
}
function UnusedGuildBoostSlots(unusedSlots) {
  unusedSlots = unusedSlots.unusedSlots;
  let found;
  found = unusedSlots.filter((cooldownEndsAt) => {
    cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
    let tmp = null != cooldownEndsAt;
    if (tmp) {
      const _Date = Date;
      const date = new Date(cooldownEndsAt);
      const _Date2 = Date;
      tmp = date.valueOf() > Date.now();
      const valueOfResult = date.valueOf();
    }
    return tmp;
  });
  const found1 = unusedSlots.filter((cooldownEndsAt) => {
    cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
    let tmp = null == cooldownEndsAt;
    if (!tmp) {
      const _Date = Date;
      const date = new Date(cooldownEndsAt);
      const _Date2 = Date;
      tmp = date.valueOf() <= Date.now();
      const valueOfResult = date.valueOf();
    }
    return tmp;
  });
  let obj = { style: callback3().unusedSlots, children: null };
  let tmp4 = null;
  if (found1.length > 0) {
    obj = { title: null, action: null, isLast: null };
    let intl = found(1236).intl;
    obj = { numSubscriptions: null };
    obj[0] = found1.length;
    obj[0] = intl.formatToPlainString(found(1236).t.ewI23O, obj);
    obj1 = { accessibilityRole: "button", onPress: null, children: null };
    obj1[1] = function onPress() {
      return found(table[16]).openApplyBoostModal();
    };
    const obj2 = { variant: "text-md/medium", color: "text-link", children: null };
    const intl2 = found(1236).intl;
    obj2[2] = intl2.string(found(1236).t["7KyPor"]);
    obj1[2] = callback(found(4442).Text, obj2);
    obj[1] = callback(found(5033).PressableOpacity, obj1);
    obj[2] = 0 === found.length;
    tmp4 = callback(GuildBoostSlotsInventoryRow, obj);
  }
  const items = [
    tmp4,
    found.map((cooldownEndsAt) => {
      let obj = { title: null, subtitle: null, isLast: null };
      const intl = found(closure_1_3[13]).intl;
      obj[0] = intl.formatToPlainString(found(closure_1_3[13]).t.gDsyB9, { numSubscriptions: 1 });
      let tmpResult = null;
      if (null != cooldownEndsAt.cooldownEndsAt) {
        obj = { cooldownEndsAt: null };
        obj[0] = cooldownEndsAt.cooldownEndsAt;
        tmpResult = tmp(closure_1_15, obj);
      }
      obj[1] = tmpResult;
      obj[2] = arg1 === found.length - 1;
      return closure_1_11(closure_1_16, obj, cooldownEndsAt.id);
    })
  ];
  obj[1] = items;
  return closure_12(closure_5, obj);
}
function BoostedGuildInfo(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let tmp2 = null;
  if (null != guild) {
    let obj = { style: null, children: null };
    obj[0] = tmp.guildInfo;
    obj = { style: null, children: null };
    obj[0] = tmp.guildInfoIcon;
    obj = { guild: null, size: null, selected: false };
    obj[0] = guild;
    obj[1] = GuildIconSizes.GuildIconSizes.NORMAL;
    obj[1] = callback(GuildIconSizesDefault, obj);
    const items = [callback(closure_5, obj), ];
    obj1 = { children: null };
    const obj2 = { style: null, variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
    obj2[0] = tmp.guildInfoName;
    obj2[3] = guild.name;
    const items1 = [callback(Text.Text, obj2), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.guildInfoRowBottom;
    const obj4 = { source: null, style: null };
    obj4[0] = registerAssetDefault;
    obj4[1] = tmp.guildInfoRowIcon;
    const items2 = [callback(closure_6, obj4), ];
    const obj5 = { style: null, variant: "text-xs/semibold", color: "interactive-text-active", children: null };
    obj5[0] = tmp.guildInfoSubscriptionCount;
    const intl = getSystemLocale.intl;
    const obj6 = { numSubscriptions: null };
    obj6[0] = guild.numGuildBoostSlots;
    obj5[3] = intl.format(getSystemLocale.t.bexfNy, obj6);
    items2[1] = callback(Text.Text, obj5);
    obj3[1] = items2;
    items1[1] = callback2(closure_5, obj3);
    obj1[0] = items1;
    items[1] = callback2(closure_5, obj1);
    obj[1] = items;
    tmp2 = callback2(closure_5, obj);
    const tmp8 = GuildIconSizesDefault;
  }
  return tmp2;
}
function BoostedGuild(arg0) {
  ({ guildId: require, guildBoostSlots } = arg0);
  let stateFromStores;
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getGuild(closure_0));
  obj1 = initialize;
  const items1 = [closure_7];
  let guildBannerSource = null;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => theme.theme);
  if (null != stateFromStores) {
    guildBannerSource = null;
    if (null != stateFromStores.banner) {
      let obj2 = guildBoostSlots(1435);
      guildBannerSource = obj2.getGuildBannerSource(stateFromStores);
    }
  }
  let subscriptionPlaceholderPatternSource = getSubscriptionPlaceholderPatternSource.useSubscriptionPlaceholderPatternSource();
  if (null != guildBannerSource) {
    subscriptionPlaceholderPatternSource = guildBannerSource;
  }
  obj = { style: tmp.boostedGuild, children: null };
  obj = { style: tmp.subscriptionBody, children: null };
  obj1 = { style: tmp.subscriptionImageView, children: null };
  obj2 = { source: subscriptionPlaceholderPatternSource, style: null };
  const items2 = [tmp.subscriptionImage, ];
  let prop = null;
  if (null == guildBannerSource) {
    prop = tmp.subscriptionImageFallback;
  }
  items2[1] = prop;
  obj2[1] = items2;
  const items3 = [closure_11(closure_6, obj2), , ];
  let tmp11Result = null;
  if (null != guildBannerSource) {
    const obj3 = { style: null };
    obj3[0] = tmp.subscriptionImageOverlay;
    tmp11Result = tmp11(tmp10, obj3);
  }
  items3[1] = tmp11Result;
  items3[2] = closure_11(guildBoostSlots(13097), { guild: stateFromStores, theme: stateFromStores1 });
  obj1[1] = items3;
  const items4 = [closure_12(closure_5, obj1), closure_11(BoostedGuildInfo, { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length })];
  obj[1] = items4;
  const items5 = [closure_12(closure_5, obj), ];
  const obj4 = { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length };
  const tmp12 = closure_6;
  const tmp2 = require;
  const tmp2Result = getSubscriptionPlaceholderPatternSource;
  items5[1] = closure_11(closure_5, { children: guildBoostSlots.map((guildBoostSlot) => closure_1_11(closure_1_17, { guild: stateFromStores, guildBoostSlot, isLast: arg1 === guildBoostSlots.length - 1 }, guildBoostSlot.id)) });
  obj[1] = items5;
  return closure_12(closure_5, obj);
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { inventory: { marginBottom: 32 }, header: { marginHorizontal: 16, marginBottom: 16 }, boostedGuild: null, subscriptionBody: null, subscriptionImageView: null, subscriptionImage: null, subscriptionImageFallback: null, subscriptionImageOverlay: null, guildInfo: null, guildInfoIcon: null, guildInfoName: null, guildInfoRowBottom: null, guildInfoRowIcon: null, guildInfoSubscriptionCount: null, subscriptionSlot: null, subscriptionSlotInner: null, subscriptionSlotBorder: null, subscriptionSlotInfo: null, subscriptionSlotInfoTitle: null, subscriptionSlotInfoCooldown: null, unusedSlots: null };
createCacheKey = { borderRadius: ThemesDefault.radii.xs, marginBottom: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, width: "100%", height: 112, overflow: "hidden", alignItems: "center", justifyContent: "center" };
createCacheKey[5] = { position: "absolute", width: "100%", height: "100%" };
createCacheKey[6] = { opacity: 0.4 };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, width: "100%", height: 112, overflow: "hidden", alignItems: "center", justifyContent: "center" };
createCacheKey[7] = { position: "absolute", width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BLACK, opacity: 0.4 };
createCacheKey[8] = { flexDirection: "row", padding: 16 };
createCacheKey[9] = { marginRight: 8 };
let obj4 = {};
let obj3 = { position: "absolute", width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BLACK, opacity: 0.4 };
const merged = Object.assign(importDefaultResult(require("ME").Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj4.marginBottom = 4;
createCacheKey[10] = obj4;
createCacheKey[11] = { flexDirection: "row", alignItems: "center" };
createCacheKey[12] = { height: 12, width: 8, marginLeft: 2, marginRight: 8 };
createCacheKey[13] = { lineHeight: 16 };
createCacheKey[14] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
createCacheKey[15] = { alignItems: "center", flexDirection: "row", paddingRight: 16, paddingVertical: 12 };
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
createCacheKey[16] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1 };
createCacheKey[17] = { flexShrink: 1, flexGrow: 1 };
createCacheKey[18] = { lineHeight: 24 };
createCacheKey[19] = { lineHeight: 16 };
createCacheKey[20] = { marginBottom: 32 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj6 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1 };
const result = require("set").fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default function GuildBoostSlotsInventory() {
  const tmp = callback3();
  const effect = React.useEffect(() => {
    const subscriptions = callback(4803).fetchSubscriptions();
    const obj = callback(4803);
    const guildBoostSlots = valueResult(4341).fetchGuildBoostSlots();
  }, []);
  let obj = initialize;
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  obj1 = initialize;
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
  let obj2 = applyDefault(stateFromStores1);
  const valueResult = obj2.groupBy((premiumGuildSubscription) => {
    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
    let str = "0";
    if (null != premiumGuildSubscription) {
      str = premiumGuildSubscription.guildId;
    }
    return str;
  }).value();
  require = valueResult;
  const first = valueResult[0];
  const keys = Object.keys(valueResult);
  const found = keys.filter((arg0) => "0" !== arg0);
  if (0 !== found.length) {
    let tmp10Result = null;
    if (null != stateFromStores) {
      obj = { style: null, children: null };
      obj[0] = tmp.inventory;
      let tmp12 = null;
      if (null != first) {
        tmp12 = null;
        if (first.length > 0) {
          obj = { unusedSlots: null };
          obj[0] = first;
          tmp12 = callback(UnusedGuildBoostSlots, obj);
        }
      }
      const items2 = [tmp12, ];
      tmp10Result = null;
      if (found.length > 0) {
        obj1 = { children: null };
        obj2 = { style: null, variant: "eyebrow", color: "text-default", children: null };
        obj2[0] = tmp.header;
        const intl = tmp3(1236).intl;
        obj2[3] = intl.string(tmp3(1236).t.gB9oQ7);
        const items3 = [callback(tmp3(4442).Text, obj2), found.map((guildId) => closure_1_11(closure_1_20, { guildId, guildBoostSlots: valueResult[guildId] }, guildId))];
        obj1[0] = items3;
        tmp10Result = tmp10(closure_13, obj1);
      }
      items2[1] = tmp10Result;
      obj[1] = items2;
      tmp10Result = tmp10(closure_5, obj);
      const tmp11 = closure_5;
    }
  } else {
    tmp10Result = null;
  }
  return tmp10Result;
};