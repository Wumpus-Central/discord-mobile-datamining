// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx
import AppStartPerformanceDefault from "../../../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import GuildChannelStore2 from "../../../../../stores/GuildChannelStore.tsx";
import ChannelMemberStore2 from "../../../../../stores/ChannelMemberStore.tsx";
import GuildChannelSubscriptions from "../../../../../lib/guild/GuildChannelSubscriptions.tsx";
import GuildSubscriptionsActionCreators from "../../../../../actions/GuildSubscriptionsActionCreators.tsx";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import ActiveChannelsActionCreators from "../../../../active_channels/ActiveChannelsActionCreators.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../../activities/EmbeddedActivitiesStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import ActiveChannelsStore from "../../../../guild_home/ActiveChannelsStore.tsx";
import GuildScheduledEventStore_mod from "../../../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import StageInstanceStore from "../../../../stage_channels/StageInstanceStore.tsx";
import UserAffinitiesV2Store from "../../../../user_affinities/UserAffinitiesV2Store.tsx";
import ApplicationStreamingStore from "../../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import Constants from "../../../../../Constants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ChannelMemberStore = ChannelMemberStore2;
const GuildChannelStore = GuildChannelStore2;
let _require, dependencyMap, mutablePrivateChannels, rows, set, set2, user, userStoreVersion;

let c10;
let c9;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({
  eventScheduledToStartWithin: metroImportAll,
  isEventUpcoming: c9,
  isGuildScheduledEventActive: c10,
} = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
const MemberListRowTypes = ChannelMemberStore2.MemberListRowTypes;
let closure_20 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const HappeningNowItem = HappeningNowConstants.HappeningNowItem;
({
  ActivityFlags: closure_29,
  GuildFeatures: closure_30,
  Permissions: closure_31,
  StatusTypes: closure_32,
} = Constants);
let items = [ChannelStore, ChannelMemberStore, VoiceStateStore, UserStore];
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let closure_0;
      let closure_2;
      let privateChannelsVersion;
      let props;
      let ref;
      let voiceStateVersion;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      let closure_3 = arg3;
      const obj = require("react");
      const cResult = obj.c(8);
      const obj2 = react;
      react = react.useRef(-1);
      let closure_5 = react.useRef(0);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          if (cResult[2] === arg2) {
            let tmp2;
            let tmp4;
            let tmp3;
            if (cResult[3] === arg3) {
              tmp2 = cResult[4];
            }
            let closure_6 = tmp2;
            if (cResult[5] !== tmp2) {
              const fn2 = function h() {
                let item = items.forEach((addChangeListener) => {
                  addChangeListener.addChangeListener(closure_1_6);
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
              };
              items = [tmp2];
              let num = 5;
              cResult[5] = tmp2;
              cResult[6] = fn2;
              cResult[7] = items;
              tmp4 = items;
              tmp3 = fn2;
            } else {
              tmp3 = cResult[6];
              tmp4 = cResult[7];
            }
            const effect = obj2.useEffect(tmp3, tmp4);
          }
        }
      }
      const fn = function l() {
        if (-1 !== ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        if (closure_2) {
          const tmp5 = globalThis;
          const _setTimeout = setTimeout;
          let num = 1000;
          ref.current = setTimeout(() => {
            userStoreVersion = userStoreVersion.getUserStoreVersion();
            const sum = userStoreVersion + privateChannelsVersion.getPrivateChannelsVersion();
            let num = -1;
            const sum1 = sum + voiceStateVersion.getVoiceStateVersion();
            if (null != closure_1_0) {
              num = -1;
              if (null != closure_1_1) {
                num = props.getProps(tmp4, tmp5).version;
              }
            }
            const sum2 = sum1 + num;
            if (ref.current !== sum2) {
              ref.current = sum2;
              closure_1_3();
            }
          }, 1000);
        }
      };
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = arg2;
      cResult[3] = arg3;
      cResult[4] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1, arg2, arg3) => {
      let privateChannelsVersion;
      let props;
      let ref;
      let voiceStateVersion;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      react = react.useRef(-1);
      let closure_5 = react.useRef(0);
      items = [arg0, arg1, arg3, arg2];
      const callback = react.useCallback(() => {
        if (-1 !== ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        if (closure_2) {
          const tmp5 = globalThis;
          const _setTimeout = setTimeout;
          let num = 1000;
          ref.current = setTimeout(() => {
            userStoreVersion = userStoreVersion.getUserStoreVersion();
            const sum = userStoreVersion + privateChannelsVersion.getPrivateChannelsVersion();
            let num = -1;
            const sum1 = sum + voiceStateVersion.getVoiceStateVersion();
            if (null != closure_1_0) {
              num = -1;
              if (null != closure_1_1) {
                num = props.getProps(tmp4, tmp5).version;
              }
            }
            const sum2 = sum1 + num;
            if (ref.current !== sum2) {
              ref.current = sum2;
              closure_1_3();
            }
          }, 1000);
        }
      }, items);
      const items1 = [callback];
      const effect = react.useEffect(() => {
        let item = items.forEach((addChangeListener) => {
          addChangeListener.addChangeListener(callback);
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
      }, items1);
    };
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx",
);

export default function useHappeningNowData(has, guildId) {
  let callback2;
  let callback4;
  let closure_27;
  let closure_3;
  let constants2;
  let constants3;
  let first;
  let stateFromStores3;
  let stateFromStores7;
  const f122423 = (kind) => {
    kind = kind.kind;
    return (
      "active-channel" === kind ||
      "voice" === kind ||
      "live-guild-stage" === kind ||
      "unified-vc" === kind ||
      "embedded-activity" === kind
    );
  };
  _require = has;
  guildId = guildId.guildId;
  const withoutUserCards = guildId.withoutUserCards;
  const showMultipleActivitiesPerChannel = guildId.showMultipleActivitiesPerChannel;
  let tmp = undefined !== showMultipleActivitiesPerChannel && showMultipleActivitiesPerChannel;
  _slicedToArray = tmp;
  const isFocused = guildId.isFocused;
  let hasItem = has.has(callback4.LIVE_GUILD_STAGE);
  let hasItem1 = has.has(callback4.EMBEDDED_ACTIVITY);
  let hasItem2 = has.has(callback4.STREAMS);
  const hasItem3 = has.has(callback4.USER_CUSTOM_STATUS);
  const hasItem4 = has.has(callback4.ACTIVITIES);
  const hasItem5 = has.has(callback4.USER);
  let obj = isFocused;
  const effect = isFocused.useEffect(() => {
    const obj = has(withoutUserCards[24]);
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
  }, []);
  const tmp9 = _require;
  const tmp10 = withoutUserCards;
  let obj2 = require("get initialized");
  items = [hasItem1];
  const stateFromStores = obj2.useStateFromStores(items, () => hasItem1.isConnected());
  let obj3 = require("get initialized");
  let items1 = [stateFromStores3];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => null != stateFromStores3.getSessionId());
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
                const obj = ActiveChannelsActionCreators;
                const activeChannels = obj.fetchActiveChannels(guildId);
              }
            }
          }
        }
      }
    }
  }, items2);
  let items3 = [callback];
  const effect1 = isFocused.useEffect(() => {
    callback();
  }, items3);
  let obj4 = require("get initialized");
  let items4 = [stateFromStores7];
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let guild = null;
    if (null != guildId) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let obj5 = require("get initialized");
  let items5 = [callback2];
  stateFromStores3 = obj5.useStateFromStores(items5, () => {
    let defaultChannel = null;
    if (null != guildId) {
      defaultChannel = GuildChannelStore.getDefaultChannel(tmp);
    }
    return defaultChannel;
  });
  let obj6 = require("useFirstGloballyViewbleGuildChannelId");
  const firstGloballyViewbleGuildChannelId = obj6.useFirstGloballyViewbleGuildChannelId(guildId);
  let obj7 = require("get initialized");
  const items6 = [callback2];
  const stateFromStores4 = obj7.useStateFromStores(items6, () => {
    let channels = null;
    if (null != guildId) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  });
  const items7 = [
    stateFromStores1,
    stateFromStores3,
    firstGloballyViewbleGuildChannelId,
    guildId,
    isFocused,
    stateFromStores,
  ];
  const callback1 = isFocused.useCallback(() => {
    const tmp = stateFromStores1 && stateFromStores && isFocused && null != guildId && null != stateFromStores3;
    if (tmp) {
      const obj = GuildSubscriptionsActionCreators;
      obj.subscribeGuild(guildId);
      const obj2 = GuildSubscriptionsActionCreators;
      obj2.subscribeChannel(guildId, stateFromStores3.id, GuildChannelSubscriptions.DEFAULT_RANGES);
      const tmp14 =
        null != firstGloballyViewbleGuildChannelId && firstGloballyViewbleGuildChannelId !== stateFromStores3.id;
      if (tmp14) {
        const tmp6Result = GuildSubscriptionsActionCreators;
        tmp6Result.subscribeChannel(
          guildId,
          firstGloballyViewbleGuildChannelId,
          GuildChannelSubscriptions.DEFAULT_RANGES,
        );
      }
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
    let obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", callback2);
    return () => {
      const obj = guildId(withoutUserCards[30]);
      obj.unsubscribe("CONNECTION_OPEN", callback2);
    };
  }, items10);
  let obj8 = require("VoicePanelUtils");
  let tmp23 = isFocused && !obj8.useIsVoicePanelFullscreen();
  closure_20 = tmp23;
  const items11 = [firstGloballyViewbleGuildChannelId];
  const tmp9Result = tmp9(tmp10[25]);
  const stateFromStores5 = tmp9Result.useStateFromStores(items11, () => {
    if (null != guildId) {
      if (null != stateFromStores3) {
        const props = ChannelMemberStore.getProps(tmp, tmp2.id);
        return (
          !(null == props || null == props.groups || props.groups.length <= 0) &&
          props.groups[0].id === constants3.UNKNOWN
        );
      }
    }
    return false;
  });
  const items12 = [hasItem2];
  const items13 = [guildId, has];
  const tmp9Result8 = tmp9(tmp10[25]);
  let stateFromStores6 = tmp9Result8.useStateFromStores(
    items12,
    () => {
      let tmp2 = null != guildId;
      if (tmp2) {
        hasItem = has.has(HappeningNowItem.ACTIVE_CHANNEL) && null == ActiveChannelsStore.getActiveChannelIds(tmp);
        tmp2 = hasItem;
      }
      return tmp2;
    },
    items13,
  );
  const items14 = [callback];
  const tmp9Result9 = tmp9(tmp10[25]);
  stateFromStores7 = tmp9Result9.useStateFromStores(items14, () => callback.getUserAffinities());
  const items15 = [stateFromStores6];
  const tmp9Result10 = tmp9(tmp10[25]);
  const stateFromStoresArray = tmp9Result10.useStateFromStoresArray(items15, () => stateFromStores6.getFriendIDs());
  const items16 = [stateFromStoresArray];
  const items17 = [guildId];
  const tmp9Result11 = tmp9(tmp10[25]);
  const stateFromStoresObject = tmp9Result11.useStateFromStoresObject(
    items16,
    () => {
      let guildVersion;
      const obj = {
        permissionChannelsVersion: PermissionStore.getChannelsVersion(),
        permissionGuildVersion: guildVersion,
      };
      guildVersion = null;
      if (null != guildId) {
        guildVersion = PermissionStore.getGuildVersion(tmp);
      }
      return obj;
    },
    items17,
  );
  const items18 = [hasItem2];
  const items19 = [guildId];
  const tmp9Result12 = tmp9(tmp10[25]);
  const stateFromStores8 = tmp9Result12.useStateFromStores(
    items18,
    () => {
      let activeChannelIds = null;
      if (null != guildId) {
        activeChannelIds = ActiveChannelsStore.getActiveChannelIds(tmp);
      }
      return activeChannelIds;
    },
    items19,
  );
  const items20 = [stateFromStores];
  const items21 = [guildId];
  const tmp9Result13 = tmp9(tmp10[25]);
  const stateFromStoresArray1 = tmp9Result13.useStateFromStoresArray(
    items20,
    () => GuildScheduledEventStore.getGuildScheduledEventsForGuild(guildId),
    items21,
  );
  const items22 = [hasItem];
  const items23 = [guildId];
  let tmp32 = !stateFromStores1;
  const tmp9Result14 = tmp9(tmp10[25]);
  const stateFromStoresArray2 = tmp9Result14.useStateFromStoresArray(
    items22,
    () => {
      if (null == guildId) {
        items = [];
      } else {
        items = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
      }
      return items;
    },
    items23,
  );
  if (stateFromStores1) {
    tmp32 = stateFromStores5;
  }
  if (!tmp32) {
    tmp32 = stateFromStores6;
  }
  stateFromStores6 = tmp32;
  const ref = obj.useRef({ guildId, hasComputed: false });
  const items24 = [
    guildId,
    stateFromStores7,
    stateFromStores3,
    hasItem,
    stateFromStoresArray,
    stateFromStoresArray1,
    hasItem5,
    hasItem2,
    hasItem1,
    tmp,
    hasItem3,
    hasItem4,
    has,
    withoutUserCards,
    stateFromStores2,
    stateFromStores4,
    stateFromStores8,
    stateFromStoresObject,
    stateFromStoresArray2,
  ];
  const callback3 = obj.useCallback(() => {
    let length;
    let obj = AppStartPerformanceDefault;
    return obj.time("\u{1F3A8}", "computeHappeningNowState", function () {
      let num;
      let set1;
      let sum;
      let tmp8;
      function addUser(userId, type, channelId) {
        let tmp46;
        let tmp55;
        guildId = channelId;
        if (!stateFromStores6.isBlockedOrIgnored(userId)) {
          channelId = undefined;
          const getChannel = callback1.getChannel;
          if (channelId != null) {
            channelId = channelId.channelId;
          }
          const channel = getChannel(channelId);
          obj3 = userId(withoutUserCards[34]);
          if (!obj3.isChannelContentGated(channel)) {
            if (null != channel) {
              if (channel.isGroupDM()) {
                if (null != channelId) {
                  let tmp35 = guildId;
                  const getStreamForUser = stateFromStores2.getStreamForUser;
                  if (guildId == null) {
                    guildId = undefined;
                    if (channel != null) {
                      guildId = channel.getGuildId();
                    }
                    tmp35 = guildId;
                  }
                  const streamForUser = getStreamForUser(userId, tmp35);
                  if (null != streamForUser) {
                    if (hasItem2) {
                      obj2 = { userId, guildId, kind: "activity", activity: type, stream: tmp55 };
                      if (null == guildId) {
                        tmp55 = streamForUser;
                      } else {
                        let guildId1;
                        if (streamForUser != null) {
                          guildId1 = streamForUser.guildId;
                        }
                      }
                      stateFromStoresArray[userId] = obj2;
                    }
                  }
                  if (null != channel) {
                    if (!set1.has(channel.id)) {
                      if (channel.isGuildStageVoice()) {
                        if (stateFromStores6.isFriend(userId)) {
                          const stageInstanceByChannel = stateFromStores1.getStageInstanceByChannel(channel.id);
                          if (null != stageInstanceByChannel) {
                            if (stateFromStoresArray.can(constants2.CONNECT, channel)) {
                              obj5 = { kind: "live-guild-stage", stage: stageInstanceByChannel };
                              stateFromStores6[channel.id] = obj5;
                            }
                          }
                        }
                      } else {
                        if (hasItem1) {
                          const embeddedActivitiesForChannel = hasItem.getEmbeddedActivitiesForChannel(channel.id);
                          if (closure_2_3) {
                            const id = channel.id;
                            const found = embeddedActivitiesForChannel.filter((userIds) => {
                              let blockedOrIgnored;
                              items = [...userIds.userIds];
                              return items.some((item) => !blockedOrIgnored.isBlockedOrIgnored(item));
                            });
                            obj3[id] = found.map((activity) => ({
                              kind: "embedded-activity",
                              userId,
                              voiceState,
                              guildId,
                              activity,
                            }));
                          } else {
                            const tmp4Result = userId(withoutUserCards[35]);
                            const result =
                              tmp4Result.findActivityWithMostNonBlockedOrIgnoredParticipants(
                                embeddedActivitiesForChannel,
                              );
                            if (null !== result) {
                              obj6 = {
                                kind: "embedded-activity",
                                userId,
                                voiceState: channelId,
                                guildId,
                                activity: result,
                              };
                              items = [obj6];
                              obj3[channel.id] = items;
                            }
                          }
                        }
                        const obj7 = { kind: "voice", userId, voiceState: channelId, guildId: tmp46 };
                        tmp46 = tmp34;
                        const id2 = channel.id;
                        const tmp45 = obj2;
                        if (guildId == null) {
                          let guildId2;
                          if (channel != null) {
                            guildId2 = channel.getGuildId();
                          }
                          tmp46 = guildId2;
                        }
                        tmp45[id2] = obj7;
                      }
                    }
                  }
                }
              }
            }
            if (null != type) {
              const tmp4Result3 = userId(withoutUserCards[36]);
              if (tmp4Result3.isActivityPermanentCustomStatus(type)) {
                if (hasItem3) {
                  const obj8 = { kind: "activity", userId, guildId, activity: type };
                  items2.push(obj8);
                }
              } else {
                const tmp4Result4 = userId(withoutUserCards[37]);
                if (tmp4Result4.isActivityTemporaryCustomStatus(type)) {
                  if (hasItem3) {
                    const obj9 = { userId, guildId, kind: "activity", activity: type };
                    obj6[userId] = obj9;
                  }
                } else if (hasItem4) {
                  let tmp18 = guildId(withoutUserCards[38])(tmp6, constants.EMBEDDED);
                  if (tmp18) {
                    const getChannel2 = callback1.getChannel;
                    const voiceStateForSession = authStore.getVoiceStateForSession(userId, tmp6.session_id);
                    let channelId1;
                    if (voiceStateForSession != null) {
                      channelId1 = voiceStateForSession.channelId;
                    }
                    const channel2 = getChannel2(channelId1);
                    let guildId3;
                    if (channel2 != null) {
                      guildId3 = channel2.getGuildId();
                    }
                    tmp18 = guildId3 !== guildId;
                  }
                  if (!tmp18) {
                    const obj10 = { userId, guildId, kind: "activity", activity: type };
                    obj5[userId] = obj10;
                  }
                }
              }
            } else if (hasItem5) {
              const status = stateFromStoresArray1.getStatus(userId, guildId);
              if (null != status) {
                if (status === constants3.OFFLINE) {
                  const obj11 = { kind: "user", userId, guildId };
                  items3.push(obj11);
                } else {
                  const obj12 = { kind: "user", userId, guildId };
                  items2.push(obj12);
                }
              }
            }
          }
        }
      }
      ref.current.guildId = set1;
      ref.current.hasComputed = true;
      set = new Set();
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
        let obj16 = mutablePrivateChannels[key10053];
        if (!obj16.isPrivate()) {
          continue;
        } else {
          let addResult2 = set.add(obj16.getRecipientId());
          continue;
        }
        continue;
      }
      if (null != set1) {
        if (null != closure_15) {
          rows = rows.getRows(tmp8, tmp9.id);
        }
        const item = rows.forEach((type) => {
          if (type.type === stateFromStores4.MEMBER) {
            set.add(type.userId);
          }
        });
        items = [];
        const items1 = [];
        const _Set = Set;
        const self = this;
        const self2 = this;
        set1 = new Set();
        const iter = closure_23[Symbol.iterator]();
        const nextResult = iter.next();
        let tmp18 = iter;
        while (iter !== undefined) {
          let tmp19 = nextResult;
          if (hasItem5(nextResult)) {
            let arr = items.push(tmp19);
          } else {
            let tmp23 = hasItem4(tmp19);
            if (tmp23) {
              tmp23 = hasItem3(tmp19, 604800);
            }
            if (tmp23) {
              let arr2 = items1.push(tmp19);
            }
          }
          if (null != tmp19.channel_id) {
            let addResult3 = set1.add(tmp19.channel_id);
          }
          continue;
        }
        let obj = {};
        let obj2 = {};
        let obj3 = {};
        const obj4 = {};
        let obj5 = {};
        let obj6 = {};
        const tmp34 = set1;
        if (null != set1) {
          let tmp35 = obj4;
          if (tmp35) {
            stageInstancesByGuild = stageInstancesByGuild.getStageInstancesByGuild(tmp34);
            const arr5 = guildId(withoutUserCards[33]);
            const item1 = arr5.forEach(stageInstancesByGuild, (channelId) => {
              let blockedOrIgnored;
              obj = { channelId: channelId.channel_id };
              let result = stateFromStoresArray.canWithPartialContext(constants2.CONNECT, obj);
              if (result) {
                const channel_id = channelId.channel_id;
                let flag = false;
                if (null != channel_id) {
                  const voiceStatesForChannel = authStore.getVoiceStatesForChannel(channel_id);
                  let someResult = null != voiceStatesForChannel;
                  if (someResult) {
                    const arr = guildId(withoutUserCards[33])(voiceStatesForChannel);
                    const mapped = arr.map((userId) => {
                      user = user.getUser(userId.userId);
                      let id;
                      if (user != null) {
                        id = user.id;
                      }
                      return id;
                    });
                    const found = mapped.filter(set(withoutUserCards[41]).isNotNullish);
                    someResult = found.some((item) => blockedOrIgnored.isBlockedOrIgnored(item));
                  }
                  flag = someResult;
                }
                result = !flag;
              }
              if (result) {
                obj2 = { kind: "live-guild-stage", stage: channelId };
                obj[channelId.channel_id] = obj2;
              }
            });
          }
        }
        const items2 = [];
        const items3 = [];
        voiceStates = voiceStates.getVoiceStates(tmp34);
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set2 = new Set();
        let tmp46 = set2;
        const item2 = set.forEach((item) => {
          user = callback3.getUser(item);
          if (null != user) {
            if (user.bot) {
              set2.add(item);
            } else {
              let voiceStateForUser;
              const primaryActivity = stateFromStoresArray1.getPrimaryActivity(item, guildId);
              if (null != guildId) {
                voiceStateForUser = voiceStates[item];
              } else {
                voiceStateForUser = authStore.getVoiceStateForUser(item);
              }
              const tmp8 = hasItem5 || null != primaryActivity || null != voiceStateForUser;
              if (tmp8) {
                addUser(item, primaryActivity, voiceStateForUser);
              }
            }
          }
        });
        const tmp48 = set2.size > 0 && set2.size === set.size;
        if (tmp48) {
          const _Array = Array;
          addUser(Array.from(set2)[0], null, null);
        }
        if (null != tmp34) {
          const arr8 = guildId(withoutUserCards[33]);
          const item3 = arr8.forEach(voiceStates, (userId) => {
            userId = userId.userId;
            addUser(userId, stateFromStoresArray1.getPrimaryActivity(userId, guildId), userId);
          });
        }
        const items4 = [];
        let tmp55 = set;
        const iter2 = set[Symbol.iterator]();
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          if (constants.LIVE_GUILD_STAGE === nextResult1) {
            for (const key10297 in obj) {
              let arr3 = items4.push(obj[key10297]);
              continue;
            }
          } else if (constants.LIVE_GUILD_EVENT === nextResult1) {
            let item4 = items.forEach((event) => {
              obj = { kind: "guild-event", event, isLive: true };
              return items4.push(obj);
            });
          } else if (constants.UPCOMING_GUILD_EVENT === nextResult1) {
            let item5 = items1.forEach((event) => {
              obj = { kind: "guild-event", event, isLive: false };
              return items4.push(obj);
            });
          } else if (constants.VOICES === nextResult1) {
            for (const key10289 in obj2) {
              let arr4 = items4.push(obj2[key10289]);
              continue;
            }
          } else if (constants.EMBEDDED_ACTIVITY === nextResult1) {
            for (const key10281 in obj3) {
              let tmp150 = obj3[key10281];
              for (const item10283 of tmp150) {
                let arr6 = items4.push(item10283);
                continue;
              }
            }
          } else if (constants.COMBINED_VC === nextResult1) {
            for (const key10278 in obj2) {
              let obj7 = { kind: "unified-vc" };
              let push = items4.push;
              let merged = Object.assign(obj2[key10278]);
              let arr7 = push(obj7);
              continue;
            }
          } else if (constants.STREAMS === nextResult1) {
            for (const key10276 in obj4) {
              let arr9 = items4.push(obj4[key10276]);
              continue;
            }
          } else if (constants.USER_CUSTOM_STATUS === nextResult1) {
            for (const key10274 in obj6) {
              let arr10 = items4.push(obj6[key10274]);
              continue;
            }
          } else if (constants.ACTIVITIES === nextResult1) {
            for (const key10272 in obj5) {
              let arr11 = items4.push(obj5[key10272]);
              continue;
            }
          } else {
            let features;
            if (constants.ACTIVE_CHANNEL === nextResult1) {
              if (null != set1) {
                let obj17 = has(withoutUserCards[39]);
                let items5 = [mutablePrivateChannels, stateFromStoresArray, closure_1_7];
                features = closure_1_25;
                items5[3] = closure_1_25;
                let activeTextChannels = obj17.getActiveTextChannels(tmp109, items5);
                let _Math = Math;
                let tmp137 = activeTextChannels;
                let bound1 = Math.min(2, activeTextChannels.length);
                let num7 = 0;
                if (0 < bound1) {
                  do {
                    let obj9 = { kind: "active-channel", guildId: set1, channelId: tmp137[num7].id };
                    let arr27 = items4.push(obj9);
                    sum = num7 + 1;
                    num7 = sum;
                  } while (sum < bound1);
                }
              }
            } else if (constants.USER === nextResult1) {
              let num4 = 0;
              let num5 = 0;
              if (0 < items2.length) {
                if (num4 < 50) {
                  while (true) {
                    let tmp90 = items2[num5];
                    let obj13 = obj;
                    hasItem = null != obj;
                    if (hasItem) {
                      hasItem = obj13.has(tmp90.userId);
                    }
                    if (!hasItem) {
                      let arr28 = items4.push(tmp90);
                      num4 = num4 + 1;
                    }
                    let sum1 = num5 + 1;
                    num5 = sum1;
                    if (sum1 >= items2.length) {
                      break;
                    } else if (num4 >= 50) {
                      break;
                    }
                  }
                }
              }
              let num6 = 0;
              if (0 < items3.length) {
                if (num4 < 50) {
                  while (true) {
                    let tmp100 = items3[num6];
                    let obj14 = obj;
                    hasItem1 = null != obj;
                    if (hasItem1) {
                      hasItem1 = obj14.has(tmp100.userId);
                    }
                    if (!hasItem1) {
                      let arr29 = items4.push(tmp100);
                      num4 = num4 + 1;
                    }
                    let sum2 = num6 + 1;
                    num6 = sum2;
                    if (sum2 >= items3.length) {
                      break;
                    } else {
                      if (num4 < 50) {
                        continue;
                      } else {
                        break;
                      }
                      break;
                    }
                  }
                }
              }
            } else if (constants.STUDENT_HUB_ADD_CHANNEL === nextResult1) {
              hasItem2 = null != user;
              if (hasItem2) {
                features = user.features;
                hasItem2 = features.has(constants2.HUB);
              }
              if (hasItem2) {
                let obj10 = { kind: "student-hub-add-channel", guildId: user.id };
                let arr30 = items4.push(obj10);
              }
            } else if (constants.CREATE_CHANNEL === nextResult1) {
              let canResult = null != user;
              if (canResult) {
                features = stateFromStoresArray;
                canResult = stateFromStoresArray.can(constants3.MANAGE_CHANNELS, user);
              }
              if (canResult) {
                canResult = null != closure_17;
              }
              if (canResult) {
                canResult = closure_17[closure_1_20].length <= 2;
              }
              if (canResult) {
                let obj11 = { kind: "create-channel", guildId: user.id };
                let arr31 = items4.push(obj11);
              }
            } else if (constants.INVITE === nextResult1) {
              let shouldRenderInviteResult = null != user && null != closure_17;
              if (shouldRenderInviteResult) {
                features = has(withoutUserCards[40]);
                shouldRenderInviteResult = features.shouldRenderInvite(closure_17, user);
              }
              if (shouldRenderInviteResult) {
                let obj12 = { kind: "invite", guildId: user.id };
                let arr32 = items4.push(obj12);
              }
            } else if (constants.CUSTOMIZE_GUILD === nextResult1) {
              let canResult1 = null != user;
              if (canResult1) {
                features = stateFromStoresArray;
                canResult1 = stateFromStoresArray.can(constants3.MANAGE_GUILD, user);
              }
              if (canResult1) {
                let icon;
                if (user != null) {
                  icon = user.icon;
                }
                canResult1 = null == icon;
              }
              if (canResult1) {
                let obj15 = { kind: "customize-guild", guildId: user.id };
                let arr33 = items4.push(obj15);
              }
            } else {
              let obj8 = has(withoutUserCards[41]);
              let assertNeverResult = obj8.assertNever(tmp59);
            }
          }
          continue;
        }
        return items4;
      }
      rows = [];
    });
  }, items24);
  [first, closure_27] = obj.useState(() => {
    if (stateFromStores6) {
      return [];
    } else {
      const arr = callback3();
      if (null != guildId) {
        const obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: arr.filter(f122423).length, guildId: tmp3 };
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        dispatch(obj);
      }
      return arr;
    }
  });
  const items25 = [callback3, guildId];
  callback4 = obj.useCallback(() => {
    const arr = callback3();
    const tmp = closure_27(arr);
    if (null != guildId) {
      const obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: arr.filter(f122423).length, guildId: tmp2 };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      dispatch(obj);
    }
  }, items25);
  const items26 = [guildId, tmp32, tmp23, callback4];
  const effect4 = obj.useEffect(() => {
    let closure_0;
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
  closure_34(guildId, id, isFocused, callback4);
  const items27 = [first];
  if (!tmp32) {
    tmp32 = !guildId(tmp10[42])(ref).hasComputed;
  }
  items27[1] = tmp32;
  return items27;
}
