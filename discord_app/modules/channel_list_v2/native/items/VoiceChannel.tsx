import generateOldThreadCutoff from "generateOldThreadCutoff";
import importAllResult from "useIsConnectedToVoiceChannel";
import { View } from "useStartTime";
import handleConnectionOpen from "handleConnectionOpen";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import closure_8 from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { NO_VOICE_STATES } from "getVoiceStatesForGuild";
import ME from "ME";
import { jsx } from "getChannelSubtitleData";

let closure_12;
let map1;
const require = arg1;
function _handleVoiceChannelPress() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, openMemberVerificationModal) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw openMemberVerificationModal;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = openMemberVerificationModal;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
                  const obj1 = { value: null, done: false };
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _handleVoiceChannelPress = tmp;
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
obj = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, maxHeight: 1 };
obj[0] = obj;
obj[1] = { marginLeft: 36, marginTop: -4, marginBottom: 2 };
obj[2] = { marginLeft: 16 };
obj[3] = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
let closure_17 = importAllResult.memo((channel) => {
  let collapsed;
  let embeddedActivitiesCount;
  let hasUnread;
  let locked;
  let mentionCount;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let voiceStates;
  channel = channel.channel;
  ({ selected, collapsed, subtitle } = channel);
  let gameMentionsAsPlainText;
  ({ locked, voiceStates, embeddedActivitiesCount } = channel);
  let obj = channel(8325);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = channel(15218);
  const startTime = obj1.useStartTime(channel);
  let obj2 = channel(15221);
  const ensureSyncedChannelVoiceStates = obj2.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  let obj3 = channel(10253);
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  let obj4 = channel(589);
  const items = [closure_8, updateUserGuildSettingsInternal];
  const items1 = [channel];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => ({ hasUnread: outer1_8.hasUnread(channel.id), mentionCount: outer1_8.getMentionCount(channel.id), resolvedUnreadSetting: outer1_9.resolveUnreadSetting(channel) }), items1);
  ({ hasUnread, mentionCount, resolvedUnreadSetting } = stateFromStoresObject);
  let obj5 = channel(15211);
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
  let tmpResult = tmp(9075);
  gameMentionsAsPlainText = tmpResult.useGameMentionsAsPlainText(text);
  let result = null;
  if (null != gameMentionsAsPlainText) {
    let obj7 = gameMentionsAsPlainText(4183);
    obj = { channelId: null, linkVariant: "text-xs/medium" };
    obj[0] = channel.id;
    result = obj7.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj);
  }
  tmpResult = tmp(7740);
  let tmp13;
  if (!tmpResult.shouldSkipAccessibilityLabels()) {
    obj = { channel: null, unread: null, mentionCount: null, voiceStates: null, embeddedActivitiesCount: null };
    obj[0] = channel;
    obj[1] = hasUnread;
    obj[2] = mentionCount;
    obj[3] = ensureSyncedChannelVoiceStates;
    obj[4] = embeddedActivitiesCount;
    tmp13 = gameMentionsAsPlainText(8320)(obj);
  }
  const items2 = [, , ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const effect = importAllResult.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      let obj = gameMentionsAsPlainText(outer1_2[26]);
      obj = { guild_id: null, channel_id: null };
      ({ guild_id: obj2[0], id: obj2[1] } = channel);
      obj.track(outer1_12.VOICE_CHANNEL_TOPIC_VIEWED, obj);
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
      const result = channel(outer1_2[29]).openChannelLongPressActionSheet(channel.id);
    },
    style: obj.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: tmp13,
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
  const tmp19 = jsx(gameMentionsAsPlainText(15212), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  const intl = tmp(1236).intl;
  obj1[6] = intl.string(channel(1236).t["9C444m"]);
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
  obj1[14] = tmp19;
  let tmp17Result = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      obj2 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
      const items3 = [channel];
      obj2[0] = items3;
      obj3 = {};
      obj3[channel.id] = ensureSyncedChannelVoiceStates;
      obj2[3] = obj3;
      obj4 = { style: null, children: null };
      obj4[0] = tmp21.voiceStatesCollapsed;
      const summarizedVoiceUsers = tmp(4376).computeSummarizedVoiceUsers(obj2);
      obj5 = { users: null, max: 8, guildId: null, renderIcon: false };
      obj5[0] = summarizedVoiceUsers;
      obj5[2] = channel.guild_id;
      obj4[1] = tmp17(tmp18(15135), obj5);
      tmp17Result = tmp17(View, obj4);
      const tmpResult1 = tmp(4376);
    } else {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp21.voiceStates;
      obj7 = { channel: null, collapsed: null, voiceStates: null };
      obj7[0] = channel;
      obj7[1] = collapsed;
      obj7[2] = ensureSyncedChannelVoiceStates;
      obj6[1] = tmp17(tmp18(15129), obj7);
      tmp17Result = tmp17(View, obj6);
    }
  }
  obj1[15] = tmp17Result;
  return jsx(gameMentionsAsPlainText(15124), {
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
      const result = channel(outer1_2[29]).openChannelLongPressActionSheet(channel.id);
    },
    style: obj.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: tmp13,
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
let obj1 = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
const memoResult = importAllResult.memo((channel) => {
  let bypassLimit;
  let collapsed;
  let locked;
  let selected;
  let subtitle;
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  let obj = channel(589);
  const items = [getVoiceStatesForGuild];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getVoiceStates(channel.guild_id), items1);
  const arr3 = importDefault(11247)(channel);
  const items2 = [getUncachedChannelPermissions, handleConnectionOpen];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items2, () => ({ locked: !outer1_7.can(outer1_13.CONNECT, channel), bypassLimit: outer1_7.can(outer1_13.MOVE_MEMBERS, channel), collapsed: outer1_6.isCollapsed(channel.id) }));
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default memoResult;
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;