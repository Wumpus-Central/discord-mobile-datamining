// === Module 15259: getSelectedGuildChannel ===

// Module 15259 (getSelectedGuildChannel)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import dispatcherDefault from "dispatcher" /* 4163 */;
import StickerFormat from "StickerFormat" /* 5177 */;
import isReactionMilestoneNotification from "isReactionMilestoneNotification" /* 10115 */;
import closure_3 from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_5 from "loadSavedGuildStickers" /* 5409 */;
import { createChannelRecord } from "createChannelRecord" /* 1395 */;
import closure_7 from "hasFlag" /* 4100 */;
import closure_8 from "ensureGuildLoaded" /* 1391 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "handleConnectionOpen" /* 1982 */;
import closure_11 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function getSelectedGuildChannel() {
  const channelId = store3.getChannelId();
  let channel;
  if (null != channelId) {
    channel = store.getChannel(channelId);
  }
  if (null == channel) {
    obj1 = dispatcherDefault;
    let obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Select a channel first", toastDurationMs: 4000 };
    obj[1] = function icon() {
      return callback2(callback(table[14]).WarningIcon, {});
    };
    obj1.open(obj);
    obj = null;
  } else {
    const guildId = channel.getGuildId();
    obj = { channel: null, guild: null };
    obj[0] = channel;
    let guild;
    if (null != guildId) {
      guild = store2.getGuild(guildId);
    }
    obj[1] = guild;
  }
  if (null == obj) {
    return null;
  } else if (null == obj.guild) {
    obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Select a guild channel first", toastDurationMs: 4000 };
    obj[1] = function icon() {
      return callback2(callback(table[14]).WarningIcon, {});
    };
    dispatcherDefault.open(obj);
    obj1 = null;
    const obj5 = dispatcherDefault;
  } else {
    obj1 = { channel: null, guild: null };
    ({ channel: obj4[0], guild: obj4[1] } = obj);
  }
}
function buildTestMessageData(arg0, items) {
  if (items === undefined) {
    items = [];
  }
  const channelId = store3.getChannelId();
  let channel;
  if (null != channelId) {
    channel = store.getChannel(channelId);
  }
  if (null == channel) {
    obj1 = dispatcherDefault;
    let obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Select a channel first", toastDurationMs: 4000 };
    obj[1] = function icon() {
      return callback2(callback(table[14]).WarningIcon, {});
    };
    obj1.open(obj);
    obj = null;
  } else {
    const guildId = channel.getGuildId();
    obj = { channel: null, guild: null };
    obj[0] = channel;
    let guild;
    if (null != guildId) {
      guild = store2.getGuild(guildId);
    }
    obj[1] = guild;
  }
  let currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    let obj3 = dispatcherDefault;
    obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Current user is null", toastDurationMs: 4000 };
    obj[1] = function icon() {
      return callback2(callback(table[14]).WarningIcon, {});
    };
    obj3.open(obj);
    currentUser = null;
  }
  if (null != obj) {
    if (null != currentUser) {
      if ("media-only" === arg0) {
        obj1 = { content: "", attachments: null, stickerItems: null };
        obj1[1] = [];
        name = stickerById.getStickerById(c17);
        if (null != name) {
          const obj2 = { id: null, format_type: null, name: null };
          ({ id: obj12[0], format_type: obj12[1], name } = name);
          obj2[2] = name;
          obj3 = obj2;
        } else {
          obj3 = { id: null, format_type: null, name: "Cheer" };
          obj3[0] = tmp20;
          obj3[1] = StickerFormat.StickerFormat.APNG;
        }
        items1 = [obj3];
        obj1[2] = items1;
        tmp20 = c17;
      } else {
        if ("text-and-media" === arg0) {
          const obj4 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", attachments: null, stickerItems: null };
          const obj5 = { id: null, url: null, proxy_url: null, filename: "og_img_discord_home.png", size: 54697, width: 1200, height: 630, content_type: "image/png" };
          let obj7 = DISCORD_EPOCHDefault;
          let obj8 = DISCORD_EPOCHDefault;
          const _Date = Date;
          obj5[0] = obj7.cast(obj8.fromTimestamp(Date.now()));
          obj5[1] = c18;
          obj5[2] = c18;
          const items2 = [obj5];
          obj4[1] = items2;
          obj4[2] = [];
          let tmp14 = obj4;
        } else if ("text-only" === arg0) {
          const obj6 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: null, stickerItems: null };
          obj6[1] = [];
          obj6[2] = [];
          tmp14 = obj6;
        }
        obj7 = { attachments: null, stickerItems: null, reactions: null };
        ({ attachments: obj13[0], stickerItems: obj13[1] } = tmp14);
        obj7[2] = items;
        let attachments = obj7.attachments;
        if (undefined === attachments) {
          attachments = [];
        }
        let stickerItems = obj7.stickerItems;
        if (undefined === stickerItems) {
          stickerItems = [];
        }
        let reactions = obj7.reactions;
        if (undefined === reactions) {
          reactions = [];
        }
        obj8 = { id: null, channel_id: null, author: null, content: null, attachments: null, sticker_items: null, reactions: null, timestamp: null };
        const _Date2 = Date;
        obj8[0] = DISCORD_EPOCHDefault.fromTimestamp(Date.now());
        obj8[1] = obj.channel.id;
        obj8[2] = currentUser;
        obj8[3] = tmp14.content;
        obj8[4] = attachments;
        obj8[5] = stickerItems;
        obj8[6] = reactions;
        const _Date3 = Date;
        const date = new Date();
        obj8[7] = date;
        const tmp35 = new closure_7(obj8);
        const obj9 = { channel: null, guild: null, user: null, message: null };
        ({ channel: obj16[0], guild: obj16[1] } = obj);
        obj9[2] = currentUser;
        obj9[3] = tmp35;
        return obj9;
      }
    }
  }
  return null;
}
function buildReactionNotification(arg0, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_21];
    tmp = items;
  }
  const tmp3 = buildTestMessageData(arg0, tmp);
  if (null == tmp3) {
    return null;
  } else {
    ({ channel, message } = tmp3);
    let obj = { type: null, channel: null, guild: null, user: null, message: null, parentChannel: null, reaction: null };
    obj[0] = InAppNotificationTypes.REACTION;
    obj[1] = channel;
    ({ guild: obj4[2], user: obj4[3] } = tmp3);
    obj[4] = message;
    channel = undefined;
    if (null != channel.parent_id) {
      channel = store.getChannel(channel.parent_id);
    }
    obj[5] = channel;
    obj[6] = closure_21;
    obj = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
    obj[0] = message.id;
    obj[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.REACTION);
    obj[2] = function onDismiss() {
      return callback(table[16]).clearNotification();
    };
    const obj2 = isReactionMilestoneNotification;
    const tmp12 = InAppNotificationTypes;
    obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
    const merged = Object.assign(obj);
    return obj;
  }
}
({ ChannelTypes: closure_12, InAppNotificationTypes } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let c17 = "781324722394103808";
let c18 = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
let closure_21 = { emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 1, count_details: { normal: 1 }, burst_count: 0 };
let items = [{ emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 10, count_details: { normal: 10 }, burst_count: 0 }];
let items1 = [{ variant: "text-only", label: "Text Only" }, { variant: "media-only", label: "Media Only" }, { variant: "text-and-media", label: "Message and Media" }];
let items2 = [
  {
    type: InAppNotificationTypes.MESSAGE,
    label: "Message",
    build: function buildMessageNotification(arg0) {
      const tmp = buildTestMessageData(arg0);
      if (null == tmp) {
        return null;
      } else {
        ({ channel, message } = tmp);
        let obj = { type: null, channel: null, guild: null, parentChannel: null, message: null, mentionCount: 1 };
        obj[0] = InAppNotificationTypes.MESSAGE;
        obj[1] = channel;
        obj[2] = tmp.guild;
        channel = undefined;
        if (null != channel.parent_id) {
          channel = store.getChannel(channel.parent_id);
        }
        obj[3] = channel;
        obj[4] = message;
        obj = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj[0] = message.id;
        obj[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.MESSAGE);
        obj[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj2 = isReactionMilestoneNotification;
        const tmp9 = InAppNotificationTypes;
        obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
        const merged = Object.assign(obj);
        return obj;
      }
    }
  },
  { type: InAppNotificationTypes.REACTION, label: "Reaction", build: buildReactionNotification },
  {
    type: InAppNotificationTypes.REACTION,
    label: "Reaction Milestone",
    build: function buildReactionMilestoneNotification(arg0) {
      return buildReactionNotification(arg0, items);
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REMINDER,
    label: "Message Reminder",
    build: function buildMessageReminderNotification(arg0) {
      const tmp = buildTestMessageData(arg0);
      if (null == tmp) {
        return null;
      } else {
        ({ channel, message } = tmp);
        let obj = { type: null, channel: null, author: null, savedMessage: null };
        obj[0] = InAppNotificationTypes.MESSAGE_REMINDER;
        obj[1] = channel;
        obj[2] = tmp.user;
        obj = { message: null, saveData: null };
        obj[0] = message;
        obj = { channelId: null, messageId: null, savedAt: null };
        obj[0] = channel.id;
        obj[1] = message.id;
        const _Date = Date;
        const date = new Date();
        obj[2] = date;
        obj[1] = obj;
        obj[3] = obj;
        obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1[0] = message.id;
        obj1[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.MESSAGE_REMINDER);
        obj1[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj5 = isReactionMilestoneNotification;
        obj1[3] = isReactionMilestoneNotification.generateInAppNotificationId();
        const merged = Object.assign(obj1);
        return obj;
      }
    }
  }
];
let closure_25 = items2.map((label) => {
  ({ type: require, build: importDefault } = label);
  return {
    title: label.label,
    options: items1.map((label) => {
      const variant = label.variant;
      return {
        type: variant,
        label: label.label,
        build() {
          return closure_1_1(variant);
        }
      };
    })
  };
});
const items3 = [
  {
    type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND,
    label: "Message Failed To Send",
    subLabel: "Enqueues notification using the currently selected channel.",
    build: function buildMessageFailedToSendNotification() {
      const channelId = store3.getChannelId();
      let channel;
      if (null != channelId) {
        channel = store.getChannel(channelId);
      }
      if (null == channel) {
        obj1 = dispatcherDefault;
        let obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Select a channel first", toastDurationMs: 4000 };
        obj[1] = function icon() {
          return callback2(callback(table[14]).WarningIcon, {});
        };
        obj1.open(obj);
        obj = null;
      } else {
        const guildId = channel.getGuildId();
        obj = { channel: null, guild: null };
        obj[0] = channel;
        let guild;
        if (null != guildId) {
          guild = store2.getGuild(guildId);
        }
        obj[1] = guild;
      }
      if (null == obj) {
        return null;
      } else {
        const obj4 = DISCORD_EPOCHDefault;
        const _Date = Date;
        const castResult = obj4.cast(DISCORD_EPOCHDefault.fromTimestamp(Date.now()));
        obj = { type: null, channelId: null, messageId: null };
        obj[0] = InAppNotificationTypes.MESSAGE_FAILED_TO_SEND;
        obj[1] = obj.channel.id;
        obj[2] = castResult;
        obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1[0] = castResult;
        const obj5 = DISCORD_EPOCHDefault;
        obj1[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
        obj1[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj8 = isReactionMilestoneNotification;
        obj1[3] = isReactionMilestoneNotification.generateInAppNotificationId();
        const merged = Object.assign(obj1);
        return obj;
      }
    }
  },
  {
    type: InAppNotificationTypes.FORUM_THREAD_CREATED,
    label: "Forum Thread Created",
    subLabel: "Enqueues notification using the currently selected channel as the parent and a mock thread.",
    build: function buildForumThreadCreatedNotification() {
      const tmp = getSelectedGuildChannel();
      let currentUser = authStore.getCurrentUser();
      if (null == currentUser) {
        let obj = dispatcherDefault;
        obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Current user is null", toastDurationMs: 4000 };
        obj[1] = function icon() {
          return callback2(callback(table[14]).WarningIcon, {});
        };
        obj.open(obj);
        currentUser = null;
      }
      if (null != tmp) {
        if (null != currentUser) {
          const channel = tmp.channel;
          obj = { id: null, type: null, name: "Test Thread", guild_id: null, parent_id: null, ownerId: null };
          const obj4 = DISCORD_EPOCHDefault;
          const tmp6 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
          const _Date = Date;
          obj[0] = obj4.cast(DISCORD_EPOCHDefault.fromTimestamp(Date.now()));
          obj[1] = tmp6;
          obj[3] = tmp.guild.id;
          obj[4] = channel.id;
          obj[5] = currentUser.id;
          const tmp11 = createChannelRecord(obj);
          obj1 = { type: null, thread: null, threadCreator: null, parentChannel: null, guild: null };
          obj1[0] = InAppNotificationTypes.FORUM_THREAD_CREATED;
          obj1[1] = tmp11;
          obj1[2] = currentUser;
          ({ channel: obj6[3], guild: obj6[4] } = tmp);
          const obj2 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
          obj2[0] = tmp11.id;
          const obj5 = DISCORD_EPOCHDefault;
          obj2[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.FORUM_THREAD_CREATED);
          obj2[2] = function onDismiss() {
            return callback(table[16]).clearNotification();
          };
          const obj8 = isReactionMilestoneNotification;
          obj2[3] = isReactionMilestoneNotification.generateInAppNotificationId();
          const merged = Object.assign(obj2);
          return obj1;
        }
      }
      return null;
    }
  },
  {
    type: InAppNotificationTypes.BUG_REPORTER,
    label: "Bug Reporter",
    subLabel: "Enqueues notification.",
    build: function buildBugReporterNotification() {
      let obj = { type: InAppNotificationTypes.BUG_REPORTER, image: null };
      obj = {
        key: "dev-tools-bug-reporter-test",
        duration: isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.BUG_REPORTER),
        onDismiss() {
          return callback(table[16]).clearNotification();
        },
        inAppNotificationId: null
      };
      const obj3 = isReactionMilestoneNotification;
      obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.ALERT,
    label: "Alert",
    subLabel: "Enqueues notification using the currently selected server channel.",
    build: function buildAlertNotification() {
      const tmp = getSelectedGuildChannel();
      let tmp2 = null;
      if (null != tmp) {
        let obj = { type: null, channel: null, guild: null };
        obj[0] = InAppNotificationTypes.ALERT;
        ({ channel: obj[1], guild: obj[2] } = tmp);
        obj = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj[0] = tmp.guild.id;
        obj[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.ALERT);
        obj[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj3 = isReactionMilestoneNotification;
        obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
        const merged = Object.assign(obj);
        tmp2 = obj;
        const obj4 = isReactionMilestoneNotification;
      }
      return tmp2;
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REQUEST,
    label: "Message Request",
    subLabel: "Enqueues notification using the current user as the requester.",
    build: function buildMessageRequestNotification() {
      let currentUser = authStore.getCurrentUser();
      if (null == currentUser) {
        let obj = dispatcherDefault;
        obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Current user is null", toastDurationMs: 4000 };
        obj[1] = function icon() {
          return callback2(callback(table[14]).WarningIcon, {});
        };
        obj.open(obj);
        currentUser = null;
      }
      let tmp5 = null;
      if (null != currentUser) {
        obj = { type: null, author: null, numMutualGuilds: 3 };
        obj[0] = InAppNotificationTypes.MESSAGE_REQUEST;
        obj[1] = currentUser;
        const _HermesInternal = HermesInternal;
        obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1[0] = "dev-tools-message-request-" + currentUser.id;
        obj1[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.MESSAGE_REQUEST);
        obj1[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj5 = isReactionMilestoneNotification;
        obj1[3] = isReactionMilestoneNotification.generateInAppNotificationId();
        const merged = Object.assign(obj1);
        tmp5 = obj;
        const obj6 = isReactionMilestoneNotification;
      }
      return tmp5;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING,
    label: "Restricted Hours Warning",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedHoursWarningNotification() {
      let obj = { type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING, title: "Restricted Hours Warning", subtitle: "Test restricted hours warning." };
      obj = {
        key: "dev-tools-restricted-hours-warning",
        duration: isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.RESTRICTED_HOURS_WARNING),
        onDismiss() {
          return callback(table[16]).clearNotification();
        },
        inAppNotificationId: null
      };
      const obj3 = isReactionMilestoneNotification;
      obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED,
    label: "Restricted Schedule Updated",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedScheduleUpdatedNotification() {
      let obj = { type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED, title: "Restricted Schedule Updated", subtitle: "Test restricted schedule update." };
      obj = {
        key: "dev-tools-restricted-schedule-updated",
        duration: isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED),
        onDismiss() {
          return callback(table[16]).clearNotification();
        },
        inAppNotificationId: null
      };
      const obj3 = isReactionMilestoneNotification;
      obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj;
    }
  }
];
let obj1 = { padding: ThemesDefault.space.PX_16 };
let obj2 = {
  type: InAppNotificationTypes.MESSAGE,
  label: "Message",
  build: function buildMessageNotification(arg0) {
    const tmp = buildTestMessageData(arg0);
    if (null == tmp) {
      return null;
    } else {
      ({ channel, message } = tmp);
      let obj = { type: null, channel: null, guild: null, parentChannel: null, message: null, mentionCount: 1 };
      obj[0] = InAppNotificationTypes.MESSAGE;
      obj[1] = channel;
      obj[2] = tmp.guild;
      channel = undefined;
      if (null != channel.parent_id) {
        channel = store.getChannel(channel.parent_id);
      }
      obj[3] = channel;
      obj[4] = message;
      obj = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
      obj[0] = message.id;
      obj[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.MESSAGE);
      obj[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj2 = isReactionMilestoneNotification;
      const tmp9 = InAppNotificationTypes;
      obj[3] = isReactionMilestoneNotification.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj;
    }
  }
};
let obj3 = {
  type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND,
  label: "Message Failed To Send",
  subLabel: "Enqueues notification using the currently selected channel.",
  build: function buildMessageFailedToSendNotification() {
    const channelId = store3.getChannelId();
    let channel;
    if (null != channelId) {
      channel = store.getChannel(channelId);
    }
    if (null == channel) {
      obj1 = dispatcherDefault;
      let obj = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon: null, content: "Select a channel first", toastDurationMs: 4000 };
      obj[1] = function icon() {
        return callback2(callback(table[14]).WarningIcon, {});
      };
      obj1.open(obj);
      obj = null;
    } else {
      const guildId = channel.getGuildId();
      obj = { channel: null, guild: null };
      obj[0] = channel;
      let guild;
      if (null != guildId) {
        guild = store2.getGuild(guildId);
      }
      obj[1] = guild;
    }
    if (null == obj) {
      return null;
    } else {
      const obj4 = DISCORD_EPOCHDefault;
      const _Date = Date;
      const castResult = obj4.cast(DISCORD_EPOCHDefault.fromTimestamp(Date.now()));
      obj = { type: null, channelId: null, messageId: null };
      obj[0] = InAppNotificationTypes.MESSAGE_FAILED_TO_SEND;
      obj[1] = obj.channel.id;
      obj[2] = castResult;
      obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
      obj1[0] = castResult;
      const obj5 = DISCORD_EPOCHDefault;
      obj1[1] = isReactionMilestoneNotification.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
      obj1[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj8 = isReactionMilestoneNotification;
      obj1[3] = isReactionMilestoneNotification.generateInAppNotificationId();
      const merged = Object.assign(obj1);
      return obj;
    }
  }
};
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx");

export default function DevToolsInAppNotificationTestingScreen() {
  const tmp = callback3();
  const _require = React.useCallback((build) => {
    const buildResult = build.build();
    if (null != buildResult) {
      callback2(table[16]).enqueueNotification(buildResult);
      const obj = callback2(table[16]);
    }
  }, []);
  let obj = { style: tmp.container, contentContainerStyle: items, children: null };
  items = [tmp.content, { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom }];
  obj = { size: ThemesDefault.space.PX_16 };
  items1 = [
    callback(_require(1297).Spacer, obj),
    closure_25.map((title) => {
      let obj = { children: null };
      obj = {
        title: title.title,
        description: "Enqueues notification using the currently selected channel.",
        hasIcons: true,
        children: options.map((label) => {
          closure_0 = label;
          return closure_1_14(closure_1_0(closure_1_2[22]).TableRow, {
            label: label.label,
            subLabel: label.subLabel,
            icon: closure_1_14(closure_1_0(closure_1_2[23]).BeakerIcon, {}),
            onPress() {
              return label(label);
            },
            trailing: closure_1_14(closure_1_0(closure_1_2[24]).TableRowArrow, {})
          }, label.label);
        })
      };
      options = title.options;
      items = [closure_1_14(callback(closure_1_2[21]).TableRowGroup, obj), ];
      obj = { size: closure_1_1(closure_1_2[12]).space.PX_16 };
      items[1] = closure_1_14(callback(closure_1_2[20]).Spacer, obj);
      obj[0] = items;
      return closure_1_15(closure_1_3.Fragment, obj, title.title);
    }),

  ];
  obj = {
    title: "Other Notification Types",
    hasIcons: true,
    children: items3.map((label) => {
      const callback = label;
      return closure_1_14(callback(closure_1_2[22]).TableRow, {
        label: label.label,
        subLabel: label.subLabel,
        icon: closure_1_14(callback(closure_1_2[23]).BeakerIcon, {}),
        onPress() {
          return label(label);
        },
        trailing: closure_1_14(callback(closure_1_2[24]).TableRowArrow, {})
      }, label.label);
    })
  };
  items1[2] = callback(_require(5957).TableRowGroup, obj);
  obj[2] = items1;
  return callback2(ScrollView, obj);
};