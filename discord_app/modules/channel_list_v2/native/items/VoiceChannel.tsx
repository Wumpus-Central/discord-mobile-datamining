// discord_app/modules/channel_list_v2/native/items/VoiceChannel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useEmbeddedAppsDefault from "../../../activities/useEmbeddedAppsForChannel.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/CollapsedVoiceChannelStore.tsx";
import closure_7 from "../../../../stores/PermissionStore.tsx";
import closure_8 from "../../../../stores/ReadStateStore.tsx";
import closure_9 from "../../../../stores/UserGuildSettingsStore.tsx";
import closure_10 from "../../../../stores/views/SortedVoiceStateStore.tsx";
import { NO_VOICE_STATES } from "../../../../stores/views/SortedVoiceStateStore.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function _handleVoiceChannelPress() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0, openMemberVerificationModal) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw openMemberVerificationModal;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = openMemberVerificationModal;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw openMemberVerificationModal;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = openMemberVerificationModal;
              return obj;
            } else {
              let guildId = tmp4;
              guildId = undefined;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                let obj3 = guildId(paths[12]);
                if (obj3.shouldShowMembershipVerificationGate(guildId)) {
                  paths = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = tmp10(tmp11[14])(tmp11[13], tmp11.paths);
                  return obj1;
                }
                tmp10 = guildId;
              }
              paths = 2;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = guildId(paths[14])(paths[15], paths.paths);
              return obj2;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw openMemberVerificationModal;
            } else if (arg0 === 2) {
              c3 = 3;
              obj3 = { value: null, done: true };
              obj3[0] = openMemberVerificationModal;
              return obj3;
            } else {
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = openMemberVerificationModal.openMemberVerificationModal(guildId);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw openMemberVerificationModal;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = openMemberVerificationModal;
            return obj;
          } else {
            openMemberVerificationModal.openGuildVoiceModal(guildId, "Channel List");
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = importAllResult;
({ AnalyticEvents: closure_12, Permissions: map1 } = ME);
let obj = { channelInfo: null, voiceStates: null, voiceStatesCollapsed: null, container: null };
obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, maxHeight: 1 };
obj[0] = obj;
obj[1] = { marginLeft: 36, marginTop: -4, marginBottom: 2 };
obj[2] = { marginLeft: 16 };
obj[3] = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
let closure_17 = importAllResult.memo((channel) => {
  channel = channel.channel;
  ({ selected, collapsed, subtitle, embeddedActivitiesCount: importDefault } = channel);
  let ensureSyncedChannelVoiceStates;
  let hasUnread;
  let gameMentionsAsPlainText;
  ({ locked, voiceStates } = channel);
  obj = channel(ensureSyncedChannelVoiceStates[16]);
  const activeEvent = obj.useActiveEvent(channel.id);
  obj1 = channel(ensureSyncedChannelVoiceStates[17]);
  const startTime = obj1.useStartTime(channel);
  let obj2 = channel(ensureSyncedChannelVoiceStates[18]);
  ensureSyncedChannelVoiceStates = obj2.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  let obj3 = channel(ensureSyncedChannelVoiceStates[19]);
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  let obj4 = channel(ensureSyncedChannelVoiceStates[20]);
  const items = [closure_8, closure_9];
  const items1 = [channel];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => ({ hasUnread: closure_1_8.hasUnread(channel.id), mentionCount: closure_1_8.getMentionCount(channel.id), resolvedUnreadSetting: closure_1_9.resolveUnreadSetting(channel) }), items1);
  hasUnread = stateFromStoresObject.hasUnread;
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
    let obj7 = importDefault(tmp2[23]);
    obj = { channelId: null, linkVariant: "text-xs/medium" };
    obj[0] = channel.id;
    result = obj7.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj);
  }
  tmpResult = tmp(tmp2[24]);
  obj = {
    expensive() {
      return closure_1_1(ensureSyncedChannelVoiceStates[25])({ channel, unread: hasUnread, mentionCount: c4, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount: closure_1 });
    },
    cheap: channel.name
  };
  const items2 = [, , ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const accessibilityLabelOrCheapFallbackUnsafe = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
  const effect = importAllResult.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      obj = closure_1_1(ensureSyncedChannelVoiceStates[26]);
      obj = { guild_id: null, channel_id: null };
      ({ guild_id: obj2[0], id: obj2[1] } = channel);
      obj.track(closure_1_12.VOICE_CHANNEL_TOPIC_VIEWED, obj);
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
      return (function handleVoiceChannelPress(channel) {
        const self = this;
        const apply = closure_16.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(channel);
    },
    onLongPress() {
      const result = channel(ensureSyncedChannelVoiceStates[29]).openChannelLongPressActionSheet(channel.id);
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
  const tmp18 = jsx(importDefault(ensureSyncedChannelVoiceStates[27]), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  const intl = tmp(tmp2[30]).intl;
  obj1[6] = intl.string(channel(ensureSyncedChannelVoiceStates[30]).t["9C444m"]);
  obj1[7] = channel;
  obj1[8] = selected;
  obj1[9] = locked;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  obj1[10] = hasUnread;
  obj1[11] = resolvedUnreadSetting;
  obj1[12] = result;
  obj1[13] = null != activeEvent || null != startTime;
  obj1[14] = tmp18;
  let tmp16Result = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      obj2 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
      const items3 = [channel];
      obj2[0] = items3;
      obj3 = {};
      obj3[channel.id] = ensureSyncedChannelVoiceStates;
      obj2[3] = obj3;
      obj4 = { style: null, children: null };
      obj4[0] = tmp20.voiceStatesCollapsed;
      const summarizedVoiceUsers = tmp(tmp2[31]).computeSummarizedVoiceUsers(obj2);
      obj5 = { users: null, max: 8, guildId: null, renderIcon: false };
      obj5[0] = summarizedVoiceUsers;
      obj5[2] = channel.guild_id;
      obj4[1] = tmp16(tmp17(tmp2[32]), obj5);
      tmp16Result = tmp16(gameMentionsAsPlainText, obj4);
      const tmpResult1 = tmp(tmp2[31]);
    } else {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp20.voiceStates;
      obj7 = { channel: null, collapsed: null, voiceStates: null };
      obj7[0] = channel;
      obj7[1] = collapsed;
      obj7[2] = ensureSyncedChannelVoiceStates;
      obj6[1] = tmp16(tmp17(tmp2[33]), obj7);
      tmp16Result = tmp16(gameMentionsAsPlainText, obj6);
    }
  }
  obj1[15] = tmp16Result;
  return jsx(importDefault(ensureSyncedChannelVoiceStates[28]), {
    onPress() {
      return (function handleVoiceChannelPress(channel) {
        const self = this;
        const apply = closure_16.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(channel);
    },
    onLongPress() {
      const result = channel(ensureSyncedChannelVoiceStates[29]).openChannelLongPressActionSheet(channel.id);
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
let obj1 = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  obj = channel(589);
  const items = [closure_10];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getVoiceStates(channel.guild_id), items1);
  const arr3 = useEmbeddedAppsDefault(channel);
  const items2 = [closure_7, closure_6];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items2, () => ({ locked: !closure_1_7.can(closure_1_13.CONNECT, channel), bypassLimit: closure_1_7.can(closure_1_13.MOVE_MEMBERS, channel), collapsed: closure_1_6.isCollapsed(channel.id) }));
  obj = { channel, embeddedActivitiesCount: null, collapsed: null, voiceStates: null, selected: null, locked: null, bypassLimit: null, subtitle: null };
  let num;
  ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
  if (arr3 != null) {
    num = arr3.length;
  }
  if (num == null) {
    num = 0;
  }
  obj[1] = num;
  obj[2] = collapsed;
  let tmp5 = stateFromStores[channel.id];
  if (tmp5 == null) {
    tmp5 = NO_VOICE_STATES;
  }
  obj[3] = tmp5;
  obj[4] = selected;
  obj[5] = locked;
  obj[6] = bypassLimit;
  obj[7] = subtitle;
  return <closure_17 channel={channel} embeddedActivitiesCount={null} collapsed={null} voiceStates={null} selected={null} locked={null} bypassLimit={null} subtitle={null} />;
});
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default memoResult;
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;