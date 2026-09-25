// === Module 16457: MessageRow ===

// Module 16457 (MessageRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4675 */;
import Text_Text from "Text/Text" /* 4825 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 5076 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7299 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7398 */;
import BotTagDefault from "BotTag" /* 8733 */;
import ChannelRowPreview from "ChannelRowPreview" /* 9557 */;
import _modDef9592 from "module_9592" /* 9592 */;
import _modDef9842 from "module_9842" /* 9842 */;
import BellZIcon from "BellZIcon" /* 12849 */;
import SearchListRow from "SearchListRow" /* 16435 */;
import useSearchMessageTimestamp from "useSearchMessageTimestamp" /* 16458 */;
import PollBadgeDefault from "PollBadge" /* 16459 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import FavoriteStore from "FavoriteStore" /* 2047 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;

require = fn;
function GuildChannelMessageRowHeader(channel) {
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = closure_13();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  const obj = channel(504);
  const channelIcon = channel(5328).getChannelIcon(channel, { isRulesChannel: stateFromStores === channel.id });
  const obj4 = { style: tmp.header, children: null };
  const obj2 = channel(5328);
  const obj3 = { isRulesChannel: stateFromStores === channel.id };
  const tmp7 = useChannelNameDefault(channel);
  const items1 = [closure_11(channel(1177).Icon, { source: channelIcon, size: channel(1177).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon }), closure_11(channel(4825).Text, { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: tmp7 }), , , ];
  if (muted) {
    const obj6 = { source: _modDef9592, size: tmp2(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = closure_11(tmp2(1177).Icon, obj6);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj7 = { source: _modDef9842, size: tmp2(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    isFavorite = closure_11(tmp2(1177).Icon, obj7);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj8 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
    isSystemDMResult = closure_11(BotTagDefault, obj8);
    const tmp6Result = BotTagDefault;
  }
  items1[4] = isSystemDMResult;
  obj4.children = items1;
  return closure_12(closure_4, obj4);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  return closure_1_11(native.Avatar, { user: message.author, guildId: guildId.channel.guild_id, size: native.AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration });
}
function PrivateChannelMessageRowLabel(message) {
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  let tmp = closure_13();
  const items = [message.author];
  const items1 = [channel];
  const memo = noop.useMemo(() => UserUtilsDefault.getName(message.author), items);
  const effect = noop.useEffect(() => {
    if (tmp) {
      const recipients = channel.recipients;
      const item = recipients.forEach((item) => message(closure_1_2[20]).getUser(item));
    }
    tmp = channel.isDM() || channel.isGroupDM();
  }, items1);
  const searchMessageTimestamp = message(16458).useSearchMessageTimestamp(message, channel);
  const obj2 = { style: tmp.labelContainer, children: null };
  const obj3 = { style: tmp.authorRow, children: null };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const items2 = [closure_11(message(4825).Text, { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: memo }), , ];
  if (muted) {
    const obj4 = { source: channel(9592), size: tmp4(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = closure_11(tmp4(1177).Icon, obj4);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj5 = { type: channel(8733).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = closure_11(channel(8733), obj5);
    const tmp13 = channel(8733);
  }
  items2[2] = isSystemDMResult;
  obj3.children = items2;
  const items3 = [closure_12(closure_4, obj3), closure_11(message(4825).Text, { variant: "text-xs/medium", color: "interactive-text-active", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp }), , ];
  let tmp9Result = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj7 = { size: "xs", style: tmp.suppressNotificationsIcon };
    tmp9Result = closure_11(tmp4(12849).BellZIcon, obj7);
  }
  items3[2] = tmp9Result;
  let tmp9Result2 = null;
  if (message.isPoll()) {
    const obj8 = { style: tmp.pollBadge };
    tmp9Result2 = closure_11(channel(16459), obj8);
  }
  items3[3] = tmp9Result2;
  obj2.children = items3;
  return closure_12(closure_4, obj2);
}
function GuildChannelMessageRowLabel(arg0) {
  ({ message, channel } = arg0);
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = useMessageAuthorDefault(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      const obj2 = { color: colorString };
    }
    const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
    const tmp2Result3 = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result3.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
    const searchMessageTimestamp = useSearchMessageTimestamp.useSearchMessageTimestamp(message, channel);
    const obj3 = { style: tmp.labelContainer, children: null };
    const obj4 = { style: tmp.authorRow, children: null };
    let tmp18 = "dot" === stateFromStores;
    ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
    if (tmp18) {
      tmp18 = null != colorString;
    }
    if (tmp18) {
      const obj5 = { size: "small", color: colorString, colors: colorStrings };
      tmp18 = closure_1_11(native.RoleDot, obj5);
    }
    const items1 = [tmp18, ];
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", lineClamp: 1, style: {}, gradientColors: null, children: null };
    let tmp22;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    obj6.gradientColors = tmp22;
    obj6.children = tmp7;
    items1[1] = closure_1_11(Text_Text.Text, obj6);
    obj4.children = items1;
    const items2 = [closure_1_12(React4, obj4), , , ];
    const obj7 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
    items2[1] = closure_1_11(Text_Text.Text, obj7);
    let tmp21Result = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj8 = { size: "xs", style: tmp.suppressNotificationsIcon };
      tmp21Result = closure_1_11(BellZIcon.BellZIcon, obj8);
    }
    items2[2] = tmp21Result;
    let tmp21Result2 = null;
    if (message.isPoll()) {
      const obj9 = { style: tmp.pollBadge };
      tmp21Result2 = closure_1_11(PollBadgeDefault, obj9);
    }
    items2[3] = tmp21Result2;
    obj3.children = items2;
    return closure_1_12(React4, obj3);
  }
  const tmp6 = useMessageAuthorDefault(message);
}
function MessageRowContent(message) {
  message = message.message;
  ({ channel, onPress } = message);
  ({ muted, isSpoilerHidden, header, lineClamp, messageSizeCacheRef } = message);
  const tmp = closure_13();
  const items = [, , ];
  ({ channel_id: arr[0], id: arr[1] } = message);
  items[2] = onPress;
  const callback = noop.useCallback(() => {
    onPress({ channelId: message.channel_id, messageId: message.id });
  }, items);
  const obj = { header, icon: closure_1_11(MessageRowIcon, { message, channel }), label: closure_1_11(null == channel.guild_id ? PrivateChannelMessageRowLabel : GuildChannelMessageRowLabel, { message, channel, muted }), subLabel: null, onPress: null, bodyStyle: null };
  if (isSpoilerHidden) {
    const obj2 = { variant: "text-sm/normal", color: "text-muted", style: tmp.spoilerText, children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["5uaI/7"]);
    let tmp4Result = closure_1_11(Text_Text.Text, obj2);
  } else {
    const obj3 = { message, channel, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, color: "interactive-text-default", lineClamp, messageSizeCacheRef };
    tmp4Result = closure_1_11(ChannelRowPreview.NativeMessageChannelRowPreview, obj3);
  }
  obj.subLabel = tmp4Result;
  obj.onPress = callback;
  obj.bodyStyle = tmp.body;
  return closure_1_11(SearchListRow.SearchListRow, obj);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const MessageFlags = fn(1074).MessageFlags;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj = { channelIcon: { marginRight: 5, alignSelf: "center" }, channelStatus: { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, labelContainer: { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" }, authorRow: { flexShrink: 1, minWidth: 0, flexDirection: "row" }, timestamp: { marginLeft: 8 }, header: { flexDirection: "row", marginRight: 16, marginBottom: 12 }, body: { alignItems: "flex-start" }, pollBadge: { marginLeft: 8 }, suppressNotificationsIcon: { marginLeft: 4 }, spoilerText: { fontStyle: "italic" } };
let closure_13 = createStyles.createStyles(obj);
let obj3 = { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const memoResult = noop.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  const items = [ChannelStore];
  const stateFromStores = message(504).useStateFromStores(items, () => ChannelStore.getChannel(stateFromStores.channel_id));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const obj = message(504);
  const items1 = [FavoriteStore];
  const stateFromStores1 = message(504).useStateFromStores(items1, () => {
    let isFavoriteResult = null != stateFromStores2;
    if (isFavoriteResult) {
      isFavoriteResult = FavoriteStore.isFavorite(stateFromStores.channel_id);
    }
    return isFavoriteResult;
  });
  const tmp2Result = message(504);
  const items2 = [UserGuildSettingsStore];
  const stateFromStores2 = message(504).useStateFromStores(items2, () => UserGuildSettingsStore.isChannelMuted(stateFromStores2, stateFromStores.channel_id));
  message(6742);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.message = message;
    obj2.channel = stateFromStores;
    obj2.muted = stateFromStores2;
    obj2.isSpoilerHidden = tmp9;
    obj2.header = null;
    tmp10 = closure_11(MessageRowContent, obj2);
  }
  return tmp10;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default noop.memo(function MessageRow(message) {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores1;
  closure_129_0 = message;
  closure_129_1 = undefined;
  const items = [ChannelStore];
  stateFromStores = stateFromStores(stateFromStores1[11]).useStateFromStores(items, () => ChannelStore.getChannel(stateFromStores.channel_id));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  closure_129_1 = guild_id;
  let obj = stateFromStores(stateFromStores1[11]);
  const items1 = [FavoriteStore];
  stateFromStores1 = stateFromStores(stateFromStores1[11]).useStateFromStores(items1, () => {
    let isFavoriteResult = null != stateFromStores2;
    if (isFavoriteResult) {
      isFavoriteResult = FavoriteStore.isFavorite(stateFromStores.channel_id);
    }
    return isFavoriteResult;
  });
  const tmp2Result = stateFromStores(stateFromStores1[11]);
  const items2 = [UserGuildSettingsStore];
  stateFromStores2 = stateFromStores(stateFromStores1[11]).useStateFromStores(items2, () => UserGuildSettingsStore.isChannelMuted(stateFromStores2, stateFromStores.channel_id));
  const tmp2Result3 = stateFromStores(stateFromStores1[11]);
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const isChannelSpoilerGated = stateFromStores(stateFromStores1[26]).useIsChannelSpoilerGated(stateFromStores);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.message = message;
    obj2.channel = stateFromStores;
    obj2.muted = stateFromStores2;
    obj2.isSpoilerHidden = isChannelSpoilerGated;
    obj2.header = tmp9;
    tmp10 = closure_11(MessageRowContent, obj2);
  }
  return tmp10;
});
export const HeaderlessMessageRow = memoResult;