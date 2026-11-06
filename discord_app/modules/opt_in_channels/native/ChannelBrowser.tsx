// discord_app/modules/opt_in_channels/native/ChannelBrowser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MarkupInlineChannelMentionRules from "../../markup/native/MarkupInlineChannelMentionRules.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NewChannelsStore from "../../recent_channels/NewChannelsStore.tsx";
import GuildCategoryStore from "../../../stores/GuildCategoryStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import MarkupUtils from "../../markup/MarkupUtils.tsx";

const require = globalThis.__r;

require = fn;
function ChannelTopicMention(children) {
  const tmp = closure_17();
  return application_id(Text_Text.Text, {
    variant: bodyxsmedium,
    color: "mention-foreground",
    style: closure_17().channelMention,
    children: children.children,
  });
}
function keyExtractor(section) {
  return "" + section.section + "-" + section.row;
}
const View = fn(17).View;
const ContentDismissActionType = fn(5016).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let c15 = "body-xs/medium";
let PlatformUtils = fn(1377);
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  let obj = {};
  let merged = Object.assign(MarkupUtils.topicRules);
  let obj3 = {};
  const merged1 = Object.assign(MarkupUtils.topicRules.channelMention);
  obj3.react = function react(inContent, fn, key) {
    const obj = { children: null };
    const obj3 = {};
    const merged = Object.assign(key);
    obj3.textColor = "mention-foreground";
    obj.children = MarkupInlineChannelMentionRules.inlineChannelMentionReact(inContent, fn, obj3);
    return application_id(ChannelTopicMention, obj, key.key);
  };
  obj.channelMention = obj3;
  let obj4 = { react: fn(8663).smartOutput };
  obj.guild = obj4;
  let obj5 = { react: fn(11205).inlineChannelReact };
  obj.channel = obj5;
  let parseTopic = MarkupUtils.reactParserFor(obj);
} else {
  parseTopic = MarkupUtils.parseTopic;
}
const createStyles = fn(5170);
let obj6 = {
  channelMention: { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND },
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
let obj7 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
obj6.header = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
let obj9 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16 };
obj6.categoryContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
obj6.categoryTitle = { marginBottom: 0 };
obj6.channelTitle = { flexDirection: "row", alignItems: "center" };
obj6.selectAllContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
};
let obj11 = { marginRight: nativeDefault.space.PX_4, transform: null };
let items = [{ scale: 0.75 }];
obj11.transform = items;
obj6.selectAllCheckbox = obj11;
obj6.newBadge = { fontFamily: fn(1072).Fonts.DISPLAY_EXTRABOLD };
let obj10 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
};
obj6.nuxCard = {
  position: "relative",
  padding: 0,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  marginBottom: 0,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
};
const rect = { position: "absolute", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, top: 16, right: 16 };
obj6.nuxCloseContainer = rect;
let obj12 = {
  position: "relative",
  padding: 0,
  marginTop: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  marginBottom: 0,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
};
obj6.nuxHeader = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  padding: 16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
obj6.nuxHeaderText = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
obj6.nuxBody = { textAlign: "center", marginBottom: 4 };
let closure_17 = createStyles.createStyles(obj6);
let closure_20 = noop.memo(function CategoryRow(channel) {
  channel = channel.channel;
  const onChannelClick = channel.onChannelClick;
  const tmp = closure_17();
  const tmp3 = onChannelClick(5806)(channel);
  items = [UserGuildSettingsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
  );
  const obj = channel(504);
  const checkboxA11yNative = channel(5230).useCheckboxA11yNative({ checked: stateFromStores });
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
    closure_12(channel(7151).TableRowGroupTitle, { style: tmp.categoryTitle, title: tmp3, lineClamp: 1 }),
  ];
  let tmp10Result = null;
  if ("null" !== channel.id) {
    const obj5 = { style: tmp.selectAllContainer, children: null };
    const obj6 = { style: tmp.selectAllCheckbox, children: null };
    const obj7 = { checked: stateFromStores };
    obj6.children = closure_12(tmp4(7080).FormCheckbox, obj7);
    const items2 = [closure_12(View, obj6)];
    const obj8 = { variant: "body-xs/semibold", color: "interactive-text-default", children: null };
    const intl = tmp4(1113).intl;
    obj8.children = intl.string(tmp4(1113).t.mSQwnW);
    items2[1] = closure_12(tmp4(5781).Text, obj8);
    obj5.children = items2;
    tmp10Result = closure_13(View, obj5);
  }
  items1[1] = tmp10Result;
  obj3.children = closure_13(closure_14, { children: items1 });
  return closure_12(channel(7068).PressableOpacity, obj3);
});
let closure_21 = noop.memo(function ChannelRow(channel) {
  channel = channel.channel;
  guild = channel.guild;
  const onChannelClick = channel.onChannelClick;
  _slicedToArray = undefined;
  ({ isFirst, isLast, forceChecked } = channel);
  const tmp = closure_17();
  [tmp3, c3] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  items = [UserGuildSettingsStore];
  let stateFromStores = channel(onChannelClick[20]).useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.id),
  );
  const obj2 = channel(onChannelClick[20]);
  const items1 = [NewChannelsStore];
  const items2 = [channel.id, guild];
  let stateFromStores1 = channel(onChannelClick[20]).useStateFromStores(
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
  const obj3 = channel(onChannelClick[20]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores2 = channel(onChannelClick[20]).useStateFromStores(items3, () => {
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = UserGuildSettingsStore.isChannelOptedIn(channel.guild_id, channel.parent_id);
    }
    return isChannelOptedInResult;
  });
  let topic = channel.topic;
  let isGuildVocalResult = null != topic;
  const obj4 = channel(onChannelClick[20]);
  const tmp9 = guild;
  if (isGuildVocalResult) {
    isGuildVocalResult = 0 !== topic.length;
  }
  if (!isGuildVocalResult) {
    isGuildVocalResult = channel.isGuildVocal();
  }
  if (!isGuildVocalResult) {
    topic = tmp4(tmp5[21]).getActiveAgoTimestamp(channel.id);
    const tmp4Result = tmp4(tmp5[21]);
  }
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp10 = guild(onChannelClick[33])(channel);
  const token = channel(onChannelClick[37]).useToken(tmp9(tmp5[16]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  channel(onChannelClick[37]);
  if (null == guild) {
    return null;
  } else {
    const channelIconWithGuild = tmp4(tmp5[38]).getChannelIconWithGuild(channel, guild);
    const tmp4Result7 = tmp4(tmp5[38]);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    const obj5 = { isRulesChannel: rulesChannelId === channel.id };
    const channelIconComponent = tmp4(tmp5[38]).getChannelIconComponent(channel, obj5);
    const obj6 = {
      start: isFirst,
      end: isLast,
      disabled: stateFromStores2,
      icon: null,
      label: null,
      subLabel: null,
      onPress: null,
      checked: null,
    };
    const obj7 = { source: channelIconWithGuild, IconComponent: channelIconComponent };
    obj6.icon = closure_12(tmp4(tmp5[40]).TableRowIcon, obj7);
    const obj8 = { style: tmp.channelTitle, children: null };
    let tmp21;
    if (stateFromStores1) {
      const obj9 = { marginRight: tmp3 + 8 };
      tmp21 = obj9;
    }
    const obj10 = { lineClamp: 1, style: tmp21, variant: token, color: tmp15, children: tmp10 };
    const items4 = [closure_12(tmp4(tmp5[17]).Text, obj10)];
    if (stateFromStores1) {
      const obj11 = { style: null, onLayout: null, children: null };
      const obj12 = { marginLeft: -tmp3 };
      obj11.style = obj12;
      obj11.onLayout = callback;
      const obj13 = { color: tmp4(tmp5[41]).BadgeColors.BRAND, text: null, textStyle: null };
      const intl = tmp4(tmp5[29]).intl;
      obj13.text = intl.string(tmp4(tmp5[29]).t.y2b7CA);
      obj13.textStyle = tmp.newBadge;
      obj11.children = closure_12(tmp4(tmp5[41]).TextBadge, obj13);
      stateFromStores1 = closure_12(View, obj11);
    }
    items4[1] = stateFromStores1;
    obj8.children = items4;
    obj6.label = closure_13(View, obj8);
    let tmp18Result = null;
    if (null != topic) {
      tmp18Result = null;
      if (topic.length > 0) {
        const obj14 = {
          variant: bodyxsmedium,
          color: "text-subtle",
          lineClamp: 1,
          includeFontPadding: true,
          children: null,
        };
        const obj15 = {
          allowLinks: true,
          allowGameMentions: true,
          channelId: channel.id,
          shouldCloseModal: true,
          textVariant: bodyxsmedium,
          linkVariant: bodyxsmedium,
          textColor: "text-subtle",
        };
        obj14.children = parseTopic(topic, true, obj15);
        tmp18Result = closure_12(tmp4(tmp5[17]).Text, obj14);
      }
    }
    obj6.subLabel = tmp18Result;
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
    return closure_12(tmp4(tmp5[39]).TableCheckboxRow, obj6);
  }
  const tmp4Result5 = channel(onChannelClick[37]);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/native/ChannelBrowser.tsx");

export default function ChannelBrowser(guildId) {
  guildId = guildId.guildId;
  let onChannelClick;
  let stateFromStores;
  let filterCategoriesByQuery;
  const tmp = closure_17();
  const tmp2 = stateFromStores(filterCategoriesByQuery.useState(""), 2);
  importDefault = tmp2[1];
  onChannelClick = require("useBatchUpdateChannelSettings")(guildId).onChannelClick;
  items = [GuildStore];
  stateFromStores = guildId(onChannelClick[20]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(onChannelClick[20]);
  const items1 = [GuildCategoryStore];
  const stateFromStores1 = guildId(onChannelClick[20]).useStateFromStores(items1, () =>
    GuildCategoryStore.getCategories(guildId),
  );
  let obj2 = guildId(onChannelClick[20]);
  const items2 = [GuildChannelStore];
  const stateFromStores2 = guildId(onChannelClick[20]).useStateFromStores(items2, () =>
    GuildChannelStore.getChannels(guildId),
  );
  const obj3 = guildId(onChannelClick[20]);
  filterCategoriesByQuery = guildId(onChannelClick[21]).useFilterCategoriesByQuery(
    guildId,
    stateFromStores1,
    stateFromStores2,
    tmp2[0],
  );
  const obj4 = guildId(onChannelClick[21]);
  let result = guildId(onChannelClick[22]).useIsDismissibleContentDismissed_UNSAFE(
    guildId(onChannelClick[23]).DismissibleContent.CHANNEL_BROWSER_NUX,
  );
  const obj5 = guildId(onChannelClick[22]);
  const channelBrowserSections = guildId(onChannelClick[21]).useChannelBrowserSections(
    guildId,
    filterCategoriesByQuery,
    64,
  );
  const items3 = [filterCategoriesByQuery, channelBrowserSections];
  const memo = filterCategoriesByQuery.useMemo(() => {
    items = [];
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
  const obj6 = guildId(onChannelClick[21]);
  const result1 = guildId(onChannelClick[24]).hasNotSetUpChannelOptIn(guildId);
  const effect = filterCategoriesByQuery.useEffect(() => {
    const result = guildId(onChannelClick[22]).UNSAFE_markDismissibleContentAsDismissed(
      guildId(onChannelClick[23]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
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
      let tmp4Result = application_id(closure_20, obj2, id);
    } else {
      const obj = {
        channel: id,
        guild: stateFromStores,
        isFirst: 0 === tmp2,
        isLast: tmp3,
        forceChecked: result1,
        onChannelClick,
      };
      tmp4Result = application_id(closure_21, obj, id.id);
    }
  }, items4);
  obj9.children = closure_12(guildId(onChannelClick[25]).SearchBar, {
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
      onPress: function handleDismissNux() {
        const result = guildId(onChannelClick[22]).UNSAFE_markDismissibleContentAsDismissed(
          guildId(onChannelClick[23]).DismissibleContent.CHANNEL_BROWSER_NUX,
          { dismissAction: constants.DISMISS },
        );
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null,
    };
    const intl = tmp5(tmp4[29]).intl;
    obj12.accessibilityLabel = intl.string(tmp5(tmp4[29]).t.cpT0Cq);
    obj12.style = tmp.nuxCloseContainer;
    obj12.children = closure_12(tmp5(tmp4[30]).CircleXIcon, {});
    const items6 = [closure_12(tmp5(tmp4[28]).PressableOpacity, obj12), ,];
    const obj13 = { source: tmp3(tmp4[32]) };
    items6[1] = closure_12(tmp3(tmp4[31]), obj13);
    const obj14 = { style: tmp.nuxHeader, children: null };
    const obj15 = { style: tmp.nuxHeaderText, children: null };
    const obj16 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp5(tmp4[29]).intl;
    obj16.children = intl2.string(tmp5(tmp4[29]).t.utqWEC);
    obj15.children = closure_12(tmp5(tmp4[17]).Text, obj16);
    const items7 = [closure_12(tmp17, obj15), ,];
    const obj17 = { variant: "body-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
    const intl3 = tmp5(tmp4[29]).intl;
    obj17.children = intl3.string(tmp5(tmp4[29]).t["+9etcM"]);
    items7[1] = closure_12(tmp5(tmp4[17]).Text, obj17);
    const obj18 = { variant: "body-sm/normal", color: "text-default", style: tmp.nuxBody, children: null };
    const intl4 = tmp5(tmp4[29]).intl;
    obj18.children = intl4.format(tmp5(tmp4[29]).t.Z0axjk, {});
    items7[2] = closure_12(tmp5(tmp4[17]).Text, obj18);
    obj14.children = items7;
    items6[2] = closure_13(tmp17, obj14);
    obj11.children = items6;
    tmp16Result = closure_13(tmp5(tmp4[27]).Card, obj11);
    const tmp3Result = tmp3(tmp4[31]);
  }
  const obj19 = {
    ListHeaderComponent: tmp16Result,
    accessibilityLabel: null,
    renderItem: null,
    data: null,
    contentContainerStyle: null,
    keyExtractor: null,
  };
  const intl5 = tmp5(tmp4[29]).intl;
  obj19.accessibilityLabel = intl5.string(guildId(onChannelClick[29]).t.et6wav);
  obj19.renderItem = callback;
  obj19.data = memo;
  const obj10 = {
    size: "md",
    onChange(arg0) {
      return closure_1(arg0);
    },
  };
  const obj7 = guildId(onChannelClick[24]);
  obj19.contentContainerStyle = {
    paddingBottom:
      require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets.bottom +
      require("native").space.PX_16,
    paddingHorizontal: require("native").space.PX_16,
  };
  obj19.keyExtractor = keyExtractor;
  items5[1] = closure_12(guildId(onChannelClick[26]).FlashList, obj19);
  obj8.children = items5;
  return closure_13(channelBrowserSections, obj8);
}
