// === Module 13501: GuildBoostSlotsInventory ===

// Module 13501 (GuildBoostSlotsInventory)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 4884 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5434 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import useCountdownDefault from "useCountdown" /* 7439 */;
import _modDef13502 from "module_13502" /* 13502 */;
import SubscriptionPlaceholderPattern from "SubscriptionPlaceholderPattern" /* 13503 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import TextStyles from "TextStyles" /* 5524 */;

const GuildIconDefault = GuildIcon;

require = fn;
function GuildBoostSlotCooldown(cooldownEndsAt) {
  cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
  const items = [cooldownEndsAt];
  const memo = noop.useMemo(() => new Date(cooldownEndsAt), items);
  const tmp = closure_14();
  ({ days, hours, minutes } = useCountdownDefault(memo, 15000));
  const tmp3 = useCountdownDefault(memo, 15000);
  let tmp5 = null;
  if (valueOfResult > Date.now()) {
    const obj = { style: tmp.subscriptionSlotInfoCooldown, variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    const time = { days, hours, minutes };
    obj.children = intl.format(util.t.NffSH8, time);
    tmp5 = closure_1_11(Text_Text.Text, obj);
  }
  return tmp5;
}
function GuildBoostSlotsInventoryRow(arg0) {
  ({ title, subtitle, action, isLast } = arg0);
  const tmp = closure_14();
  let obj = { style: tmp.subscriptionSlot, children: null };
  obj = { style: tmp.subscriptionSlotInner, children: null };
  obj = { style: tmp.subscriptionSlotInfo, children: null };
  const items = [closure_1_11(Text_Text.Text, { style: tmp.subscriptionSlotInfoTitle, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: title }), subtitle];
  obj.children = items;
  const items1 = [closure_1_12(hasOwnProperty, obj), action];
  obj.children = items1;
  const items2 = [closure_1_12(hasOwnProperty, obj), ];
  let tmp4Result = null;
  if (!isLast) {
    const obj2 = { style: tmp.subscriptionSlotBorder };
    tmp4Result = closure_1_11(hasOwnProperty, obj2);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  return closure_1_12(hasOwnProperty, obj);
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
      let obj = SnowflakeUtilsDefault;
      extractTimestampResult = obj.extractTimestamp(id);
    }
    let formatToPlainStringResult = null;
    if (null != extractTimestampResult) {
      const intl = guildBoostSlot(1114).intl;
      obj = { date: null };
      const _Date = Date;
      const date = new Date(extractTimestampResult);
      obj.date = date;
      formatToPlainStringResult = intl.formatToPlainString(guildBoostSlot(1114).t["ePe+Xh"], obj);
    }
    obj = { title: formatToPlainStringResult, subtitle: null, action: null, isLast: null };
    let tmp6Result = null;
    if (null != guildBoostSlot.cooldownEndsAt) {
      const obj1 = { cooldownEndsAt: guildBoostSlot.cooldownEndsAt };
      tmp6Result = closure_11(GuildBoostSlotCooldown, obj1);
    }
    obj.subtitle = tmp6Result;
    tmp6Result = null;
    if (!guildBoostSlot.isOnCooldown()) {
      const obj2 = {
        accessibilityRole: "button",
        onPress() {
              const obj = { guildBoostSlots: null };
              const items = [guildBoostSlot];
              obj.guildBoostSlots = items;
              return obj.openTransferModal(obj);
            },
        children: null
      };
      const obj3 = { variant: "text-md/medium", color: "control-brand-foreground", children: null };
      const intl2 = guildBoostSlot(1114).intl;
      obj3.children = intl2.string(guildBoostSlot(1114).t.jqqLb6);
      obj2.children = closure_11(guildBoostSlot(4556).Text, obj3);
      tmp6Result = closure_11(guildBoostSlot(5123).PressableOpacity, obj2);
    }
    obj.action = tmp6Result;
    obj.isLast = tmp;
    return closure_11(GuildBoostSlotsInventoryRow, obj);
  }
}
function UnusedGuildBoostSlots(unusedSlots) {
  unusedSlots = unusedSlots.unusedSlots;
  const found = unusedSlots.filter((cooldownEndsAt) => {
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
  let obj = { style: closure_14().unusedSlots, children: null };
  let tmp4 = null;
  if (found1.length > 0) {
    obj = { title: null, action: null, isLast: null };
    let intl = found(1114).intl;
    obj = { numSubscriptions: found1.length };
    obj.title = intl.formatToPlainString(found(1114).t.ewI23O, obj);
    const obj1 = {
      accessibilityRole: "button",
      onPress() {
          return found(dependencyMap[16]).openApplyBoostModal();
        },
      children: null
    };
    const obj2 = { variant: "text-md/medium", color: "text-link", children: null };
    const intl2 = found(1114).intl;
    obj2.children = intl2.string(found(1114).t["7KyPor"]);
    obj1.children = closure_11(found(4556).Text, obj2);
    obj.action = closure_11(found(5123).PressableOpacity, obj1);
    obj.isLast = 0 === found.length;
    tmp4 = closure_11(GuildBoostSlotsInventoryRow, obj);
  }
  const items = [
    tmp4,
    found.map((cooldownEndsAt, index) => {
      let obj = { title: null, subtitle: null, isLast: null };
      const intl = util.intl;
      obj.title = intl.formatToPlainString(util.t.gDsyB9, { numSubscriptions: 1 });
      let tmpResult = null;
      if (null != cooldownEndsAt.cooldownEndsAt) {
        obj = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
        tmpResult = closure_2_11(GuildBoostSlotCooldown, obj);
      }
      obj.subtitle = tmpResult;
      obj.isLast = index === found.length - 1;
      return closure_2_11(GuildBoostSlotsInventoryRow, obj, cooldownEndsAt.id);
    })
  ];
  obj.children = items;
  return closure_12(closure_5, obj);
}
function BoostedGuildInfo(guild) {
  guild = guild.guild;
  const tmp = closure_14();
  let tmp2 = null;
  if (null != guild) {
    let obj = { style: tmp.guildInfo, children: null };
    obj = { style: tmp.guildInfoIcon, children: null };
    obj = { guild, size: GuildIcon.GuildIconSizes.NORMAL, selected: false };
    obj.children = closure_1_11(GuildIconDefault, obj);
    const items = [closure_1_11(hasOwnProperty, obj), ];
    const obj1 = { children: null };
    const obj2 = { style: tmp.guildInfoName, variant: "heading-lg/extrabold", color: "interactive-text-active", children: guild.name };
    const items1 = [closure_1_11(Text_Text.Text, obj2), ];
    const obj3 = { style: tmp.guildInfoRowBottom, children: null };
    const obj4 = { source: _modDef13502, style: tmp.guildInfoRowIcon };
    const items2 = [closure_1_11(timestampProducer, obj4), ];
    const obj5 = { style: tmp.guildInfoSubscriptionCount, variant: "text-xs/semibold", color: "interactive-text-active", children: null };
    const intl = util.intl;
    const obj6 = { numSubscriptions: guild.numGuildBoostSlots };
    obj5.children = intl.format(util.t.bexfNy, obj6);
    items2[1] = closure_1_11(Text_Text.Text, obj5);
    obj3.children = items2;
    items1[1] = closure_1_12(hasOwnProperty, obj3);
    obj1.children = items1;
    items[1] = closure_1_12(hasOwnProperty, obj1);
    obj.children = items;
    tmp2 = closure_1_12(hasOwnProperty, obj);
  }
  return tmp2;
}
function BoostedGuild(arg0) {
  ({ guildId: require, guildBoostSlots } = arg0);
  const tmp = closure_14();
  let obj = initialize;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  let obj1 = initialize;
  const items1 = [ThemeStore];
  let guildBannerSource = null;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => theme.theme);
  if (null != stateFromStores) {
    guildBannerSource = null;
    if (null != stateFromStores.banner) {
      let obj2 = guildBoostSlots(1396);
      guildBannerSource = obj2.getGuildBannerSource(stateFromStores);
    }
  }
  let subscriptionPlaceholderPatternSource = SubscriptionPlaceholderPattern.useSubscriptionPlaceholderPatternSource();
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
  obj2.style = items2;
  const items3 = [closure_11(closure_6, obj2), , ];
  let tmp11Result = null;
  if (null != guildBannerSource) {
    const obj3 = { style: tmp.subscriptionImageOverlay };
    tmp11Result = closure_11(closure_5, obj3);
  }
  items3[1] = tmp11Result;
  items3[2] = closure_11(guildBoostSlots(13507), { guild: stateFromStores, theme: stateFromStores1 });
  obj1.children = items3;
  const items4 = [closure_12(closure_5, obj1), closure_11(BoostedGuildInfo, { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length })];
  obj.children = items4;
  const items5 = [closure_12(closure_5, obj), ];
  const obj4 = { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length };
  const tmp2Result = SubscriptionPlaceholderPattern;
  items5[1] = closure_11(closure_5, { children: guildBoostSlots.map((guildBoostSlot, index) => closure_2_11(GuildBoostSlot, { guild: stateFromStores, guildBoostSlot, isLast: index === guildBoostSlots.length - 1 }, guildBoostSlot.id)) });
  obj.children = items5;
  return closure_12(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let createStyles = { inventory: { marginBottom: 32 }, header: { marginHorizontal: 16, marginBottom: 16 }, boostedGuild: null, subscriptionBody: null, subscriptionImageView: null, subscriptionImage: null, subscriptionImageFallback: null, subscriptionImageOverlay: null, guildInfo: null, guildInfoIcon: null, guildInfoName: null, guildInfoRowBottom: null, guildInfoRowIcon: null, guildInfoSubscriptionCount: null, subscriptionSlot: null, subscriptionSlotInner: null, subscriptionSlotBorder: null, subscriptionSlotInfo: null, subscriptionSlotInfoTitle: null, subscriptionSlotInfoCooldown: null, unusedSlots: null };
createStyles = { borderRadius: nativeDefault.radii.xs, marginBottom: 16 };
createStyles.boostedGuild = createStyles;
createStyles.subscriptionBody = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "100%", height: 112, overflow: "hidden", alignItems: "center", justifyContent: "center" };
createStyles.subscriptionImageView = size;
createStyles.subscriptionImage = { position: "absolute", width: "100%", height: "100%" };
createStyles.subscriptionImageFallback = { opacity: 0.4 };
const size1 = { position: "absolute", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK, opacity: 0.4 };
createStyles.subscriptionImageOverlay = size1;
createStyles.guildInfo = { flexDirection: "row", padding: 16 };
createStyles.guildInfoIcon = { marginRight: 8 };
let obj2 = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj2.marginBottom = 4;
createStyles.guildInfoName = obj2;
createStyles.guildInfoRowBottom = { flexDirection: "row", alignItems: "center" };
createStyles.guildInfoRowIcon = { height: 12, width: 8, marginLeft: 2, marginRight: 8 };
createStyles.guildInfoSubscriptionCount = { lineHeight: 16 };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.subscriptionSlot = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
createStyles.subscriptionSlotInner = { alignItems: "center", flexDirection: "row", paddingRight: 16, paddingVertical: 12 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
createStyles.subscriptionSlotBorder = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
createStyles.subscriptionSlotInfo = { flexShrink: 1, flexGrow: 1 };
createStyles.subscriptionSlotInfoTitle = { lineHeight: 24 };
createStyles.subscriptionSlotInfoCooldown = { lineHeight: 16 };
createStyles.unusedSlots = { marginBottom: 32 };
let closure_14 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default function GuildBoostSlotsInventory() {
  const tmp = closure_14();
  const effect = noop.useEffect(() => {
    const subscriptions = actions_BillingActionCreatorsAll.fetchSubscriptions();
    const guildBoostSlots = valueResult(4458).fetchGuildBoostSlots();
  }, []);
  let obj = initialize;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj1 = initialize;
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
  let obj2 = _modDef12(stateFromStores1);
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
  const found = keys.filter((item) => "0" !== item);
  if (0 !== found.length) {
    let tmp10Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.inventory, children: null };
      let tmp12 = null;
      if (null != first) {
        tmp12 = null;
        if (first.length > 0) {
          obj = { unusedSlots: first };
          tmp12 = closure_11(UnusedGuildBoostSlots, obj);
        }
      }
      const items2 = [tmp12, ];
      tmp10Result = null;
      if (found.length > 0) {
        obj1 = { children: null };
        obj2 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: null };
        const intl = tmp3(1114).intl;
        obj2.children = intl.string(tmp3(1114).t.gB9oQ7);
        const items3 = [closure_11(tmp3(4556).Text, obj2), found.map((guildId) => closure_2_11(BoostedGuild, { guildId, guildBoostSlots: valueResult[guildId] }, guildId))];
        obj1.children = items3;
        tmp10Result = closure_12(closure_13, obj1);
      }
      items2[1] = tmp10Result;
      obj.children = items2;
      tmp10Result = closure_12(closure_5, obj);
    }
  } else {
    tmp10Result = null;
  }
  return tmp10Result;
};