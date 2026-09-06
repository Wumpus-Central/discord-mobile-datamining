// discord_app/modules/channel_list_v2/native/items/VoiceChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import getChannelA11yLabelDefault from "../../../channel/getChannelA11yLabel.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import useEmbeddedAppsForChannelDefault from "../../../activities/useEmbeddedAppsForChannel.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollapsedVoiceChannelStore from "../../../../stores/CollapsedVoiceChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
let closure_17 = async function _handleVoiceChannelPress(arg0) {
  let guildId = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
    closure_129_0 = guildId;
    guildId = guildId.getGuildId();
    closure_129_1 = guildId;
    if (null != guildId) {
      if (obj3.shouldShowMembershipVerificationGate(guildId)) {
        c2 = 1;
        c3 = 1;
        return { value: tmp10(tmp11[14])(tmp11[13], tmp11.paths), done: false };
      }
      obj3 = require("useShowMemberVerificationGate");
      tmp10 = require;
    }
    await require("asyncRequireImpl")(paths[15], paths.paths);
    value.openGuildVoiceModal(closure_129_0, "Channel List");
    await "HermesInternal";
    return value.openMemberVerificationModal(closure_129_1);
  })();
};
const View = fn(17).View;
const NO_VOICE_STATES = fn(4584).NO_VOICE_STATES;
const RedesignChannelListConstants = fn(10118);
({ CHANNEL_SUBTITLE_TEXT_VARIANT: closure_12, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Constants = fn(1074);
({ AnalyticEvents: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
let channelInfo = { channelInfo: null, voiceStates: null, voiceStatesCollapsed: null, container: null };
channelInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 };
channelInfo.channelInfo = channelInfo;
channelInfo.voiceStates = { marginLeft: 36, marginTop: -4, marginBottom: 2 };
channelInfo.voiceStatesCollapsed = { marginLeft: 16 };
channelInfo.container = {
  marginVertical: CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
let closure_18 = noop.memo((channel) => {
  channel = channel.channel;
  ({ selected, collapsed, subtitle, embeddedActivitiesCount: importDefault } = channel);
  let ensureSyncedChannelVoiceStates;
  noop = undefined;
  let gameMentionsAsPlainText;
  ({ locked, voiceStates } = channel);
  let obj = channel(ensureSyncedChannelVoiceStates[16]);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = channel(ensureSyncedChannelVoiceStates[17]);
  const startTime = obj1.useStartTime(channel);
  let obj2 = channel(ensureSyncedChannelVoiceStates[18]);
  ensureSyncedChannelVoiceStates = obj2.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  let obj3 = channel(ensureSyncedChannelVoiceStates[19]);
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  let obj4 = channel(ensureSyncedChannelVoiceStates[20]);
  const items = [ReadStateStore, UserGuildSettingsStore];
  const items1 = [channel];
  const stateFromStoresObject = obj4.useStateFromStoresObject(
    items,
    () => ({
      hasUnread: ReadStateStore.hasUnread(channel.id),
      mentionCount: ReadStateStore.getMentionCount(channel.id),
      resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
    }),
    items1,
  );
  let hasUnread = stateFromStoresObject.hasUnread;
  ({ mentionCount: c4, resolvedUnreadSetting } = stateFromStoresObject);
  let obj5 = channel(ensureSyncedChannelVoiceStates[21]);
  const channelSubtitleData = obj5.getChannelSubtitleData(subtitle);
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
  let tmpResult = tmp(tmp2[22]);
  gameMentionsAsPlainText = tmpResult.useGameMentionsAsPlainText(text);
  let result = null;
  if (null != gameMentionsAsPlainText) {
    let obj7 = require("MarkupUtils");
    obj = { channelId: channel.id, linkVariant: textVariant, textVariant };
    result = obj7.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj);
  }
  tmpResult = tmp(tmp2[24]);
  obj = {
    expensive() {
      return getChannelA11yLabelDefault({
        channel,
        unread: hasUnread,
        mentionCount,
        voiceStates: ensureSyncedChannelVoiceStates,
        embeddedActivitiesCount,
      });
    },
    cheap: channel.name,
  };
  const items2 = [, ,];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const accessibilityLabelOrCheapFallbackUnsafe = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
  const effect = noop.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      const obj = { guild_id: null, channel_id: null };
      ({ guild_id: obj2.guild_id, id: obj2.channel_id } = channel);
      obj.track(constants.VOICE_CHANNEL_TOPIC_VIEWED, obj);
    }
  }, items2);
  if (result == null) {
    subtitle = undefined;
    if (channelSubtitleData != null) {
      subtitle = channelSubtitleData.subtitle;
    }
    result = subtitle;
  }
  obj1 = {
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
    children: null,
  };
  const tmp19 = jsx(require("ChannelInfo"), {
    channel,
    isChannelSelected: selected,
    isChannelCollapsed: collapsed,
    voiceStates: ensureSyncedChannelVoiceStates,
    enableConnectedUserLimit: true,
    enableActivities: true,
  });
  const intl = tmp(tmp2[30]).intl;
  obj1.accessibilityHint = intl.string(channel(ensureSyncedChannelVoiceStates[30]).t["9C444m"]);
  obj1.channel = channel;
  obj1.selected = selected;
  obj1.locked = locked;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  obj1.unread = hasUnread;
  obj1.resolvedUnreadSetting = resolvedUnreadSetting;
  obj1.subtitle = result;
  obj1.isChannelLive = null != activeEvent || null != startTime;
  obj1.channelInfo = tmp19;
  let tmp17Result = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      obj2 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
      const items3 = [channel];
      obj2.channels = items3;
      obj3 = {};
      obj3[channel.id] = ensureSyncedChannelVoiceStates;
      obj2.voiceStates = obj3;
      obj4 = { style: tmp21.voiceStatesCollapsed, children: null };
      const summarizedVoiceUsers = tmp(tmp2[31]).computeSummarizedVoiceUsers(obj2);
      obj5 = { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false };
      obj4.children = tmp17(tmp18(tmp2[32]), obj5);
      tmp17Result = tmp17(gameMentionsAsPlainText, obj4);
      const tmpResult1 = tmp(tmp2[31]);
    } else {
      const obj6 = { style: tmp21.voiceStates, children: null };
      obj7 = { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates };
      obj6.children = tmp17(tmp18(tmp2[33]), obj7);
      tmp17Result = tmp17(gameMentionsAsPlainText, obj6);
    }
  }
  obj1.children = tmp17Result;
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
    children: null,
  });
});
let obj1 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => SortedVoiceStateStore.getVoiceStates(channel.guild_id),
    items1,
  );
  const arr3 = useEmbeddedAppsForChannelDefault(channel);
  const items2 = [PermissionStore, CollapsedVoiceChannelStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items2, () => ({
    locked: !PermissionStore.can(constants2.CONNECT, channel),
    bypassLimit: PermissionStore.can(constants2.MOVE_MEMBERS, channel),
    collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id),
  }));
  obj = {
    channel,
    embeddedActivitiesCount: null,
    collapsed: null,
    voiceStates: null,
    selected: null,
    locked: null,
    bypassLimit: null,
    subtitle: null,
  };
  let num;
  ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
  if (arr3 != null) {
    num = arr3.length;
  }
  if (num == null) {
    num = 0;
  }
  obj.embeddedActivitiesCount = num;
  obj.collapsed = collapsed;
  let tmp5 = stateFromStores[channel.id];
  if (tmp5 == null) {
    tmp5 = NO_VOICE_STATES;
  }
  obj.voiceStates = tmp5;
  obj.selected = selected;
  obj.locked = locked;
  obj.bypassLimit = bypassLimit;
  obj.subtitle = subtitle;
  return (
    <closure_18
      channel={channel}
      embeddedActivitiesCount={null}
      collapsed={null}
      voiceStates={null}
      selected={null}
      locked={null}
      bypassLimit={null}
      subtitle={null}
    />
  );
});
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;
