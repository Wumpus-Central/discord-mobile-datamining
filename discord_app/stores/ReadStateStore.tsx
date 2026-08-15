// discord_app/stores/ReadStateStore.tsx
import getHash from "getHash";
import ReadStateTypes from "ReadStateTypes";
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import isSubscriptionGated from "isSubscriptionGated";
import closure_8 from "getHash";
import scheduledEventSort from "scheduledEventSort";
import { isEventUpcoming } from "scheduledEventSort";
import processChannel from "processChannel";
import closure_12 from "processChannel";
import _validate from "_validate";
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import storeThread from "storeThread";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import createChannelRecord from "createChannelRecord";
import fetchFingerprint from "fetchFingerprint";
import handlePermissionsChange from "handlePermissionsChange";
import ensureGuildLoaded from "ensureGuildLoaded";
import percentageScrolled from "percentageScrolled";
import handleConnectionOpen from "handleConnectionOpen";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import checkIdleAFK from "checkIdleAFK";
import reinjectEphemerals from "reinjectEphemerals";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import importDefaultResult from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import map from "map";
import ME from "ME";
import ActivityPanelModes from "ActivityPanelModes";
import set from "set";
import { GuildScheduledEventStatus } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { ReadStateTypes } from "ReadStateTypes";
import { ThreadMemberFlags } from "AbortCodes";
import apply from "handleConnectionClosedOrResumed";
import { Store } from "initialize";
import set from "participantFromServer";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { DiscordAppState.native } from "../modules/app_state/DiscordAppState.native.tsx";
import { isChangelogChannel } from "../modules/changelog/utils/isChangelogChannel.tsx";
import { getRootNavigationRef } from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import { filterOutMessageRequestsAndSpam } from "../modules/message_request/MessageRequestUtils.tsx";
import { isMentioned } from "../modules/messages/isMessageMentioned.tsx";
import { _networkAwareRetry } from "../modules/network/networkAwareRetry.tsx";
import { isIOSPushNotificationRawPayloadFixExperimentEnabled } from "../modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx";
import { getFocusedChannelId } from "../modules/panels/isChannelFocused.native.tsx";
import { doesThreadMembersActionAffectMe } from "../modules/threads/ThreadActionUtils.tsx";
import { has } from "../utils/BasicPermissionUtils.tsx";
import { set } from "../utils/Durations.tsx";
import { isDiscordFrontendDevelopment } from "../utils/GlobalUtils.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";
import { updateGuildUnreadSentinel } from "GuildReadStateStore.tsx";
import { getState } from "native/AppStateStore.tsx";

let BasicPermissions;
let OverlayWidgets;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_44;
let closure_45;
let closure_46;
let closure_47;
let closure_48;
let closure_49;
let closure_50;
let closure_51;
let closure_52;
let closure_53;
let closure_54;
let require = arg1;
function generateOldThreadCutoff() {
  return DISCORD_EPOCH.fromTimestamp(Date.now() - closure_69);
}
function setDecayedReadStateTimer() {
  const timestamp = Date.now();
  let closure_71 = timestamp - 7 * set.Millis.DAY;
  const timestamp1 = Date.now();
  let closure_72 = timestamp1 - 3 * set.Millis.DAY;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    callback2(709).dispatch({ type: "DECAY_READ_STATES" });
  }, set.Millis.HOUR);
}
function parseTimestamp(arg0) {
  if (null == arg0) {
    return 0;
  } else {
    const _Date = Date;
    const parsed = Date.parse(arg0);
    const _isNaN = isNaN;
    let num = 0;
    if (!isNaN(parsed)) {
      num = parsed;
    }
    return num;
  }
}
function shouldBadgeMessage(channel_id, id) {
  const channel = store3.getChannel(channel_id.channel_id);
  let tmp = null != channel;
  if (tmp) {
    const result = markAllUserIdListsStale.isBlockedOrIgnoredForMessage(channel_id);
    let tmp4 = !result;
    if (!result) {
      const obj = { message: null, userId: null, suppressEveryone: null, suppressRoles: null };
      obj[0] = channel_id;
      obj[1] = id.id;
      obj[2] = updateUserGuildSettingsInternal.isSuppressEveryoneEnabled(channel.guild_id);
      obj[3] = updateUserGuildSettingsInternal.isSuppressRolesEnabled(channel.guild_id);
      let tmp8Result = isMentioned(obj);
      if (!tmp8Result) {
        tmp8Result = null != channel && channel.isPrivate() && !obj3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        const tmp10 = null != channel && channel.isPrivate() && !obj3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      tmp4 = tmp8Result;
      obj3 = updateUserGuildSettingsInternal;
      const tmp8 = isMentioned;
    }
    tmp = tmp4;
  }
  return tmp;
}
function processBulkAckQueue(onFinished) {
  const self = this;
  const apply = _processBulkAckQueue.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _processBulkAckQueue() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              let closure_1 = tmp7;
              closure_1 = undefined;
              if (0 === outer1_65.length) {
                let outer1_66 = false;
                if (tmp32 != null) {
                  tmp32();
                }
                c6 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                outer1_66 = true;
                closure_1 = outer1_65.splice(0, 100);
                let c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_1(outer1_2[41])(() => {
                  const HTTP = callback(tmp3[42]).HTTP;
                  obj = { url: outer1_39.BULK_ACK, body: obj, oldFormErrors: true, rejectWithError: false };
                  obj = { read_states: closure_1 };
                  return HTTP.post(obj);
                });
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_65.length = 0;
            let c66 = false;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              callback2(callback);
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c4 = 0;
            obj = callback(table[43]);
            c5 = 2;
            c6 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj.timeoutPromise(1000);
            return obj5;
          }
        } catch (tmp23) {
          let getHash = tmp23;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp23;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _processBulkAckQueue = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function shouldAutomaticallyAck(value, arg1) {
  const currentUser = authStore.getCurrentUser();
  let hasAnyStaffLevelResult;
  if (currentUser != null) {
    hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
  }
  if (hasAnyStaffLevelResult) {
    tmp6.log("STAFF-ACK-LOG:", "shouldAutomaticallyAck called", value.channelId);
  }
  if (value.type !== ReadStateTypes.CHANNEL) {
    const currentUser1 = obj.getCurrentUser();
    let hasAnyStaffLevelResult1;
    if (currentUser1 != null) {
      hasAnyStaffLevelResult1 = currentUser1.hasAnyStaffLevel();
    }
    if (hasAnyStaffLevelResult1) {
      tmp6.log("STAFF-ACK-LOG:", "not channel read state", value.channelId);
    }
    return false;
  } else {
    const channel = store3.getChannel(value.channelId);
    const tmp4 = null != channel && channel.isForumPost();
    if (null != connectedActivityLocation.getConnectedActivityLocation()) {
      if (obj3.getActivityPanelMode() === constants13.PANEL) {
        if (obj3.getFocusedLayout() === constants14.NO_CHAT) {
          const currentUser2 = obj.getCurrentUser();
          let hasAnyStaffLevelResult2;
          if (currentUser2 != null) {
            hasAnyStaffLevelResult2 = currentUser2.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult2) {
            tmp6.log("STAFF-ACK-LOG:", "In activity", value.channelId);
          }
          return false;
        }
      }
    }
    if (idle.isIdle()) {
      const currentUser3 = obj.getCurrentUser();
      let hasAnyStaffLevelResult3;
      if (currentUser3 != null) {
        hasAnyStaffLevelResult3 = currentUser3.hasAnyStaffLevel();
      }
      if (hasAnyStaffLevelResult3) {
        tmp6.log("STAFF-ACK-LOG:", "Is idle", value.channelId);
      }
      return false;
    } else if (value.canTrackUnreads()) {
      let isForumLikeChannelResult;
      if (channel != null) {
        isForumLikeChannelResult = channel.isForumLikeChannel();
      }
      if (true !== isForumLikeChannelResult) {
        if (obj5.getState() !== constants12.ACTIVE) {
          const currentUser4 = obj.getCurrentUser();
          let hasAnyStaffLevelResult4;
          if (currentUser4 != null) {
            hasAnyStaffLevelResult4 = currentUser4.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult4) {
            tmp6.log("STAFF-ACK-LOG:", "App not active", value.channelId);
          }
          return false;
        }
        obj5 = DiscordAppState.native;
      }
      if (tmp4) {
        if (!value._persisted) {
          const currentUser5 = obj.getCurrentUser();
          let hasAnyStaffLevelResult5;
          if (currentUser5 != null) {
            hasAnyStaffLevelResult5 = currentUser5.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult5) {
            tmp6.log("STAFF-ACK-LOG:", "unpersisted forum post", value.channelId);
          }
          return true;
        }
      }
      if (value.hasUnreadOrMentions()) {
        let isForumLikeChannelResult1;
        if (channel != null) {
          isForumLikeChannelResult1 = channel.isForumLikeChannel();
        }
        if (true === isForumLikeChannelResult1) {
          const currentUser6 = obj.getCurrentUser();
          let hasAnyStaffLevelResult6;
          if (currentUser6 != null) {
            hasAnyStaffLevelResult6 = currentUser6.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult6) {
            tmp6.log("STAFF-ACK-LOG:", "Forum-like channel", value.channelId);
          }
          return false;
        } else {
          if (!tmp4) {
            if (!atBottom.isAtBottom(value.channelId)) {
              const currentUser7 = obj.getCurrentUser();
              let hasAnyStaffLevelResult7;
              if (currentUser7 != null) {
                hasAnyStaffLevelResult7 = currentUser7.hasAnyStaffLevel();
              }
              if (hasAnyStaffLevelResult7) {
                tmp6.log("STAFF-ACK-LOG:", "Not at bottom", value.channelId);
              }
              return false;
            }
          }
          const layout = uiStore.getLayout(value.channelId);
          if (!uiStore.getChatOpen(value.channelId)) {
            const currentUser8 = obj.getCurrentUser();
            let hasAnyStaffLevelResult8;
            if (currentUser8 != null) {
              hasAnyStaffLevelResult8 = currentUser8.hasAnyStaffLevel();
            }
            if (hasAnyStaffLevelResult8) {
              tmp6.log("STAFF-ACK-LOG:", "Fullscreen video", value.channelId);
            }
            return false;
          }
          const messages = store5.getMessages(value.channelId);
          if (null != messages) {
            if (messages.ready) {
              if (!messages.loadingMore) {
                const result = getFocusedChannelId.isChannelFocusedForReadStateAck(value.channelId, arg1);
                const currentUser9 = obj.getCurrentUser();
                if (result) {
                  let hasAnyStaffLevelResult9;
                  if (!tmp37) {
                    hasAnyStaffLevelResult9 = currentUser9.hasAnyStaffLevel();
                  }
                  let flag6 = true;
                  if (hasAnyStaffLevelResult9) {
                    tmp6.log("STAFF-ACK-LOG:", "Acked", value.channelId);
                    flag6 = true;
                  }
                } else {
                  let hasAnyStaffLevelResult10;
                  if (!tmp37) {
                    hasAnyStaffLevelResult10 = currentUser9.hasAnyStaffLevel();
                  }
                  flag6 = false;
                  if (hasAnyStaffLevelResult10) {
                    tmp6.log("STAFF-ACK-LOG:", "Chat not focused", value.channelId);
                    flag6 = false;
                  }
                }
                const obj10 = getFocusedChannelId;
              }
              return flag6;
            }
          }
          const currentUser10 = obj.getCurrentUser();
          let hasAnyStaffLevelResult11;
          if (currentUser10 != null) {
            hasAnyStaffLevelResult11 = currentUser10.hasAnyStaffLevel();
          }
          flag6 = false;
          if (hasAnyStaffLevelResult11) {
            tmp6.log("STAFF-ACK-LOG:", "Still loading messages", value.channelId);
            flag6 = false;
          }
        }
      } else {
        const currentUser11 = obj.getCurrentUser();
        let hasAnyStaffLevelResult12;
        if (currentUser11 != null) {
          hasAnyStaffLevelResult12 = currentUser11.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult12) {
          tmp6.log("STAFF-ACK-LOG:", "No unread or mentions", value.channelId);
        }
        return false;
      }
    } else {
      const currentUser12 = obj.getCurrentUser();
      let hasAnyStaffLevelResult13;
      if (currentUser12 != null) {
        hasAnyStaffLevelResult13 = currentUser12.hasAnyStaffLevel();
      }
      if (hasAnyStaffLevelResult13) {
        tmp6.log("STAFF-ACK-LOG:", "Cannot track unreads", value.channelId);
      }
      return false;
    }
  }
}
function mergeChannels(initialPrivateChannels) {
  const item = initialPrivateChannels.forEach((type) => {
    let lastPinTimestamp;
    if (callback(type.type)) {
      const value = closure_81.get(type.id);
      ({ guild_id: obj._guildId, lastMessageId: obj.lastMessageId, lastPinTimestamp } = type);
      let num = 0;
      if (null != lastPinTimestamp) {
        const _Date = Date;
        const parsed = Date.parse(lastPinTimestamp);
        const _isNaN = isNaN;
        let num2 = 0;
        if (!isNaN(parsed)) {
          num2 = parsed;
        }
        num = num2;
      }
      value.lastPinTimestamp = num;
      value._isResourceChannel = type.hasFlag(constants.IS_GUILD_RESOURCE_CHANNEL);
      if (set.has(type.type)) {
        value.syncThreadSettings();
      }
    }
  });
}
function mergeForGuild(guild) {
  let c0 = guild;
  const threads = guild.threads;
  if (threads != null) {
    const item = threads.forEach((type) => {
      let lastPinTimestamp;
      if (outer1_20.has(type.type)) {
        const value = outer1_81.get(type.id);
        ({ lastMessageId: tmp2.lastMessageId, lastPinTimestamp } = type);
        let num2 = 0;
        if (null != lastPinTimestamp) {
          const _Date = Date;
          const parsed = Date.parse(lastPinTimestamp);
          const _isNaN = isNaN;
          let num3 = 0;
          if (!isNaN(parsed)) {
            num3 = parsed;
          }
          num2 = num3;
        }
        value.lastPinTimestamp = num2;
        value._isThread = true;
        value._isActiveThread = true;
        value._isJoinedThread = null != type.member;
        if (null == value.ackMessageId) {
          value.ackMessageId = _null(_ackMessageId[37]).fromTimestamp(outer1_85(user.id, type.id));
          const obj = _null(_ackMessageId[37]);
        }
        if (null == value.ackPinTimestamp) {
          value.ackPinTimestamp = outer1_85(user.id, type.id);
        }
      }
    });
  }
  const prop = guild.guild_scheduled_events;
  let length;
  if (prop != null) {
    length = prop.length;
  }
  if (0 !== length) {
    let value = ReadState.get(guild.id, ReadStateTypes.GUILD_EVENT);
    value._guildId = guild.id;
    c0 = 0;
    const importDefault = null;
    let _ackMessageId = value._ackMessageId;
    if (_ackMessageId == null) {
      _ackMessageId = importDefault(_ackMessageId[37]).fromTimestamp(value.getAckTimestamp());
      const obj3 = importDefault(_ackMessageId[37]);
    }
    const prop1 = guild.guild_scheduled_events;
    const item1 = prop1.forEach((id) => {
      if (obj.compare(id.id, id) > 0) {
        id = id.id;
      }
      obj = _null(_ackMessageId[37]);
      const tmp = _null;
      const tmp2 = _ackMessageId;
      if (tmpResult.compare(id.id, _ackMessageId) > 0) {
        closure_0 = closure_0 + 1;
      }
    });
    value.lastMessageId = importDefault;
    value.mentionCount = c0;
    let tmp3 = ReadStateTypes;
    let obj = ReadState;
    const tmp4 = ReadState;
    const tmp5 = ReadStateTypes;
  } else {
    obj = ReadState;
    tmp3 = ReadStateTypes;
  }
  value = obj.get(guild.id, tmp3.GUILD_HOME);
  const obj4 = importDefault(_ackMessageId[37]);
  const tmp12 = importDefault(_ackMessageId[53]);
  const tmp12Result = importDefault(_ackMessageId[53])(Date.now());
  value.lastMessageId = obj4.fromTimestamp(importDefault(_ackMessageId[53])(Date.now()).subtract(24, "h").valueOf());
  guild = store4.getGuild(guild.id);
  if (null != guild) {
    let prop2;
    if (guild != null) {
      prop2 = guild.latestOnboardingQuestionId;
    }
    if (null != prop2) {
      const value1 = obj.get(guild.id, tmp3.GUILD_ONBOARDING_QUESTION);
      value1._guildId = guild.id;
      value1.lastMessageId = prop2;
    }
  }
}
function mergeRelationships(relationships) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    let closure_0 = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
    const item = relationships.forEach((since) => {
      if (null != since.since) {
        if (since.type === outer1_46.PENDING_INCOMING) {
          const _Date = Date;
          const date = new Date(since.since);
          const time = date.getTime();
          let num = 0;
          if (null != ackMessageId.ackMessageId) {
            num = outer1_1(outer1_2[37]).extractTimestamp(tmp11.ackMessageId);
            const obj = outer1_1(outer1_2[37]);
          }
          if (num < time) {
            tmp11.mentionCount = tmp11.mentionCount + 1;
            tmp11.lastMessageId = outer1_1(outer1_2[37]).fromTimestamp(time);
            const obj2 = outer1_1(outer1_2[37]);
          }
        }
      }
    });
  }
}
function getThreadAckMessageTimestamp(guildId, channelId) {
  let tmp = guildId;
  const channel = store3.getChannel(channelId);
  if (guildId == null) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp = guild_id;
  }
  let _Date = store4.getGuild(tmp);
  let isForumPostResult;
  if (channel != null) {
    isForumPostResult = channel.isForumPost();
  }
  if (isForumPostResult) {
    const joinTimestampResult = storeThread.joinTimestamp(channelId);
    let num;
    if (joinTimestampResult != null) {
      num = joinTimestampResult.getTime();
    }
    if (num == null) {
      num = 0;
    }
    const diff = num - 5000;
    const _isNaN2 = isNaN;
    let num3 = diff;
    if (isNaN(diff)) {
      num3 = -5000;
    }
    let archiveTimestamp;
    if (channel != null) {
      const threadMetadata = channel.threadMetadata;
      if (threadMetadata != null) {
        archiveTimestamp = threadMetadata.archiveTimestamp;
      }
    }
    let num4 = 0;
    if (null != archiveTimestamp) {
      const _Date2 = Date;
      const date = new Date(archiveTimestamp);
      num4 = date.getTime() - 1;
    }
    const _isNaN3 = isNaN;
    if (isNaN(num4)) {
      num4 = 0;
    }
    const _Math = Math;
    let bound = Math.max(num3, num4);
    if (bound <= 0) {
      bound = DISCORD_EPOCH.extractTimestamp(channelId) - 1;
      const obj5 = DISCORD_EPOCH;
    }
    const _isNaN4 = isNaN;
    let isNaNResult = isNaN(bound);
    let num7 = bound;
    if (!isNaNResult) {
      isNaNResult = num7 <= 0;
    }
    if (isNaNResult) {
      num7 = 0;
    }
    const _isNaN5 = isNaN;
    let bound1 = num7;
    if (!isNaN(0)) {
      const _Math2 = Math;
      bound1 = Math.max(0, num7);
    }
    return bound1;
  } else {
    if (null != _Date) {
      if (null != _Date.joinedAt) {
        let now = globalThis;
        const _Date3 = Date;
        const joinedAt2 = _Date.joinedAt;
        if (_Date.joinedAt instanceof Date) {
          _Date = joinedAt2.getTime();
          const _isNaN = isNaN;
          now = isNaN(_Date);
          let joinedAt = _Date;
        } else if (typeof joinedAt2 !== "string") {
          if (typeof _Date.joinedAt === "number") {
            const _isNaN6 = isNaN;
            if (!isNaN(_Date.joinedAt)) {
              joinedAt = _Date.joinedAt;
            }
          }
        }
        const date1 = new now.Date(_Date.joinedAt);
        const time = date1.getTime();
        _Date = now.isNaN(time);
        joinedAt = time;
      }
    }
    _Date = Date;
    now = Date.now;
    joinedAt = now();
  }
}
function clearDeleteOldReadStatesTimer() {
  if (null != c67) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c67);
  }
}
function mergeChannelTimestampUpdates(channelTimestampUpdates) {
  const iter = channelTimestampUpdates[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = ReadState;
    let value = ReadState.get(nextResult.id);
    if (null != nextResult.last_message_id) {
      let tmp5 = value;
      let tmp6 = nextResult;
      value.lastMessageId = tmp2.last_message_id;
    }
    let tmp7 = nextResult;
    if (null != tmp2.last_pin_timestamp) {
      let tmp8 = value;
      let tmp9 = parseTimestamp;
      let tmp10 = nextResult;
      value.lastPinTimestamp = parseTimestamp(tmp2.last_pin_timestamp);
    }
    continue;
  }
}
function handleChannelSectionStoreUpdate() {
  const currentSidebarChannelId = store2.getCurrentSidebarChannelId(closure_61);
  if (currentSidebarChannelId !== currentSidebarChannelId) {
    let flag2 = false;
    if (null != tmp2) {
      let value = ReadState.get(tmp2);
      const hasUnreadResult = value.hasUnread();
      let flag3 = !hasUnreadResult;
      if (!hasUnreadResult) {
        value.oldestUnreadMessageId = null;
        flag3 = true;
      }
      flag2 = flag3;
    }
    let flag = flag2;
  } else {
    let obj = { section: null, object: null, objectType: null };
    obj[0] = constants3.CHANNEL;
    obj[1] = constants2.ACK_CHANNEL_SECTION_STORE_UPDATE;
    obj[2] = constants.ACK_AUTOMATIC;
    flag = false;
    if (null != currentSidebarChannelId) {
      value = ReadState.get(currentSidebarChannelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj[1] = obj;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    if (!flag) {
      flag = false;
    }
  }
  return flag;
}
function handleGuildFeatureAck(id) {
  let ackedId;
  let local;
  ({ ackedId, local } = id);
  const value = ReadState.get(id.id, id.ackType);
  let tmp = ackedId !== value.ackMessageId && value.lastMessageId !== value.ackMessageId;
  if (tmp) {
    let ackResult = null != value.lastMessageId;
    if (!ackResult) {
      ackResult = 0 !== value.mentionCount;
    }
    if (ackResult) {
      if (ackedId == null) {
        ackedId = value.lastMessageId;
      }
      if (ackedId == null) {
        ackedId = DISCORD_EPOCH.fromTimestamp(value.getAckTimestamp());
        const obj2 = DISCORD_EPOCH;
      }
      const obj = { messageId: null, local: null, trackAnalytics: false };
      obj[0] = ackedId;
      if (local == null) {
        local = true;
      }
      obj[1] = local;
      ackResult = value.ack(obj);
    }
    tmp = ackResult;
  }
  return tmp;
}
({ isReadableType: closure_17, isThread: closure_18, isPrivate: closure_19, ALL_CHANNEL_TYPES: closure_20, THREAD_CHANNEL_TYPES: closure_21 } = createChannelRecord);
({ AnalyticsObjectTypes: closure_36, AnalyticsObjects: closure_37, AnalyticsSections: closure_38, Endpoints: closure_39, ChannelLayouts: closure_40, OverlayWidgets, CURRENT_APP_CONTEXT: closure_41, ChannelTypes: closure_42, BasicPermissions } = ME);
({ Permissions: closure_44, MessageTypes: closure_45, RelationshipTypes: closure_46, ChannelTypesSets: closure_47, UserNotificationSettings: closure_48, MessageTypesSets: closure_49, AppStates: closure_50 } = ME);
({ ActivityPanelModes: closure_51, FocusedActivityLayouts: closure_52 } = ActivityPanelModes);
({ ChannelFlags: closure_53, isStaticChannelRoute: closure_54 } = set);
let closure_58 = new require("getParticipants")("ReadStateStore");
function isOverlayChannelVisible() {
  return false;
}
if (require("IS_OVERLAY_DEV_ENV").OVERLAY_SUPPORTED) {
  isOverlayChannelVisible = require("isOverlayCurrentlyVisibleAndUnlocked").isOverlayChannelVisible;
}
function handleMessageDelete(channelId) {
  const value = ReadState.get(channelId.channelId);
  value.rebuildChannelState();
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach((type) => {
    let last_pin_timestamp;
    if (callback2(type.type)) {
      const value = closure_81.get(type.id);
      ({ last_message_id: obj.lastMessageId, last_pin_timestamp } = type);
      let num = 0;
      if (null != last_pin_timestamp) {
        const _Date = Date;
        const parsed = Date.parse(last_pin_timestamp);
        const _isNaN = isNaN;
        let num2 = 0;
        if (!isNaN(parsed)) {
          num2 = parsed;
        }
        num = num2;
      }
      value.lastPinTimestamp = num;
      let num3 = type.flags;
      if (num3 == null) {
        num3 = 0;
      }
      value._isResourceChannel = callback(table[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
      if (set.has(type.type)) {
        value.syncThreadSettings();
      }
      const obj2 = callback(table[52]);
    }
  });
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((arg0) => {
    let messages;
    let threads;
    ({ messages, threads } = arg0);
    let item = messages.forEach((arr) => {
      const mapped = arr.map((thread) => thread.thread);
      const found = mapped.filter(callback(table[55]).isNotNullish);
      const item = found.forEach((type) => {
        let last_pin_timestamp;
        if (callback2(type.type)) {
          const value = closure_81.get(type.id);
          ({ last_message_id: obj.lastMessageId, last_pin_timestamp } = type);
          let num = 0;
          if (null != last_pin_timestamp) {
            const _Date = Date;
            const parsed = Date.parse(last_pin_timestamp);
            const _isNaN = isNaN;
            let num2 = 0;
            if (!isNaN(parsed)) {
              num2 = parsed;
            }
            num = num2;
          }
          value.lastPinTimestamp = num;
          let num3 = type.flags;
          if (num3 == null) {
            num3 = 0;
          }
          value._isResourceChannel = callback(table[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
          if (set.has(type.type)) {
            value.syncThreadSettings();
          }
          const obj2 = callback(table[52]);
        }
      });
    });
    const item1 = threads.forEach((type) => {
      let last_pin_timestamp;
      if (callback2(type.type)) {
        const value = closure_81.get(type.id);
        ({ last_message_id: obj.lastMessageId, last_pin_timestamp } = type);
        let num = 0;
        if (null != last_pin_timestamp) {
          const _Date = Date;
          const parsed = Date.parse(last_pin_timestamp);
          const _isNaN = isNaN;
          let num2 = 0;
          if (!isNaN(parsed)) {
            num2 = parsed;
          }
          num = num2;
        }
        value.lastPinTimestamp = num;
        let num3 = type.flags;
        if (num3 == null) {
          num3 = 0;
        }
        value._isResourceChannel = callback(table[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
        if (set.has(type.type)) {
          value.syncThreadSettings();
        }
        const obj2 = callback(table[52]);
      }
    });
  });
}
function handleChannelDelete(channel) {
  return ReadState.clear(channel.channel.id);
}
let closure_60 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
function handleMessageAck(messageId) {
  let manual;
  let newMentionCount;
  messageId = messageId.messageId;
  ({ manual, newMentionCount } = messageId);
  const value = ReadState.get(messageId.channelId);
  if (manual) {
    value.rebuildChannelState(messageId, true, newMentionCount);
    value.clearOutgoingAck();
    let flag = true;
  } else {
    flag = messageId !== value._ackMessageId;
    if (flag) {
      const obj = { messageId: null, local: true, trackAnalytics: false };
      obj[0] = messageId;
      flag = value.ack(obj);
    }
  }
  return flag;
}
let channelId = importDefaultResult.getChannelId();
let c62 = null;
let c63 = null;
let c64 = false;
let closure_65 = [];
let c66 = false;
let c67 = null;
class AutoAckableChannelTracker {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    return obj;
  }
}
const prototype = AutoAckableChannelTracker.prototype;
prototype["addWindowId"] = function addWindowId(arg0, arg1) {
  const self = this;
  if (null == this.channelWindowIds[arg0]) {
    const _Set = Set;
    const set = new Set();
    self.channelWindowIds[arg0] = set;
  }
  self.channelWindowIds[arg0].add(arg1);
};
prototype["hasWindowId"] = function hasWindowId(arg0, arg1) {
  let hasItem = null != this.channelWindowIds[arg0];
  if (hasItem) {
    hasItem = tmp.channelWindowIds[arg0].has(arg1);
    const obj = tmp.channelWindowIds[arg0];
  }
  return hasItem;
};
prototype["isChannelAckable"] = function isChannelAckable(arg0) {
  let tmp = null != this.channelWindowIds[arg0];
  if (tmp) {
    tmp = this.channelWindowIds[arg0].size > 0;
  }
  return tmp;
};
prototype["getAllWindowIds"] = function getAllWindowIds(arg0) {
  if (null == this.channelWindowIds[arg0]) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(tmp.channelWindowIds[arg0]);
  }
  return items;
};
prototype["getAllChannelIdsForWindowId"] = function getAllChannelIdsForWindowId(arg0) {
  let obj3;
  let tmp6;
  const set = new Set();
  const entries = DISCORD_EPOCH.entries(this.channelWindowIds);
  const obj2 = DISCORD_EPOCH;
  while (tmp2 !== undefined) {
    let tmp4 = callback2;
    let tmp5 = callback2(tmp3, 2);
    [tmp6, obj3] = tmp5;
    if (obj3.has(arg0)) {
      let tmp7 = tmp6;
      let addResult = set.add(tmp6);
    }
    continue;
  }
  return Array.from(set);
};
prototype["isAnyWindowFocused"] = function isAnyWindowFocused(arg0) {
  if (null == this.channelWindowIds[arg0]) {
    return false;
  } else {
    for (const item10009 of tmp) {
      let tmp4 = focused;
      if (focused.isFocused(item10009)) {
        let tmp5 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
};
prototype["removeWindowId"] = function removeWindowId(arg0, arg1) {
  const self = this;
  if (null != this.channelWindowIds[arg0]) {
    self.channelWindowIds[arg0].delete(arg1);
    if (0 === self.channelWindowIds[arg0].size) {
      const channelWindowIds = self.channelWindowIds;
      delete tmp[tmp2];
    }
    const obj = self.channelWindowIds[arg0];
  }
};
prototype["forEachChannel"] = function forEachChannel(arg0) {
  const entries = DISCORD_EPOCH.entries(this.channelWindowIds);
  const obj = DISCORD_EPOCH;
  while (tmp2 !== undefined) {
    let tmp4 = callback2;
    let tmp5 = callback2(tmp3, 2);
    let tmp6 = arg0(tmp5[0], tmp5[1]);
    continue;
  }
};
let obj = Object.create(AutoAckableChannelTracker.prototype);
obj[0] = {};
let closure_69 = 30 * require("set").Millis.DAY;
let c71 = 0;
let c72 = 0;
let c73 = null;
let closure_80 = { IS_GUILD_CHANNEL: 1, [1]: "IS_GUILD_CHANNEL", IS_THREAD: 2, [2]: "IS_THREAD", IS_MENTION_LOW_IMPORTANCE: 4, [4]: "IS_MENTION_LOW_IMPORTANCE" };
let ReadState;
class ReadState {
  constructor(arg0) {
    CHANNEL = arg1;
    if (arg1 === undefined) {
      tmp = ReadStateTypes;
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    obj = Object.create(new.target.prototype);
    obj[0] = ReadStateTypes.CHANNEL;
    obj.channelId = global;
    obj.type = CHANNEL;
    obj._guildId = null;
    obj._isThread = false;
    obj._isActiveThread = false;
    obj._isJoinedThread = false;
    obj._isResourceChannel = false;
    obj._persisted = false;
    obj.loadedMessages = false;
    obj._lastMessageId = null;
    obj._lastMessageTimestamp = 0;
    obj._ackMessageId = null;
    obj._ackMessageTimestamp = 0;
    obj.isManualAck = false;
    obj.ackPinTimestamp = 0;
    obj.lastPinTimestamp = 0;
    obj._oldestUnreadMessageId = null;
    obj.oldestUnreadMessageIdStale = false;
    obj.estimated = false;
    obj._unreadCount = 0;
    obj._mentionCount = 0;
    obj.outgoingAck = null;
    return obj;
  }
}
const prototype2 = ReadState.prototype;
ReadState["forEach"] = function forEach(arg0) {
  const _readStates = ReadState._readStates;
  let values = _readStates.values();
  const iter = values[Symbol.iterator]();
  while (iter !== undefined) {
    values = nextResult.values();
    let tmp3 = values;
    let tmp4 = values;
    for (const item10017 of values) {
      if (false === arg0(item10017)) {
        let tmp5 = obj2;
        obj2.return();
        break;
      }
      continue;
    }
    continue;
  }
};
ReadState["get"] = function get(channelId) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  const _readStates = ReadState._readStates;
  let value = _readStates.get(CHANNEL);
  value = undefined;
  if (value != null) {
    value = value.get(channelId);
  }
  if (null == value) {
    if (typeof tmp2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let CHANNEL2 = CHANNEL;
    if (CHANNEL === undefined) {
      CHANNEL2 = ReadStateTypes.CHANNEL;
    }
    const obj = Object.create(tmp2.prototype);
    obj[0] = ReadStateTypes.CHANNEL;
    obj.channelId = channelId;
    obj.type = CHANNEL2;
    obj._guildId = null;
    obj._isThread = false;
    obj._isActiveThread = false;
    obj._isJoinedThread = false;
    obj._isResourceChannel = false;
    obj._persisted = false;
    obj.loadedMessages = false;
    obj._lastMessageId = null;
    obj._lastMessageTimestamp = 0;
    obj._ackMessageId = null;
    obj._ackMessageTimestamp = 0;
    obj.isManualAck = false;
    obj.ackPinTimestamp = 0;
    obj.lastPinTimestamp = 0;
    obj._oldestUnreadMessageId = null;
    obj.oldestUnreadMessageIdStale = false;
    obj.estimated = false;
    obj._unreadCount = 0;
    obj._mentionCount = 0;
    obj.outgoingAck = null;
    const _readStates2 = tmp2._readStates;
    let value1 = _readStates2.get(CHANNEL);
    if (value1 == null) {
      const _Map = Map;
      value1 = new Map();
    }
    const result = value1.set(channelId, obj);
    const _readStates3 = tmp2._readStates;
    value = obj;
    if (!_readStates3.has(CHANNEL)) {
      const _readStates4 = tmp2._readStates;
      const result1 = _readStates4.set(CHANNEL, value1);
      value = obj;
    }
  }
  return value;
};
ReadState["getGuildSentinels"] = function getGuildSentinels(_guildId) {
  const self = this;
  if (null == this._guildReadStateSentinels[_guildId]) {
    self._guildReadStateSentinels[_guildId] = { unreadsSentinel: 0 };
  }
  return self._guildReadStateSentinels[_guildId];
};
ReadState["resetGuildSentinels"] = function resetGuildSentinels() {
  this._guildReadStateSentinels = {};
};
ReadState["getIfExists"] = function getIfExists(id, CHANNEL) {
  if (CHANNEL === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  const _readStates = ReadState._readStates;
  let value = _readStates.get(CHANNEL);
  value = undefined;
  if (value != null) {
    value = value.get(id);
  }
  return value;
};
ReadState["getMentionChannelIds"] = function getMentionChannelIds() {
  const items = [];
  const iter = ReadState._mentionChannels[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = ReadState;
    let tmp4 = ReadState;
    let ifExists = ReadState.getIfExists(nextResult);
    let obj = ifExists;
    if (null != ifExists) {
      let tmp6 = ifExists;
      if (obj.canHaveMentions()) {
        let tmp10 = nextResult;
        let arr = items.push(tmp2);
        continue;
      }
    }
    let tmp7 = tmp3;
    let _mentionChannels = tmp4._mentionChannels;
    let tmp8 = nextResult;
    let deleteResult = _mentionChannels.delete(tmp2);
  }
  return items;
};
ReadState["getValue"] = function getValue(id, CHANNEL) {
  if (CHANNEL === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  let tmp2 = arg3;
  const ifExists = this.getIfExists(id, CHANNEL);
  if (null != ifExists) {
    tmp2 = arg2(ifExists);
  }
  return tmp2;
};
ReadState["clear"] = function clear(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  const _readStates = ReadState._readStates;
  const value = _readStates.get(CHANNEL);
  if (null == value) {
    return false;
  } else {
    const deleteResult = value.delete(arg0);
    if (deleteResult) {
      const _mentionChannels = tmp2._mentionChannels;
      _mentionChannels.delete(arg0);
    }
    return deleteResult;
  }
  tmp2 = ReadState;
};
ReadState["clearAll"] = function clearAll() {
  const _readStates = ReadState._readStates;
  _readStates.clear();
  const _mentionChannels = ReadState._mentionChannels;
  _mentionChannels.clear();
};
prototype2["serialize"] = function serialize(arg0) {
  let _ackMessageId;
  let _ackMessageTimestamp;
  let _guildId;
  let _isActiveThread;
  let _isJoinedThread;
  let _isThread;
  let _lastMessageId;
  let _lastMessageTimestamp;
  let _mentionCount;
  let _persisted;
  let ackPinTimestamp;
  let channelId;
  let flags;
  let lastPinTimestamp;
  let lastViewed;
  let type;
  ({ channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags, lastViewed } = this);
  if (arg0) {
    let obj = { channelId: null, type: null, _guildId: null, _isThread: null, _isActiveThread: null, _isJoinedThread: null, _persisted: null, loadedMessages: null, _lastMessageId: null, _lastMessageTimestamp: null, _ackMessageId: null, _ackMessageTimestamp: null, ackPinTimestamp: null, isManualAck: null, lastPinTimestamp: null, _oldestUnreadMessageId: null, oldestUnreadMessageIdStale: null, estimated: null, _mentionCount: null, flags: null, lastViewed: null };
    obj[0] = channelId;
    obj[1] = type;
    obj[2] = _guildId;
    obj[3] = _isThread;
    obj[4] = _isActiveThread;
    obj[5] = _isJoinedThread;
    obj[6] = _persisted;
    obj[7] = tmp;
    obj[8] = _lastMessageId;
    obj[9] = _lastMessageTimestamp;
    obj[10] = _ackMessageId;
    obj[11] = _ackMessageTimestamp;
    obj[12] = ackPinTimestamp;
    obj[13] = tmp2;
    obj[14] = lastPinTimestamp;
    obj[15] = tmp3;
    obj[16] = tmp4;
    obj[17] = tmp5;
    obj[18] = _mentionCount;
    obj[19] = flags;
    obj[20] = lastViewed;
    return obj;
  } else {
    obj = { channelId: null, type: null, _guildId: null, _persisted: null, _lastMessageId: null, _lastMessageTimestamp: null, _ackMessageId: null, _ackMessageTimestamp: null, ackPinTimestamp: null, lastPinTimestamp: null, _mentionCount: null, flags: null };
    obj[0] = channelId;
    obj[1] = type;
    obj[2] = _guildId;
    obj[3] = _persisted;
    obj[4] = _lastMessageId;
    obj[5] = _lastMessageTimestamp;
    obj[6] = _ackMessageId;
    obj[7] = _ackMessageTimestamp;
    obj[8] = ackPinTimestamp;
    obj[9] = lastPinTimestamp;
    obj[10] = _mentionCount;
    obj[11] = flags;
    let tmp7 = null != lastViewed;
    if (tmp7) {
      tmp7 = lastViewed > 0;
    }
    if (tmp7) {
      obj.lastViewed = lastViewed;
    }
    if (_isThread) {
      obj._isThread = _isThread;
      obj._isActiveThread = _isActiveThread;
      obj._isJoinedThread = _isJoinedThread;
    }
    return obj;
  }
};
prototype2["deserializeForOverlay"] = function deserializeForOverlay(channelId) {
  let _ackMessageId;
  let _ackMessageTimestamp;
  let _guildId;
  let _isActiveJoinedThread;
  let _isActiveThread;
  let _isJoinedThread;
  let _isThread;
  let _lastMessageId;
  let _lastMessageTimestamp;
  let _mentionCount;
  let _oldestUnreadMessageId;
  let _persisted;
  let _unreadCount;
  let ackPinTimestamp;
  let estimated;
  let flags;
  let isManualAck;
  let lastPinTimestamp;
  let lastViewed;
  let loadedMessages;
  let oldestUnreadMessageIdStale;
  let type;
  const self = this;
  ({ type, _isThread, _isActiveJoinedThread, _isActiveThread, _isJoinedThread, loadedMessages, isManualAck, oldestUnreadMessageIdStale, estimated, _unreadCount, channelId: this.channelId } = channelId);
  ({ _guildId, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _oldestUnreadMessageId, _mentionCount, flags, lastViewed } = channelId);
  if (type == null) {
    type = ReadStateTypes.CHANNEL;
  }
  self.type = type;
  self._guildId = _guildId;
  if (_isThread == null) {
    _isThread = false;
  }
  self._isThread = _isThread;
  if (null != _isActiveJoinedThread) {
    self._isActiveThread = _isActiveJoinedThread;
    self._isJoinedThread = _isActiveJoinedThread;
  } else {
    if (_isActiveThread == null) {
      _isActiveThread = false;
    }
    self._isActiveThread = _isActiveThread;
    if (_isJoinedThread == null) {
      _isJoinedThread = false;
    }
    self._isJoinedThread = _isJoinedThread;
  }
  self._persisted = false !== _persisted;
  if (loadedMessages == null) {
    loadedMessages = false;
  }
  self.loadedMessages = loadedMessages;
  self._lastMessageId = _lastMessageId;
  self._lastMessageTimestamp = _lastMessageTimestamp;
  self._ackMessageId = _ackMessageId;
  self._ackMessageTimestamp = _ackMessageTimestamp;
  self.ackPinTimestamp = ackPinTimestamp;
  if (isManualAck == null) {
    isManualAck = false;
  }
  self.isManualAck = isManualAck;
  self.lastPinTimestamp = lastPinTimestamp;
  self._oldestUnreadMessageId = _oldestUnreadMessageId;
  if (oldestUnreadMessageIdStale == null) {
    oldestUnreadMessageIdStale = false;
  }
  self.oldestUnreadMessageIdStale = oldestUnreadMessageIdStale;
  if (estimated == null) {
    estimated = false;
  }
  self.estimated = estimated;
  if (_unreadCount == null) {
    _unreadCount = 0;
  }
  self._unreadCount = _unreadCount;
  self._mentionCount = _mentionCount;
  self.flags = flags;
  self.lastViewed = lastViewed;
  const _mentionChannels = ReadState._mentionChannels;
  _mentionChannels.delete(self.channelId);
  if (tmp4) {
    const _mentionChannels2 = ReadState._mentionChannels;
    _mentionChannels2.add(self.channelId);
  }
};
prototype2["incrementGuildUnreadsSentinel"] = function incrementGuildUnreadsSentinel() {
  if (null != this._guildId) {
    const guildSentinels = ReadState.getGuildSentinels(tmp._guildId);
    guildSentinels.unreadsSentinel = guildSentinels.unreadsSentinel + 1;
  }
};
Object.defineProperty(prototype2, "oldestUnreadMessageId", {
  get: function oldestUnreadMessageId() {
    return this._oldestUnreadMessageId;
  },
  set: undefined
});
Object.defineProperty(prototype2, "oldestUnreadMessageId", {
  get: undefined,
  set: function oldestUnreadMessageId(_oldestUnreadMessageId) {
    this._oldestUnreadMessageId = _oldestUnreadMessageId;
    this.oldestUnreadMessageIdStale = false;
  }
});
Object.defineProperty(prototype2, "lastMessageId", {
  get: function lastMessageId() {
    return this._lastMessageId;
  },
  set: undefined
});
Object.defineProperty(prototype2, "lastMessageId", {
  get: undefined,
  set: function lastMessageId(_lastMessageId) {
    this._lastMessageId = _lastMessageId;
    let num = 0;
    if (null != _lastMessageId) {
      num = DISCORD_EPOCH.extractTimestamp(_lastMessageId);
      const obj = DISCORD_EPOCH;
    }
    this._lastMessageTimestamp = num;
  }
});
Object.defineProperty(prototype2, "lastMessageTimestamp", {
  get: function lastMessageTimestamp() {
    return this._lastMessageTimestamp;
  },
  set: undefined
});
Object.defineProperty(prototype2, "ackMessageId", {
  get: function ackMessageId() {
    return this._ackMessageId;
  },
  set: undefined
});
Object.defineProperty(prototype2, "ackMessageId", {
  get: undefined,
  set: function ackMessageId(_ackMessageId) {
    this._ackMessageId = _ackMessageId;
    let num = 0;
    if (null != _ackMessageId) {
      num = DISCORD_EPOCH.extractTimestamp(_ackMessageId);
      const obj = DISCORD_EPOCH;
    }
    this._ackMessageTimestamp = num;
  }
});
Object.defineProperty(prototype2, "unreadCount", {
  get: function unreadCount() {
    let num = this._unreadCount;
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype2, "unreadCount", {
  get: undefined,
  set: function unreadCount(_unreadCount) {
    const self = this;
    let tmp = undefined !== this._unreadCount;
    if (tmp) {
      tmp = 0 !== self._unreadCount;
    }
    if (tmp) {
      tmp = 0 !== _unreadCount;
    }
    if (!tmp) {
      const result = self.incrementGuildUnreadsSentinel();
    }
    self._unreadCount = _unreadCount;
  }
});
Object.defineProperty(prototype2, "mentionCount", {
  get: function mentionCount() {
    return this._mentionCount;
  },
  set: undefined
});
Object.defineProperty(prototype2, "mentionCount", {
  get: undefined,
  set: function mentionCount(_mentionCount) {
    const self = this;
    if (!tmp) {
      const result = self.incrementGuildUnreadsSentinel();
    }
    self._mentionCount = _mentionCount;
    const _mentionChannels = ReadState._mentionChannels;
    _mentionChannels.delete(self.channelId);
    if (tmp5) {
      const _mentionChannels2 = ReadState._mentionChannels;
      _mentionChannels2.add(self.channelId);
    }
  }
});
Object.defineProperty(prototype2, "isMentionLowImportance", {
  get: function isMentionLowImportance() {
    let tmp = null != this.flags;
    if (tmp) {
      tmp = (this.flags & constants15.IS_MENTION_LOW_IMPORTANCE) === constants15.IS_MENTION_LOW_IMPORTANCE;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype2, "isMentionLowImportance", {
  get: undefined,
  set: function isMentionLowImportance(arg0) {
    const self = this;
    if (arg0) {
      if (0 === self._mentionCount) {
        let num3 = self.flags;
        if (num3 == null) {
          num3 = 0;
        }
        self.flags = num3 | constants15.IS_MENTION_LOW_IMPORTANCE;
      }
    } else {
      let tmp2 = null != self.flags;
      if (tmp2) {
        tmp2 = 0 !== self.flags;
      }
      if (tmp2) {
        self.flags = self.flags & ~constants15.IS_MENTION_LOW_IMPORTANCE;
      }
    }
  }
});
prototype2["guessAckMessageId"] = function guessAckMessageId() {
  const self = this;
  const messages = store5.getMessages(this.channelId);
  if (null == this.ackMessageId) {
    if (self.isPrivate()) {
      if (!messages.hasMoreAfter) {
        if (self.hasMentions()) {
          let c0 = null;
          const mentionCount = self.mentionCount;
          const currentUser = authStore.getCurrentUser();
          const item = messages.forEach((author) => {
            if (closure_1 > 0) {
              let id;
              if (id != null) {
                id = id.id;
              }
              if (author.author.id !== id) {
                closure_1 = closure_1 - 1;
              }
            }
            if (0 === closure_1) {
              id = author.id;
              return false;
            }
          }, self, true);
          return c0;
        } else {
          return self.lastMessageId;
        }
      }
    }
  }
  return self.ackMessageId;
};
Object.defineProperty(prototype2, "guildId", {
  get: function guildId() {
    const self = this;
    if (null != this._guildId) {
      return self._guildId;
    } else {
      const channel = store3.getChannel(self.channelId);
      let guildId = null;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      self._guildId = guildId;
      return guildId;
    }
  },
  set: undefined
});
prototype2["isPrivate"] = function isPrivate() {
  if (this.type !== ReadStateTypes.CHANNEL) {
    return false;
  } else {
    const channel = store3.getChannel(tmp.channelId);
    return null != channel && channel.isPrivate();
  }
};
prototype2["rebuildChannelState"] = function rebuildChannelState(messageId, arg1, newMentionCount) {
  let self = this;
  self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let currentUser;
  let ackTimestamp;
  let c4;
  let c5;
  let c0;
  let _ackMessageId = messageId;
  if (messageId == null) {
    _ackMessageId = self._ackMessageId;
  }
  if (_ackMessageId == null) {
    _ackMessageId = self.guessAckMessageId();
  }
  self.ackMessageId = _ackMessageId;
  self.isManualAck = null != messageId;
  self.oldestUnreadMessageId = null;
  self.estimated = false;
  self.unreadCount = 0;
  if (flag) {
    self.mentionCount = 0;
  }
  if (self.hasUnread()) {
    currentUser = authStore.getCurrentUser();
    ackTimestamp = self.getAckTimestamp();
    c4 = false;
    c5 = false;
    c0 = null;
    const messages = store5.getMessages(self.channelId);
    messages.forAll((id) => {
      if (ReadStateTypes) {
        id = self._oldestUnreadMessageId;
        if (id == null) {
          id = id.id;
        }
        self.oldestUnreadMessageId = id;
        let tmp = tmp2;
      } else {
        tmp = self;
        ReadStateTypes = id.id === self._ackMessageId;
      }
      if (obj.extractTimestamp(id.id) > getHash) {
        tmp.unreadCount = tmp.unreadCount + 1;
        let tmp4 = flag;
        if (flag) {
          tmp4 = outer1_76(id, table);
        }
        if (tmp4) {
          tmp.mentionCount = tmp.mentionCount + 1;
        }
        if (id2 == null) {
          id2 = id.id;
        }
      } else {
        let c5 = true;
      }
    });
    const hasPresentResult = messages.hasPresent();
    let tmp5 = !hasPresentResult;
    if (hasPresentResult) {
      let tmp6 = c4;
      if (!c4) {
        tmp6 = c5;
      }
      let tmp7 = !tmp6;
      if (!tmp6) {
        tmp7 = messages.length === self.unreadCount;
      }
      tmp5 = tmp7;
    }
    self.estimated = tmp5;
    let _oldestUnreadMessageId = self._oldestUnreadMessageId;
    if (_oldestUnreadMessageId == null) {
      _oldestUnreadMessageId = c0;
    }
    self.oldestUnreadMessageId = _oldestUnreadMessageId;
  }
  if (null != newMentionCount) {
    self.mentionCount = newMentionCount;
  }
};
prototype2["handleGuildEventRemoval"] = function handleGuildEventRemoval(guild_id, id) {
  const self = this;
  if (obj.compare(this.ackMessageId, id) < 0) {
    guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(guild_id);
    const ackTimestamp = self.getAckTimestamp();
    const _isNaN = isNaN;
    if (!isNaN(ackTimestamp)) {
      let _ackMessageId = self._ackMessageId;
      if (_ackMessageId == null) {
        _ackMessageId = DISCORD_EPOCH.fromTimestamp(ackTimestamp);
        let tmpResult = DISCORD_EPOCH;
      }
      importDefault = null;
      const dependencyMap = 0;
      const item = guildScheduledEventsForGuild.forEach((id) => {
        if (outer1_10(id)) {
          if (obj.compare(id.id, id) > 0) {
            id = id.id;
          }
          obj = _null(table[37]);
          const tmp = _null;
          const tmp2 = table;
          if (tmpResult.compare(id.id, _ackMessageId) > 0) {
            closure_2 = closure_2 + 1;
          }
          tmpResult = _null(table[37]);
        }
      });
      self.lastMessageId = importDefault;
      self.mentionCount = dependencyMap;
    }
  }
};
prototype2["canTrackUnreads"] = function canTrackUnreads() {
  const self = this;
  if (this.type !== ReadStateTypes.CHANNEL) {
    return true;
  } else {
    if (self._isThread) {
      if (!self._isActiveThread) {
        return false;
      }
    }
    if (self._isResourceChannel) {
      return false;
    } else {
      let basicPermissions = store3.getBasicChannel(self.channelId);
      if (null == basicPermissions) {
        return tmp3;
      } else if ("basicPermissions" in basicPermissions) {
        basicPermissions = basicPermissions.basicPermissions;
        let hasItem = has.has(basicPermissions, BasicPermissions.VIEW_CHANNEL);
        const obj = has;
      } else {
        const isChannelGatedResult = isSubscriptionGated.isChannelGated(self.guildId, self.channelId);
        hasItem = !isChannelGatedResult;
        if (isChannelGatedResult) {
          hasItem = getUncachedChannelPermissions.can(constants6.VIEW_CHANNEL, basicPermissions);
        }
      }
    }
  }
};
prototype2["canBeUnread"] = function canBeUnread() {
  const self = this;
  if (this._isThread) {
    if (!self._isJoinedThread) {
      return false;
    }
  }
  const items = [processChannel, closure_12];
  if (obj.isMessageRequestOrSpamRequest(self.channelId, items)) {
    return false;
  } else {
    if (!self._isThread) {
      if (tmpResult.isOptInEnabledForGuild(self._guildId)) {
        if (self._lastMessageTimestamp < c71) {
          return false;
        } else if (!updateUserGuildSettingsInternal.isChannelOrParentOptedIn(self._guildId, self.channelId)) {
          if (!self.hasRecentlyVisitedAndRead()) {
            if (!self.hasMentions()) {
              return false;
            }
          }
        }
      }
      tmpResult = tmp(5282);
    }
    return self.canTrackUnreads();
  }
  obj = filterOutMessageRequestsAndSpam;
  tmp = require;
};
prototype2["canHaveMentions"] = function canHaveMentions() {
  const self = this;
  let tmp = 0 !== this.mentionCount;
  if (tmp) {
    let tmp3 = !tmp2;
    if (!(self._isThread && !self._isJoinedThread)) {
      const items = [processChannel, closure_12];
      const result = filterOutMessageRequestsAndSpam.isMessageRequestOrSpamRequest(self.channelId, items);
      let tmp9 = !result;
      if (!result) {
        let result1 = tmp4(5282).isOptInEnabledForGuild(self._guildId);
        if (result1) {
          result1 = self._lastMessageTimestamp < c71;
        }
        let canTrackUnreadsResult = !result1;
        if (!result1) {
          canTrackUnreadsResult = self.canTrackUnreads();
        }
        tmp9 = canTrackUnreadsResult;
        const tmp4Result = tmp4(5282);
      }
      tmp3 = tmp9;
      const obj = filterOutMessageRequestsAndSpam;
      tmp4 = require;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype2["getGuildChannelUnreadState"] = function getGuildChannelUnreadState(basicPermissions) {
  const self = this;
  if (arg1) {
    if (self._lastMessageTimestamp < c71) {
      return { mentionCount: 0, unread: false, isMentionLowImportance: false };
    } else if (!updateUserGuildSettingsInternal.isChannelRecordOrParentOptedIn(basicPermissions)) {
      if (!self.hasRecentlyVisitedAndRead()) {
        if (self.mentionCount <= 0) {
          return { mentionCount: 0, unread: false, isMentionLowImportance: false };
        }
      }
    }
  }
  if ("basicPermissions" in basicPermissions) {
    let obj = has;
    if (!obj.has(basicPermissions.basicPermissions, BasicPermissions.VIEW_CHANNEL)) {
      return { mentionCount: 0, unread: false, isMentionLowImportance: false };
    }
  } else if (isSubscriptionGated.isChannelGated(self.guildId, self.channelId)) {
    if (!getUncachedChannelPermissions.can(constants6.VIEW_CHANNEL, basicPermissions)) {
      return { mentionCount: 0, unread: false, isMentionLowImportance: false };
    }
  }
  if (!arg3) {
    if (!arg4) {
      obj = { mentionCount: null, unread: null, isMentionLowImportance: null };
      obj[0] = self.mentionCount;
      obj[1] = self.getAckTimestamp() < self._lastMessageTimestamp;
      obj[2] = self.isMentionLowImportance;
    }
    return obj;
  }
  obj = { mentionCount: self.mentionCount, unread: false, isMentionLowImportance: self.isMentionLowImportance };
};
prototype2["hasUnread"] = function hasUnread() {
  return this.getAckTimestamp() < this._lastMessageTimestamp;
};
prototype2["hasRecentlyVisitedAndRead"] = function hasRecentlyVisitedAndRead() {
  const self = this;
  let tmp = this._lastMessageTimestamp > 0;
  if (tmp) {
    tmp = null != self._ackMessageId;
  }
  if (tmp) {
    tmp = self.getAckTimestamp() > c72;
  }
  if (tmp) {
    guildRecentsDismissedAt = guildRecentsDismissedAt.getGuildRecentsDismissedAt(self._guildId);
    tmp = guildRecentsDismissedAt < self.getAckTimestamp();
  }
  return tmp;
};
prototype2["isForumPostUnread"] = function isForumPostUnread() {
  const self = this;
  return this._isActiveThread && self.hasUnread();
};
prototype2["hasMentions"] = function hasMentions() {
  return this.getMentionCount() > 0;
};
prototype2["getMentionCount"] = function getMentionCount() {
  return this.mentionCount;
};
prototype2["hasUnreadOrMentions"] = function hasUnreadOrMentions() {
  const self = this;
  return this.hasMentions() || self.hasUnread();
};
prototype2["ackPins"] = function ackPins() {
  let self = this;
  self = this;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  if (self.type !== ReadStateTypes.CHANNEL) {
    return false;
  } else if (self.canTrackUnreads()) {
    if (null == tmp) {
      if (self.lastPinTimestamp === self.ackPinTimestamp) {
        return false;
      } else {
        self._persisted = true;
        _networkAwareRetry(() => {
          const HTTP = self(outer1_2[42]).HTTP;
          return HTTP.post({ url: outer1_39.PINS_ACK(self.channelId), oldFormErrors: true, rejectWithError: true });
        });
      }
    }
    let num2 = 0;
    if (null != tmp) {
      const _Date = Date;
      const parsed = Date.parse(tmp);
      const _isNaN = isNaN;
      let num3 = 0;
      if (!isNaN(parsed)) {
        num3 = parsed;
      }
      num2 = num3;
    }
    if (0 === num2) {
      num2 = self.lastPinTimestamp;
    }
    self.ackPinTimestamp = num2;
    return true;
  } else {
    return false;
  }
};
prototype2["ack"] = function ack(immediate) {
  let c0;
  let importDefault;
  let local;
  let messageId;
  let self = this;
  self = this;
  ({ messageId, location: importDefault, trackAnalytics: c0, local } = immediate);
  if (local === undefined) {
    local = false;
  }
  let flag = immediate.immediate;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = immediate.force;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = immediate.isExplicitUserAction;
  if (flag3 === undefined) {
    flag3 = false;
  }
  if (self._shouldAck(flag2, local, flag3)) {
    if (!flag2) {
      if (!self.canTrackUnreads()) {
        return false;
      }
    }
    self.estimated = false;
    self.snapshot = self.takeSnapshot();
    self.unreadCount = 0;
    self.mentionCount = 0;
    self.isMentionLowImportance = false;
    let flag7 = null != messageId;
    if (!flag7) {
      const lastMessageId = self.lastMessageId;
      flag7 = null != lastMessageId;
      messageId = lastMessageId;
    }
    if (flag7) {
      self.ackMessageId = messageId;
      self.isManualAck = false;
      self._persisted = true;
      if (c64) {
        self.ackedWhileCached = true;
      }
      const channelId = self.channelId;
      c0 = undefined;
      if (null != channelId) {
        let value = ReadState.get(channelId);
        if (value.type === ReadStateTypes.CHANNEL) {
          const channel = store3.getChannel(value.channelId);
          if (null != channel) {
            if (channel.isForumPost()) {
              if (null != channel.parent_id) {
                const parent_id = channel.parent_id;
                value = obj5.get(parent_id);
                c0 = value;
                let hasLoadedResult = handleThreadCreateOrUpdate.hasLoaded(channel.guild_id);
                if (hasLoadedResult) {
                  let obj = importDefault(self[37]);
                  const keys = obj.keys(obj8.getThreadsForParent(channel.guild_id, parent_id));
                  hasLoadedResult = keys.every((channelId) => {
                    let hasOpenedThreadResult = outer1_91.hasOpenedThread(channelId);
                    if (!hasOpenedThreadResult) {
                      hasOpenedThreadResult = outer1_1(self[37]).compare(channelId, _undefined.ackMessageId) < 0;
                      const obj = outer1_1(self[37]);
                    }
                    return hasOpenedThreadResult;
                  });
                }
                if (hasLoadedResult) {
                  obj = { trackAnalytics: true, location: null };
                  obj = { section: null, object: null, objectType: null };
                  obj[0] = constants3.CHANNEL;
                  obj[1] = constants2.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS;
                  obj[2] = constants.ACK_AUTOMATIC;
                  obj[1] = obj;
                  value.ack(obj);
                }
                obj8 = handleThreadCreateOrUpdate;
              }
            }
          }
        }
        obj5 = ReadState;
      }
      if (local) {
        self.oldestUnreadMessageId = null;
        flag7 = true;
      } else {
        if (null == self.outgoingAck) {
          if (hasMentionsResult) {
            let num2 = 0;
          } else {
            num2 = 3000;
          }
          self.outgoingAckTimer = setTimeout(() => {
            if (self.type === outer1_56.CHANNEL) {
              obj._ack(closure_1, c0);
            } else {
              obj._nonChannelAck();
            }
            self.outgoingAck = null;
            self.outgoingAckTimer = null;
          }, num2);
        }
        self.outgoingAck = messageId;
        flag7 = true;
      }
    }
    return flag7;
  } else {
    return false;
  }
};
prototype2["takeSnapshot"] = function takeSnapshot() {
  const _default = updateGuildUnreadSentinel.default;
  const guildId = this.guildId;
  const obj = { unread: this.hasUnread(), mentionCount: this.mentionCount, guildUnread: null, guildMentionCount: null, takenAt: null };
  let hasUnreadResult = null;
  if (null != guildId) {
    hasUnreadResult = _default.hasUnread(guildId);
  }
  obj[2] = hasUnreadResult;
  let mentionCount = null;
  if (null != guildId) {
    mentionCount = _default.getMentionCount(guildId);
  }
  obj[3] = mentionCount;
  obj[4] = Date.now();
  return obj;
};
prototype2["clearOutgoingAck"] = function clearOutgoingAck() {
  const self = this;
  this.outgoingAck = null;
  if (null != this.outgoingAckTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.outgoingAckTimer);
    self.outgoingAckTimer = null;
  }
};
prototype2["_shouldAck"] = function _shouldAck(flag2, local, flag3) {
  let tmp = flag2;
  if (!tmp) {
    let tmp3 = flag3;
    if (!tmp3) {
      let tmp5 = local;
      if (!tmp5) {
        const self = this;
        const isManualAck = this.isManualAck;
        let tmp6 = !isManualAck;
        if (!isManualAck) {
          let tmp8 = self.type === ReadStateTypes.CHANNEL && !self.loadedMessages;
          if (tmp8) {
            const channel = store3.getChannel(self.channelId);
            let isForumLikeChannelResult;
            if (channel != null) {
              isForumLikeChannelResult = channel.isForumLikeChannel();
            }
            tmp8 = !isForumLikeChannelResult;
          }
          tmp6 = !tmp8;
        }
        tmp5 = tmp6;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype2["_ack"] = function _ack(closure_1, c0) {
  let self = this;
  self = this;
  const importDefault = closure_1;
  const dependencyMap = c0;
  const outgoingAck = this.outgoingAck;
  if (null != outgoingAck) {
    const id = store.getId();
    let participantFromServer = c63;
    self._persisted = true;
    const recalculateFlagsResult = self.recalculateFlags();
    let tmp4;
    if (recalculateFlagsResult !== self.flags) {
      tmp4 = recalculateFlagsResult;
    }
    const require = tmp4;
    _networkAwareRetry(() => {
      const HTTP = tmp4(530).HTTP;
      obj = { url: outer1_39.MESSAGE_ACK(self.channelId, outgoingAck), body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { token: outer1_63, last_viewed: self.lastViewed, flags: tmp4 };
      return HTTP.post(obj);
    }).then((body) => {
      if (null != body) {
        let tmp3 = outer1_63 === participantFromServer;
        if (tmp3) {
          tmp3 = ReadStateTypes === outer1_22.getId();
        }
        if (tmp3) {
          outer1_63 = body.body.token;
        }
        callback(709).dispatch({ type: "MESSAGE_ACKED" });
        if (dependencyMap) {
          tmp4(2007)(13065, tmp5.paths).then((arg0) => {
            let obj = closure_1;
            if (closure_1 == null) {
              obj = {};
            }
            arg0.default(channelId.channelId, obj);
          });
          const promise = tmp4(2007)(13065, tmp5.paths);
        }
        let obj = callback(709);
        tmp5 = dependencyMap;
      }
    });
    let promise = _networkAwareRetry(() => {
      const HTTP = tmp4(530).HTTP;
      obj = { url: outer1_39.MESSAGE_ACK(self.channelId, outgoingAck), body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { token: outer1_63, last_viewed: self.lastViewed, flags: tmp4 };
      return HTTP.post(obj);
    });
  }
};
prototype2["recalculateFlags"] = function recalculateFlags() {
  if (this.type === ReadStateTypes.CHANNEL) {
    const channel = store3.getChannel(tmp.channelId);
    if (null != channel) {
      if (channel.isThread()) {
        let num = constants15.IS_THREAD;
      } else {
        num = 0;
        if (null != channel.guild_id) {
          num = constants15.IS_GUILD_CHANNEL;
        }
      }
      return num;
    }
  }
};
prototype2["_nonChannelAck"] = function _nonChannelAck() {
  let outgoingAck;
  let type;
  let self = this;
  ({ outgoingAck, type } = this);
  if (null != outgoingAck) {
    if (ReadStateTypes.GUILD_HOME !== type) {
      if (tmp6.GUILD_EVENT !== type) {
        if (tmp6.GUILD_ONBOARDING_QUESTION !== type) {
          let closure_0 = closure_39.USER_NON_CHANNEL_ACK(outgoingAck, type);
        }
        self._persisted = true;
        self = importDefault;
        _networkAwareRetry(() => {
          const HTTP = callback(outer1_2[42]).HTTP;
          return HTTP.post({ url: callback, body: {}, oldFormErrors: true, rejectWithError: true });
        });
      }
    }
    closure_0 = closure_39.GUILD_FEATURE_ACK(tmp, outgoingAck, type);
  }
};
prototype2["delete"] = function delete() {
  let channelId;
  let type;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const self = this;
  const basicChannel = store3.getBasicChannel(this.channelId);
  ({ channelId, type } = this);
  let obj = { remote: flag, persisted: this._persisted, channelMissing: null == basicChannel, isOld: null, validType: null, readableType: null, oldThreadCutoff: null, mentionCount: null, channelId: null, ackMessageId: null, lastMessageId: null };
  const fromTimestampResult = DISCORD_EPOCH.fromTimestamp(Date.now() - closure_69);
  let tmp7 = this.mentionCount > 0;
  if (!tmp7) {
    let tmp3Result = tmp3(11);
    let tmp8 = tmp3Result.compare(self.channelId, fromTimestampResult) <= 0;
    if (tmp8) {
      let tmp9 = null != self._ackMessageId;
      if (tmp9) {
        tmp3Result = tmp3(11);
        tmp9 = tmp3Result.compare(self._ackMessageId, fromTimestampResult) > 0;
      }
      let tmp10 = !tmp9;
      if (!tmp9) {
        let tmp11 = null != self._lastMessageId;
        if (tmp11) {
          tmp11 = tmp3(11).compare(self._lastMessageId, fromTimestampResult) > 0;
          const tmp3Result1 = tmp3(11);
        }
        tmp10 = !tmp11;
      }
      tmp8 = tmp10;
    }
    tmp7 = tmp8;
  }
  obj[3] = tmp7;
  let hasItem = null != basicChannel;
  if (hasItem) {
    hasItem = set.has(basicChannel.type);
  }
  obj[4] = hasItem;
  let tmp14 = null != basicChannel;
  if (tmp14) {
    tmp14 = callback3(basicChannel.type);
  }
  obj[5] = tmp14;
  const obj2 = DISCORD_EPOCH;
  const tmp5 = closure_69;
  obj[6] = DISCORD_EPOCH.fromTimestamp(Date.now() - tmp5);
  ({ mentionCount: obj[7], channelId: obj[8], _ackMessageId: obj[9], _lastMessageId: obj[10] } = self);
  tmp6.log("Deleting ReadState", channelId, type, obj);
  if (flag) {
    flag = self._persisted;
  }
  if (flag) {
    const HTTP = sendRequest.HTTP;
    obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = closure_39.CHANNEL_ACK(self.channelId);
    obj = { version: 2, read_state_type: null };
    obj[1] = self.type;
    obj[1] = obj;
    HTTP.del(obj);
  }
  const _readStates = ReadState._readStates;
  const value = _readStates.get(self.type);
  if (value != null) {
    value.delete(self.channelId);
  }
  const _mentionChannels = ReadState._mentionChannels;
  _mentionChannels.delete(self.channelId);
};
prototype2["shouldDeleteReadState"] = function shouldDeleteReadState(closure_1) {
  if (0 !== obj.totalUnavailableGuilds) {
    return false;
  } else {
    const self = this;
    if (null != this.type) {
      if (self.type !== ReadStateTypes.CHANNEL) {
        const type = self.type;
        if (tmp.GUILD_HOME !== type) {
          if (tmp.GUILD_EVENT !== type) {
            if (tmp.GUILD_ONBOARDING_QUESTION !== type) {
              let flag = true;
              if (tmp.NOTIFICATION_CENTER === type) {
                const currentUser = authStore.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                flag = DISCORD_EPOCH.cast(id) === self.channelId;
                const obj7 = DISCORD_EPOCH;
              }
            }
            return !flag;
          }
        }
        flag = null != store4.getGuild(self.channelId);
      }
    }
    const basicChannel = store3.getBasicChannel(self.channelId);
    if (null == basicChannel) {
      let tmp29 = self.mentionCount > 0;
      if (!tmp29) {
        let tmp32 = DISCORD_EPOCH.compare(self.channelId, closure_1) <= 0;
        if (tmp32) {
          let tmp33 = null != self._ackMessageId;
          if (tmp33) {
            let tmp30Result = tmp30(11);
            tmp33 = tmp30Result.compare(self._ackMessageId, closure_1) > 0;
          }
          let tmp34 = !tmp33;
          if (!tmp33) {
            let tmp35 = null != self._lastMessageId;
            if (tmp35) {
              tmp30Result = tmp30(11);
              tmp35 = tmp30Result.compare(self._lastMessageId, closure_1) > 0;
            }
            tmp34 = !tmp35;
          }
          tmp32 = tmp34;
        }
        tmp29 = tmp32;
        const obj4 = DISCORD_EPOCH;
      }
      let hasItem = tmp29;
    } else {
      hasItem = set.has(basicChannel.type);
      if (hasItem) {
        const tmp6 = callback3(basicChannel.type);
        let tmp7 = !tmp6;
        if (tmp6) {
          const tmp9 = callback4(basicChannel.type);
          let tmp10 = !tmp9;
          if (!tmp9) {
            hasItem = set2.has(basicChannel.type);
            let tmp13 = !hasItem;
            if (hasItem) {
              const guildId = self.guildId;
              let isActiveResult = null != guildId;
              if (isActiveResult) {
                isActiveResult = handleThreadCreateOrUpdate.isActive(guildId, basicChannel.parent_id, self.channelId);
              }
              let tmp16 = !isActiveResult;
              if (!isActiveResult) {
                let tmp17 = self.mentionCount > 0;
                if (!tmp17) {
                  obj = DISCORD_EPOCH;
                  let tmp20 = obj.compare(self.channelId, closure_1) <= 0;
                  if (tmp20) {
                    let tmp21 = null != self._ackMessageId;
                    if (tmp21) {
                      let tmp18Result = tmp18(11);
                      tmp21 = tmp18Result.compare(self._ackMessageId, closure_1) > 0;
                    }
                    let tmp22 = !tmp21;
                    if (!tmp21) {
                      let tmp23 = null != self._lastMessageId;
                      if (tmp23) {
                        tmp18Result = tmp18(11);
                        tmp23 = tmp18Result.compare(self._lastMessageId, closure_1) > 0;
                      }
                      tmp22 = !tmp23;
                    }
                    tmp20 = tmp22;
                  }
                  tmp17 = tmp20;
                }
                tmp16 = tmp17;
              }
              tmp13 = !tmp16;
            }
            let tmp24 = !tmp13;
            if (tmp13) {
              let tmp25 = self.mentionCount > 0;
              if (tmp25) {
                tmp25 = !getUncachedChannelPermissions.canBasicChannel(closure_60, basicChannel);
              }
              tmp24 = tmp25;
            }
            tmp10 = tmp24;
          }
          tmp7 = tmp10;
        }
        hasItem = tmp7;
      }
    }
    return hasItem;
  }
};
prototype2["getAckTimestamp"] = function getAckTimestamp() {
  const self = this;
  if (0 !== this._ackMessageTimestamp) {
    const _isNaN = isNaN;
    if (!isNaN(self._ackMessageTimestamp)) {
      return self._ackMessageTimestamp;
    }
  }
  if (self._isThread) {
    self._ackMessageTimestamp = getThreadAckMessageTimestamp(self.guildId, self.channelId);
    self._ackMessageId = DISCORD_EPOCH.fromTimestamp(self._ackMessageTimestamp);
    return self._ackMessageTimestamp;
  } else {
    if (self.type !== ReadStateTypes.GUILD_EVENT) {
      if (self.type !== tmp2.GUILD_ONBOARDING_QUESTION) {
        if (callback5(self.channelId)) {
          let guild = store4.getGuild(self.guildId);
        } else {
          const channel = store3.getChannel(self.channelId);
          if (null != channel) {
            guild = store4.getGuild(channel.getGuildId());
          }
        }
      }
      if (null != guild) {
        if (null != guild) {
          if (null != guild.joinedAt) {
            const _Date3 = Date;
            const joinedAt2 = guild.joinedAt;
            if (guild.joinedAt instanceof Date) {
              const time = joinedAt2.getTime();
              const _isNaN3 = isNaN;
              let joinedAt = time;
            } else if (typeof joinedAt2 === "string") {
              const _Date = Date;
              const date = new Date(guild.joinedAt);
              const time1 = date.getTime();
              const _isNaN2 = isNaN;
              joinedAt = time1;
            } else if (typeof guild.joinedAt === "number") {
              const _isNaN5 = isNaN;
              if (!isNaN(guild.joinedAt)) {
                joinedAt = guild.joinedAt;
              }
            }
          }
          const _isNaN4 = isNaN;
          let extractTimestampResult = joinedAt;
          if (isNaN(joinedAt)) {
            extractTimestampResult = DISCORD_EPOCH.extractTimestamp(self.channelId);
            const obj4 = DISCORD_EPOCH;
          }
        }
        const _Date2 = Date;
        joinedAt = Date.now();
      } else {
        extractTimestampResult = DISCORD_EPOCH.extractTimestamp(self.channelId);
        const obj2 = DISCORD_EPOCH;
      }
      self._ackMessageTimestamp = extractTimestampResult;
      return extractTimestampResult;
    }
    guild = store4.getGuild(self.channelId);
  }
};
Object.defineProperty(prototype2, "oldestUnreadTimestamp", {
  get: function oldestUnreadTimestamp() {
    let num = 0;
    if (null != this.oldestUnreadMessageId) {
      num = DISCORD_EPOCH.extractTimestamp(tmp.oldestUnreadMessageId);
      const obj = DISCORD_EPOCH;
    }
    return num;
  },
  set: undefined
});
prototype2["syncThreadSettings"] = function syncThreadSettings() {
  const self = this;
  this._isThread = true;
  const channel = store3.getChannel(this.channelId);
  if (null == channel) {
    const _HermesInternal = HermesInternal;
    tmp6.warn("syncThreadSettings called with channel not in memory " + self.channelId);
    return false;
  } else {
    const guildId = self.guildId;
    let isActiveResult = null != guildId;
    if (isActiveResult) {
      isActiveResult = handleThreadCreateOrUpdate.isActive(guildId, channel.parent_id, self.channelId);
    }
    const hasJoinedResult = storeThread.hasJoined(self.channelId);
    let flag = self._isActiveThread !== isActiveResult || self._isJoinedThread !== hasJoinedResult;
    if (flag) {
      self._isActiveThread = isActiveResult;
      self._isJoinedThread = hasJoinedResult;
      flag = true;
    }
    return flag;
  }
};
prototype2["recordLastViewedTime"] = function recordLastViewedTime() {
  const self = this;
  const timestamp = Date.now();
  const diff = timestamp - DISCORD_EPOCH.DISCORD_EPOCH;
  const rounded = Math.ceil(diff / set.Millis.DAY);
  if (rounded !== this.lastViewed) {
    self.lastViewed = rounded;
    if (tmp4) {
      self.ack({ force: true, trackAnalytics: false });
    }
    tmp4 = self.canTrackUnreads() && !self.hasUnread();
  }
};
ReadState._guildReadStateSentinels = {};
let tmp6 = new require("getParticipants")("ReadStateStore");
ReadState._readStates = new Map();
set = new Set();
ReadState._mentionChannels = set;
let closure_87 = apply.throttle((arg0) => {
  arg0.delete();
}, 100);
class ReadStateStoreClass extends Store {
}
const prototype3 = ReadStateStoreClass.prototype;
prototype3["initialize"] = function initialize() {
  const items = [percentageScrolled, mergeGuildAvatar, createGuildRecordFromRust, handleConnectionOpen, ensureGuildLoaded, closure_32, reinjectEphemerals, getUncachedChannelPermissions, getParticipants, handleThreadCreateOrUpdate, storeThread, handlePermissionsChange, scheduledEventSort, closure_8, isSubscriptionGated, updateUserGuildSettingsInternal, map, _validate, processChannel, handleConnectionClosedOrResumed, closure_12];
  items.push(getState.default);
  this.waitFor(handleThreadCreateOrUpdate, fetchFingerprint, getParticipants, handlePermissionsChange, ensureGuildLoaded, percentageScrolled, participantFromServer, isSubscriptionGated, handleConnectionOpen, scheduledEventSort, createGuildRecordFromRust, checkIdleAFK, storeThread, reinjectEphemerals, _validate, getUncachedChannelPermissions, markAllUserIdListsStale, closure_32, updateUserGuildSettingsInternal, handleConnectionClosedOrResumed, mergeGuildAvatar, map);
  const items1 = [handlePermissionsChange];
  this.syncWith(items1, handleChannelSectionStoreUpdate);
};
prototype3["getReadStatesByChannel"] = function getReadStatesByChannel() {
  const _readStates = ReadState._readStates;
  let map = _readStates.get(ReadStateTypes.CHANNEL);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  return map;
};
prototype3["getForDebugging"] = function getForDebugging(id, CHANNEL) {
  if (CHANNEL === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getIfExists(id, CHANNEL);
};
prototype3["getNotifCenterReadState"] = function getNotifCenterReadState(id) {
  return ReadState.getIfExists(id, ReadStateTypes.NOTIFICATION_CENTER);
};
prototype3["hasUnread"] = function hasUnread(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => canBeUnread.canBeUnread() && canBeUnread.hasUnread(), false);
};
prototype3["hasUnreadOrMentions"] = function hasUnreadOrMentions(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => canBeUnread.canBeUnread() && canBeUnread.hasUnreadOrMentions(), false);
};
prototype3["hasTrackedUnread"] = function hasTrackedUnread(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (canTrackUnreads) => canTrackUnreads.canTrackUnreads() && canTrackUnreads.hasUnread(), false);
};
prototype3["isForumPostUnread"] = function isForumPostUnread(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (isForumPostUnread) => isForumPostUnread.isForumPostUnread(), false);
};
prototype3["getUnreadCount"] = function getUnreadCount(closure_0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(closure_0, CHANNEL, (canBeUnread) => {
    let num = 0;
    if (canBeUnread.canBeUnread()) {
      num = canBeUnread.unreadCount;
    }
    return num;
  }, 0);
};
prototype3["getMentionCount"] = function getMentionCount(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  const value = ReadState.getValue(arg0, CHANNEL, (canHaveMentions) => {
    let num = 0;
    if (canHaveMentions.canHaveMentions()) {
      num = canHaveMentions.getMentionCount();
    }
    return num;
  }, 0);
  if (!isChangelogChannel(arg0)) {
    let num = value;
  } else {
    num = 1;
  }
  return num;
};
prototype3["getIsMentionLowImportance"] = function getIsMentionLowImportance(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  let value = CHANNEL === ReadStateTypes.CHANNEL;
  if (value) {
    value = ReadState.getValue(arg0, CHANNEL, (isMentionLowImportance) => isMentionLowImportance.isMentionLowImportance, false);
  }
  return value;
};
prototype3["getGuildChannelUnreadState"] = function getGuildChannelUnreadState(id) {
  let closure_0 = id;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let getHash = arg3;
  let ReadStateTypes = arg4;
  return ReadState.getValue(id.id, ReadStateTypes.CHANNEL, (getGuildChannelUnreadState) => getGuildChannelUnreadState.getGuildChannelUnreadState(closure_0, closure_1, closure_2, getHash, ReadStateTypes), { mentionCount: 0, unread: false, isMentionLowImportance: false });
};
prototype3["hasRecentlyVisitedAndRead"] = function hasRecentlyVisitedAndRead(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (hasRecentlyVisitedAndRead) => hasRecentlyVisitedAndRead.hasRecentlyVisitedAndRead(), false);
};
prototype3["ackMessageId"] = function ackMessageId(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => {
    let ackMessageId = null;
    if (canBeUnread.canBeUnread()) {
      ackMessageId = canBeUnread.ackMessageId;
    }
    return ackMessageId;
  }, null);
};
prototype3["getTrackedAckMessageId"] = function getTrackedAckMessageId(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (canTrackUnreads) => {
    let _ackMessageId = null;
    if (canTrackUnreads.canTrackUnreads()) {
      _ackMessageId = canTrackUnreads._ackMessageId;
    }
    return _ackMessageId;
  }, null);
};
prototype3["lastMessageId"] = function lastMessageId(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (lastMessageId) => lastMessageId.lastMessageId, null);
};
prototype3["lastMessageTimestamp"] = function lastMessageTimestamp(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (lastMessageTimestamp) => lastMessageTimestamp.lastMessageTimestamp, 0);
};
prototype3["lastPinTimestamp"] = function lastPinTimestamp(arg0) {
  return ReadState.getValue(arg0, ReadStateTypes.CHANNEL, (lastPinTimestamp) => lastPinTimestamp.lastPinTimestamp, null);
};
prototype3["getOldestUnreadMessageId"] = function getOldestUnreadMessageId(memo1) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(memo1, CHANNEL, (canTrackUnreads) => {
    let prop = null;
    if (canTrackUnreads.canTrackUnreads()) {
      prop = canTrackUnreads.oldestUnreadMessageId;
    }
    return prop;
  }, null);
};
prototype3["getOldestUnreadTimestamp"] = function getOldestUnreadTimestamp(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (canTrackUnreads) => {
    let num = 0;
    if (canTrackUnreads.canTrackUnreads()) {
      num = canTrackUnreads.oldestUnreadTimestamp;
    }
    return num;
  }, 0);
};
prototype3["isEstimated"] = function isEstimated(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (estimated) => estimated.estimated, false);
};
prototype3["hasOpenedThread"] = function hasOpenedThread(channelId) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(channelId, CHANNEL, (_persisted) => _persisted._persisted, false);
};
prototype3["hasUnreadPins"] = function hasUnreadPins(channelId) {
  return ReadState.getValue(channelId, ReadStateTypes.CHANNEL, (canBeUnread) => canBeUnread.canBeUnread() && canBeUnread.lastPinTimestamp > canBeUnread.ackPinTimestamp, false);
};
prototype3["isNewForumThread"] = function isNewForumThread(id, parent_id, guild) {
  const value = ReadState.get(parent_id);
  if (true !== ReadState.get(id)._persisted) {
    if (null != value.ackMessageIdAtChannelSelect) {
      if (obj3.compare(id, value.ackMessageIdAtChannelSelect) > 0) {
        if (null != guild) {
          if (null != guild.joinedAt) {
            const _Date3 = Date;
            const joinedAt2 = guild.joinedAt;
            if (guild.joinedAt instanceof Date) {
              const time = joinedAt2.getTime();
              const _isNaN2 = isNaN;
              let joinedAt = time;
            } else if (typeof joinedAt2 === "string") {
              const _Date = Date;
              const date = new Date(guild.joinedAt);
              const time1 = date.getTime();
              const _isNaN = isNaN;
              joinedAt = time1;
            } else if (typeof guild.joinedAt === "number") {
              const _isNaN3 = isNaN;
              if (!isNaN(guild.joinedAt)) {
                joinedAt = guild.joinedAt;
              }
            }
          }
          return tmp9(11).extractTimestamp(id) > joinedAt;
        }
        const _Date2 = Date;
        joinedAt = Date.now();
      }
      obj3 = DISCORD_EPOCH;
      tmp9 = importDefault;
    }
  }
  return false;
};
prototype3["getAllReadStates"] = function getAllReadStates(arg0) {
  let closure_0 = arg0;
  const items = [];
  const item = ReadState.forEach((type) => {
    type = type.type;
    if (outer1_56.GUILD_HOME !== type) {
      if (tmp.GUILD_EVENT !== type) {
        if (tmp.GUILD_ONBOARDING_QUESTION !== type) {
          if (tmp.NOTIFICATION_CENTER !== type) {
            if (tmp.MESSAGE_REQUESTS !== type) {
              items.push(type.serialize(closure_0));
            }
          }
          const currentUser = outer1_34.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          if (obj.cast(id) === type.channelId) {
            items.push(type.serialize(closure_0));
          }
          obj = items(outer1_2[37]);
        }
      }
    }
    if (null != outer1_27.getGuild(type.channelId)) {
      items.push(type.serialize(closure_0));
    }
  });
  return items;
};
prototype3["getGuildUnreadsSentinel"] = function getGuildUnreadsSentinel(getHash) {
  return ReadState.getGuildSentinels(getHash).unreadsSentinel;
};
prototype3["getMentionChannelIds"] = function getMentionChannelIds() {
  return ReadState.getMentionChannelIds();
};
prototype3["getNonChannelAckId"] = function getNonChannelAckId(arg0) {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let ackMessageId = null;
  if (null != id) {
    ackMessageId = ReadState.get(id, arg0).ackMessageId;
  }
  return ackMessageId;
};
prototype3["getSnapshot"] = function getSnapshot(arg0, arg1) {
  const value = ReadState.get(arg0);
  if (null != value.snapshot) {
    const _Date = Date;
    if (Date.now() - value.snapshot.takenAt <= arg1) {
      let snapshot = value.snapshot;
    }
    return snapshot;
  }
  snapshot = value.takeSnapshot();
};
prototype3["getChannelIdsForWindowId"] = function getChannelIdsForWindowId(arg0) {
  return obj.getAllChannelIdsForWindowId(arg0);
};
ReadStateStoreClass.displayName = "ReadStateStore";
obj = {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSync(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10008 in changesByChannelId) {
      let tmp11 = key10008;
      let tmp12 = changesByChannelId[key10008];
      let tmp13 = ReadState;
      let ifExists = ReadState.getIfExists(key10008);
      if (null == ifExists) {
        continue;
      } else {
        let new_messages = tmp12.new_messages;
        let first;
        if (new_messages != null) {
          first = new_messages[0];
        }
        let items = [first];
        let modified_messages = tmp12.modified_messages;
        if (modified_messages == null) {
          modified_messages = [];
        }
        let combined = items.concat(modified_messages);
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
        let tmp5 = found;
        let tmp6 = found;
        for (const item10026 of found) {
          let tmp8 = importDefault;
          let tmp9 = dependencyMap;
          let tmp7 = item10026;
          let obj = DISCORD_EPOCH;
          if (1 === obj.compare(item10026.id, ifExists.lastMessageId)) {
            let tmp10 = item10026;
            ifExists.lastMessageId = tmp7.id;
          }
          continue;
        }
      }
      continue;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let guilds;
    let initialPrivateChannels;
    let readState;
    let relationships;
    ({ guilds, readState } = arg0);
    ({ relationships, initialPrivateChannels } = arg0);
    setDecayedReadStateTimer();
    let c63 = null;
    let partial = c64;
    if (!c64) {
      partial = readState.partial;
    }
    if (!partial) {
      ReadState.clearAll();
    }
    c64 = false;
    const entries = readState.entries;
    const item = entries.forEach((read_state_type) => {
      let CHANNEL = read_state_type.read_state_type;
      if (CHANNEL == null) {
        CHANNEL = constants.CHANNEL;
      }
      let tmp2 = read_state_type;
      if (CHANNEL !== constants.CHANNEL) {
        const obj = { id: null, read_state_type: null, mention_count: null, last_message_id: null };
        ({ id: obj[0], read_state_type: obj[1], badge_count: obj[2], last_acked_id: obj[3] } = read_state_type);
        tmp2 = obj;
      }
      const value = closure_81.get(tmp2.id, CHANNEL);
      value._persisted = true;
      let num = tmp2.mention_count;
      if (num == null) {
        num = 0;
      }
      value._mentionCount = num;
      ({ flags: obj2.flags, last_viewed: obj2.lastViewed } = tmp2);
      basicChannel = basicChannel.getBasicChannel(tmp2.id);
      if (null != basicChannel) {
        if (callback2(basicChannel.type)) {
          value.ackMessageId = callback(11).fromTimestamp(callback3(basicChannel.guild_id, basicChannel.id));
          const obj3 = callback(11);
        }
        value.ackedWhileCached = undefined;
        const last_pin_timestamp = tmp2.last_pin_timestamp;
        let num6 = 0;
        if (null != last_pin_timestamp) {
          const _Date = Date;
          const parsed = Date.parse(last_pin_timestamp);
          const _isNaN = isNaN;
          let num7 = 0;
          if (!isNaN(parsed)) {
            num7 = parsed;
          }
          num6 = num7;
        }
        value.ackPinTimestamp = num6;
        const _mentionChannels = tmp3._mentionChannels;
        _mentionChannels.delete(value.channelId);
        if (tmp14) {
          const _mentionChannels2 = tmp3._mentionChannels;
          _mentionChannels2.add(value.channelId);
        }
      }
      if (value.ackedWhileCached) {
        if (-1 === obj4.compare(value.ackMessageId, tmp2.last_message_id)) {
          value.ackMessageId = tmp2.last_message_id;
        }
        obj4 = callback(11);
      } else {
        value.ackMessageId = tmp2.last_message_id;
      }
    });
    ReadState.resetGuildSentinels();
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != id) {
      let value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      let _Date = Date;
      value.lastMessageId = DISCORD_EPOCH.fromTimestamp(Date.now());
      const obj2 = DISCORD_EPOCH;
    }
    mergeRelationships(relationships);
    mergeChannels(initialPrivateChannels);
    let iter = guilds[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp16 = nextResult;
      let tmp17 = mergeChannels;
      if ("full_sync" === nextResult.channels.op) {
        let tmp19 = nextResult;
        let writes = tmp16.channels.items;
      } else {
        let tmp18 = nextResult;
        writes = tmp16.channels.writes;
      }
      let tmp17Result = tmp17(writes);
      let tmp21 = nextResult;
      if (null != tmp16.channelTimestampUpdates) {
        let tmp22 = mergeChannelTimestampUpdates;
        let tmp23 = nextResult;
        let tmp24 = mergeChannelTimestampUpdates(tmp16.channelTimestampUpdates);
      }
      let tmp25 = mergeForGuild;
      let tmp26 = nextResult;
      let tmp27 = mergeForGuild(tmp16);
      continue;
    }
    clearDeleteOldReadStatesTimer();
    const timeout = setTimeout(() => {
      (function deleteOldReadStates(entries) {
        const iter = entries[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let CHANNEL = nextResult.read_state_type;
          let tmp3 = nextResult;
          if (CHANNEL == null) {
            let tmp4 = constants;
            CHANNEL = constants.CHANNEL;
          }
          let tmp5 = closure_81;
          let tmp6 = nextResult;
          let value = closure_81.get(tmp3.id, CHANNEL);
          let tmp7 = value;
          if (value.shouldDeleteReadState(tmp)) {
            let tmp8 = callback2;
            let tmp9 = value;
            let tmp10 = callback2(tmp7);
          }
          continue;
        }
      })(readState.entries);
    }, 10 * set.Millis.SECOND);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    const item = lazyPrivateChannels.forEach((type) => {
      let lastPinTimestamp;
      if (callback(type.type)) {
        const value = closure_81.get(type.id);
        ({ guild_id: obj._guildId, lastMessageId: obj.lastMessageId, lastPinTimestamp } = type);
        let num = 0;
        if (null != lastPinTimestamp) {
          const _Date = Date;
          const parsed = Date.parse(lastPinTimestamp);
          const _isNaN = isNaN;
          let num2 = 0;
          if (!isNaN(parsed)) {
            num2 = parsed;
          }
          num = num2;
        }
        value.lastPinTimestamp = num;
        value._isResourceChannel = type.hasFlag(constants.IS_GUILD_RESOURCE_CHANNEL);
        if (set.has(type.type)) {
          value.syncThreadSettings();
        }
      }
    });
  },
  LOGOUT: clearDeleteOldReadStatesTimer,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(readStates) {
    readStates = readStates.readStates;
    const timestamp = Date.now();
    let closure_71 = timestamp - 7 * set.Millis.DAY;
    const timestamp1 = Date.now();
    let closure_72 = timestamp1 - 3 * set.Millis.DAY;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback2(709).dispatch({ type: "DECAY_READ_STATES" });
    }, set.Millis.HOUR);
    let c63 = null;
    const selectedChannelId = readStates.selectedChannelId;
    const currentSidebarChannelId = store2.getCurrentSidebarChannelId(selectedChannelId);
    ReadState.clearAll();
    const item = readStates.forEach((channelId) => {
      const value = closure_81.get(channelId.channelId);
      const result = value.deserializeForOverlay(channelId);
      if (value.type === constants.CHANNEL) {
        value.rebuildChannelState();
      }
    });
  },
  CACHE_LOADED: function handleCacheLoaded(readStates) {
    readStates = readStates.readStates;
    let c64 = true;
    const timestamp = Date.now();
    let closure_71 = timestamp - 7 * set.Millis.DAY;
    const timestamp1 = Date.now();
    let closure_72 = timestamp1 - 3 * set.Millis.DAY;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback2(709).dispatch({ type: "DECAY_READ_STATES" });
    }, set.Millis.HOUR);
    const item = readStates.forEach((type) => {
      let CHANNEL = type.type;
      if (CHANNEL == null) {
        CHANNEL = constants.CHANNEL;
      }
      type.type = CHANNEL;
      _readStates = _readStates._readStates;
      let map = _readStates.get(CHANNEL);
      if (map == null) {
        const _Map = Map;
        map = new Map();
      }
      const result = map.set(type.channelId, callback(1404).dangerouslyCast(type, tmp2));
      const _readStates2 = tmp2._readStates;
      if (!_readStates2.has(CHANNEL)) {
        const _readStates3 = tmp2._readStates;
        const result1 = _readStates3.set(CHANNEL, map);
      }
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    let importDefault;
    importDefault = DISCORD_EPOCH.fromTimestamp(Date.now() - closure_69);
    const item = ReadState.forEach((guildId) => {
      let result = guildId.guildId === guild.id;
      if (result) {
        result = guildId.shouldDeleteReadState(closure_1);
      }
      if (result) {
        guildId.delete(false);
      }
    });
    if ("full_sync" === guild.channels.op) {
      let items = guild.channels.items;
    } else {
      items = guild.channels.writes;
    }
    const item1 = items.forEach((type) => {
      let lastPinTimestamp;
      if (callback(type.type)) {
        const value = closure_81.get(type.id);
        ({ guild_id: obj._guildId, lastMessageId: obj.lastMessageId, lastPinTimestamp } = type);
        let num = 0;
        if (null != lastPinTimestamp) {
          const _Date = Date;
          const parsed = Date.parse(lastPinTimestamp);
          const _isNaN = isNaN;
          let num2 = 0;
          if (!isNaN(parsed)) {
            num2 = parsed;
          }
          num = num2;
        }
        value.lastPinTimestamp = num;
        value._isResourceChannel = type.hasFlag(constants.IS_GUILD_RESOURCE_CHANNEL);
        if (set.has(type.type)) {
          value.syncThreadSettings();
        }
      }
    });
    if (null != guild.channelTimestampUpdates) {
      mergeChannelTimestampUpdates(guild.channelTimestampUpdates);
    }
    mergeForGuild(guild);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(arg0) {
    let channelId;
    let isAfter;
    let messages;
    ({ channelId, isAfter, messages } = arg0);
    const value = ReadState.get(channelId);
    value.loadedMessages = true;
    let tmp = null == value.lastMessageId;
    if (tmp) {
      tmp = messages.length > 0;
    }
    if (tmp) {
      value.lastMessageId = messages[0].id;
    }
    messages = store5.getMessages(channelId);
    if (null != messages) {
      if (messages.length > 0) {
        value.rebuildChannelState();
        const obj3 = DISCORD_EPOCH;
      }
      if (!messages.hasPresent()) {
        if (messages.jumpTargetId !== value.ackMessageId) {
          if (isAfter) {
            isAfter = null != value.ackMessageId;
          }
          if (isAfter) {
            isAfter = messages.has(value.ackMessageId, true);
          }
          if (isAfter) {
            value.unreadCount = value.unreadCount + messages.length;
            if (null == value.oldestUnreadMessageId) {
              value.rebuildChannelState();
            }
          }
        }
      }
    }
    const mapped = messages.map((thread) => thread.thread);
    const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    const item = found.forEach((type) => {
      let last_pin_timestamp;
      if (callback2(type.type)) {
        const value = closure_81.get(type.id);
        ({ last_message_id: obj.lastMessageId, last_pin_timestamp } = type);
        let num = 0;
        if (null != last_pin_timestamp) {
          const _Date = Date;
          const parsed = Date.parse(last_pin_timestamp);
          const _isNaN = isNaN;
          let num2 = 0;
          if (!isNaN(parsed)) {
            num2 = parsed;
          }
          num = num2;
        }
        value.lastPinTimestamp = num;
        let num3 = type.flags;
        if (num3 == null) {
          num3 = 0;
        }
        value._isResourceChannel = callback(table[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
        if (set.has(type.type)) {
          value.syncThreadSettings();
        }
        const obj2 = callback(table[52]);
      }
    });
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(messages) {
    messages = messages.messages;
    if (obj.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
      if (0 === messages.length) {
        return false;
      } else {
        const value = ReadState.get(messages.channelId);
        const id = messages[0].id;
        let tmp4 = null == value.lastMessageId;
        if (!tmp4) {
          tmp4 = DISCORD_EPOCH.compare(id, value.lastMessageId) > 0;
          const obj3 = DISCORD_EPOCH;
        }
        if (tmp4) {
          value.lastMessageId = id;
          value.rebuildChannelState();
        }
      }
    } else {
      return false;
    }
    obj = isIOSPushNotificationRawPayloadFixExperimentEnabled;
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    let channelId;
    let manual;
    let message;
    let messageId;
    let newMentionCount;
    ({ channelId, message } = isPushNotification);
    let obj = ReadState;
    let value = ReadState.get(channelId);
    let hasUnreadResult = value.hasUnread();
    value.lastMessageId = message.id;
    const currentUser = authStore.getCurrentUser();
    let obj2 = store3;
    const basicChannel = store3.getBasicChannel(channelId);
    if (null != message.author) {
      if (null != currentUser) {
        if (message.author.id === currentUser.id) {
          const SELF_MENTIONABLE_SYSTEM = constants11.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            if (null != value.outgoingAck) {
              value.clearOutgoingAck();
            }
            obj = { channelId: null, messageId: null, manual: false };
            obj[0] = channelId;
            obj[1] = message.id;
            ({ messageId, manual, newMentionCount } = obj);
            value = obj.get(obj.channelId);
            if (manual) {
              value.rebuildChannelState(messageId, true, newMentionCount);
              value.clearOutgoingAck();
              let flag = true;
            } else {
              flag = messageId !== value._ackMessageId;
              if (flag) {
                obj = { messageId: null, local: true, trackAnalytics: false };
                obj[0] = messageId;
                flag = value.ack(obj);
              }
            }
            return flag;
          }
        }
      }
    }
    let obj6 = getRootNavigationRef;
    const rootNavigationRef = obj6.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (true === isReadyResult) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      if (uiStore.getChatOpen(value.channelId)) {
        let channelId2 = value.channelId;
      } else {
        let name;
        if (currentRoute != null) {
          name = currentRoute.name;
        }
        if ("channel" === name) {
          channelId2 = currentRoute.params.channelId;
        } else {
          let name1;
          if (currentRoute != null) {
            name1 = currentRoute.name;
          }
          if ("guilds" === name1) {
            const params = currentRoute.params;
            channelId = undefined;
            if (params != null) {
              channelId = params.channelId;
            }
            channelId2 = channelId;
          }
        }
      }
    } else if (null == rootNavigationRef) {
      const channelId1 = importDefaultResult.getChannelId();
      const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId1);
      channelId2 = channelId1;
    }
    if (tmp20) {
      if (shouldAutomaticallyAck(value)) {
        if (!isPushNotification.isPushNotification) {
          const channelId3 = value.channelId;
          let tmp22 = null != channelId3;
          if (tmp22) {
            tmp22 = isOverlayChannelVisible(channelId3);
          }
          const obj1 = { messageId: null, trackAnalytics: true, location: null };
          obj1[0] = message.id;
          obj2 = { section: null, object: null, objectType: null };
          obj2[0] = tmp22 ? constants3.OVERLAY : constants3.CHANNEL;
          obj2[1] = constants2.ACK_INCOMING_MESSAGE;
          obj2[2] = constants.ACK_AUTOMATIC;
          obj1[2] = obj2;
          return value.ack(obj1);
        }
      }
    }
    let tmp27 = null != channelId;
    if (tmp27) {
      tmp27 = isOverlayChannelVisible(channelId);
    }
    if (tmp27) {
      const obj3 = { messageId: null, trackAnalytics: true, location: null };
      obj3[0] = message.id;
      const obj4 = { section: null, object: null, objectType: null };
      obj4[0] = constants3.OVERLAY;
      obj4[1] = constants2.ACK_INCOMING_MESSAGE;
      obj4[2] = constants.ACK_AUTOMATIC;
      obj3[2] = obj4;
      return value.ack(obj3);
    } else {
      if (null != value.oldestUnreadMessageId) {
        if (!value.oldestUnreadMessageIdStale) {
          if (!hasUnreadResult) {
            let tmp8Result = tmp8(10023);
            hasUnreadResult = tmp8Result.getFocusedChannelId() === channelId;
          }
          if (!hasUnreadResult) {
            value.oldestUnreadMessageId = message.id;
          }
        }
        if (!tmp2) {
          value.unreadCount = value.unreadCount + 1;
        }
        if (!markAllUserIdListsStale.isBlockedOrIgnoredForMessage(message)) {
          if (message.type !== constants7.RECIPIENT_REMOVE) {
            if (null != currentUser) {
              tmp8Result = tmp8(4819);
              const obj5 = { rawMessage: null, userId: null, suppressEveryone: null, suppressRoles: null };
              obj5[0] = message;
              obj5[1] = currentUser.id;
              obj5[2] = updateUserGuildSettingsInternal.isSuppressEveryoneEnabled(value.guildId);
              obj5[3] = updateUserGuildSettingsInternal.isSuppressRolesEnabled(value.guildId);
              if (tmp8Result.isRawMessageMentioned(obj5)) {
                obj6 = { shouldMention: true, isMentionLowImportance: false };
              }
              if (obj6.shouldMention) {
                value.isMentionLowImportance = obj6.isMentionLowImportance;
                value.mentionCount = value.mentionCount + 1;
                if (null != currentUser) {
                  obj.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = message.id;
                  if (_validate.tabFocused) {
                    const value1 = obj.get(currentUser.id, tmp46.NOTIFICATION_CENTER);
                    if (tmp38) {
                      let tmp39 = null != value1.lastMessageId;
                      if (!tmp39) {
                        tmp39 = 0 !== value1.mentionCount;
                      }
                      if (tmp39) {
                        let lastMessageId = value1.lastMessageId;
                        if (lastMessageId == null) {
                          lastMessageId = DISCORD_EPOCH.fromTimestamp(value1.getAckTimestamp());
                          const obj19 = DISCORD_EPOCH;
                        }
                        const obj7 = { messageId: null, local: null, trackAnalytics: false };
                        obj7[0] = lastMessageId;
                        obj7[1] = false;
                        value1.ack(obj7);
                      }
                    }
                    tmp38 = undefined !== value1.ackMessageId && value1.lastMessageId !== value1.ackMessageId;
                  }
                  tmp46 = ReadStateTypes;
                }
              }
            }
            const channel = obj2.getChannel(message.channel_id);
            let tmp34 = null != channel && channel.isPrivate();
            if (tmp34) {
              tmp34 = !updateUserGuildSettingsInternal.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
            }
            if (tmp34) {
              obj6 = { shouldMention: true, isMentionLowImportance: false };
            } else {
              if (updateUserGuildSettingsInternal.mentionOnAllMessages) {
                if (null != channel) {
                  if (channel.isThread()) {
                    if (tmp8Result1.computeThreadNotificationSetting(channel) === ThreadMemberFlags.ALL_MESSAGES) {
                      obj6 = { shouldMention: true, isMentionLowImportance: true };
                    }
                    tmp8Result1 = tmp8(10022);
                  } else if (!channel.isVocal()) {
                    if (!obj15.isChannelMuted(channel.guild_id, channel.id)) {
                      if (obj15.resolvedMessageNotifications(channel) === constants10.ALL_MESSAGES) {
                        obj6 = { shouldMention: true, isMentionLowImportance: true };
                      }
                    }
                  }
                }
              }
              obj6 = { shouldMention: false, isMentionLowImportance: false };
            }
          } else {
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
          }
        }
      }
      value.oldestUnreadMessageId = message.id;
    }
  },
  MESSAGE_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: handleMessageDelete,
  MESSAGE_ACK: handleMessageAck,
  CHANNEL_ACK: function handleChannelAck(force) {
    let _location;
    let context;
    let immediate;
    let messageId;
    ({ messageId, immediate } = force);
    if (immediate === undefined) {
      immediate = false;
    }
    let flag = force.force;
    if (flag === undefined) {
      flag = false;
    }
    ({ context, location: _location } = force);
    const value = ReadState.get(force.channelId);
    let flag2 = value.ack({ messageId, local: context !== closure_41, immediate, force: flag, isExplicitUserAction: true, location: _location, trackAnalytics: true });
    if (null != messageId) {
      value.rebuildChannelState();
      flag2 = true;
    }
    return flag2;
  },
  CHANNEL_LOCAL_ACK: function handleChannelLocalAck(channelId) {
    const value = ReadState.get(channelId.channelId);
    return value.ack({ messageId: "HermesInternal", local: "HermesInternal", immediate: "ct", force: true, isExplicitUserAction: 5, trackAnalytics: 50 });
  },
  CHANNEL_PINS_ACK: function handleChannelPinsAck(channelId) {
    const value = ReadState.get(channelId.channelId);
    return value.ackPins(channelId.timestamp);
  },
  CHANNEL_PINS_UPDATE: function handleChannelPinsUpdate(lastPinTimestamp) {
    lastPinTimestamp = lastPinTimestamp.lastPinTimestamp;
    const value = ReadState.get(lastPinTimestamp.channelId);
    let num = 0;
    if (null != lastPinTimestamp) {
      const _Date = Date;
      const parsed = Date.parse(lastPinTimestamp);
      const _isNaN = isNaN;
      let num2 = 0;
      if (!isNaN(parsed)) {
        num2 = parsed;
      }
      num = num2;
    }
    let flag = value.lastPinTimestamp !== num;
    if (flag) {
      value.lastPinTimestamp = num;
      flag = true;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId);
    const channel = store3.getChannel(channelId);
    if (null != channel) {
      let value = ReadState.get(channel.id);
      let ackMessageId = value.ackMessageId;
      if (ackMessageId == null) {
        let obj1 = DISCORD_EPOCH;
        ackMessageId = obj1.fromTimestamp(value.getAckTimestamp());
      }
      value.ackMessageIdAtChannelSelect = ackMessageId;
      value.recordLastViewedTime();
    }
    if (null != channelId) {
      ReadState.get(tmp7).isManualAck = false;
    }
    if (null != currentSidebarChannelId) {
      ReadState.get(tmp9).isManualAck = false;
    }
    let flag3 = false;
    if (channelId !== channelId) {
      let flag4 = false;
      if (null != tmp11) {
        value = ReadState.get(tmp11);
        const hasUnreadResult = value.hasUnread();
        let flag5 = !hasUnreadResult;
        if (!hasUnreadResult) {
          value.oldestUnreadMessageId = null;
          flag5 = true;
        }
        flag4 = flag5;
      }
      if (!flag4) {
        flag4 = false;
      }
      let flag6 = false;
      if (null != currentSidebarChannelId) {
        const value1 = ReadState.get(tmp14);
        const hasUnreadResult1 = value1.hasUnread();
        let flag7 = !hasUnreadResult1;
        if (!hasUnreadResult1) {
          value1.oldestUnreadMessageId = null;
          flag7 = true;
        }
        flag6 = flag7;
      }
      if (!flag6) {
        flag6 = flag4;
      }
      flag3 = flag6;
    }
    let tmp17 = channelId === channelId;
    if (!tmp17) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let hasItem = null != type;
      if (hasItem) {
        const GUILD_THREADS_ONLY = constants9.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(channel.type);
      }
      tmp17 = hasItem;
    }
    let tmp21 = flag3;
    if (tmp17) {
      let obj = { section: null, object: null, objectType: null };
      obj[0] = constants3.CHANNEL;
      obj[1] = constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL;
      obj[2] = constants.ACK_AUTOMATIC;
      let flag8 = false;
      if (null != channelId) {
        const value2 = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value2, undefined);
        if (ackResult) {
          obj = { trackAnalytics: true, location: null };
          obj[1] = obj;
          ackResult = value2.ack(obj);
        }
        flag8 = ackResult;
      }
      if (!flag8) {
        flag8 = flag3;
      }
      tmp21 = flag8;
    }
    let tmp28 = tmp21;
    if (channelId === channelId) {
      obj1 = { section: null, object: null, objectType: null };
      obj1[0] = constants3.CHANNEL;
      obj1[1] = constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR;
      obj1[2] = constants.ACK_AUTOMATIC;
      let flag9 = false;
      if (null != currentSidebarChannelId) {
        const value3 = ReadState.get(currentSidebarChannelId);
        let ackResult1 = shouldAutomaticallyAck(value3, undefined);
        if (ackResult1) {
          const obj2 = { trackAnalytics: true, location: null };
          obj2[1] = obj1;
          ackResult1 = value3.ack(obj2);
        }
        flag9 = ackResult1;
      }
      if (!flag9) {
        flag9 = tmp21;
      }
      tmp28 = flag9;
    }
    return tmp28;
  },
  OVERLAY_TEXT_CHAT_ACK_CHANNEL: function handleOverlayTextChatAckChannel(channelId) {
    channelId = channelId.channelId;
    let obj = ReadState;
    let value = ReadState.get(channelId);
    let ackMessageId = value.ackMessageId;
    if (ackMessageId == null) {
      ackMessageId = DISCORD_EPOCH.fromTimestamp(value.getAckTimestamp());
      const obj3 = DISCORD_EPOCH;
    }
    value.ackMessageIdAtChannelSelect = ackMessageId;
    value.recordLastViewedTime();
    if (null != channelId) {
      value = obj.get(channelId);
      const hasUnreadResult = value.hasUnread();
      if (!hasUnreadResult) {
        value.oldestUnreadMessageId = null;
      }
    }
    obj = { section: constants3.OVERLAY, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC };
    if (null != channelId) {
      const value1 = obj.get(channelId);
      if (shouldAutomaticallyAck(value1, undefined)) {
        obj = { trackAnalytics: true, location: null };
        obj[1] = obj;
        value1.ack(obj);
      }
    }
    return true;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      if (!value.hasMentions()) {
        value.oldestUnreadMessageId = null;
        let obj = { isExplicitUserAction: true, trackAnalytics: true, location: null };
        obj = { section: null, object: null, objectType: null };
        obj[0] = constants3.CHANNEL;
        obj[1] = constants2.ACK_VOICE_CHANNEL_SELECT;
        obj[2] = constants.ACK_SEMI_AUTOMATIC;
        obj[2] = obj;
        return value.ack(obj);
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    let lastPinTimestamp;
    channel = channel.channel;
    if (callback3(channel.type)) {
      const value = ReadState.get(channel.id);
      ({ lastMessageId: tmp2.lastMessageId, lastPinTimestamp } = channel);
      let num = 0;
      if (null != lastPinTimestamp) {
        const _Date = Date;
        const parsed = Date.parse(lastPinTimestamp);
        const _isNaN = isNaN;
        let num2 = 0;
        if (!isNaN(parsed)) {
          num2 = parsed;
        }
        num = num2;
      }
      value.lastPinTimestamp = num;
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let lastPinTimestamp;
    let manual;
    let messageId;
    let newMentionCount;
    channel = channel.channel;
    if (set.has(channel.type)) {
      let value = ReadState.get(channel.id);
      ({ lastMessageId: obj.lastMessageId, lastPinTimestamp } = channel);
      let num = 0;
      if (null != lastPinTimestamp) {
        const _Date = Date;
        const parsed = Date.parse(lastPinTimestamp);
        const _isNaN = isNaN;
        let num2 = 0;
        if (!isNaN(parsed)) {
          num2 = parsed;
        }
        num = num2;
      }
      value.lastPinTimestamp = num;
      value.syncThreadSettings();
      if (channel.ownerId === store.getId()) {
        value.loadedMessages = true;
      }
    }
    const parent_id = channel.parent_id;
    ReadState.get(parent_id).lastMessageId = channel.id;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      obj2.get(channel.id)._persisted = true;
      let obj = { channelId: null, messageId: null, manual: false };
      obj[0] = parent_id;
      obj[1] = channel.id;
      ({ messageId, manual, newMentionCount } = obj);
      value = obj2.get(obj.channelId);
      if (manual) {
        value.rebuildChannelState(messageId, true, newMentionCount);
        value.clearOutgoingAck();
      } else if (messageId !== value._ackMessageId) {
        obj = { messageId: null, local: true, trackAnalytics: false };
        obj[0] = messageId;
        value.ack(obj);
      }
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    let syncThreadSettingsResult = set.has(channel.type);
    if (syncThreadSettingsResult) {
      const value = ReadState.get(channel.id);
      syncThreadSettingsResult = value.syncThreadSettings();
    }
    return syncThreadSettingsResult;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      let lastPinTimestamp;
      if (set.has(type.type)) {
        let value = closure_81.get(type.id);
        ({ lastMessageId: tmp.lastMessageId, lastPinTimestamp } = type);
        let num2 = 0;
        if (null != lastPinTimestamp) {
          const _Date = Date;
          const parsed = Date.parse(lastPinTimestamp);
          const _isNaN = isNaN;
          let num3 = 0;
          if (!isNaN(parsed)) {
            num3 = parsed;
          }
          num2 = num3;
        }
        value.lastPinTimestamp = num2;
        value._isThread = true;
        value._isActiveThread = true;
        value._isJoinedThread = storeThread.hasJoined(type.id);
        if (type.isForumPost()) {
          value = obj.get(type.parent_id);
          if (obj2.compare(value.lastMessageId, type.id) < 0) {
            value.lastMessageId = type.id;
          }
          obj2 = callback(table[37]);
        }
        obj = closure_81;
      }
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(id) {
    const value = ReadState.get(id.id);
    return value.syncThreadSettings();
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    let result = doesThreadMembersActionAffectMe.doesThreadMembersActionAffectMe(id);
    if (result) {
      const value = ReadState.get(id.id);
      result = value.syncThreadSettings();
    }
    return result;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  WINDOW_FOCUS: function handleWindowFocus(arg0) {
    let closure_0 = arg0;
    let c1 = false;
    obj.forEachChannel((arg0, has) => {
      if (has.has(windowId.windowId)) {
        let focused = windowId.focused;
        let flag = false;
        if (null != arg0) {
          let obj = outer1_81;
          let value = outer1_81.get(arg0);
          if (!focused) {
            focused = value.hasUnread();
          }
          if (!focused) {
            value.oldestUnreadMessageIdStale = true;
          }
          obj = { section: null, object: null, objectType: null };
          obj[0] = outer1_38.CHANNEL;
          obj[1] = outer1_37.ACK_WINDOW_FOCUS;
          obj[2] = outer1_36.ACK_AUTOMATIC;
          let flag3 = false;
          if (null != arg0) {
            value = obj.get(arg0);
            let ackResult = outer1_79(value, undefined);
            if (ackResult) {
              obj = { trackAnalytics: true, location: null };
              obj[1] = obj;
              ackResult = value.ack(obj);
            }
            flag3 = ackResult;
          }
          flag = flag3;
        }
      }
    });
    return c1;
  },
  UPDATE_CHANNEL_DIMENSIONS: function handleScroll(channelId) {
    channelId = channelId.channelId;
    let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SCROLL, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, tmp);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj[1] = obj;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    let c63 = null;
  },
  BULK_ACK: function handleBulkAck(arg0) {
    let channels;
    let context;
    let onFinished;
    ({ channels, context, onFinished } = arg0);
    const found = channels.filter((channelId) => {
      channel = channel.getChannel(channelId.channelId);
      let isForumLikeChannelResult;
      if (channel != null) {
        isForumLikeChannelResult = channel.isForumLikeChannel();
      }
      let tmp2 = true === isForumLikeChannelResult;
      if (!tmp2) {
        let hasUnreadOrMentionsResult = null != channelId.messageId;
        if (hasUnreadOrMentionsResult) {
          hasUnreadOrMentionsResult = closure_91.hasUnreadOrMentions(channelId.channelId, channelId.readStateType);
        }
        tmp2 = hasUnreadOrMentionsResult;
      }
      return tmp2;
    });
    const item = found.forEach((messageId) => {
      const value = closure_81.get(messageId.channelId, messageId.readStateType);
      value.ack({ messageId: messageId.messageId, local: true, immediate: "HermesInternal", force: "ct", isExplicitUserAction: null, trackAnalytics: null });
    });
    if (context === closure_41) {
      const push = navigation.push;
      const items = [];
      HermesBuiltin.arraySpread(found.map((channelId) => ({ channel_id: channelId.channelId, message_id: channelId.messageId, read_state_type: channelId.readStateType })), 0);
      HermesBuiltin.apply(items, navigation);
      if (!c66) {
        processBulkAckQueue(onFinished);
      }
    }
  },
  ENABLE_AUTOMATIC_ACK: function handleEnableAutomaticAck(arg0) {
    let channelId;
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  DISABLE_AUTOMATIC_ACK: function handleDisableAutomaticAck(arg0) {
    let channelId;
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  GUILD_FEATURE_ACK: handleGuildFeatureAck,
  GUILD_SCHEDULED_EVENT_CREATE: function handleGuildScheduledEventCreate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const value = ReadState.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
    value.lastMessageId = guildScheduledEvent.id;
    const currentUser = authStore.getCurrentUser();
    if (tmp4) {
      const obj = { type: "GUILD_FEATURE_ACK", id: null, ackType: null, ackedId: null, local: false };
      obj[1] = guild_id;
      obj[2] = ReadStateTypes.GUILD_EVENT;
      obj[3] = guildScheduledEvent.id;
      handleGuildFeatureAck(obj);
    } else if (!updateUserGuildSettingsInternal.isMuteScheduledEventsEnabled(guild_id)) {
      value.mentionCount = value.mentionCount + 1;
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const currentUser = authStore.getCurrentUser();
    let tmp3 = !tmp2;
    if (!(null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id)) {
      const items = [, ];
      ({ CANCELED: arr[0], COMPLETED: arr[1] } = GuildScheduledEventStatus);
      const hasItem = items.includes(guildScheduledEvent.status);
      if (hasItem) {
        const value = ReadState.get(guild_id, ReadStateTypes.GUILD_EVENT);
        const result = value.handleGuildEventRemoval(guild_id, guildScheduledEvent.id);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleGuildScheduledEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const currentUser = authStore.getCurrentUser();
    if (tmp2) {
      return false;
    } else {
      const value = ReadState.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
      const result = value.handleGuildEventRemoval(guildScheduledEvent.guild_id, guildScheduledEvent.id);
    }
    tmp2 = null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    return ReadState.clear(guild.guild.id, ReadStateTypes.GUILD_EVENT);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const latest_onboarding_question_id = guild.latest_onboarding_question_id;
    if (null != latest_onboarding_question_id) {
      const value = ReadState.get(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
      value._guildId = guild.id;
      value.lastMessageId = latest_onboarding_question_id;
    }
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    channelId = channelId.channelId;
    let obj = { section: constants3.CHANNEL, object: constants2.ACK_RESORT_THREADS, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj[1] = obj;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    channelId = channelId.channelId;
    if (channelId.chatOpen) {
      let obj = { section: null, object: null, objectType: null };
      obj[0] = constants3.CHANNEL;
      obj[1] = constants2.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN;
      obj[2] = constants.ACK_AUTOMATIC;
      let flag = false;
      if (null != channelId) {
        const value = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value, undefined);
        if (ackResult) {
          obj = { trackAnalytics: true, location: null };
          obj[1] = obj;
          ackResult = value.ack(obj);
        }
        flag = ackResult;
      }
      return flag;
    }
  },
  DECAY_READ_STATES: setDecayedReadStateTimer,
  NOTIFICATION_CENTER_ITEM_CREATE: function handleNotificationCenterItemCreate(item) {
    item = item.item;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      let value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      value.lastMessageId = item.id;
      if (_validate.tabFocused) {
        let lastMessageId = item.id;
        value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
        if (tmp3) {
          let tmp4 = null != value.lastMessageId;
          if (!tmp4) {
            tmp4 = 0 !== value.mentionCount;
          }
          if (tmp4) {
            if (lastMessageId == null) {
              lastMessageId = value.lastMessageId;
            }
            if (lastMessageId == null) {
              lastMessageId = DISCORD_EPOCH.fromTimestamp(value.getAckTimestamp());
              const obj2 = DISCORD_EPOCH;
            }
            const obj = { messageId: null, local: null, trackAnalytics: false };
            obj[0] = lastMessageId;
            obj[1] = false;
            value.ack(obj);
          }
        }
        tmp3 = lastMessageId !== value.ackMessageId && value.lastMessageId !== value.ackMessageId;
      } else {
        value.mentionCount = value.mentionCount + 1;
      }
    }
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else {
      if (relationship.relationship.type !== constants8.PENDING_INCOMING) {
        if (relationship.relationship.type !== tmp19.FRIEND) {
          return false;
        }
      }
      let obj = ReadState;
      let value = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      let _Date = Date;
      if (relationship.relationship.type === constants8.FRIEND) {
        const _Date2 = Date;
        _Date = new _Date(Date.now());
        let time = _Date.getTime();
      } else {
        const _Date1 = new _Date(relationship.relationship.since);
        time = _Date1.getTime();
      }
      let num2 = 0;
      if (null != value.ackMessageId) {
        num2 = DISCORD_EPOCH.extractTimestamp(value.ackMessageId);
        const obj4 = DISCORD_EPOCH;
      }
      if (num2 < time) {
        value.lastMessageId = DISCORD_EPOCH.fromTimestamp(time);
        if (_validate.tabFocused) {
          value = obj.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
          if (tmp15) {
            if (tmp16) {
              let lastMessageId = value.lastMessageId;
              if (lastMessageId == null) {
                lastMessageId = tmp20(11).fromTimestamp(value.getAckTimestamp());
                const tmp20Result = tmp20(11);
              }
              obj = { messageId: null, local: null, trackAnalytics: false };
              obj[0] = lastMessageId;
              obj[1] = false;
              value.ack(obj);
            }
            tmp16 = null != value.lastMessageId || 0 !== value.mentionCount;
          }
          tmp15 = undefined !== value.ackMessageId && value.lastMessageId !== value.ackMessageId;
        } else {
          const mentionCount = value.mentionCount;
          if (tmp4) {
            value.mentionCount = mentionCount - 1;
          } else {
            value.mentionCount = mentionCount + 1;
          }
        }
        const obj8 = DISCORD_EPOCH;
        tmp20 = importDefault;
      }
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else if (relationship.relationship.type !== constants8.PENDING_INCOMING) {
      return false;
    } else {
      const value = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      const date = new Date(relationship.relationship.since);
      let num = 0;
      const time = date.getTime();
      if (null != value.ackMessageId) {
        num = DISCORD_EPOCH.extractTimestamp(value.ackMessageId);
        const obj = DISCORD_EPOCH;
      }
      if (num <= time) {
        const _Math = Math;
        value.mentionCount = Math.max(0, value.mentionCount - 1);
      }
    }
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleNotificationCenterItemAck(ids) {
    ids = ids.ids;
    let closure_0;
    if (!ids.optimistic) {
      if (!_validate.active) {
        const currentUser = authStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (null == id) {
          return false;
        } else {
          closure_0 = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
          const item = ids.forEach((arg0) => {
            if (obj.compare(ackMessageId.ackMessageId, arg0) < 0) {
              const _Math = Math;
              tmp.mentionCount = Math.max(tmp.mentionCount - 1, 0);
            }
          });
        }
      }
    }
    return false;
  },
  USER_NON_CHANNEL_ACK: function handleUserNonChannelAck(ackType) {
    let ackedId;
    let local;
    ({ ackedId, local } = ackType);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      const value = ReadState.get(id, ackType.ackType);
      let tmp5 = ackedId !== value.ackMessageId && value.lastMessageId !== value.ackMessageId;
      if (tmp5) {
        let ackResult = null != value.lastMessageId;
        if (!ackResult) {
          ackResult = 0 !== value.mentionCount;
        }
        if (ackResult) {
          if (ackedId == null) {
            ackedId = value.lastMessageId;
          }
          if (ackedId == null) {
            ackedId = DISCORD_EPOCH.fromTimestamp(value.getAckTimestamp());
            const obj2 = DISCORD_EPOCH;
          }
          const obj = { messageId: null, local: null, trackAnalytics: false };
          obj[0] = ackedId;
          if (local == null) {
            local = true;
          }
          obj[1] = local;
          ackResult = value.ack(obj);
        }
        tmp5 = ackResult;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = ReadState;
      let tmp2 = nextResult;
      let value = ReadState.get(nextResult.id);
      let tmp5 = value;
      let tmp6 = parseTimestamp;
      let tmp7 = parseTimestamp(nextResult.lastPinTimestamp);
      let tmp8 = value.lastMessageId === nextResult.lastMessageId;
      if (tmp8) {
        let tmp9 = value;
        let tmp10 = tmp7;
        tmp8 = tmp5.lastPinTimestamp === tmp7;
      }
      if (!tmp8) {
        flag = true;
        let tmp11 = value;
        let tmp12 = nextResult;
        tmp5.lastMessageId = tmp2.lastMessageId;
        let tmp13 = tmp7;
        tmp5.lastPinTimestamp = tmp7;
      }
      continue;
    }
    return flag;
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function handleClearOldestUnreadMessage(channelId) {
    channelId = channelId.channelId;
    let flag = false;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      const hasUnreadResult = value.hasUnread();
      let flag2 = !hasUnreadResult;
      if (!hasUnreadResult) {
        value.oldestUnreadMessageId = null;
        flag2 = true;
      }
      flag = flag2;
    }
    return flag;
  },
  TRY_ACK: function handleTryAck(channelId) {
    channelId = channelId.channelId;
    let flag = false;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        const obj = { trackAnalytics: true, location: null };
        obj[1] = tmp;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  MESSAGE_REQUEST_ACK: function handleMessageRequestAck(ackedId) {
    ackedId = ackedId.ackedId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = ReadState.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (ackedId === value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = ackedId;
        const obj = { messageId: null, isExplicitUserAction: true, trackAnalytics: false };
        obj[0] = ackedId;
        value.ack(obj);
      }
    }
  },
  MESSAGE_REQUEST_CLEAR_ACK: function handleMessageRequestClearAck() {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = ReadState.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (null == value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = undefined;
      }
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let tmp = state.state === constants12.ACTIVE;
    if (tmp) {
      let obj = { section: null, object: null, objectType: null };
      obj[0] = constants3.CHANNEL;
      obj[1] = constants2.ACK_APP_FOREGROUND;
      obj[2] = constants.ACK_AUTOMATIC;
      const channelId = importDefaultResult.getChannelId();
      let flag = false;
      if (null != channelId) {
        const value = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value, undefined);
        if (ackResult) {
          obj = { trackAnalytics: true, location: null };
          obj[1] = obj;
          ackResult = value.ack(obj);
        }
        flag = ackResult;
      }
      tmp = flag;
    }
    return tmp;
  }
};
const readStateStoreClass = new ReadStateStoreClass(require("dispatcher"), obj);
let result = set.fileFinishedImporting("stores/ReadStateStore.tsx");

export default readStateStoreClass;
export { shouldBadgeMessage };
export { ReadState };