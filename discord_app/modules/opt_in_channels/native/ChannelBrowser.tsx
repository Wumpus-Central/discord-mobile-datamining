// discord_app/modules/opt_in_channels/native/ChannelBrowser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import GuildCategoryStore from "../../../stores/GuildCategoryStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

const require = fn;
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
const View = fn(17).View;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4827);
let obj = {
  container: { flex: 1 },
  header: { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 },
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
let obj3 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
obj.categoryContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
obj.categoryTitle = { marginBottom: 0 };
obj.channelTitle = { flexDirection: "row", alignItems: "center" };
obj.selectAllContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
};
let obj5 = { marginRight: nativeDefault.space.PX_4, transform: null };
let items = [{ scale: 0.75 }];
obj5.transform = items;
obj.selectAllCheckbox = obj5;
obj.newBadge = { fontFamily: fn(1074).Fonts.DISPLAY_EXTRABOLD };
let obj4 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
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
let obj6 = {
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
  const tmp3 = onChannelClick(4980)(channel);
  const items = [UserGuildSettingsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
  );
  const obj = channel(504);
  const checkboxA11yNative = channel(4541).useCheckboxA11yNative({ checked: stateFromStores });
  const obj3 = {
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
  obj3.accessibilityRole = str;
  let accessibilityState;
  if ("null" !== channel.id) {
    accessibilityState = checkboxA11yNative.accessibilityState;
  }
  obj3.accessibilityState = accessibilityState;
  const items1 = [
    closure_12(channel(5990).TableRowGroupTitle, { style: tmp.categoryTitle, title: tmp3, lineClamp: 1 }),
  ];
  let tmp10Result = null;
  if ("null" !== channel.id) {
    const obj5 = { style: tmp.selectAllContainer, children: null };
    const obj6 = { style: tmp.selectAllCheckbox, children: null };
    const obj7 = { checked: stateFromStores };
    obj6.children = closure_12(tmp4(5920).FormCheckbox, obj7);
    const items2 = [closure_12(View, obj6)];
    const obj8 = { variant: "text-xs/semibold", color: "interactive-text-default", children: null };
    const intl = tmp4(1115).intl;
    obj8.children = intl.string(tmp4(1115).t.mSQwnW);
    items2[1] = closure_12(tmp4(4823).Text, obj8);
    obj5.children = items2;
    tmp10Result = closure_13(View, obj5);
  }
  items1[1] = tmp10Result;
  obj3.children = closure_13(closure_14, { children: items1 });
  return closure_12(channel(5425).PressableOpacity, obj3);
});
let closure_18 = noop.memo((channel) => {
  channel = channel.channel;
  const guild = channel.guild;
  const onChannelClick = channel.onChannelClick;
  _slicedToArray = undefined;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = closure_15();
  [tmp3, c3] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const items = [UserGuildSettingsStore];
  let stateFromStores = channel(onChannelClick[15]).useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
  );
  const obj2 = channel(onChannelClick[15]);
  const items1 = [NewChannelsStore];
  const items2 = [channel.id, guild];
  let stateFromStores1 = channel(onChannelClick[15]).useStateFromStores(
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
  const obj3 = channel(onChannelClick[15]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores2 = channel(onChannelClick[15]).useStateFromStores(items3, () => {
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
    }
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  const obj4 = channel(onChannelClick[15]);
  if (isGuildVocalResult) {
    isGuildVocalResult = 0 !== topic.length;
  }
  if (!isGuildVocalResult) {
    isGuildVocalResult = channel.isGuildVocal();
  }
  if (!isGuildVocalResult) {
    topic = tmp4(tmp5[16]).getActiveAgoTimestamp(channel.id);
    const tmp4Result = tmp4(tmp5[16]);
  }
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp10 = guild(onChannelClick[29])(channel);
  const token = channel(onChannelClick[33]).useToken(tmp9(tmp5[12]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  channel(onChannelClick[33]);
  if (null == guild) {
    return null;
  } else {
    const channelIconWithGuild = tmp4(tmp5[34]).getChannelIconWithGuild(channel, guild);
    const tmp4Result7 = tmp4(tmp5[34]);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj5 = { isRulesChannel: rulesChannelId === channel.id };
    const channelIconComponent = tmp4(tmp5[34]).getChannelIconComponent(channel, obj5);
    const obj6 = {
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
    const obj7 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj6.icon = closure_12(tmp4(tmp5[36]).TableRowIcon, obj7);
    const obj8 = { style: tmp.channelTitle, children: null };
    let tmp21;
    if (stateFromStores1) {
      const obj9 = { marginRight: tmp3 + 8 };
      tmp21 = obj9;
    }
    const obj10 = { lineClamp: 1, style: null, variant: null, color: null, children: null };
    const items4 = [tmp21];
    obj10.style = items4;
    obj10.variant = token;
    obj10.color = tmp15;
    obj10.children = tmp10;
    const items5 = [closure_12(tmp4(tmp5[28]).Text, obj10)];
    if (stateFromStores1) {
      const obj11 = { style: null, onLayout: null, children: null };
      const obj12 = { marginLeft: -tmp3 };
      obj11.style = obj12;
      obj11.onLayout = callback;
      const obj13 = { color: tmp4(tmp5[37]).BadgeColors.BRAND, text: null, textStyle: null };
      const intl = tmp4(tmp5[24]).intl;
      obj13.text = intl.string(tmp4(tmp5[24]).t.y2b7CA);
      obj13.textStyle = tmp.newBadge;
      obj11.children = closure_12(tmp4(tmp5[37]).TextBadge, obj13);
      stateFromStores1 = closure_12(View, obj11);
    }
    items5[1] = stateFromStores1;
    obj8.children = items5;
    obj6.label = closure_13(View, obj8);
    let parseTopicResult = null;
    if (null != topic) {
      parseTopicResult = null;
      if (topic.length > 0) {
        const obj14 = { channelId: channel.id, shouldCloseModal: true };
        parseTopicResult = tmp9(tmp5[38]).parseTopic(topic, true, obj14);
        const tmp9Result = tmp9(tmp5[38]);
      }
    }
    obj6.subLabel = parseTopicResult;
    obj6.onPress = function onPress() {
      return onChannelClick(guild.id, channel.id, channel.parent_id);
    };
    if (!stateFromStores) {
      stateFromStores = stateFromStores2;
    }
    if (!stateFromStores) {
      stateFromStores = forceChecked;
    }
    obj6.checked = stateFromStores;
    return closure_12(tmp4(tmp5[35]).TableCheckboxRow, obj6);
  }
  const tmp4Result5 = channel(onChannelClick[33]);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  guildId = guildId.guildId;
  let onChannelClick;
  let stateFromStores;
  let filterCategoriesByQuery;
  const tmp = closure_15();
  const tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  importDefault = tmp2[1];
  onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
  let items = [GuildStore];
  stateFromStores = guildId(onChannelClick[15]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(onChannelClick[15]);
  const items1 = [GuildCategoryStore];
  const stateFromStores1 = guildId(onChannelClick[15]).useStateFromStores(items1, () =>
    GuildCategoryStore.getCategories(guildId),
  );
  let obj2 = guildId(onChannelClick[15]);
  const items2 = [GuildChannelStore];
  const stateFromStores2 = guildId(onChannelClick[15]).useStateFromStores(items2, () =>
    GuildChannelStore.getChannels(guildId),
  );
  const obj3 = guildId(onChannelClick[15]);
  filterCategoriesByQuery = guildId(onChannelClick[16]).useFilterCategoriesByQuery(
    guildId,
    stateFromStores1,
    stateFromStores2,
    tmp2[0],
  );
  const obj4 = guildId(onChannelClick[16]);
  let result = guildId(onChannelClick[17]).useIsDismissibleContentDismissed_UNSAFE(
    guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX,
  );
  const obj5 = guildId(onChannelClick[17]);
  const channelBrowserSections = guildId(onChannelClick[16]).useChannelBrowserSections(
    guildId,
    filterCategoriesByQuery,
    64,
  );
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    const items = [];
    const item = channelBrowserSections.forEach((rowCount, section) => {
      if (rowCount.rowCount > 0) {
        const channel = filterCategoriesByQuery._categories[section].channel;
        const obj2 = { isSection: true, section, row: -1, channel, isLast: false };
        items.push(obj2);
        for (let num = 0; num < rowCount.rowCount; num = num + 1) {
          let obj = { isSection: false, section, row: num, channel: null, isLast: null };
          let tmp3 = filterCategoriesByQuery[channel.id][num];
          let channel1;
          if (tmp3 != null) {
            channel1 = tmp3.channel;
          }
          obj.channel = channel1;
          obj.isLast = num >= filterCategoriesByQuery[channel.id].length - 1;
          let arr2 = items.push(obj);
        }
      }
    });
    return items;
  }, items3);
  const obj6 = guildId(onChannelClick[16]);
  const result1 = guildId(onChannelClick[19]).hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    const result = guildId(onChannelClick[17]).UNSAFE_markDismissibleContentAsDismissed(
      guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
      { dismissAction: constants.DISMISS },
    );
  });
  const items4 = [stateFromStores, result1, onChannelClick];
  const obj8 = { style: tmp.container, children: null };
  const obj9 = { style: tmp.header, children: null };
  const callback = filterCategoriesByQuery.useCallback((item) => {
    let id = item.item.channel;
    if (null == id) {
      return null;
    } else if (tmp) {
      const obj2 = { channel: id, onChannelClick };
      id = id.id;
      let tmp4Result = closure_2_12(closure_17, obj2, id);
    } else {
      const obj = {
        channel: id,
        guild: stateFromStores,
        isFirst: 0 === tmp2,
        isLast: tmp3,
        forceChecked: result1,
        onChannelClick,
      };
      tmp4Result = closure_2_12(closure_18, obj, id.id);
    }
  }, items4);
  obj9.children = closure_12(guildId(onChannelClick[20]).SearchField, {
    size: "md",
    onChange(arg0) {
      return closure_1(arg0);
    },
  });
  const items5 = [closure_12(channelBrowserSections, obj9)];
  let tmp16Result = null;
  if (!result) {
    const obj11 = { style: tmp.nuxCard, children: null };
    const obj12 = {
      onPress() {
        const result = guildId(onChannelClick[17]).UNSAFE_markDismissibleContentAsDismissed(
          guildId(onChannelClick[18]).DismissibleContent.CHANNEL_BROWSER_NUX,
          { dismissAction: constants.DISMISS },
        );
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null,
    };
    const intl = tmp5(tmp4[24]).intl;
    obj12.accessibilityLabel = intl.string(tmp5(tmp4[24]).t.cpT0Cq);
    obj12.style = tmp.nuxCloseContainer;
    obj12.children = closure_12(tmp5(tmp4[25]).CircleXIcon, {});
    const items6 = [closure_12(tmp5(tmp4[23]).PressableOpacity, obj12), ,];
    const obj13 = { source: tmp3(tmp4[27]) };
    items6[1] = closure_12(tmp3(tmp4[26]), obj13);
    const obj14 = { style: tmp.nuxHeader, children: null };
    const obj15 = { style: tmp.nuxHeaderText, children: null };
    const obj16 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp5(tmp4[24]).intl;
    obj16.children = intl2.string(tmp5(tmp4[24]).t.utqWEC);
    obj15.children = closure_12(tmp5(tmp4[28]).Text, obj16);
    const items7 = [closure_12(tmp17, obj15), ,];
    const obj17 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
    const intl3 = tmp5(tmp4[24]).intl;
    obj17.children = intl3.string(tmp5(tmp4[24]).t["+9etcM"]);
    items7[1] = closure_12(tmp5(tmp4[28]).Text, obj17);
    const obj18 = { variant: "text-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
    const intl4 = tmp5(tmp4[24]).intl;
    obj18.children = intl4.format(tmp5(tmp4[24]).t.Z0axjk, {});
    items7[2] = closure_12(tmp5(tmp4[28]).Text, obj18);
    obj14.children = items7;
    items6[2] = closure_13(tmp17, obj14);
    obj11.children = items6;
    tmp16Result = closure_13(tmp5(tmp4[22]).Card, obj11);
    const tmp3Result = tmp3(tmp4[26]);
  }
  const obj19 = {
    ListHeaderComponent: tmp16Result,
    accessibilityLabel: null,
    renderItem: null,
    data: null,
    contentContainerStyle: null,
    keyExtractor: null,
  };
  const intl5 = tmp5(tmp4[24]).intl;
  obj19.accessibilityLabel = intl5.string(guildId(onChannelClick[24]).t.et6wav);
  obj19.renderItem = callback;
  obj19.data = memo;
  const obj10 = {
    size: "md",
    onChange(arg0) {
      return closure_1(arg0);
    },
  };
  const obj7 = guildId(onChannelClick[19]);
  obj19.contentContainerStyle = {
    paddingBottom:
      require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom +
      require("native").space.PX_16,
    paddingHorizontal: require("native").space.PX_16,
  };
  obj19.keyExtractor = keyExtractor;
  items5[1] = closure_12(guildId(onChannelClick[21]).FlashList, obj19);
  obj8.children = items5;
  return closure_13(channelBrowserSections, obj8);
}
