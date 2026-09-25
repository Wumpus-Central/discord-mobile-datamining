// === Module 13024: GuildBoostSlotsInventory ===

// Module 13024 (GuildBoostSlotsInventory)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 5167 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5741 */;
import GuildIcon from "GuildIcon" /* 5891 */;
import useCountdownDefault from "useCountdown" /* 6854 */;
import _modDef13025 from "module_13025" /* 13025 */;
import SubscriptionPlaceholderPattern from "SubscriptionPlaceholderPattern" /* 13026 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import GuildStore from "GuildStore" /* 2066 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4725 */;
import SubscriptionStore from "SubscriptionStore" /* 4491 */;
import TextStyles from "TextStyles" /* 5831 */;

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
  const obj = { style: tmp.subscriptionSlot, children: null };
  const obj2 = { style: tmp.subscriptionSlotInner, children: null };
  const obj3 = { style: tmp.subscriptionSlotInfo, children: null };
  const items = [closure_1_11(Text_Text.Text, { style: tmp.subscriptionSlotInfoTitle, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: title }), subtitle];
  obj3.children = items;
  const items1 = [closure_1_12(hasOwnProperty, obj3), action];
  obj2.children = items1;
  const items2 = [closure_1_12(hasOwnProperty, obj2), ];
  let tmp4Result = null;
  if (!isLast) {
    const obj5 = { style: tmp.subscriptionSlotBorder };
    tmp4Result = closure_1_11(hasOwnProperty, obj5);
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
      extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id);
    }
    let formatToPlainStringResult = null;
    if (null != extractTimestampResult) {
      const intl = guildBoostSlot(1115).intl;
      let obj2 = { date: null };
      const _Date = Date;
      const date = new Date(extractTimestampResult);
      obj2.date = date;
      formatToPlainStringResult = intl.formatToPlainString(guildBoostSlot(1115).t["ePe+Xh"], obj2);
    }
    const obj3 = { title: formatToPlainStringResult, subtitle: null, action: null, isLast: null };
    let tmp6Result = null;
    if (null != guildBoostSlot.cooldownEndsAt) {
      const obj4 = { cooldownEndsAt: guildBoostSlot.cooldownEndsAt };
      tmp6Result = closure_11(GuildBoostSlotCooldown, obj4);
    }
    obj3.subtitle = tmp6Result;
    let tmp6Result2 = null;
    if (!guildBoostSlot.isOnCooldown()) {
      const obj5 = {
        accessibilityRole: "button",
        onPress() {
              const obj2 = { guildBoostSlots: null };
              const items = [guildBoostSlot];
              obj2.guildBoostSlots = items;
              return actions_BoostingActionCreators.openTransferModal(obj2);
            },
        children: null
      };
      const obj6 = { variant: "text-md/medium", color: "control-brand-foreground", children: null };
      const intl2 = guildBoostSlot(1115).intl;
      obj6.children = intl2.string(guildBoostSlot(1115).t.jqqLb6);
      obj5.children = closure_11(guildBoostSlot(4825).Text, obj6);
      tmp6Result2 = closure_11(guildBoostSlot(5428).PressableOpacity, obj5);
    }
    obj3.action = tmp6Result2;
    obj3.isLast = tmp;
    return closure_11(GuildBoostSlotsInventoryRow, obj3);
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
    let obj2 = { title: null, action: null, isLast: null };
    let intl = found(1115).intl;
    const obj3 = { numSubscriptions: found1.length };
    obj2.title = intl.formatToPlainString(found(1115).t.ewI23O, obj3);
    const obj4 = {
      accessibilityRole: "button",
      onPress() {
          return found(dependencyMap[16]).openApplyBoostModal();
        },
      children: null
    };
    const obj5 = { variant: "text-md/medium", color: "text-link", children: null };
    const intl2 = found(1115).intl;
    obj5.children = intl2.string(found(1115).t["7KyPor"]);
    obj4.children = closure_11(found(4825).Text, obj5);
    obj2.action = closure_11(found(5428).PressableOpacity, obj4);
    obj2.isLast = 0 === found.length;
    tmp4 = closure_11(GuildBoostSlotsInventoryRow, obj2);
  }
  const items = [
    tmp4,
    found.map((cooldownEndsAt, index) => {
      const obj = { title: null, subtitle: null, isLast: null };
      const intl = util.intl;
      obj.title = intl.formatToPlainString(util.t.gDsyB9, { numSubscriptions: 1 });
      let tmpResult = null;
      if (null != cooldownEndsAt.cooldownEndsAt) {
        const obj2 = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
        tmpResult = closure_2_11(GuildBoostSlotCooldown, obj2);
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
    const obj = { style: tmp.guildInfo, children: null };
    const obj2 = { style: tmp.guildInfoIcon, children: null };
    const obj3 = { guild, size: GuildIcon.GuildIconSizes.NORMAL, selected: false };
    obj2.children = closure_1_11(GuildIconDefault, obj3);
    const items = [closure_1_11(hasOwnProperty, obj2), ];
    const obj4 = { children: null };
    const obj5 = { style: tmp.guildInfoName, variant: "heading-lg/extrabold", color: "interactive-text-active", children: guild.name };
    const items1 = [closure_1_11(Text_Text.Text, obj5), ];
    const obj6 = { style: tmp.guildInfoRowBottom, children: null };
    const obj7 = { source: _modDef13025, style: tmp.guildInfoRowIcon };
    const items2 = [closure_1_11(timestampProducer, obj7), ];
    const obj8 = { style: tmp.guildInfoSubscriptionCount, variant: "text-xs/semibold", color: "interactive-text-active", children: null };
    const intl = util.intl;
    const obj9 = { numSubscriptions: guild.numGuildBoostSlots };
    obj8.children = intl.format(util.t.bexfNy, obj9);
    items2[1] = closure_1_11(Text_Text.Text, obj8);
    obj6.children = items2;
    items1[1] = closure_1_12(hasOwnProperty, obj6);
    obj4.children = items1;
    items[1] = closure_1_12(hasOwnProperty, obj4);
    obj.children = items;
    tmp2 = closure_1_12(hasOwnProperty, obj);
  }
  return tmp2;
}
function BoostedGuild(arg0) {
  ({ guildId: require, guildBoostSlots } = arg0);
  const tmp = closure_14();
  const items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(require));
  const items1 = [ThemeStore];
  let guildBannerSource = null;
  const stateFromStores1 = initialize.useStateFromStores(items1, () => theme.theme);
  if (null != stateFromStores) {
    guildBannerSource = null;
    if (null != stateFromStores.banner) {
      guildBannerSource = guildBoostSlots(1397).getGuildBannerSource(stateFromStores);
      const obj3 = guildBoostSlots(1397);
    }
  }
  let subscriptionPlaceholderPatternSource = SubscriptionPlaceholderPattern.useSubscriptionPlaceholderPatternSource();
  if (null != guildBannerSource) {
    subscriptionPlaceholderPatternSource = guildBannerSource;
  }
  const obj4 = { style: tmp.boostedGuild, children: null };
  const obj5 = { style: tmp.subscriptionBody, children: null };
  const obj6 = { style: tmp.subscriptionImageView, children: null };
  const obj7 = { source: subscriptionPlaceholderPatternSource, style: null };
  const items2 = [tmp.subscriptionImage, ];
  let prop = null;
  if (null == guildBannerSource) {
    prop = tmp.subscriptionImageFallback;
  }
  items2[1] = prop;
  obj7.style = items2;
  const items3 = [closure_11(closure_6, obj7), , ];
  let tmp11Result = null;
  if (null != guildBannerSource) {
    const obj8 = { style: tmp.subscriptionImageOverlay };
    tmp11Result = closure_11(closure_5, obj8);
  }
  items3[1] = tmp11Result;
  items3[2] = closure_11(guildBoostSlots(13030), { guild: stateFromStores, theme: stateFromStores1 });
  obj6.children = items3;
  const items4 = [closure_12(closure_5, obj6), closure_11(BoostedGuildInfo, { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length })];
  obj5.children = items4;
  const items5 = [closure_12(closure_5, obj5), ];
  const obj9 = { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length };
  const tmp2Result = SubscriptionPlaceholderPattern;
  items5[1] = closure_11(closure_5, { children: guildBoostSlots.map((guildBoostSlot, index) => closure_2_11(GuildBoostSlot, { guild: stateFromStores, guildBoostSlot, isLast: index === guildBoostSlots.length - 1 }, guildBoostSlot.id)) });
  obj4.children = items5;
  return closure_12(closure_5, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { inventory: { marginBottom: 32 }, header: { marginHorizontal: 16, marginBottom: 16 }, boostedGuild: { borderRadius: nativeDefault.radii.xs, marginBottom: 16 }, subscriptionBody: null, subscriptionImageView: null, subscriptionImage: null, subscriptionImageFallback: null, subscriptionImageOverlay: null, guildInfo: null, guildInfoIcon: null, guildInfoName: null, guildInfoRowBottom: null, guildInfoRowIcon: null, guildInfoSubscriptionCount: null, subscriptionSlot: null, subscriptionSlotInner: null, subscriptionSlotBorder: null, subscriptionSlotInfo: null, subscriptionSlotInfoTitle: null, subscriptionSlotInfoCooldown: null, unusedSlots: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, marginBottom: 16 };
obj2.subscriptionBody = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "100%", height: 112, overflow: "hidden", alignItems: "center", justifyContent: "center" };
obj2.subscriptionImageView = size;
obj2.subscriptionImage = { position: "absolute", width: "100%", height: "100%" };
obj2.subscriptionImageFallback = { opacity: 0.4 };
const size1 = { position: "absolute", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK, opacity: 0.4 };
obj2.subscriptionImageOverlay = size1;
obj2.guildInfo = { flexDirection: "row", padding: 16 };
obj2.guildInfoIcon = { marginRight: 8 };
let obj5 = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj5.marginBottom = 4;
obj2.guildInfoName = obj5;
obj2.guildInfoRowBottom = { flexDirection: "row", alignItems: "center" };
obj2.guildInfoRowIcon = { height: 12, width: 8, marginLeft: 2, marginRight: 8 };
obj2.guildInfoSubscriptionCount = { lineHeight: 16 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.subscriptionSlot = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
obj2.subscriptionSlotInner = { alignItems: "center", flexDirection: "row", paddingRight: 16, paddingVertical: 12 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
obj2.subscriptionSlotBorder = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj2.subscriptionSlotInfo = { flexShrink: 1, flexGrow: 1 };
obj2.subscriptionSlotInfoTitle = { lineHeight: 24 };
obj2.subscriptionSlotInfoCooldown = { lineHeight: 16 };
obj2.unusedSlots = { marginBottom: 32 };
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default function GuildBoostSlotsInventory() {
  const tmp = closure_14();
  const effect = noop.useEffect(() => {
    const subscriptions = actions_BillingActionCreatorsAll.fetchSubscriptions();
    const guildBoostSlots = valueResult(4728).fetchGuildBoostSlots();
  }, []);
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => boostSlots.boostSlots);
  const obj3 = _modDef12(stateFromStores1);
  const valueResult = _modDef12(stateFromStores1).groupBy((premiumGuildSubscription) => {
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
    let tmp10Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.inventory, children: null };
      let tmp12 = null;
      if (null != first) {
        tmp12 = null;
        if (first.length > 0) {
          const obj5 = { unusedSlots: first };
          tmp12 = closure_11(UnusedGuildBoostSlots, obj5);
        }
      }
      const items2 = [tmp12, ];
      let tmp10Result = null;
      if (found.length > 0) {
        const obj6 = { children: null };
        const obj7 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: null };
        const intl = tmp3(1115).intl;
        obj7.children = intl.string(tmp3(1115).t.gB9oQ7);
        const items3 = [closure_11(tmp3(4825).Text, obj7), found.map((guildId) => closure_2_11(BoostedGuild, { guildId, guildBoostSlots: valueResult[guildId] }, guildId))];
        obj6.children = items3;
        tmp10Result = closure_12(closure_13, obj6);
      }
      items2[1] = tmp10Result;
      obj4.children = items2;
      tmp10Result2 = closure_12(closure_5, obj4);
    }
  } else {
    tmp10Result2 = null;
  }
  return tmp10Result2;
};