// === Module 15608: DevToolsInAppNotificationTestingScreen ===

// Module 15608 (DevToolsInAppNotificationTestingScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4574 */;
import StickersTypes from "StickersTypes" /* 5429 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12477 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12479 */;
import react from "react" /* 19 */;
import StickersStore from "StickersStore" /* 5687 */;
import MessageRecord from "MessageRecord" /* 4520 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let InAppNotificationTypes;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let obj3;
function icon() {
  return closure_1_14(require("WarningIcon").WarningIcon, {});
}
function onDismiss() {
  const obj = InAppNotificationActionCreatorsDefault;
  return obj.clearNotification();
}
function buildTestMessageData(arg0) {
  let cast;
  let date;
  let guild;
  let items2;
  let obj;
  let obj10;
  let obj16;
  if (items === undefined) {
    items = [];
  }
  const channelId = SelectedChannelStore.getChannelId();
  let channel1;
  if (null != channelId) {
    channel1 = ChannelStore.getChannel(channelId);
  }
  if (null == channel1) {
    const obj2 = DesignSystemsNotificationComponentsExperiment;
    const designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
      obj = null;
    } else {
      const obj4 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
      obj3.open(obj4);
      obj = null;
    }
  } else {
    const guildId = channel1.getGuildId();
    obj = { channel: channel1, guild };
    guild = undefined;
    if (null != guildId) {
      guild = GuildStore.getGuild(guildId);
    }
  }
  let currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    const obj5 = DesignSystemsNotificationComponentsExperiment;
    const designSystemsNotificationComponents1 = obj5.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
    const obj6 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents1) {
      obj6.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Current user is null", variant: "critical" });
      currentUser = null;
    } else {
      const obj7 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Current user is null", toastDurationMs: 4000 };
      obj6.open(obj7);
      currentUser = null;
    }
  }
  if (null != obj) {
    if (null != currentUser) {
      let tmp20;
      if ("media-only" === arg0) {
        let obj11;
        const obj8 = { content: "", attachments: [], stickerItems: items1 };
        const stickerById = StickersStore.getStickerById(id);
        if (null != stickerById) {
          const obj9 = { id: null, format_type: null, name: null };
          ({ id: obj13.id, format_type: obj13.format_type, name: obj13.name } = stickerById);
          obj11 = obj9;
        } else {
          obj11 = { id, format_type: StickersTypes.StickerFormat.APNG, name: "Cheer" };
        }
        items1 = [obj11];
        tmp20 = obj8;
      } else if ("text-and-media" === arg0) {
        const obj12 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", attachments: items2, stickerItems: [] };
        size = { id: cast(obj10.fromTimestamp(Date.now())), url: httpscdndiscordappcomassetsog_img_discord_homepng, proxy_url: httpscdndiscordappcomassetsog_img_discord_homepng, filename: "og_img_discord_home.png", size: 54697, width: 1200, height: 630, content_type: "image/png" };
        cast = SnowflakeUtilsDefault.cast;
        SnowflakeUtilsDefault;
        const _Date = Date;
        items2 = [size];
        tmp20 = obj12;
        obj10 = SnowflakeUtilsDefault;
      } else if ("text-only" === arg0) {
        tmp20 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: [], stickerItems: [] };
        const obj15 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: [], stickerItems: [] };
      }
      const obj18 = { attachments: null, stickerItems: null, reactions: items };
      ({ attachments: obj14.attachments, stickerItems: obj14.stickerItems } = tmp20);
      let attachments = obj18.attachments;
      const content = tmp20.content;
      const channel = obj.channel;
      if (undefined === attachments) {
        attachments = [];
      }
      let stickerItems = obj18.stickerItems;
      if (undefined === stickerItems) {
        stickerItems = [];
      }
      let reactions = obj18.reactions;
      if (undefined === reactions) {
        reactions = [];
      }
      const _Date2 = Date;
      const obj28 = { id: obj16.fromTimestamp(Date.now()), channel_id: channel.id, author: currentUser, content, attachments, sticker_items: stickerItems, reactions, timestamp: date };
      const _Date3 = Date;
      const self = this;
      const self2 = this;
      obj16 = SnowflakeUtilsDefault;
      const self3 = this;
      const self4 = this;
      date = new Date();
      ({ channel: obj17.channel, guild: obj17.guild } = obj);
      const obj29 = { channel: null, guild: null, user: currentUser, message: new MessageRecord(obj28) };
      return obj29;
    }
  }
  return null;
}
function buildReactionNotification(arg0) {
  let REACTION;
  let channel;
  let channel1;
  let message;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [reaction];
    tmp = items;
  }
  const tmp3 = buildTestMessageData(arg0, tmp);
  if (null == tmp3) {
    return null;
  } else {
    ({ channel, message } = tmp3);
    const obj5 = { type: InAppNotificationTypes.REACTION, channel, guild: null, user: null, message, parentChannel: channel1, reaction };
    ({ guild: obj4.guild, user: obj4.user } = tmp3);
    channel1 = undefined;
    if (null != channel.parent_id) {
      channel1 = ChannelStore.getChannel(channel.parent_id);
    }
    const obj = { key: message.id, duration: obj2.getNotificationDuration(REACTION), onDismiss, inAppNotificationId: obj3.generateInAppNotificationId() };
    REACTION = InAppNotificationTypes.REACTION;
    obj2 = InAppNotificationUtils;
    obj3 = InAppNotificationUtils;
    const merged = Object.assign(obj);
    return obj5;
  }
}
const ScrollView = react_native.ScrollView;
const createChannelRecord = ChannelRecord.createChannelRecord;
({ ChannelTypes: closure_12, InAppNotificationTypes } = Constants);
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let c17 = "781324722394103808";
let c18 = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
const reaction = { emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 1, count_details: { normal: 1 }, burst_count: 0 };
let items = [{ emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 10, count_details: { normal: 10 }, burst_count: 0 }];
let items1 = [{ variant: "text-only", label: "Text Only" }, { variant: "media-only", label: "Media Only" }, { variant: "text-and-media", label: "Message and Media" }];
let obj4 = {
  type: InAppNotificationTypes.MESSAGE,
  label: "Message",
  build: function buildMessageNotification(arg0) {
    let MESSAGE;
    let channel;
    let channel1;
    let message;
    let obj2;
    let obj3;
    const tmp = buildTestMessageData(arg0);
    if (null == tmp) {
      return null;
    } else {
      ({ channel, message } = tmp);
      const obj4 = { type: InAppNotificationTypes.MESSAGE, channel, guild: tmp.guild, parentChannel: channel1, message, mentionCount: 1 };
      channel1 = undefined;
      if (null != channel.parent_id) {
        channel1 = ChannelStore.getChannel(channel.parent_id);
      }
      const obj = { key: message.id, duration: obj2.getNotificationDuration(MESSAGE), onDismiss, inAppNotificationId: obj3.generateInAppNotificationId() };
      MESSAGE = InAppNotificationTypes.MESSAGE;
      obj2 = InAppNotificationUtils;
      obj3 = InAppNotificationUtils;
      const merged = Object.assign(obj);
      return obj4;
    }
  }
};
let items2 = [
  obj4,
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
      let MESSAGE_REMINDER;
      let channel;
      let date;
      let message;
      let obj2;
      let obj3;
      let obj5;
      let obj6;
      const tmp = buildTestMessageData(arg0);
      if (null == tmp) {
        return null;
      } else {
        ({ channel, message } = tmp);
        const obj = { type: InAppNotificationTypes.MESSAGE_REMINDER, channel, author: tmp.user, savedMessage: obj2 };
        obj2 = { message, saveData: obj3 };
        const _Date = Date;
        const self = this;
        const self2 = this;
        obj3 = { channelId: channel.id, messageId: message.id, savedAt: date };
        date = new Date();
        const obj4 = { key: message.id, duration: obj5.getNotificationDuration(MESSAGE_REMINDER), onDismiss, inAppNotificationId: obj6.generateInAppNotificationId() };
        MESSAGE_REMINDER = InAppNotificationTypes.MESSAGE_REMINDER;
        obj5 = InAppNotificationUtils;
        obj6 = InAppNotificationUtils;
        const merged = Object.assign(obj4);
        return obj;
      }
    }
  }
];
let closure_24 = items2.map((label) => {
  let closure_129_0;
  let closure_129_1;
  ({ type: closure_129_0, build: closure_129_1 } = label);
  const obj = {
    title: label.label,
    options: items1.map((label) => {
      const variant = label.variant;
      return {
        type: variant,
        label: label.label,
        build() {
          return closure_2_1(variant);
        }
      };
    })
  };
  return obj;
});
let obj5 = {
  type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND,
  label: "Message Failed To Send",
  subLabel: "Enqueues notification using the currently selected channel.",
  build: function buildMessageFailedToSendNotification() {
    let MESSAGE_FAILED_TO_SEND;
    let guild;
    let obj;
    let obj8;
    let obj9;
    const channelId = SelectedChannelStore.getChannelId();
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(channelId);
    }
    if (null == channel) {
      const obj2 = DesignSystemsNotificationComponentsExperiment;
      const designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
      const obj3 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
        obj = null;
      } else {
        const obj4 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
        obj3.open(obj4);
        obj = null;
      }
    } else {
      const guildId = channel.getGuildId();
      obj = { channel, guild };
      guild = undefined;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
    }
    if (null == obj) {
      return null;
    } else {
      const cast = SnowflakeUtilsDefault.cast;
      SnowflakeUtilsDefault;
      const _Date = Date;
      const obj5 = SnowflakeUtilsDefault;
      const castResult = cast(obj5.fromTimestamp(Date.now()));
      const obj6 = { type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND, channelId: obj.channel.id, messageId: castResult };
      const obj7 = { key: castResult, duration: obj8.getNotificationDuration(MESSAGE_FAILED_TO_SEND), onDismiss, inAppNotificationId: obj9.generateInAppNotificationId() };
      MESSAGE_FAILED_TO_SEND = InAppNotificationTypes.MESSAGE_FAILED_TO_SEND;
      obj8 = InAppNotificationUtils;
      obj9 = InAppNotificationUtils;
      const merged = Object.assign(obj7);
      return obj6;
    }
  }
};
const items3 = [
  obj5,
  {
    type: InAppNotificationTypes.FORUM_THREAD_CREATED,
    label: "Forum Thread Created",
    subLabel: "Enqueues notification using the currently selected channel as the parent and a mock thread.",
    build: function buildForumThreadCreatedNotification() {
      let FORUM_THREAD_CREATED;
      let cast;
      let guild;
      let guild1;
      let obj;
      let obj13;
      let obj16;
      let obj17;
      let tmp27;
      const channelId = SelectedChannelStore.getChannelId();
      let channel1;
      if (null != channelId) {
        channel1 = ChannelStore.getChannel(channelId);
      }
      if (null == channel1) {
        const obj2 = DesignSystemsNotificationComponentsExperiment;
        const designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj3 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
          obj = null;
        } else {
          const obj4 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
          obj3.open(obj4);
          obj = null;
        }
      } else {
        const guildId = channel1.getGuildId();
        obj = { channel: channel1, guild: guild1 };
        guild1 = undefined;
        if (null != guildId) {
          guild1 = GuildStore.getGuild(guildId);
        }
      }
      let tmp13 = null;
      if (null != obj) {
        let obj11;
        if (null == obj.guild) {
          const obj6 = DesignSystemsNotificationComponentsExperiment;
          const designSystemsNotificationComponents1 = obj6.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
          const obj7 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents1) {
            obj7.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a guild channel first", variant: "critical" });
            obj11 = null;
          } else {
            const obj8 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a guild channel first", toastDurationMs: 4000 };
            obj7.open(obj8);
            obj11 = null;
          }
        } else {
          obj11 = { channel: null, guild: null };
          ({ channel: obj5.channel, guild: obj5.guild } = obj);
        }
        tmp13 = obj11;
      }
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        const obj9 = DesignSystemsNotificationComponentsExperiment;
        const designSystemsNotificationComponents2 = obj9.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj10 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents2) {
          obj10.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Current user is null", variant: "critical" });
          currentUser = null;
        } else {
          const obj12 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Current user is null", toastDurationMs: 4000 };
          obj10.open(obj12);
          currentUser = null;
        }
      }
      if (null != tmp13) {
        if (null != currentUser) {
          const channel = tmp13.channel;
          const obj15 = { id: cast(obj13.fromTimestamp(Date.now())), type: tmp27, name: "Test Thread", guild_id: guild.id, parent_id: channel.id, ownerId: currentUser.id };
          guild = tmp13.guild;
          tmp27 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
          cast = SnowflakeUtilsDefault.cast;
          SnowflakeUtilsDefault;
          const _Date = Date;
          obj13 = SnowflakeUtilsDefault;
          const tmp33 = createChannelRecord(obj15);
          const obj24 = { type: InAppNotificationTypes.FORUM_THREAD_CREATED, thread: tmp33, threadCreator: currentUser, parentChannel: null, guild: null };
          ({ channel: obj14.parentChannel, guild: obj14.guild } = tmp13);
          const obj25 = { key: tmp33.id, duration: obj16.getNotificationDuration(FORUM_THREAD_CREATED), onDismiss, inAppNotificationId: obj17.generateInAppNotificationId() };
          FORUM_THREAD_CREATED = InAppNotificationTypes.FORUM_THREAD_CREATED;
          obj16 = InAppNotificationUtils;
          obj17 = InAppNotificationUtils;
          const merged = Object.assign(obj25);
          return obj24;
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
      let BUG_REPORTER;
      let obj3;
      let obj4;
      const obj2 = { key: "dev-tools-bug-reporter-test", duration: obj3.getNotificationDuration(BUG_REPORTER), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
      BUG_REPORTER = InAppNotificationTypes.BUG_REPORTER;
      const obj = { type: InAppNotificationTypes.BUG_REPORTER, image: null };
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      const merged = Object.assign(obj2);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.ALERT,
    label: "Alert",
    subLabel: "Enqueues notification using the currently selected server channel.",
    build: function buildAlertNotification() {
      let ALERT;
      let guild;
      let obj;
      let obj11;
      let obj12;
      const channelId = SelectedChannelStore.getChannelId();
      let channel;
      if (null != channelId) {
        channel = ChannelStore.getChannel(channelId);
      }
      if (null == channel) {
        const obj2 = DesignSystemsNotificationComponentsExperiment;
        const designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj3 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
          obj = null;
        } else {
          const obj4 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a channel first", toastDurationMs: 4000 };
          obj3.open(obj4);
          obj = null;
        }
      } else {
        const guildId = channel.getGuildId();
        obj = { channel, guild };
        guild = undefined;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
      }
      let tmp13 = null;
      if (null != obj) {
        let obj10;
        if (null == obj.guild) {
          const obj6 = DesignSystemsNotificationComponentsExperiment;
          const designSystemsNotificationComponents1 = obj6.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
          const obj7 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents1) {
            obj7.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a guild channel first", variant: "critical" });
            obj10 = null;
          } else {
            const obj8 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Select a guild channel first", toastDurationMs: 4000 };
            obj7.open(obj8);
            obj10 = null;
          }
        } else {
          obj10 = { channel: null, guild: null };
          ({ channel: obj5.channel, guild: obj5.guild } = obj);
        }
        tmp13 = obj10;
      }
      let tmp20 = null;
      if (null != tmp13) {
        const obj17 = { type: InAppNotificationTypes.ALERT, channel: null, guild: null };
        ({ channel: obj9.channel, guild: obj9.guild } = tmp13);
        const obj18 = { key: tmp13.guild.id, duration: obj11.getNotificationDuration(ALERT), onDismiss, inAppNotificationId: obj12.generateInAppNotificationId() };
        ALERT = InAppNotificationTypes.ALERT;
        obj11 = InAppNotificationUtils;
        obj12 = InAppNotificationUtils;
        const merged = Object.assign(obj18);
        tmp20 = obj17;
      }
      return tmp20;
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REQUEST,
    label: "Message Request",
    subLabel: "Enqueues notification using the current user as the requester.",
    build: function buildMessageRequestNotification() {
      let obj6;
      let obj7;
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        const obj = DesignSystemsNotificationComponentsExperiment;
        const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj2 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj2.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Current user is null", variant: "critical" });
          currentUser = null;
        } else {
          const obj3 = { key: "DEV_IN_APP_NOTIF_TEST_ERROR", icon, content: "Current user is null", toastDurationMs: 4000 };
          obj2.open(obj3);
          currentUser = null;
        }
      }
      let tmp8 = null;
      if (null != currentUser) {
        const _HermesInternal = HermesInternal;
        const MESSAGE_REQUEST = InAppNotificationTypes.MESSAGE_REQUEST;
        const obj4 = { type: InAppNotificationTypes.MESSAGE_REQUEST, author: currentUser, numMutualGuilds: 3 };
        const obj5 = { key: "dev-tools-message-request-" + currentUser.id, duration: obj6.getNotificationDuration(MESSAGE_REQUEST), onDismiss, inAppNotificationId: obj7.generateInAppNotificationId() };
        obj6 = InAppNotificationUtils;
        obj7 = InAppNotificationUtils;
        const merged = Object.assign(obj5);
        tmp8 = obj4;
      }
      return tmp8;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING,
    label: "Restricted Hours Warning",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedHoursWarningNotification() {
      let RESTRICTED_HOURS_WARNING;
      let obj3;
      let obj4;
      const obj2 = { key: "dev-tools-restricted-hours-warning", duration: obj3.getNotificationDuration(RESTRICTED_HOURS_WARNING), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
      RESTRICTED_HOURS_WARNING = InAppNotificationTypes.RESTRICTED_HOURS_WARNING;
      const obj = { type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING, title: "Restricted Hours Warning", subtitle: "Test restricted hours warning." };
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      const merged = Object.assign(obj2);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED,
    label: "Restricted Schedule Updated",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedScheduleUpdatedNotification() {
      let RESTRICTED_SCHEDULE_UPDATED;
      let obj3;
      let obj4;
      let obj = { type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED, title: "Restricted Schedule Updated", subtitle: "Test restricted schedule update." };
      const obj2 = { key: "dev-tools-restricted-schedule-updated", duration: obj3.getNotificationDuration(RESTRICTED_SCHEDULE_UPDATED), onDismiss, inAppNotificationId: obj4.generateInAppNotificationId() };
      RESTRICTED_SCHEDULE_UPDATED = InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED;
      obj3 = InAppNotificationUtils;
      obj4 = InAppNotificationUtils;
      const merged = Object.assign(obj2);
      return obj;
    }
  }
];
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp9;
  let obj = first(576);
  const cResult = obj.c(12);
  const tmp4 = closure_16();
  const tmp6 = useSafeAreaInsetsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(build) {
      const buildResult = build.build();
      if (null != buildResult) {
        const obj = InAppNotificationActionCreatorsDefault;
        obj.enqueueNotification(buildResult);
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const sum = tmp4.content.padding + tmp6.bottom;
  const container = tmp4.container;
  if (cResult[1] !== sum) {
    let obj2 = { paddingBottom: sum };
    cResult[1] = sum;
    cResult[2] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.content) {
    let tmp10;
    let tmp12;
    let tmp11;
    let tmp17;
    if (cResult[4] === tmp9) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = { size: nativeDefault.space.PX_16 };
      let Spacer = tmp(1188).Spacer;
      const tmp14 = closure_14(Spacer, obj3);
      const mapped = closure_24.map((title) => {
        let options;
        let obj = { children: items };
        const Fragment = react.Fragment;
        const obj2 = {
          title: title.title,
          description: "Enqueues notification using the currently selected channel.",
          hasIcons: true,
          children: options.map((label) => {
            let closure_0 = label;
            const obj = {
              label: label.label,
              subLabel: label.subLabel,
              icon: closure_1_14(first(closure_1_2[26]).BeakerIcon, {}),
              onPress() {
                return first(label);
              },
              trailing: closure_1_14(first(closure_1_2[27]).TableRowArrow, {})
            };
            const TableRow = first(closure_1_2[25]).TableRow;
            return closure_1_14(TableRow, obj, label.label);
          })
        };
        options = title.options;
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        items = [authStore2(TableRowGroup, obj2), ];
        const obj3 = { size: nativeDefault.space.PX_16 };
        const Spacer = native.Spacer;
        items[1] = authStore2(Spacer, obj3);
        return closure_15(Fragment, obj, title.title);
      });
      cResult[6] = tmp14;
      cResult[7] = mapped;
      tmp12 = mapped;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = {
        title: "Other Notification Types",
        hasIcons: true,
        children: items3.map((label) => {
              let closure_0 = label;
              const obj = {
                label: label.label,
                subLabel: label.subLabel,
                icon: closure_1_14(first(dependencyMap[26]).BeakerIcon, {}),
                onPress() {
                  return first(label);
                },
                trailing: closure_1_14(first(dependencyMap[27]).TableRowArrow, {})
              };
              const TableRow = first(dependencyMap[25]).TableRow;
              return closure_1_14(TableRow, obj, label.label);
            })
      };
      let TableRowGroup = tmp(6074).TableRowGroup;
      const tmp20 = closure_14(TableRowGroup, obj4);
      cResult[8] = tmp20;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.container) {
      let tmp21;
      if (cResult[10] === tmp10) {
        tmp21 = cResult[11];
      }
      return tmp21;
    }
    const obj5 = { style: container, contentContainerStyle: tmp10, children: items };
    items = [tmp11, tmp12, tmp17];
    const tmp24 = closure_15(ScrollView, obj5);
    cResult[9] = tmp4.container;
    cResult[10] = tmp10;
    cResult[11] = tmp24;
    tmp21 = tmp24;
  }
  items1 = [tmp4.content, tmp9];
  cResult[3] = tmp4.content;
  cResult[4] = tmp9;
  cResult[5] = items1;
  tmp10 = items1;
}) : (() => {
  const tmp = closure_16();
  const tmp2 = useSafeAreaInsetsDefault();
  _require = react.useCallback((build) => {
    const buildResult = build.build();
    if (null != buildResult) {
      const obj = InAppNotificationActionCreatorsDefault;
      obj.enqueueNotification(buildResult);
    }
  }, []);
  let obj = { style: tmp.container, contentContainerStyle: items, children: items1 };
  items = [tmp.content, { paddingBottom: tmp.content.padding + tmp2.bottom }];
  let obj2 = { size: nativeDefault.space.PX_16 };
  let Spacer = require("native").Spacer;
  items1 = [
    closure_14(Spacer, obj2),
    closure_24.map((title) => {
      let options;
      let obj = { children: items };
      const Fragment = react.Fragment;
      const obj2 = {
        title: title.title,
        description: "Enqueues notification using the currently selected channel.",
        hasIcons: true,
        children: options.map((label) => {
          closure_0 = label;
          const obj = {
            label: label.label,
            subLabel: label.subLabel,
            icon: closure_1_14(closure_1_0(closure_1_2[26]).BeakerIcon, {}),
            onPress() {
              return closure_2_0(label);
            },
            trailing: closure_1_14(closure_1_0(closure_1_2[27]).TableRowArrow, {})
          };
          const TableRow = closure_1_0(closure_1_2[25]).TableRow;
          return closure_1_14(TableRow, obj, label.label);
        })
      };
      options = title.options;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items = [authStore2(TableRowGroup, obj2), ];
      const obj3 = { size: nativeDefault.space.PX_16 };
      const Spacer = native.Spacer;
      items[1] = authStore2(Spacer, obj3);
      return closure_15(Fragment, obj, title.title);
    }),

  ];
  let obj3 = {
    title: "Other Notification Types",
    hasIcons: true,
    children: items3.map((label) => {
      const obj = {
        label: label.label,
        subLabel: label.subLabel,
        icon: closure_1_14(label(dependencyMap[26]).BeakerIcon, {}),
        onPress() {
          return label(label);
        },
        trailing: closure_1_14(label(dependencyMap[27]).TableRowArrow, {})
      };
      const TableRow = label(dependencyMap[25]).TableRow;
      return closure_1_14(TableRow, obj, label.label);
    })
  };
  let TableRowGroup = require("TableRowGroup").TableRowGroup;
  items1[2] = closure_14(TableRowGroup, obj3);
  return closure_15(ScrollView, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx");

export default tmp5;