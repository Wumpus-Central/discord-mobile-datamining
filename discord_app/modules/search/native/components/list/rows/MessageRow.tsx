// discord_app/modules/search/native/components/list/rows/MessageRow.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import useMessageAuthorDefault from "../../../../../messages/useMessageAuthor.tsx";
import PollBadgeDefault from "../../../../../polls/native/PollBadge.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import FavoriteStore from "../../../../../favorites/FavoriteStore.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import UserGuildSettingsStore from "../../../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
function GuildChannelMessageRowHeader(channel) {
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = closure_13();
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let obj1 = channel(5028);
  obj = { isRulesChannel: stateFromStores === channel.id };
  const channelIcon = obj1.getChannelIcon(channel, obj);
  obj = { style: tmp.header, children: null };
  obj1 = { source: channelIcon, size: channel(1178).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon };
  const items1 = [
    closure_11(channel(1178).Icon, obj1),
    closure_11(channel(4556).Text, {
      lineClamp: 1,
      variant: "text-sm/semibold",
      color: "interactive-text-default",
      children: useChannelNameDefault(channel),
    }),
    ,
    ,
  ];
  if (muted) {
    const obj2 = { source: tmp6(10145), size: tmp2(1178).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = tmp10(tmp2(1178).Icon, obj2);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj3 = { source: tmp6(10391), size: tmp2(1178).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    isFavorite = tmp10(tmp2(1178).Icon, obj3);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj4 = { type: tmp6(9438).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = tmp10(tmp6(9438), obj4);
    const tmp6Result = tmp6(9438);
  }
  items1[4] = isSystemDMResult;
  obj.children = items1;
  return closure_12(closure_4, obj);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  return closure_1_11(native.Avatar, {
    user: message.author,
    guildId: guildId.channel.guild_id,
    size: native.AvatarSizes.LARGE_48,
    avatarDecoration: message.author.avatarDecoration,
  });
}
function PrivateChannelMessageRowLabel(message) {
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  const tmp = closure_13();
  const items = [message.author];
  const items1 = [channel];
  const memo = noop.useMemo(() => UserUtilsDefault.getName(message.author), items);
  const effect = noop.useEffect(() => {
    if (tmp) {
      const recipients = obj.recipients;
      const item = recipients.forEach((item) => message(closure_1_2[20]).getUser(item));
    }
  }, items1);
  let obj = message(16670);
  const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
  obj = { style: tmp.labelContainer, children: null };
  obj = { style: tmp.authorRow, children: null };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const items2 = [
    closure_11(message(4556).Text, {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "interactive-text-active",
      children: memo,
    }),
    ,
  ];
  if (muted) {
    const obj1 = { source: channel(10145), size: tmp4(1178).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = tmp9(tmp4(1178).Icon, obj1);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj2 = { type: channel(9438).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = tmp9(channel(9438), obj2);
    const tmp13 = channel(9438);
  }
  items2[2] = isSystemDMResult;
  obj.children = items2;
  const items3 = [
    closure_12(closure_4, obj),
    closure_11(message(4556).Text, {
      variant: "text-xs/medium",
      color: "interactive-text-active",
      lineClamp: 1,
      style: tmp.timestamp,
      accessibilityLabel: timestampAccessibilityLabel,
      children: timestamp,
    }),
    ,
  ];
  let tmp9Result = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj4 = { size: "xs", style: tmp.suppressNotificationsIcon };
    tmp9Result = tmp9(tmp4(13287).BellZIcon, obj4);
  }
  items3[2] = tmp9Result;
  tmp9Result = null;
  if (message.isPoll()) {
    const obj5 = { style: tmp.pollBadge };
    tmp9Result = tmp9(channel(16671), obj5);
  }
  items3[3] = tmp9Result;
  obj.children = items3;
  return closure_12(closure_4, obj);
}
function GuildChannelMessageRowLabel(arg0) {
  ({ message, channel } = arg0);
  const tmp = closure_13();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = useMessageAuthorDefault(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      obj = { color: colorString };
    }
    let tmp2Result = tmp2(7961);
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
    tmp2Result = tmp2(7961);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result.useIsRoleStyleAndRoleColorsEligibleForERC(
      channel.guild_id,
      message.author.id,
      stateFromStores,
      processColorStringsArray,
    );
    const searchMessageTimestamp = tmp2(16670).useSearchMessageTimestamp(message, channel);
    obj = { style: tmp.labelContainer, children: null };
    const obj1 = { style: tmp.authorRow, children: null };
    let tmp18 = "dot" === stateFromStores;
    ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
    if (tmp18) {
      tmp18 = null != colorString;
    }
    if (tmp18) {
      const obj2 = { size: "small", color: colorString, colors: colorStrings };
      tmp18 = closure_1_11(tmp2(1178).RoleDot, obj2);
    }
    const items1 = [tmp18];
    const obj3 = {
      variant: "text-sm/semibold",
      color: "interactive-text-active",
      lineClamp: 1,
      style: {},
      gradientColors: null,
      children: null,
    };
    let tmp22;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    obj3.gradientColors = tmp22;
    obj3.children = tmp7;
    items1[1] = closure_1_11(tmp2(4556).Text, obj3);
    obj1.children = items1;
    const items2 = [closure_1_12(React4, obj1), , ,];
    const obj4 = {
      variant: "text-xs/medium",
      color: "text-default",
      lineClamp: 1,
      style: tmp.timestamp,
      accessibilityLabel: timestampAccessibilityLabel,
      children: timestamp,
    };
    items2[1] = closure_1_11(tmp2(4556).Text, obj4);
    let tmp21Result = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj5 = { size: "xs", style: tmp.suppressNotificationsIcon };
      tmp21Result = tmp21(tmp2(13287).BellZIcon, obj5);
    }
    items2[2] = tmp21Result;
    tmp21Result = null;
    if (message.isPoll()) {
      const obj6 = { style: tmp.pollBadge };
      tmp21Result = tmp21(PollBadgeDefault, obj6);
    }
    items2[3] = tmp21Result;
    obj.children = items2;
    return closure_1_12(React4, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const MessageFlags = fn(1074).MessageFlags;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let obj = {
  channelIcon: { marginRight: 5, alignSelf: "center" },
  channelStatus: null,
  labelContainer: null,
  authorRow: null,
  timestamp: null,
  header: null,
  body: null,
  pollBadge: null,
  suppressNotificationsIcon: null,
  spoilerText: null,
};
obj = { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.channelStatus = obj;
obj.labelContainer = { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" };
obj.authorRow = { flexShrink: 1, minWidth: 0, flexDirection: "row" };
obj.timestamp = { marginLeft: 8 };
obj.header = { flexDirection: "row", marginRight: 16, marginBottom: 12 };
obj.body = { alignItems: "flex-start" };
obj.pollBadge = { marginLeft: 8 };
obj.suppressNotificationsIcon = { marginLeft: 4 };
obj.spoilerText = { fontStyle: "italic" };
let closure_13 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default noop.memo(function MessageRow(message) {
  message = message.message;
  const onPress = message.onPress;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  ({ lineClamp, messageSizeCacheRef } = message);
  let body = closure_13();
  let stringResult = stateFromStores;
  let obj = message(stateFromStores[11]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.channel_id));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmpResult = tmp(stringResult[11]);
  const items1 = [FavoriteStore];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let isFavoriteResult = null != guild_id;
    if (isFavoriteResult) {
      isFavoriteResult = FavoriteStore.isFavorite(message.channel_id);
    }
    return isFavoriteResult;
  });
  tmpResult = tmp(stringResult[11]);
  const items2 = [UserGuildSettingsStore];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () =>
    UserGuildSettingsStore.isChannelMuted(guild_id, message.channel_id),
  );
  const items3 = [, ,];
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
    return null == guild_id ? PrivateChannelMessageRowLabel : GuildChannelMessageRowLabel;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { header: tmp12, icon: null, label: null, subLabel: null, onPress: null, bodyStyle: null };
    obj = { message, channel: stateFromStores };
    obj.icon = closure_11(MessageRowIcon, obj);
    const obj1 = { message, channel: stateFromStores, muted: stateFromStores2 };
    obj.label = closure_11(memo, obj1);
    if (isChannelSpoilerGated) {
      const obj2 = { variant: "text-sm/normal", color: "text-muted", style: body.spoilerText, children: null };
      const intl = tmp(stringResult[28]).intl;
      stringResult = intl.string(tmp(stringResult[28]).t["5uaI/7"]);
      obj2.children = stringResult;
      let tmp13Result = tmp13(tmp(stringResult[15]).Text, obj2);
    } else {
      const obj3 = {
        message,
        channel: stateFromStores,
        muted: false,
        layout: tmp(stringResult[30]).ChannelListLayoutTypes.COZY,
        color: "interactive-text-default",
        lineClamp,
        messageSizeCacheRef,
      };
      tmp13Result = tmp13(tmp(stringResult[29]).NativeMessageChannelRowPreview, obj3);
    }
    obj.subLabel = tmp13Result;
    obj.onPress = callback;
    body = body.body;
    obj.bodyStyle = body;
    tmp13Result = tmp13(tmp(stringResult[27]).SearchListRow, obj);
  }
});
