// === Module 16218: GuildChannelMessageRowHeader ===

// Module 16218 (GuildChannelMessageRowHeader)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import computeChannelNameDefault from "computeChannelName" /* 4642 */;
import useNullableMessageAuthorDefault from "useNullableMessageAuthor" /* 4714 */;
import PollBadgeDefault from "PollBadge" /* 16220 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import closure_6 from "initializeFromUserSettings" /* 1390 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import closure_8 from "createGuildRecordFromRust" /* 1909 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 4669 */;
import { MessageFlags } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function GuildChannelMessageRowHeader(channel) {
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = callback2();
  let obj = channel(589);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = closure_1_8.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  obj1 = channel(4949);
  obj = { isRulesChannel: stateFromStores === channel.id };
  const channelIcon = obj1.getChannelIcon(channel, obj);
  obj = { style: tmp.header, children: null };
  obj1 = { source: channelIcon, size: channel(1297).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon };
  const items1 = [callback(channel(1297).Icon, obj1), callback(channel(4444).Text, { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: computeChannelNameDefault(channel) }), , , ];
  if (muted) {
    const obj2 = { source: null, size: null, style: null };
    obj2[0] = tmp6(10189);
    obj2[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
    obj2[2] = tmp.channelStatus;
    muted = tmp10(tmp2(1297).Icon, obj2);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj3 = { source: null, size: null, style: null };
    obj3[0] = tmp6(10344);
    obj3[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
    obj3[2] = tmp.channelStatus;
    isFavorite = tmp10(tmp2(1297).Icon, obj3);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj4 = { type: null, verified: true };
    obj4[0] = tmp6(8896).Types.SYSTEM_DM;
    isSystemDMResult = tmp10(tmp6(8896), obj4);
    const tmp6Result = tmp6(8896);
  }
  items1[4] = isSystemDMResult;
  obj[1] = items1;
  return closure_12(closure_4, obj);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  return callback(Button.Avatar, { user: message.author, guildId: guildId.channel.guild_id, size: Button.AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration });
}
function PrivateChannelMessageRowLabel(message) {
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  const tmp = callback2();
  const items = [message.author];
  const items1 = [channel];
  const memo = importAllResult.useMemo(() => channel(closure_1_2[19]).getName(message.author), items);
  const effect = importAllResult.useEffect(() => {
    if (tmp) {
      const recipients = obj.recipients;
      const item = recipients.forEach((arg0) => callback(table[20]).getUser(arg0));
    }
  }, items1);
  let obj = message(16219);
  const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
  obj = { style: tmp.labelContainer, children: null };
  obj = { style: tmp.authorRow, children: null };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const items2 = [callback(message(4444).Text, { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: memo }), , ];
  if (muted) {
    obj1 = { source: null, size: null, style: null };
    obj1[0] = channel(10189);
    obj1[1] = tmp4(1297).Icon.Sizes.EXTRA_SMALL;
    obj1[2] = tmp.channelStatus;
    muted = tmp9(tmp4(1297).Icon, obj1);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj2 = { type: null, verified: true };
    obj2[0] = channel(8896).Types.SYSTEM_DM;
    isSystemDMResult = tmp9(channel(8896), obj2);
    const tmp13 = channel(8896);
  }
  items2[2] = isSystemDMResult;
  obj[1] = items2;
  const items3 = [closure_12(closure_4, obj), callback(message(4444).Text, { variant: "text-xs/medium", color: "interactive-text-active", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp }), , ];
  let tmp9Result = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj4 = { size: "xs", style: null };
    obj4[1] = tmp.suppressNotificationsIcon;
    tmp9Result = tmp9(tmp4(12915).BellZIcon, obj4);
  }
  items3[2] = tmp9Result;
  tmp9Result = null;
  if (message.isPoll()) {
    const obj5 = { style: null };
    obj5[0] = tmp.pollBadge;
    tmp9Result = tmp9(channel(16220), obj5);
  }
  items3[3] = tmp9Result;
  obj[1] = items3;
  return closure_12(closure_4, obj);
}
function GuildChannelMessageRowLabel(arg0) {
  ({ message, channel } = arg0);
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = useNullableMessageAuthorDefault(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      obj = { color: null };
      obj[0] = colorString;
    }
    let tmp2Result = tmp2(7838);
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
    tmp2Result = tmp2(7838);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    const searchMessageTimestamp = tmp2(16219).useSearchMessageTimestamp(message, channel);
    obj = { style: null, children: null };
    obj[0] = tmp.labelContainer;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.authorRow;
    let tmp18 = "dot" === stateFromStores;
    ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
    if (tmp18) {
      tmp18 = null != colorString;
    }
    if (tmp18) {
      const obj2 = { size: "small", color: null, colors: null };
      obj2[1] = colorString;
      obj2[2] = colorStrings;
      tmp18 = callback(tmp2(1297).RoleDot, obj2);
    }
    const items1 = [tmp18, ];
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-active", lineClamp: 1, style: null, gradientColors: null, children: null };
    obj3[3] = {};
    let tmp22;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    obj3[4] = tmp22;
    obj3[5] = tmp7;
    items1[1] = callback(tmp2(4444).Text, obj3);
    obj1[1] = items1;
    const items2 = [closure_12(closure_4, obj1), , , ];
    const obj4 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: null, accessibilityLabel: null, children: null };
    obj4[3] = tmp.timestamp;
    obj4[4] = timestampAccessibilityLabel;
    obj4[5] = timestamp;
    items2[1] = callback(tmp2(4444).Text, obj4);
    let tmp21Result = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj5 = { size: "xs", style: null };
      obj5[1] = tmp.suppressNotificationsIcon;
      tmp21Result = tmp21(tmp2(12915).BellZIcon, obj5);
    }
    items2[2] = tmp21Result;
    tmp21Result = null;
    if (message.isPoll()) {
      const obj6 = { style: null };
      obj6[0] = tmp.pollBadge;
      tmp21Result = tmp21(PollBadgeDefault, obj6);
    }
    items2[3] = tmp21Result;
    obj[1] = items2;
    return closure_12(closure_4, obj);
  }
}
let c3 = importAllResult;
({ Platform, View: c4 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { channelIcon: { marginRight: 5, alignSelf: "center" }, channelStatus: null, labelContainer: null, authorRow: null, timestamp: null, header: null, body: null, pollBadge: null, suppressNotificationsIcon: null, spoilerText: null };
obj = { marginLeft: 5, alignSelf: "center", tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[1] = obj;
obj[2] = { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" };
obj[3] = { flexShrink: 1, minWidth: 0, flexDirection: "row" };
obj[4] = { marginLeft: 8 };
obj[5] = { flexDirection: "row", marginRight: 16, marginBottom: 12 };
obj[6] = { alignItems: "flex-start" };
obj[7] = { marginLeft: 8 };
obj[8] = { marginLeft: 4 };
obj[9] = { fontStyle: "italic" };
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MessageRow(message) {
  message = message.message;
  const onPress = message.onPress;
  let stateFromStores;
  let guild_id;
  let stateFromStores1;
  let stateFromStores2;
  ({ lineClamp, messageSizeCacheRef } = message);
  let body = callback2();
  let stringResult = stateFromStores;
  let obj = message(stateFromStores[11]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(message.channel_id));
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmpResult = tmp(stringResult[11]);
  const items1 = [closure_6];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let isFavoriteResult = null != guild_id;
    if (isFavoriteResult) {
      isFavoriteResult = closure_1_6.isFavorite(message.channel_id);
    }
    return isFavoriteResult;
  });
  tmpResult = tmp(stringResult[11]);
  const items2 = [closure_9];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => closure_1_9.isChannelMuted(guild_id, message.channel_id));
  const items3 = [, , ];
  ({ channel_id: arr4[0], id: arr4[1] } = message);
  items3[2] = onPress;
  const isChannelSpoilerGated = message(stringResult[26]).useIsChannelSpoilerGated(stateFromStores);
  let guild_id1;
  const callback = guild_id.useCallback(() => {
    onPress({ channelId: message.channel_id, messageId: message.id });
  }, items3);
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const items4 = [guild_id1];
  const items5 = [stateFromStores, stateFromStores1, stateFromStores2];
  const memo = guild_id.useMemo(() => {
    guild_id = undefined;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null == guild_id ? closure_1_16 : closure_1_17;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { header: null, icon: null, label: null, subLabel: null, onPress: null, bodyStyle: null };
    obj[0] = tmp12;
    obj = { message: null, channel: null };
    obj[0] = message;
    obj[1] = stateFromStores;
    obj[1] = callback(MessageRowIcon, obj);
    obj1 = { message: null, channel: null, muted: null };
    obj1[0] = message;
    obj1[1] = stateFromStores;
    obj1[2] = stateFromStores2;
    obj[2] = callback(memo, obj1);
    if (isChannelSpoilerGated) {
      const obj2 = { variant: "text-sm/normal", color: "text-muted", style: null, children: null };
      obj2[2] = body.spoilerText;
      const intl = tmp(stringResult[28]).intl;
      stringResult = intl.string(tmp(stringResult[28]).t["5uaI/7"]);
      obj2[3] = stringResult;
      let tmp13Result = tmp13(tmp(stringResult[15]).Text, obj2);
    } else {
      const obj3 = { message: null, channel: null, muted: false, layout: null, color: "interactive-text-default", lineClamp: null, messageSizeCacheRef: null };
      obj3[0] = message;
      obj3[1] = stateFromStores;
      obj3[3] = tmp(stringResult[30]).ChannelListLayoutTypes.COZY;
      obj3[5] = lineClamp;
      obj3[6] = messageSizeCacheRef;
      tmp13Result = tmp13(tmp(stringResult[29]).NativeMessageChannelRowPreview, obj3);
    }
    obj[3] = tmp13Result;
    obj[4] = callback;
    body = body.body;
    obj[5] = body;
    tmp13Result = tmp13(tmp(stringResult[27]).SearchListRow, obj);
  }
});
const result = require("set").fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default memoResult;