// discord_app/modules/opt_in_channels/native/ChannelBrowser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import GuildCategoryStore from "../../../stores/GuildCategoryStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

const require = fn;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let obj = {
  container: { flex: 1 },
  header: null,
  categoryContainer: null,
  categoryTitle: null,
  channelTitle: null,
  selectAllContainer: null,
  selectAllCheckbox: null,
  newBadge: null,
  nuxCard: null,
  nuxCloseContainer: null,
  nuxHeader: null,
  nuxHeaderText: null,
  nuxBody: null,
};
obj = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
obj.header = obj;
const createStyles = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
obj.categoryContainer = createStyles;
obj.categoryTitle = { marginBottom: 0 };
obj.channelTitle = { flexDirection: "row", alignItems: "center" };
obj.selectAllContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
};
let obj2 = { marginRight: nativeDefault.space.PX_4, transform: null };
let items = [{ scale: 0.75 }];
obj2.transform = items;
obj.selectAllCheckbox = obj2;
obj.newBadge = { fontFamily: fn(1074).Fonts.DISPLAY_EXTRABOLD };
obj.nuxCard = {
  position: "relative",
  padding: 0,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  marginBottom: 0,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
};
const rect = { position: "absolute", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj.nuxCloseContainer = rect;
let obj3 = {
  position: "relative",
  padding: 0,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  marginBottom: 0,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
};
obj.nuxHeader = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  padding: 16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
obj.nuxHeaderText = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj.nuxBody = { textAlign: "center", marginBottom: 4 };
let closure_15 = createStyles.createStyles(obj);
let closure_17 = noop.memo((channel) => {
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp = closure_15();
  let obj = channel(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
  );
  let obj1 = channel(4277);
  const checkboxA11yNative = obj1.useCheckboxA11yNative({ checked: stateFromStores });
  obj = {
    style: tmp.categoryContainer,
    onPress() {
      return onChannelClick(channel.guild_id, channel.id, channel.id);
    },
    accessibilityRole: null,
    accessibilityState: null,
    children: null,
  };
  let str = "text";
  if ("null" !== channel.id) {
    str = checkboxA11yNative.accessibilityRole;
  }
  obj.accessibilityRole = str;
  let accessibilityState;
  if ("null" !== channel.id) {
    accessibilityState = checkboxA11yNative.accessibilityState;
  }
  obj.accessibilityState = accessibilityState;
  obj = { style: tmp.categoryTitle, title: onChannelClick(4713)(channel), lineClamp: 1 };
  const items1 = [closure_12(channel(5687).TableRowGroupTitle, obj)];
  let tmp10Result = null;
  if ("null" !== channel.id) {
    obj1 = { style: tmp.selectAllContainer, accessibilityRole: null, accessibilityState: null, children: null };
    ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = checkboxA11yNative);
    const obj2 = { style: tmp.selectAllCheckbox, children: null };
    const obj3 = { checked: stateFromStores };
    obj2.children = tmp8(tmp4(5617).FormCheckbox, obj3);
    const items2 = [tmp8(View, obj2)];
    const obj4 = { variant: "text-xs/semibold", color: "interactive-text-default", children: null };
    const intl = tmp4(1114).intl;
    obj4.children = intl.string(tmp4(1114).t.mSQwnW);
    items2[1] = tmp8(tmp4(4556).Text, obj4);
    obj1.children = items2;
    tmp10Result = tmp10(View, obj1);
  }
  items1[1] = tmp10Result;
  obj.children = closure_13(closure_14, { children: items1 });
  return closure_12(channel(5123).PressableOpacity, obj);
});
let closure_18 = noop.memo((channel) => {
  channel = channel.channel;
  const guild = channel.guild;
  const onChannelClick = channel.onChannelClick;
  _slicedToArray = undefined;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = closure_15();
  let obj = noop;
  [tmp3, c3] = _slicedToArray(noop.useState(0), 2);
  let obj1 = channel(onChannelClick[15]);
  const items = [UserGuildSettingsStore];
  let stateFromStores = obj1.useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
  );
  let obj2 = channel(onChannelClick[15]);
  const items1 = [NewChannelsStore];
  const items2 = [channel.id, guild];
  let stateFromStores1 = obj2.useStateFromStores(
    items1,
    () => {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      return NewChannelsStore.shouldIndicateNewChannel(id, channel.id);
    },
    items2,
  );
  let obj3 = channel(onChannelClick[15]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = UserGuildSettingsStore.isChannelOptedIn(tmp.guild_id, tmp.parent_id);
    }
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  const tmp2 = _slicedToArray(noop.useState(0), 2);
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
  const callback = obj.useCallback((nativeEvent) => {
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
    obj = { isRulesChannel: rulesChannelId === channel.id };
    const channelIconComponent = tmp4(tmp5[34]).getChannelIconComponent(channel, obj);
    obj = {
      start: isFirst,
      end: isLast,
      disabled: stateFromStores2,
      icon: null,
      label: null,
      subLabel: null,
      subLabelLineClamp: 1,
      onPress: null,
      checked: null,
    };
    obj1 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj.icon = closure_12(tmp4(tmp5[36]).TableRowIcon, obj1);
    obj2 = { style: tmp.channelTitle, children: null };
    let tmp21;
    if (stateFromStores1) {
      obj3 = { marginRight: tmp3 + 8 };
      tmp21 = obj3;
    }
    const obj4 = { lineClamp: 1, style: null, variant: null, color: null, children: null };
    const items4 = [tmp21];
    obj4.style = items4;
    obj4.variant = token;
    obj4.color = tmp15;
    obj4.children = tmp10;
    const items5 = [closure_12(tmp4(tmp5[28]).Text, obj4)];
    if (stateFromStores1) {
      const obj5 = { style: null, onLayout: null, children: null };
      const obj6 = { marginLeft: -tmp3 };
      obj5.style = obj6;
      obj5.onLayout = callback;
      const obj7 = { color: tmp4(tmp5[37]).BadgeColors.BRAND, text: null, textStyle: null };
      const intl = tmp4(tmp5[24]).intl;
      obj7.text = intl.string(tmp4(tmp5[24]).t.y2b7CA);
      obj7.textStyle = tmp.newBadge;
      obj5.children = tmp18(tmp4(tmp5[37]).TextBadge, obj7);
      stateFromStores1 = tmp18(tmp20, obj5);
    }
    items5[1] = stateFromStores1;
    obj2.children = items5;
    obj.label = closure_13(View, obj2);
    let parseTopicResult = null;
    if (null != topic) {
      parseTopicResult = null;
      if (topic.length > 0) {
        const obj8 = { channelId: channel.id, shouldCloseModal: true };
        parseTopicResult = tmp9(tmp5[38]).parseTopic(topic, true, obj8);
        const tmp9Result = tmp9(tmp5[38]);
      }
    }
    obj.subLabel = parseTopicResult;
    obj.onPress = function onPress() {
      return onChannelClick(guild.id, channel.id, channel.parent_id);
    };
    if (!stateFromStores) {
      stateFromStores = stateFromStores2;
    }
    if (!stateFromStores) {
      stateFromStores = forceChecked;
    }
    obj.checked = stateFromStores;
    return closure_12(tmp4(tmp5[35]).TableCheckboxRow, obj);
  }
  tmp10 = guild(onChannelClick[29])(channel);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  guildId = guildId.guildId;
  let onChannelClick;
  let stateFromStores;
  let filterCategoriesByQuery;
  let tmp = closure_15();
  let tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  importDefault = tmp2[1];
  onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
  let obj = guildId(onChannelClick[15]);
  let items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = guildId(onChannelClick[15]);
  const items1 = [GuildCategoryStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => GuildCategoryStore.getCategories(guildId));
  let obj2 = guildId(onChannelClick[15]);
  const items2 = [GuildChannelStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => GuildChannelStore.getChannels(guildId));
  let obj3 = guildId(onChannelClick[16]);
  filterCategoriesByQuery = obj3.useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, tmp2[0]);
  let obj4 = guildId(onChannelClick[17]);
  let result = obj4.useIsDismissibleContentDismissed_UNSAFE(
    guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX,
  );
  let obj5 = guildId(onChannelClick[16]);
  const channelBrowserSections = obj5.useChannelBrowserSections(guildId, filterCategoriesByQuery, 64);
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    const items = [];
    const item = channelBrowserSections.forEach((rowCount, section) => {
      if (rowCount.rowCount > 0) {
        let channel = filterCategoriesByQuery._categories[section].channel;
        let obj = { isSection: true, section, row: -1, channel, isLast: false };
        items.push(obj);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          obj = { isSection: false, section, row: num, channel: null, isLast: null };
          let tmp3 = filterCategoriesByQuery[channel.id][num];
          channel = undefined;
          let tmp2 = filterCategoriesByQuery;
          if (tmp3 != null) {
            channel = tmp3.channel;
          }
          obj.channel = channel;
          obj.isLast = num >= tmp2[channel.id].length - 1;
          let arr = items.push(obj);
        }
      }
    });
    return items;
  }, items3);
  let obj6 = guildId(onChannelClick[19]);
  const result1 = obj6.hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    guildId(onChannelClick[17]);
    const obj = { dismissAction: constants.DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(
      guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
      obj,
    );
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const callback = filterCategoriesByQuery.useCallback((item) => {
    let id = item.item.channel;
    if (null == id) {
      return null;
    } else if (tmp) {
      let obj = { channel: id, onChannelClick };
      id = id.id;
      let tmp4Result = tmp4(closure_17, obj, id);
    } else {
      obj = {
        channel: id,
        guild: stateFromStores,
        isFirst: 0 === tmp2,
        isLast: tmp3,
        forceChecked: result1,
        onChannelClick,
      };
      tmp4Result = tmp4(closure_18, obj, id.id);
    }
  }, items4);
  obj1 = {
    size: "md",
    onChange(arg0) {
      return closure_1(arg0);
    },
  };
  obj.children = closure_12(guildId(onChannelClick[20]).SearchField, obj1);
  const items5 = [closure_12(channelBrowserSections, obj)];
  let tmp16Result = null;
  if (!result) {
    obj2 = { style: tmp.nuxCard, children: null };
    obj3 = {
      onPress() {
        guildId(onChannelClick[17]);
        const obj = { dismissAction: constants.DISMISS };
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(
          guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX,
          obj,
        );
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null,
    };
    const intl = tmp5(tmp4[24]).intl;
    obj3.accessibilityLabel = intl.string(tmp5(tmp4[24]).t.cpT0Cq);
    obj3.style = tmp.nuxCloseContainer;
    obj3.children = tmp18(tmp5(tmp4[25]).CircleXIcon, {});
    const items6 = [tmp18(tmp5(tmp4[23]).PressableOpacity, obj3), ,];
    obj4 = { source: tmp3(tmp4[27]) };
    items6[1] = tmp18(tmp3(tmp4[26]), obj4);
    obj5 = { style: tmp.nuxHeader, children: null };
    obj6 = { style: tmp.nuxHeaderText, children: null };
    const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp5(tmp4[24]).intl;
    obj7.children = intl2.string(tmp5(tmp4[24]).t.utqWEC);
    obj6.children = tmp18(tmp5(tmp4[28]).Text, obj7);
    const items7 = [tmp18(tmp17, obj6), ,];
    const obj8 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
    const intl3 = tmp5(tmp4[24]).intl;
    obj8.children = intl3.string(tmp5(tmp4[24]).t["+9etcM"]);
    items7[1] = tmp18(tmp5(tmp4[28]).Text, obj8);
    const obj9 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
    const intl4 = tmp5(tmp4[24]).intl;
    obj9.children = intl4.format(tmp5(tmp4[24]).t.Z0axjk, {});
    items7[2] = tmp18(tmp5(tmp4[28]).Text, obj9);
    obj5.children = items7;
    items6[2] = tmp16(tmp17, obj5);
    obj2.children = items6;
    tmp16Result = tmp16(tmp5(tmp4[22]).Card, obj2);
    const tmp3Result = tmp3(tmp4[26]);
  }
  const obj10 = {
    ListHeaderComponent: tmp16Result,
    accessibilityLabel: null,
    renderItem: null,
    data: null,
    contentContainerStyle: null,
    keyExtractor: null,
  };
  const intl5 = tmp5(tmp4[24]).intl;
  obj10.accessibilityLabel = intl5.string(guildId(onChannelClick[24]).t.et6wav);
  obj10.renderItem = callback;
  obj10.data = memo;
  obj10.contentContainerStyle = {
    paddingBottom:
      require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom +
      require("native").space.PX_16,
    paddingHorizontal: require("native").space.PX_16,
  };
  obj10.keyExtractor = keyExtractor;
  items5[1] = closure_12(guildId(onChannelClick[21]).FlashList, obj10);
  obj.children = items5;
  return closure_13(channelBrowserSections, obj);
}
