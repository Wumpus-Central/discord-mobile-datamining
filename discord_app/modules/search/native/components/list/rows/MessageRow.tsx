// discord_app/modules/search/native/components/list/rows/MessageRow.tsx
import importAllResult from "nameFromUser";
import get_ActivityIndicator from "registerAsset";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import initializeFromUserSettings from "initializeFromUserSettings";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { MessageFlags } from "ME";
import jsxProd from "useSearchMessageTimestamp";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import { Button } from "../../../../../../design/void/native.tsx";
import { computeChannelName } from "../../../../../channel/useChannelName.tsx";
import { useNullableMessageAuthor } from "../../../../../messages/useMessageAuthor.tsx";
import { PollBadge } from "../../../../../polls/native/PollBadge.tsx";

let Platform;
let c4;
let closure_12;
let unpackModuleId;
const require = arg1;
function GuildChannelMessageRowHeader(channel) {
  let isFavorite;
  let muted;
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = callback2();
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_8.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let obj1 = channel(4805);
  obj = { isRulesChannel: stateFromStores === channel.id };
  const channelIcon = obj1.getChannelIcon(channel, obj);
  obj = { style: tmp.header, children: null };
  obj1 = { source: channelIcon, size: null, style: null };
  obj1[1] = channel(1297).Icon.Sizes.REFRESH_SMALL_16;
  obj1[2] = tmp.channelIcon;
  const items1 = [callback(channel(1297).Icon, obj1), callback(channel(4338).Text, { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: computeChannelName(channel) }), , , ];
  if (muted) {
    const obj2 = { source: null, size: null, style: null };
    obj2[0] = tmp6(9871);
    obj2[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
    obj2[2] = tmp.channelStatus;
    muted = tmp10(tmp2(1297).Icon, obj2);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj3 = { source: null, size: null, style: null };
    obj3[0] = tmp6(10005);
    obj3[1] = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
    obj3[2] = tmp.channelStatus;
    isFavorite = tmp10(tmp2(1297).Icon, obj3);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj4 = { type: null, verified: true };
    obj4[0] = tmp6(9181).Types.SYSTEM_DM;
    isSystemDMResult = tmp10(tmp6(9181), obj4);
    const tmp6Result = tmp6(9181);
  }
  items1[4] = isSystemDMResult;
  obj[1] = items1;
  return closure_12(closure_4, obj);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  const obj = { user: message.author, guildId: guildId.channel.guild_id, size: null, avatarDecoration: null };
  obj[2] = Button.AvatarSizes.LARGE_48;
  obj[3] = message.author.avatarDecoration;
  return callback(Button.Avatar, obj);
}
function PrivateChannelMessageRowLabel(message) {
  let timestamp;
  let timestampAccessibilityLabel;
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  const tmp = callback2();
  const items = [message.author];
  const items1 = [channel];
  const memo = importAllResult.useMemo(() => channel(outer1_2[19]).getName(message.author), items);
  const effect = importAllResult.useEffect(() => {
    if (tmp) {
      const recipients = obj.recipients;
      const item = recipients.forEach((arg0) => callback(table[20]).getUser(arg0));
    }
  }, items1);
  let obj = message(15826);
  const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
  obj = { style: tmp.labelContainer, children: null };
  obj = { style: tmp.authorRow, children: null };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const items2 = [callback(message(4338).Text, { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: memo }), , ];
  if (muted) {
    const obj1 = { source: null, size: null, style: null };
    obj1[0] = channel(9871);
    obj1[1] = tmp4(1297).Icon.Sizes.EXTRA_SMALL;
    obj1[2] = tmp.channelStatus;
    muted = tmp9(tmp4(1297).Icon, obj1);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj2 = { type: null, verified: true };
    obj2[0] = channel(9181).Types.SYSTEM_DM;
    isSystemDMResult = tmp9(channel(9181), obj2);
    const tmp13 = channel(9181);
  }
  items2[2] = isSystemDMResult;
  obj[1] = items2;
  const items3 = [closure_12(closure_4, obj), callback(message(4338).Text, { variant: "text-xs/medium", color: "interactive-text-active", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp }), , ];
  let tmp9Result = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj4 = { size: "xs", style: null };
    obj4[1] = tmp.suppressNotificationsIcon;
    tmp9Result = tmp9(tmp4(12630).BellZIcon, obj4);
  }
  items3[2] = tmp9Result;
  tmp9Result = null;
  if (message.isPoll()) {
    const obj5 = { style: null };
    obj5[0] = tmp.pollBadge;
    tmp9Result = tmp9(channel(15827), obj5);
  }
  items3[3] = tmp9Result;
  obj[1] = items3;
  return closure_12(closure_4, obj);
}
function GuildChannelMessageRowLabel(arg0) {
  let channel;
  let colorString;
  let colorStrings;
  let message;
  let timestamp;
  let timestampAccessibilityLabel;
  ({ message, channel } = arg0);
  const tmp = callback2();
  let obj = initialize;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = useNullableMessageAuthor(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      obj = { color: null };
      obj[0] = colorString;
    }
    let tmp2Result = tmp2(8115);
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
    tmp2Result = tmp2(8115);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    const searchMessageTimestamp = tmp2(15826).useSearchMessageTimestamp(message, channel);
    obj = { style: null, children: null };
    obj[0] = tmp.labelContainer;
    const obj1 = { style: null, children: null };
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
    items1[1] = callback(tmp2(4338).Text, obj3);
    obj1[1] = items1;
    const items2 = [closure_12(closure_4, obj1), , , ];
    const obj4 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: null, accessibilityLabel: null, children: null };
    obj4[3] = tmp.timestamp;
    obj4[4] = timestampAccessibilityLabel;
    obj4[5] = timestamp;
    items2[1] = callback(tmp2(4338).Text, obj4);
    let tmp21Result = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj5 = { size: "xs", style: null };
      obj5[1] = tmp.suppressNotificationsIcon;
      tmp21Result = tmp21(tmp2(12630).BellZIcon, obj5);
    }
    items2[2] = tmp21Result;
    tmp21Result = null;
    if (message.isPoll()) {
      const obj6 = { style: null };
      obj6[0] = tmp.pollBadge;
      tmp21Result = tmp21(PollBadge, obj6);
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
obj = { marginLeft: 5, alignSelf: "center", tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
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
  let lineClamp;
  let messageSizeCacheRef;
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
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(message.channel_id));
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmpResult = tmp(stringResult[11]);
  const items1 = [initializeFromUserSettings];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let isFavoriteResult = null != guild_id;
    if (isFavoriteResult) {
      isFavoriteResult = outer1_6.isFavorite(message.channel_id);
    }
    return isFavoriteResult;
  });
  tmpResult = tmp(stringResult[11]);
  const items2 = [updateUserGuildSettingsInternal];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => outer1_9.isChannelMuted(guild_id, message.channel_id));
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
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null == guild_id ? outer1_16 : outer1_17;
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
    const obj1 = { message: null, channel: null, muted: null };
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
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default memoResult;