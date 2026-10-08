// discord_app/modules/channel_list_v2/native/items/VoiceChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import getChannelA11yLabelDefault from "../../../channel/getChannelA11yLabel.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import useEmbeddedAppsForChannelDefault from "../../../activities/useEmbeddedAppsForChannel.tsx";
import VoiceUsersDefault from "../../../guild_sidebar/native/VoiceUsers.tsx";
import VoiceUserSummaryDefault from "../../../guild_sidebar/native/VoiceUserSummary.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollapsedVoiceChannelStore from "../../../../stores/CollapsedVoiceChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
function handleVoiceChannelPress() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _handleVoiceChannelPress(arg0) {
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
    await "IconComponent";
    return value.openMemberVerificationModal(closure_129_1);
  })();
};
const View = fn(17).View;
const NO_VOICE_STATES = fn(5114).NO_VOICE_STATES;
const RedesignChannelListConstants = fn(11776);
({ CHANNEL_SUBTITLE_TEXT_VARIANT: closure_12, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Constants = fn(1085);
({ AnalyticEvents: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
let obj = {
  channelInfo: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 },
  voiceStates: { marginLeft: 36, marginTop: -4, marginBottom: 2 },
  voiceStatesCollapsed: { marginLeft: 16 },
  container: null,
};
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 };
obj.container = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceChannel(channel) {
        obj = channel(embeddedActivitiesCount[17]);
        const cResult = obj.c(52);
        channel = channel.channel;
        ({ selected, locked, collapsed } = channel);
        ({ subtitle, embeddedActivitiesCount } = channel);
        const activeEvent = channel(embeddedActivitiesCount[18]).useActiveEvent(channel.id);
        let obj2 = channel(embeddedActivitiesCount[18]);
        const tmp5 = null != activeEvent || null != channel(embeddedActivitiesCount[19]).useStartTime(channel);
        let obj3 = channel(embeddedActivitiesCount[19]);
        const ensureSyncedChannelVoiceStates = channel(embeddedActivitiesCount[20]).useEnsureSyncedChannelVoiceStates(
          channel.id,
          channel.voiceStates,
        );
        const tmpResult = channel(embeddedActivitiesCount[20]);
        const isConnectedToVoiceChannel = channel(embeddedActivitiesCount[21]).useIsConnectedToVoiceChannel(channel);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ReadStateStore, UserGuildSettingsStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function c() {
            return {
              hasUnread: ReadStateStore.hasUnread(channel.id),
              mentionCount: ReadStateStore.getMentionCount(channel.id),
              resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
            };
          };
          const items1 = [channel];
          cResult[1] = channel;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp12 = items1;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[2];
          tmp12 = cResult[3];
        }
        const tmpResult5 = channel(embeddedActivitiesCount[21]);
        const stateFromStoresObject = channel(embeddedActivitiesCount[22]).useStateFromStoresObject(
          first,
          tmp11,
          tmp12,
        );
        const hasUnread = stateFromStoresObject.hasUnread;
        const mentionCount = stateFromStoresObject.mentionCount;
        const resolvedUnreadSetting = stateFromStoresObject.resolvedUnreadSetting;
        if (cResult[4] !== subtitle) {
          const channelSubtitleData = tmp(embeddedActivitiesCount[23]).getChannelSubtitleData(subtitle);
          cResult[4] = subtitle;
          cResult[5] = channelSubtitleData;
          let tmp14 = channelSubtitleData;
          const tmpResult7 = tmp(embeddedActivitiesCount[23]);
        } else {
          tmp14 = cResult[5];
        }
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
        const tmpResult6 = channel(embeddedActivitiesCount[22]);
        const gameMentionsAsPlainText = channel(embeddedActivitiesCount[24]).useGameMentionsAsPlainText(text);
        if (cResult[6] === channel.id) {
          if (cResult[7] === gameMentionsAsPlainText) {
            let tmp19 = cResult[8];
          }
          if (cResult[9] === channel) {
            if (cResult[10] === embeddedActivitiesCount) {
              if (cResult[11] === hasUnread) {
                if (cResult[12] === mentionCount) {
                  if (cResult[13] === ensureSyncedChannelVoiceStates) {
                    let tmp23 = cResult[14];
                  }
                  if (cResult[15] === channel.name) {
                    if (cResult[16] === tmp23) {
                      let tmp24 = cResult[17];
                    }
                    if (cResult[18] === channel) {
                      if (cResult[19] === collapsed) {
                        if (cResult[20] === ensureSyncedChannelVoiceStates) {
                          let tmp26 = cResult[21];
                        }
                        if (cResult[22] === channel.guild_id) {
                          if (cResult[23] === channel.id) {
                            class B {
                              constructor() {
                                obj = {
                                  channel,
                                  unread: hasUnread,
                                  mentionCount,
                                  voiceStates: closure_3,
                                  embeddedActivitiesCount,
                                };
                                return closure_1(closure_2[26])(obj);
                              }
                            }
                            if (tmp19 == null) {
                              if (tmp14 != null) {
                                const subtitle2 = tmp14.subtitle;
                              }
                              class B {
                                constructor() {
                                  obj = {
                                    channel,
                                    unread: hasUnread,
                                    mentionCount,
                                    voiceStates: closure_3,
                                    embeddedActivitiesCount,
                                  };
                                  return closure_1(closure_2[26])(obj);
                                }
                              }
                            }
                            if (cResult[27] === channel) {
                              if (cResult[28] === collapsed) {
                                if (cResult[29] === selected) {
                                  if (cResult[30] === ensureSyncedChannelVoiceStates) {
                                    let tmp32 = cResult[31];
                                  }
                                  if (cResult[32] !== channel) {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                    class B {
                                      constructor() {
                                        obj = {
                                          channel,
                                          unread: hasUnread,
                                          mentionCount,
                                          voiceStates: closure_3,
                                          embeddedActivitiesCount,
                                        };
                                        return closure_1(closure_2[26])(obj);
                                      }
                                    }
                                    cResult[33] = Y;
                                  } else {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                  }
                                  class B {
                                    constructor() {
                                      obj = {
                                        channel,
                                        unread: hasUnread,
                                        mentionCount,
                                        voiceStates: closure_3,
                                        embeddedActivitiesCount,
                                      };
                                      return closure_1(closure_2[26])(obj);
                                    }
                                  }
                                  const _Symbol = Symbol;
                                  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                    const string = tmp39.string;
                                    class B {
                                      constructor() {
                                        obj = {
                                          channel,
                                          unread: hasUnread,
                                          mentionCount,
                                          voiceStates: closure_3,
                                          embeddedActivitiesCount,
                                        };
                                        return closure_1(closure_2[26])(obj);
                                      }
                                    }
                                    cResult[36] = tmp40;
                                  } else {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                  }
                                  if (hasUnread) {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                  }
                                  if (cResult[37] !== tmp26) {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                    class B {
                                      constructor() {
                                        obj = {
                                          channel,
                                          unread: hasUnread,
                                          mentionCount,
                                          voiceStates: closure_3,
                                          embeddedActivitiesCount,
                                        };
                                        return closure_1(closure_2[26])(obj);
                                      }
                                    }
                                    cResult[38] = tmp42;
                                  } else {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                  }
                                  if (cResult[39] === tmp24) {
                                    class Y {
                                      constructor() {
                                        return handleVoiceChannelPress(channel);
                                      }
                                    }
                                  }
                                  let obj4 = {
                                    onPress: Y,
                                    onLongPress: tmp37,
                                    style: obj.container,
                                    accessible: true,
                                    accessibilityRole: "button",
                                    accessibilityLabel: tmp24,
                                    accessibilityHint: tmp40,
                                    channel,
                                    selected,
                                    locked,
                                    unread: hasUnread,
                                    resolvedUnreadSetting,
                                    subtitle: tmp19,
                                    isChannelLive: tmp5,
                                    channelInfo: tmp32,
                                    children: tmp42,
                                  };
                                  const tmp47 = jsx(collapsed(embeddedActivitiesCount[35]), {
                                    onPress: Y,
                                    onLongPress: tmp37,
                                    style: obj.container,
                                    accessible: true,
                                    accessibilityRole: "button",
                                    accessibilityLabel: tmp24,
                                    accessibilityHint: tmp40,
                                    channel,
                                    selected,
                                    locked,
                                    unread: hasUnread,
                                    resolvedUnreadSetting,
                                    subtitle: tmp19,
                                    isChannelLive: tmp5,
                                    channelInfo: tmp32,
                                    children: tmp42,
                                  });
                                  cResult[39] = tmp24;
                                  cResult[40] = channel;
                                  cResult[41] = tmp32;
                                  cResult[42] = tmp5;
                                  cResult[43] = locked;
                                  cResult[44] = resolvedUnreadSetting;
                                  cResult[45] = selected;
                                  cResult[46] = tmp19;
                                  cResult[47] = Y;
                                  cResult[48] = tmp37;
                                  cResult[49] = hasUnread;
                                  cResult[50] = tmp42;
                                  cResult[51] = tmp47;
                                }
                              }
                            }
                            let obj5 = {
                              channel,
                              isChannelSelected: selected,
                              isChannelCollapsed: collapsed,
                              voiceStates: ensureSyncedChannelVoiceStates,
                              enableConnectedUserLimit: true,
                              enableActivities: true,
                            };
                            const tmp35 = jsx(collapsed(embeddedActivitiesCount[32]), {
                              channel,
                              isChannelSelected: selected,
                              isChannelCollapsed: collapsed,
                              voiceStates: ensureSyncedChannelVoiceStates,
                              enableConnectedUserLimit: true,
                              enableActivities: true,
                            });
                            cResult[27] = channel;
                            cResult[28] = collapsed;
                            cResult[29] = selected;
                            cResult[30] = ensureSyncedChannelVoiceStates;
                            cResult[31] = tmp35;
                            tmp32 = tmp35;
                          }
                        }
                        class B {
                          constructor() {
                            obj = {
                              channel,
                              unread: hasUnread,
                              mentionCount,
                              voiceStates: closure_3,
                              embeddedActivitiesCount,
                            };
                            return closure_1(closure_2[26])(obj);
                          }
                        }
                        const items2 = [, ,];
                        ({ id: arr3[0], guild_id: arr3[1] } = channel);
                        items2[2] = gameMentionsAsPlainText;
                        cResult[22] = channel.guild_id;
                        cResult[23] = channel.id;
                        cResult[24] = gameMentionsAsPlainText;
                        cResult[25] = items2;
                        cResult[26] = tmp30;
                      }
                    }
                    class B {
                      constructor() {
                        obj = {
                          channel,
                          unread: hasUnread,
                          mentionCount,
                          voiceStates: closure_3,
                          embeddedActivitiesCount,
                        };
                        return closure_1(closure_2[26])(obj);
                      }
                    }
                    cResult[18] = channel;
                    cResult[19] = collapsed;
                    cResult[20] = ensureSyncedChannelVoiceStates;
                    cResult[21] = tmp27;
                    tmp26 = tmp27;
                  }
                  class B {
                    constructor() {
                      obj = {
                        channel,
                        unread: hasUnread,
                        mentionCount,
                        voiceStates: closure_3,
                        embeddedActivitiesCount,
                      };
                      return closure_1(closure_2[26])(obj);
                    }
                  }
                  let obj6 = { expensive: tmp23, cheap: channel.name };
                  const accessibilityLabelOrCheapFallbackUnsafe =
                    obj10.getAccessibilityLabelOrCheapFallbackUnsafe(obj6);
                  cResult[15] = channel.name;
                  cResult[16] = tmp23;
                  cResult[17] = accessibilityLabelOrCheapFallbackUnsafe;
                  tmp24 = accessibilityLabelOrCheapFallbackUnsafe;
                }
              }
            }
          }
          class B {
            constructor() {
              obj = { channel, unread: hasUnread, mentionCount, voiceStates: closure_3, embeddedActivitiesCount };
              return closure_1(closure_2[26])(obj);
            }
          }
          cResult[9] = channel;
          cResult[10] = embeddedActivitiesCount;
          cResult[11] = hasUnread;
          cResult[12] = mentionCount;
          cResult[13] = ensureSyncedChannelVoiceStates;
          cResult[14] = B;
          tmp23 = B;
        }
        let result = null;
        if (null != gameMentionsAsPlainText) {
          class Y {
            constructor() {
              return handleVoiceChannelPress(channel);
            }
          }
          class B {
            constructor() {
              obj = { channel, unread: hasUnread, mentionCount, voiceStates: closure_3, embeddedActivitiesCount };
              return closure_1(closure_2[26])(obj);
            }
          }
          tmp21[0] = channel.id;
          tmp21[1] = closure_12;
          tmp21[2] = closure_12;
          result = collapsed(embeddedActivitiesCount[25]).parseVoiceChannelStatus(gameMentionsAsPlainText, true, tmp21);
          const obj9 = collapsed(embeddedActivitiesCount[25]);
        }
        cResult[6] = channel.id;
        cResult[7] = gameMentionsAsPlainText;
        cResult[8] = result;
        tmp19 = result;
        const tmpResult8 = channel(embeddedActivitiesCount[24]);
      }
    : function VoiceChannel(channel) {
        channel = channel.channel;
        ({ selected, collapsed, subtitle, embeddedActivitiesCount: importDefault } = channel);
        let ensureSyncedChannelVoiceStates;
        noop = undefined;
        let gameMentionsAsPlainText;
        ({ locked, voiceStates } = channel);
        obj = channel(ensureSyncedChannelVoiceStates[18]);
        const activeEvent = obj.useActiveEvent(channel.id);
        const startTime = channel(ensureSyncedChannelVoiceStates[19]).useStartTime(channel);
        const obj2 = channel(ensureSyncedChannelVoiceStates[19]);
        ensureSyncedChannelVoiceStates = channel(ensureSyncedChannelVoiceStates[20]).useEnsureSyncedChannelVoiceStates(
          channel.id,
          voiceStates,
        );
        let obj3 = channel(ensureSyncedChannelVoiceStates[20]);
        const isConnectedToVoiceChannel = channel(ensureSyncedChannelVoiceStates[21]).useIsConnectedToVoiceChannel(
          channel,
        );
        const obj4 = channel(ensureSyncedChannelVoiceStates[21]);
        const items = [ReadStateStore, UserGuildSettingsStore];
        const items1 = [channel];
        const stateFromStoresObject = channel(ensureSyncedChannelVoiceStates[22]).useStateFromStoresObject(
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
        const obj5 = channel(ensureSyncedChannelVoiceStates[22]);
        const channelSubtitleData = channel(ensureSyncedChannelVoiceStates[23]).getChannelSubtitleData(subtitle);
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
        const obj6 = channel(ensureSyncedChannelVoiceStates[23]);
        gameMentionsAsPlainText = channel(ensureSyncedChannelVoiceStates[24]).useGameMentionsAsPlainText(text);
        let result = null;
        if (null != gameMentionsAsPlainText) {
          const obj7 = { channelId: channel.id, linkVariant: textVariant, textVariant };
          result = require("MarkupUtils").parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj7);
          const obj8 = require("MarkupUtils");
        }
        const tmpResult = channel(ensureSyncedChannelVoiceStates[24]);
        const items2 = [, ,];
        ({ id: arr4[0], guild_id: arr4[1] } = channel);
        items2[2] = gameMentionsAsPlainText;
        const accessibilityLabelOrCheapFallbackUnsafe = channel(
          ensureSyncedChannelVoiceStates[27],
        ).getAccessibilityLabelOrCheapFallbackUnsafe({
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
        const tmpResult3 = channel(ensureSyncedChannelVoiceStates[27]);
        const obj10 = {
          onPress() {
            return handleVoiceChannelPress(channel);
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
        const intl = tmp(tmp2[34]).intl;
        obj10.accessibilityHint = intl.string(channel(ensureSyncedChannelVoiceStates[34]).t["9C444m"]);
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
            const summarizedVoiceUsers = tmp(tmp2[28]).computeSummarizedVoiceUsers(obj11);
            const obj14 = { users: summarizedVoiceUsers, max: 8, guildId: channel.guild_id, renderIcon: false };
            obj13.children = jsx(require("VoiceUserSummary"), {
              users: summarizedVoiceUsers,
              max: 8,
              guildId: channel.guild_id,
              renderIcon: false,
            });
            tmp17Result = <gameMentionsAsPlainText style={tmp21.voiceStatesCollapsed}>{null}</gameMentionsAsPlainText>;
            const tmpResult4 = tmp(tmp2[28]);
          } else {
            const obj15 = { style: tmp21.voiceStates, children: null };
            const obj16 = { channel, collapsed, voiceStates: ensureSyncedChannelVoiceStates };
            obj15.children = jsx(require("VoiceUsers"), {
              channel,
              collapsed,
              voiceStates: ensureSyncedChannelVoiceStates,
            });
            tmp17Result = <gameMentionsAsPlainText style={tmp21.voiceStates}>{null}</gameMentionsAsPlainText>;
          }
        }
        obj10.children = tmp17Result;
        return jsx(require("ChannelItem"), {
          onPress() {
            return handleVoiceChannelPress(channel);
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
      },
);
ReactCompilerGating = fn(558);
let obj3 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ConnectedVoiceChannel(channel) {
        const cResult = channel(576).c(16);
        channel = channel.channel;
        ({ selected, subtitle } = channel);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SortedVoiceStateStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel.guild_id) {
          const fn = function l() {
            return SortedVoiceStateStore.getVoiceStates(channel.guild_id);
          };
          const items1 = [channel.guild_id];
          cResult[1] = channel.guild_id;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp7 = items1;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        obj = channel(576);
        const stateFromStores = channel(504).useStateFromStores(first, tmp6, tmp7);
        const arr3 = useEmbeddedAppsForChannelDefault(channel);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PermissionStore, CollapsedVoiceChannelStore];
          cResult[4] = items2;
          let tmp9 = items2;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== channel) {
          const fn2 = function p() {
            return {
              locked: !PermissionStore.can(constants2.CONNECT, channel),
              bypassLimit: PermissionStore.can(constants2.MOVE_MEMBERS, channel),
              collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id),
            };
          };
          cResult[5] = channel;
          cResult[6] = fn2;
          let tmp12 = fn2;
        } else {
          tmp12 = cResult[6];
        }
        const tmpResult = channel(504);
        const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp9, tmp12);
        ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
        let num8;
        if (arr3 != null) {
          num8 = arr3.length;
        }
        if (num8 == null) {
          num8 = 0;
        }
        let tmp14 = stateFromStores[channel.id];
        if (tmp14 == null) {
          tmp14 = NO_VOICE_STATES;
        }
        if (cResult[7] === bypassLimit) {
          if (cResult[8] === channel) {
            if (cResult[9] === collapsed) {
              if (cResult[10] === locked) {
                if (cResult[11] === selected) {
                  if (cResult[12] === subtitle) {
                    if (cResult[13] === num8) {
                      if (cResult[14] === tmp14) {
                        let tmp15 = cResult[15];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
          }
        }
        const tmp16 = (
          <closure_19
            channel={channel}
            embeddedActivitiesCount={num8}
            collapsed={collapsed}
            voiceStates={tmp14}
            selected={selected}
            locked={locked}
            bypassLimit={bypassLimit}
            subtitle={subtitle}
          />
        );
        cResult[7] = bypassLimit;
        cResult[8] = channel;
        cResult[9] = collapsed;
        cResult[10] = locked;
        cResult[11] = selected;
        cResult[12] = subtitle;
        cResult[13] = num8;
        cResult[14] = tmp14;
        cResult[15] = tmp16;
        tmp15 = tmp16;
        const tmpResult2 = channel(504);
      }
    : function ConnectedVoiceChannel(channel) {
        channel = channel.channel;
        ({ selected, subtitle } = channel);
        const items = [SortedVoiceStateStore];
        const items1 = [channel.guild_id];
        const stateFromStores = channel(504).useStateFromStores(
          items,
          () => SortedVoiceStateStore.getVoiceStates(channel.guild_id),
          items1,
        );
        const arr3 = useEmbeddedAppsForChannelDefault(channel);
        obj = channel(504);
        const items2 = [PermissionStore, CollapsedVoiceChannelStore];
        const stateFromStoresObject = channel(504).useStateFromStoresObject(items2, () => ({
          locked: !PermissionStore.can(constants2.CONNECT, channel),
          bypassLimit: PermissionStore.can(constants2.MOVE_MEMBERS, channel),
          collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id),
        }));
        const obj3 = {
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
        return (
          <closure_19
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
      },
);
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;
