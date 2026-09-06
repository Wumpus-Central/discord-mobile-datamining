// === Module 16992: VoiceOrStageChannel ===

// Module 16992 (VoiceOrStageChannel)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5425 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10116 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10913 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 10966 */;
import useStageChannelSpeakerVoiceStates from "useStageChannelSpeakerVoiceStates" /* 16238 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5418 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

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
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = guildStageVoice;
            const tmp21 = asyncRequireImpl;
            if (isGuildStageVoiceResult) {
              c2 = 2;
              c3 = 1;
              const obj1 = { value: tmp21(tmp20[13], tmp20.paths), done: false };
              return obj1;
            } else {
              c2 = 1;
              c3 = 1;
              const obj2 = { value: tmp21(tmp20[15], tmp20.paths), done: false };
              return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
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
          obj = { value, done: true };
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
const getThemedRippleConfig = fn(1182).getThemedRippleConfig;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
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
  const tmp3 = subtitle(4495)();
  let obj = channel(4411);
  const tmp6 = closure_18(subtitle(7873)(), obj.isThemeLight(tmp3));
  const tmp7 = subtitle(16977)();
  let obj1 = channel(9471);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(16343);
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj3 = channel(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj3.useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(channel));
  let obj4 = channel(5431);
  const stageParticipantsCount = obj4.useStageParticipantsCount(channel.id, channel(5425).StageChannelParticipantNamedIndex.AUDIENCE);
  let userLimit = stageParticipantsCount + voiceStates.length;
  closure_129_0 = channel;
  let obj5 = noop;
  closure_130_0 = asyncGeneratorStep(async (arg0) => {
    let guildId = arg0;
    c2 = 0;
    c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              let guild_id = guildId;
              closure_129_0 = guildId;
              closure_129_1 = undefined;
              guildId = guildId.getGuildId();
              closure_129_1 = guildId;
              if (null != guildId) {
                let tmp20Result = tmp20(tmp21[17]);
                if (tmp20Result.shouldShowMembershipVerificationGate(guildId)) {
                  c2 = 1;
                  c3 = 1;
                  const obj1 = { value: tmp20(tmp21[14])(tmp21[18], tmp21.paths), done: false };
                  return obj1;
                }
              }
              if (obj7.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess) {
                tmp20Result = tmp20(tmp21[19]);
                guild_id = guild_id.guild_id;
                const transitionToResult = tmp20Result.transitionTo(closure_1_11.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS));
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
            obj = { value, done: true };
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
  obj = { onPress: null, onLongPress: null };
  const items1 = [channel, callback];
  obj.onPress = noop.useCallback(() => {
    if (null != channel.guild_id) {
      transitionToGuild.transitionToGuild(tmp.guild_id);
    }
    hideLaunchPadDefault();
    subtitle(channel);
  }, items1);
  const items2 = [channel.id];
  obj.onLongPress = noop.useCallback(() => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id), items2);
  const arr5 = subtitle(12059)(channel);
  let obj7 = channel(16990);
  obj = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr5.length };
  const channelAccessibilityProps = obj7.getChannelAccessibilityProps(obj);
  let obj9 = channel(504);
  const items3 = [StageInstanceStore];
  const items4 = [channel.id];
  const stateFromStores1 = obj9.useStateFromStores(items3, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items4);
  if (stateFromStores1 != null) {
    let topic = stateFromStores1.topic;
  }
  const tmp15 = subtitle(4713)(channel, false);
  let arr8 = voiceStates;
  if (channel.isGuildStageVoice()) {
    arr8 = speakerVoiceStates;
  }
  const mapped = arr8.map((user) => user.user);
  const tmp17 = subtitle(16986)();
  let tmp5Result = tmp5(4982);
  const fontScale = tmp5Result.useFontScale();
  tmp5Result = tmp5(504);
  const items5 = [LocaleStore];
  const stateFromStores2 = tmp5Result.useStateFromStores(items5, () => locale.locale);
  const tmp4 = subtitle(7873)();
  const items6 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = subtitle(5007)(channel.id));
  const effect = obj5.useEffect(() => {
    let tmp2 = null != subtitle && typeof tmp !== "string";
    if (tmp2) {
      tmp2 = "voice" === tmp.type;
    }
    if (tmp2) {
      const messagePreviewASTCache = MessagePreviewMarkup.messagePreviewASTCache;
      messagePreviewASTCache.del(tmp.text);
    }
  }, items6);
  let tmpResult = tmp(16978);
  const items7 = [tmp6.pressable, ];
  let num = 0;
  if (voiceStates.length > 0) {
    num = 6;
  }
  obj1 = { style: items7, underlayColor: tmp17, androidRippleConfig: getThemedRippleConfig({ color: tmp17 }) };
  items7[1] = { paddingBottom: num, borderRadius: tmp7.container.borderRadius };
  const merged = Object.assign(obj);
  if (!channel.isGuildStageVoice()) {
    const merged1 = Object.assign(channelAccessibilityProps);
    obj2 = { channel, subtitle: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, mentionBadge: null, live: null, end: null, connected: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: true };
    tmpResult = tmp(16990);
    if (topic == null) {
      topic = subtitle;
    }
    obj3 = { subtitle: topic, channelId: id, guildId: guild_id, connected: isConnectedToVoiceChannel };
    obj2.subtitle = tmp5(16988).renderChannelSubtitle(obj3);
    if (!unread) {
      unread = mentionCount > 0;
    }
    obj2.unread = unread;
    obj2.resolvedUnreadSetting = stateFromStores;
    obj2.mentionCount = mentionCount;
    obj4 = { mentionCount, locale: stateFromStores2 };
    obj2.mentionBadge = tmp(16984)(obj4);
    obj2.live = null != stateFromStores1;
    if (arr5.length > 0) {
      obj5 = { embeddedApps: arr5, size: tmp7.joinVoiceButton.icon.gameSize };
      let tmp32 = closure_14(tmp(16232), obj5);
      let tmp31 = closure_14;
    } else {
      tmp31 = closure_14;
      const obj6 = { channel, voiceStates };
      tmp32 = closure_14(tmp5(12291).VocalChannelJoinButton, obj6);
    }
    obj2.end = tmp32;
    obj2.connected = isConnectedToVoiceChannel;
    obj2.fontScale = fontScale;
    obj2.isSubscriptionGated = isSubscriptionGated;
    obj2.needSubscriptionToAccess = needSubscriptionToAccess;
    const items8 = [tmpResult(obj2), ];
    let tmp31Result = null;
    if (voiceStates.length > 0) {
      obj7 = { style: null, children: null };
      const items9 = [tmp6.voiceUsers, tmp7.voiceUsers.margin];
      obj7.style = items9;
      const obj8 = { users: mapped, max: 5, guildId: channel.guild_id, audienceCount: stageParticipantsCount };
      obj7.children = tmp31(tmp(16993), obj8);
      tmp31Result = tmp31(View, obj7);
    }
    items8[1] = tmp31Result;
    obj1.children = items8;
    return tmpResult(closure_15(tmp5(5123).PressableHighlight, obj1));
  } else {
    const intl = tmp5(1114).intl;
    obj9 = { channelName: tmp15 };
    if (null == channel.userLimit) {
      let formatToPlainStringResult = intl.formatToPlainString(tmp5(1114).t.TPPk2T, obj9);
      if (userLimit > 0) {
        const intl3 = tmp5(1114).intl;
        const obj10 = { channelName: tmp15, userCount: userLimit };
        formatToPlainStringResult = intl3.formatToPlainString(tmp5(1114).t["7yr3Qc"], obj10);
      }
      const obj11 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult };
    }
    const intl2 = tmp5(1114).intl;
    const obj12 = { channelName: tmp15, userCount: userLimit, limit: null };
    userLimit = channel.userLimit;
    obj12.limit = userLimit;
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(1114).t.rhh6Ev, obj12);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default noop.memo(function VoiceOrStageChannel(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel));
  const items1 = [StageChannelParticipantStore];
  obj = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: channel(504).useStateFromStoresArray(items1, () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === channel(closure_1_2[32]).StageChannelParticipantTypes.VOICE);
      return found.map(useStageChannelSpeakerVoiceStates.transformParticipantToSortedVoiceState);
    }),
    subtitle: channel.customSubtitle
  };
  return closure_14(closure_20, obj);
});