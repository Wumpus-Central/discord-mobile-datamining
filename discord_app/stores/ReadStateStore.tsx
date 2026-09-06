// discord_app/stores/ReadStateStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import AppStateStore from "native/AppStateStore.tsx";
import asyncRequireImpl from "../../_runtime/01896_asyncRequireImpl.js";
import TypeUtils from "../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import ThreadActionUtils from "../modules/threads/ThreadActionUtils.tsx";
import BasicPermissionUtilsDefault from "../utils/BasicPermissionUtils.tsx";
import RootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import isMessageMentionedDefault from "../modules/messages/isMessageMentioned.tsx";
import IOSPushNotificationRawPayloadFixExperiment from "../modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx";
import GuildReadStateStore from "GuildReadStateStore.tsx";
import isChangelogChannelDefault from "../modules/changelog/utils/isChangelogChannel.tsx";
import isChannelFocused from "../modules/panels/isChannelFocused.native.tsx";
import DiscordAppStateDefault from "../modules/app_state/DiscordAppState.native.tsx";
import networkAwareRetryDefault from "../modules/network/networkAwareRetry.tsx";
import MessageRequestUtils from "../modules/message_request/MessageRequestUtils.tsx";
import visibleInlineChannels from "../modules/panels/visibleInlineChannels.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../modules/activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../modules/calls/ChannelRTCStore.tsx";
import GatedChannelStore from "../modules/channel/GatedChannelStore.tsx";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import GuildScheduledEventStore from "../modules/guild_scheduled_events/GuildScheduledEventStore.tsx";
import MessageRequestStore from "../modules/message_request/MessageRequestStore.tsx";
import SpamMessageRequestStore from "../modules/message_request/SpamMessageRequestStore.tsx";
import NotificationCenterItemsStore from "../modules/notification_center/NotificationCenterItemsStore.tsx";
import ActiveThreadsStore from "../modules/threads/ActiveThreadsStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelSectionStore from "ChannelSectionStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import DimensionStore from "DimensionStore.tsx";
import GuildAvailabilityStore from "GuildAvailabilityStore.tsx";
import GuildStore from "GuildStore.tsx";
import IdleStore from "IdleStore.tsx";
import MessageStore from "MessageStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import UserGuildSettingsStore from "UserGuildSettingsStore.tsx";
import UserStore from "UserStore.tsx";
import WindowStore from "web/WindowStore.tsx";

const isOptInEnabled = tmp(7535);
require = fn;
function generateOldThreadCutoff() {
  return require("SnowflakeUtils").fromTimestamp(Date.now() - closure_69);
}
function setDecayedReadStateTimer() {
  const timestamp = Date.now();
  closure_71 = timestamp - 7 * DurationsDefault.Millis.DAY;
  const timestamp1 = Date.now();
  closure_72 = timestamp1 - 3 * DurationsDefault.Millis.DAY;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    DispatcherDefault.dispatch({ type: "DECAY_READ_STATES" });
  }, DurationsDefault.Millis.HOUR);
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
  const channel = ChannelStore.getChannel(channel_id.channel_id);
  let tmp = null != channel;
  if (tmp) {
    const result = RelationshipStore.isBlockedOrIgnoredForMessage(channel_id);
    let tmp4 = !result;
    if (!result) {
      const obj = { message: channel_id, userId: id.id, suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(channel.guild_id), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(channel.guild_id) };
      let tmp8Result = isMessageMentionedDefault(obj);
      if (!tmp8Result) {
        tmp8Result = null != channel && channel.isPrivate() && !obj3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        const tmp10 = null != channel && channel.isPrivate() && !obj3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      tmp4 = tmp8Result;
      obj3 = UserGuildSettingsStore;
    }
    tmp = tmp4;
  }
  return tmp;
}
function processBulkAckQueue() {
  const self = this;
  const apply = closure_78.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_78 = async function _processBulkAckQueue(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          const read_states = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          if (0 === navigation.length) {
            c66 = false;
            if (tmp31 != null) {
              tmp31();
            }
            c6 = 3;
            const obj1 = { value: undefined, done: true };
            return obj1;
          } else {
            c66 = true;
            closure_129_1 = navigation.splice(0, 100);
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj2 = {
              value: networkAwareRetryDefault(() => {
                          const HTTP = closure_0(closure_2[42]).HTTP;
                          const request = { url: constants.BULK_ACK, body: { read_states }, oldFormErrors: true, rejectWithError: false };
                          return HTTP.post(request);
                        }),
              done: false
            };
            return obj2;
          }
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_130_65.length = 0;
        closure_130_66 = false;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_130_77(closure_129_0);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c4 = 0;
        obj = closure_130_0(closure_130_2[43]);
        c5 = 2;
        c6 = 1;
        const obj5 = { value: obj.timeoutPromise(1000), done: false };
        return obj5;
      }
    } catch (tmp23) {
      closure_3 = tmp23;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp23;
      } else {
        c5 = tmp;
      }
    }
  }
};
function shouldAutomaticallyAck(value, arg1) {
  const currentUser = UserStore.getCurrentUser();
  let hasAnyStaffLevelResult;
  if (currentUser != null) {
    hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
  }
  if (hasAnyStaffLevelResult) {
    logger.log("STAFF-ACK-LOG:", "shouldAutomaticallyAck called", value.channelId);
  }
  if (value.type !== ReadStateTypes.CHANNEL) {
    const currentUser1 = obj.getCurrentUser();
    let hasAnyStaffLevelResult1;
    if (currentUser1 != null) {
      hasAnyStaffLevelResult1 = currentUser1.hasAnyStaffLevel();
    }
    if (hasAnyStaffLevelResult1) {
      logger.log("STAFF-ACK-LOG:", "not channel read state", value.channelId);
    }
    return false;
  } else {
    const channel = ChannelStore.getChannel(value.channelId);
    const tmp4 = null != channel && channel.isForumPost();
    if (null != EmbeddedActivitiesStore.getConnectedActivityLocation()) {
      if (obj3.getActivityPanelMode() === constants13.PANEL) {
        if (obj3.getFocusedLayout() === constants14.NO_CHAT) {
          const currentUser2 = obj.getCurrentUser();
          let hasAnyStaffLevelResult2;
          if (currentUser2 != null) {
            hasAnyStaffLevelResult2 = currentUser2.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult2) {
            logger.log("STAFF-ACK-LOG:", "In activity", value.channelId);
          }
          return false;
        }
      }
    }
    if (IdleStore.isIdle()) {
      const currentUser3 = obj.getCurrentUser();
      let hasAnyStaffLevelResult3;
      if (currentUser3 != null) {
        hasAnyStaffLevelResult3 = currentUser3.hasAnyStaffLevel();
      }
      if (hasAnyStaffLevelResult3) {
        logger.log("STAFF-ACK-LOG:", "Is idle", value.channelId);
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
            logger.log("STAFF-ACK-LOG:", "App not active", value.channelId);
          }
          return false;
        }
        obj5 = DiscordAppStateDefault;
      }
      if (tmp4) {
        if (!value._persisted) {
          const currentUser5 = obj.getCurrentUser();
          let hasAnyStaffLevelResult5;
          if (currentUser5 != null) {
            hasAnyStaffLevelResult5 = currentUser5.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult5) {
            logger.log("STAFF-ACK-LOG:", "unpersisted forum post", value.channelId);
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
            logger.log("STAFF-ACK-LOG:", "Forum-like channel", value.channelId);
          }
          return false;
        } else {
          if (!tmp4) {
            if (!DimensionStore.isAtBottom(value.channelId)) {
              const currentUser7 = obj.getCurrentUser();
              let hasAnyStaffLevelResult7;
              if (currentUser7 != null) {
                hasAnyStaffLevelResult7 = currentUser7.hasAnyStaffLevel();
              }
              if (hasAnyStaffLevelResult7) {
                logger.log("STAFF-ACK-LOG:", "Not at bottom", value.channelId);
              }
              return false;
            }
          }
          const layout = ChannelRTCStore.getLayout(value.channelId);
          if (!ChannelRTCStore.getChatOpen(value.channelId)) {
            const currentUser8 = obj.getCurrentUser();
            let hasAnyStaffLevelResult8;
            if (currentUser8 != null) {
              hasAnyStaffLevelResult8 = currentUser8.hasAnyStaffLevel();
            }
            if (hasAnyStaffLevelResult8) {
              logger.log("STAFF-ACK-LOG:", "Fullscreen video", value.channelId);
            }
            return false;
          }
          const messages = MessageStore.getMessages(value.channelId);
          if (null != messages) {
            if (messages.ready) {
              if (!messages.loadingMore) {
                const result = isChannelFocused.isChannelFocusedForReadStateAck(value.channelId, arg1);
                const currentUser9 = obj.getCurrentUser();
                if (result) {
                  let hasAnyStaffLevelResult9;
                  if (!tmp37) {
                    hasAnyStaffLevelResult9 = currentUser9.hasAnyStaffLevel();
                  }
                  let flag6 = true;
                  if (hasAnyStaffLevelResult9) {
                    logger.log("STAFF-ACK-LOG:", "Acked", value.channelId);
                    flag6 = true;
                  }
                } else {
                  let hasAnyStaffLevelResult10;
                  if (!tmp37) {
                    hasAnyStaffLevelResult10 = currentUser9.hasAnyStaffLevel();
                  }
                  flag6 = false;
                  if (hasAnyStaffLevelResult10) {
                    logger.log("STAFF-ACK-LOG:", "Chat not focused", value.channelId);
                    flag6 = false;
                  }
                }
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
            logger.log("STAFF-ACK-LOG:", "Still loading messages", value.channelId);
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
          logger.log("STAFF-ACK-LOG:", "No unread or mentions", value.channelId);
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
        logger.log("STAFF-ACK-LOG:", "Cannot track unreads", value.channelId);
      }
      return false;
    }
  }
}
function mergeChannels(initialPrivateChannels) {
  const item = initialPrivateChannels.forEach((type) => {
    if (closure_1_17(type.type)) {
      value = ReadState.get(type.id);
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
  const user = guild;
  const threads = guild.threads;
  if (threads != null) {
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        value = ReadState.get(type.id);
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
          value.ackMessageId = require("SnowflakeUtils").fromTimestamp(getThreadAckMessageTimestamp(user.id, type.id));
          const obj = require("SnowflakeUtils");
        }
        if (null == value.ackPinTimestamp) {
          value.ackPinTimestamp = getThreadAckMessageTimestamp(user.id, type.id);
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
    value = ReadState.get(guild.id, ReadStateTypes.GUILD_EVENT);
    value._guildId = guild.id;
    closure_129_0 = 0;
    closure_129_1 = null;
    let _ackMessageId = value._ackMessageId;
    if (_ackMessageId == null) {
      _ackMessageId = id(11).fromTimestamp(value.getAckTimestamp());
      const obj3 = id(11);
    }
    closure_129_2 = _ackMessageId;
    const prop1 = guild.guild_scheduled_events;
    const item1 = prop1.forEach((id) => {
      if (obj.compare(id.id, id) > 0) {
        id = id.id;
      }
      obj = require("SnowflakeUtils");
      if (tmpResult.compare(id.id, dependencyMap) > 0) {
        closure_0 = closure_0 + 1;
      }
    });
    value.lastMessageId = closure_129_1;
    value.mentionCount = closure_129_0;
    let tmp3 = ReadStateTypes;
    let obj = ReadState;
  } else {
    obj = ReadState;
    tmp3 = ReadStateTypes;
  }
  value = obj.get(guild.id, tmp3.GUILD_HOME);
  const obj4 = id(11);
  const tmp12 = id(4153);
  const tmp12Result = id(4153)(Date.now());
  value.lastMessageId = obj4.fromTimestamp(id(4153)(Date.now()).subtract(24, "h").valueOf());
  guild = GuildStore.getGuild(guild.id);
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
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    const ackMessageId = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
    const item = relationships.forEach((since) => {
      if (null != since.since) {
        if (since.type === constants8.PENDING_INCOMING) {
          const _Date = Date;
          const date = new Date(since.since);
          const time = date.getTime();
          let num = 0;
          if (null != ackMessageId.ackMessageId) {
            num = require("SnowflakeUtils").extractTimestamp(tmp11.ackMessageId);
            const obj = require("SnowflakeUtils");
          }
          if (num < time) {
            tmp11.mentionCount = tmp11.mentionCount + 1;
            tmp11.lastMessageId = require("SnowflakeUtils").fromTimestamp(time);
            const obj2 = require("SnowflakeUtils");
          }
        }
      }
    });
  }
}
function getThreadAckMessageTimestamp(id, id2) {
  let tmp = id;
  const channel = ChannelStore.getChannel(id2);
  if (id == null) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp = guild_id;
  }
  let _Date = GuildStore.getGuild(tmp);
  let isForumPostResult;
  if (channel != null) {
    isForumPostResult = channel.isForumPost();
  }
  if (isForumPostResult) {
    const joinTimestampResult = JoinedThreadsStore.joinTimestamp(id2);
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
      bound = require("SnowflakeUtils").extractTimestamp(id2) - 1;
      const obj5 = require("SnowflakeUtils");
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
    value = ReadState.get(nextResult.id);
    if (null != nextResult.last_message_id) {
      value.lastMessageId = tmp2.last_message_id;
    }
    if (null != tmp2.last_pin_timestamp) {
      value.lastPinTimestamp = parseTimestamp(tmp2.last_pin_timestamp);
    }
    continue;
  }
}
function handleChannelSectionStoreUpdate() {
  currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
  if (currentSidebarChannelId !== currentSidebarChannelId) {
    let flag2 = false;
    if (null != tmp2) {
      value = ReadState.get(tmp2);
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
    let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SECTION_STORE_UPDATE, objectType: constants.ACK_AUTOMATIC };
    flag = false;
    if (null != currentSidebarChannelId) {
      value = ReadState.get(currentSidebarChannelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj.location = obj;
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
  ({ ackedId, local } = id);
  value = ReadState.get(id.id, id.ackType);
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
        ackedId = require("SnowflakeUtils").fromTimestamp(value.getAckTimestamp());
        const obj2 = require("SnowflakeUtils");
      }
      const obj = { messageId: ackedId, local: null, trackAnalytics: false };
      if (local == null) {
        local = true;
      }
      obj.local = local;
      ackResult = value.ack(obj);
    }
    tmp = ackResult;
  }
  return tmp;
}
const isEventUpcoming = fn(7526).isEventUpcoming;
const ChannelRecord = fn(1961);
({ isReadableType: closure_17, isThread: closure_18, isPrivate: closure_19, ALL_CHANNEL_TYPES: closure_20, THREAD_CHANNEL_TYPES: closure_21 } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_36, AnalyticsObjects: closure_37, AnalyticsSections: closure_38, Endpoints: closure_39, ChannelLayouts: closure_40, OverlayWidgets, CURRENT_APP_CONTEXT: closure_41, ChannelTypes: closure_42, BasicPermissions } = Constants);
({ Permissions: closure_44, MessageTypes: closure_45, RelationshipTypes: closure_46, ChannelTypesSets: closure_47, UserNotificationSettings: closure_48, MessageTypesSets: closure_49, AppStates: closure_50 } = Constants);
const ActivityPanelConstants = fn(9505);
({ ActivityPanelModes: closure_51, FocusedActivityLayouts: closure_52 } = ActivityPanelConstants);
const ChannelConstants = fn(1964);
({ ChannelFlags: closure_53, isStaticChannelRoute: closure_54 } = ChannelConstants);
const GuildScheduledEventStatus = fn(1963).GuildScheduledEventStatus;
const ReadStateTypes = fn(4742).ReadStateTypes;
const ThreadMemberFlags = fn(1113).ThreadMemberFlags;
const logger = new LoggerDefault("ReadStateStore");
function isOverlayChannelVisible() {
  return false;
}
if (fn(13834).OVERLAY_SUPPORTED) {
  isOverlayChannelVisible = fn(13835).isOverlayChannelVisible;
}
function handleMessageDelete(channelId) {
  value = ReadState.get(channelId.channelId);
  value.rebuildChannelState();
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach((type) => {
    if (closure_1_17(type.type)) {
      value = closure_1_81.get(type.id);
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
      value._isResourceChannel = closure_1_0(dependencyMap[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
      if (set.has(type.type)) {
        value.syncThreadSettings();
      }
      const obj2 = closure_1_0(dependencyMap[52]);
    }
  });
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((item) => {
    ({ messages, threads } = item);
    item = messages.forEach((arr) => {
      const mapped = arr.map((thread) => thread.thread);
      const found = mapped.filter(closure_1_0(closure_1_2[55]).isNotNullish);
      const item = found.forEach((type) => {
        if (closure_1_17(type.type)) {
          value = closure_1_81.get(type.id);
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
          value._isResourceChannel = closure_1_0(dependencyMap[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
          if (set.has(type.type)) {
            value.syncThreadSettings();
          }
          const obj2 = closure_1_0(dependencyMap[52]);
        }
      });
    });
    const item1 = threads.forEach((type) => {
      if (closure_1_17(type.type)) {
        value = closure_1_81.get(type.id);
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
        value._isResourceChannel = closure_1_0(dependencyMap[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
        if (set.has(type.type)) {
          value.syncThreadSettings();
        }
        const obj2 = closure_1_0(dependencyMap[52]);
      }
    });
  });
}
function handleChannelDelete(channel) {
  return ReadState.clear(channel.channel.id);
}
let closure_60 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
function isNonMutedPrivateMessage(isPrivate) {
  let tmp = null != isPrivate && isPrivate.isPrivate();
  if (tmp) {
    tmp = !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(isPrivate.guild_id, isPrivate.id);
  }
  return tmp;
}
function handleMessageAck(messageId) {
  messageId = messageId.messageId;
  ({ manual, newMentionCount } = messageId);
  value = ReadState.get(messageId.channelId);
  if (manual) {
    value.rebuildChannelState(messageId, true, newMentionCount);
    value.clearOutgoingAck();
    let flag = true;
  } else {
    flag = messageId !== value._ackMessageId;
    if (flag) {
      const obj = { messageId, local: true, trackAnalytics: false };
      flag = value.ack(obj);
    }
  }
  return flag;
}
let channelId = SelectedChannelStore.getChannelId();
let currentSidebarChannelId = null;
let token = null;
let c64 = false;
const navigation = [];
let c66 = false;
let c67 = null;
class AutoAckableChannelTracker {
  constructor() {
    merged = Object.assign({ channelWindowIds: null });
    merged[0] = {};
    return merged;
  }
}
const prototype = AutoAckableChannelTracker.prototype;
prototype["addWindowId"] = function addWindowId(arg0, arg1) {
  const self = this;
  if (null == this.channelWindowIds[arg0]) {
    const _Set = Set;
    set = new Set();
    self.channelWindowIds[arg0] = set;
  }
  self.channelWindowIds[arg0].add(arg1);
};
prototype["hasWindowId"] = function hasWindowId(arg0, arg1) {
  let hasItem = null != this.channelWindowIds[arg0];
  if (hasItem) {
    hasItem = tmp.channelWindowIds[arg0].has(arg1);
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
  set = new Set();
  const entries = require("SnowflakeUtils").entries(this.channelWindowIds);
  const obj2 = require("SnowflakeUtils");
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, obj3] = tmp5;
    if (obj3.has(arg0)) {
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
      if (WindowStore.isFocused(item10009)) {
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
  }
};
prototype["forEachChannel"] = function forEachChannel(fn) {
  const entries = require("SnowflakeUtils").entries(this.channelWindowIds);
  const obj = require("SnowflakeUtils");
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = fn(tmp5[0], tmp5[1]);
    continue;
  }
};
let merged = Object.assign({ channelWindowIds: null });
merged[0] = {};
let closure_69 = 30 * DurationsDefault.Millis.DAY;
let closure_71 = 0;
let closure_72 = 0;
let closure_73 = null;
const constants15 = { IS_GUILD_CHANNEL: 1, [1]: "IS_GUILD_CHANNEL", IS_THREAD: 2, [2]: "IS_THREAD", IS_MENTION_LOW_IMPORTANCE: 4, [4]: "IS_MENTION_LOW_IMPORTANCE" };
let ReadState;
class ReadState {
  constructor(arg0) {
    CHANNEL = fn;
    if (fn === undefined) {
      tmp = ReadStateTypes;
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    merged = Object.assign({ type: null, outgoingAckTimer: null, ackMessageIdAtChannelSelect: null, ackedWhileCached: "Array" });
    merged[0] = ReadStateTypes.CHANNEL;
    merged.channelId = global;
    merged.type = CHANNEL;
    merged._guildId = null;
    merged._isThread = false;
    merged._isActiveThread = false;
    merged._isJoinedThread = false;
    merged._isResourceChannel = false;
    merged._persisted = false;
    merged.loadedMessages = false;
    merged._lastMessageId = null;
    merged._lastMessageTimestamp = 0;
    merged._ackMessageId = null;
    merged._ackMessageTimestamp = 0;
    merged.isManualAck = false;
    merged.ackPinTimestamp = 0;
    merged.lastPinTimestamp = 0;
    merged._oldestUnreadMessageId = null;
    merged.oldestUnreadMessageIdStale = false;
    merged.estimated = false;
    merged._unreadCount = 0;
    merged._mentionCount = 0;
    merged.outgoingAck = null;
    return merged;
  }
}
const prototype2 = ReadState.prototype;
ReadState["forEach"] = function forEach(fn) {
  const _readStates = ReadState._readStates;
  let values = _readStates.values();
  const iter = values[Symbol.iterator]();
  while (iter !== undefined) {
    values = nextResult.values();
    for (const item10017 of values) {
      if (false === arg0(item10017)) {
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
  _readStates.get(CHANNEL);
  value = undefined;
  if (value != null) {
    value = value.get(channelId);
  }
  if (null == value) {
    if (typeof tmp2 === "function") {
      let CHANNEL2 = CHANNEL;
      if (CHANNEL === undefined) {
        CHANNEL2 = ReadStateTypes.CHANNEL;
      }
      merged = Object.assign({ type: null, outgoingAckTimer: null, ackMessageIdAtChannelSelect: null, ackedWhileCached: "Array" });
      merged[0] = ReadStateTypes.CHANNEL;
      merged.channelId = channelId;
      merged.type = CHANNEL2;
      merged._guildId = null;
      merged._isThread = false;
      merged._isActiveThread = false;
      merged._isJoinedThread = false;
      merged._isResourceChannel = false;
      merged._persisted = false;
      merged.loadedMessages = false;
      merged._lastMessageId = null;
      merged._lastMessageTimestamp = 0;
      merged._ackMessageId = null;
      merged._ackMessageTimestamp = 0;
      merged.isManualAck = false;
      merged.ackPinTimestamp = 0;
      merged.lastPinTimestamp = 0;
      merged._oldestUnreadMessageId = null;
      merged.oldestUnreadMessageIdStale = false;
      merged.estimated = false;
      merged._unreadCount = 0;
      merged._mentionCount = 0;
      merged.outgoingAck = null;
      const _readStates2 = tmp2._readStates;
      let value1 = _readStates2.get(CHANNEL);
      if (value1 == null) {
        const _Map = Map;
        value1 = new Map();
      }
      const result = value1.set(channelId, merged);
      const _readStates3 = tmp2._readStates;
      value = merged;
      if (!_readStates3.has(CHANNEL)) {
        const _readStates4 = tmp2._readStates;
        const result1 = _readStates4.set(CHANNEL, value1);
        value = merged;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
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
  _readStates.get(CHANNEL);
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
    let tmp4 = ReadState;
    let ifExists = ReadState.getIfExists(nextResult);
    let obj = ifExists;
    if (null != ifExists) {
      if (obj.canHaveMentions()) {
        let arr = items.push(tmp2);
        continue;
      }
    }
    let _mentionChannels = tmp4._mentionChannels;
    let deleteResult = _mentionChannels.delete(tmp2);
  }
  return items;
};
ReadState["getValue"] = function getValue(id, CHANNEL, fn) {
  if (CHANNEL === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  let tmp2 = arg3;
  const ifExists = this.getIfExists(id, CHANNEL);
  if (null != ifExists) {
    tmp2 = fn(ifExists);
  }
  return tmp2;
};
ReadState["clear"] = function clear(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  const _readStates = ReadState._readStates;
  value = _readStates.get(CHANNEL);
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
  ({ channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags, lastViewed } = this);
  if (arg0) {
    let obj = { channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, loadedMessages: tmp, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, isManualAck: tmp2, lastPinTimestamp, _oldestUnreadMessageId: tmp3, oldestUnreadMessageIdStale: tmp4, estimated: tmp5, _mentionCount, flags, lastViewed };
    return obj;
  } else {
    obj = { channelId, type, _guildId, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags };
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
      num = require("SnowflakeUtils").extractTimestamp(_lastMessageId);
      const obj = require("SnowflakeUtils");
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
      num = require("SnowflakeUtils").extractTimestamp(_ackMessageId);
      const obj = require("SnowflakeUtils");
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
  const messages = MessageStore.getMessages(this.channelId);
  if (null == this.ackMessageId) {
    if (self.isPrivate()) {
      if (!messages.hasMoreAfter) {
        if (self.hasMentions()) {
          const mentionCount = self.mentionCount;
          let id = UserStore.getCurrentUser();
          const item = messages.forEach((author) => {
            if (closure_1 > 0) {
              id = undefined;
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
          return id;
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
      const channel = ChannelStore.getChannel(self.channelId);
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
    const channel = ChannelStore.getChannel(tmp.channelId);
    return null != channel && channel.isPrivate();
  }
};
prototype2["rebuildChannelState"] = function rebuildChannelState(messageId, arg1, newMentionCount) {
  const self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let currentUser;
  let ackTimestamp;
  closure_4 = undefined;
  c5 = undefined;
  let id2;
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
    currentUser = UserStore.getCurrentUser();
    ackTimestamp = self.getAckTimestamp();
    closure_4 = false;
    c5 = false;
    id2 = null;
    const messages = MessageStore.getMessages(self.channelId);
    messages.forAll((id) => {
      if (closure_4) {
        id = self._oldestUnreadMessageId;
        if (id == null) {
          id = id.id;
        }
        self.oldestUnreadMessageId = id;
        let tmp = tmp2;
      } else {
        tmp = self;
        closure_4 = id.id === self._ackMessageId;
      }
      if (obj.extractTimestamp(id.id) > closure_3) {
        tmp.unreadCount = tmp.unreadCount + 1;
        let tmp4 = flag;
        if (flag) {
          tmp4 = shouldBadgeMessage(id, closure_2);
        }
        if (tmp4) {
          tmp.mentionCount = tmp.mentionCount + 1;
        }
        if (id2 == null) {
          id2 = id.id;
        }
      } else {
        c5 = true;
      }
    });
    const hasPresentResult = messages.hasPresent();
    let tmp5 = !hasPresentResult;
    if (hasPresentResult) {
      let tmp6 = closure_4;
      if (!closure_4) {
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
      _oldestUnreadMessageId = id2;
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
    const guildScheduledEventsForGuild = GuildScheduledEventStore.getGuildScheduledEventsForGuild(guild_id);
    const ackTimestamp = self.getAckTimestamp();
    const _isNaN = isNaN;
    if (!isNaN(ackTimestamp)) {
      let _ackMessageId = self._ackMessageId;
      if (_ackMessageId == null) {
        _ackMessageId = id(11).fromTimestamp(ackTimestamp);
        let tmpResult = id(11);
      }
      id = null;
      dependencyMap = 0;
      const item = guildScheduledEventsForGuild.forEach((id) => {
        if (isEventUpcoming(id)) {
          if (obj.compare(id.id, id) > 0) {
            id = id.id;
          }
          obj = require("SnowflakeUtils");
          if (tmpResult.compare(id.id, _ackMessageId) > 0) {
            closure_2 = closure_2 + 1;
          }
          tmpResult = require("SnowflakeUtils");
        }
      });
      self.lastMessageId = id;
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
      let basicPermissions = ChannelStore.getBasicChannel(self.channelId);
      if (null == basicPermissions) {
        return tmp3;
      } else if ("basicPermissions" in basicPermissions) {
        basicPermissions = basicPermissions.basicPermissions;
        let hasItem = BasicPermissionUtilsDefault.has(basicPermissions, BasicPermissions.VIEW_CHANNEL);
      } else {
        const isChannelGatedResult = GatedChannelStore.isChannelGated(self.guildId, self.channelId);
        hasItem = !isChannelGatedResult;
        if (isChannelGatedResult) {
          hasItem = PermissionStore.can(constants6.VIEW_CHANNEL, basicPermissions);
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
  const items = [MessageRequestStore, SpamMessageRequestStore];
  if (obj.isMessageRequestOrSpamRequest(self.channelId, items)) {
    return false;
  } else {
    if (!self._isThread) {
      if (tmpResult.isOptInEnabledForGuild(self._guildId)) {
        if (self._lastMessageTimestamp < closure_71) {
          return false;
        } else if (!UserGuildSettingsStore.isChannelOrParentOptedIn(self._guildId, self.channelId)) {
          if (!self.hasRecentlyVisitedAndRead()) {
            if (!self.hasMentions()) {
              return false;
            }
          }
        }
      }
      tmpResult = isOptInEnabled;
    }
    return self.canTrackUnreads();
  }
  obj = MessageRequestUtils;
};
prototype2["canHaveMentions"] = function canHaveMentions() {
  const self = this;
  let tmp = 0 !== this.mentionCount;
  if (tmp) {
    let tmp3 = !tmp2;
    if (!(self._isThread && !self._isJoinedThread)) {
      const items = [MessageRequestStore, SpamMessageRequestStore];
      const result = MessageRequestUtils.isMessageRequestOrSpamRequest(self.channelId, items);
      let tmp9 = !result;
      if (!result) {
        let result1 = tmp4(7535).isOptInEnabledForGuild(self._guildId);
        if (result1) {
          result1 = self._lastMessageTimestamp < closure_71;
        }
        let canTrackUnreadsResult = !result1;
        if (!result1) {
          canTrackUnreadsResult = self.canTrackUnreads();
        }
        tmp9 = canTrackUnreadsResult;
        const tmp4Result = tmp4(7535);
      }
      tmp3 = tmp9;
      tmp4 = require;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype2["getGuildChannelUnreadState"] = function getGuildChannelUnreadState(basicPermissions, arg1, arg2, arg3, arg4) {
  const self = this;
  if (arg1) {
    if (self._lastMessageTimestamp < closure_71) {
      return { mentionCount: 0, unread: false, isMentionLowImportance: false };
    } else if (!UserGuildSettingsStore.isChannelRecordOrParentOptedIn(basicPermissions)) {
      if (!self.hasRecentlyVisitedAndRead()) {
        if (self.mentionCount <= 0) {
          return { mentionCount: 0, unread: false, isMentionLowImportance: false };
        }
      }
    }
  }
  if ("basicPermissions" in basicPermissions) {
    let obj = BasicPermissionUtilsDefault;
    if (!obj.has(basicPermissions.basicPermissions, BasicPermissions.VIEW_CHANNEL)) {
      return { mentionCount: 0, unread: false, isMentionLowImportance: false };
    }
  } else if (GatedChannelStore.isChannelGated(self.guildId, self.channelId)) {
    if (!PermissionStore.can(constants6.VIEW_CHANNEL, basicPermissions)) {
      return { mentionCount: 0, unread: false, isMentionLowImportance: false };
    }
  }
  if (!arg3) {
    if (!arg4) {
      obj = { mentionCount: self.mentionCount, unread: self.getAckTimestamp() < self._lastMessageTimestamp, isMentionLowImportance: self.isMentionLowImportance };
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
    tmp = self.getAckTimestamp() > closure_72;
  }
  if (tmp) {
    const guildRecentsDismissedAt = UserSettingsProtoStore.getGuildRecentsDismissedAt(self._guildId);
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
  const self = this;
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
        networkAwareRetryDefault(() => {
          const HTTP = HTTPUtils.HTTP;
          return HTTP.post({ url: __initData17.PINS_ACK(self.channelId), oldFormErrors: true, rejectWithError: true });
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
  const self = this;
  ({ messageId, location: importDefault, trackAnalytics: require, local } = immediate);
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
      channelId = self.channelId;
      closure_129_0 = undefined;
      if (null != channelId) {
        value = ReadState.get(channelId);
        if (value.type === ReadStateTypes.CHANNEL) {
          const channel = ChannelStore.getChannel(value.channelId);
          if (null != channel) {
            if (channel.isForumPost()) {
              if (null != channel.parent_id) {
                const parent_id = channel.parent_id;
                value = obj5.get(parent_id);
                closure_129_0 = value;
                let hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                if (hasLoadedResult) {
                  let obj = require("SnowflakeUtils");
                  const keys = obj.keys(obj8.getThreadsForParent(channel.guild_id, parent_id));
                  hasLoadedResult = keys.every((item) => {
                    let hasOpenedThreadResult = readStateStoreClass.hasOpenedThread(item);
                    if (!hasOpenedThreadResult) {
                      hasOpenedThreadResult = require("SnowflakeUtils").compare(item, ackMessageId.ackMessageId) < 0;
                      const obj = require("SnowflakeUtils");
                    }
                    return hasOpenedThreadResult;
                  });
                }
                if (hasLoadedResult) {
                  obj = { trackAnalytics: true, location: null };
                  obj = { section: constants3.CHANNEL, object: constants2.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS, objectType: constants.ACK_AUTOMATIC };
                  obj.location = obj;
                  value.ack(obj);
                }
                obj8 = ActiveThreadsStore;
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
            if (self.type === ReadStateTypes.CHANNEL) {
              obj._ack(importDefault, ackMessageId);
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
  const _default = GuildReadStateStore.default;
  const guildId = this.guildId;
  const obj = { unread: this.hasUnread(), mentionCount: this.mentionCount, guildUnread: null, guildMentionCount: null, takenAt: null };
  let hasUnreadResult = null;
  if (null != guildId) {
    hasUnreadResult = _default.hasUnread(guildId);
  }
  obj.guildUnread = hasUnreadResult;
  let mentionCount = null;
  if (null != guildId) {
    mentionCount = _default.getMentionCount(guildId);
  }
  obj.guildMentionCount = mentionCount;
  obj.takenAt = Date.now();
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
            const channel = ChannelStore.getChannel(self.channelId);
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
prototype2["_ack"] = function _ack(arg0, arg1) {
  const self = this;
  importDefault = arg0;
  dependencyMap = arg1;
  const outgoingAck = this.outgoingAck;
  if (null != outgoingAck) {
    const id = AuthenticationStore.getId();
    closure_5 = token;
    self._persisted = true;
    const recalculateFlagsResult = self.recalculateFlags();
    let tmp4;
    if (recalculateFlagsResult !== self.flags) {
      tmp4 = recalculateFlagsResult;
    }
    require = tmp4;
    networkAwareRetryDefault(() => {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: __initData17.MESSAGE_ACK(self.channelId, outgoingAck), body: { token, last_viewed: self.lastViewed, flags: recalculateFlagsResult }, oldFormErrors: true, rejectWithError: true };
      return HTTP.post(request);
    }).then((body) => {
      if (null != body) {
        let tmp3 = token === closure_5;
        if (tmp3) {
          tmp3 = closure_4 === AuthenticationStore.getId();
        }
        if (tmp3) {
          token = body.body.token;
        }
        DispatcherDefault.dispatch({ type: "MESSAGE_ACKED" });
        if (closure_2) {
          asyncRequireImpl(13838, tmp5.paths).then((result) => {
            let obj = closure_1_1;
            if (closure_1_1 == null) {
              obj = {};
            }
            result.default(channelId.channelId, obj);
          });
          const promise = asyncRequireImpl(13838, tmp5.paths);
        }
        tmp5 = dependencyMap;
      }
    });
    let promise = networkAwareRetryDefault(() => {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: __initData17.MESSAGE_ACK(self.channelId, outgoingAck), body: { token, last_viewed: self.lastViewed, flags: recalculateFlagsResult }, oldFormErrors: true, rejectWithError: true };
      return HTTP.post(request);
    });
  }
};
prototype2["recalculateFlags"] = function recalculateFlags() {
  if (this.type === ReadStateTypes.CHANNEL) {
    const channel = ChannelStore.getChannel(tmp.channelId);
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
  let self = this;
  ({ outgoingAck, type } = this);
  if (null != outgoingAck) {
    if (ReadStateTypes.GUILD_HOME !== type) {
      if (tmp6.GUILD_EVENT !== type) {
        if (tmp6.GUILD_ONBOARDING_QUESTION !== type) {
          let url = closure_39.USER_NON_CHANNEL_ACK(outgoingAck, type);
        }
        self._persisted = true;
        self = importDefault;
        networkAwareRetryDefault(() => {
          const HTTP = HTTPUtils.HTTP;
          const request = { url, body: {}, oldFormErrors: true, rejectWithError: true };
          return HTTP.post(request);
        });
      }
    }
    url = closure_39.GUILD_FEATURE_ACK(tmp, outgoingAck, type);
  }
};
prototype2["delete"] = function delete() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const self = this;
  const basicChannel = ChannelStore.getBasicChannel(this.channelId);
  ({ channelId, type } = this);
  let obj = { remote: flag, persisted: this._persisted, channelMissing: null == basicChannel, isOld: null, validType: null, readableType: null, oldThreadCutoff: null, mentionCount: null, channelId: null, ackMessageId: null, lastMessageId: null };
  const fromTimestampResult = require("SnowflakeUtils").fromTimestamp(Date.now() - closure_69);
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
  obj.isOld = tmp7;
  let hasItem = null != basicChannel;
  if (hasItem) {
    hasItem = set.has(basicChannel.type);
  }
  obj.validType = hasItem;
  let tmp14 = null != basicChannel;
  if (tmp14) {
    tmp14 = closure_1_17(basicChannel.type);
  }
  obj.readableType = tmp14;
  const obj2 = require("SnowflakeUtils");
  const tmp5 = closure_69;
  obj.oldThreadCutoff = require("SnowflakeUtils").fromTimestamp(Date.now() - tmp5);
  ({ mentionCount: obj.mentionCount, channelId: obj.channelId, _ackMessageId: obj.ackMessageId, _lastMessageId: obj.lastMessageId } = self);
  logger.log("Deleting ReadState", channelId, type, obj);
  if (flag) {
    flag = self._persisted;
  }
  if (flag) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: __initData17.CHANNEL_ACK(self.channelId), body: null, oldFormErrors: true, rejectWithError: true };
    obj = { version: 2, read_state_type: self.type };
    request.body = obj;
    HTTP.del(request);
  }
  const _readStates = ReadState._readStates;
  value = _readStates.get(self.type);
  if (value != null) {
    value.delete(self.channelId);
  }
  const _mentionChannels = ReadState._mentionChannels;
  _mentionChannels.delete(self.channelId);
};
prototype2["shouldDeleteReadState"] = function shouldDeleteReadState(arg0) {
  if (0 !== GuildAvailabilityStore.totalUnavailableGuilds) {
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
                const currentUser = UserStore.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                flag = require("SnowflakeUtils").cast(id) === self.channelId;
                const obj7 = require("SnowflakeUtils");
              }
            }
            return !flag;
          }
        }
        flag = null != GuildStore.getGuild(self.channelId);
      }
    }
    const basicChannel = ChannelStore.getBasicChannel(self.channelId);
    if (null == basicChannel) {
      let tmp29 = self.mentionCount > 0;
      if (!tmp29) {
        let tmp32 = require("SnowflakeUtils").compare(self.channelId, arg0) <= 0;
        if (tmp32) {
          let tmp33 = null != self._ackMessageId;
          if (tmp33) {
            let tmp30Result = tmp30(11);
            tmp33 = tmp30Result.compare(self._ackMessageId, arg0) > 0;
          }
          let tmp34 = !tmp33;
          if (!tmp33) {
            let tmp35 = null != self._lastMessageId;
            if (tmp35) {
              tmp30Result = tmp30(11);
              tmp35 = tmp30Result.compare(self._lastMessageId, arg0) > 0;
            }
            tmp34 = !tmp35;
          }
          tmp32 = tmp34;
        }
        tmp29 = tmp32;
        const obj4 = require("SnowflakeUtils");
      }
      let hasItem = tmp29;
    } else {
      hasItem = set.has(basicChannel.type);
      if (hasItem) {
        const tmp6 = closure_1_17(basicChannel.type);
        let tmp7 = !tmp6;
        if (tmp6) {
          const tmp9 = closure_1_19(basicChannel.type);
          let tmp10 = !tmp9;
          if (!tmp9) {
            hasItem = set2.has(basicChannel.type);
            let tmp13 = !hasItem;
            if (hasItem) {
              const guildId = self.guildId;
              let isActiveResult = null != guildId;
              if (isActiveResult) {
                isActiveResult = ActiveThreadsStore.isActive(guildId, basicChannel.parent_id, self.channelId);
              }
              let tmp16 = !isActiveResult;
              if (!isActiveResult) {
                let tmp17 = self.mentionCount > 0;
                if (!tmp17) {
                  let tmp20 = require("SnowflakeUtils").compare(self.channelId, arg0) <= 0;
                  if (tmp20) {
                    let tmp21 = null != self._ackMessageId;
                    if (tmp21) {
                      let tmp18Result = tmp18(11);
                      tmp21 = tmp18Result.compare(self._ackMessageId, arg0) > 0;
                    }
                    let tmp22 = !tmp21;
                    if (!tmp21) {
                      let tmp23 = null != self._lastMessageId;
                      if (tmp23) {
                        tmp18Result = tmp18(11);
                        tmp23 = tmp18Result.compare(self._lastMessageId, arg0) > 0;
                      }
                      tmp22 = !tmp23;
                    }
                    tmp20 = tmp22;
                  }
                  tmp17 = tmp20;
                  const obj = require("SnowflakeUtils");
                }
                tmp16 = tmp17;
              }
              tmp13 = !tmp16;
            }
            let tmp24 = !tmp13;
            if (tmp13) {
              let tmp25 = self.mentionCount > 0;
              if (tmp25) {
                tmp25 = !PermissionStore.canBasicChannel(closure_60, basicChannel);
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
    self._ackMessageId = require("SnowflakeUtils").fromTimestamp(self._ackMessageTimestamp);
    return self._ackMessageTimestamp;
  } else {
    if (self.type !== ReadStateTypes.GUILD_EVENT) {
      if (self.type !== tmp2.GUILD_ONBOARDING_QUESTION) {
        if (closure_1_54(self.channelId)) {
          let guild = GuildStore.getGuild(self.guildId);
        } else {
          const channel = ChannelStore.getChannel(self.channelId);
          if (null != channel) {
            guild = GuildStore.getGuild(channel.getGuildId());
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
            extractTimestampResult = require("SnowflakeUtils").extractTimestamp(self.channelId);
            const obj4 = require("SnowflakeUtils");
          }
        }
        const _Date2 = Date;
        joinedAt = Date.now();
      } else {
        extractTimestampResult = require("SnowflakeUtils").extractTimestamp(self.channelId);
        const obj2 = require("SnowflakeUtils");
      }
      self._ackMessageTimestamp = extractTimestampResult;
      return extractTimestampResult;
    }
    guild = GuildStore.getGuild(self.channelId);
  }
};
Object.defineProperty(prototype2, "oldestUnreadTimestamp", {
  get: function oldestUnreadTimestamp() {
    let num = 0;
    if (null != this.oldestUnreadMessageId) {
      num = require("SnowflakeUtils").extractTimestamp(tmp.oldestUnreadMessageId);
      const obj = require("SnowflakeUtils");
    }
    return num;
  },
  set: undefined
});
prototype2["syncThreadSettings"] = function syncThreadSettings() {
  const self = this;
  this._isThread = true;
  const channel = ChannelStore.getChannel(this.channelId);
  if (null == channel) {
    const _HermesInternal = HermesInternal;
    logger.warn("syncThreadSettings called with channel not in memory " + self.channelId);
    return false;
  } else {
    const guildId = self.guildId;
    let isActiveResult = null != guildId;
    if (isActiveResult) {
      isActiveResult = ActiveThreadsStore.isActive(guildId, channel.parent_id, self.channelId);
    }
    const hasJoinedResult = JoinedThreadsStore.hasJoined(self.channelId);
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
  const diff = timestamp - require("SnowflakeUtils").DISCORD_EPOCH;
  const rounded = Math.ceil(diff / DurationsDefault.Millis.DAY);
  if (rounded !== this.lastViewed) {
    self.lastViewed = rounded;
    if (tmp4) {
      self.ack({ force: true, trackAnalytics: false });
    }
    tmp4 = self.canTrackUnreads() && !self.hasUnread();
  }
};
ReadState._guildReadStateSentinels = {};
let tmp6 = new LoggerDefault("ReadStateStore");
ReadState._readStates = new Map();
let map = new Map();
ReadState._mentionChannels = new Set();
let apply = fn(12);
let closure_87 = apply.throttle((arg0) => {
  arg0.delete();
}, 100);
const Store = initializeDefault.Store;
class ReadStateStoreClass extends Store {
}
const prototype3 = ReadStateStoreClass.prototype;
prototype3["initialize"] = function initialize() {
  const items = [DimensionStore, UserStore, GuildStore, GuildAvailabilityStore, ChannelStore, SelectedChannelStore, MessageStore, PermissionStore, ChannelRTCStore, ActiveThreadsStore, JoinedThreadsStore, ChannelSectionStore, GuildScheduledEventStore, ExperimentStore, GatedChannelStore, UserGuildSettingsStore, WindowStore, NotificationCenterItemsStore, MessageRequestStore, UserSettingsProtoStore, SpamMessageRequestStore];
  items.push(AppStateStore.default);
  this.waitFor(ActiveThreadsStore, AuthenticationStore, ChannelRTCStore, ChannelSectionStore, ChannelStore, DimensionStore, EmbeddedActivitiesStore, GatedChannelStore, GuildAvailabilityStore, GuildScheduledEventStore, GuildStore, IdleStore, JoinedThreadsStore, MessageStore, NotificationCenterItemsStore, PermissionStore, RelationshipStore, SelectedChannelStore, UserGuildSettingsStore, UserSettingsProtoStore, UserStore, WindowStore);
  const items1 = [ChannelSectionStore];
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
prototype3["hasLastMessage"] = function hasLastMessage(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (lastMessageId) => null != lastMessageId.lastMessageId, false);
};
prototype3["canBeUnread"] = function canBeUnread(arg0) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => canBeUnread.canBeUnread(), false);
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
prototype3["getUnreadCount"] = function getUnreadCount(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (canBeUnread) => {
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
  value = ReadState.getValue(arg0, CHANNEL, (canHaveMentions) => {
    let num = 0;
    if (canHaveMentions.canHaveMentions()) {
      num = canHaveMentions.getMentionCount();
    }
    return num;
  }, 0);
  if (!isChangelogChannelDefault(arg0)) {
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
  value = CHANNEL === ReadStateTypes.CHANNEL;
  if (value) {
    value = ReadState.getValue(arg0, CHANNEL, (isMentionLowImportance) => isMentionLowImportance.isMentionLowImportance, false);
  }
  return value;
};
prototype3["getGuildChannelUnreadState"] = function getGuildChannelUnreadState(id, arg1, arg2, arg3, arg4) {
  closure_0 = id;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  closure_4 = arg4;
  return ReadState.getValue(id.id, ReadStateTypes.CHANNEL, (getGuildChannelUnreadState) => getGuildChannelUnreadState.getGuildChannelUnreadState(closure_0, closure_1, closure_2, closure_3, closure_4), { mentionCount: 0, unread: false, isMentionLowImportance: false });
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
prototype3["getOldestUnreadMessageId"] = function getOldestUnreadMessageId(id) {
  let CHANNEL = arg1;
  if (arg1 === undefined) {
    CHANNEL = ReadStateTypes.CHANNEL;
  }
  return ReadState.getValue(id, CHANNEL, (canTrackUnreads) => {
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
  value = ReadState.get(parent_id);
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
      obj3 = require("SnowflakeUtils");
      tmp9 = importDefault;
    }
  }
  return false;
};
prototype3["getAllReadStates"] = function getAllReadStates(arg0) {
  closure_0 = arg0;
  const items = [];
  const item = ReadState.forEach((type) => {
    type = type.type;
    if (ReadStateTypes.GUILD_HOME !== type) {
      if (tmp.GUILD_EVENT !== type) {
        if (tmp.GUILD_ONBOARDING_QUESTION !== type) {
          if (tmp.NOTIFICATION_CENTER !== type) {
            if (tmp.MESSAGE_REQUESTS !== type) {
              items.push(type.serialize(closure_0));
            }
          }
          const currentUser = UserStore.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          if (obj.cast(id) === type.channelId) {
            items.push(type.serialize(closure_0));
          }
          obj = require("SnowflakeUtils");
        }
      }
    }
    if (null != GuildStore.getGuild(type.channelId)) {
      items.push(type.serialize(closure_0));
    }
  });
  return items;
};
prototype3["getGuildUnreadsSentinel"] = function getGuildUnreadsSentinel(_guildId) {
  return ReadState.getGuildSentinels(_guildId).unreadsSentinel;
};
prototype3["getMentionChannelIds"] = function getMentionChannelIds() {
  return ReadState.getMentionChannelIds();
};
prototype3["getNonChannelAckId"] = function getNonChannelAckId(arg0) {
  const currentUser = UserStore.getCurrentUser();
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
  value = ReadState.get(arg0);
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
  return merged.getAllChannelIdsForWindowId(arg0);
};
ReadStateStoreClass.displayName = "ReadStateStore";
const readStateStoreClass = new ReadStateStoreClass(DispatcherDefault, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSync(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10008 in changesByChannelId) {
      let tmp12 = changesByChannelId[key10008];
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
        let found = combined.filter(GlobalUtils.isNotNullish);
        for (const item10026 of found) {
          let tmp7 = item10026;
          let obj = require("SnowflakeUtils");
          if (1 === obj.compare(item10026.id, ifExists.lastMessageId)) {
            ifExists.lastMessageId = tmp7.id;
          }
          continue;
        }
      }
      continue;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    ({ guilds, readState } = arg0);
    ({ relationships, initialPrivateChannels } = arg0);
    setDecayedReadStateTimer();
    c63 = null;
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
        ({ id: obj.id, read_state_type: obj.read_state_type, badge_count: obj.mention_count, last_acked_id: obj.last_message_id } = read_state_type);
        tmp2 = obj;
      }
      value = ReadState.get(tmp2.id, CHANNEL);
      value._persisted = true;
      let num = tmp2.mention_count;
      if (num == null) {
        num = 0;
      }
      value._mentionCount = num;
      ({ flags: obj2.flags, last_viewed: obj2.lastViewed } = tmp2);
      basicChannel = basicChannel.getBasicChannel(tmp2.id);
      if (null != basicChannel) {
        if (closure_1_18(basicChannel.type)) {
          value.ackMessageId = require("SnowflakeUtils").fromTimestamp(getThreadAckMessageTimestamp(basicChannel.guild_id, basicChannel.id));
          const obj3 = require("SnowflakeUtils");
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
        obj4 = require("SnowflakeUtils");
      } else {
        value.ackMessageId = tmp2.last_message_id;
      }
    });
    ReadState.resetGuildSentinels();
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != id) {
      value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      let _Date = Date;
      value.lastMessageId = require("SnowflakeUtils").fromTimestamp(Date.now());
      const obj2 = require("SnowflakeUtils");
    }
    mergeRelationships(relationships);
    mergeChannels(initialPrivateChannels);
    let iter = guilds[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp16 = nextResult;
      let tmp17 = mergeChannels;
      if ("full_sync" === nextResult.channels.op) {
        let writes = tmp16.channels.items;
      } else {
        writes = tmp16.channels.writes;
      }
      let tmp17Result = tmp17(writes);
      if (null != tmp16.channelTimestampUpdates) {
        let tmp24 = mergeChannelTimestampUpdates(tmp16.channelTimestampUpdates);
      }
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
            CHANNEL = constants.CHANNEL;
          }
          value = closure_1_81.get(tmp3.id, CHANNEL);
          let tmp7 = value;
          if (value.shouldDeleteReadState(tmp)) {
            let tmp10 = closure_1_87(tmp7);
          }
          continue;
        }
      })(readState.entries);
    }, 10 * DurationsDefault.Millis.SECOND);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    const item = lazyPrivateChannels.forEach((type) => {
      if (closure_1_17(type.type)) {
        value = ReadState.get(type.id);
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
    closure_71 = timestamp - 7 * DurationsDefault.Millis.DAY;
    const timestamp1 = Date.now();
    closure_72 = timestamp1 - 3 * DurationsDefault.Millis.DAY;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      DispatcherDefault.dispatch({ type: "DECAY_READ_STATES" });
    }, DurationsDefault.Millis.HOUR);
    token = null;
    channelId = readStates.selectedChannelId;
    currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    ReadState.clearAll();
    const item = readStates.forEach((channelId) => {
      value = ReadState.get(channelId.channelId);
      const result = value.deserializeForOverlay(channelId);
      if (value.type === constants.CHANNEL) {
        value.rebuildChannelState();
      }
    });
  },
  CACHE_LOADED: function handleCacheLoaded(readStates) {
    readStates = readStates.readStates;
    c64 = true;
    const timestamp = Date.now();
    closure_71 = timestamp - 7 * DurationsDefault.Millis.DAY;
    const timestamp1 = Date.now();
    closure_72 = timestamp1 - 3 * DurationsDefault.Millis.DAY;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      DispatcherDefault.dispatch({ type: "DECAY_READ_STATES" });
    }, DurationsDefault.Millis.HOUR);
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
      const result = map.set(type.channelId, TypeUtils.dangerouslyCast(type, tmp2));
      const _readStates2 = tmp2._readStates;
      if (!_readStates2.has(CHANNEL)) {
        const _readStates3 = tmp2._readStates;
        const result1 = _readStates3.set(CHANNEL, map);
      }
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    closure_1 = require("SnowflakeUtils").fromTimestamp(Date.now() - closure_69);
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
      if (closure_1_17(type.type)) {
        value = ReadState.get(type.id);
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
    ({ channelId, isAfter, messages } = arg0);
    value = ReadState.get(channelId);
    value.loadedMessages = true;
    let tmp = null == value.lastMessageId;
    if (tmp) {
      tmp = messages.length > 0;
    }
    if (tmp) {
      value.lastMessageId = messages[0].id;
    }
    messages = MessageStore.getMessages(channelId);
    if (null != messages) {
      if (messages.length > 0) {
        value.rebuildChannelState();
        const obj3 = require("SnowflakeUtils");
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
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const item = found.forEach((type) => {
      if (closure_1_17(type.type)) {
        value = closure_1_81.get(type.id);
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
        value._isResourceChannel = closure_1_0(dependencyMap[52]).hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
        if (set.has(type.type)) {
          value.syncThreadSettings();
        }
        const obj2 = closure_1_0(dependencyMap[52]);
      }
    });
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(messages) {
    messages = messages.messages;
    if (obj.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
      if (0 === messages.length) {
        return false;
      } else {
        value = ReadState.get(messages.channelId);
        const id = messages[0].id;
        let tmp4 = null == value.lastMessageId;
        if (!tmp4) {
          tmp4 = require("SnowflakeUtils").compare(id, value.lastMessageId) > 0;
          const obj3 = require("SnowflakeUtils");
        }
        if (tmp4) {
          value.lastMessageId = id;
          value.rebuildChannelState();
        }
      }
    } else {
      return false;
    }
    obj = IOSPushNotificationRawPayloadFixExperiment;
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    ({ channelId, message } = isPushNotification);
    let obj = ReadState;
    value = ReadState.get(channelId);
    let hasUnreadResult = value.hasUnread();
    value.lastMessageId = message.id;
    const currentUser = UserStore.getCurrentUser();
    let obj2 = ChannelStore;
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    if (null != message.author) {
      if (null != currentUser) {
        if (message.author.id === currentUser.id) {
          const SELF_MENTIONABLE_SYSTEM = constants11.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            if (null != value.outgoingAck) {
              value.clearOutgoingAck();
            }
            obj = { channelId, messageId: message.id, manual: false };
            ({ messageId, manual, newMentionCount } = obj);
            value = obj.get(obj.channelId);
            if (manual) {
              value.rebuildChannelState(messageId, true, newMentionCount);
              value.clearOutgoingAck();
              let flag = true;
            } else {
              flag = messageId !== value._ackMessageId;
              if (flag) {
                obj = { messageId, local: true, trackAnalytics: false };
                flag = value.ack(obj);
              }
            }
            return flag;
          }
        }
      }
    }
    let obj6 = RootNavigationRef;
    const rootNavigationRef = obj6.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (true === isReadyResult) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      if (ChannelRTCStore.getChatOpen(value.channelId)) {
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
      const channelId1 = SelectedChannelStore.getChannelId();
      currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId1);
      channelId2 = channelId1;
    }
    let result = channelId2 === channelId || currentSidebarChannelId === channelId;
    if (!result) {
      let tmp8Result = tmp8(13839);
      result = tmp8Result.isChannelVisibleInline(channelId, (arg0) => focused.isFocused(arg0));
    }
    if (result) {
      if (shouldAutomaticallyAck(value)) {
        if (!isPushNotification.isPushNotification) {
          const channelId3 = value.channelId;
          let tmp22 = null != channelId3;
          if (tmp22) {
            tmp22 = isOverlayChannelVisible(channelId3);
          }
          const obj1 = { messageId: message.id, trackAnalytics: true, location: null };
          obj2 = { section: tmp22 ? constants3.OVERLAY : constants3.CHANNEL, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
          obj1.location = obj2;
          return value.ack(obj1);
        }
      }
    }
    let tmp27 = null != channelId;
    if (tmp27) {
      tmp27 = isOverlayChannelVisible(channelId);
    }
    if (tmp27) {
      const obj3 = { messageId: message.id, trackAnalytics: true, location: null };
      const obj4 = { section: constants3.OVERLAY, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
      obj3.location = obj4;
      return value.ack(obj3);
    } else {
      if (null != value.oldestUnreadMessageId) {
        if (!value.oldestUnreadMessageIdStale) {
          if (!hasUnreadResult) {
            tmp8Result = tmp8(10089);
            hasUnreadResult = tmp8Result.getFocusedChannelId() === channelId;
          }
          if (!hasUnreadResult) {
            value.oldestUnreadMessageId = message.id;
          }
        }
        if (!tmp2) {
          value.unreadCount = value.unreadCount + 1;
        }
        if (!RelationshipStore.isBlockedOrIgnoredForMessage(message)) {
          if (message.type !== constants7.RECIPIENT_REMOVE) {
            if (null != currentUser) {
              const obj5 = { rawMessage: message, userId: currentUser.id, suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(value.guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(value.guildId) };
              if (tmp8Result1.isRawMessageMentioned(obj5)) {
                obj6 = { shouldMention: true, isMentionLowImportance: false };
              }
              if (obj6.shouldMention) {
                value.isMentionLowImportance = obj6.isMentionLowImportance;
                value.mentionCount = value.mentionCount + 1;
                if (null != currentUser) {
                  obj.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = message.id;
                  if (NotificationCenterItemsStore.tabFocused) {
                    const value1 = obj.get(currentUser.id, tmp46.NOTIFICATION_CENTER);
                    if (tmp38) {
                      let tmp39 = null != value1.lastMessageId;
                      if (!tmp39) {
                        tmp39 = 0 !== value1.mentionCount;
                      }
                      if (tmp39) {
                        let lastMessageId = value1.lastMessageId;
                        if (lastMessageId == null) {
                          lastMessageId = require("SnowflakeUtils").fromTimestamp(value1.getAckTimestamp());
                          const obj20 = require("SnowflakeUtils");
                        }
                        const obj7 = { messageId: lastMessageId, local: false, trackAnalytics: false };
                        value1.ack(obj7);
                      }
                    }
                    tmp38 = undefined !== value1.ackMessageId && value1.lastMessageId !== value1.ackMessageId;
                  }
                  tmp46 = ReadStateTypes;
                }
              }
              tmp8Result1 = tmp8(4798);
            }
            const channel = obj2.getChannel(message.channel_id);
            let tmp34 = null != channel && channel.isPrivate();
            if (tmp34) {
              tmp34 = !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
            }
            if (tmp34) {
              obj6 = { shouldMention: true, isMentionLowImportance: false };
            } else {
              if (UserGuildSettingsStore.mentionOnAllMessages) {
                if (null != channel) {
                  if (channel.isThread()) {
                    if (tmp8Result2.computeThreadNotificationSetting(channel) === ThreadMemberFlags.ALL_MESSAGES) {
                      obj6 = { shouldMention: true, isMentionLowImportance: true };
                    }
                    tmp8Result2 = tmp8(10088);
                  } else if (!channel.isVocal()) {
                    if (!obj16.isChannelMuted(channel.guild_id, channel.id)) {
                      if (obj16.resolvedMessageNotifications(channel) === constants10.ALL_MESSAGES) {
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
    ({ messageId, immediate } = force);
    if (immediate === undefined) {
      immediate = false;
    }
    let flag = force.force;
    if (flag === undefined) {
      flag = false;
    }
    ({ context, location: _location } = force);
    value = ReadState.get(force.channelId);
    let flag2 = value.ack({ messageId, local: context !== closure_1_41, immediate, force: flag, isExplicitUserAction: true, location: _location, trackAnalytics: true });
    if (null != messageId) {
      value.rebuildChannelState();
      flag2 = true;
    }
    return flag2;
  },
  CHANNEL_LOCAL_ACK: function handleChannelLocalAck(channelId) {
    value = ReadState.get(channelId.channelId);
    return value.ack({ messageId: "HermesInternal", local: "HermesInternal", immediate: "PX_16", force: "krisp", isExplicitUserAction: "MESSAGE_NOTIFICATION_SHOWN", trackAnalytics: null });
  },
  CHANNEL_PINS_ACK: function handleChannelPinsAck(channelId) {
    value = ReadState.get(channelId.channelId);
    return value.ackPins(channelId.timestamp);
  },
  CHANNEL_PINS_UPDATE: function handleChannelPinsUpdate(lastPinTimestamp) {
    lastPinTimestamp = lastPinTimestamp.lastPinTimestamp;
    value = ReadState.get(lastPinTimestamp.channelId);
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
    currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      value = ReadState.get(channel.id);
      let ackMessageId = value.ackMessageId;
      if (ackMessageId == null) {
        let obj1 = require("SnowflakeUtils");
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
      let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL, objectType: constants.ACK_AUTOMATIC };
      let flag8 = false;
      if (null != channelId) {
        value2 = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value2, undefined);
        if (ackResult) {
          obj = { trackAnalytics: true, location: null };
          obj.location = obj;
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
      obj1 = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR, objectType: constants.ACK_AUTOMATIC };
      let flag9 = false;
      if (null != currentSidebarChannelId) {
        const value3 = ReadState.get(currentSidebarChannelId);
        let ackResult1 = shouldAutomaticallyAck(value3, undefined);
        if (ackResult1) {
          const obj2 = { trackAnalytics: true, location: obj1 };
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
    value = ReadState.get(channelId);
    let ackMessageId = value.ackMessageId;
    if (ackMessageId == null) {
      ackMessageId = require("SnowflakeUtils").fromTimestamp(value.getAckTimestamp());
      const obj3 = require("SnowflakeUtils");
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
        obj.location = obj;
        value1.ack(obj);
      }
    }
    return true;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      value = ReadState.get(channelId);
      if (!value.hasMentions()) {
        value.oldestUnreadMessageId = null;
        let obj = { isExplicitUserAction: true, trackAnalytics: true, location: null };
        obj = { section: constants3.CHANNEL, object: constants2.ACK_VOICE_CHANNEL_SELECT, objectType: constants.ACK_SEMI_AUTOMATIC };
        obj.location = obj;
        return value.ack(obj);
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (closure_1_17(channel.type)) {
      value = ReadState.get(channel.id);
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
    channel = channel.channel;
    if (set.has(channel.type)) {
      value = ReadState.get(channel.id);
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
      if (channel.ownerId === AuthenticationStore.getId()) {
        value.loadedMessages = true;
      }
    }
    const parent_id = channel.parent_id;
    ReadState.get(parent_id).lastMessageId = channel.id;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      obj2.get(channel.id)._persisted = true;
      let obj = { channelId: parent_id, messageId: channel.id, manual: false };
      ({ messageId, manual, newMentionCount } = obj);
      value = obj2.get(obj.channelId);
      if (manual) {
        value.rebuildChannelState(messageId, true, newMentionCount);
        value.clearOutgoingAck();
      } else if (messageId !== value._ackMessageId) {
        obj = { messageId, local: true, trackAnalytics: false };
        value.ack(obj);
      }
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    let syncThreadSettingsResult = set.has(channel.type);
    if (syncThreadSettingsResult) {
      value = ReadState.get(channel.id);
      syncThreadSettingsResult = value.syncThreadSettings();
    }
    return syncThreadSettingsResult;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        value = ReadState.get(type.id);
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
        value._isJoinedThread = JoinedThreadsStore.hasJoined(type.id);
        if (type.isForumPost()) {
          value = obj.get(type.parent_id);
          if (obj2.compare(value.lastMessageId, type.id) < 0) {
            value.lastMessageId = type.id;
          }
          obj2 = require("SnowflakeUtils");
        }
        obj = ReadState;
      }
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(id) {
    value = ReadState.get(id.id);
    return value.syncThreadSettings();
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    let result = ThreadActionUtils.doesThreadMembersActionAffectMe(id);
    if (result) {
      value = ReadState.get(id.id);
      result = value.syncThreadSettings();
    }
    return result;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  WINDOW_FOCUS: function handleWindowFocus(arg0) {
    const windowId = arg0;
    merged.forEachChannel((arg0, has) => {
      if (has.has(windowId.windowId)) {
        let focused = windowId.focused;
        flag = false;
        if (null != arg0) {
          let obj = ReadState;
          value = ReadState.get(arg0);
          if (!focused) {
            focused = value.hasUnread();
          }
          if (!focused) {
            value.oldestUnreadMessageIdStale = true;
          }
          obj = { section: constants3.CHANNEL, object: constants2.ACK_WINDOW_FOCUS, objectType: constants.ACK_AUTOMATIC };
          let flag3 = false;
          if (null != arg0) {
            value = obj.get(arg0);
            let ackResult = shouldAutomaticallyAck(value, undefined);
            if (ackResult) {
              obj = { trackAnalytics: true, location: null };
              obj.location = obj;
              ackResult = value.ack(obj);
            }
            flag3 = ackResult;
          }
          flag = flag3;
        }
      }
    });
    return false;
  },
  UPDATE_CHANNEL_DIMENSIONS: function handleScroll(channelId) {
    channelId = channelId.channelId;
    let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SCROLL, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, tmp);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj.location = obj;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    token = null;
  },
  BULK_ACK: function handleBulkAck(arg0) {
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
          hasUnreadOrMentionsResult = readStateStoreClass.hasUnreadOrMentions(channelId.channelId, channelId.readStateType);
        }
        tmp2 = hasUnreadOrMentionsResult;
      }
      return tmp2;
    });
    const item = found.forEach((messageId) => {
      value = ReadState.get(messageId.channelId, messageId.readStateType);
      value.ack({ messageId: messageId.messageId, local: true, immediate: "HermesInternal", force: "PX_16", isExplicitUserAction: "describe", trackAnalytics: "boolean" });
    });
    if (context === closure_1_41) {
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
    ({ channelId, windowId } = arg0);
    return false;
  },
  DISABLE_AUTOMATIC_ACK: function handleDisableAutomaticAck(arg0) {
    ({ channelId, windowId } = arg0);
    return false;
  },
  REGISTER_VISIBLE_INLINE_CHANNEL: function handleRegisterVisibleInlineChannel(channelId) {
    channelId = channelId.channelId;
    let obj = visibleInlineChannels;
    const result = obj.registerVisibleInlineChannel(channelId, channelId.windowId);
    obj = { section: constants3.CHANNEL, object: constants2.ACK_MESSAGE_VIEWED, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj.location = obj;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  UNREGISTER_VISIBLE_INLINE_CHANNEL: function handleUnregisterVisibleInlineChannel(arg0) {
    ({ channelId, windowId } = arg0);
    const result = visibleInlineChannels.unregisterVisibleInlineChannel(channelId, windowId);
    return false;
  },
  GUILD_FEATURE_ACK: handleGuildFeatureAck,
  GUILD_SCHEDULED_EVENT_CREATE: function handleGuildScheduledEventCreate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    value = ReadState.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
    value.lastMessageId = guildScheduledEvent.id;
    const currentUser = UserStore.getCurrentUser();
    if (tmp4) {
      const obj = { type: "GUILD_FEATURE_ACK", id: guild_id, ackType: ReadStateTypes.GUILD_EVENT, ackedId: guildScheduledEvent.id, local: false };
      handleGuildFeatureAck(obj);
    } else if (!UserGuildSettingsStore.isMuteScheduledEventsEnabled(guild_id)) {
      value.mentionCount = value.mentionCount + 1;
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const currentUser = UserStore.getCurrentUser();
    let tmp3 = !tmp2;
    if (!(null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id)) {
      const items = [, ];
      ({ CANCELED: arr[0], COMPLETED: arr[1] } = GuildScheduledEventStatus);
      const hasItem = items.includes(guildScheduledEvent.status);
      if (hasItem) {
        value = ReadState.get(guild_id, ReadStateTypes.GUILD_EVENT);
        const result = value.handleGuildEventRemoval(guild_id, guildScheduledEvent.id);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleGuildScheduledEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const currentUser = UserStore.getCurrentUser();
    if (tmp2) {
      return false;
    } else {
      value = ReadState.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
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
      value = ReadState.get(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
      value._guildId = guild.id;
      value.lastMessageId = latest_onboarding_question_id;
    }
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    channelId = channelId.channelId;
    let obj = { section: constants3.CHANNEL, object: constants2.ACK_RESORT_THREADS, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        obj = { trackAnalytics: true, location: null };
        obj.location = obj;
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    channelId = channelId.channelId;
    if (channelId.chatOpen) {
      let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN, objectType: constants.ACK_AUTOMATIC };
      let flag = false;
      if (null != channelId) {
        value = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value, undefined);
        if (ackResult) {
          obj = { trackAnalytics: true, location: null };
          obj.location = obj;
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
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      value.lastMessageId = item.id;
      if (NotificationCenterItemsStore.tabFocused) {
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
              lastMessageId = require("SnowflakeUtils").fromTimestamp(value.getAckTimestamp());
              const obj2 = require("SnowflakeUtils");
            }
            const obj = { messageId: lastMessageId, local: false, trackAnalytics: false };
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
    const currentUser = UserStore.getCurrentUser();
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
      value = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
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
        num2 = require("SnowflakeUtils").extractTimestamp(value.ackMessageId);
        const obj4 = require("SnowflakeUtils");
      }
      if (num2 < time) {
        value.lastMessageId = require("SnowflakeUtils").fromTimestamp(time);
        if (NotificationCenterItemsStore.tabFocused) {
          value = obj.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
          if (tmp15) {
            if (tmp16) {
              let lastMessageId = value.lastMessageId;
              if (lastMessageId == null) {
                lastMessageId = tmp20(11).fromTimestamp(value.getAckTimestamp());
                const tmp20Result = tmp20(11);
              }
              obj = { messageId: lastMessageId, local: false, trackAnalytics: false };
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
        const obj8 = require("SnowflakeUtils");
        tmp20 = importDefault;
      }
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else if (relationship.relationship.type !== constants8.PENDING_INCOMING) {
      return false;
    } else {
      value = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      const date = new Date(relationship.relationship.since);
      let num = 0;
      const time = date.getTime();
      if (null != value.ackMessageId) {
        num = require("SnowflakeUtils").extractTimestamp(value.ackMessageId);
        const obj = require("SnowflakeUtils");
      }
      if (num <= time) {
        const _Math = Math;
        value.mentionCount = Math.max(0, value.mentionCount - 1);
      }
    }
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleNotificationCenterItemAck(ids) {
    ids = ids.ids;
    let ackMessageId;
    if (!ids.optimistic) {
      if (!NotificationCenterItemsStore.active) {
        const currentUser = UserStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (null == id) {
          return false;
        } else {
          ackMessageId = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
          const item = ids.forEach((item) => {
            if (obj.compare(ackMessageId.ackMessageId, item) < 0) {
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
    ({ ackedId, local } = ackType);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      value = ReadState.get(id, ackType.ackType);
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
            ackedId = require("SnowflakeUtils").fromTimestamp(value.getAckTimestamp());
            const obj2 = require("SnowflakeUtils");
          }
          const obj = { messageId: ackedId, local: null, trackAnalytics: false };
          if (local == null) {
            local = true;
          }
          obj.local = local;
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
      let tmp2 = nextResult;
      value = ReadState.get(nextResult.id);
      let tmp5 = value;
      let tmp7 = parseTimestamp(nextResult.lastPinTimestamp);
      let tmp8 = value.lastMessageId === nextResult.lastMessageId;
      if (tmp8) {
        tmp8 = tmp5.lastPinTimestamp === tmp7;
      }
      if (!tmp8) {
        flag = true;
        tmp5.lastMessageId = tmp2.lastMessageId;
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
      value = ReadState.get(channelId);
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
      value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        const obj = { trackAnalytics: true, location: tmp };
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  MESSAGE_REQUEST_ACK: function handleMessageRequestAck(ackedId) {
    ackedId = ackedId.ackedId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      value = ReadState.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (ackedId === value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = ackedId;
        const obj = { messageId: ackedId, isExplicitUserAction: true, trackAnalytics: false };
        value.ack(obj);
      }
    }
  },
  MESSAGE_REQUEST_CLEAR_ACK: function handleMessageRequestClearAck() {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      value = ReadState.get(id, ReadStateTypes.MESSAGE_REQUESTS);
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
      let obj = { section: constants3.CHANNEL, object: constants2.ACK_APP_FOREGROUND, objectType: constants.ACK_AUTOMATIC };
      channelId = SelectedChannelStore.getChannelId();
      let flag = false;
      if (null != channelId) {
        value = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value, undefined);
        if (ackResult) {
          obj = { trackAnalytics: true, location: null };
          obj.location = obj;
          ackResult = value.ack(obj);
        }
        flag = ackResult;
      }
      tmp = flag;
    }
    return tmp;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/ReadStateStore.tsx");

export default readStateStoreClass;
export { shouldBadgeMessage };
export { isNonMutedPrivateMessage };
export { ReadState };