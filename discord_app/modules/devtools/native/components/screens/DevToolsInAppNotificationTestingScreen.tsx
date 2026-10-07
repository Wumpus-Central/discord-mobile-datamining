// === Module 15622: DevToolsInAppNotificationTestingScreen ===

// Module 15622 (DevToolsInAppNotificationTestingScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import StickersTypes from "StickersTypes" /* 5436 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12492 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12494 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 5694 */;
import MessageRecord from "MessageRecord" /* 4526 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
function buildTestMessageData(arg0) {
  if (items === undefined) {
    items = [];
  }
  const channelId = SelectedChannelStore.getChannelId();
  let channel;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (null == channel) {
    const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
      let obj = null;
    } else {
      const obj4 = {
        key: "DEV_IN_APP_NOTIF_TEST_ERROR",
        icon() {
              return closure_1_14(require("WarningIcon").WarningIcon, {});
            },
        content: "Select a channel first",
        toastDurationMs: 4000
      };
      obj3.open(obj4);
      obj = null;
    }
  } else {
    const guildId = channel.getGuildId();
    obj = { channel, guild: null };
    guild = undefined;
    if (null != guildId) {
      guild = GuildStore.getGuild(guildId);
    }
    obj.guild = guild;
  }
  let currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    const designSystemsNotificationComponents1 = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
    const obj6 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents1) {
      obj6.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Current user is null", variant: "critical" });
      currentUser = null;
    } else {
      const obj7 = {
        key: "DEV_IN_APP_NOTIF_TEST_ERROR",
        icon() {
              return closure_1_14(require("WarningIcon").WarningIcon, {});
            },
        content: "Current user is null",
        toastDurationMs: 4000
      };
      obj6.open(obj7);
      currentUser = null;
    }
  }
  if (null != obj) {
    if (null != currentUser) {
      if ("media-only" === arg0) {
        const obj8 = { content: "", attachments: [], stickerItems: null };
        name = StickersStore.getStickerById(id);
        if (null != name) {
          const obj9 = { id: null, format_type: null, name: null };
          ({ id: obj14.id, format_type: obj14.format_type, name } = name);
          obj9.name = name;
          let obj12 = obj9;
        } else {
          obj12 = { id, format_type: StickersTypes.StickerFormat.APNG, name: "Cheer" };
        }
        items1 = [obj12];
        obj8.stickerItems = items1;
      } else {
        if ("text-and-media" === arg0) {
          const obj13 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", attachments: null, stickerItems: null };
          const size = { id: null, url: null, proxy_url: null, filename: "og_img_discord_home.png", size: 54697, width: 1200, height: 630, content_type: "image/png" };
          const obj10 = SnowflakeUtilsDefault;
          const _Date = Date;
          size.id = obj10.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
          size.url = httpscdndiscordappcomassetsog_img_discord_homepng;
          size.proxy_url = httpscdndiscordappcomassetsog_img_discord_homepng;
          const items2 = [size];
          obj13.attachments = items2;
          obj13.stickerItems = [];
          let tmp20 = obj13;
        } else if ("text-only" === arg0) {
          const obj16 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: [], stickerItems: [] };
          tmp20 = obj16;
        }
        const obj19 = { attachments: null, stickerItems: null, reactions: null };
        ({ attachments: obj15.attachments, stickerItems: obj15.stickerItems } = tmp20);
        obj19.reactions = items;
        let attachments = obj19.attachments;
        if (undefined === attachments) {
          attachments = [];
        }
        let stickerItems = obj19.stickerItems;
        if (undefined === stickerItems) {
          stickerItems = [];
        }
        let reactions = obj19.reactions;
        if (undefined === reactions) {
          reactions = [];
        }
        const obj29 = { id: null, channel_id: null, author: null, content: null, attachments: null, sticker_items: null, reactions: null, timestamp: null };
        const _Date2 = Date;
        obj29.id = SnowflakeUtilsDefault.fromTimestamp(Date.now());
        obj29.channel_id = obj.channel.id;
        obj29.author = currentUser;
        obj29.content = tmp20.content;
        obj29.attachments = attachments;
        obj29.sticker_items = stickerItems;
        obj29.reactions = reactions;
        const _Date3 = Date;
        const date = new Date();
        obj29.timestamp = date;
        const tmp41 = new MessageRecord(obj29);
        const obj30 = { channel: null, guild: null, user: null, message: null };
        ({ channel: obj18.channel, guild: obj18.guild } = obj);
        obj30.user = currentUser;
        obj30.message = tmp41;
        return obj30;
      }
    }
  }
  return null;
}
function buildReactionNotification(arg0) {
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
    const obj5 = { type: InAppNotificationTypes.REACTION, channel, guild: null, user: null, message: null, parentChannel: null, reaction: null };
    ({ guild: obj4.guild, user: obj4.user } = tmp3);
    obj5.message = message;
    let channel1;
    if (null != channel.parent_id) {
      channel1 = ChannelStore.getChannel(channel.parent_id);
    }
    obj5.parentChannel = channel1;
    obj5.reaction = reaction;
    const obj = {
      key: message.id,
      duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.REACTION),
      onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
      inAppNotificationId: null
    };
    obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
    const merged = Object.assign(obj);
    return obj5;
  }
}
const ScrollView = fn(17).ScrollView;
const createChannelRecord = fn(2055).createChannelRecord;
const Constants = fn(1085);
({ ChannelTypes: closure_12, InAppNotificationTypes } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(obj2);
let c17 = "781324722394103808";
let c18 = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
const reaction = { emoji: { id: null, name: "\u{1F389}", animated: false }, me: false, me_burst: false, count: 1, count_details: { normal: 1 }, burst_count: 0 };
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
        const obj4 = { type: InAppNotificationTypes.MESSAGE, channel, guild: tmp.guild, parentChannel: null, message: null, mentionCount: 1 };
        let channel1;
        if (null != channel.parent_id) {
          channel1 = ChannelStore.getChannel(channel.parent_id);
        }
        obj4.parentChannel = channel1;
        obj4.message = message;
        const obj = {
          key: message.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj);
        return obj4;
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
        const obj = { type: InAppNotificationTypes.MESSAGE_REMINDER, channel, author: tmp.user, savedMessage: null };
        const obj2 = { message, saveData: null };
        const obj3 = { channelId: channel.id, messageId: message.id, savedAt: null };
        const _Date = Date;
        const date = new Date();
        obj3.savedAt = date;
        obj2.saveData = obj3;
        obj.savedMessage = obj2;
        const obj4 = {
          key: message.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_REMINDER),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj4.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj4);
        return obj;
      }
    }
  }
];
let closure_24 = items2.map((label) => {
  ({ type: require, build: importDefault } = label);
  return {
    title: label.label,
    options: items1.map((label) => {
      const variant = label.variant;
      return {
        type: variant,
        label: label.label,
        build() {
          return importDefault(variant);
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
      const channelId = SelectedChannelStore.getChannelId();
      let channel;
      if (null != channelId) {
        channel = ChannelStore.getChannel(channelId);
      }
      if (null == channel) {
        const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj3 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
          let obj = null;
        } else {
          const obj4 = {
            key: "DEV_IN_APP_NOTIF_TEST_ERROR",
            icon() {
                  return closure_1_14(require("WarningIcon").WarningIcon, {});
                },
            content: "Select a channel first",
            toastDurationMs: 4000
          };
          obj3.open(obj4);
          obj = null;
        }
      } else {
        const guildId = channel.getGuildId();
        obj = { channel, guild: null };
        guild = undefined;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
        obj.guild = guild;
      }
      if (null == obj) {
        return null;
      } else {
        const obj5 = SnowflakeUtilsDefault;
        const _Date = Date;
        const castResult = obj5.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
        const obj7 = { type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND, channelId: obj.channel.id, messageId: castResult };
        const obj8 = { key: castResult, duration: null, onDismiss: null, inAppNotificationId: null };
        obj8.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
        obj8.onDismiss = function onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        };
        obj8.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj8);
        return obj7;
      }
    }
  },
  {
    type: InAppNotificationTypes.FORUM_THREAD_CREATED,
    label: "Forum Thread Created",
    subLabel: "Enqueues notification using the currently selected channel as the parent and a mock thread.",
    build: function buildForumThreadCreatedNotification() {
      const channelId = SelectedChannelStore.getChannelId();
      let channel1;
      if (null != channelId) {
        channel1 = ChannelStore.getChannel(channelId);
      }
      if (null == channel1) {
        const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj3 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
          let obj = null;
        } else {
          const obj4 = {
            key: "DEV_IN_APP_NOTIF_TEST_ERROR",
            icon() {
                  return closure_1_14(require("WarningIcon").WarningIcon, {});
                },
            content: "Select a channel first",
            toastDurationMs: 4000
          };
          obj3.open(obj4);
          obj = null;
        }
      } else {
        const guildId = channel1.getGuildId();
        obj = { channel: channel1, guild: null };
        guild = undefined;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
        obj.guild = guild;
      }
      if (null == obj) {
        let currentUser = UserStore.getCurrentUser();
        if (null == currentUser) {
          const designSystemsNotificationComponents1 = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
          const obj10 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents1) {
            obj10.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Current user is null", variant: "critical" });
            currentUser = null;
          } else {
            const obj8 = {
              key: "DEV_IN_APP_NOTIF_TEST_ERROR",
              icon() {
                      return closure_1_14(require("WarningIcon").WarningIcon, {});
                    },
              content: "Current user is null",
              toastDurationMs: 4000
            };
            obj10.open(obj8);
            currentUser = null;
          }
        }
        if (null != null) {
          if (null != currentUser) {
            const channel = null.channel;
            const obj11 = { id: null, type: null, name: "Test Thread", guild_id: null, parent_id: null, ownerId: null };
            const obj13 = SnowflakeUtilsDefault;
            const tmp28 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
            const _Date = Date;
            obj11.id = obj13.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
            obj11.type = tmp28;
            obj11.guild_id = null.guild.id;
            obj11.parent_id = channel.id;
            obj11.ownerId = currentUser.id;
            const tmp33 = createChannelRecord(obj11);
            const obj12 = { type: InAppNotificationTypes.FORUM_THREAD_CREATED, thread: tmp33, threadCreator: currentUser, parentChannel: null, guild: null };
            ({ channel: obj15.parentChannel, guild: obj15.guild } = null);
            const obj16 = { key: tmp33.id, duration: null, onDismiss: null, inAppNotificationId: null };
            obj16.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.FORUM_THREAD_CREATED);
            obj16.onDismiss = function onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            };
            obj16.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
            const merged = Object.assign(obj16);
            return obj12;
          }
        }
        return null;
      } else if (null == obj.guild) {
        const designSystemsNotificationComponents2 = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj7 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents2) {
          obj7.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a guild channel first", variant: "critical" });
        } else {
          const obj25 = {
            key: "DEV_IN_APP_NOTIF_TEST_ERROR",
            icon() {
                  return closure_1_14(require("WarningIcon").WarningIcon, {});
                },
            content: "Select a guild channel first",
            toastDurationMs: 4000
          };
          obj7.open(obj25);
        }
      } else {
        const obj26 = { channel: null, guild: null };
        ({ channel: obj5.channel, guild: obj5.guild } = obj);
      }
    }
  },
  {
    type: InAppNotificationTypes.BUG_REPORTER,
    label: "Bug Reporter",
    subLabel: "Enqueues notification.",
    build: function buildBugReporterNotification() {
      const obj2 = {
        key: "dev-tools-bug-reporter-test",
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.BUG_REPORTER),
        onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
        inAppNotificationId: null
      };
      const obj = { type: InAppNotificationTypes.BUG_REPORTER, image: null };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj2);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.ALERT,
    label: "Alert",
    subLabel: "Enqueues notification using the currently selected server channel.",
    build: function buildAlertNotification() {
      const channelId = SelectedChannelStore.getChannelId();
      let channel;
      if (null != channelId) {
        channel = ChannelStore.getChannel(channelId);
      }
      if (null == channel) {
        const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj3 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
          let obj = null;
        } else {
          const obj4 = {
            key: "DEV_IN_APP_NOTIF_TEST_ERROR",
            icon() {
                  return closure_1_14(require("WarningIcon").WarningIcon, {});
                },
            content: "Select a channel first",
            toastDurationMs: 4000
          };
          obj3.open(obj4);
          obj = null;
        }
      } else {
        const guildId = channel.getGuildId();
        obj = { channel, guild: null };
        guild = undefined;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
        obj.guild = guild;
      }
      if (null == obj) {
        let tmp20 = null;
        if (null != null) {
          const obj8 = { type: InAppNotificationTypes.ALERT, channel: null, guild: null };
          ({ channel: obj9.channel, guild: obj9.guild } = null);
          const obj10 = {
            key: null.guild.id,
            duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.ALERT),
            onDismiss() {
                  return InAppNotificationActionCreatorsDefault.clearNotification();
                },
            inAppNotificationId: null
          };
          obj10.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
          const merged = Object.assign(obj10);
          tmp20 = obj8;
        }
        return tmp20;
      } else if (null == obj.guild) {
        const designSystemsNotificationComponents1 = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj7 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents1) {
          obj7.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a guild channel first", variant: "critical" });
        } else {
          const obj17 = {
            key: "DEV_IN_APP_NOTIF_TEST_ERROR",
            icon() {
                  return closure_1_14(require("WarningIcon").WarningIcon, {});
                },
            content: "Select a guild channel first",
            toastDurationMs: 4000
          };
          obj7.open(obj17);
        }
      } else {
        const obj18 = { channel: null, guild: null };
        ({ channel: obj5.channel, guild: obj5.guild } = obj);
      }
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REQUEST,
    label: "Message Request",
    subLabel: "Enqueues notification using the current user as the requester.",
    build: function buildMessageRequestNotification() {
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
        const obj2 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          obj2.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Current user is null", variant: "critical" });
          currentUser = null;
        } else {
          const obj3 = {
            key: "DEV_IN_APP_NOTIF_TEST_ERROR",
            icon() {
                  return closure_1_14(require("WarningIcon").WarningIcon, {});
                },
            content: "Current user is null",
            toastDurationMs: 4000
          };
          obj2.open(obj3);
          currentUser = null;
        }
      }
      let tmp8 = null;
      if (null != currentUser) {
        const obj4 = { type: InAppNotificationTypes.MESSAGE_REQUEST, author: currentUser, numMutualGuilds: 3 };
        const _HermesInternal = HermesInternal;
        const obj5 = {
          key: "dev-tools-message-request-" + currentUser.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_REQUEST),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj5.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
      const obj2 = {
        key: "dev-tools-restricted-hours-warning",
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.RESTRICTED_HOURS_WARNING),
        onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
        inAppNotificationId: null
      };
      const obj = { type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING, title: "Restricted Hours Warning", subtitle: "Test restricted hours warning." };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj2);
      return obj;
    }
  },
  {
    type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED,
    label: "Restricted Schedule Updated",
    subLabel: "Enqueues notification.",
    build: function buildRestrictedScheduleUpdatedNotification() {
      const obj2 = {
        key: "dev-tools-restricted-schedule-updated",
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED),
        onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
        inAppNotificationId: null
      };
      const obj = { type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED, title: "Restricted Schedule Updated", subtitle: "Test restricted schedule update." };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj2);
      return obj;
    }
  }
];
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
let obj5 = {
  type: InAppNotificationTypes.MESSAGE,
  label: "Message",
  build: function buildMessageNotification(arg0) {
    const tmp = buildTestMessageData(arg0);
    if (null == tmp) {
      return null;
    } else {
      ({ channel, message } = tmp);
      const obj4 = { type: InAppNotificationTypes.MESSAGE, channel, guild: tmp.guild, parentChannel: null, message: null, mentionCount: 1 };
      let channel1;
      if (null != channel.parent_id) {
        channel1 = ChannelStore.getChannel(channel.parent_id);
      }
      obj4.parentChannel = channel1;
      obj4.message = message;
      const obj = {
        key: message.id,
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE),
        onDismiss() {
            return InAppNotificationActionCreatorsDefault.clearNotification();
          },
        inAppNotificationId: null
      };
      obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj4;
    }
  }
};
let obj6 = {
  type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND,
  label: "Message Failed To Send",
  subLabel: "Enqueues notification using the currently selected channel.",
  build: function buildMessageFailedToSendNotification() {
    const channelId = SelectedChannelStore.getChannelId();
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(channelId);
    }
    if (null == channel) {
      const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("DevToolsInAppNotificationTestingScreen");
      const obj3 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        obj3.openMana("DEV_IN_APP_NOTIF_TEST_ERROR", { text: "Select a channel first", variant: "critical" });
        let obj = null;
      } else {
        const obj4 = {
          key: "DEV_IN_APP_NOTIF_TEST_ERROR",
          icon() {
                return closure_1_14(require("WarningIcon").WarningIcon, {});
              },
          content: "Select a channel first",
          toastDurationMs: 4000
        };
        obj3.open(obj4);
        obj = null;
      }
    } else {
      const guildId = channel.getGuildId();
      obj = { channel, guild: null };
      guild = undefined;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      obj.guild = guild;
    }
    if (null == obj) {
      return null;
    } else {
      const obj5 = SnowflakeUtilsDefault;
      const _Date = Date;
      const castResult = obj5.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
      const obj7 = { type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND, channelId: obj.channel.id, messageId: castResult };
      const obj8 = { key: castResult, duration: null, onDismiss: null, inAppNotificationId: null };
      obj8.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
      obj8.onDismiss = function onDismiss() {
        return InAppNotificationActionCreatorsDefault.clearNotification();
      };
      obj8.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj8);
      return obj7;
    }
  }
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(576).c(12);
  const tmp4 = closure_16();
  let obj = first(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(build) {
      const buildResult = build.build();
      if (null != buildResult) {
        InAppNotificationActionCreatorsDefault.enqueueNotification(buildResult);
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const sum = tmp4.content.padding + useSafeAreaInsetsDefault().bottom;
  if (cResult[1] !== sum) {
    let obj2 = { paddingBottom: sum };
    cResult[1] = sum;
    cResult[2] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.content) {
    if (cResult[4] === tmp9) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: nativeDefault.space.PX_16 };
      const tmp14 = closure_14(tmp(1188).Spacer, obj3);
      const mapped = closure_24.map((title) => {
        const obj = { children: null };
        const obj2 = { title: title.title, description: "Enqueues notification using the currently selected channel.", hasIcons: true, children: null };
        options = title.options;
        obj2.children = options.map((label) => {
          closure_0 = label;
          return closure_1_14(first(6000).TableRow, {
            label: label.label,
            subLabel: label.subLabel,
            icon: closure_1_14(first(15429).BeakerIcon, {}),
            onPress() {
              return first(closure_0);
            },
            trailing: closure_1_14(first(6007).TableRowArrow, {})
          }, label.label);
        });
        items = [state(TableRowGroup.TableRowGroup, obj2), state(native.Spacer, { size: nativeDefault.space.PX_16 })];
        obj.children = items;
        return closure_2_15(noop.Fragment, obj, title.title);
      });
      cResult[6] = tmp14;
      cResult[7] = mapped;
      let tmp12 = mapped;
      let tmp11 = tmp14;
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
              closure_0 = label;
              return closure_1_14(first(6000).TableRow, {
                label: label.label,
                subLabel: label.subLabel,
                icon: closure_1_14(first(15429).BeakerIcon, {}),
                onPress() {
                  return first(closure_0);
                },
                trailing: closure_1_14(first(6007).TableRowArrow, {})
              }, label.label);
            })
      };
      const tmp20 = closure_14(tmp(6081).TableRowGroup, obj4);
      cResult[8] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.container) {
      if (cResult[10] === tmp10) {
        let tmp21 = cResult[11];
      }
      return tmp21;
    }
    const obj5 = { style: tmp4.container, contentContainerStyle: tmp10, children: null };
    items = [tmp11, tmp12, tmp17];
    obj5.children = items;
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
  const tmp6 = useSafeAreaInsetsDefault();
}) : (() => {
  const tmp = closure_16();
  _require = noop.useCallback((build) => {
    const buildResult = build.build();
    if (null != buildResult) {
      InAppNotificationActionCreatorsDefault.enqueueNotification(buildResult);
    }
  }, []);
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  items = [tmp.content, { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  const tmp2 = useSafeAreaInsetsDefault();
  items1 = [
    closure_14(require("native").Spacer, { size: nativeDefault.space.PX_16 }),
    closure_24.map((title) => {
      const obj = { children: null };
      const obj2 = { title: title.title, description: "Enqueues notification using the currently selected channel.", hasIcons: true, children: null };
      options = title.options;
      obj2.children = options.map((label) => {
        closure_0 = label;
        return closure_1_14(closure_1_0(6000).TableRow, {
          label: label.label,
          subLabel: label.subLabel,
          icon: closure_1_14(closure_1_0(15429).BeakerIcon, {}),
          onPress() {
            return closure_2_0(closure_0);
          },
          trailing: closure_1_14(closure_1_0(6007).TableRowArrow, {})
        }, label.label);
      });
      items = [state(TableRowGroup.TableRowGroup, obj2), state(native.Spacer, { size: nativeDefault.space.PX_16 })];
      obj.children = items;
      return closure_2_15(noop.Fragment, obj, title.title);
    }),

  ];
  let obj2 = { size: nativeDefault.space.PX_16 };
  items1[2] = closure_14(require("TableRowGroup").TableRowGroup, {
    title: "Other Notification Types",
    hasIcons: true,
    children: items3.map((label) => closure_1_14(label(6000).TableRow, {
      label: label.label,
      subLabel: label.subLabel,
      icon: closure_1_14(label(15429).BeakerIcon, {}),
      onPress() {
        return label(label);
      },
      trailing: closure_1_14(label(6007).TableRowArrow, {})
    }, label.label))
  });
  obj.children = items1;
  return closure_15(ScrollView, obj);
});