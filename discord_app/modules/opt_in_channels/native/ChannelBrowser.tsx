// === Module 10013: keyExtractor ===

// Module 10013 (keyExtractor)
import FormCheckbox from "FormCheckbox";
import importAllResult from "optIntoAllChannelsForExistingMember";
import { View } from "UNSAFE_isDismissibleContentDismissed";
import guildHasCommunity from "guildHasCommunity";
import setIndex from "setIndex";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "noop";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let map1;
const require = arg1;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
let c4 = importAllResult;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { container: { flex: 1 }, header: null, categoryContainer: null, categoryTitle: null, channelTitle: null, selectAllContainer: null, selectAllCheckbox: null, newBadge: null, nuxCard: null, nuxCloseContainer: null, nuxHeader: null, nuxHeaderText: null, nuxBody: null };
obj = { marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16 };
obj[1] = obj;
createCacheKey = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md };
obj[2] = createCacheKey;
obj[3] = { marginBottom: 0 };
obj[4] = { flexDirection: "row", alignItems: "center" };
obj[5] = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexShrink: 0 };
let items = [{ scale: 0.75 }];
obj[6] = { marginRight: require("Themes").space.PX_4, transform: items };
obj[7] = { fontFamily: require("ME").Fonts.DISPLAY_EXTRABOLD };
let obj2 = { marginRight: require("Themes").space.PX_4, transform: items };
obj[8] = { position: "relative", padding: 0, marginTop: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, marginBottom: 0, borderRadius: require("Themes").radii.md, alignItems: "center" };
let obj3 = { position: "relative", padding: 0, marginTop: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, marginBottom: 0, borderRadius: require("Themes").radii.md, alignItems: "center" };
obj[9] = { position: "absolute", color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
let obj4 = { position: "absolute", color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj[10] = { width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", padding: 16, borderBottomLeftRadius: require("Themes").radii.lg, borderBottomRightRadius: require("Themes").radii.lg };
obj[11] = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj[12] = { textAlign: "center", marginBottom: 4 };
let closure_15 = createCacheKey.createStyles(obj);
let closure_17 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp = callback3();
  let obj = channel(589);
  const items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.isChannelOptedIn(channel.guild_id, channel.id));
  let obj1 = channel(3911);
  const checkboxA11yNative = obj1.useCheckboxA11yNative({ checked: stateFromStores });
  obj = {
    style: tmp.categoryContainer,
    onPress() {
      return onChannelClick(channel.guild_id, channel.id, channel.id);
    },
    accessibilityRole: null,
    accessibilityState: null,
    children: null
  };
  let str = "text";
  if ("null" !== channel.id) {
    str = checkboxA11yNative.accessibilityRole;
  }
  obj[2] = str;
  let accessibilityState;
  if ("null" !== channel.id) {
    accessibilityState = checkboxA11yNative.accessibilityState;
  }
  obj[3] = accessibilityState;
  obj = { style: tmp.categoryTitle, title: onChannelClick(4384)(channel), lineClamp: 1 };
  const items1 = [closure_12(channel(5558).TableRowGroupTitle, obj), ];
  let tmp10Result = null;
  if ("null" !== channel.id) {
    obj1 = { style: null, accessibilityRole: null, accessibilityState: null, children: null };
    obj1[0] = tmp.selectAllContainer;
    ({ accessibilityRole: obj5[1], accessibilityState: obj5[2] } = checkboxA11yNative);
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.selectAllCheckbox;
    const obj3 = { checked: null };
    obj3[0] = stateFromStores;
    obj2[1] = tmp8(tmp4(7641).FormCheckbox, obj3);
    const items2 = [tmp8(View, obj2), ];
    const obj4 = { variant: "text-xs/semibold", color: "interactive-text-default", children: null };
    const intl = tmp4(1236).intl;
    obj4[2] = intl.string(tmp4(1236).t.mSQwnW);
    items2[1] = tmp8(tmp4(4189).Text, obj4);
    obj1[3] = items2;
    tmp10Result = tmp10(View, obj1);
  }
  items1[1] = tmp10Result;
  obj[4] = closure_13(closure_14, { children: items1 });
  return closure_12(channel(4721).PressableOpacity, obj);
});
let closure_18 = importAllResult.memo((channel) => {
  let c3;
  let forceChecked;
  let isFirst;
  let isLast;
  let tmp3;
  channel = channel.channel;
  const guild = channel.guild;
  const onChannelClick = channel.onChannelClick;
  let callback;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = callback3();
  let obj = importAllResult;
  [tmp3, c3] = callback(importAllResult.useState(0), 2);
  let obj1 = channel(onChannelClick[15]);
  const items = [updateUserGuildSettingsInternal];
  let stateFromStores = obj1.useStateFromStores(items, () => outer1_10.isChannelOptedIn(channel.guild_id, channel.id));
  let obj2 = channel(onChannelClick[15]);
  const items1 = [guildHasCommunity];
  const items2 = [channel.id, guild];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    return outer1_6.shouldIndicateNewChannel(id, channel.id);
  }, items2);
  let obj3 = channel(onChannelClick[15]);
  const items3 = [updateUserGuildSettingsInternal];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = outer1_10.isChannelOptedIn(tmp.guild_id, tmp.parent_id);
    }
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  const tmp2 = callback(importAllResult.useState(0), 2);
  if (isGuildVocalResult) {
    isGuildVocalResult = 0 !== topic.length;
  }
  if (!isGuildVocalResult) {
    isGuildVocalResult = channel.isGuildVocal();
  }
  if (!isGuildVocalResult) {
    let tmp4Result = tmp4(tmp5[16]);
    topic = tmp4Result.getActiveAgoTimestamp(channel.id);
  }
  callback = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  tmp4Result = tmp4(tmp5[33]);
  const token = tmp4Result.useToken(tmp9(tmp5[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  channel(onChannelClick[33]);
  if (null == guild) {
    return null;
  } else {
    const channelIconWithGuild = tmp4(tmp5[34]).getChannelIconWithGuild(channel, guild);
    const tmp4Result2 = tmp4(tmp5[34]);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj = { isRulesChannel: null };
    obj[0] = rulesChannelId === channel.id;
    const channelIconComponent = tmp4(tmp5[34]).getChannelIconComponent(channel, obj);
    obj = { start: null, end: null, disabled: null, icon: null, label: null, subLabel: null, subLabelLineClamp: 1, onPress: null, checked: null };
    obj[0] = isFirst;
    obj[1] = isLast;
    obj[2] = stateFromStores2;
    obj1 = { source: null, IconComponent: null };
    obj1[0] = channelIconWithGuild;
    obj1[1] = channelIconComponent;
    obj[3] = callback2(tmp4(tmp5[36]).TableRowIcon, obj1);
    obj2 = { style: null, children: null };
    obj2[0] = tmp.channelTitle;
    let tmp21;
    if (stateFromStores1) {
      obj3 = { marginRight: null };
      obj3[0] = tmp3 + 8;
      tmp21 = obj3;
    }
    const obj4 = { lineClamp: 1, style: null, variant: null, color: null, children: null };
    const items4 = [tmp21];
    obj4[1] = items4;
    obj4[2] = token;
    obj4[3] = tmp15;
    obj4[4] = tmp10;
    const items5 = [callback2(tmp4(tmp5[28]).Text, obj4), ];
    if (stateFromStores1) {
      const obj5 = { style: null, onLayout: null, children: null };
      const obj6 = { marginLeft: null };
      obj6[0] = -tmp3;
      obj5[0] = obj6;
      obj5[1] = callback;
      const obj7 = { color: null, text: null, textStyle: null };
      obj7[0] = tmp4(tmp5[37]).BadgeColors.BRAND;
      const intl = tmp4(tmp5[24]).intl;
      obj7[1] = intl.string(tmp4(tmp5[24]).t.y2b7CA);
      obj7[2] = tmp.newBadge;
      obj5[2] = tmp18(tmp4(tmp5[37]).TextBadge, obj7);
      stateFromStores1 = tmp18(tmp20, obj5);
    }
    items5[1] = stateFromStores1;
    obj2[1] = items5;
    obj[4] = closure_13(View, obj2);
    let parseTopicResult = null;
    if (null != topic) {
      parseTopicResult = null;
      if (topic.length > 0) {
        const obj8 = { channelId: null, shouldCloseModal: true };
        obj8[0] = channel.id;
        parseTopicResult = tmp9(tmp5[38]).parseTopic(topic, true, obj8);
        const tmp9Result = tmp9(tmp5[38]);
      }
    }
    obj[5] = parseTopicResult;
    obj[7] = function onPress() {
      return onChannelClick(guild.id, channel.id, channel.parent_id);
    };
    if (!stateFromStores) {
      stateFromStores = stateFromStores2;
    }
    if (!stateFromStores) {
      stateFromStores = forceChecked;
    }
    obj[8] = stateFromStores;
    return callback2(tmp4(tmp5[35]).TableCheckboxRow, obj);
  }
  tmp10 = guild(onChannelClick[29])(channel);
});
let obj5 = { width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", padding: 16, borderBottomLeftRadius: require("Themes").radii.lg, borderBottomRightRadius: require("Themes").radii.lg };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  guildId = guildId.guildId;
  let importDefault;
  let onChannelClick;
  let stateFromStores;
  let filterCategoriesByQuery;
  let channelBrowserSections;
  let result1;
  let tmp = callback3();
  let tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  importDefault = tmp2[1];
  onChannelClick = importDefault(onChannelClick[14])(guildId).onChannelClick;
  let obj = guildId(onChannelClick[15]);
  let items = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuild(guildId));
  let obj1 = guildId(onChannelClick[15]);
  const items1 = [setIndex];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getCategories(guildId));
  let obj2 = guildId(onChannelClick[15]);
  const items2 = [comparator];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_8.getChannels(guildId));
  let obj3 = guildId(onChannelClick[16]);
  filterCategoriesByQuery = obj3.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, tmp2[0]);
  let obj4 = guildId(onChannelClick[17]);
  let result = obj4.useIsDismissibleContentDismissed_UNSAFE(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX);
  let obj5 = guildId(onChannelClick[16]);
  channelBrowserSections = obj5.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    const items = [];
    const item = channelBrowserSections.forEach((rowCount) => {
      if (rowCount.rowCount > 0) {
        let channel = outer1_4._categories[arg1].channel;
        let obj = { isSection: true, section: null, row: -1, channel: null, isLast: false };
        obj[1] = arg1;
        obj[3] = channel;
        items.push(obj);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          obj = { isSection: false, section: null, row: null, channel: null, isLast: null };
          obj[1] = arg1;
          obj[2] = num;
          let tmp3 = outer1_4[channel.id][num];
          let tmp4 = num;
          channel = undefined;
          let tmp = items;
          let tmp2 = outer1_4;
          if (tmp3 != null) {
            channel = tmp3.channel;
          }
          obj[3] = channel;
          obj[4] = num >= tmp2[channel.id].length - 1;
          let arr = items.push(obj);
        }
      }
    });
    return items;
  }, items3);
  let obj6 = guildId(onChannelClick[19]);
  result1 = obj6.hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    let obj = guildId(onChannelClick[17]);
    obj = { dismissAction: constants.DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, obj);
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const callback = filterCategoriesByQuery.useCallback((item) => {
    let id = item.item.channel;
    if (null == id) {
      return null;
    } else if (tmp) {
      let obj = { channel: null, onChannelClick: null };
      obj[0] = id;
      obj[1] = onChannelClick;
      id = id.id;
      let tmp4Result = tmp4(outer1_17, obj, id);
    } else {
      obj = { channel: null, guild: null, isFirst: null, isLast: null, forceChecked: null, onChannelClick: null };
      obj[0] = id;
      obj[1] = stateFromStores;
      obj[2] = 0 === tmp2;
      obj[3] = tmp3;
      obj[4] = result1;
      obj[5] = onChannelClick;
      tmp4Result = tmp4(outer1_18, obj, id.id);
    }
  }, items4);
  obj1 = {
    size: "md",
    onChange(arg0) {
      return callback(arg0);
    }
  };
  obj[1] = callback2(guildId(onChannelClick[20]).SearchField, obj1);
  const items5 = [callback2(channelBrowserSections, obj), ];
  let tmp16Result = null;
  if (!result) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.nuxCard;
    obj3 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
    obj3[0] = function onPress() {
      let obj = guildId(onChannelClick[17]);
      obj = { dismissAction: constants.DISMISS };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX, obj);
    };
    const intl = tmp5(tmp4[24]).intl;
    obj3[2] = intl.string(tmp5(tmp4[24]).t.cpT0Cq);
    obj3[3] = tmp.nuxCloseContainer;
    obj3[4] = tmp18(tmp5(tmp4[25]).CircleXIcon, {});
    const items6 = [tmp18(tmp5(tmp4[23]).PressableOpacity, obj3), , ];
    obj4 = { source: null };
    obj4[0] = tmp3(tmp4[27]);
    items6[1] = tmp18(tmp3(tmp4[26]), obj4);
    obj5 = { style: null, children: null };
    obj5[0] = tmp.nuxHeader;
    obj6 = { style: null, children: null };
    obj6[0] = tmp.nuxHeaderText;
    const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp5(tmp4[24]).intl;
    obj7[2] = intl2.string(tmp5(tmp4[24]).t.utqWEC);
    obj6[1] = tmp18(tmp5(tmp4[28]).Text, obj7);
    const items7 = [tmp18(tmp17, obj6), , ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", style: null, children: null };
    obj8[2] = tmp.nuxBody;
    const intl3 = tmp5(tmp4[24]).intl;
    obj8[3] = intl3.string(tmp5(tmp4[24]).t["+9etcM"]);
    items7[1] = tmp18(tmp5(tmp4[28]).Text, obj8);
    const obj9 = { variant: "text-sm/normal", color: "text-default", style: null, children: null };
    obj9[2] = tmp.nuxBody;
    const intl4 = tmp5(tmp4[24]).intl;
    obj9[3] = intl4.format(tmp5(tmp4[24]).t.Z0axjk, {});
    items7[2] = tmp18(tmp5(tmp4[28]).Text, obj9);
    obj5[1] = items7;
    items6[2] = tmp16(tmp17, obj5);
    obj2[1] = items6;
    tmp16Result = tmp16(tmp5(tmp4[22]).Card, obj2);
    const tmp3Result = tmp3(tmp4[26]);
  }
  const obj10 = { ListHeaderComponent: tmp16Result, accessibilityLabel: null, renderItem: null, data: null, contentContainerStyle: null, keyExtractor: null };
  const intl5 = tmp5(tmp4[24]).intl;
  obj10[1] = intl5.string(guildId(onChannelClick[24]).t.et6wav);
  obj10[2] = callback;
  obj10[3] = memo;
  obj10[4] = { paddingBottom: importDefault(onChannelClick[13])({ includeKeyboardHeight: true }).insets.bottom + importDefault(onChannelClick[12]).space.PX_16, paddingHorizontal: importDefault(onChannelClick[12]).space.PX_16 };
  obj10[5] = keyExtractor;
  items5[1] = callback2(guildId(onChannelClick[21]).FlashList, obj10);
  obj[1] = items5;
  return closure_13(channelBrowserSections, obj);
};