// === Module 15649: importDefaultResult1 ===

// Module 15649 (importDefaultResult1)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "participantFromServer" /* 1386 */;
import closure_6 from "_handleConnectionOpen" /* 5221 */;
import closure_7 from "truncateOldMessageData" /* 13357 */;
import scheduledEventSort from "scheduledEventSort" /* 7271 */;
import closure_11 from "scheduledEventSort" /* 7271 */;
import closure_12 from "handleStageInstanceCreateOrUpdate" /* 1392 */;
import closure_13 from "recomputeAffinities" /* 7404 */;
import closure_14 from "reset" /* 4500 */;
import closure_15 from "fetchFingerprint" /* 1218 */;
import importDefaultResult from "getMemberListId" /* 6126 */;
import { MemberListRowTypes } from "getMemberListId" /* 6126 */;
import importDefaultResult1 from "ensureGuildLoaded" /* 1387 */;
import closure_19 from "comparator" /* 1982 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_20 } from "comparator" /* 1982 */;
import closure_21 from "createGuildRecordFromRust" /* 1909 */;
import closure_22 from "getUncachedChannelPermissions" /* 4121 */;
import closure_23 from "sortActivity" /* 4569 */;
import closure_24 from "markAllUserIdListsStale" /* 4130 */;
import closure_25 from "updateUserGuildSettingsInternal" /* 4701 */;
import importDefaultResult2 from "mergeGuildAvatar" /* 1922 */;
import importDefaultResult3 from "updateVoiceState" /* 4497 */;
import { HappeningNowItem } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14890 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ eventScheduledToStartWithin: closure_8, isEventUpcoming: c9, isGuildScheduledEventActive: c10 } = scheduledEventSort);
({ ActivityFlags: closure_29, GuildFeatures: closure_30, Permissions: closure_31, StatusTypes: closure_32 } = ME);
let items = [importDefaultResult1, importDefaultResult, importDefaultResult3, importDefaultResult2];
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx");

export default function useHappeningNowData(has, guildId) {
  guildId = has;
  guildId = guildId.guildId;
  let id = guildId;
  const withoutUserCards = guildId.withoutUserCards;
  let isFocused = withoutUserCards;
  const showMultipleActivitiesPerChannel = guildId.showMultipleActivitiesPerChannel;
  let callback4 = tmp;
  isFocused = guildId.isFocused;
  let React = isFocused;
  let hasItem = has.has(callback4.LIVE_GUILD_STAGE);
  closure_5 = hasItem;
  const hasItem1 = has.has(callback4.EMBEDDED_ACTIVITY);
  let callback5 = hasItem1;
  const hasItem2 = has.has(callback4.STREAMS);
  const hasItem3 = has.has(callback4.USER_CUSTOM_STATUS);
  const hasItem4 = has.has(callback4.ACTIVITIES);
  const hasItem5 = has.has(callback4.USER);
  const effect = React.useEffect(() => {
    const userAffinitiesV2 = guildId(isFocused[22]).fetchUserAffinitiesV2();
  }, []);
  items = [callback5];
  const stateFromStores = guildId(isFocused[23]).useStateFromStores(items, () => callback5.isConnected());
  let obj2 = guildId(isFocused[23]);
  let items1 = [stateFromStores3];
  const stateFromStores1 = guildId(isFocused[23]).useStateFromStores(items1, () => null != stateFromStores3.getSessionId());
  let items2 = [has, stateFromStores1, guildId, isFocused, stateFromStores];
  const callback = React.useCallback(() => {
    if (null != id) {
      if (guildId.has(callback4.ACTIVE_CHANNEL)) {
        if (stateFromStores1) {
          if (stateFromStores) {
            if (closure_4) {
              const activeChannelsFetchStatus = hasItem2.getActiveChannelsFetchStatus(tmp);
              let tmp7 = null == activeChannelsFetchStatus || null == activeChannelsFetchStatus.fetchedAt;
              if (!tmp7) {
                const _Date = Date;
                tmp7 = Date.now() - activeChannelsFetchStatus.fetchedAt > 300000;
              }
              if (tmp7) {
                const activeChannels = guildId(isFocused[24]).fetchActiveChannels(tmp);
                const obj = guildId(isFocused[24]);
              }
            }
          }
        }
      }
    }
  }, items2);
  const items3 = [callback];
  const effect1 = React.useEffect(() => {
    callback();
  }, items3);
  let obj3 = guildId(isFocused[23]);
  const items4 = [stateFromStores7];
  const stateFromStores2 = guildId(isFocused[23]).useStateFromStores(items4, () => {
    let guild = null;
    if (null != id) {
      guild = stateFromStores7.getGuild(tmp);
    }
    return guild;
  });
  let obj4 = guildId(isFocused[23]);
  const items5 = [callback2];
  stateFromStores3 = guildId(isFocused[23]).useStateFromStores(items5, () => {
    let defaultChannel = null;
    if (null != id) {
      defaultChannel = callback2.getDefaultChannel(tmp);
    }
    return defaultChannel;
  });
  let obj5 = guildId(isFocused[23]);
  const firstGloballyViewbleGuildChannelId = guildId(isFocused[25]).useFirstGloballyViewbleGuildChannelId(guildId);
  let obj6 = guildId(isFocused[25]);
  const items6 = [callback2];
  const stateFromStores4 = guildId(isFocused[23]).useStateFromStores(items6, () => {
    let channels = null;
    if (null != id) {
      channels = callback2.getChannels(tmp);
    }
    return channels;
  });
  const items7 = [stateFromStores1, stateFromStores3, firstGloballyViewbleGuildChannelId, guildId, isFocused, stateFromStores];
  const callback1 = React.useCallback(() => {
    let tmp = stateFromStores1;
    if (stateFromStores1) {
      tmp = stateFromStores;
    }
    if (tmp) {
      tmp = closure_4;
    }
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = null != stateFromStores3;
    }
    if (tmp) {
      guildId(isFocused[26]).subscribeGuild(id);
      const obj = guildId(isFocused[26]);
      const tmp8 = id;
      guildId(isFocused[26]).subscribeChannel(id, stateFromStores3.id, guildId(isFocused[27]).DEFAULT_RANGES);
      if (tmp14) {
        tmp6(tmp7[26]).subscribeChannel(tmp8, tmp12, tmp6(tmp7[27]).DEFAULT_RANGES);
        const tmp6Result = tmp6(tmp7[26]);
      }
      const obj2 = guildId(isFocused[26]);
      const tmp10 = stateFromStores3;
      tmp14 = null != firstGloballyViewbleGuildChannelId && firstGloballyViewbleGuildChannelId !== stateFromStores3.id;
    }
  }, items7);
  const items8 = [callback1];
  const effect2 = React.useEffect(() => {
    callback1();
  }, items8);
  const items9 = [callback, callback1];
  callback2 = React.useCallback(() => {
    callback();
    callback1();
  }, items9);
  const items10 = [callback2];
  const effect3 = React.useEffect(() => {
    const subscription = id(isFocused[28]).subscribe("CONNECTION_OPEN", callback2);
    return () => {
      closure_1_1(closure_1_2[28]).unsubscribe("CONNECTION_OPEN", closure_19);
    };
  }, items10);
  let obj7 = guildId(isFocused[23]);
  let tmp23 = isFocused;
  if (isFocused) {
    tmp23 = !obj8.useIsVoicePanelFullscreen();
  }
  closure_20 = tmp23;
  let tmp9Result = tmp9(tmp10[23]);
  const items11 = [firstGloballyViewbleGuildChannelId];
  const stateFromStores5 = tmp9Result.useStateFromStores(items11, () => {
    if (null != id) {
      if (null != stateFromStores3) {
        const props = firstGloballyViewbleGuildChannelId.getProps(tmp, tmp2.id);
        let tmp5 = null == props || null == props.groups;
        if (!tmp5) {
          tmp5 = props.groups.length <= 0;
        }
        let tmp6 = !tmp5;
        if (!tmp5) {
          tmp6 = props.groups[0].id === closure_1_32.UNKNOWN;
        }
        return tmp6;
      }
    }
    return false;
  });
  tmp9Result = tmp9(tmp10[23]);
  const items12 = [hasItem2];
  const items13 = [guildId, has];
  let stateFromStores6 = tmp9Result.useStateFromStores(items12, () => {
    let tmp2 = null != id;
    if (tmp2) {
      let hasItem = guildId.has(callback4.ACTIVE_CHANNEL);
      if (hasItem) {
        hasItem = null == hasItem2.getActiveChannelIds(tmp);
      }
      tmp2 = hasItem;
    }
    return tmp2;
  }, items13);
  obj8 = guildId(isFocused[29]);
  const items14 = [callback];
  stateFromStores7 = guildId(isFocused[23]).useStateFromStores(items14, () => callback.getUserAffinities());
  const tmp9Result1 = guildId(isFocused[23]);
  const items15 = [stateFromStores6];
  const stateFromStoresArray = guildId(isFocused[23]).useStateFromStoresArray(items15, () => stateFromStores6.getFriendIDs());
  const tmp9Result2 = guildId(isFocused[23]);
  const items16 = [stateFromStoresArray];
  const items17 = [guildId];
  const stateFromStoresObject = guildId(isFocused[23]).useStateFromStoresObject(items16, () => {
    const obj = { permissionChannelsVersion: stateFromStoresArray.getChannelsVersion(), permissionGuildVersion: null };
    let guildVersion = null;
    if (null != id) {
      guildVersion = stateFromStoresArray.getGuildVersion(tmp);
    }
    obj[1] = guildVersion;
    return obj;
  }, items17);
  const tmp9Result3 = guildId(isFocused[23]);
  const items18 = [hasItem2];
  const items19 = [guildId];
  const stateFromStores8 = guildId(isFocused[23]).useStateFromStores(items18, () => {
    let activeChannelIds = null;
    if (null != id) {
      activeChannelIds = hasItem2.getActiveChannelIds(tmp);
    }
    return activeChannelIds;
  }, items19);
  const tmp9Result4 = guildId(isFocused[23]);
  const items20 = [stateFromStores];
  const items21 = [guildId];
  const stateFromStoresArray1 = guildId(isFocused[23]).useStateFromStoresArray(items20, () => stateFromStores.getGuildScheduledEventsForGuild(id), items21);
  const tmp9Result5 = guildId(isFocused[23]);
  const items22 = [closure_5];
  const items23 = [guildId];
  let tmp32 = !stateFromStores1;
  const stateFromStoresArray2 = guildId(isFocused[23]).useStateFromStoresArray(items22, () => {
    if (null == id) {
      items = [];
    } else {
      items = embeddedActivitiesForGuild.getEmbeddedActivitiesForGuild(tmp);
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
  const callback3 = obj.useCallback(() => id(isFocused[30]).time("\u{1F3A8}", "computeHappeningNowState", () => {
    function addUser(id, type, channelId) {
      closure_0 = id;
      let obj = closure_2_24;
      if (!closure_2_24.isBlockedOrIgnored(id)) {
        obj1 = closure_2_18;
        channelId = undefined;
        if (channelId != null) {
          channelId = channelId.channelId;
        }
        const channel = closure_2_18.getChannel(channelId);
        let obj3 = closure_2_0(closure_2_2[32]);
        if (!obj3.isChannelContentGated(channel)) {
          if (null != channel) {
            if (channel.isGroupDM()) {
              if (null != channelId) {
                let tmp34 = set1;
                if (set1 == null) {
                  guildId = undefined;
                  if (channel != null) {
                    guildId = channel.getGuildId();
                  }
                  tmp34 = guildId;
                }
                const streamForUser = closure_2_14.getStreamForUser(id, tmp34);
                if (null != streamForUser) {
                  if (closure_1_7) {
                    obj = { userId: null, guildId: null, kind: "activity", activity: null, stream: null };
                    obj[0] = id;
                    obj[1] = tmp33;
                    obj[3] = tmp5;
                    if (null == tmp33) {
                      const tmp54 = streamForUser;
                    } else {
                      let guildId1;
                      if (streamForUser != null) {
                        guildId1 = streamForUser.guildId;
                      }
                    }
                    obj[4] = tmp54;
                    closure_5[id] = obj;
                    const tmp52 = closure_5;
                  }
                }
                if (null != channel) {
                  if (!set1.has(channel.id)) {
                    if (channel.isGuildStageVoice()) {
                      if (obj.isFriend(id)) {
                        const stageInstanceByChannel = closure_2_12.getStageInstanceByChannel(channel.id);
                        if (null != stageInstanceByChannel) {
                          if (closure_2_22.can(closure_2_31.CONNECT, channel)) {
                            obj = { kind: "live-guild-stage", stage: null };
                            obj[1] = stageInstanceByChannel;
                            closure_2[channel.id] = obj;
                          }
                        }
                      }
                    } else {
                      if (closure_1_6) {
                        const embeddedActivitiesForChannel = closure_2_5.getEmbeddedActivitiesForChannel(channel.id);
                        if (closure_1_3) {
                          const found = embeddedActivitiesForChannel.filter((userIds) => {
                            items = [...userIds.userIds];
                            return items.some(() => { ... });
                          });
                          closure_4[channel.id] = found.map((activity) => ({ kind: "embedded-activity", userId: closure_0, voiceState: closure_1, guildId: closure_1, activity }));
                        } else {
                          let tmp3Result = tmp3(tmp4[33]);
                          const result = tmp3Result.findActivityWithMostNonBlockedOrIgnoredParticipants(embeddedActivitiesForChannel);
                          if (null !== result) {
                            obj1 = { kind: "embedded-activity", userId: null, voiceState: null, guildId: null, activity: null };
                            obj1[1] = id;
                            obj1[2] = channelId;
                            obj1[3] = tmp33;
                            obj1[4] = result;
                            items = [obj1];
                            closure_4[channel.id] = items;
                          }
                        }
                      }
                      const obj2 = { kind: "voice", userId: null, voiceState: null, guildId: null };
                      obj2[1] = id;
                      obj2[2] = channelId;
                      let tmp45 = tmp33;
                      if (tmp33 == null) {
                        let guildId2;
                        if (channel != null) {
                          guildId2 = channel.getGuildId();
                        }
                        tmp45 = guildId2;
                      }
                      obj2[3] = tmp45;
                      closure_3[channel.id] = obj2;
                      const tmp44 = closure_3;
                    }
                  }
                }
              }
            } else {
              let obj4 = closure_2_22;
              const tmp6 = closure_2_31;
            }
          }
          if (null != type) {
            tmp3Result = tmp3(tmp4[34]);
            if (tmp3Result.isActivityPermanentCustomStatus(tmp5)) {
              if (closure_1_8) {
                obj3 = { kind: "activity", userId: null, guildId: null, activity: null };
                obj3[1] = id;
                obj3[2] = set1;
                obj3[3] = tmp5;
                arr = arr.push(obj3);
              }
            } else {
              if (tmp3Result1.isActivityTemporaryCustomStatus(tmp5)) {
                if (closure_1_8) {
                  obj4 = { userId: null, guildId: null, kind: "activity", activity: null };
                  obj4[0] = id;
                  obj4[1] = set1;
                  obj4[3] = tmp5;
                  closure_7[id] = obj4;
                }
              } else if (closure_1_9) {
                let tmp17 = closure_2_1(tmp4[36])(tmp5, closure_2_29.EMBEDDED);
                if (tmp17) {
                  const voiceStateForSession = closure_2_27.getVoiceStateForSession(id, tmp5.session_id);
                  let channelId1;
                  if (voiceStateForSession != null) {
                    channelId1 = voiceStateForSession.channelId;
                  }
                  const channel1 = obj1.getChannel(channelId1);
                  let guildId3;
                  if (channel1 != null) {
                    guildId3 = channel1.getGuildId();
                  }
                  tmp17 = guildId3 !== set1;
                }
                if (!tmp17) {
                  const obj5 = { userId: null, guildId: null, kind: "activity", activity: null };
                  obj5[0] = id;
                  obj5[1] = set1;
                  obj5[3] = tmp5;
                  closure_6[id] = obj5;
                }
              }
              tmp3Result1 = tmp3(tmp4[35]);
            }
          } else if (addUser) {
            const status = closure_2_23.getStatus(id, set1);
            if (null != status) {
              if (status === closure_2_32.OFFLINE) {
                const obj6 = { kind: "user", userId: null, guildId: null };
                obj6[1] = id;
                obj6[2] = tmp8;
                arr = arr2.push(obj6);
              } else {
                const obj7 = { kind: "user", userId: null, guildId: null };
                obj7[1] = id;
                obj7[2] = tmp8;
                arr.push(obj7);
              }
            }
          }
        }
      }
    }
    ref.current.guildId = set1;
    ref.current.hasComputed = true;
    const set = new Set();
    const bound = Math.min(length.length, 50);
    for (let num = 0; num < bound; num = num + 1) {
      let tmp2 = length;
      let addResult = set.add(length[num].otherUserId);
    }
    for (const item10043 of closure_22) {
      let addResult1 = set.add(item10043);
      continue;
    }
    const mutablePrivateChannels = closure_1_18.getMutablePrivateChannels();
    for (const key10053 in mutablePrivateChannels) {
      let tmp17 = key10053;
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
        if (type.type === closure_2_17.MEMBER) {
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
    items = closure_1_16.getRows(set1, num2.id);
  }), items24);
  const tmp35 = callback4(React.useState(() => {
    if (stateFromStores6) {
      return [];
    } else {
      const arr = callback3();
      if (null != id) {
        let obj = id(isFocused[28]);
        obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: null, guildId: null };
        obj[1] = arr.filter((kind) => {
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
        }).length;
        obj[2] = tmp2;
        obj.dispatch(obj);
      }
      return arr;
    }
  }), 2);
  closure_27 = tmp35[1];
  const items25 = [callback3, guildId];
  callback4 = obj.useCallback(() => {
    const arr = callback3();
    callback(arr);
    if (null != id) {
      let obj = id(isFocused[28]);
      obj = { type: "GUILD_HEADER_ACTIVE_CHANNELS_COUNT", count: null, guildId: null };
      obj[1] = arr.filter((kind) => {
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
      }).length;
      obj[2] = tmp2;
      obj.dispatch(obj);
    }
  }, items25);
  const items26 = [guildId, tmp32, tmp23, callback4];
  const effect4 = obj.useEffect(() => {
    if (id !== ref.current.guildId) {
      const obj = { guildId: null, hasComputed: false };
      obj[0] = tmp;
      tmp2.current = obj;
    }
    if (ref.current.hasComputed) {
      if (closure_20) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback();
        }, 50);
        return () => clearTimeout(closure_0);
      }
    } else if (!stateFromStores6) {
      callback4();
    }
  }, items26);
  id = undefined;
  if (stateFromStores3 != null) {
    id = stateFromStores3.id;
  }
  React = obj.useRef(-1);
  closure_5 = obj.useRef(0);
  const items27 = [guildId, id, callback4, isFocused];
  callback5 = obj.useCallback(() => {
    if (-1 !== ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (isFocused) {
      const _setTimeout = setTimeout;
      tmp.current = setTimeout(() => {
        const userStoreVersion = closure_1_26.getUserStoreVersion();
        const sum = userStoreVersion + closure_1_18.getPrivateChannelsVersion();
        let num = -1;
        const sum1 = sum + closure_1_27.getVoiceStateVersion();
        if (null != closure_0) {
          num = -1;
          if (null != closure_1) {
            num = closure_1_16.getProps(tmp4, tmp5).version;
          }
        }
        const sum2 = sum1 + num;
        if (ref.current !== sum2) {
          ref.current = sum2;
          callback();
        }
      }, 1000);
    }
  }, items27);
  const items28 = [callback5];
  const effect5 = obj.useEffect(() => {
    let item = closure_1_33.forEach((addChangeListener) => {
      addChangeListener.addChangeListener(closure_6);
    });
    return () => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      const item = closure_1_33.forEach((removeChangeListener) => {
        removeChangeListener.removeChangeListener(closure_6);
      });
    };
  }, items28);
  const items29 = [tmp35[0], ];
  if (!tmp32) {
    tmp32 = !id(tmp10[40])(ref).hasComputed;
  }
  items29[1] = tmp32;
  return items29;
};