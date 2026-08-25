// === Module 16340: handleVoiceOrStageChannelConnectPress ===

// Module 16340 (handleVoiceOrStageChannelConnectPress)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getActiveStageChannelIds" /* 5243 */;
import closure_7 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import closure_8 from "_getSystemLocale" /* 1996 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 4589 */;
import closure_10 from "getVoiceStatesForGuild" /* 4455 */;
import { Routes } from "ME" /* 676 */;
import { getThemedRippleConfig } from "semanticColor" /* 1301 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

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
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_1 = tmp2;
              const tmp22 = guildStageVoice(table[14]);
              if (isGuildStageVoiceResult) {
                table = 2;
                c3 = 1;
                obj1 = { value: null, done: false };
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
  closure_17 = tmp;
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
  const tmp3 = callback(4315)();
  let obj = _require(1363);
  const tmp6 = callback3(callback(8549)(), obj.isThemeLight(tmp3));
  const tmp7 = callback(16325)();
  obj1 = _require(9899);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = _require(15704);
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  let obj3 = _require(589);
  const items = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items, () => closure_1_9.resolveUnreadSetting(closure_0));
  let obj4 = _require(5255);
  const stageParticipantsCount = obj4.useStageParticipantsCount(channel.id, _require(5249).StageChannelParticipantNamedIndex.AUDIENCE);
  let userLimit = stageParticipantsCount + voiceStates.length;
  _require = channel;
  callback = undefined;
  let obj5 = importAllResult;
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                  obj1 = { value: null, done: false };
                  obj1[0] = tmp21(tmp22[14])(tmp22[18], tmp22.paths);
                  return obj1;
                }
              }
              if (obj7.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess) {
                tmp21Result = tmp21(tmp22[19]);
                guild_id = guild_id.guild_id;
                const transitionToResult = tmp21Result.transitionTo(closure_1_11.CHANNEL(guild_id, closure_1_13.ROLE_SUBSCRIPTIONS));
              } else {
                closure_1_16(guild_id);
              }
              obj7 = guildId(table[16]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw openMemberVerificationModal;
          } else {
            if (arg0 !== 2) {
              const result = openMemberVerificationModal.openMemberVerificationModal(guildId, () => closure_1_16(closure_0));
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
        lib(closure_1_2[20]).transitionToGuild(tmp.guild_id);
        const obj = lib(closure_1_2[20]);
      }
      callback(closure_1_2[21])();
      callback(lib);
    }, items1),
    onLongPress: importAllResult.useCallback(() => lib(closure_1_2[22]).openChannelLongPressActionSheet(lib.id), items2)
  };
  items1 = [channel, callback];
  items2 = [channel.id];
  const arr5 = callback(11642)(channel);
  let obj7 = _require(16338);
  obj = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr5.length };
  const channelAccessibilityProps = obj7.getChannelAccessibilityProps(obj);
  let obj9 = _require(589);
  const items3 = [closure_7];
  const items4 = [channel.id];
  const stateFromStores1 = obj9.useStateFromStores(items3, () => closure_1_7.getStageInstanceByChannel(lib.id), items4);
  if (stateFromStores1 != null) {
    let topic = stateFromStores1.topic;
  }
  const tmp15 = callback(4574)(channel, false);
  let arr8 = voiceStates;
  if (channel.isGuildStageVoice()) {
    arr8 = speakerVoiceStates;
  }
  const mapped = arr8.map((user) => user.user);
  const tmp17 = callback(16334)();
  let tmp5Result = tmp5(4821);
  const fontScale = tmp5Result.useFontScale();
  tmp5Result = tmp5(589);
  const items5 = [closure_8];
  const stateFromStores2 = tmp5Result.useStateFromStores(items5, () => locale.locale);
  const tmp4 = callback(8549)();
  const items6 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = callback(4846)(channel.id));
  const effect = obj5.useEffect(() => {
    let tmp2 = null != callback && typeof tmp !== "string";
    if (tmp2) {
      tmp2 = "voice" === tmp.type;
    }
    if (tmp2) {
      const messagePreviewASTCache = lib(closure_1_2[38]).messagePreviewASTCache;
      messagePreviewASTCache.del(tmp.text);
    }
  }, items6);
  let tmpResult = tmp(16326);
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
    tmpResult = tmp(16338);
    if (topic == null) {
      topic = subtitle;
    }
    obj3 = { subtitle: null, channelId: null, guildId: null, connected: null };
    obj3[0] = topic;
    obj3[1] = id;
    obj3[2] = guild_id;
    obj3[3] = isConnectedToVoiceChannel;
    obj2[1] = tmp5(16336).renderChannelSubtitle(obj3);
    if (!unread) {
      unread = mentionCount > 0;
    }
    obj2[2] = unread;
    obj2[3] = stateFromStores;
    obj2[4] = mentionCount;
    obj4 = { mentionCount: null, locale: null };
    obj4[0] = mentionCount;
    obj4[1] = stateFromStores2;
    obj2[5] = tmp(16332)(obj4);
    obj2[6] = null != stateFromStores1;
    if (arr5.length > 0) {
      obj5 = { embeddedApps: null, size: null };
      obj5[0] = arr5;
      obj5[1] = tmp7.joinVoiceButton.icon.gameSize;
      let tmp32 = callback2(tmp(15589), obj5);
      let tmp31 = callback2;
    } else {
      tmp31 = callback2;
      const obj6 = { channel: null, voiceStates: null };
      obj6[0] = channel;
      obj6[1] = voiceStates;
      tmp32 = callback2(tmp5(11858).VocalChannelJoinButton, obj6);
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
      obj7[1] = tmp31(tmp(16341), obj8);
      tmp31Result = tmp31(View, obj7);
    }
    items8[1] = tmp31Result;
    obj1.children = items8;
    return tmpResult(closure_15(tmp5(4949).PressableHighlight, obj1));
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
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getVoiceStatesForChannel(channel));
  const items1 = [closure_6];
  obj = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: channel(589).useStateFromStoresArray(items1, () => {
      const mutableParticipants = closure_1_6.getMutableParticipants(channel.id, channel(closure_1_2[32]).StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === callback(table[32]).StageChannelParticipantTypes.VOICE);
      return found.map(channel(closure_1_2[46]).transformParticipantToSortedVoiceState);
    }),
    subtitle: channel.customSubtitle
  };
  return callback2(closure_20, obj);
});
let result = require("set").fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default memoResult;