// === Module 4911: ReadStateStore ===

// Module 4911 (ReadStateStore)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import _modDef4467 from "module_4467" /* 4467 */;
import ThreadActionUtils from "ThreadActionUtils" /* 4523 */;
import BasicPermissionUtilsDefault from "BasicPermissionUtils" /* 4524 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import isMessageMentioned from "isMessageMentioned" /* 5316 */;
import IOSPushNotificationRawPayloadFixExperiment from "IOSPushNotificationRawPayloadFixExperiment" /* 5441 */;
import GuildScheduledEventStore2 from "GuildScheduledEventStore" /* 7050 */;
import isOptInEnabled from "isOptInEnabled" /* 7059 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7134 */;
import isChangelogChannelDefault from "isChangelogChannel" /* 7530 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10028 */;
import ThreadNotificationSettings from "ThreadNotificationSettings" /* 11082 */;
import isChannelFocused from "isChannelFocused" /* 11839 */;
import OverlaySupported from "OverlaySupported" /* 13663 */;
import OverlayVisibility from "OverlayVisibility" /* 13664 */;
import networkAwareRetryDefault from "networkAwareRetry" /* 13665 */;
import MessageRequestUtils from "MessageRequestUtils" /* 13666 */;
import visibleInlineChannels from "visibleInlineChannels" /* 13668 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import MessageRequestStore from "MessageRequestStore" /* 6734 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6735 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7137 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5699 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6793 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DimensionStore from "DimensionStore" /* 5437 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5625 */;
import GuildStore from "GuildStore" /* 2074 */;
import IdleStore from "IdleStore" /* 5574 */;
import MessageStore from "MessageStore" /* 5116 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import WindowStore from "WindowStore" /* 13662 */;
import Constants from "Constants" /* 1085 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const isMessageMentionedDefault = isMessageMentioned;
const GuildScheduledEventStore = GuildScheduledEventStore2;
let c6, dependencyMap;

let BasicPermissions;
let OverlayWidgets;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
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
let closure_55;
const f89616 = () => {
  obj = DispatcherDefault;
  obj.dispatch({ type: "DECAY_READ_STATES" });
};
const f89619 = (type) => {
  let last_pin_timestamp;
  if (closure_1_18(type.type)) {
    const value = closure_1_84.get(type.id);
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
    const hasFlag = closure_1_0(closure_1_2[52]).hasFlag;
    closure_1_0(closure_1_2[52]);
    if (num3 == null) {
      num3 = 0;
    }
    value._isResourceChannel = hasFlag(num3, constants.IS_GUILD_RESOURCE_CHANNEL);
    if (set.has(type.type)) {
      value.syncThreadSettings();
    }
  }
};
function generateOldThreadCutoff() {
  obj = require("SnowflakeUtils");
  return obj.fromTimestamp(Date.now() - closure_72);
}
function setDecayedReadStateTimer() {
  let timeout;
  const timestamp = Date.now();
  closure_74 = timestamp - 7 * DurationsDefault.Millis.DAY;
  const timestamp1 = Date.now();
  closure_75 = timestamp1 - 3 * DurationsDefault.Millis.DAY;
  clearTimeout(timeout);
  timeout = setTimeout(f89616, DurationsDefault.Millis.HOUR);
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
    if (tmp4) {
      obj = { message: channel_id, userId: id.id, suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(channel.guild_id), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(channel.guild_id) };
      const tmp8 = isMessageMentionedDefault;
      let tmp8Result = tmp8(obj);
      if (!tmp8Result) {
        tmp8Result = null != channel && channel.isPrivate() && !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        null != channel && channel.isPrivate() && !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      tmp4 = tmp8Result;
    }
    tmp = tmp4;
  }
  return tmp;
}
function processBulkAckQueue() {
  return obj(...arguments);
}
let obj = function _processBulkAckQueue() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1;
            if (0 === navigation.length) {
              c69 = false;
              if (closure_0 != null) {
                closure_0();
              }
              c6 = 3;
              const obj4 = { value: undefined, done: true };
              return obj4;
            } else {
              c69 = true;
              closure_1 = navigation.splice(0, 100);
              c4 = 1;
              c5 = 3;
              c6 = 1;
              const obj5 = {
                value: networkAwareRetryDefault(() => {
                            let body;
                            const HTTP = closure_2_0(closure_2_2[42]).HTTP;
                            const request = { url: constants.BULK_ACK, body, oldFormErrors: true, rejectWithError: false };
                            body = { read_states };
                            return HTTP.post(request);
                          }),
                done: false
              };
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_68.length = 0;
          c69 = false;
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_130_80(closure_0);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c5 = 2;
          c6 = 1;
          const obj8 = { value: obj.timeoutPromise(1000), done: false };
          obj = closure_130_0(closure_130_2[43]);
          return obj8;
        }
      } catch (tmp20) {
        let closure_3 = tmp20;
        if (0 === c4) {
          c6 = 3;
          throw tmp20;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
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
    const currentUser1 = UserStore.getCurrentUser();
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
      if (EmbeddedActivitiesStore.getActivityPanelMode() === constants13.PANEL) {
        if (EmbeddedActivitiesStore.getFocusedLayout() === constants14.NO_CHAT) {
          const currentUser2 = UserStore.getCurrentUser();
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
      const currentUser3 = UserStore.getCurrentUser();
      let hasAnyStaffLevelResult3;
      if (currentUser3 != null) {
        hasAnyStaffLevelResult3 = currentUser3.hasAnyStaffLevel();
      }
      if (hasAnyStaffLevelResult3) {
        logger.log("STAFF-ACK-LOG:", "Is idle", value.channelId);
      }
      return false;
    } else if (value.canTrackUnreads()) {
      if (null != channel) {
        if (closure_17(channel.type)) {
          if (ChannelSectionStore.getCurrentSidebarChannelId(channel.id) !== channel.id) {
            const currentUser4 = UserStore.getCurrentUser();
            let hasAnyStaffLevelResult4;
            if (currentUser4 != null) {
              hasAnyStaffLevelResult4 = currentUser4.hasAnyStaffLevel();
            }
            if (hasAnyStaffLevelResult4) {
              logger.log("STAFF-ACK-LOG:", "Sidebar chat closed", value.channelId);
            }
            return false;
          }
        }
      }
      let isForumLikeChannelResult;
      if (channel != null) {
        isForumLikeChannelResult = channel.isForumLikeChannel();
      }
      if (true !== isForumLikeChannelResult) {
        const obj5 = DiscordAppStateDefault;
        if (obj5.getState() !== constants12.ACTIVE) {
          const currentUser5 = UserStore.getCurrentUser();
          let hasAnyStaffLevelResult5;
          if (currentUser5 != null) {
            hasAnyStaffLevelResult5 = currentUser5.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult5) {
            logger.log("STAFF-ACK-LOG:", "App not active", value.channelId);
          }
          return false;
        }
      }
      if (tmp4) {
        if (!value._persisted) {
          const currentUser6 = UserStore.getCurrentUser();
          let hasAnyStaffLevelResult6;
          if (currentUser6 != null) {
            hasAnyStaffLevelResult6 = currentUser6.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult6) {
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
          const currentUser7 = UserStore.getCurrentUser();
          let hasAnyStaffLevelResult7;
          if (currentUser7 != null) {
            hasAnyStaffLevelResult7 = currentUser7.hasAnyStaffLevel();
          }
          if (hasAnyStaffLevelResult7) {
            logger.log("STAFF-ACK-LOG:", "Forum-like channel", value.channelId);
          }
          return false;
        } else {
          let flag6;
          if (!tmp4) {
            if (!DimensionStore.isAtBottom(value.channelId)) {
              const currentUser8 = UserStore.getCurrentUser();
              let hasAnyStaffLevelResult8;
              if (currentUser8 != null) {
                hasAnyStaffLevelResult8 = currentUser8.hasAnyStaffLevel();
              }
              if (hasAnyStaffLevelResult8) {
                logger.log("STAFF-ACK-LOG:", "Not at bottom", value.channelId);
              }
              return false;
            }
          }
          const layout = ChannelRTCStore.getLayout(value.channelId);
          if (!ChannelRTCStore.getChatOpen(value.channelId)) {
            const currentUser9 = UserStore.getCurrentUser();
            let hasAnyStaffLevelResult9;
            if (currentUser9 != null) {
              hasAnyStaffLevelResult9 = currentUser9.hasAnyStaffLevel();
            }
            if (hasAnyStaffLevelResult9) {
              logger.log("STAFF-ACK-LOG:", "Fullscreen video", value.channelId);
            }
            return false;
          }
          const messages = MessageStore.getMessages(value.channelId);
          if (null != messages) {
            if (messages.ready) {
              if (!messages.loadingMore) {
                const obj10 = isChannelFocused;
                const result = obj10.isChannelFocusedForReadStateAck(value.channelId, arg1);
                const currentUser10 = UserStore.getCurrentUser();
                if (result) {
                  let hasAnyStaffLevelResult10;
                  if (currentUser10 != null) {
                    hasAnyStaffLevelResult10 = currentUser10.hasAnyStaffLevel();
                  }
                  flag6 = true;
                  if (hasAnyStaffLevelResult10) {
                    logger.log("STAFF-ACK-LOG:", "Acked", value.channelId);
                    flag6 = true;
                  }
                } else {
                  let hasAnyStaffLevelResult11;
                  if (currentUser10 != null) {
                    hasAnyStaffLevelResult11 = currentUser10.hasAnyStaffLevel();
                  }
                  flag6 = false;
                  if (hasAnyStaffLevelResult11) {
                    logger.log("STAFF-ACK-LOG:", "Chat not focused", value.channelId);
                    flag6 = false;
                  }
                }
              }
              return flag6;
            }
          }
          const currentUser11 = UserStore.getCurrentUser();
          let hasAnyStaffLevelResult12;
          if (currentUser11 != null) {
            hasAnyStaffLevelResult12 = currentUser11.hasAnyStaffLevel();
          }
          flag6 = false;
          if (hasAnyStaffLevelResult12) {
            logger.log("STAFF-ACK-LOG:", "Still loading messages", value.channelId);
            flag6 = false;
          }
        }
      } else {
        const currentUser12 = UserStore.getCurrentUser();
        let hasAnyStaffLevelResult13;
        if (currentUser12 != null) {
          hasAnyStaffLevelResult13 = currentUser12.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult13) {
          logger.log("STAFF-ACK-LOG:", "No unread or mentions", value.channelId);
        }
        return false;
      }
    } else {
      const currentUser13 = UserStore.getCurrentUser();
      let hasAnyStaffLevelResult14;
      if (currentUser13 != null) {
        hasAnyStaffLevelResult14 = currentUser13.hasAnyStaffLevel();
      }
      if (hasAnyStaffLevelResult14) {
        logger.log("STAFF-ACK-LOG:", "Cannot track unreads", value.channelId);
      }
      return false;
    }
  }
}
function mergeChannels(initialPrivateChannels) {
  const item = initialPrivateChannels.forEach((type) => {
    let lastPinTimestamp;
    if (closure_1_18(type.type)) {
      const value = ReadState.get(type.id);
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
  let tmp3;
  _require = guild;
  const threads = guild.threads;
  if (threads != null) {
    const item = threads.forEach((type) => {
      let lastPinTimestamp;
      if (set.has(type.type)) {
        const value = ReadState.get(type.id);
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
          obj = require("SnowflakeUtils");
          value.ackMessageId = obj.fromTimestamp(getThreadAckMessageTimestamp(guild.id, type.id));
        }
        if (null == value.ackPinTimestamp) {
          value.ackPinTimestamp = getThreadAckMessageTimestamp(guild.id, type.id);
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
    _require = 0;
    id = null;
    let _ackMessageId = value._ackMessageId;
    if (_ackMessageId == null) {
      const obj3 = require("SnowflakeUtils");
      _ackMessageId = obj3.fromTimestamp(value.getAckTimestamp());
    }
    const prop1 = guild.guild_scheduled_events;
    const item1 = prop1.forEach((id) => {
      obj = require("SnowflakeUtils");
      if (obj.compare(id.id, id) > 0) {
        id = id.id;
      }
      const tmpResult = require("SnowflakeUtils");
      if (tmpResult.compare(id.id, _ackMessageId) > 0) {
        closure_0 = closure_0 + 1;
      }
    });
    value.lastMessageId = id;
    value.mentionCount = _require;
    tmp3 = ReadStateTypes;
    obj = ReadState;
  } else {
    obj = ReadState;
    tmp3 = ReadStateTypes;
  }
  const value3 = obj.get(guild.id, tmp3.GUILD_HOME);
  const fromTimestamp = require("SnowflakeUtils").fromTimestamp;
  require("SnowflakeUtils");
  const tmp13 = _modDef4467;
  const tmp13Result = tmp13(Date.now());
  const subtractResult = tmp13Result.subtract(24, "h");
  value3.lastMessageId = fromTimestamp(subtractResult.valueOf());
  guild = GuildStore.getGuild(guild.id);
  if (null != guild) {
    let prop2;
    if (guild != null) {
      prop2 = guild.latestOnboardingQuestionId;
    }
    if (null != prop2) {
      const value4 = obj.get(guild.id, tmp3.GUILD_ONBOARDING_QUESTION);
      value4._guildId = guild.id;
      value4.lastMessageId = prop2;
    }
  }
}
function mergeRelationships(relationships) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    const ackMessageId = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
    const item = relationships.forEach(function(since) {
      if (null != since.since) {
        if (since.type === constants.PENDING_INCOMING) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(since.since);
          const time = date.getTime();
          let num = 0;
          if (null != ackMessageId.ackMessageId) {
            obj = require("SnowflakeUtils");
            num = obj.extractTimestamp(ackMessageId.ackMessageId);
          }
          if (num < time) {
            ackMessageId.mentionCount = ackMessageId.mentionCount + 1;
            const obj2 = require("SnowflakeUtils");
            ackMessageId.lastMessageId = obj2.fromTimestamp(time);
          }
        }
      }
    });
  }
}
function getThreadAckMessageTimestamp(id, id2) {
  let tmp = id;
  const channel = ChannelStore.getChannel(id2);
  const getGuild = GuildStore.getGuild;
  if (id == null) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp = guild_id;
  }
  const guild = getGuild(tmp);
  let isForumPostResult;
  if (channel != null) {
    isForumPostResult = channel.isForumPost();
  }
  let num = 0;
  if (!isForumPostResult) {
    if (null != guild) {
      let joinedAt;
      if (null != guild.joinedAt) {
        const _Date4 = Date;
        const joinedAt2 = guild.joinedAt;
        if (guild.joinedAt instanceof Date) {
          const time = joinedAt2.getTime();
          const _isNaN2 = isNaN;
          joinedAt = time;
        } else if (typeof joinedAt2 === "string") {
          const _Date = Date;
          const self = this;
          const self2 = this;
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
      num = joinedAt;
    }
    const _Date2 = Date;
    joinedAt = Date.now();
  }
  const joinTimestampResult = JoinedThreadsStore.joinTimestamp(id2);
  let num2;
  if (joinTimestampResult != null) {
    num2 = joinTimestampResult.getTime();
  }
  if (num2 == null) {
    num2 = 0;
  }
  const diff = num2 - 5000;
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
    const _Date3 = Date;
    const self3 = this;
    const self4 = this;
    const date1 = new Date(archiveTimestamp);
    num4 = date1.getTime() - 1;
  }
  if (isNaN(num4)) {
    num4 = 0;
  }
  let bound = Math.max(num3, num4);
  if (bound <= 0) {
    const obj5 = require("SnowflakeUtils");
    bound = obj5.extractTimestamp(id2) - 1;
  }
  let isNaNResult = isNaN(bound);
  let num7 = bound;
  if (!isNaNResult) {
    isNaNResult = num7 <= 0;
  }
  if (isNaNResult) {
    num7 = 0;
  }
  let bound1 = num7;
  if (!isNaN(num)) {
    const _Math = Math;
    bound1 = Math.max(num, num7);
  }
  return bound1;
}
function clearDeleteOldReadStatesTimer() {
  if (null != c70) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c70);
  }
}
function mergeChannelTimestampUpdates(channelTimestampUpdates) {
  const iter = channelTimestampUpdates[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let value = ReadState.get(nextResult.id);
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
  let flag;
  currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
  if (currentSidebarChannelId !== currentSidebarChannelId) {
    let flag2 = false;
    if (null != currentSidebarChannelId) {
      const value = ReadState.get(tmp2);
      let flag3 = !value.hasUnread();
      value.hasUnread();
      if (flag3) {
        value.oldestUnreadMessageId = null;
        flag3 = true;
      }
      flag2 = flag3;
    }
    const tmp10 = currentSidebarChannelId !== currentSidebarChannelId && null != currentSidebarChannelId;
    if (tmp10) {
      set.delete(currentSidebarChannelId);
    }
    flag = flag2;
  } else {
    const location = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SECTION_STORE_UPDATE, objectType: constants.ACK_AUTOMATIC };
    flag = false;
    if (null != currentSidebarChannelId) {
      const value2 = ReadState.get(currentSidebarChannelId);
      let ackResult = shouldAutomaticallyAck(value2, undefined);
      if (ackResult) {
        const obj2 = { trackAnalytics: true, location };
        ackResult = value2.ack(obj2);
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
    let ackResult = null != value.lastMessageId || 0 !== value.mentionCount;
    if (ackResult) {
      if (ackedId == null) {
        ackedId = value.lastMessageId;
      }
      if (ackedId == null) {
        const obj2 = require("SnowflakeUtils");
        ackedId = obj2.fromTimestamp(value.getAckTimestamp());
      }
      const ack = value.ack;
      obj = { messageId: ackedId, local, trackAnalytics: false };
      if (local == null) {
        local = true;
      }
      ackResult = ack(obj);
    }
    tmp = ackResult;
  }
  return tmp;
}
const isEventUpcoming = GuildScheduledEventStore2.isEventUpcoming;
({ isChannelChatInSidebar: closure_17, isReadableType: closure_18, isThread: closure_19, isPrivate: closure_20, ALL_CHANNEL_TYPES: closure_21, THREAD_CHANNEL_TYPES: closure_22 } = ChannelRecord);
({ AnalyticsObjectTypes: closure_37, AnalyticsObjects: closure_38, AnalyticsSections: closure_39, Endpoints: closure_40, ChannelLayouts: closure_41, OverlayWidgets, CURRENT_APP_CONTEXT: closure_42, ChannelTypes: closure_43, BasicPermissions } = Constants);
({ Permissions: closure_45, MessageTypes: closure_46, RelationshipTypes: closure_47, ChannelTypesSets: closure_48, UserNotificationSettings: closure_49, MessageTypesSets: closure_50, AppStates: closure_51 } = Constants);
({ ActivityPanelModes: closure_52, FocusedActivityLayouts: closure_53 } = ActivityPanelConstants);
({ ChannelFlags: closure_54, isStaticChannelRoute: closure_55 } = ChannelConstants);
const GuildScheduledEventStatus = GuildScheduledEventsConstants.GuildScheduledEventStatus;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const ThreadMemberFlags = ThreadConstants.ThreadMemberFlags;
let tmp6 = new LoggerDefault("ReadStateStore");
const integrations = tmp6;
function isOverlayChannelVisible() {
  return false;
}
if (OverlaySupported.OVERLAY_SUPPORTED) {
  isOverlayChannelVisible = OverlayVisibility.isOverlayChannelVisible;
}
function handleMessageDelete(channelId) {
  const value = ReadState.get(channelId.channelId);
  value.rebuildChannelState();
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach(f89619);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((item) => {
    let messages;
    let threads;
    ({ messages, threads } = item);
    item = messages.forEach((arr) => {
      const mapped = arr.map((thread) => thread.thread);
      const found = mapped.filter(closure_1_0(closure_1_2[55]).isNotNullish);
      const item = found.forEach(f89619);
    });
    const item1 = threads.forEach(f89619);
  });
}
function handleChannelDelete(channel) {
  return ReadState.clear(channel.channel.id);
}
let closure_61 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
function isNonMutedPrivateMessage(isPrivate) {
  const tmp = null != isPrivate && isPrivate.isPrivate() && !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(isPrivate.guild_id, isPrivate.id);
  return tmp;
}
function handleMessageAck(arg0) {
  let flag;
  let manual;
  let messageId;
  let newMentionCount;
  ({ channelId, messageId } = arg0);
  ({ manual, newMentionCount } = arg0);
  const value = ReadState.get(channelId);
  if (manual) {
    const tmp2 = channelId !== channelId && channelId !== currentSidebarChannelId;
    if (!tmp2) {
      set.add(channelId);
    }
    value.rebuildChannelState(messageId, true, newMentionCount);
    value.clearOutgoingAck();
    flag = true;
  } else {
    flag = messageId !== value._ackMessageId;
    if (flag) {
      obj = { messageId, local: true, trackAnalytics: false };
      flag = value.ack(obj);
    }
  }
  return flag;
}
let channelId = SelectedChannelStore.getChannelId();
let currentSidebarChannelId = null;
let id = null;
let token = null;
let set = new Set();
let c67 = false;
const navigation = [];
let c69 = false;
let c70 = null;
class AutoAckableChannelTracker {
  constructor() {
    merged = Object.assign({ channelWindowIds: null });
    merged[0] = {};
    return merged;
  }
  addWindowId(arg0, arg1) {
    const self = this;
    if (null == this.channelWindowIds[arg0]) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      const channelWindowIds = self.channelWindowIds;
      channelWindowIds[arg0] = new Set();
      set = new Set();
    }
    obj = self.channelWindowIds[arg0];
    obj.add(arg1);
  }
  hasWindowId(arg0, arg1) {
    let hasItem = null != this.channelWindowIds[arg0];
    if (hasItem) {
      obj = tmp.channelWindowIds[arg0];
      hasItem = obj.has(arg1);
    }
    return hasItem;
  }
  isChannelAckable(arg0) {
    return null != this.channelWindowIds[arg0] && this.channelWindowIds[arg0].size > 0;
  }
  getAllWindowIds(arg0) {
    let items;
    if (null == this.channelWindowIds[arg0]) {
      items = [];
    } else {
      const _Array = Array;
      items = Array.from(tmp.channelWindowIds[arg0]);
    }
    return items;
  }
  getAllChannelIdsForWindowId(arg0) {
    let obj3;
    let tmp6;
    set = new Set();
    const obj2 = require("SnowflakeUtils");
    const entries = obj2.entries(this.channelWindowIds);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, obj3] = tmp5;
      if (obj3.has(arg0)) {
        let addResult = set.add(tmp6);
      }
      continue;
    }
    return Array.from(set);
  }
  isAnyWindowFocused(arg0) {
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
  }
  removeWindowId(arg0, arg1) {
    const self = this;
    if (null != this.channelWindowIds[arg0]) {
      obj = self.channelWindowIds[arg0];
      obj.delete(arg1);
      if (0 === self.channelWindowIds[arg0].size) {
        delete self.channelWindowIds[tmp];
      }
    }
  }
  forEachChannel(fn) {
    obj = require("SnowflakeUtils");
    const entries = obj.entries(this.channelWindowIds);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let tmp6 = fn(tmp5[0], tmp5[1]);
      continue;
    }
  }
}
const prototype = AutoAckableChannelTracker.prototype;
let merged = Object.assign({ channelWindowIds: null });
merged[0] = {};
let closure_72 = 30 * DurationsDefault.Millis.DAY;
let closure_74 = 0;
let closure_75 = 0;
let closure_76 = null;
const constants = { IS_GUILD_CHANNEL: 1, [1]: "IS_GUILD_CHANNEL", IS_THREAD: 2, [2]: "IS_THREAD", IS_MENTION_LOW_IMPORTANCE: 4, [4]: "IS_MENTION_LOW_IMPORTANCE" };
class ReadState {
  constructor(channelId) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    merged = Object.assign({ type: null, outgoingAckTimer: null, ackMessageIdAtChannelSelect: null, ackedWhileCached: "Array" });
    merged[0] = ReadStateTypes.CHANNEL;
    merged.channelId = channelId;
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
  static forEach(fn) {
    const _readStates = ReadState._readStates;
    const values = _readStates.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let values2 = nextResult.values();
      for (const item10017 of values2) {
        if (false === fn(item10017)) {
          obj2.return();
          break;
        }
        continue;
      }
      continue;
    }
  }
  static get(channelId) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    const _readStates = ReadState._readStates;
    const value = _readStates.get(CHANNEL);
    let value3;
    if (value != null) {
      value3 = value.get(channelId);
    }
    if (null == value3) {
      const self3 = this;
      if (typeof ReadState === "function") {
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
        merged.ackPinTimestamp = 0;
        merged.lastPinTimestamp = 0;
        merged._oldestUnreadMessageId = null;
        merged.oldestUnreadMessageIdStale = false;
        merged.estimated = false;
        merged._unreadCount = 0;
        merged._mentionCount = 0;
        merged.outgoingAck = null;
        const _readStates2 = ReadState._readStates;
        let value4 = _readStates2.get(CHANNEL);
        if (value4 == null) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          value4 = new Map();
        }
        const result = value4.set(channelId, merged);
        const _readStates3 = ReadState._readStates;
        value3 = merged;
        if (!_readStates3.has(CHANNEL)) {
          const _readStates4 = ReadState._readStates;
          const result1 = _readStates4.set(CHANNEL, value4);
          value3 = merged;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value3;
  }
  static getGuildSentinels(_guildId) {
    const self = this;
    if (null == this._guildReadStateSentinels[_guildId]) {
      self._guildReadStateSentinels[_guildId] = { unreadsSentinel: 0 };
    }
    return self._guildReadStateSentinels[_guildId];
  }
  static resetGuildSentinels() {
    this._guildReadStateSentinels = {};
  }
  static getIfExists(id) {
    let CHANNEL;
    if (CHANNEL === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    const _readStates = ReadState._readStates;
    const value = _readStates.get(CHANNEL);
    let value2;
    if (value != null) {
      value2 = value.get(id);
    }
    return value2;
  }
  static getMentionChannelIds() {
    const items = [];
    const iter = ReadState._mentionChannels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let ifExists = ReadState.getIfExists(nextResult);
      obj = ifExists;
      if (null != ifExists) {
        if (obj.canHaveMentions()) {
          let arr = items.push(tmp2);
          continue;
        }
      }
      let _mentionChannels = ReadState._mentionChannels;
      let deleteResult = _mentionChannels.delete(tmp2);
    }
    return items;
  }
  static getValue(id) {
    let CHANNEL;
    if (CHANNEL === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    let tmp2 = arg3;
    const ifExists = this.getIfExists(id, CHANNEL);
    if (null != ifExists) {
      tmp2 = fn(ifExists);
    }
    return tmp2;
  }
  static clear(arg0) {
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
        const _mentionChannels = ReadState._mentionChannels;
        _mentionChannels.delete(arg0);
      }
      return deleteResult;
    }
  }
  static clearAll() {
    const _readStates = ReadState._readStates;
    _readStates.clear();
    const _mentionChannels = ReadState._mentionChannels;
    _mentionChannels.clear();
  }
  serialize(arg0) {
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
    let flags;
    let lastPinTimestamp;
    let lastViewed;
    let type;
    ({ channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags, lastViewed } = this);
    const tmp5 = arg0;
    if (tmp5) {
      return { channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, loadedMessages: tmp, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _oldestUnreadMessageId: tmp2, oldestUnreadMessageIdStale: tmp3, estimated: tmp4, _mentionCount, flags, lastViewed };
    } else {
      obj = { channelId, type, _guildId, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags };
      const tmp7 = null != lastViewed && lastViewed > 0;
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
  }
  deserializeForOverlay(channelId) {
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
    let lastPinTimestamp;
    let lastViewed;
    let loadedMessages;
    let oldestUnreadMessageIdStale;
    let type;
    const self = this;
    ({ type, _isThread, _isActiveJoinedThread, _isActiveThread, _isJoinedThread, loadedMessages, oldestUnreadMessageIdStale, estimated, _unreadCount, channelId: this.channelId } = channelId);
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
    const tmp4 = self._mentionCount > 0 && self.canHaveMentions();
    if (tmp4) {
      const _mentionChannels2 = ReadState._mentionChannels;
      _mentionChannels2.add(self.channelId);
    }
  }
  incrementGuildUnreadsSentinel() {
    if (null != this._guildId) {
      const guildSentinels = ReadState.getGuildSentinels(tmp._guildId);
      guildSentinels.unreadsSentinel = guildSentinels.unreadsSentinel + 1;
    }
  }
  guessAckMessageId() {
    const self = this;
    const messages = MessageStore.getMessages(this.channelId);
    if (null == this.ackMessageId) {
      if (self.isPrivate()) {
        if (!messages.hasMoreAfter) {
          if (self.hasMentions()) {
            let id2 = null;
            const mentionCount = self.mentionCount;
            const currentUser = UserStore.getCurrentUser();
            const item = messages.forEach((author) => {
              if (closure_1 > 0) {
                let id1;
                id = author.author.id;
                if (id != null) {
                  id1 = id.id;
                }
                if (id !== id1) {
                  closure_1 = closure_1 - 1;
                }
              }
              if (0 === closure_1) {
                id2 = author.id;
                return false;
              }
            }, self, true);
            return id2;
          } else {
            return self.lastMessageId;
          }
        }
      }
    }
    return self.ackMessageId;
  }
  isPrivate() {
    if (this.type !== ReadStateTypes.CHANNEL) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(tmp.channelId);
      const tmp4 = null != channel && channel.isPrivate();
      return tmp4;
    }
  }
  rebuildChannelState(messageId, arg1) {
    let closure_2;
    let closure_3;
    const self = this;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let _ackMessageId = messageId;
    let currentUser;
    let ackTimestamp;
    let closure_4;
    let c5;
    let id2;
    if (messageId == null) {
      _ackMessageId = self._ackMessageId;
    }
    if (_ackMessageId == null) {
      _ackMessageId = self.guessAckMessageId();
    }
    self.ackMessageId = _ackMessageId;
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
        let tmp2;
        const tmp = closure_4;
        if (tmp) {
          id = self._oldestUnreadMessageId;
          if (id == null) {
            id = id.id;
          }
          self.oldestUnreadMessageId = id;
          tmp2 = self;
        } else {
          tmp2 = self;
          closure_4 = id.id === self._ackMessageId;
        }
        obj = require("SnowflakeUtils");
        if (obj.extractTimestamp(id.id) > closure_3) {
          tmp2.unreadCount = tmp2.unreadCount + 1;
          const tmp5 = flag && shouldBadgeMessage(id, closure_2);
          if (tmp5) {
            tmp2.mentionCount = tmp2.mentionCount + 1;
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
        tmp5 = !(closure_4 || c5) && messages.length === self.unreadCount;
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
  }
  handleGuildEventRemoval(guild_id, id) {
    const self = this;
    obj = id(11);
    const tmp = id;
    if (obj.compare(this.ackMessageId, id) < 0) {
      const guildScheduledEventsForGuild = GuildScheduledEventStore.getGuildScheduledEventsForGuild(guild_id);
      const ackTimestamp = self.getAckTimestamp();
      const _isNaN = isNaN;
      if (!isNaN(ackTimestamp)) {
        let _ackMessageId = self._ackMessageId;
        if (_ackMessageId == null) {
          let tmpResult = tmp(11);
          _ackMessageId = tmpResult.fromTimestamp(ackTimestamp);
        }
        id = null;
        dependencyMap = 0;
        const item = guildScheduledEventsForGuild.forEach((id) => {
          if (isEventUpcoming(id)) {
            obj = require("SnowflakeUtils");
            if (obj.compare(id.id, id) > 0) {
              id = id.id;
            }
            const tmpResult = require("SnowflakeUtils");
            if (tmpResult.compare(id.id, _ackMessageId) > 0) {
              closure_2 = closure_2 + 1;
            }
          }
        });
        self.lastMessageId = id;
        self.mentionCount = dependencyMap;
      }
    }
  }
  canTrackUnreads() {
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
        const basicChannel = ChannelStore.getBasicChannel(self.channelId);
        let tmp4 = null != basicChannel;
        if (tmp4) {
          let hasItem;
          if ("basicPermissions" in basicChannel) {
            obj = BasicPermissionUtilsDefault;
            hasItem = obj.has(basicChannel.basicPermissions, BasicPermissions.VIEW_CHANNEL);
          } else {
            const isChannelGatedResult = GatedChannelStore.isChannelGated(self.guildId, self.channelId);
            hasItem = !isChannelGatedResult;
            if (isChannelGatedResult) {
              hasItem = PermissionStore.can(constants6.VIEW_CHANNEL, basicChannel);
            }
          }
          tmp4 = hasItem;
        }
        return tmp4;
      }
    }
  }
  canBeUnread() {
    const self = this;
    if (this._isThread) {
      if (!self._isJoinedThread) {
        return false;
      }
    }
    const items = [MessageRequestStore, SpamMessageRequestStore];
    obj = MessageRequestUtils;
    if (obj.isMessageRequestOrSpamRequest(self.channelId, items)) {
      return false;
    } else {
      if (!self._isThread) {
        const tmpResult = isOptInEnabled;
        if (tmpResult.isOptInEnabledForGuild(self._guildId)) {
          if (self._lastMessageTimestamp < closure_74) {
            return false;
          } else if (!UserGuildSettingsStore.isChannelOrParentOptedIn(self._guildId, self.channelId)) {
            if (!self.hasRecentlyVisitedAndRead()) {
              if (!self.hasMentions()) {
                return false;
              }
            }
          }
        }
      }
      return self.canTrackUnreads();
    }
  }
  canHaveMentions() {
    const self = this;
    let tmp = 0 !== this.mentionCount;
    if (tmp) {
      let tmp3 = !(self._isThread && !self._isJoinedThread);
      if (tmp3) {
        const items = [MessageRequestStore, SpamMessageRequestStore];
        obj = MessageRequestUtils;
        const result = obj.isMessageRequestOrSpamRequest(self.channelId, items);
        let tmp9 = !result;
        if (tmp9) {
          const tmp4Result = isOptInEnabled;
          const result1 = tmp4Result.isOptInEnabledForGuild(self._guildId) && self._lastMessageTimestamp < closure_74;
          tmp9 = !result1 && self.canTrackUnreads();
          !result1 && self.canTrackUnreads();
        }
        tmp3 = tmp9;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getGuildChannelUnreadState(basicPermissions, arg1, arg2, arg3, arg4) {
    const self = this;
    const tmp = arg1;
    if (tmp) {
      if (self._lastMessageTimestamp < closure_74) {
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
      obj = BasicPermissionUtilsDefault;
      if (!obj.has(basicPermissions.basicPermissions, BasicPermissions.VIEW_CHANNEL)) {
        return { mentionCount: 0, unread: false, isMentionLowImportance: false };
      }
    } else if (GatedChannelStore.isChannelGated(self.guildId, self.channelId)) {
      if (!PermissionStore.can(constants6.VIEW_CHANNEL, basicPermissions)) {
        return { mentionCount: 0, unread: false, isMentionLowImportance: false };
      }
    }
    const tmp9 = arg3;
    if (!tmp9) {
      let obj2;
      const tmp10 = arg4;
      if (!tmp10) {
        obj2 = { mentionCount: self.mentionCount, unread: self.getAckTimestamp() < self._lastMessageTimestamp, isMentionLowImportance: self.isMentionLowImportance };
      }
      return obj2;
    }
    obj2 = { mentionCount: self.mentionCount, unread: false, isMentionLowImportance: self.isMentionLowImportance };
  }
  hasUnread() {
    return this.getAckTimestamp() < this._lastMessageTimestamp;
  }
  hasRecentlyVisitedAndRead() {
    const self = this;
    let tmp = this._lastMessageTimestamp > 0 && null != self._ackMessageId && self.getAckTimestamp() > closure_75;
    if (tmp) {
      const guildRecentsDismissedAt = UserSettingsProtoStore.getGuildRecentsDismissedAt(self._guildId);
      tmp = guildRecentsDismissedAt < self.getAckTimestamp();
    }
    return tmp;
  }
  isForumPostUnread() {
    const self = this;
    const tmp = this._isActiveThread && self.hasUnread();
    return tmp;
  }
  hasMentions() {
    return this.getMentionCount() > 0;
  }
  getMentionCount() {
    return this.mentionCount;
  }
  hasUnreadOrMentions() {
    const self = this;
    const tmp = this.hasMentions() || self.hasUnread();
    return tmp;
  }
  ackPins() {
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
            obj = { url: BottomSheet.PINS_ACK(self.channelId), oldFormErrors: true, rejectWithError: true };
            return HTTP.post(obj);
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
  }
  ack(immediate) {
    let local;
    let messageId;
    let obj3;
    let require;
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
      const hasMentionsResult = self.hasMentions();
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
        set.delete(self.channelId);
        self._persisted = true;
        if (c67) {
          self.ackedWhileCached = true;
        }
        channelId = self.channelId;
        let value2;
        if (null != channelId) {
          const value = ReadState.get(channelId);
          if (value.type === ReadStateTypes.CHANNEL) {
            const channel = ChannelStore.getChannel(value.channelId);
            if (null != channel) {
              if (channel.isForumPost()) {
                if (null != channel.parent_id) {
                  const parent_id = channel.parent_id;
                  value2 = ReadState.get(parent_id);
                  let hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                  if (hasLoadedResult) {
                    obj = require("SnowflakeUtils");
                    const keys = obj.keys(ActiveThreadsStore.getThreadsForParent(channel.guild_id, parent_id));
                    hasLoadedResult = keys.every((item) => {
                      let hasOpenedThreadResult = readStateStoreClass.hasOpenedThread(item);
                      if (!hasOpenedThreadResult) {
                        obj = require("SnowflakeUtils");
                        hasOpenedThreadResult = obj.compare(item, value2.ackMessageId) < 0;
                      }
                      return hasOpenedThreadResult;
                    });
                  }
                  if (hasLoadedResult) {
                    const obj2 = { trackAnalytics: true, location: obj3 };
                    obj3 = { section: constants3.CHANNEL, object: constants2.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS, objectType: constants.ACK_AUTOMATIC };
                    value2.ack(obj2);
                  }
                }
              }
            }
          }
        }
        if (local) {
          self.oldestUnreadMessageId = null;
          flag7 = true;
        } else {
          if (null == self.outgoingAck) {
            let num2;
            const _setTimeout = setTimeout;
            if (hasMentionsResult) {
              num2 = 0;
            } else {
              num2 = 3000;
            }
            self.outgoingAckTimer = _setTimeout(() => {
              if (self.type === ReadStateTypes.CHANNEL) {
                self._ack(importDefault, _require);
              } else {
                self._nonChannelAck();
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
  }
  takeSnapshot() {
    let hasUnreadResult;
    let mentionCount;
    const _default = GuildReadStateStore.default;
    const guildId = this.guildId;
    obj = { unread: this.hasUnread(), mentionCount: this.mentionCount, guildUnread: hasUnreadResult, guildMentionCount: mentionCount, takenAt: Date.now() };
    hasUnreadResult = null;
    if (null != guildId) {
      hasUnreadResult = _default.hasUnread(guildId);
    }
    mentionCount = null;
    if (null != guildId) {
      mentionCount = _default.getMentionCount(guildId);
    }
    return obj;
  }
  clearOutgoingAck() {
    const self = this;
    this.outgoingAck = null;
    if (null != this.outgoingAckTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.outgoingAckTimer);
      self.outgoingAckTimer = null;
    }
  }
  _shouldAck(flag2, local, flag3) {
    let tmp = flag2;
    if (!tmp) {
      let tmp3 = flag3;
      if (!tmp3) {
        let tmp5 = local;
        if (!tmp5) {
          const self = this;
          const hasItem = set.has(this.channelId);
          let tmp8 = !hasItem;
          if (tmp8) {
            let tmp10 = self.type === ReadStateTypes.CHANNEL && !self.loadedMessages;
            if (tmp10) {
              const channel = ChannelStore.getChannel(self.channelId);
              let isForumLikeChannelResult;
              if (channel != null) {
                isForumLikeChannelResult = channel.isForumLikeChannel();
              }
              tmp10 = !isForumLikeChannelResult;
            }
            tmp8 = !tmp10;
          }
          tmp5 = tmp8;
        }
        tmp3 = tmp5;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  _ack(importDefault, _require) {
    let closure_4;
    const self = this;
    dependencyMap = _require;
    const outgoingAck = this.outgoingAck;
    if (null != outgoingAck) {
      id = AuthenticationStore.getId();
      let closure_5 = token;
      self._persisted = true;
      const recalculateFlagsResult = self.recalculateFlags();
      let tmp4;
      if (recalculateFlagsResult !== self.flags) {
        tmp4 = recalculateFlagsResult;
      }
      const require = tmp4;
      let promise = networkAwareRetryDefault(() => {
        let body;
        const HTTP = HTTPUtils.HTTP;
        const request = { url: BottomSheet.MESSAGE_ACK(self.channelId, outgoingAck), body, oldFormErrors: true, rejectWithError: true };
        body = { token, last_viewed: self.lastViewed, flags: require };
        return HTTP.post(request);
      });
      promise.then((body) => {
        if (null != body) {
          const tmp3 = token === closure_5 && closure_4 === AuthenticationStore.getId();
          if (tmp3) {
            token = body.body.token;
          }
          obj = DispatcherDefault;
          obj.dispatch({ type: "MESSAGE_ACKED" });
          if (_require) {
            const promise = asyncRequire(13667, dependencyMap.paths);
            promise.then((result) => {
              obj = importDefault;
              channelId = channelId.channelId;
              const _default = result.default;
              if (importDefault == null) {
                obj = {};
              }
              _default(channelId, obj);
            });
          }
        }
      });
    }
  }
  recalculateFlags() {
    if (this.type === ReadStateTypes.CHANNEL) {
      const channel = ChannelStore.getChannel(tmp.channelId);
      if (null != channel) {
        let num;
        if (channel.isThread()) {
          num = constants15.IS_THREAD;
        } else {
          num = 0;
          if (null != channel.guild_id) {
            num = constants15.IS_GUILD_CHANNEL;
          }
        }
        return num;
      }
    }
  }
  _nonChannelAck() {
    let outgoingAck;
    let type;
    ({ outgoingAck, channelId, type } = this);
    if (null != outgoingAck) {
      if (ReadStateTypes.GUILD_HOME !== type) {
        if (ReadStateTypes.GUILD_EVENT !== type) {
          if (ReadStateTypes.GUILD_ONBOARDING_QUESTION !== type) {
            if (ReadStateTypes.NOTIFICATION_CENTER !== type) {
              if (ReadStateTypes.MESSAGE_REQUESTS !== type) {
                if (ReadStateTypes.CONJURING_PROJECT === type) {
                  let url = closure_40.CONJURE_PROJECT_ACK(channelId, outgoingAck);
                }
              }
            }
            url = closure_40.USER_NON_CHANNEL_ACK(outgoingAck, type);
          }
          tmp._persisted = true;
          networkAwareRetryDefault(() => {
            const HTTP = HTTPUtils.HTTP;
            const request = { url, body: {}, oldFormErrors: true, rejectWithError: true };
            return HTTP.post(request);
          });
        }
      }
      url = closure_40.GUILD_FEATURE_ACK(channelId, outgoingAck, type);
    }
  }
  delete() {
    let hasItem;
    let obj3;
    let tmp14;
    let tmp3Result6;
    let tmp7;
    let type;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const self = this;
    const basicChannel = ChannelStore.getBasicChannel(this.channelId);
    ({ channelId, type } = this);
    obj = { remote: flag, persisted: this._persisted, channelMissing: null == basicChannel, isOld: tmp7, validType: hasItem, readableType: tmp14, oldThreadCutoff: tmp3Result6.fromTimestamp(Date.now() - closure_72), mentionCount: null, channelId: null, ackMessageId: null, lastMessageId: null };
    const log = logger.log;
    const obj2 = require("SnowflakeUtils");
    const fromTimestampResult = obj2.fromTimestamp(Date.now() - closure_72);
    tmp7 = this.mentionCount > 0;
    if (!tmp7) {
      const tmp3Result = require("SnowflakeUtils");
      let tmp8 = tmp3Result.compare(self.channelId, fromTimestampResult) <= 0;
      if (tmp8) {
        let tmp9 = null != self._ackMessageId;
        if (tmp9) {
          const tmp3Result4 = require("SnowflakeUtils");
          tmp9 = tmp3Result4.compare(self._ackMessageId, fromTimestampResult) > 0;
        }
        let tmp10 = !tmp9;
        if (tmp10) {
          let tmp11 = null != self._lastMessageId;
          if (tmp11) {
            const tmp3Result5 = require("SnowflakeUtils");
            tmp11 = tmp3Result5.compare(self._lastMessageId, fromTimestampResult) > 0;
          }
          tmp10 = !tmp11;
        }
        tmp8 = tmp10;
      }
      tmp7 = tmp8;
    }
    hasItem = null != basicChannel && set.has(basicChannel.type);
    tmp14 = null != basicChannel && authStore4(basicChannel.type);
    ({ mentionCount: obj.mentionCount, channelId: obj.channelId, _ackMessageId: obj.ackMessageId, _lastMessageId: obj.lastMessageId } = self);
    tmp3Result6 = require("SnowflakeUtils");
    log("Deleting ReadState", channelId, type, obj);
    if (flag) {
      flag = self._persisted;
    }
    if (flag) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: BottomSheet.CHANNEL_ACK(self.channelId), body: obj3, oldFormErrors: true, rejectWithError: true };
      const del = HTTP.del;
      obj3 = { version: 2, read_state_type: self.type };
      del(request);
    }
    const _readStates = ReadState._readStates;
    const value = _readStates.get(self.type);
    if (value != null) {
      value.delete(self.channelId);
    }
    const _mentionChannels = ReadState._mentionChannels;
    _mentionChannels.delete(self.channelId);
  }
  shouldDeleteReadState(arg0) {
    if (0 !== GuildAvailabilityStore.totalUnavailableGuilds) {
      return false;
    } else {
      let hasItem1;
      const self = this;
      if (null != this.type) {
        if (self.type !== ReadStateTypes.CHANNEL) {
          const type = self.type;
          if (ReadStateTypes.GUILD_HOME !== type) {
            if (ReadStateTypes.GUILD_EVENT !== type) {
              let flag;
              if (ReadStateTypes.GUILD_ONBOARDING_QUESTION !== type) {
                flag = true;
                if (ReadStateTypes.NOTIFICATION_CENTER === type) {
                  const cast = require("SnowflakeUtils").cast;
                  require("SnowflakeUtils");
                  const currentUser = UserStore.getCurrentUser();
                  id = undefined;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  flag = cast(id) === self.channelId;
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
          const obj4 = require("SnowflakeUtils");
          let tmp32 = obj4.compare(self.channelId, arg0) <= 0;
          if (tmp32) {
            let tmp33 = null != self._ackMessageId;
            if (tmp33) {
              const tmp30Result = require("SnowflakeUtils");
              tmp33 = tmp30Result.compare(self._ackMessageId, arg0) > 0;
            }
            let tmp34 = !tmp33;
            if (tmp34) {
              let tmp35 = null != self._lastMessageId;
              if (tmp35) {
                const tmp30Result2 = require("SnowflakeUtils");
                tmp35 = tmp30Result2.compare(self._lastMessageId, arg0) > 0;
              }
              tmp34 = !tmp35;
            }
            tmp32 = tmp34;
          }
          tmp29 = tmp32;
        }
        hasItem1 = tmp29;
      } else {
        hasItem1 = set.has(basicChannel.type);
        if (hasItem1) {
          const tmp6 = authStore4(basicChannel.type);
          let tmp7 = !tmp6;
          if (tmp6) {
            let tmp10 = !closure_20(basicChannel.type);
            closure_20(basicChannel.type);
            if (tmp10) {
              const hasItem = set2.has(basicChannel.type);
              let tmp13 = !hasItem;
              if (hasItem) {
                const guildId = self.guildId;
                let tmp16 = !(null != guildId && ActiveThreadsStore.isActive(guildId, basicChannel.parent_id, self.channelId));
                const isActiveResult = null != guildId && ActiveThreadsStore.isActive(guildId, basicChannel.parent_id, self.channelId);
                if (tmp16) {
                  let tmp17 = self.mentionCount > 0;
                  if (!tmp17) {
                    obj = require("SnowflakeUtils");
                    let tmp20 = obj.compare(self.channelId, arg0) <= 0;
                    if (tmp20) {
                      let tmp21 = null != self._ackMessageId;
                      if (tmp21) {
                        const tmp18Result = require("SnowflakeUtils");
                        tmp21 = tmp18Result.compare(self._ackMessageId, arg0) > 0;
                      }
                      let tmp22 = !tmp21;
                      if (tmp22) {
                        let tmp23 = null != self._lastMessageId;
                        if (tmp23) {
                          const tmp18Result2 = require("SnowflakeUtils");
                          tmp23 = tmp18Result2.compare(self._lastMessageId, arg0) > 0;
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
                tmp24 = self.mentionCount > 0 && !PermissionStore.canBasicChannel(closure_61, basicChannel);
                const tmp25 = self.mentionCount > 0 && !PermissionStore.canBasicChannel(closure_61, basicChannel);
              }
              tmp10 = tmp24;
            }
            tmp7 = tmp10;
          }
          hasItem1 = tmp7;
        }
      }
      return hasItem1;
    }
  }
  getAckTimestamp() {
    const self = this;
    if (0 !== this._ackMessageTimestamp) {
      const _isNaN = isNaN;
      if (!isNaN(self._ackMessageTimestamp)) {
        return self._ackMessageTimestamp;
      }
    }
    if (self._isThread) {
      self._ackMessageTimestamp = getThreadAckMessageTimestamp(self.guildId, self.channelId);
      const obj5 = require("SnowflakeUtils");
      self._ackMessageId = obj5.fromTimestamp(self._ackMessageTimestamp);
      return self._ackMessageTimestamp;
    } else {
      if (self.type !== ReadStateTypes.GUILD_EVENT) {
        let guild;
        let extractTimestampResult;
        if (self.type !== tmp2.GUILD_ONBOARDING_QUESTION) {
          if (bans(self.channelId)) {
            guild = GuildStore.getGuild(self.guildId);
          } else {
            const channel = ChannelStore.getChannel(self.channelId);
            if (null != channel) {
              guild = GuildStore.getGuild(channel.getGuildId());
            }
          }
        }
        if (null != guild) {
          if (null != guild) {
            let joinedAt;
            if (null != guild.joinedAt) {
              const _Date3 = Date;
              const joinedAt2 = guild.joinedAt;
              if (guild.joinedAt instanceof Date) {
                const time = joinedAt2.getTime();
                const _isNaN3 = isNaN;
                joinedAt = time;
              } else if (typeof joinedAt2 === "string") {
                const _Date = Date;
                const self2 = this;
                const self3 = this;
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
            extractTimestampResult = joinedAt;
            if (isNaN(joinedAt)) {
              const obj4 = require("SnowflakeUtils");
              extractTimestampResult = obj4.extractTimestamp(self.channelId);
            }
          }
          const _Date2 = Date;
          joinedAt = Date.now();
        } else {
          const obj2 = require("SnowflakeUtils");
          extractTimestampResult = obj2.extractTimestamp(self.channelId);
        }
        self._ackMessageTimestamp = extractTimestampResult;
        return extractTimestampResult;
      }
      guild = GuildStore.getGuild(self.channelId);
    }
  }
  syncThreadSettings() {
    const self = this;
    this._isThread = true;
    const channel = ChannelStore.getChannel(this.channelId);
    if (null == channel) {
      const _HermesInternal = HermesInternal;
      logger.warn("syncThreadSettings called with channel not in memory " + self.channelId);
      return false;
    } else {
      const guildId = self.guildId;
      const isActiveResult = null != guildId && ActiveThreadsStore.isActive(guildId, channel.parent_id, self.channelId);
      const hasJoinedResult = JoinedThreadsStore.hasJoined(self.channelId);
      let flag = self._isActiveThread !== isActiveResult || self._isJoinedThread !== hasJoinedResult;
      if (flag) {
        self._isActiveThread = isActiveResult;
        self._isJoinedThread = hasJoinedResult;
        flag = true;
      }
      return flag;
    }
  }
  recordLastViewedTime() {
    const self = this;
    const timestamp = Date.now();
    const diff = timestamp - require("SnowflakeUtils").DISCORD_EPOCH;
    const ceilResult = ceil(diff / DurationsDefault.Millis.DAY);
    if (ceilResult !== this.lastViewed) {
      self.lastViewed = ceilResult;
      const tmp4 = self.canTrackUnreads() && !self.hasUnread();
      if (tmp4) {
        self.ack({ force: true, trackAnalytics: false });
      }
    }
  }
}
const prototype2 = ReadState.prototype;
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
      obj = require("SnowflakeUtils");
      num = obj.extractTimestamp(_lastMessageId);
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
      obj = require("SnowflakeUtils");
      num = obj.extractTimestamp(_ackMessageId);
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
    const tmp = undefined !== this._unreadCount && 0 !== self._unreadCount && 0 !== _unreadCount;
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
    const tmp = 0 !== this._mentionCount && 0 !== _mentionCount || self._mentionCount === _mentionCount;
    if (!tmp) {
      const result = self.incrementGuildUnreadsSentinel();
    }
    self._mentionCount = _mentionCount;
    const _mentionChannels = ReadState._mentionChannels;
    _mentionChannels.delete(self.channelId);
    const tmp5 = self._mentionCount > 0 && self.canHaveMentions();
    if (tmp5) {
      const _mentionChannels2 = ReadState._mentionChannels;
      _mentionChannels2.add(self.channelId);
    }
  }
});
Object.defineProperty(prototype2, "isMentionLowImportance", {
  get: function isMentionLowImportance() {
    return null != this.flags && (this.flags & constants15.IS_MENTION_LOW_IMPORTANCE) === constants15.IS_MENTION_LOW_IMPORTANCE;
  },
  set: undefined
});
Object.defineProperty(prototype2, "isMentionLowImportance", {
  get: undefined,
  set: function isMentionLowImportance(arg0) {
    const self = this;
    const tmp = arg0;
    if (tmp) {
      if (0 === self._mentionCount) {
        let num3 = self.flags;
        if (num3 == null) {
          num3 = 0;
        }
        self.flags = num3 | constants15.IS_MENTION_LOW_IMPORTANCE;
      }
    } else {
      const tmp3 = null != self.flags && 0 !== self.flags;
      if (tmp3) {
        self.flags = self.flags & ~constants15.IS_MENTION_LOW_IMPORTANCE;
      }
    }
  }
});
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
Object.defineProperty(prototype2, "oldestUnreadTimestamp", {
  get: function oldestUnreadTimestamp() {
    let num = 0;
    if (null != this.oldestUnreadMessageId) {
      obj = require("SnowflakeUtils");
      num = obj.extractTimestamp(tmp.oldestUnreadMessageId);
    }
    return num;
  },
  set: undefined
});
ReadState._guildReadStateSentinels = {};
let map = new Map();
ReadState._readStates = map;
ReadState._mentionChannels = new Set();
new Set();
let closure_90 = module_12.throttle((arg0) => {
  arg0.delete();
}, 100);
const Store = get_initializedDefault.Store;
class ReadStateStoreClass extends Store {
  initialize() {
    const items = [DimensionStore, UserStore, GuildStore, GuildAvailabilityStore, ChannelStore, SelectedChannelStore, MessageStore, PermissionStore, ChannelRTCStore, ActiveThreadsStore, JoinedThreadsStore, ChannelSectionStore, GuildScheduledEventStore, ExperimentStore, GatedChannelStore, UserGuildSettingsStore, WindowStore, NotificationCenterItemsStore, MessageRequestStore, UserSettingsProtoStore, SpamMessageRequestStore];
    items.push(AppStateStore.default);
    this.waitFor(ActiveThreadsStore, AuthenticationStore, ChannelRTCStore, ChannelSectionStore, ChannelStore, DimensionStore, EmbeddedActivitiesStore, GatedChannelStore, GuildAvailabilityStore, GuildScheduledEventStore, GuildStore, IdleStore, JoinedThreadsStore, MessageStore, NotificationCenterItemsStore, PermissionStore, RelationshipStore, SelectedChannelStore, UserGuildSettingsStore, UserSettingsProtoStore, UserStore, WindowStore);
    const items1 = [ChannelSectionStore];
    this.syncWith(items1, handleChannelSectionStoreUpdate);
  }
  getReadStatesByChannel() {
    const _readStates = ReadState._readStates;
    map = _readStates.get(ReadStateTypes.CHANNEL);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    return map;
  }
  getForDebugging(id) {
    let CHANNEL;
    if (CHANNEL === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getIfExists(id, CHANNEL);
  }
  getNotifCenterReadState(id) {
    return ReadState.getIfExists(id, ReadStateTypes.NOTIFICATION_CENTER);
  }
  hasLastMessage(id) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(id, CHANNEL, (lastMessageId) => null != lastMessageId.lastMessageId, false);
  }
  canBeUnread(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => canBeUnread.canBeUnread(), false);
  }
  hasUnread(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => {
      const tmp = canBeUnread.canBeUnread() && canBeUnread.hasUnread();
      return tmp;
    }, false);
  }
  wasUnreadOnSelect(arg0) {
    return id === arg0;
  }
  hasUnreadOrMentions(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (canBeUnread) => {
      const tmp = canBeUnread.canBeUnread() && canBeUnread.hasUnreadOrMentions();
      return tmp;
    }, false);
  }
  hasTrackedUnread(id) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(id, CHANNEL, (canTrackUnreads) => {
      const tmp = canTrackUnreads.canTrackUnreads() && canTrackUnreads.hasUnread();
      return tmp;
    }, false);
  }
  isForumPostUnread(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (isForumPostUnread) => isForumPostUnread.isForumPostUnread(), false);
  }
  getUnreadCount(id) {
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
  }
  getMentionCount(arg0) {
    let num;
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
    if (!isChangelogChannelDefault(arg0)) {
      num = value;
    } else {
      num = 1;
    }
    return num;
  }
  getIsMentionLowImportance(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    const value = CHANNEL === ReadStateTypes.CHANNEL && ReadState.getValue(arg0, CHANNEL, (isMentionLowImportance) => isMentionLowImportance.isMentionLowImportance, false);
    return value;
  }
  getGuildChannelUnreadState(id, arg1, arg2, arg3, arg4) {
    let closure_0 = id;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    return ReadState.getValue(id.id, ReadStateTypes.CHANNEL, (getGuildChannelUnreadState) => getGuildChannelUnreadState.getGuildChannelUnreadState(closure_0, closure_1, closure_2, closure_3, closure_4), { mentionCount: 0, unread: false, isMentionLowImportance: false });
  }
  hasRecentlyVisitedAndRead(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (hasRecentlyVisitedAndRead) => hasRecentlyVisitedAndRead.hasRecentlyVisitedAndRead(), false);
  }
  ackMessageId(arg0) {
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
  }
  getTrackedAckMessageId(id) {
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
  }
  lastMessageId(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (lastMessageId) => lastMessageId.lastMessageId, null);
  }
  lastMessageTimestamp(arg0) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(arg0, CHANNEL, (lastMessageTimestamp) => lastMessageTimestamp.lastMessageTimestamp, 0);
  }
  lastPinTimestamp(arg0) {
    return ReadState.getValue(arg0, ReadStateTypes.CHANNEL, (lastPinTimestamp) => lastPinTimestamp.lastPinTimestamp, null);
  }
  getOldestUnreadMessageId(id) {
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
  }
  getOldestUnreadTimestamp(id) {
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
  }
  isEstimated(id) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(id, CHANNEL, (estimated) => estimated.estimated, false);
  }
  hasOpenedThread(channelId) {
    let CHANNEL = arg1;
    if (arg1 === undefined) {
      CHANNEL = ReadStateTypes.CHANNEL;
    }
    return ReadState.getValue(channelId, CHANNEL, (_persisted) => _persisted._persisted, false);
  }
  hasUnreadPins(channelId) {
    return ReadState.getValue(channelId, ReadStateTypes.CHANNEL, (canBeUnread) => {
      const tmp = canBeUnread.canBeUnread() && canBeUnread.lastPinTimestamp > canBeUnread.ackPinTimestamp;
      return tmp;
    }, false);
  }
  isNewForumThread(id, parent_id, guild) {
    const value = ReadState.get(parent_id);
    if (true !== ReadState.get(id)._persisted) {
      if (null != value.ackMessageIdAtChannelSelect) {
        const obj3 = require("SnowflakeUtils");
        if (obj3.compare(id, value.ackMessageIdAtChannelSelect) > 0) {
          if (null != guild) {
            let joinedAt;
            if (null != guild.joinedAt) {
              const _Date3 = Date;
              const joinedAt2 = guild.joinedAt;
              if (guild.joinedAt instanceof Date) {
                const time = joinedAt2.getTime();
                const _isNaN2 = isNaN;
                joinedAt = time;
              } else if (typeof joinedAt2 === "string") {
                const _Date = Date;
                const self = this;
                const self2 = this;
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
            const tmp7Result = require("SnowflakeUtils");
            return tmp7Result.extractTimestamp(id) > joinedAt;
          }
          const _Date2 = Date;
          joinedAt = Date.now();
        }
      }
    }
    return false;
  }
  getAllReadStates(arg0) {
    let closure_0 = arg0;
    const items = [];
    const item = ReadState.forEach((type) => {
      type = type.type;
      if (ReadStateTypes.GUILD_HOME !== type) {
        if (ReadStateTypes.GUILD_EVENT !== type) {
          if (ReadStateTypes.GUILD_ONBOARDING_QUESTION !== type) {
            if (ReadStateTypes.NOTIFICATION_CENTER !== type) {
              if (ReadStateTypes.MESSAGE_REQUESTS !== type) {
                items.push(type.serialize(closure_0));
              }
            }
            const cast = require("SnowflakeUtils").cast;
            require("SnowflakeUtils");
            const currentUser = UserStore.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            if (cast(id) === type.channelId) {
              items.push(type.serialize(closure_0));
            }
          }
        }
      }
      if (null != GuildStore.getGuild(type.channelId)) {
        items.push(type.serialize(closure_0));
      }
    });
    return items;
  }
  getGuildUnreadsSentinel(_guildId) {
    return ReadState.getGuildSentinels(_guildId).unreadsSentinel;
  }
  getMentionChannelIds() {
    return ReadState.getMentionChannelIds();
  }
  getResourceIds(CONJURING_PROJECT) {
    const _readStates = ReadState._readStates;
    const _Array = Array;
    const value = _readStates.get(CONJURING_PROJECT);
    let keys;
    if (value != null) {
      keys = value.keys();
    }
    if (keys == null) {
      keys = [];
    }
    return from(keys);
  }
  getNonChannelAckId(arg0) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let ackMessageId = null;
    if (null != id) {
      ackMessageId = ReadState.get(id, arg0).ackMessageId;
    }
    return ackMessageId;
  }
  getSnapshot(arg0, arg1) {
    const value = ReadState.get(arg0);
    if (null != value.snapshot) {
      let snapshot;
      const _Date = Date;
      if (Date.now() - value.snapshot.takenAt <= arg1) {
        snapshot = value.snapshot;
      }
      return snapshot;
    }
    snapshot = value.takeSnapshot();
  }
  getChannelIdsForWindowId(arg0) {
    return merged.getAllChannelIdsForWindowId(arg0);
  }
}
const prototype3 = ReadStateStoreClass.prototype;
ReadStateStoreClass.displayName = "ReadStateStore";
obj = {
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
        let concat = items.concat;
        if (modified_messages == null) {
          modified_messages = [];
        }
        let combined = concat(modified_messages);
        let found = combined.filter(GlobalUtils.isNotNullish);
        for (const item10026 of found) {
          obj = require("SnowflakeUtils");
          if (1 === obj.compare(item10026.id, ifExists.lastMessageId)) {
            ifExists.lastMessageId = item10026.id;
          }
          continue;
        }
      }
      continue;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let closure_70;
    let guilds;
    let initialPrivateChannels;
    let readState;
    let relationships;
    ({ guilds, readState } = arg0);
    ({ relationships, initialPrivateChannels } = arg0);
    let tmp = setDecayedReadStateTimer();
    let c65 = null;
    let tmp2 = c67 || readState.partial;
    if (!tmp2) {
      ReadState.clearAll();
    }
    c67 = false;
    const entries = readState.entries;
    const item = entries.forEach((read_state_type) => {
      let CHANNEL = read_state_type.read_state_type;
      if (CHANNEL == null) {
        CHANNEL = constants.CHANNEL;
      }
      let tmp2 = read_state_type;
      if (CHANNEL !== constants.CHANNEL) {
        obj = { id: null, read_state_type: null, mention_count: null, last_message_id: null };
        ({ id: obj.id, read_state_type: obj.read_state_type, badge_count: obj.mention_count, last_acked_id: obj.last_message_id } = read_state_type);
        tmp2 = obj;
      }
      const value = ReadState.get(tmp2.id, CHANNEL);
      value._persisted = true;
      let num = tmp2.mention_count;
      if (num == null) {
        num = 0;
      }
      value._mentionCount = num;
      ({ flags: obj2.flags, last_viewed: obj2.lastViewed } = tmp2);
      basicChannel = basicChannel.getBasicChannel(tmp2.id);
      if (null != basicChannel) {
        if (closure_1_19(basicChannel.type)) {
          const obj3 = require("SnowflakeUtils");
          value.ackMessageId = obj3.fromTimestamp(getThreadAckMessageTimestamp(basicChannel.guild_id, basicChannel.id));
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
        const _mentionChannels = ReadState._mentionChannels;
        _mentionChannels.delete(value.channelId);
        const tmp14 = value._mentionCount > 0 && value.canHaveMentions();
        if (tmp14) {
          const _mentionChannels2 = ReadState._mentionChannels;
          _mentionChannels2.add(value.channelId);
        }
      }
      if (value.ackedWhileCached) {
        const obj4 = require("SnowflakeUtils");
        if (-1 === obj4.compare(value.ackMessageId, tmp2.last_message_id)) {
          value.ackMessageId = tmp2.last_message_id;
        }
      } else {
        value.ackMessageId = tmp2.last_message_id;
      }
    });
    ReadState.resetGuildSentinels();
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != id) {
      let value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      const obj2 = require("SnowflakeUtils");
      let _Date = Date;
      value.lastMessageId = obj2.fromTimestamp(Date.now());
    }
    let tmp14 = mergeRelationships(relationships);
    mergeChannels(initialPrivateChannels);
    let iter = guilds[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let writes;
      let tmp17 = nextResult;
      if ("full_sync" === nextResult.channels.op) {
        writes = tmp17.channels.items;
      } else {
        writes = tmp17.channels.writes;
      }
      let tmp18Result = mergeChannels(writes);
      if (null != tmp17.channelTimestampUpdates) {
        let tmp25 = mergeChannelTimestampUpdates(tmp17.channelTimestampUpdates);
      }
      let tmp28 = mergeForGuild(tmp17);
      continue;
    }
    clearDeleteOldReadStatesTimer();
    const timeout = setTimeout(() => {
      function deleteOldReadStates(entries) {
        const tmp = closure_1_73();
        const iter = entries[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let CHANNEL = nextResult.read_state_type;
          let tmp3 = nextResult;
          if (CHANNEL == null) {
            CHANNEL = constants.CHANNEL;
          }
          let value = closure_1_84.get(tmp3.id, CHANNEL);
          let tmp7 = value;
          if (value.shouldDeleteReadState(tmp)) {
            let tmp10 = closure_1_90(tmp7);
          }
          continue;
        }
      }
      let tmp = deleteOldReadStates(readState.entries);
    }, 10 * DurationsDefault.Millis.SECOND);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    const item = lazyPrivateChannels.forEach((type) => {
      let lastPinTimestamp;
      if (closure_1_18(type.type)) {
        const value = ReadState.get(type.id);
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
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    let readStates;
    let selectedChannelId;
    let timeout;
    ({ readStates, selectedChannelId } = arg0);
    const timestamp = Date.now();
    closure_74 = timestamp - 7 * DurationsDefault.Millis.DAY;
    const timestamp1 = Date.now();
    closure_75 = timestamp1 - 3 * DurationsDefault.Millis.DAY;
    clearTimeout(timeout);
    timeout = setTimeout(f89616, DurationsDefault.Millis.HOUR);
    token = null;
    const tmp5 = channelId !== selectedChannelId && null != channelId;
    if (tmp5) {
      set.delete(channelId);
    }
    channelId = selectedChannelId;
    currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(selectedChannelId);
    const tmp10 = currentSidebarChannelId !== currentSidebarChannelId && null != currentSidebarChannelId;
    if (tmp10) {
      set.delete(currentSidebarChannelId);
    }
    ReadState.clearAll();
    const item = readStates.forEach((channelId) => {
      const value = ReadState.get(channelId.channelId);
      const result = value.deserializeForOverlay(channelId);
      if (value.type === constants.CHANNEL) {
        value.rebuildChannelState();
      }
    });
  },
  CACHE_LOADED: function handleCacheLoaded(readStates) {
    let timeout;
    readStates = readStates.readStates;
    c67 = true;
    const timestamp = Date.now();
    closure_74 = timestamp - 7 * DurationsDefault.Millis.DAY;
    const timestamp1 = Date.now();
    closure_75 = timestamp1 - 3 * DurationsDefault.Millis.DAY;
    clearTimeout(timeout);
    timeout = setTimeout(f89616, DurationsDefault.Millis.HOUR);
    const item = readStates.forEach(function(type) {
      let CHANNEL = type.type;
      if (CHANNEL == null) {
        CHANNEL = constants.CHANNEL;
      }
      type.type = CHANNEL;
      _readStates = _readStates._readStates;
      map = _readStates.get(CHANNEL);
      if (map == null) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
      }
      channelId = type.channelId;
      set = map.set;
      obj = require("TypeUtils");
      const result = set(channelId, obj.dangerouslyCast(type, tmp2));
      const _readStates2 = tmp2._readStates;
      if (!_readStates2.has(CHANNEL)) {
        const _readStates3 = tmp2._readStates;
        const result1 = _readStates3.set(CHANNEL, map);
      }
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    let items;
    guild = guild.guild;
    obj = require("SnowflakeUtils");
    let closure_1 = obj.fromTimestamp(Date.now() - closure_72);
    const item = ReadState.forEach((guildId) => {
      const result = guildId.guildId === guild.id && guildId.shouldDeleteReadState(closure_1);
      if (result) {
        guildId.delete(false);
      }
    });
    if ("full_sync" === guild.channels.op) {
      items = guild.channels.items;
    } else {
      items = guild.channels.writes;
    }
    const item1 = items.forEach((type) => {
      let lastPinTimestamp;
      if (closure_1_18(type.type)) {
        const value = ReadState.get(type.id);
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
      let num = 0;
      mergeChannelTimestampUpdates(guild.channelTimestampUpdates);
    }
    mergeForGuild(guild);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(arg0) {
    let isAfter;
    let messages;
    ({ channelId, isAfter, messages } = arg0);
    const value = ReadState.get(channelId);
    value.loadedMessages = true;
    const tmp = null == value.lastMessageId && messages.length > 0;
    if (tmp) {
      value.lastMessageId = messages[0].id;
    }
    const messages1 = MessageStore.getMessages(channelId);
    if (null != messages1) {
      if (messages.length > 0) {
        require("SnowflakeUtils");
        value.rebuildChannelState();
      }
      if (!messages1.hasPresent()) {
        if (messages1.jumpTargetId !== value.ackMessageId) {
          if (isAfter) {
            isAfter = null != value.ackMessageId;
          }
          if (isAfter) {
            isAfter = messages1.has(value.ackMessageId, true);
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
    const item = found.forEach(f89619);
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(messages) {
    messages = messages.messages;
    channelId = messages.channelId;
    obj = IOSPushNotificationRawPayloadFixExperiment;
    if (obj.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
      if (0 === messages.length) {
        return false;
      } else {
        const value = ReadState.get(channelId);
        id = messages[0].id;
        let tmp4 = null == value.lastMessageId;
        if (!tmp4) {
          const obj3 = require("SnowflakeUtils");
          tmp4 = obj3.compare(id, value.lastMessageId) > 0;
        }
        if (tmp4) {
          value.lastMessageId = id;
          value.rebuildChannelState();
        }
      }
    } else {
      return false;
    }
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    let channelId2;
    let channelId3;
    let focused;
    let manual;
    let message;
    let messageId;
    let newMentionCount;
    let obj6;
    let obj9;
    ({ channelId, message } = isPushNotification);
    isPushNotification = isPushNotification.isPushNotification;
    const value = ReadState.get(channelId);
    let hasUnreadResult = value.hasUnread();
    const tmp2 = null != value.lastMessageId && value.lastMessageId >= message.id;
    value.lastMessageId = message.id;
    const currentUser = UserStore.getCurrentUser();
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    if (null != message.author) {
      if (null != currentUser) {
        if (message.author.id === currentUser.id) {
          const SELF_MENTIONABLE_SYSTEM = constants11.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            let flag;
            if (null != value.outgoingAck) {
              value.clearOutgoingAck();
            }
            const obj2 = { channelId, messageId: message.id, manual: false };
            ({ channelId: channelId2, messageId, manual, newMentionCount } = obj2);
            const value3 = ReadState.get(channelId2);
            if (manual) {
              const tmp7 = channelId2 !== channelId && channelId2 !== currentSidebarChannelId;
              if (!tmp7) {
                set.add(channelId2);
              }
              value3.rebuildChannelState(messageId, true, newMentionCount);
              value3.clearOutgoingAck();
              flag = true;
            } else {
              flag = messageId !== value3._ackMessageId;
              if (flag) {
                const obj4 = { messageId, local: true, trackAnalytics: false };
                flag = value3.ack(obj4);
              }
            }
            return flag;
          }
        }
      }
    }
    const obj7 = RootNavigationRef;
    const rootNavigationRef = obj7.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (true === isReadyResult) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      if (ChannelRTCStore.getChatOpen(value.channelId)) {
        channelId3 = value.channelId;
      } else {
        let name;
        if (currentRoute != null) {
          name = currentRoute.name;
        }
        if ("channel" === name) {
          channelId3 = currentRoute.params.channelId;
        } else {
          let name1;
          if (currentRoute != null) {
            name1 = currentRoute.name;
          }
          if ("guilds" === name1) {
            const params = currentRoute.params;
            let channelId1;
            if (params != null) {
              channelId1 = params.channelId;
            }
            channelId3 = channelId1;
          }
        }
      }
    } else if (null == rootNavigationRef) {
      const channelId5 = SelectedChannelStore.getChannelId();
      currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId5);
      channelId3 = channelId5;
    }
    let result = channelId3 === channelId || currentSidebarChannelId === channelId;
    if (!result) {
      const tmp13Result = visibleInlineChannels;
      result = tmp13Result.isChannelVisibleInline(channelId, (arg0) => focused.isFocused(arg0));
    }
    if (result) {
      if (shouldAutomaticallyAck(value)) {
        if (!isPushNotification) {
          const channelId4 = value.channelId;
          const obj5 = { messageId: message.id, trackAnalytics: true, location: obj6 };
          obj6 = { section: null != channelId4 && isOverlayChannelVisible(channelId4) ? constants3.OVERLAY : constants3.CHANNEL, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
          return value.ack(obj5);
        }
      }
    }
    const tmp32 = null != channelId && isOverlayChannelVisible(channelId);
    if (tmp32) {
      const obj8 = { messageId: message.id, trackAnalytics: true, location: obj9 };
      obj9 = { section: constants3.OVERLAY, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
      return value.ack(obj8);
    } else {
      if (null != value.oldestUnreadMessageId) {
        if (!value.oldestUnreadMessageIdStale) {
          if (!hasUnreadResult) {
            const tmp13Result4 = isChannelFocused;
            hasUnreadResult = tmp13Result4.getFocusedChannelId() === channelId;
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
            let obj11;
            if (null != currentUser) {
              const obj10 = { rawMessage: message, userId: currentUser.id, suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(value.guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(value.guildId) };
              const isRawMessageMentioned = isMessageMentioned.isRawMessageMentioned;
              isMessageMentioned;
              if (isRawMessageMentioned(obj10)) {
                obj11 = { shouldMention: true, isMentionLowImportance: false };
              }
              if (obj11.shouldMention) {
                value.isMentionLowImportance = obj11.isMentionLowImportance;
                value.mentionCount = value.mentionCount + 1;
                if (null != currentUser) {
                  ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = message.id;
                  if (NotificationCenterItemsStore.tabFocused) {
                    const value4 = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
                    const tmp44 = undefined !== value4.ackMessageId && value4.lastMessageId !== value4.ackMessageId;
                    if (tmp44) {
                      const tmp45 = null != value4.lastMessageId || 0 !== value4.mentionCount;
                      if (tmp45) {
                        let lastMessageId = value4.lastMessageId;
                        if (lastMessageId == null) {
                          const obj19 = require("SnowflakeUtils");
                          lastMessageId = obj19.fromTimestamp(value4.getAckTimestamp());
                        }
                        const obj12 = { messageId: lastMessageId, local: false, trackAnalytics: false };
                        value4.ack(obj12);
                      }
                    }
                  }
                }
              }
            }
            const channel = ChannelStore.getChannel(message.channel_id);
            const tmp40 = null != channel && channel.isPrivate() && !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
            if (tmp40) {
              obj11 = { shouldMention: true, isMentionLowImportance: false };
            } else {
              if (UserGuildSettingsStore.mentionOnAllMessages) {
                if (null != channel) {
                  if (channel.isThread()) {
                    const tmp13Result6 = ThreadNotificationSettings;
                    if (tmp13Result6.computeThreadNotificationSetting(channel) === ThreadMemberFlags.ALL_MESSAGES) {
                      obj11 = { shouldMention: true, isMentionLowImportance: true };
                    }
                  } else if (!channel.isVocal()) {
                    if (!UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.id)) {
                      if (UserGuildSettingsStore.resolvedMessageNotifications(channel) === constants10.ALL_MESSAGES) {
                        obj11 = { shouldMention: true, isMentionLowImportance: true };
                      }
                    }
                  }
                }
              }
              obj11 = { shouldMention: false, isMentionLowImportance: false };
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
  CHANNEL_ACK: function handleChannelAck(channelId) {
    let _location;
    let context;
    let immediate;
    let messageId;
    ({ messageId, immediate } = channelId);
    channelId = channelId.channelId;
    if (immediate === undefined) {
      immediate = false;
    }
    let flag = channelId.force;
    if (flag === undefined) {
      flag = false;
    }
    ({ context, location: _location } = channelId);
    const value = ReadState.get(channelId);
    obj = { messageId, local: context !== closure_42, immediate, force: flag, isExplicitUserAction: true, location: _location, trackAnalytics: true };
    let flag2 = value.ack(obj);
    if (null != messageId) {
      value.rebuildChannelState();
      flag2 = true;
    }
    return flag2;
  },
  CHANNEL_LOCAL_ACK: function handleChannelLocalAck(channelId) {
    const value = ReadState.get(channelId.channelId);
    return value.ack({ messageId: "IconComponent", local: "IconComponent", immediate: "Reflect", force: 3, isExplicitUserAction: "self_harm_content_non_friend_dm", trackAnalytics: "enum" });
  },
  CHANNEL_PINS_ACK: function handleChannelPinsAck(timestamp) {
    timestamp = timestamp.timestamp;
    const value = ReadState.get(timestamp.channelId);
    return value.ackPins(timestamp);
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
    let obj5;
    channelId = channelId.channelId;
    currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const value = ReadState.get(channel.id);
      let ackMessageId = value.ackMessageId;
      if (ackMessageId == null) {
        const obj2 = require("SnowflakeUtils");
        ackMessageId = obj2.fromTimestamp(value.getAckTimestamp());
      }
      value.ackMessageIdAtChannelSelect = ackMessageId;
      value.recordLastViewedTime();
    }
    const tmp8 = channelId !== channelId && null != channelId;
    if (tmp8) {
      set.delete(channelId);
    }
    const tmp12 = currentSidebarChannelId !== currentSidebarChannelId && null != currentSidebarChannelId;
    if (tmp12) {
      set.delete(currentSidebarChannelId);
    }
    let flag = false;
    if (channelId !== channelId) {
      let flag2 = false;
      if (null != channelId) {
        const value7 = ReadState.get(tmp15);
        let flag3 = !value7.hasUnread();
        value7.hasUnread();
        if (flag3) {
          value7.oldestUnreadMessageId = null;
          flag3 = true;
        }
        flag2 = flag3;
      }
      if (!flag2) {
        flag2 = false;
      }
      let flag4 = false;
      if (null != currentSidebarChannelId) {
        const value8 = ReadState.get(tmp18);
        let flag5 = !value8.hasUnread();
        value8.hasUnread();
        if (flag5) {
          value8.oldestUnreadMessageId = null;
          flag5 = true;
        }
        flag4 = flag5;
      }
      if (!flag4) {
        flag4 = flag2;
      }
      flag = flag4;
    }
    let tmp21 = channelId === channelId;
    if (!tmp21) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let hasItem = null != type;
      if (hasItem) {
        const GUILD_THREADS_ONLY = constants9.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(channel.type);
      }
      tmp21 = hasItem;
    }
    if (tmp21) {
      const location = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL, objectType: constants.ACK_AUTOMATIC };
      let flag6 = false;
      if (null != channelId) {
        const value9 = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value9, undefined);
        if (ackResult) {
          const obj3 = { trackAnalytics: true, location };
          ackResult = value9.ack(obj3);
        }
        flag6 = ackResult;
      }
      if (!flag6) {
        flag6 = flag;
      }
    }
    id = null;
    if (null != channel) {
      if (closure_17(channel.type)) {
        const value10 = ReadState.get(channel.id);
        const tmp34 = value10.canBeUnread() && value10.hasUnreadOrMentions();
        if (tmp34) {
          id = channel.id;
        }
        const value11 = ReadState.get(channel.id);
        let ackResult1;
        if (!value11.hasMentions()) {
          value11.oldestUnreadMessageId = null;
          const obj4 = { isExplicitUserAction: true, trackAnalytics: true, location: obj5 };
          obj5 = { section: constants3.CHANNEL, object: constants2.ACK_VOICE_CHANNEL_SELECT, objectType: constants.ACK_SEMI_AUTOMATIC };
          ackResult1 = value11.ack(obj4);
        }
      }
    }
    let tmp41 = tmp40;
    if (channelId === channelId) {
      let flag8 = false;
      const obj6 = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR, objectType: constants.ACK_AUTOMATIC };
      if (null != currentSidebarChannelId) {
        const value12 = ReadState.get(currentSidebarChannelId);
        let ackResult2 = shouldAutomaticallyAck(value12, undefined);
        if (ackResult2) {
          const obj7 = { trackAnalytics: true, location: obj6 };
          ackResult2 = value12.ack(obj7);
        }
        flag8 = ackResult2;
      }
      if (!flag8) {
        flag8 = tmp40;
      }
      tmp41 = flag8;
    }
    return tmp41;
  },
  OVERLAY_TEXT_CHAT_ACK_CHANNEL: function handleOverlayTextChatAckChannel(channelId) {
    channelId = channelId.channelId;
    const ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH = constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH;
    const value = ReadState.get(channelId);
    let ackMessageId = value.ackMessageId;
    if (ackMessageId == null) {
      const obj3 = require("SnowflakeUtils");
      ackMessageId = obj3.fromTimestamp(value.getAckTimestamp());
    }
    value.ackMessageIdAtChannelSelect = ackMessageId;
    value.recordLastViewedTime();
    if (null != channelId) {
      const value3 = ReadState.get(channelId);
      const tmp5 = !value3.hasUnread();
      if (tmp5) {
        value3.oldestUnreadMessageId = null;
      }
    }
    const obj2 = { section: constants3.OVERLAY, object: ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC };
    if (null != channelId) {
      const value4 = ReadState.get(channelId);
      if (shouldAutomaticallyAck(value4, undefined)) {
        const obj4 = { trackAnalytics: true, location: obj2 };
        value4.ack(obj4);
      }
    }
    return true;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    let obj2;
    channelId = channelId.channelId;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult;
      if (!value.hasMentions()) {
        value.oldestUnreadMessageId = null;
        obj = { isExplicitUserAction: true, trackAnalytics: true, location: obj2 };
        obj2 = { section: constants3.CHANNEL, object: constants2.ACK_VOICE_CHANNEL_SELECT, objectType: constants.ACK_SEMI_AUTOMATIC };
        ackResult = value.ack(obj);
      }
      return ackResult;
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    let lastPinTimestamp;
    channel = channel.channel;
    if (authStore4(channel.type)) {
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
      const value = ReadState.get(channel.id);
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
    id = undefined;
    const ownerId = channel.ownerId;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (ownerId === id) {
      ReadState.get(channel.id)._persisted = true;
      const obj3 = { channelId: parent_id, messageId: channel.id, manual: false };
      ({ channelId, messageId, manual, newMentionCount } = obj3);
      const value2 = ReadState.get(channelId);
      if (manual) {
        const tmp11 = channelId !== channelId && channelId !== currentSidebarChannelId;
        if (!tmp11) {
          set.add(channelId);
        }
        value2.rebuildChannelState(messageId, true, newMentionCount);
        value2.clearOutgoingAck();
      } else if (messageId !== value2._ackMessageId) {
        const obj4 = { messageId, local: true, trackAnalytics: false };
        value2.ack(obj4);
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
        const value = ReadState.get(type.id);
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
          const value2 = ReadState.get(type.parent_id);
          const obj2 = require("SnowflakeUtils");
          if (obj2.compare(value2.lastMessageId, type.id) < 0) {
            value2.lastMessageId = type.id;
          }
        }
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
    obj = ThreadActionUtils;
    let result = obj.doesThreadMembersActionAffectMe(id);
    if (result) {
      const value = ReadState.get(id.id);
      result = value.syncThreadSettings();
    }
    return result;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  WINDOW_FOCUS: function handleWindowFocus(arg0) {
    let flag;
    const windowId = arg0;
    merged.forEachChannel((arg0, has) => {
      if (has.has(windowId.windowId)) {
        let focused = windowId.focused;
        if (null != arg0) {
          const value = ReadState.get(arg0);
          if (!focused) {
            focused = value.hasUnread();
          }
          if (!focused) {
            value.oldestUnreadMessageIdStale = true;
          }
          const obj2 = { section: constants3.CHANNEL, object: constants2.ACK_WINDOW_FOCUS, objectType: constants.ACK_AUTOMATIC };
          if (null != arg0) {
            const value2 = ReadState.get(arg0);
            let ackResult = shouldAutomaticallyAck(value2, undefined);
            if (ackResult) {
              const obj3 = { trackAnalytics: true, location: obj2 };
              ackResult = value2.ack(obj3);
            }
          }
        }
      }
    });
    return false;
  },
  UPDATE_CHANNEL_DIMENSIONS: function handleScroll(channelId) {
    channelId = channelId.channelId;
    const location = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SCROLL, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, tmp);
      if (ackResult) {
        const obj2 = { trackAnalytics: true, location };
        ackResult = value.ack(obj2);
      }
      flag = ackResult;
    }
    return flag;
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    token = null;
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
        tmp2 = null != channelId.messageId && readStateStoreClass.hasUnreadOrMentions(channelId.channelId, channelId.readStateType);
        const hasUnreadOrMentionsResult = null != channelId.messageId && readStateStoreClass.hasUnreadOrMentions(channelId.channelId, channelId.readStateType);
      }
      return tmp2;
    });
    const item = found.forEach((messageId) => {
      messageId = messageId.messageId;
      const value = ReadState.get(messageId.channelId, messageId.readStateType);
      value.ack({ messageId, local: true, immediate: "IconComponent", force: "Reflect", isExplicitUserAction: "text-xs/semibold", trackAnalytics: null });
    });
    if (context === closure_42) {
      const push = navigation.push;
      const items = [];
      HermesBuiltin.arraySpread(items, found.map((channelId) => ({ channel_id: channelId.channelId, message_id: channelId.messageId, read_state_type: channelId.readStateType })), 0);
      HermesBuiltin.apply(push, items, navigation);
      if (!c69) {
        processBulkAckQueue(onFinished);
      }
    }
  },
  ENABLE_AUTOMATIC_ACK: function handleEnableAutomaticAck(arg0) {
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  DISABLE_AUTOMATIC_ACK: function handleDisableAutomaticAck(arg0) {
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  REGISTER_VISIBLE_INLINE_CHANNEL: function handleRegisterVisibleInlineChannel(channelId) {
    channelId = channelId.channelId;
    const windowId = channelId.windowId;
    obj = visibleInlineChannels;
    const result = obj.registerVisibleInlineChannel(channelId, windowId);
    let flag = false;
    const obj2 = { section: constants3.CHANNEL, object: constants2.ACK_MESSAGE_VIEWED, objectType: constants.ACK_AUTOMATIC };
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        const obj3 = { trackAnalytics: true, location: obj2 };
        ackResult = value.ack(obj3);
      }
      flag = ackResult;
    }
    return flag;
  },
  UNREGISTER_VISIBLE_INLINE_CHANNEL: function handleUnregisterVisibleInlineChannel(arg0) {
    let windowId;
    ({ channelId, windowId } = arg0);
    obj = visibleInlineChannels;
    const result = obj.unregisterVisibleInlineChannel(channelId, windowId);
    return false;
  },
  GUILD_FEATURE_ACK: handleGuildFeatureAck,
  GUILD_SCHEDULED_EVENT_CREATE: function handleGuildScheduledEventCreate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const value = ReadState.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
    value.lastMessageId = guildScheduledEvent.id;
    const currentUser = UserStore.getCurrentUser();
    const tmp4 = null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id;
    if (tmp4) {
      obj = { type: "GUILD_FEATURE_ACK", id: guild_id, ackType: ReadStateTypes.GUILD_EVENT, ackedId: guildScheduledEvent.id, local: false };
      handleGuildFeatureAck(obj);
    } else if (!UserGuildSettingsStore.isMuteScheduledEventsEnabled(guild_id)) {
      value.mentionCount = value.mentionCount + 1;
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const currentUser = UserStore.getCurrentUser();
    let tmp3 = !(null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id);
    if (tmp3) {
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
    const guild_id = guildScheduledEvent.guild_id;
    const currentUser = UserStore.getCurrentUser();
    const tmp2 = null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id;
    if (tmp2) {
      return false;
    } else {
      const value = ReadState.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
      const result = value.handleGuildEventRemoval(guild_id, guildScheduledEvent.id);
    }
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
    const location = { section: constants3.CHANNEL, object: constants2.ACK_RESORT_THREADS, objectType: constants.ACK_AUTOMATIC };
    let flag = false;
    if (null != channelId) {
      const value = ReadState.get(channelId);
      let ackResult = shouldAutomaticallyAck(value, undefined);
      if (ackResult) {
        const obj2 = { trackAnalytics: true, location };
        ackResult = value.ack(obj2);
      }
      flag = ackResult;
    }
    return flag;
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    channelId = channelId.channelId;
    if (channelId.chatOpen) {
      const location = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN, objectType: constants.ACK_AUTOMATIC };
      let flag = false;
      if (null != channelId) {
        const value = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value, undefined);
        if (ackResult) {
          const obj2 = { trackAnalytics: true, location };
          ackResult = value.ack(obj2);
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
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      value.lastMessageId = item.id;
      if (NotificationCenterItemsStore.tabFocused) {
        let lastMessageId = item.id;
        const value2 = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
        const tmp3 = lastMessageId !== value2.ackMessageId && value2.lastMessageId !== value2.ackMessageId;
        if (tmp3) {
          const tmp4 = null != value2.lastMessageId || 0 !== value2.mentionCount;
          if (tmp4) {
            if (lastMessageId == null) {
              lastMessageId = value2.lastMessageId;
            }
            if (lastMessageId == null) {
              const obj2 = require("SnowflakeUtils");
              lastMessageId = obj2.fromTimestamp(value2.getAckTimestamp());
            }
            obj = { messageId: lastMessageId, local: false, trackAnalytics: false };
            value2.ack(obj);
          }
        }
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
      let time;
      if (relationship.relationship.type !== constants8.PENDING_INCOMING) {
        if (relationship.relationship.type !== constants8.FRIEND) {
          return false;
        }
      }
      const value = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      if (relationship.relationship.type === constants8.FRIEND) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const _Date1 = new _Date(Date.now());
        time = _Date1.getTime();
      } else {
        const self = this;
        const self2 = this;
        const _Date3 = new _Date(relationship.relationship.since);
        time = _Date3.getTime();
      }
      let num2 = 0;
      if (null != value.ackMessageId) {
        const obj4 = require("SnowflakeUtils");
        num2 = obj4.extractTimestamp(value.ackMessageId);
      }
      if (num2 < time) {
        const obj8 = require("SnowflakeUtils");
        value.lastMessageId = obj8.fromTimestamp(time);
        if (NotificationCenterItemsStore.tabFocused) {
          const value2 = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
          const tmp11 = undefined !== value2.ackMessageId && value2.lastMessageId !== value2.ackMessageId;
          if (tmp11) {
            const tmp12 = null != value2.lastMessageId || 0 !== value2.mentionCount;
            if (tmp12) {
              let lastMessageId = value2.lastMessageId;
              if (lastMessageId == null) {
                const tmp16Result = require("SnowflakeUtils");
                lastMessageId = tmp16Result.fromTimestamp(value2.getAckTimestamp());
              }
              const obj2 = { messageId: lastMessageId, local: false, trackAnalytics: false };
              value2.ack(obj2);
            }
          }
        } else {
          const mentionCount = value.mentionCount;
          if (relationship.relationship.type === constants8.FRIEND) {
            value.mentionCount = mentionCount - 1;
          } else {
            value.mentionCount = mentionCount + 1;
          }
        }
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
      const value = ReadState.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      const self = this;
      const self2 = this;
      let num = 0;
      const date = new Date(relationship.relationship.since);
      const time = date.getTime();
      if (null != value.ackMessageId) {
        obj = require("SnowflakeUtils");
        num = obj.extractTimestamp(value.ackMessageId);
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
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (null == id) {
          return false;
        } else {
          ackMessageId = ReadState.get(id, ReadStateTypes.NOTIFICATION_CENTER);
          const item = ids.forEach((item) => {
            obj = require("SnowflakeUtils");
            if (obj.compare(ackMessageId.ackMessageId, item) < 0) {
              const _Math = Math;
              ackMessageId.mentionCount = Math.max(ackMessageId.mentionCount - 1, 0);
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
    ackType = ackType.ackType;
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      const value = ReadState.get(id, ackType);
      let tmp5 = ackedId !== value.ackMessageId && value.lastMessageId !== value.ackMessageId;
      if (tmp5) {
        let ackResult = null != value.lastMessageId || 0 !== value.mentionCount;
        if (ackResult) {
          if (ackedId == null) {
            ackedId = value.lastMessageId;
          }
          if (ackedId == null) {
            const obj2 = require("SnowflakeUtils");
            ackedId = obj2.fromTimestamp(value.getAckTimestamp());
          }
          const ack = value.ack;
          obj = { messageId: ackedId, local, trackAnalytics: false };
          if (local == null) {
            local = true;
          }
          ackResult = ack(obj);
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
      let value = ReadState.get(nextResult.id);
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
      const value = ReadState.get(channelId);
      let flag2 = !value.hasUnread();
      value.hasUnread();
      if (flag2) {
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
        obj = { trackAnalytics: true, location: tmp };
        ackResult = value.ack(obj);
      }
      flag = ackResult;
    }
    return flag;
  },
  MESSAGE_REQUEST_ACK: function handleMessageRequestAck(ackedId) {
    ackedId = ackedId.ackedId;
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
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
        obj = { messageId: ackedId, isExplicitUserAction: true, trackAnalytics: false };
        value.ack(obj);
      }
    }
  },
  MESSAGE_REQUEST_CLEAR_ACK: function handleMessageRequestClearAck() {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
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
  CONJURE_TURN_SETTLED: function handleConjureTurnSettled(entityId) {
    entityId = entityId.entityId;
    const value = ReadState.get(entityId.projectId, ReadStateTypes.CONJURING_PROJECT);
    value._persisted = true;
    value.ackMessageId = entityId;
    value.mentionCount = value.mentionCount + 1;
  },
  CONJURE_PROJECT_ACK: function handleConjureProjectAck(projectId) {
    let obj2;
    const ifExists = ReadState.getIfExists(projectId.projectId, ReadStateTypes.CONJURING_PROJECT);
    if (null != ifExists) {
      if (0 !== ifExists.mentionCount) {
        const _Date = Date;
        obj = { messageId: obj2.fromTimestamp(Date.now()), isExplicitUserAction: true, trackAnalytics: false, immediate: true };
        obj2 = require("SnowflakeUtils");
        return ifExists.ack(obj);
      }
    }
    return false;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleConjureProjectDeleteSuccess(projectId) {
    return ReadState.clear(projectId.projectId, ReadStateTypes.CONJURING_PROJECT);
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let tmp = state.state === constants12.ACTIVE;
    if (tmp) {
      const location = { section: constants3.CHANNEL, object: constants2.ACK_APP_FOREGROUND, objectType: constants.ACK_AUTOMATIC };
      channelId = SelectedChannelStore.getChannelId();
      let flag = false;
      if (null != channelId) {
        const value = ReadState.get(channelId);
        let ackResult = shouldAutomaticallyAck(value, undefined);
        if (ackResult) {
          const obj2 = { trackAnalytics: true, location };
          ackResult = value.ack(obj2);
        }
        flag = ackResult;
      }
      tmp = flag;
    }
    return tmp;
  }
};
const readStateStoreClass = new ReadStateStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ReadStateStore.tsx");

export default readStateStoreClass;
export { shouldBadgeMessage };
export { isNonMutedPrivateMessage };
export { ReadState };