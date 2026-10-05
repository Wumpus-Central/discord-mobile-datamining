// === Module 17407: VoiceOrStageChannel ===

// Module 17407 (VoiceOrStageChannel)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import FormConstants from "FormConstants" /* 1192 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5582 */;
import transitionToGuild from "transitionToGuild" /* 6845 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 10702 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11695 */;
import useStageChannelSpeakerVoiceStates from "useStageChannelSpeakerVoiceStates" /* 16166 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5575 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_14;
let closure_15;
const f148557 = function() {
  return closure_0(...arguments);
};
function getStageChannelAccessibilityProps(arg0) {
  let channel;
  let channelName;
  let formatToPlainStringResult1;
  let intl3;
  let userCount;
  ({ channelName, channel, userCount } = arg0);
  const intl = intl5.intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.TPPk2T, { channelName });
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = intl5.intl;
      obj = { channelName, userCount, limit: channel.userLimit };
      formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t.rhh6Ev, obj);
    }
    const obj2 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, accessibilityHint: intl3.string(intl5.t.g6pBAk) };
    intl3 = intl5.intl;
    return obj2;
  }
  formatToPlainStringResult1 = formatToPlainStringResult;
  if (userCount > 0) {
    const intl4 = intl5.intl;
    const obj3 = { channelName, userCount };
    formatToPlainStringResult1 = intl4.formatToPlainString(intl5.t["7yr3Qc"], obj3);
  }
}
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_1 = tmp;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[13], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          value.openGuildVoiceModal(closure_0, "Channel List");
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
const Routes = Constants.Routes;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  obj = require("react");
  const cResult = obj.c(8);
  const useCallback = react.useCallback;
  _require = _asyncToGenerator(async (arg0) => {
    let guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let result;
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              let transitionToResult;
              closure_1 = tmp;
              guildId = undefined;
              const obj8 = guildId(paths[15]);
              const needSubscriptionToAccess = obj8.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                const tmp18Result = guildId(paths[16]);
                if (tmp18Result.shouldShowMembershipVerificationGate(guildId)) {
                  paths = 1;
                  c3 = 1;
                  const obj4 = { value: guildId(paths[14])(paths[17], paths.paths), done: false };
                  return obj4;
                }
              }
              if (needSubscriptionToAccess) {
                const tmp18Result2 = guildId(paths[18]);
                transitionToResult = tmp18Result2.transitionTo(closure_1_11.CHANNEL(guildId.guild_id, constants.ROLE_SUBSCRIPTIONS));
              } else {
                closure_1_17(guildId);
              }
              result = transitionToResult;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            result = value.openMemberVerificationModal(guildId, () => closure_2_17(guildId));
          }
          c3 = 3;
          return { value: result, done: true };
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  });
  const callback = useCallback(f148557, []);
  if (cResult[0] === id) {
    let tmp3;
    let tmp4;
    if (cResult[1] === callback) {
      tmp3 = cResult[2];
    }
    if (cResult[3] !== id.id) {
      const fn2 = function l() {
        obj = openChannelLongPressActionSheet;
        return obj.openChannelLongPressActionSheet(id.id);
      };
      cResult[3] = id.id;
      cResult[4] = fn2;
      tmp4 = fn2;
    } else {
      tmp4 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      let tmp5;
      if (cResult[6] === tmp3) {
        tmp5 = cResult[7];
      }
      return tmp5;
    }
    const obj2 = { onPress: tmp3, onLongPress: tmp4 };
    cResult[5] = tmp4;
    cResult[6] = tmp3;
    cResult[7] = obj2;
    tmp5 = obj2;
  }
  const fn = function t() {
    if (null != id.guild_id) {
      obj = transitionToGuild;
      obj.transitionToGuild(id.guild_id);
    }
    hideLaunchPadDefault();
    callback(id);
  };
  cResult[0] = id;
  cResult[1] = callback;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((id) => {
  let items;
  let items1;
  const useCallback = react.useCallback;
  id = _asyncToGenerator(async (arg0) => {
    let guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let result;
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              let transitionToResult;
              closure_1 = tmp;
              guildId = undefined;
              const obj8 = guildId(paths[15]);
              const needSubscriptionToAccess = obj8.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                const tmp18Result = guildId(paths[16]);
                if (tmp18Result.shouldShowMembershipVerificationGate(guildId)) {
                  paths = 1;
                  c3 = 1;
                  const obj4 = { value: guildId(paths[14])(paths[17], paths.paths), done: false };
                  return obj4;
                }
              }
              if (needSubscriptionToAccess) {
                const tmp18Result2 = guildId(paths[18]);
                transitionToResult = tmp18Result2.transitionTo(closure_1_11.CHANNEL(guildId.guild_id, constants.ROLE_SUBSCRIPTIONS));
              } else {
                closure_1_17(guildId);
              }
              result = transitionToResult;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            result = value.openMemberVerificationModal(guildId, () => closure_2_17(guildId));
          }
          c3 = 3;
          return { value: result, done: true };
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  });
  const callback = useCallback(f148557, []);
  obj = {
    onPress: react.useCallback(() => {
      if (null != id.guild_id) {
        obj = transitionToGuild;
        obj.transitionToGuild(id.guild_id);
      }
      hideLaunchPadDefault();
      callback(id);
    }, items),
    onLongPress: react.useCallback(() => {
      obj = openChannelLongPressActionSheet;
      return obj.openChannelLongPressActionSheet(id.id);
    }, items1)
  };
  items = [id, callback];
  items1 = [id.id];
  return obj;
});
let closure_20 = createStyles.createStyles(() => ({ voiceUsers: { display: "flex", flexDirection: "row", paddingRight: 16, marginTop: -2 }, pressable: { flex: 1 } }));
let closure_21 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let guild_id;
  let id;
  let locale;
  let mentionCount;
  let speakerVoiceStates;
  let tmp14;
  let tmp7;
  let unread;
  let voiceStates;
  obj = channel(576);
  const cResult = obj.c(73);
  channel = channel.channel;
  const subtitle = channel.subtitle;
  ({ voiceStates, speakerVoiceStates } = channel);
  if (undefined === voiceStates) {
    voiceStates = closure_21;
  }
  if (undefined === speakerVoiceStates) {
    speakerVoiceStates = closure_21;
  }
  ({ id, guild_id } = channel);
  const tmp5 = subtitle(4791)();
  const tmp6 = subtitle(7508)();
  if (cResult[0] !== tmp5) {
    const tmpResult = channel(4729);
    const isThemeLightResult = tmpResult.isThemeLight(tmp5);
    cResult[0] = tmp5;
    cResult[1] = isThemeLightResult;
    tmp7 = isThemeLightResult;
  } else {
    tmp7 = cResult[1];
  }
  closure_20(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[2] = subtitle(16832)();
    const tmp11 = subtitle(16832)();
  }
  const tmpResult6 = channel(9054);
  const isConnectedToVoiceChannel = tmpResult6.useIsConnectedToVoiceChannel(channel);
  const tmpResult7 = channel(16285);
  const baseChannelUnreadBadgeState = tmpResult7.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[3] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== channel) {
    class N {
      constructor() {
        return closure_9.resolveUnreadSetting(channel);
      }
    }
    cResult[4] = channel;
    cResult[5] = N;
  } else {
    class N {
      constructor() {
        return closure_9.resolveUnreadSetting(channel);
      }
    }
  }
  const tmpResult8 = channel(504);
  const stateFromStores = tmpResult8.useStateFromStores(tmp14, N);
  const tmpResult9 = channel(5588);
  const stageParticipantsCount = tmpResult9.useStageParticipantsCount(channel.id, tmp(5582).StageChannelParticipantNamedIndex.AUDIENCE);
  closure_19(channel);
  const arr2 = subtitle(11673)(channel);
  if (cResult[6] === channel) {
    class N {
      constructor() {
        return closure_9.resolveUnreadSetting(channel);
      }
    }
  }
  const obj2 = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr2.length };
  const tmpResult10 = channel(16831);
  const channelAccessibilityProps = tmpResult10.getChannelAccessibilityProps(obj2);
  cResult[6] = channel;
  cResult[7] = arr2.length;
  cResult[8] = mentionCount;
  cResult[9] = unread;
  cResult[10] = voiceStates;
  cResult[11] = channelAccessibilityProps;
}) : ((channel) => {
  let guild_id;
  let id;
  let isSubscriptionGated;
  let items6;
  let items7;
  let locale;
  let mentionCount;
  let needSubscriptionToAccess;
  let obj15;
  let renderChannelSubtitle;
  let tmp31;
  let tmp32;
  let unread;
  channel = channel.channel;
  const subtitle = channel.subtitle;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = closure_21;
  }
  let speakerVoiceStates = channel.speakerVoiceStates;
  if (speakerVoiceStates === undefined) {
    speakerVoiceStates = closure_21;
  }
  ({ id, guild_id } = channel);
  const tmp3 = subtitle(4791)();
  const tmp4 = subtitle(7508)();
  obj = channel(4729);
  const tmp6 = closure_20(tmp4, obj.isThemeLight(tmp3));
  const tmp7 = subtitle(16832)();
  const obj2 = channel(9054);
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  const obj3 = channel(16285);
  const baseChannelUnreadBadgeState = obj3.useBaseChannelUnreadBadgeState(channel, !isConnectedToVoiceChannel);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const items = [UserGuildSettingsStore];
  const obj4 = channel(504);
  const stateFromStores = obj4.useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(channel));
  const obj5 = channel(5588);
  const stageParticipantsCount = obj5.useStageParticipantsCount(channel.id, channel(5582).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + voiceStates.length;
  const tmp13 = closure_19(channel);
  const arr3 = subtitle(11673)(channel);
  const obj6 = channel(16831);
  const obj7 = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr3.length };
  let channelAccessibilityProps = obj6.getChannelAccessibilityProps(obj7);
  const items1 = [StageInstanceStore];
  const items2 = [channel.id];
  const obj8 = channel(504);
  const stateFromStores1 = obj8.useStateFromStores(items1, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items2);
  let topic;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  let arr6 = voiceStates;
  const tmp17 = subtitle(5043)(channel, false);
  if (channel.isGuildStageVoice()) {
    arr6 = speakerVoiceStates;
  }
  const mapped = arr6.map((user) => user.user);
  const tmp19 = subtitle(17402)();
  const tmp5Result = channel(5602);
  const fontScale = tmp5Result.useFontScale();
  const items3 = [LocaleStore];
  const tmp5Result3 = channel(504);
  const stateFromStores2 = tmp5Result3.useStateFromStores(items3, () => locale.locale);
  const items4 = [isConnectedToVoiceChannel, subtitle];
  ({ isSubscriptionGated, needSubscriptionToAccess } = subtitle(5797)(channel.id));
  subtitle(5797)(channel.id);
  const effect = react.useEffect(() => {
    const tmp2 = null != subtitle && typeof subtitle !== "string" && "voice" === subtitle.type;
    if (tmp2) {
      const messagePreviewASTCache = MessagePreviewMarkup.messagePreviewASTCache;
      messagePreviewASTCache.del(subtitle.text);
    }
  }, items4);
  const items5 = [tmp6.pressable, ];
  let num = 0;
  const tmpResult = subtitle(17400);
  const PressableHighlight = tmp5(5909).PressableHighlight;
  if (voiceStates.length > 0) {
    num = 6;
  }
  items5[1] = { paddingBottom: num, borderRadius: tmp7.container.borderRadius };
  const obj9 = { style: items5, underlayColor: tmp19, androidRippleConfig: getThemedRippleConfig({ color: tmp19 }), children: items6 };
  const merged = Object.assign(tmp13);
  if (channel.isGuildStageVoice()) {
    const obj10 = { channelName: tmp17, channel, userCount: sum };
    channelAccessibilityProps = getStageChannelAccessibilityProps(obj10);
  }
  const merged1 = Object.assign(channelAccessibilityProps);
  const obj11 = { channel, subtitle: renderChannelSubtitle({ subtitle: topic, channelId: id, guildId: guild_id, connected: isConnectedToVoiceChannel }), unread, resolvedUnreadSetting: stateFromStores, mentionCount, mentionBadge: subtitle(17399)({ mentionCount, locale: stateFromStores2 }), live: null != stateFromStores1, end: tmp32, connected: isConnectedToVoiceChannel, fontScale, isSubscriptionGated, needSubscriptionToAccess, showGuildBadgeIcon: true };
  const tmpResult2 = subtitle(16831);
  renderChannelSubtitle = channel(17404).renderChannelSubtitle;
  channel(17404);
  if (topic == null) {
    topic = subtitle;
  }
  if (!unread) {
    unread = mentionCount > 0;
  }
  if (arr3.length > 0) {
    const obj12 = { embeddedApps: arr3, size: tmp7.joinVoiceButton.icon.gameSize };
    tmp32 = closure_14(tmp(16160), obj12);
    tmp31 = closure_14;
  } else {
    tmp31 = closure_14;
    const obj13 = { channel, voiceStates };
    tmp32 = closure_14(tmp5(11919).VocalChannelJoinButton, obj13);
  }
  items6 = [tmpResult2(obj11), ];
  let tmp31Result = null;
  if (voiceStates.length > 0) {
    const obj14 = { style: items7, children: tmp31(subtitle(17408), obj15) };
    items7 = [tmp6.voiceUsers, tmp7.voiceUsers.margin];
    obj15 = { users: mapped, max: 5, guildId: channel.guild_id, audienceCount: stageParticipantsCount };
    tmp31Result = tmp31(View, obj14);
  }
  items6[1] = tmp31Result;
  return tmpResult(closure_15(PressableHighlight, obj9));
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp10;
  let tmp6;
  let tmp8;
  obj = channel(576);
  const cResult = obj.c(11);
  channel = channel.channel;
  const customSubtitle = channel.customSubtitle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StageChannelParticipantStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    const fn2 = function p() {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === channel(closure_1_2[33]).StageChannelParticipantTypes.VOICE);
      return found.map(useStageChannelSpeakerVoiceStates.transformParticipantToSortedVoiceState);
    };
    cResult[4] = channel.id;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult2 = channel(504);
  const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp8, tmp10);
  if (cResult[6] === channel) {
    if (cResult[7] === customSubtitle) {
      if (cResult[8] === stateFromStoresArray) {
        let tmp12;
        if (cResult[9] === stateFromStores) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
    }
  }
  const tmp13 = closure_14(closure_22, { channel, voiceStates: stateFromStores, speakerVoiceStates: stateFromStoresArray, subtitle: customSubtitle });
  cResult[6] = channel;
  cResult[7] = customSubtitle;
  cResult[8] = stateFromStoresArray;
  cResult[9] = stateFromStores;
  cResult[10] = tmp13;
  tmp12 = tmp13;
}) : ((channel) => {
  channel = channel.channel;
  const customSubtitle = channel.customSubtitle;
  const items = [SortedVoiceStateStore];
  obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel));
  const items1 = [StageChannelParticipantStore];
  const obj2 = channel(504);
  const obj3 = {
    channel,
    voiceStates: stateFromStores,
    speakerVoiceStates: obj2.useStateFromStoresArray(items1, () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
      const found = mutableParticipants.filter((type) => type.type === channel(closure_1_2[33]).StageChannelParticipantTypes.VOICE);
      return found.map(useStageChannelSpeakerVoiceStates.transformParticipantToSortedVoiceState);
    }),
    subtitle: customSubtitle
  };
  return closure_14(closure_22, obj3);
}));
let result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default memoResult;