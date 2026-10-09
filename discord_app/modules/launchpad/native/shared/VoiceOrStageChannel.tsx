// discord_app/modules/launchpad/native/shared/VoiceOrStageChannel.tsx
import util from "../../../../intl/index.native.tsx";
import StageChannelParticipants from "../../../stage_channels/StageChannelParticipants.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import MessagePreviewMarkup from "../../../message_previews/native/MessagePreviewMarkup.tsx";
import hideLaunchPadDefault from "../hideLaunchPad.tsx";
import useStageChannelSpeakerVoiceStates from "../../../stage_channels/useStageChannelSpeakerVoiceStates.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageChannelParticipantStore from "../../../stage_channels/StageChannelParticipantStore.tsx";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
function getStageChannelAccessibilityProps(arg0) {
  ({ channelName, channel, userCount } = arg0);
  const intl = util.intl;
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = util.intl;
      const obj = { channelName, userCount, limit: channel.userLimit };
      let formatToPlainStringResult1 = intl2.formatToPlainString(util.t.rhh6Ev, obj);
    }
    const obj2 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult1,
      accessibilityHint: null,
    };
    const intl3 = util.intl;
    obj2.accessibilityHint = intl3.string(util.t.g6pBAk);
    return obj2;
  }
  formatToPlainStringResult1 = intl.formatToPlainString(util.t.TPPk2T, { channelName });
  if (userCount > 0) {
    const intl4 = util.intl;
    const obj3 = { channelName, userCount };
    formatToPlainStringResult1 = intl4.formatToPlainString(util.t["7yr3Qc"], obj3);
  }
  const formatToPlainStringResult = intl.formatToPlainString(util.t.TPPk2T, { channelName });
}
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
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
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: require("asyncRequireImpl")(paths[13], paths.paths), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        value.openGuildVoiceModal(closure_129_0, "Channel List");
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const View = fn(17).View;
const Routes = fn(1085).Routes;
const getThemedRippleConfig = fn(1204).getThemedRippleConfig;
const StaticChannelRoute = fn(2071).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceChannelPressEvents(id) {
      _require = id;
      const cResult = require("c").c(8);
      closure_129_0 = asyncGeneratorStep(async (arg0) => {
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
                      const obj4 = { value: tmp20(tmp21[14])(tmp21[17], tmp21.paths), done: false };
                      return obj4;
                    }
                    tmp20Result = tmp20(tmp21[16]);
                  }
                  if (obj7.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess) {
                    guild_id = guild_id.guild_id;
                    const tmp20Result2 = tmp20(tmp21[18]);
                    const transitionToResult = tmp20(tmp21[18]).transitionTo(
                      closure_1_11.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS),
                    );
                  } else {
                    closure_1_17(guild_id);
                  }
                  obj7 = guildId(c2[15]);
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  const result = value.openMemberVerificationModal(closure_129_1, () => closure_2_17(guildId));
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
      const callback = noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, []);
      if (cResult[0] === id) {
        if (cResult[1] === callback) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] !== id.id) {
          const fn2 = function l() {
            return openChannelLongPressActionSheet.openChannelLongPressActionSheet(id.id);
          };
          cResult[3] = id.id;
          cResult[4] = fn2;
          let tmp4 = fn2;
        } else {
          tmp4 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === tmp3) {
            let tmp5 = cResult[7];
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
          transitionToGuild.transitionToGuild(id.guild_id);
        }
        hideLaunchPadDefault();
        callback(id);
      };
      cResult[0] = id;
      cResult[1] = callback;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : function useVoiceChannelPressEvents(id) {
      closure_129_0 = asyncGeneratorStep(async (arg0) => {
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
                      const obj4 = { value: tmp20(tmp21[14])(tmp21[17], tmp21.paths), done: false };
                      return obj4;
                    }
                    tmp20Result = tmp20(tmp21[16]);
                  }
                  if (obj7.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess) {
                    guild_id = guild_id.guild_id;
                    const tmp20Result2 = tmp20(tmp21[18]);
                    const transitionToResult = tmp20(tmp21[18]).transitionTo(
                      closure_1_11.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS),
                    );
                  } else {
                    closure_1_17(guild_id);
                  }
                  obj7 = guildId(c2[15]);
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  const result = value.openMemberVerificationModal(closure_129_1, () => closure_2_17(guildId));
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
      const callback = noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, []);
      let obj = { onPress: null, onLongPress: null };
      const items = [id, callback];
      obj.onPress = noop.useCallback(() => {
        if (null != id.guild_id) {
          transitionToGuild.transitionToGuild(id.guild_id);
        }
        hideLaunchPadDefault();
        callback(id);
      }, items);
      const items1 = [id.id];
      obj.onLongPress = noop.useCallback(
        () => openChannelLongPressActionSheet.openChannelLongPressActionSheet(id.id),
        items1,
      );
      return obj;
    };
const createStyles = fn(5091);
let closure_20 = createStyles.createStyles(() => ({
  voiceUsers: { display: "flex", flexDirection: "row", paddingRight: 16, marginTop: -2 },
  pressable: { flex: 1 },
}));
let closure_21 = [];
ReactCompilerGating = fn(558);
let closure_22 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UnmemoedVoiceOrStageChannelBase(channel) {
        const cResult = channel(576).c(73);
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
        const tmp5 = subtitle(4992)();
        const obj = channel(576);
        if (cResult[0] !== tmp5) {
          const isThemeLightResult = tmp(4930).isThemeLight(tmp5);
          cResult[0] = tmp5;
          cResult[1] = isThemeLightResult;
          let tmp7 = isThemeLightResult;
          const tmpResult = tmp(4930);
        } else {
          tmp7 = cResult[1];
        }
        closure_20(subtitle(9280)(), tmp7);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = tmp4(17282)();
          cResult[2] = tmp11;
        }
        const tmp6 = subtitle(9280)();
        const isConnectedToVoiceChannel = channel(10324).useIsConnectedToVoiceChannel(channel);
        const tmpResult6 = channel(10324);
        const baseChannelUnreadBadgeState = channel(16708).useBaseChannelUnreadBadgeState(
          channel,
          !isConnectedToVoiceChannel,
        );
        ({ unread, mentionCount } = baseChannelUnreadBadgeState);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserGuildSettingsStore];
          cResult[3] = items;
          let tmp14 = items;
        } else {
          tmp14 = cResult[3];
        }
        if (cResult[4] !== channel) {
          class G {
            constructor() {
              return closure_9.resolveUnreadSetting(channel);
            }
          }
          cResult[4] = channel;
          cResult[5] = G;
        } else {
          class G {
            constructor() {
              return closure_9.resolveUnreadSetting(channel);
            }
          }
        }
        const tmpResult7 = channel(16708);
        const stateFromStores = channel(504).useStateFromStores(tmp14, G);
        const tmpResult8 = channel(504);
        const stageParticipantsCount = channel(5963).useStageParticipantsCount(
          channel.id,
          tmp(5957).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        closure_19(channel);
        const arr2 = subtitle(11689)(channel);
        if (cResult[6] === channel) {
          class G {
            constructor() {
              return closure_9.resolveUnreadSetting(channel);
            }
          }
        }
        const tmpResult9 = channel(5963);
        const channelAccessibilityProps = channel(17281).getChannelAccessibilityProps({
          channel,
          unread,
          mentionCount,
          voiceStates,
          embeddedActivitiesCount: arr2.length,
        });
        cResult[6] = channel;
        cResult[7] = arr2.length;
        cResult[8] = mentionCount;
        cResult[9] = unread;
        cResult[10] = voiceStates;
        cResult[11] = channelAccessibilityProps;
        const obj2 = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr2.length };
        const tmpResult10 = channel(17281);
      }
    : function UnmemoedVoiceOrStageChannelBase(channel) {
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
        const tmp3 = subtitle(4992)();
        const tmp4 = subtitle(9280)();
        const tmp6 = closure_20(tmp4, channel(4930).isThemeLight(tmp3));
        const tmp7 = subtitle(17282)();
        const obj = channel(4930);
        const isConnectedToVoiceChannel = channel(10324).useIsConnectedToVoiceChannel(channel);
        const obj2 = channel(10324);
        const baseChannelUnreadBadgeState = channel(16708).useBaseChannelUnreadBadgeState(
          channel,
          !isConnectedToVoiceChannel,
        );
        ({ unread, mentionCount } = baseChannelUnreadBadgeState);
        const obj3 = channel(16708);
        const items = [UserGuildSettingsStore];
        const stateFromStores = channel(504).useStateFromStores(items, () =>
          UserGuildSettingsStore.resolveUnreadSetting(channel),
        );
        const obj4 = channel(504);
        const stageParticipantsCount = channel(5963).useStageParticipantsCount(
          channel.id,
          channel(5957).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        const sum = stageParticipantsCount + voiceStates.length;
        const obj5 = channel(5963);
        const arr3 = subtitle(11689)(channel);
        const tmp13 = closure_19(channel);
        let channelAccessibilityProps = channel(17281).getChannelAccessibilityProps({
          channel,
          unread,
          mentionCount,
          voiceStates,
          embeddedActivitiesCount: arr3.length,
        });
        const obj6 = channel(17281);
        const obj7 = { channel, unread, mentionCount, voiceStates, embeddedActivitiesCount: arr3.length };
        const items1 = [StageInstanceStore];
        const items2 = [channel.id];
        const stateFromStores1 = channel(504).useStateFromStores(
          items1,
          () => StageInstanceStore.getStageInstanceByChannel(channel.id),
          items2,
        );
        let topic;
        if (stateFromStores1 != null) {
          topic = stateFromStores1.topic;
        }
        const obj8 = channel(504);
        let arr6 = voiceStates;
        if (channel.isGuildStageVoice()) {
          arr6 = speakerVoiceStates;
        }
        const mapped = arr6.map((user) => user.user);
        const tmp19 = subtitle(17865)();
        const tmp17 = subtitle(5418)(channel, false);
        const fontScale = channel(5383).useFontScale();
        const tmp5Result = channel(5383);
        const items3 = [LocaleStore];
        const stateFromStores2 = channel(504).useStateFromStores(items3, () => locale.locale);
        const tmp5Result3 = channel(504);
        const items4 = [isConnectedToVoiceChannel, subtitle];
        ({ isSubscriptionGated, needSubscriptionToAccess } = subtitle(5410)(channel.id));
        const effect = noop.useEffect(() => {
          let tmp2 = null != subtitle && typeof subtitle !== "string";
          if (tmp2) {
            tmp2 = "voice" === subtitle.type;
          }
          if (tmp2) {
            const messagePreviewASTCache = MessagePreviewMarkup.messagePreviewASTCache;
            messagePreviewASTCache.del(subtitle.text);
          }
        }, items4);
        const tmp22 = subtitle(5410)(channel.id);
        const items5 = [tmp6.pressable];
        let num = 0;
        if (voiceStates.length > 0) {
          num = 6;
        }
        const obj9 = {
          style: items5,
          underlayColor: tmp19,
          androidRippleConfig: getThemedRippleConfig({ color: tmp19 }),
        };
        items5[1] = { paddingBottom: num, borderRadius: tmp7.container.borderRadius };
        const merged = Object.assign(tmp13);
        if (channel.isGuildStageVoice()) {
          const obj10 = { channelName: tmp17, channel, userCount: sum };
          channelAccessibilityProps = getStageChannelAccessibilityProps(obj10);
        }
        const merged1 = Object.assign(channelAccessibilityProps);
        const obj11 = {
          channel,
          subtitle: null,
          unread: null,
          resolvedUnreadSetting: null,
          mentionCount: null,
          mentionBadge: null,
          live: null,
          end: null,
          connected: null,
          fontScale: null,
          isSubscriptionGated: null,
          needSubscriptionToAccess: null,
          showGuildBadgeIcon: true,
        };
        const tmpResult = subtitle(17863);
        const tmpResult2 = subtitle(17281);
        if (topic == null) {
          topic = subtitle;
        }
        obj11.subtitle = channel(17867).renderChannelSubtitle({
          subtitle: topic,
          channelId: id,
          guildId: guild_id,
          connected: isConnectedToVoiceChannel,
        });
        if (!unread) {
          unread = mentionCount > 0;
        }
        obj11.unread = unread;
        obj11.resolvedUnreadSetting = stateFromStores;
        obj11.mentionCount = mentionCount;
        obj11.mentionBadge = subtitle(17862)({ mentionCount, locale: stateFromStores2 });
        obj11.live = null != stateFromStores1;
        if (arr3.length > 0) {
          const obj12 = { embeddedApps: arr3, size: tmp7.joinVoiceButton.icon.gameSize };
          let tmp31 = closure_14(tmp(16578), obj12);
          let tmp30 = closure_14;
        } else {
          tmp30 = closure_14;
          const obj13 = { channel, voiceStates };
          tmp31 = closure_14(tmp5(11943).VocalChannelJoinButton, obj13);
        }
        obj11.end = tmp31;
        obj11.connected = isConnectedToVoiceChannel;
        obj11.fontScale = fontScale;
        obj11.isSubscriptionGated = isSubscriptionGated;
        obj11.needSubscriptionToAccess = needSubscriptionToAccess;
        const items6 = [tmpResult2(obj11)];
        let tmp30Result = null;
        if (voiceStates.length > 0) {
          const obj14 = { style: null, children: null };
          const items7 = [tmp6.voiceUsers, tmp7.voiceUsers.margin];
          obj14.style = items7;
          const obj15 = { users: mapped, max: 5, guildId: channel.guild_id, audienceCount: stageParticipantsCount };
          obj14.children = tmp30(tmp(17871), obj15);
          tmp30Result = tmp30(View, obj14);
        }
        items6[1] = tmp30Result;
        obj9.children = items6;
        return tmpResult(closure_15(channel(6191).PressableHighlight, obj9));
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageChannel.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceOrStageChannel(channel) {
        const cResult = channel(576).c(11);
        channel = channel.channel;
        const customSubtitle = channel.customSubtitle;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SortedVoiceStateStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function o() {
            return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
          };
          cResult[1] = channel;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const obj = channel(576);
        const stateFromStores = channel(504).useStateFromStores(first, tmp6);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [StageChannelParticipantStore];
          cResult[3] = items1;
          let tmp8 = items1;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== channel.id) {
          class C {
            constructor() {
              mutableParticipants = closure_6.getMutableParticipants(
                channel.id,
                closure_0(closure_2[33]).StageChannelParticipantNamedIndex.SPEAKER,
              );
              found = mutableParticipants.filter(
                (type) => type.type === channel(closure_1_2[33]).StageChannelParticipantTypes.VOICE,
              );
              return found.map(closure_0(closure_2[47]).transformParticipantToSortedVoiceState);
            }
          }
          cResult[4] = channel.id;
          cResult[5] = C;
        } else {
          class C {
            constructor() {
              mutableParticipants = closure_6.getMutableParticipants(
                channel.id,
                closure_0(closure_2[33]).StageChannelParticipantNamedIndex.SPEAKER,
              );
              found = mutableParticipants.filter(
                (type) => type.type === channel(closure_1_2[33]).StageChannelParticipantTypes.VOICE,
              );
              return found.map(closure_0(closure_2[47]).transformParticipantToSortedVoiceState);
            }
          }
        }
        const tmpResult = channel(504);
        const stateFromStoresArray = channel(504).useStateFromStoresArray(tmp8, C);
        if (cResult[6] === channel) {
          class C {
            constructor() {
              mutableParticipants = closure_6.getMutableParticipants(
                channel.id,
                closure_0(closure_2[33]).StageChannelParticipantNamedIndex.SPEAKER,
              );
              found = mutableParticipants.filter(
                (type) => type.type === channel(closure_1_2[33]).StageChannelParticipantTypes.VOICE,
              );
              return found.map(closure_0(closure_2[47]).transformParticipantToSortedVoiceState);
            }
          }
        }
        const tmpResult2 = channel(504);
        cResult[6] = channel;
        cResult[7] = customSubtitle;
        cResult[8] = stateFromStoresArray;
        cResult[9] = stateFromStores;
        cResult[10] = closure_14(closure_22, {
          channel,
          voiceStates: stateFromStores,
          speakerVoiceStates: stateFromStoresArray,
          subtitle: customSubtitle,
        });
        const tmp12 = closure_14(closure_22, {
          channel,
          voiceStates: stateFromStores,
          speakerVoiceStates: stateFromStoresArray,
          subtitle: customSubtitle,
        });
      }
    : function VoiceOrStageChannel(channel) {
        channel = channel.channel;
        const items = [SortedVoiceStateStore];
        const stateFromStores = channel(504).useStateFromStores(items, () =>
          SortedVoiceStateStore.getVoiceStatesForChannel(channel),
        );
        const obj = channel(504);
        const items1 = [StageChannelParticipantStore];
        const obj2 = channel(504);
        return closure_14(closure_22, {
          channel,
          voiceStates: stateFromStores,
          speakerVoiceStates: channel(504).useStateFromStoresArray(items1, () => {
            const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
              channel.id,
              StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
            );
            const found = mutableParticipants.filter(
              (type) => type.type === channel(closure_1_2[33]).StageChannelParticipantTypes.VOICE,
            );
            return found.map(useStageChannelSpeakerVoiceStates.transformParticipantToSortedVoiceState);
          }),
          subtitle: channel.customSubtitle,
        });
      },
);
