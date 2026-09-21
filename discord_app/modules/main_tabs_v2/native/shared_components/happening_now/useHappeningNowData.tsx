// === Module 16399: useHappeningNowData ===

// Module 16399 (useHappeningNowData)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7528 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7554 */;
import ActiveChannelsActionCreators from "ActiveChannelsActionCreators" /* 16400 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5494 */;
import ActiveChannelsStore from "ActiveChannelsStore" /* 13971 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7768 */;
import StageInstanceStore from "StageInstanceStore" /* 2046 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7895 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7521 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildChannelStore from "GuildChannelStore" /* 2096 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import PresenceStore from "PresenceStore" /* 4796 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4775 */;

const require = globalThis.__r;

require = fn;
let GuildScheduledEventStore = fn(7768);
({ eventScheduledToStartWithin: closure_8, isEventUpcoming: closure_9, isGuildScheduledEventActive: c10 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const MemberListRowTypes = fn(7521).MemberListRowTypes;
let closure_20 = fn(2096).GUILD_SELECTABLE_CHANNELS_KEY;
const HappeningNowItem = fn(15566).HappeningNowItem;
const Constants = fn(1074);
({ ActivityFlags: closure_29, GuildFeatures: closure_30, Permissions: items, StatusTypes: closure_32 } = Constants);
items = [ChannelStore, ChannelMemberStore, VoiceStateStore, UserStore];
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx");

export default function useHappeningNowData(has, guildId) {
  _require = has;
  guildId = guildId.guildId;
  const withoutUserCards = guildId.withoutUserCards;
  const showMultipleActivitiesPerChannel = guildId.showMultipleActivitiesPerChannel;
  _slicedToArray = tmp;
  const isFocused = guildId.isFocused;
  let hasItem = has.has(callback4.LIVE_GUILD_STAGE);
  const hasItem1 = has.has(callback4.EMBEDDED_ACTIVITY);
  const hasItem2 = has.has(callback4.STREAMS);
  const hasItem3 = has.has(callback4.USER_CUSTOM_STATUS);
  const hasItem4 = has.has(callback4.ACTIVITIES);
  const hasItem5 = has.has(callback4.USER);
  const effect = isFocused.useEffect(() => {
    const userAffinitiesV2 = has(withoutUserCards[22]).fetchUserAffinitiesV2();
  }, []);
  items = [hasItem1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => hasItem1.isConnected());
  let obj2 = require("initialize");
  let items1 = [stateFromStores3];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => null != stateFromStores3.getSessionId());
  let items2 = [has, stateFromStores1, guildId, isFocused, stateFromStores];
  const callback = isFocused.useCallback(() => {
    if (null != guildId) {
      if (has.has(HappeningNowItem.ACTIVE_CHANNEL)) {
        if (stateFromStores1) {
          if (stateFromStores) {
            if (isFocused) {
              const activeChannelsFetchStatus = ActiveChannelsStore.getActiveChannelsFetchStatus(guildId);
              let tmp7 = null == activeChannelsFetchStatus || null == activeChannelsFetchStatus.fetchedAt;
              if (!tmp7) {
                const _Date = Date;
                tmp7 = Date.now() - activeChannelsFetchStatus.fetchedAt > 300000;
              }
              if (tmp7) {
                const activeChannels = ActiveChannelsActionCreators.fetchActiveChannels(guildId);
              }
            }
          }
        }
      }
    }
  }, items2);
  const items3 = [callback];
  const effect1 = isFocused.useEffect(() => {
    callback();
  }, items3);
  let obj3 = require("initialize");
  const items4 = [stateFromStores7];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => {
    let guild = null;
    if (null != guildId) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let obj4 = require("initialize");
  const items5 = [callback2];
  stateFromStores3 = require("initialize").useStateFromStores(items5, () => {
    let defaultChannel = null;
    if (null != guildId) {
      defaultChannel = GuildChannelStore.getDefaultChannel(tmp);
    }
    return defaultChannel;
  });
  const obj5 = require("initialize");
  const firstGloballyViewbleGuildChannelId = require("useFirstGloballyViewbleGuildChannelId").useFirstGloballyViewbleGuildChannelId(guildId);
  let obj6 = require("useFirstGloballyViewbleGuildChannelId");
  const items6 = [callback2];
  const stateFromStores4 = require("initialize").useStateFromStores(items6, () => {
    let channels = null;
    if (null != guildId) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  });
  const items7 = [stateFromStores1, stateFromStores3, firstGloballyViewbleGuildChannelId, guildId, isFocused, stateFromStores];
  const callback1 = isFocused.useCallback(() => {
    let tmp = stateFromStores1;
    if (stateFromStores1) {
      tmp = stateFromStores;
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      tmp = null != guildId;
    }
    if (tmp) {
      tmp = null != stateFromStores3;
    }
    if (tmp) {
      GuildSubscriptionsActionCreators.subscribeGuild(guildId);
      GuildSubscriptionsActionCreators.subscribeChannel(guildId, stateFromStores3.id, GuildChannelSubscriptions.DEFAULT_RANGES);
      if (tmp14) {
        GuildSubscriptionsActionCreators.subscribeChannel(guildId, firstGloballyViewbleGuildChannelId, GuildChannelSubscriptions.DEFAULT_RANGES);
        const tmp6Result = GuildSubscriptionsActionCreators;
      }
      tmp14 = null != firstGloballyViewbleGuildChannelId && firstGloballyViewbleGuildChannelId !== stateFromStores3.id;
    }
  }, items7);
  const items8 = [callback1];
  const effect2 = isFocused.useEffect(() => {
    callback1();
  }, items8);
  const items9 = [callback, callback1];
  callback2 = isFocused.useCallback(() => {
    callback();
    callback1();
  }, items9);
  const items10 = [callback2];
  const effect3 = isFocused.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", callback2);
    return () => {
      guildId(withoutUserCards[28]).unsubscribe("CONNECTION_OPEN", callback2);
    };
  }, items10);
  let obj7 = require("initialize");
  let tmp23 = isFocused;
  if (isFocused) {
    tmp23 = !obj8.useIsVoicePanelFullscreen();
  }
  closure_20 = tmp23;
  obj8 = require("VoicePanelUtils");
  const items11 = [firstGloballyViewbleGuildChannelId];
  const stateFromStores5 = require("initialize").useStateFromStores(items11, () => {
    if (null != guildId) {
      if (null != stateFromStores3) {
        const props = ChannelMemberStore.getProps(tmp, tmp2.id);
        let tmp5 = null == props || null == props.groups;
        if (!tmp5) {
          tmp5 = props.groups.length <= 0;
        }
        let tmp6 = !tmp5;
        if (!tmp5) {
          tmp6 = props.groups[0].id === constants.UNKNOWN;
        }
        return tmp6;
      }
    }
    return false;
  });
  const tmp9Result = require("initialize");
  const items12 = [hasItem2];
  const items13 = [guildId, has];
  let stateFromStores6 = require("initialize").useStateFromStores(items12, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      hasItem = has.has(HappeningNowItem.ACTIVE_CHANNEL);
      if (hasItem) {
        hasItem = null == ActiveChannelsStore.getActiveChannelIds(tmp);
      }
      tmp2 = hasItem;
    }
    return tmp2;
  }, items13);
  const tmp9Result8 = require("initialize");
  const items14 = [callback];
  stateFromStores7 = require("initialize").useStateFromStores(items14, () => callback.getUserAffinities());
  const tmp9Result9 = require("initialize");
  const items15 = [stateFromStores6];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items15, () => stateFromStores6.getFriendIDs());
  const tmp9Result10 = require("initialize");
  const items16 = [stateFromStoresArray];
  const items17 = [guildId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items16, () => {
    const obj = { permissionChannelsVersion: PermissionStore.getChannelsVersion(), permissionGuildVersion: null };
    let guildVersion = null;
    if (null != guildId) {
      guildVersion = PermissionStore.getGuildVersion(tmp);
    }
    obj.permissionGuildVersion = guildVersion;
    return obj;
  }, items17);
  const tmp9Result11 = require("initialize");
  const items18 = [hasItem2];
  const items19 = [guildId];
  const stateFromStores8 = require("initialize").useStateFromStores(items18, () => {
    let activeChannelIds = null;
    if (null != guildId) {
      activeChannelIds = ActiveChannelsStore.getActiveChannelIds(tmp);
    }
    return activeChannelIds;
  }, items19);
  const tmp9Result12 = require("initialize");
  const items20 = [stateFromStores];
  const items21 = [guildId];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items20, () => GuildScheduledEventStore.getGuildScheduledEventsForGuild(guildId), items21);
  const tmp9Result13 = require("initialize");
  const items22 = [hasItem];
  const items23 = [guildId];
  let tmp32 = !stateFromStores1;
  const stateFromStoresArray2 = require("initialize").useStateFromStoresArray(items22, () => {
    if (null == guildId) {
      items = [];
    } else {
      items = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
    }
    return items;
  }, items23);
  if (stateFromStores1) {
    tmp32 = stateFromStores5;
  }
  if (!tmp32) {
    tmp32 = stateFromStores6;
  }
  stateFromStores6 = tmp32;
  const ref = obj.useRef({ guildId, hasComputed: false });
  const items24 = [guildId, stateFromStores7, stateFromStores3, hasItem, stateFromStoresArray, stateFromStoresArray1, hasItem5, hasItem2, hasItem1, undefined !== showMultipleActivitiesPerChannel && showMultipleActivitiesPerChannel, hasItem3, hasItem4, has, withoutUserCards, stateFromStores2, stateFromStores4, stateFromStores8, stateFromStoresObject, stateFromStoresArray2];
  const callback3 = obj.useCallback(() => AppStartPerformanceDefault.time("\u{1F3A8}", "computeHappeningNowState", () => {
    function addUser(userId, type, channelId) {
      const voiceState = channelId;
      if (!stateFromStores6.isBlockedOrIgnored(userId)) {
        channelId = undefined;
        if (channelId != null) {
          channelId = channelId.channelId;
        }
        const channel = callback1.getChannel(channelId);
        if (!obj4.isChannelContentGated(channel)) {
          if (null != channel) {
            if (channel.isGroupDM()) {
              if (null != channelId) {
                let tmp34 = guildId;
                if (guildId == null) {
                  guildId = undefined;
                  if (channel != null) {
                    guildId = channel.getGuildId();
                  }
                  tmp34 = guildId;
                }
                const streamForUser = stateFromStores2.getStreamForUser(userId, tmp34);
                if (null != streamForUser) {
                  if (hasItem2) {
                    const obj3 = { userId, guildId: tmp33, kind: "activity", activity: tmp5, stream: null };
                    if (null == tmp33) {
                      const tmp54 = streamForUser;
                    } else {
                      let guildId1;
                      if (streamForUser != null) {
                        guildId1 = streamForUser.guildId;
                      }
                    }
                    obj3.stream = tmp54;
                    closure_1_5[userId] = obj3;
                  }
                }
                if (null != channel) {
                  if (!set1.has(channel.id)) {
                    if (channel.isGuildStageVoice()) {
                      if (stateFromStores6.isFriend(userId)) {
                        const stageInstanceByChannel = stateFromStores1.getStageInstanceByChannel(channel.id);
                        if (null != stageInstanceByChannel) {
                          if (stateFromStoresArray.can(constants2.CONNECT, channel)) {
                            const obj6 = { kind: "live-guild-stage", stage: stageInstanceByChannel };
                            closure_1_2[channel.id] = obj6;
                          }
                        }
                      }
                    } else {
                      if (hasItem1) {
                        const embeddedActivitiesForChannel = hasItem.getEmbeddedActivitiesForChannel(channel.id);
                        if (closure_2_3) {
                          const found = embeddedActivitiesForChannel.filter((userIds) => {
                            items = [...userIds.userIds];
                            return items.some(() => { ... });
                          });
                          closure_1_4[channel.id] = found.map((activity) => ({ kind: "embedded-activity", userId, voiceState, guildId: set1, activity }));
                        } else {
                          const result = tmp3(withoutUserCards[33]).findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel);
                          if (null !== result) {
                            const obj7 = { kind: "embedded-activity", userId, voiceState: channelId, guildId: tmp33, activity: result };
                            items = [obj7];
                            closure_1_4[channel.id] = items;
                          }
                          const tmp3Result = tmp3(withoutUserCards[33]);
                        }
                      }
                      const obj8 = { kind: "voice", userId, voiceState: channelId, guildId: null };
                      let tmp45 = tmp33;
                      if (tmp33 == null) {
                        let guildId2;
                        if (channel != null) {
                          guildId2 = channel.getGuildId();
                        }
                        tmp45 = guildId2;
                      }
                      obj8.guildId = tmp45;
                      closure_1_3[channel.id] = obj8;
                    }
                  }
                }
              }
            }
          }
          if (null != type) {
            if (tmp3Result3.isActivityPermanentCustomStatus(tmp5)) {
              if (hasItem3) {
                const obj9 = { kind: "activity", userId, guildId, activity: tmp5 };
                closure_1_8.push(obj9);
              }
            } else {
              if (tmp3Result4.isActivityTemporaryCustomStatus(tmp5)) {
                if (hasItem3) {
                  const obj10 = { userId, guildId, kind: "activity", activity: tmp5 };
                  closure_1_7[userId] = obj10;
                }
              } else if (hasItem4) {
                let tmp17 = guildId(withoutUserCards[36])(tmp5, constants.EMBEDDED);
                if (tmp17) {
                  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(userId, tmp5.session_id);
                  let channelId1;
                  if (voiceStateForSession != null) {
                    channelId1 = voiceStateForSession.channelId;
                  }
                  const channel1 = callback1.getChannel(channelId1);
                  let guildId3;
                  if (channel1 != null) {
                    guildId3 = channel1.getGuildId();
                  }
                  tmp17 = guildId3 !== guildId;
                }
                if (!tmp17) {
                  const obj11 = { userId, guildId, kind: "activity", activity: tmp5 };
                  closure_1_6[userId] = obj11;
                }
              }
              tmp3Result4 = tmp3(withoutUserCards[35]);
            }
            tmp3Result3 = tmp3(withoutUserCards[34]);
          } else if (hasItem5) {
            const status = stateFromStoresArray1.getStatus(userId, guildId);
            if (null != status) {
              if (status === constants3.OFFLINE) {
                const obj12 = { kind: "user", userId, guildId: tmp8 };
                closure_1_9.push(obj12);
              } else {
                const obj13 = { kind: "user", userId, guildId: tmp8 };
                closure_1_8.push(obj13);
              }
            }
          }
        }
        obj4 = set(withoutUserCards[32]);
      }
    }
    ref.current.guildId = set1;
    ref.current.hasComputed = true;
    const set = new Set();
    const bound = Math.min(length.length, 50);
    for (let num = 0; num < bound; num = num + 1) {
      let addResult = set.add(length[num].otherUserId);
    }
    for (const item10043 of closure_22) {
      let addResult1 = set.add(item10043);
      continue;
    }
    mutablePrivateChannels = mutablePrivateChannels.getMutablePrivateChannels();
    for (const key10053 in mutablePrivateChannels) {
      let obj2 = mutablePrivateChannels[key10053];
      if (!obj2.isPrivate()) {
        continue;
      } else {
        let addResult2 = set.add(obj2.getRecipientId());
        continue;
      }
      continue;
    }
    if (null == set1) {
      items = [];
      const item = items.forEach((type) => {
        if (type.type === stateFromStores4.MEMBER) {
          set.add(type.userId);
        }
      });
      const items1 = [];
      const items2 = [];
      const _Set = Set;
      set1 = new Set();
      dependencyMap[Symbol.iterator]();
      let num2 = 604800;
    } else {
      num2 = closure_15;
    }
    items = rows.getRows(set1, num2.id);
  }), items24);
  const tmp35 = _slicedToArray(isFocused.useState(() => {
    if (stateFromStores6) {
      return [];
    } else {
      const arr = callback3();
      if (null != guildId) {
        const obj2 = {
          type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT",
          count: arr.filter((kind) => {
                kind = kind.kind;
                let tmp = "active-channel" === kind;
                if (!tmp) {
                  tmp = "voice" === kind;
                }
                if (!tmp) {
                  tmp = "live-guild-stage" === kind;
                }
                if (!tmp) {
                  tmp = "unified-vc" === kind;
                }
                if (!tmp) {
                  tmp = "embedded-activity" === kind;
                }
                return tmp;
              }).length,
          guildId: tmp2
        };
        DispatcherDefault.dispatch(obj2);
      }
      return arr;
    }
  }), 2);
  closure_27 = tmp35[1];
  const items25 = [callback3, guildId];
  callback4 = obj.useCallback(() => {
    const arr = callback3();
    closure_27(arr);
    if (null != guildId) {
      const obj2 = {
        type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT",
        count: arr.filter((kind) => {
            kind = kind.kind;
            let tmp = "active-channel" === kind;
            if (!tmp) {
              tmp = "voice" === kind;
            }
            if (!tmp) {
              tmp = "live-guild-stage" === kind;
            }
            if (!tmp) {
              tmp = "unified-vc" === kind;
            }
            if (!tmp) {
              tmp = "embedded-activity" === kind;
            }
            return tmp;
          }).length,
        guildId: tmp2
      };
      DispatcherDefault.dispatch(obj2);
    }
  }, items25);
  const items26 = [guildId, tmp32, tmp23, callback4];
  const effect4 = obj.useEffect(() => {
    if (guildId !== ref.current.guildId) {
      const obj = { guildId: tmp, hasComputed: false };
      ref.current = obj;
    }
    if (ref.current.hasComputed) {
      if (closure_20) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback4();
        }, 50);
        return () => clearTimeout(closure_0);
      }
    } else if (!stateFromStores6) {
      callback4();
    }
  }, items26);
  let id;
  if (stateFromStores3 != null) {
    id = stateFromStores3.id;
  }
  closure_129_0 = guildId;
  closure_129_1 = id;
  closure_129_2 = isFocused;
  closure_129_3 = callback4;
  closure_129_4 = obj.useRef(-1);
  closure_129_5 = obj.useRef(0);
  const items27 = [guildId, id, callback4, isFocused];
  const callback5 = obj.useCallback(() => {
    if (-1 !== isFocused.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(isFocused.current);
    }
    if (withoutUserCards) {
      const _setTimeout = setTimeout;
      isFocused.current = setTimeout(() => {
        const userStoreVersion = callback3.getUserStoreVersion();
        const sum = userStoreVersion + callback1.getPrivateChannelsVersion();
        let num = -1;
        const sum1 = sum + voiceStateVersion.getVoiceStateVersion();
        if (null != has) {
          num = -1;
          if (null != guildId) {
            num = firstGloballyViewbleGuildChannelId.getProps(tmp4, tmp5).version;
          }
        }
        const sum2 = sum1 + num;
        if (ref.current !== sum2) {
          ref.current = sum2;
          closure_1_3();
        }
      }, 1000);
    }
  }, items27);
  closure_129_6 = callback5;
  const items28 = [callback5];
  const effect5 = obj.useEffect(() => {
    let item = items.forEach((addChangeListener) => {
      addChangeListener.addChangeListener(hasItem1);
    });
    return () => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      const item = items.forEach((removeChangeListener) => {
        removeChangeListener.removeChangeListener(closure_1_6);
      });
    };
  }, items28);
  const items29 = [tmp35[0], ];
  if (!tmp32) {
    tmp32 = !guildId(tmp10[40])(ref).hasComputed;
  }
  items29[1] = tmp32;
  return items29;
};