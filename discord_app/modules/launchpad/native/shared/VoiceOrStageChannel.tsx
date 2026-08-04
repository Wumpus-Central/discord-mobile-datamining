import _getSystemLocale from "_getSystemLocale";
import importAllResult from "transitionTo";
import { View } from "shouldShowMembershipVerificationGate";
import getActiveStageChannelIds from "getActiveStageChannelIds";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import closure_8 from "_getSystemLocale";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { Routes } from "ME";
import { getThemedRippleConfig } from "semanticColor";
import { StaticChannelRoute } from "set";
import jsxProd from "hideLaunchPad";
import createCacheKey from "createCacheKey";

let closure_14;
let closure_15;
const require = arg1;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = _handleVoiceOrStageChannelConnectPress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, openGuildVoiceModal) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw openGuildVoiceModal;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = openGuildVoiceModal;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw openGuildVoiceModal;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = openGuildVoiceModal;
              return obj;
            } else {
              let closure_1 = tmp2;
              const tmp22 = guildStageVoice(table[14]);
              if (isGuildStageVoiceResult) {
                table = 2;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = tmp22(tmp21[13], tmp21.paths);
                return obj1;
              } else {
                table = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp22(tmp21[15], tmp21.paths);
                return obj2;
              }
              isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw openGuildVoiceModal;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = openGuildVoiceModal;
                return obj3;
              } else {
                openGuildVoiceModal.openGuildVoiceModal(guildStageVoice, "Channel List");
                c3 = 3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw openGuildVoiceModal;
            } else if (arg0 !== 2) {
              openGuildVoiceModal.connectAndOpen(guildStageVoice);
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = openGuildVoiceModal;
            return obj;
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _handleVoiceOrStageChannelConnectPress = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = importAllResult;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_18 = createCacheKey.createStyles(() => ({ voiceUsers: { display: "flex", flexDirection: "row", paddingRight: 16, marginTop: -2 }, pressable: { flex: 1 } }));
let closure_19 = [];
let closure_20 = importAllResult.memo(function UnmemoedVoiceOrStageChannelBase(channel) {
  let guild_id;
  let id;
  let isSubscriptionGated;
  let mentionCount;
  let needSubscriptionToAccess;
  let unread;
  channel = channel.channel;
  let _require = channel;
  const subtitle = channel.subtitle;
  let callback = subtitle;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = closure_19;
  }
  let speakerVoiceStates = channel.speakerVoiceStates;
  if (speakerVoiceStates === undefined) {
    speakerVoiceStates = closure_19;
  }
  ({ id, guild_id } = channel);
  const tmp3 = callback(4221)();
  let obj = _require(4131);
  const tmp6 = callback3(callback(8203)(), obj.isThemeLight(tmp3));
  const tmp7 = callback(15922)();
  let obj1 = _require(9659);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = _require(15339);
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj3 = _require(589);
  const items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_9.resolveUnreadSetting(closure_0));
  let obj4 = _require(5115);
  const stageParticipantsCount = obj4.useStageParticipantsCount(channel.id, _require(5109).StageChannelParticipantNamedIndex.AUDIENCE);
  let userLimit = stageParticipantsCount + voiceStates.length;
  _require = channel;
  callback = undefined;
  let obj5 = importAllResult;
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, openMemberVerificationModal) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw openMemberVerificationModal;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = openMemberVerificationModal;
              return obj;
            } else {
              let guildId = tmp2;
              let guild_id = guildId;
              guildId = undefined;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                let tmp21Result = tmp21(tmp22[17]);
                if (tmp21Result.shouldShowMembershipVerificationGate(guildId)) {
                  table = 1;
                  c3 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = tmp21(tmp22[14])(tmp22[18], tmp22.paths);
                  return obj1;
                }
              }
              if (obj7.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess) {
                tmp21Result = tmp21(tmp22[19]);
                guild_id = guild_id.guild_id;
                const transitionToResult = tmp21Result.transitionTo(outer1_11.CHANNEL(guild_id, outer1_13.ROLE_SUBSCRIPTIONS));
              } else {
                outer1_16(guild_id);
              }
              obj7 = guildId(table[16]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw openMemberVerificationModal;
          } else {
            if (arg0 !== 2) {
              const result = openMemberVerificationModal.openMemberVerificationModal(guildId, () => outer1_16(closure_0));
              c3 = 3;
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = openMemberVerificationModal;
            return obj;
          }
        } catch (tmp15) {
          c3 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  callback = importAllResult.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  obj = {
    onPress: importAllResult.useCallback(() => {
      if (null != lib.guild_id) {
        lib(outer1_2[20]).transitionToGuild(tmp.guild_id);
        const obj = lib(outer1_2[20]);
      }
      callback(outer1_2[21])();
      callback(lib);
    }, items1),
    onLongPress: importAllResult.useCallback(() => lib(outer1_2[22]).openChannelLongPressActionSheet(lib.id), items2)
  };
  items1 = [channel, callback];
  items2 = [channel.id];
  const arr5 = callback(11358)(channel);
  let obj7 = _require(15935);
  obj = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr5.length };
  const channelAccessibilityProps = obj7.getChannelAccessibilityProps(obj);
  let obj9 = _require(589);
  const items3 = [handleStageInstanceCreateOrUpdate];
  const items4 = [channel.id];
  const stateFromStores1 = obj9.useStateFromStores(items3, () => outer1_7.getStageInstanceByChannel(lib.id), items4);
  if (stateFromStores1 != null) {
    let topic = stateFromStores1.topic;
  }
  const tmp15 = callback(4475)(channel, false);
  let arr8 = voiceStates;
  if (channel.isGuildStageVoice()) {
    arr8 = speakerVoiceStates;
  }
  const mapped = arr8.map((user) => user.user);
  const tmp17 = callback(15931)();
  let tmp5Result = tmp5(4701);
  const fontScale = tmp5Result.useFontScale();
  tmp5Result = tmp5(589);
  const items5 = [closure_8];
  const stateFromStores2 = tmp5Result.useStateFromStores(items5, () => locale.locale);
  const tmp4 = callback(8203)();
  const items6 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = callback(4726)(channel.id));
  const effect = obj5.useEffect(() => {
    let tmp2 = null != callback && typeof tmp === "_iter";
    if (tmp2) {
      tmp2 = "voice" === tmp.type;
    }
    if (tmp2) {
      const messagePreviewASTCache = lib(outer1_2[38]).messagePreviewASTCache;
      messagePreviewASTCache.del(tmp.text);
    }
  }, items6);
  let tmpResult = tmp(15923);
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
    obj2 = { channel: null, subtitle: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, mentionBadge: null, live: null, end: null, connected: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: true };
    obj2[0] = channel;
    tmpResult = tmp(15935);
    if (topic == null) {
      topic = subtitle;
    }
    obj3 = { subtitle: null, channelId: null, guildId: null, connected: null };
    obj3[0] = topic;
    obj3[1] = id;
    obj3[2] = guild_id;
    obj3[3] = isConnectedToVoiceChannel;
    obj2[1] = tmp5(15933).renderChannelSubtitle(obj3);
    if (!unread) {
      unread = mentionCount > 0;
    }
    obj2[2] = unread;
    obj2[3] = stateFromStores;
    obj2[4] = mentionCount;
    obj4 = { mentionCount: null, locale: null };
    obj4[0] = mentionCount;
    obj4[1] = stateFromStores2;
    obj2[5] = tmp(15929)(obj4);
    obj2[6] = null != stateFromStores1;
    if (arr5.length > 0) {
      obj5 = { embeddedApps: null, size: null };
      obj5[0] = arr5;
      obj5[1] = tmp7.joinVoiceButton.icon.gameSize;
      let tmp32 = callback2(tmp(15232), obj5);
      let tmp31 = callback2;
    } else {
      tmp31 = callback2;
      const obj6 = { channel: null, voiceStates: null };
      obj6[0] = channel;
      obj6[1] = voiceStates;
      tmp32 = callback2(tmp5(11575).VocalChannelJoinButton, obj6);
    }
    obj2[7] = tmp32;
    obj2[8] = isConnectedToVoiceChannel;
    obj2[9] = fontScale;
    obj2[10] = isSubscriptionGated;
    obj2[11] = needSubscriptionToAccess;
    const items8 = [tmpResult(obj2), ];
    let tmp31Result = null;
    if (voiceStates.length > 0) {
      obj7 = { style: null, children: null };
      const items9 = [tmp6.voiceUsers, tmp7.voiceUsers.margin];
      obj7[0] = items9;
      const obj8 = { users: null, max: 5, guildId: null, audienceCount: null };
      obj8[0] = mapped;
      obj8[2] = channel.guild_id;
      obj8[3] = stageParticipantsCount;
      obj7[1] = tmp31(tmp(15938), obj8);
      tmp31Result = tmp31(View, obj7);
    }
    items8[1] = tmp31Result;
    obj1.children = items8;
    return tmpResult(closure_15(tmp5(4812).PressableHighlight, obj1));
  } else {
    const intl = tmp5(1236).intl;
    obj9 = { channelName: null };
    obj9[0] = tmp15;
    if (null == channel.userLimit) {
      let formatToPlainStringResult = intl.formatToPlainString(tmp5(1236).t.TPPk2T, obj9);
      if (userLimit > 0) {
        const intl3 = tmp5(1236).intl;
        const obj10 = { channelName: null, userCount: null };
        obj10[0] = tmp15;
        obj10[1] = userLimit;
        formatToPlainStringResult = intl3.formatToPlainString(tmp5(1236).t["7yr3Qc"], obj10);
      }
      const obj11 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null };
      obj11[2] = formatToPlainStringResult;
    }
    const intl2 = tmp5(1236).intl;
    const obj12 = { channelName: null, userCount: null, limit: null };
    obj12[0] = tmp15;
    obj12[1] = userLimit;
    userLimit = channel.userLimit;
    obj12[2] = userLimit;
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(1236).t.rhh6Ev, obj12);
  }
});
const memoResult = importAllResult.memo(function VoiceOrStageChannel(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [getVoiceStatesForGuild];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getVoiceStatesForChannel(channel));
  const items1 = [getActiveStageChannelIds];
  obj = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: channel(589).useStateFromStoresArray(items1, () => {
      const mutableParticipants = outer1_6.getMutableParticipants(channel.id, channel(outer1_2[32]).StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === callback(table[32]).StageChannelParticipantTypes.VOICE);
      return found.map(channel(outer1_2[46]).transformParticipantToSortedVoiceState);
    }),
    subtitle: channel.customSubtitle
  };
  return callback2(closure_20, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default memoResult;