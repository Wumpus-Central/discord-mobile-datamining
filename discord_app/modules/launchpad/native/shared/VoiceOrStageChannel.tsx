// === Module 17237: VoiceOrStageChannel ===

// Module 17237 (VoiceOrStageChannel)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5513 */;
import transitionToGuild from "transitionToGuild" /* 7456 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10265 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11070 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 11125 */;
import useStageChannelSpeakerVoiceStates from "useStageChannelSpeakerVoiceStates" /* 16398 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5506 */;
import StageInstanceStore from "StageInstanceStore" /* 1963 */;
import LocaleStore from "LocaleStore" /* 2026 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4821 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4664 */;

require = fn;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
  let guildStageVoice = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            closure_129_0 = guildStageVoice;
            const tmp21 = asyncRequireImpl;
            if (isGuildStageVoiceResult) {
              c2 = 2;
              c3 = 1;
              const obj4 = { value: tmp21(dependencyMap[13], dependencyMap.paths), done: false };
              return obj4;
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp21(dependencyMap[15], dependencyMap.paths), done: false };
              return obj5;
            }
            isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              value.openGuildVoiceModal(closure_129_0, "Channel List");
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            value.connectAndOpen(closure_129_0);
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
};
const View = fn(17).View;
const Routes = fn(1074).Routes;
const getThemedRippleConfig = fn(1181).getThemedRippleConfig;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4640);
let closure_18 = createStyles.createStyles(() => ({ voiceUsers: { display: "flex", flexDirection: "row", paddingRight: 16, marginTop: -2 }, pressable: { flex: 1 } }));
let closure_19 = [];
let closure_20 = noop.memo(function UnmemoedVoiceOrStageChannelBase(channel) {
  channel = channel.channel;
  const subtitle = channel.subtitle;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = closure_19;
  }
  let speakerVoiceStates = channel.speakerVoiceStates;
  if (speakerVoiceStates === undefined) {
    speakerVoiceStates = closure_19;
  }
  ({ id, guild_id } = channel);
  const tmp3 = subtitle(4574)();
  const tmp4 = subtitle(7994)();
  const tmp6 = closure_18(tmp4, channel(4491).isThemeLight(tmp3));
  const tmp7 = subtitle(16906)();
  let obj = channel(4491);
  const isConnectedToVoiceChannel = channel(9625).useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(9625);
  const baseChannelUnreadBadgeState = channel(16504).useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj3 = channel(16504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(channel));
  let obj4 = channel(504);
  const stageParticipantsCount = channel(5519).useStageParticipantsCount(channel.id, channel(5513).StageChannelParticipantNamedIndex.AUDIENCE);
  let userLimit = stageParticipantsCount + voiceStates.length;
  closure_129_0 = channel;
  closure_130_0 = asyncGeneratorStep(async (arg0) => {
    let guildId = arg0;
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              let guild_id = guildId;
              closure_129_0 = guildId;
              closure_129_1 = undefined;
              guildId = guildId.getGuildId();
              closure_129_1 = guildId;
              if (null != guildId) {
                if (tmp20Result.shouldShowMembershipVerificationGate(guildId)) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: tmp20(tmp21[14])(tmp21[18], tmp21.paths), done: false };
                  return obj4;
                }
                tmp20Result = tmp20(tmp21[17]);
              }
              if (obj7.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess) {
                guild_id = guild_id.guild_id;
                const tmp20Result2 = tmp20(tmp21[19]);
                const transitionToResult = tmp20(tmp21[19]).transitionTo(closure_1_11.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS));
              } else {
                closure_1_16(guild_id);
              }
              obj7 = guildId(c2[16]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else {
            if (arg0 !== 2) {
              const result = value.openMemberVerificationModal(closure_129_1, () => closure_2_16(guildId));
              c3 = 3;
            }
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp15) {
          c3 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = channel.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  closure_129_1 = callback;
  let obj7 = { onPress: null, onLongPress: null };
  const items1 = [channel, callback];
  obj7.onPress = noop.useCallback(() => {
    if (null != channel.guild_id) {
      transitionToGuild.transitionToGuild(channel.guild_id);
    }
    hideLaunchPadDefault();
    subtitle(channel);
  }, items1);
  const items2 = [channel.id];
  obj7.onLongPress = noop.useCallback(() => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id), items2);
  const arr5 = subtitle(12210)(channel);
  const obj5 = channel(5519);
  const channelAccessibilityProps = channel(16905).getChannelAccessibilityProps({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr5.length });
  const obj8 = channel(16905);
  const obj9 = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr5.length };
  const items3 = [StageInstanceStore];
  const items4 = [channel.id];
  const stateFromStores1 = channel(504).useStateFromStores(items3, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items4);
  if (stateFromStores1 != null) {
    let topic = stateFromStores1.topic;
  }
  const tmp15 = subtitle(4793)(channel, false);
  let arr8 = voiceStates;
  if (channel.isGuildStageVoice()) {
    arr8 = speakerVoiceStates;
  }
  const mapped = arr8.map((user) => user.user);
  const tmp17 = subtitle(17232)();
  const obj10 = channel(504);
  const fontScale = channel(5069).useFontScale();
  const tmp5Result = channel(5069);
  const items5 = [LocaleStore];
  const stateFromStores2 = channel(504).useStateFromStores(items5, () => locale.locale);
  const tmp5Result3 = channel(504);
  const items6 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = subtitle(5095)(channel.id));
  const effect = noop.useEffect(() => {
    let tmp2 = null != subtitle && typeof subtitle !== "string";
    if (tmp2) {
      tmp2 = "voice" === subtitle.type;
    }
    if (tmp2) {
      const messagePreviewASTCache = MessagePreviewMarkup.messagePreviewASTCache;
      messagePreviewASTCache.del(subtitle.text);
    }
  }, items6);
  const tmp20 = subtitle(5095)(channel.id);
  const items7 = [tmp6.pressable, ];
  let num = 0;
  if (voiceStates.length > 0) {
    num = 6;
  }
  const obj11 = { style: items7, underlayColor: tmp17, androidRippleConfig: getThemedRippleConfig({ color: tmp17 }) };
  items7[1] = { paddingBottom: num, borderRadius: tmp7.container.borderRadius };
  const merged = Object.assign(obj7);
  if (!channel.isGuildStageVoice()) {
    const merged1 = Object.assign(channelAccessibilityProps);
    const obj12 = { channel, subtitle: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, mentionBadge: null, live: null, end: null, connected: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: true };
    const tmpResult2 = tmp(16905);
    if (topic == null) {
      topic = subtitle;
    }
    const obj13 = { subtitle: topic, channelId: id, guildId: guild_id, connected: isConnectedToVoiceChannel };
    obj12.subtitle = tmp5(17234).renderChannelSubtitle(obj13);
    if (!unread) {
      unread = mentionCount > 0;
    }
    obj12.unread = unread;
    obj12.resolvedUnreadSetting = stateFromStores;
    obj12.mentionCount = mentionCount;
    const obj14 = { mentionCount, locale: stateFromStores2 };
    obj12.mentionBadge = tmp(17230)(obj14);
    obj12.live = null != stateFromStores1;
    if (arr5.length > 0) {
      const obj15 = { embeddedApps: arr5, size: tmp7.joinVoiceButton.icon.gameSize };
      let tmp32 = closure_14(tmp(16392), obj15);
      let tmp31 = closure_14;
    } else {
      tmp31 = closure_14;
      const obj16 = { channel, voiceStates };
      tmp32 = closure_14(tmp5(12443).VocalChannelJoinButton, obj16);
    }
    obj12.end = tmp32;
    obj12.connected = isConnectedToVoiceChannel;
    obj12.fontScale = fontScale;
    obj12.isSubscriptionGated = isSubscriptionGated;
    obj12.needSubscriptionToAccess = needSubscriptionToAccess;
    const items8 = [tmpResult2(obj12), ];
    let tmp31Result = null;
    if (voiceStates.length > 0) {
      const obj17 = { style: null, children: null };
      const items9 = [tmp6.voiceUsers, tmp7.voiceUsers.margin];
      obj17.style = items9;
      const obj18 = { users: mapped, max: 5, guildId: channel.guild_id, audienceCount: stageParticipantsCount };
      obj17.children = tmp31(tmp(17238), obj18);
      tmp31Result = tmp31(View, obj17);
    }
    items8[1] = tmp31Result;
    obj11.children = items8;
    return tmpResult(closure_15(tmp5(5210).PressableHighlight, obj11));
  } else {
    const intl = tmp5(1115).intl;
    const obj19 = { channelName: tmp15 };
    if (null == channel.userLimit) {
      let formatToPlainStringResult = intl.formatToPlainString(tmp5(1115).t.TPPk2T, obj19);
      if (userLimit > 0) {
        const intl4 = tmp5(1115).intl;
        const obj20 = { channelName: tmp15, userCount: userLimit };
        formatToPlainStringResult = intl4.formatToPlainString(tmp5(1115).t["7yr3Qc"], obj20);
      }
      const obj21 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, accessibilityHint: null };
      const intl3 = tmp5(1115).intl;
      obj21.accessibilityHint = intl3.string(tmp5(1115).t["9C444m"]);
    }
    const intl2 = tmp5(1115).intl;
    const obj22 = { channelName: tmp15, userCount: userLimit, limit: null };
    userLimit = channel.userLimit;
    obj22.limit = userLimit;
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(1115).t.rhh6Ev, obj22);
  }
  tmpResult = subtitle(17228);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default noop.memo(function VoiceOrStageChannel(channel) {
  channel = channel.channel;
  const items = [SortedVoiceStateStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel));
  const obj = channel(504);
  const items1 = [StageChannelParticipantStore];
  const obj2 = channel(504);
  return closure_14(closure_20, {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: channel(504).useStateFromStoresArray(items1, () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === channel(closure_1_2[32]).StageChannelParticipantTypes.VOICE);
      return found.map(useStageChannelSpeakerVoiceStates.transformParticipantToSortedVoiceState);
    }),
    subtitle: channel.customSubtitle
  });
});