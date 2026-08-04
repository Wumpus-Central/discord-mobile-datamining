import MAX_TIMES_SHOWN from "MAX_TIMES_SHOWN";
import { ScrollView } from "updateUserGuildSettings";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import { createChannelRecord } from "createChannelRecord";
import hasFlag from "hasFlag";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "DISCORD_EPOCH";
import createCacheKey from "createCacheKey";

let InAppNotificationTypes;
let closure_12;
let closure_14;
let closure_15;
const require = arg1;
function handleResetInAppNotificationExpandNux() {
  const result = require(1355) /* updateUserGuildSettings */.removeDismissedContent(require(1358) /* DismissibleContent */.DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX);
  const obj = require(1355) /* updateUserGuildSettings */;
  require(9769) /* MAX_TIMES_SHOWN */.resetExpandNUXState();
}
function getSelectedGuildChannel() {
  const channelId = store3.getChannelId();
  let channel;
  if (null != channelId) {
    channel = store.getChannel(channelId);
  }
  if (null == channel) {
    let obj1 = importDefault(3986);
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
    importDefault(3986).open(obj);
    obj1 = null;
    const obj5 = importDefault(3986);
  } else {
    obj1 = { channel: null, guild: null };
    ({ channel: obj4[0], guild: obj4[1] } = obj);
  }
}
function buildTestMessageData(arg0, items) {
  let name;
  if (items === undefined) {
    items = [];
  }
  const channelId = store3.getChannelId();
  let channel;
  if (null != channelId) {
    channel = store.getChannel(channelId);
  }
  if (null == channel) {
    let obj1 = importDefault(3986);
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
    let obj3 = importDefault(3986);
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
        name = stickerById.getStickerById(c18);
        if (null != name) {
          const obj2 = { id: null, format_type: null, name: null };
          ({ id: obj12[0], format_type: obj12[1], name } = name);
          obj2[2] = name;
          obj3 = obj2;
        } else {
          obj3 = { id: null, format_type: null, name: "Cheer" };
          obj3[0] = tmp20;
          obj3[1] = require(4951) /* StickerFormat */.StickerFormat.APNG;
        }
        const items1 = [obj3];
        obj1[2] = items1;
        tmp20 = c18;
      } else {
        if ("text-and-media" === arg0) {
          const obj4 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", attachments: null, stickerItems: null };
          const obj5 = { id: null, url: null, proxy_url: null, filename: "og_img_discord_home.png", size: 54697, width: 1200, height: 630, content_type: "image/png" };
          let obj7 = importDefault(11);
          let obj8 = importDefault(11);
          const _Date = Date;
          obj5[0] = obj7.cast(obj8.fromTimestamp(Date.now()));
          obj5[1] = c19;
          obj5[2] = c19;
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
        obj8[0] = importDefault(11).fromTimestamp(Date.now());
        obj8[1] = obj.channel.id;
        obj8[2] = currentUser;
        obj8[3] = tmp14.content;
        obj8[4] = attachments;
        obj8[5] = stickerItems;
        obj8[6] = reactions;
        const _Date3 = Date;
        const date = new Date();
        obj8[7] = date;
        const tmp35 = new hasFlag(obj8);
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
  let channel;
  let message;
  let tmp = items;
  if (items === undefined) {
    items = [closure_22];
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
    obj[6] = closure_22;
    obj = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
    obj[0] = message.id;
    obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.REACTION);
    obj[2] = function onDismiss() {
      return callback(table[16]).clearNotification();
    };
    const obj2 = require(9683) /* extractMetadataFromNotification */;
    const tmp12 = InAppNotificationTypes;
    obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
    const merged = Object.assign(obj);
    return obj;
  }
}
({ ChannelTypes: closure_12, InAppNotificationTypes } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let c18 = "781324722394103808";
let c19 = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
let closure_22 = { emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 1, count_details: { normal: 1 }, burst_count: 0 };
let items = [{ emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 10, count_details: { normal: 10 }, burst_count: 0 }];
let items1 = [{ variant: "text-only", label: "Text Only" }, { variant: "media-only", label: "Media Only" }, { variant: "text-and-media", label: "Message and Media" }];
let items2 = [
  {
    type: InAppNotificationTypes.MESSAGE,
    label: "Message",
    build: function buildMessageNotification(arg0) {
      let channel;
      let message;
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
        obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.MESSAGE);
        obj[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj2 = require(9683) /* extractMetadataFromNotification */;
        const tmp9 = InAppNotificationTypes;
        obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
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
      let channel;
      let message;
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
        const obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1[0] = message.id;
        obj1[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.MESSAGE_REMINDER);
        obj1[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj5 = require(9683) /* extractMetadataFromNotification */;
        obj1[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
        const merged = Object.assign(obj1);
        return obj;
      }
    }
  }
];
let closure_26 = items2.map((label) => {
  let importDefault;
  let require;
  ({ type: require, build: importDefault } = label);
  return {
    title: label.label,
    options: items1.map((label) => {
      const variant = label.variant;
      return {
        type: variant,
        label: label.label,
        build() {
          return outer1_1(variant);
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
        let obj1 = importDefault(3986);
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
        const obj4 = importDefault(11);
        const _Date = Date;
        const castResult = obj4.cast(importDefault(11).fromTimestamp(Date.now()));
        obj = { type: null, channelId: null, messageId: null };
        obj[0] = InAppNotificationTypes.MESSAGE_FAILED_TO_SEND;
        obj[1] = obj.channel.id;
        obj[2] = castResult;
        obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1[0] = castResult;
        const obj5 = importDefault(11);
        obj1[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
        obj1[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj8 = require(9683) /* extractMetadataFromNotification */;
        obj1[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
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
        let obj = importDefault(3986);
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
          const obj4 = importDefault(11);
          const tmp6 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
          const _Date = Date;
          obj[0] = obj4.cast(importDefault(11).fromTimestamp(Date.now()));
          obj[1] = tmp6;
          obj[3] = tmp.guild.id;
          obj[4] = channel.id;
          obj[5] = currentUser.id;
          const tmp11 = createChannelRecord(obj);
          const obj1 = { type: null, thread: null, threadCreator: null, parentChannel: null, guild: null };
          obj1[0] = InAppNotificationTypes.FORUM_THREAD_CREATED;
          obj1[1] = tmp11;
          obj1[2] = currentUser;
          ({ channel: obj6[3], guild: obj6[4] } = tmp);
          const obj2 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
          obj2[0] = tmp11.id;
          const obj5 = importDefault(11);
          obj2[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.FORUM_THREAD_CREATED);
          obj2[2] = function onDismiss() {
            return callback(table[16]).clearNotification();
          };
          const obj8 = require(9683) /* extractMetadataFromNotification */;
          obj2[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
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
      obj = { key: "dev-tools-bug-reporter-test", duration: null, onDismiss: null, inAppNotificationId: null };
      obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.BUG_REPORTER);
      obj[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj3 = require(9683) /* extractMetadataFromNotification */;
      obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
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
        obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.ALERT);
        obj[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj3 = require(9683) /* extractMetadataFromNotification */;
        obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
        const merged = Object.assign(obj);
        tmp2 = obj;
        const obj4 = require(9683) /* extractMetadataFromNotification */;
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
        let obj = importDefault(3986);
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
        const obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1[0] = "dev-tools-message-request-" + currentUser.id;
        obj1[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.MESSAGE_REQUEST);
        obj1[2] = function onDismiss() {
          return callback(table[16]).clearNotification();
        };
        const obj5 = require(9683) /* extractMetadataFromNotification */;
        obj1[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
        const merged = Object.assign(obj1);
        tmp5 = obj;
        const obj6 = require(9683) /* extractMetadataFromNotification */;
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
      obj = { key: "dev-tools-restricted-hours-warning", duration: null, onDismiss: null, inAppNotificationId: null };
      obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.RESTRICTED_HOURS_WARNING);
      obj[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj3 = require(9683) /* extractMetadataFromNotification */;
      obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
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
      obj = { key: "dev-tools-restricted-schedule-updated", duration: null, onDismiss: null, inAppNotificationId: null };
      obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED);
      obj[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj3 = require(9683) /* extractMetadataFromNotification */;
      obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj;
    }
  }
];
let obj1 = { padding: require("Themes").space.PX_16 };
let obj2 = {
  type: InAppNotificationTypes.MESSAGE,
  label: "Message",
  build: function buildMessageNotification(arg0) {
    let channel;
    let message;
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
      obj[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.MESSAGE);
      obj[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj2 = require(9683) /* extractMetadataFromNotification */;
      const tmp9 = InAppNotificationTypes;
      obj[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
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
      let obj1 = importDefault(3986);
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
      const obj4 = importDefault(11);
      const _Date = Date;
      const castResult = obj4.cast(importDefault(11).fromTimestamp(Date.now()));
      obj = { type: null, channelId: null, messageId: null };
      obj[0] = InAppNotificationTypes.MESSAGE_FAILED_TO_SEND;
      obj[1] = obj.channel.id;
      obj[2] = castResult;
      obj1 = { key: null, duration: null, onDismiss: null, inAppNotificationId: null };
      obj1[0] = castResult;
      const obj5 = importDefault(11);
      obj1[1] = require(9683) /* extractMetadataFromNotification */.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
      obj1[2] = function onDismiss() {
        return callback(table[16]).clearNotification();
      };
      const obj8 = require(9683) /* extractMetadataFromNotification */;
      obj1[3] = require(9683) /* extractMetadataFromNotification */.generateInAppNotificationId();
      const merged = Object.assign(obj1);
      return obj;
    }
  }
};
let result = require("loadSavedGuildStickers").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx");

export default function DevToolsInAppNotificationTestingScreen() {
  const tmp = createCacheKey();
  const _require = React.useCallback((build) => {
    const buildResult = build.build();
    if (null != buildResult) {
      callback2(table[16]).enqueueNotification(buildResult);
      const obj = callback2(table[16]);
    }
  }, []);
  let obj = { style: tmp.container, contentContainerStyle: items, children: null };
  items = [tmp.content, { paddingBottom: tmp.content.padding + importDefault(1581)().bottom }];
  obj = { title: "Expand NUX", hasIcons: true, children: null };
  obj = { label: "Reset Expand NUX", subLabel: "Resets in app notification expand NUX dismissible content.", onPress: handleResetInAppNotificationExpandNux, icon: null, trailing: null };
  obj[3] = callback(_require(13759).BeakerIcon, {});
  obj[4] = callback(_require(5322).TableRowArrow, {});
  obj[2] = callback(_require(5315).TableRow, obj);
  const items1 = [callback(_require(5649).TableRowGroup, obj), , , ];
  const obj1 = { size: null };
  obj1[0] = importDefault(712).space.PX_16;
  items1[1] = callback(_require(1297).Spacer, obj1);
  items1[2] = closure_26.map((title) => {
    let obj = { children: null };
    obj = { title: title.title, description: "Enqueues notification using the currently selected channel.", hasIcons: true, children: null };
    const options = title.options;
    obj[3] = options.map((label) => {
      let closure_0 = label;
      const obj = { label: label.label, subLabel: label.subLabel, icon: null, onPress: null, trailing: null };
      obj[2] = outer1_14(outer1_0(outer1_2[25]).BeakerIcon, {});
      obj[3] = function onPress() {
        return label(label);
      };
      obj[4] = outer1_14(outer1_0(outer1_2[26]).TableRowArrow, {});
      return outer1_14(outer1_0(outer1_2[24]).TableRow, obj, label.label);
    });
    const items = [outer1_14(callback(outer1_2[23]).TableRowGroup, obj), ];
    obj = { size: null };
    obj[0] = outer1_1(outer1_2[12]).space.PX_16;
    items[1] = outer1_14(callback(outer1_2[27]).Spacer, obj);
    obj[0] = items;
    return outer1_15(outer1_3.Fragment, obj, title.title);
  });
  const obj2 = { title: "Other Notification Types", hasIcons: true, children: null };
  obj2[2] = items3.map((label) => {
    const callback = label;
    const obj = { label: label.label, subLabel: label.subLabel, icon: null, onPress: null, trailing: null };
    obj[2] = outer1_14(callback(outer1_2[25]).BeakerIcon, {});
    obj[3] = function onPress() {
      return label(label);
    };
    obj[4] = outer1_14(callback(outer1_2[26]).TableRowArrow, {});
    return outer1_14(callback(outer1_2[24]).TableRow, obj, label.label);
  });
  items1[3] = callback(_require(5649).TableRowGroup, obj2);
  obj[2] = items1;
  return callback2(ScrollView, obj);
};