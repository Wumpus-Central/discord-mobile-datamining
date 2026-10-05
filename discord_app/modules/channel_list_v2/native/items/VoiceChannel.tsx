// === Module 16163: VoiceChannel ===

// Module 16163 (VoiceChannel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SortedVoiceStateStore2 from "SortedVoiceStateStore" /* 4914 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9260 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11673 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7038 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SortedVoiceStateStore = SortedVoiceStateStore2;
let channel, voiceStates;

let CHANNEL_MARGIN_VERTICAL;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
function handleVoiceChannelPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceChannelPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      guildId = guildId.getGuildId();
      if (null != guildId) {
        const obj4 = require("useShowMemberVerificationGate");
        if (obj4.shouldShowMembershipVerificationGate(guildId)) {
          c2 = 1;
          c3 = 1;
          const obj5 = { value: require("asyncRequire")(paths[13], paths.paths), done: false };
          return obj5;
        }
      }
      await require("asyncRequire")(paths[15], paths.paths);
      value.openGuildVoiceModal(guildId, "Channel List");
      await "IconComponent";
      return value.openMemberVerificationModal(guildId);
    })();
  });
  return obj(...arguments);
};
let react = react_mod;
const View = react_native.View;
const NO_VOICE_STATES = SortedVoiceStateStore2.NO_VOICE_STATES;
({ CHANNEL_SUBTITLE_TEXT_VARIANT: closure_12, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
({ AnalyticEvents: map1, Permissions: closure_14 } = Constants);
const jsx = Fragment.jsx;
obj = { channelInfo: obj2, voiceStates: { marginLeft: 36, marginTop: -4, marginBottom: 2 }, voiceStatesCollapsed: { marginLeft: 16 }, container: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, maxHeight: 1 };
obj3 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let collapsed;
  let embeddedActivitiesCount;
  let first;
  let locked;
  let selected;
  let subtitle;
  let tmp11;
  let tmp12;
  let tmp14;
  obj = channel(embeddedActivitiesCount[17]);
  const cResult = obj.c(52);
  channel = channel.channel;
  ({ selected, locked, collapsed } = channel);
  ({ subtitle, embeddedActivitiesCount } = channel);
  voiceStates = channel.voiceStates;
  let obj2 = channel(embeddedActivitiesCount[18]);
  const activeEvent = obj2.useActiveEvent(channel.id);
  let obj3 = channel(embeddedActivitiesCount[19]);
  const tmp5 = null != activeEvent || null != obj3.useStartTime(channel);
  const tmpResult = channel(embeddedActivitiesCount[20]);
  const ensureSyncedChannelVoiceStates = tmpResult.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  const tmpResult5 = channel(embeddedActivitiesCount[21]);
  const isConnectedToVoiceChannel = tmpResult5.useIsConnectedToVoiceChannel(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ReadStateStore, UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function c() {
      obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel) };
      return obj;
    };
    const items1 = [channel];
    cResult[1] = channel;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult6 = channel(embeddedActivitiesCount[22]);
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(first, tmp11, tmp12);
  const hasUnread = stateFromStoresObject.hasUnread;
  const mentionCount = stateFromStoresObject.mentionCount;
  const resolvedUnreadSetting = stateFromStoresObject.resolvedUnreadSetting;
  if (cResult[4] !== subtitle) {
    const tmpResult7 = channel(embeddedActivitiesCount[23]);
    const channelSubtitleData = tmpResult7.getChannelSubtitleData(subtitle);
    cResult[4] = subtitle;
    cResult[5] = channelSubtitleData;
    tmp14 = channelSubtitleData;
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
  const tmpResult8 = channel(embeddedActivitiesCount[24]);
  const gameMentionsAsPlainText = tmpResult8.useGameMentionsAsPlainText(text);
  if (cResult[6] === channel.id) {
    let tmp19;
    if (cResult[7] === gameMentionsAsPlainText) {
      tmp19 = cResult[8];
    }
    if (cResult[9] === channel) {
      if (cResult[10] === embeddedActivitiesCount) {
        if (cResult[11] === hasUnread) {
          if (cResult[12] === mentionCount) {
            let tmp23;
            if (cResult[13] === ensureSyncedChannelVoiceStates) {
              tmp23 = cResult[14];
            }
            if (cResult[15] === channel.name) {
              let tmp24;
              if (cResult[16] === tmp23) {
                tmp24 = cResult[17];
              }
              if (cResult[18] === channel) {
                if (cResult[19] === collapsed) {
                  let tmp26;
                  if (cResult[20] === ensureSyncedChannelVoiceStates) {
                    tmp26 = cResult[21];
                  }
                  if (cResult[22] === channel.guild_id) {
                    if (cResult[23] === channel.id) {
                      class B {
                        constructor() {
                          obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                          return getChannelA11yLabelDefault(obj);
                        }
                      }
                      if (tmp19 == null) {
                        if (tmp14 != null) {
                          const subtitle2 = tmp14.subtitle;
                        }
                        class B {
                          constructor() {
                            obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                            return getChannelA11yLabelDefault(obj);
                          }
                        }
                      }
                      if (cResult[27] === channel) {
                        if (cResult[28] === collapsed) {
                          if (cResult[29] === selected) {
                            let tmp32;
                            if (cResult[30] === ensureSyncedChannelVoiceStates) {
                              tmp32 = cResult[31];
                            }
                            if (cResult[32] !== channel) {
                              class Y {
                                constructor() {
                                  return handleVoiceChannelPress(channel);
                                }
                              }
                              class B {
                                constructor() {
                                  obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                                  return getChannelA11yLabelDefault(obj);
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
                                obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                                return getChannelA11yLabelDefault(obj);
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
                                  obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                                  return getChannelA11yLabelDefault(obj);
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
                                  obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                                  return getChannelA11yLabelDefault(obj);
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
                            cResult[51] = jsx(collapsed(embeddedActivitiesCount[35]), { onPress: Y, onLongPress: tmp37, style: obj.container, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp24, accessibilityHint: tmp40, channel, selected, locked, unread: hasUnread, resolvedUnreadSetting, subtitle: tmp19, isChannelLive: tmp5, channelInfo: tmp32, children: tmp42 });
                            const tmp47 = jsx(collapsed(embeddedActivitiesCount[35]), { onPress: Y, onLongPress: tmp37, style: obj.container, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp24, accessibilityHint: tmp40, channel, selected, locked, unread: hasUnread, resolvedUnreadSetting, subtitle: tmp19, isChannelLive: tmp5, channelInfo: tmp32, children: tmp42 });
                          }
                        }
                      }
                      const tmp35 = jsx(collapsed(embeddedActivitiesCount[32]), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
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
                      obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                      return getChannelA11yLabelDefault(obj);
                    }
                  }
                  const items2 = [, , ];
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
                  obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                  return getChannelA11yLabelDefault(obj);
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
                obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
                return getChannelA11yLabelDefault(obj);
              }
            }
            const obj6 = { expensive: tmp23, cheap: channel.name };
            const accessibilityLabelOrCheapFallbackUnsafe = obj10.getAccessibilityLabelOrCheapFallbackUnsafe(obj6);
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
        obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
        return getChannelA11yLabelDefault(obj);
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
    const obj9 = collapsed(embeddedActivitiesCount[25]);
    class B {
      constructor() {
        obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount };
        return getChannelA11yLabelDefault(obj);
      }
    }
    tmp21[0] = channel.id;
    tmp21[1] = closure_12;
    tmp21[2] = closure_12;
    result = obj9.parseVoiceChannelStatus(gameMentionsAsPlainText, true, tmp21);
  }
  cResult[6] = channel.id;
  cResult[7] = gameMentionsAsPlainText;
  cResult[8] = result;
  tmp19 = result;
}) : ((channel) => {
  let c4;
  let collapsed;
  let embeddedActivitiesCount;
  let items3;
  let locked;
  let mentionCount;
  let obj12;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  channel = channel.channel;
  ({ selected, collapsed, subtitle, embeddedActivitiesCount: importDefault } = channel);
  let ensureSyncedChannelVoiceStates;
  react = undefined;
  let gameMentionsAsPlainText;
  ({ locked, voiceStates } = channel);
  obj = channel(ensureSyncedChannelVoiceStates[18]);
  const activeEvent = obj.useActiveEvent(channel.id);
  const obj2 = channel(ensureSyncedChannelVoiceStates[19]);
  const startTime = obj2.useStartTime(channel);
  let obj3 = channel(ensureSyncedChannelVoiceStates[20]);
  ensureSyncedChannelVoiceStates = obj3.useEnsureSyncedChannelVoiceStates(channel.id, voiceStates);
  const obj4 = channel(ensureSyncedChannelVoiceStates[21]);
  const isConnectedToVoiceChannel = obj4.useIsConnectedToVoiceChannel(channel);
  const items = [ReadStateStore, UserGuildSettingsStore];
  const items1 = [channel];
  const obj5 = channel(ensureSyncedChannelVoiceStates[22]);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items, () => {
    obj = { hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel) };
    return obj;
  }, items1);
  let hasUnread = stateFromStoresObject.hasUnread;
  ({ mentionCount: c4, resolvedUnreadSetting } = stateFromStoresObject);
  const obj6 = channel(ensureSyncedChannelVoiceStates[23]);
  const channelSubtitleData = obj6.getChannelSubtitleData(subtitle);
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
  const tmpResult = channel(ensureSyncedChannelVoiceStates[24]);
  gameMentionsAsPlainText = tmpResult.useGameMentionsAsPlainText(text);
  let result = null;
  if (null != gameMentionsAsPlainText) {
    const obj7 = { channelId: channel.id, linkVariant: textVariant, textVariant };
    const obj8 = require("MarkupUtils");
    result = obj8.parseVoiceChannelStatus(gameMentionsAsPlainText, true, obj7);
  }
  const items2 = [, , ];
  const obj9 = {
    expensive() {
      obj = { channel, unread: hasUnread, mentionCount, voiceStates: ensureSyncedChannelVoiceStates, embeddedActivitiesCount: importDefault };
      return getChannelA11yLabelDefault(obj);
    },
    cheap: channel.name
  };
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  items2[2] = gameMentionsAsPlainText;
  const tmpResult3 = channel(ensureSyncedChannelVoiceStates[27]);
  const accessibilityLabelOrCheapFallbackUnsafe = tmpResult3.getAccessibilityLabelOrCheapFallbackUnsafe(obj9);
  const effect = react.useEffect(() => {
    if (null !== gameMentionsAsPlainText) {
      const obj3 = { guild_id: null, channel_id: null };
      ({ guild_id: obj2.guild_id, id: obj2.channel_id } = channel);
      obj = AnalyticsUtilsDefault;
      obj.track(map1.VOICE_CHANNEL_TOPIC_VIEWED, obj3);
    }
  }, items2);
  if (result == null) {
    let subtitle1;
    if (channelSubtitleData != null) {
      subtitle1 = channelSubtitleData.subtitle;
    }
    result = subtitle1;
  }
  const tmp19 = jsx(require("ChannelInfo"), { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, voiceStates: ensureSyncedChannelVoiceStates, enableConnectedUserLimit: true, enableActivities: true });
  require("ChannelItem");
  const intl = tmp(tmp2[34]).intl;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  let tmp17Result = null;
  if (0 !== ensureSyncedChannelVoiceStates.length) {
    if (collapsed) {
      const obj11 = { channels: items3, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: obj12 };
      items3 = [channel];
      obj12 = {};
      obj12[channel.id] = ensureSyncedChannelVoiceStates;
      const tmpResult4 = channel(ensureSyncedChannelVoiceStates[28]);
      const summarizedVoiceUsers = tmpResult4.computeSummarizedVoiceUsers(obj11);
      tmp17Result = <gameMentionsAsPlainText style={obj.voiceStatesCollapsed}>{null}</gameMentionsAsPlainText>;
    } else {
      tmp17Result = <gameMentionsAsPlainText style={obj.voiceStates}>{null}</gameMentionsAsPlainText>;
    }
  }
  return <tmp20 onPress={function onPress() {
    return handleVoiceChannelPress(channel);
  }} onLongPress={function onLongPress() {
    obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }} style={obj.container} accessible accessibilityRole="button" accessibilityLabel={accessibilityLabelOrCheapFallbackUnsafe} accessibilityHint={intl.string(channel(ensureSyncedChannelVoiceStates[34]).t["9C444m"])} channel={channel} selected={selected} locked={locked} unread={hasUnread} resolvedUnreadSetting={resolvedUnreadSetting} subtitle={result} isChannelLive={null != activeEvent || null != startTime} channelInfo={tmp19}>{tmp17Result}</tmp20>;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let bypassLimit;
  let collapsed;
  let first;
  let locked;
  let selected;
  let subtitle;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  obj = channel(576);
  const cResult = obj.c(16);
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const arr3 = useEmbeddedAppsForChannelDefault(channel);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore, CollapsedVoiceChannelStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== channel) {
    const fn2 = function p() {
      obj = { locked: !PermissionStore.can(constants.CONNECT, channel), bypassLimit: PermissionStore.can(constants.MOVE_MEMBERS, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
      return obj;
    };
    cResult[5] = channel;
    cResult[6] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
  }
  const tmpResult2 = channel(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, tmp12);
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
                let tmp15;
                if (cResult[14] === tmp14) {
                  tmp15 = cResult[15];
                }
                return tmp15;
              }
            }
          }
        }
      }
    }
  }
  const tmp16 = <closure_19 channel={channel} embeddedActivitiesCount={num8} collapsed={collapsed} voiceStates={tmp14} selected={selected} locked={locked} bypassLimit={bypassLimit} subtitle={subtitle} />;
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
}) : ((channel) => {
  let bypassLimit;
  let collapsed;
  let locked;
  let selected;
  let subtitle;
  channel = channel.channel;
  ({ selected, subtitle } = channel);
  obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(channel.guild_id), items1);
  const arr3 = useEmbeddedAppsForChannelDefault(channel);
  const items2 = [PermissionStore, CollapsedVoiceChannelStore];
  const obj2 = channel(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    obj = { locked: !PermissionStore.can(constants.CONNECT, channel), bypassLimit: PermissionStore.can(constants.MOVE_MEMBERS, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
    return obj;
  });
  let num;
  ({ locked, bypassLimit, collapsed } = stateFromStoresObject);
  if (arr3 != null) {
    num = arr3.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp5 = stateFromStores[channel.id];
  if (tmp5 == null) {
    tmp5 = NO_VOICE_STATES;
  }
  return <closure_19 channel={channel} embeddedActivitiesCount={num} collapsed={collapsed} voiceStates={tmp5} selected={selected} locked={locked} bypassLimit={bypassLimit} subtitle={subtitle} />;
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/VoiceChannel.tsx");

export default memo2Result;
export const VOICE_USERS_MARGIN_TOP = -4;
export const VOICE_USERS_MARGIN_BOTTOM = 2;