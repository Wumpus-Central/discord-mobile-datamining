// === Module 16395: VoiceChannel ===

// Module 16395 (VoiceChannel)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9921 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11070 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12210 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7641 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import ReadStateStore from "ReadStateStore" /* 4655 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4821 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4664 */;

require = fn;
let closure_17 = async function _handleVoiceChannelPress(arg0) {
  let guildId = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_129_0 = guildId;
    guildId = guildId.getGuildId();
    closure_129_1 = guildId;
    if (null != guildId) {
      if (obj4.shouldShowMembershipVerificationGate(guildId)) {
        c2 = 1;
        c3 = 1;
        return { value: require("asyncRequireImpl")(paths[13], paths.paths), done: false };
      }
      obj4 = require("useShowMemberVerificationGate");
    }
    await require("asyncRequireImpl")(paths[15], paths.paths);
    value.openGuildVoiceModal(closure_129_0, "Channel List");
    await "HermesInternal";
    return value.openMemberVerificationModal(closure_129_1);
  })();
};
const View = fn(17).View;
const NO_VOICE_STATES = fn(4664).NO_VOICE_STATES;
const RedesignChannelListConstants = fn(10267);
({ CHANNEL_SUBTITLE_TEXT_VARIANT: closure_12, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Constants = fn(1074);
({ AnalyticEvents: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
let obj = { channelInfo: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 }, voiceStates: { marginLeft: 36, marginTop: -4, marginBottom: 2 }, voiceStatesCollapsed: { marginLeft: 16 }, container: null };
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 };
obj.container = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_18 = noop.memo((channel) => {
  channel = channel.channel;
  ({ selected, collapsed, subtitle, embeddedActivitiesCount: importDefault } = channel);
  let ensureSyncedChannelVoiceStates;
  noop = undefined;
  let gameMentionsAsPlainText;
  ({ locked, voiceStates } = channel);
  obj = channel(ensureSyncedChannelVoiceStates[16]);
  const activeEvent = obj.useActiveEvent(channel.id);
  const startTime = channel(ensureSyncedChannelVoiceStates[17]).useStartTime(channel);
  const obj2 = channel(ensureSyncedChannelVoiceStates[17]);
  ensureSyncedChannelVoiceStates = channel(ensureSyncedChannelVoiceStates[18]).useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  let obj3 = channel(ensureSyncedChannelVoiceStates[18]);
  const isConnectedToVoiceChannel = channel(ensureSyncedChannelVoiceStates[19]).useIsConnectedToVoiceChannel(channel);
  const obj4 = channel(ensureSyncedChannelVoiceStates[19]);
  const items = [ReadStateStore, UserGuildSettingsStore];
  const items1 = [channel];
  const stateFromStoresObject = channel(ensureSyncedChannelVoiceStates[20]).useStateFromStoresObject(items, () => ({ hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel) }), items1);
  let hasUnread = stateFromStoresObject.hasUnread;
  ({ mentionCount: c4, resolvedUnreadSetting } = stateFromStoresObject);
  const obj5 = channel(ensureSyncedChannelVoiceStates[20]);
  const channelSubtitleData = channel(ensureSyncedChannelVoiceStates[21]).getChannelSubtitleData(subtitle);
  let type;
  if (subtitle != null) {
    type = subtitle.type;
  }
  let text = null;
  if ("voice" === type) {
    text = null;
    if (subtitle.text.length > 0) {
      text = subtitle.text;
    }
  }
  const obj6 = channel(ensureSyncedChannelVoiceStates[21]);
  gameMentionsAsPlainText = channel(ensureSyncedChannelVoiceStates[22]).useGameMentionsAsPlainText(text);
  let result = null;
  if (null != gameMentionsAsPlainText) {
    const obj7 = { channelId: channel.id, linkVariant: textVariant, textVariant };
    result = require("MarkupUtils").parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj7);
    const obj8 = require("MarkupUtils");
  }
  const tmpResult = channel(ensureSyncedChannelVoiceStates[22]);
  const items2 = [, , ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const accessibilityLabelOrCheapFallbackUnsafe = channel(ensureSyncedChannelVoiceStates[24]).getAccessibilityLabelOrCheapFallbackUnsafe({
    expensive() {
      return getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount });
    },
    cheap: channel.name
  });
  const effect = noop.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      ({ guild_id: obj2.guild_id, id: obj2.channel_id } = channel);
      AnalyticsUtilsDefault.track(constants.VOICE_CHANNEL_TOPIC_VIEWED, { guild_id: null, channel_id: null });
      const obj3 = { guild_id: null, channel_id: null };
    }
  }, items2);
  if (result == null) {
    let subtitle1;
    if (channelSubtitleData != null) {
      subtitle1 = channelSubtitleData.subtitle;
    }
    result = subtitle1;
  }
  const obj9 = {
    expensive() {
      return getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount });
    },
    cheap: channel.name
  };
  const tmpResult3 = channel(ensureSyncedChannelVoiceStates[24]);
  const obj10 = {
    onPress() {
      return (function handleVoiceChannelPress() {
        const self = this;
        const apply = closure_1_17.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(channel);
    },
    onLongPress() {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
    },
    style: obj.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: accessibilityLabelOrCheapFallbackUnsafe,
    accessibilityHint: null,
    channel: null,
    selected: null,
    locked: null,
    unread: null,
    resolvedUnreadSetting: null,
    subtitle: null,
    isChannelLive: null,
    channelInfo: null,
    children: null
  };
  const tmp19 = jsx(require("ChannelInfo"), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  const intl = tmp(tmp2[30]).intl;
  obj10.accessibilityHint = intl.string(channel(ensureSyncedChannelVoiceStates[30]).t["9C444m"]);
  obj10.channel = channel;
  obj10.selected = selected;
  obj10.locked = locked;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  obj10.unread = hasUnread;
  obj10.resolvedUnreadSetting = resolvedUnreadSetting;
  obj10.subtitle = result;
  obj10.isChannelLive = null != activeEvent || null != startTime;
  obj10.channelInfo = tmp19;
  let tmp17Result = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      const obj11 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
      const items3 = [channel];
      obj11.channels = items3;
      const obj12 = {};
      obj12[channel.id] = ensureSyncedChannelVoiceStates;
      obj11.voiceStates = obj12;
      const obj13 = { style: tmp21.voiceStatesCollapsed, children: null };
      const summarizedVoiceUsers = tmp(tmp2[31]).computeSummarizedVoiceUsers(obj11);
      const obj14 = { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false };
      obj13.children = jsx(require("VoiceUserSummary"), { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false });
      tmp17Result = <gameMentionsAsPlainText style={tmp21.voiceStatesCollapsed}>{null}</gameMentionsAsPlainText>;
      const tmpResult4 = tmp(tmp2[31]);
    } else {
      const obj15 = { style: tmp21.voiceStates, children: null };
      const obj16 = { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates };
      obj15.children = jsx(require("VoiceUsers"), { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates });
      tmp17Result = <gameMentionsAsPlainText style={tmp21.voiceStates}>{null}</gameMentionsAsPlainText>;
    }
  }
  obj10.children = tmp17Result;
  return jsx(require("ChannelItem"), {
    onPress() {
      return (function handleVoiceChannelPress() {
        const self = this;
        const apply = closure_1_17.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(channel);
    },
    onLongPress() {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
    },
    style: obj.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: accessibilityLabelOrCheapFallbackUnsafe,
    accessibilityHint: null,
    channel: null,
    selected: null,
    locked: null,
    unread: null,
    resolvedUnreadSetting: null,
    subtitle: null,
    isChannelLive: null,
    channelInfo: null,
    children: null
  });
});
let obj3 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  const items = [SortedVoiceStateStore];
  const items1 = [channel.guild_id];
  const stateFromStores = channel(504).useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(channel.guild_id), items1);
  const arr3 = useEmbeddedAppsForChannelDefault(channel);
  obj = channel(504);
  const items2 = [PermissionStore, CollapsedVoiceChannelStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items2, () => ({ locked: !PermissionStore.can(constants2.CONNECT, channel), bypassLimit: PermissionStore.can(constants2.MOVE_MEMBERS, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) }));
  const obj3 = { channel, embeddedActivitiesCount: null, collapsed: null, voiceStates: null, selected: null, locked: null, bypassLimit: null, subtitle: null };
  let num;
  ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
  if (arr3 != null) {
    num = arr3.length;
  }
  if (num == null) {
    num = 0;
  }
  obj3.embeddedActivitiesCount = num;
  obj3.collapsed = collapsed;
  let tmp5 = stateFromStores[channel.id];
  if (tmp5 == null) {
    tmp5 = NO_VOICE_STATES;
  }
  obj3.voiceStates = tmp5;
  obj3.selected = selected;
  obj3.locked = locked;
  obj3.bypassLimit = bypassLimit;
  obj3.subtitle = subtitle;
  return <closure_18 channel={channel} embeddedActivitiesCount={null} collapsed={null} voiceStates={null} selected={null} locked={null} bypassLimit={null} subtitle={null} />;
});
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;