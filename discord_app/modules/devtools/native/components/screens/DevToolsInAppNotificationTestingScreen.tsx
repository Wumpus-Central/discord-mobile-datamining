// === Module 15726: DevToolsInAppNotificationTestingScreen ===

// Module 15726 (DevToolsInAppNotificationTestingScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10094 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10096 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 5502 */;
import MessageRecord from "MessageRecord" /* 4210 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getSelectedGuildChannel() {
  const channelId = SelectedChannelStore.getChannelId();
  let channel;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (null == channel) {
    let obj1 = ToastActionCreatorsDefault;
    let obj = {
      key: "DEV_IN_APP_NOTIF_TEST_ERROR",
      icon() {
          return closure_1_14(require("WarningIcon").WarningIcon, {});
        },
      content: "Select a channel first",
      toastDurationMs: 4000
    };
    obj1.open(obj);
    obj = null;
  } else {
    const guildId = channel.getGuildId();
    obj = { channel, guild: null };
    let guild;
    if (null != guildId) {
      guild = GuildStore.getGuild(guildId);
    }
    obj.guild = guild;
  }
  if (null == obj) {
    return null;
  } else if (null == obj.guild) {
    obj = {
      key: "DEV_IN_APP_NOTIF_TEST_ERROR",
      icon() {
          return closure_1_14(require("WarningIcon").WarningIcon, {});
        },
      content: "Select a guild channel first",
      toastDurationMs: 4000
    };
    ToastActionCreatorsDefault.open(obj);
    obj1 = null;
  } else {
    obj1 = { channel: null, guild: null };
    ({ channel: obj4.channel, guild: obj4.guild } = obj);
  }
}
function buildTestMessageData(arg0, items) {
  if (items === undefined) {
    items = [];
  }
  const channelId = SelectedChannelStore.getChannelId();
  let channel;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (null == channel) {
    let obj1 = ToastActionCreatorsDefault;
    let obj = {
      key: "DEV_IN_APP_NOTIF_TEST_ERROR",
      icon() {
          return closure_1_14(require("WarningIcon").WarningIcon, {});
        },
      content: "Select a channel first",
      toastDurationMs: 4000
    };
    obj1.open(obj);
    obj = null;
  } else {
    const guildId = channel.getGuildId();
    obj = { channel, guild: null };
    let guild;
    if (null != guildId) {
      guild = GuildStore.getGuild(guildId);
    }
    obj.guild = guild;
  }
  let currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    let obj3 = ToastActionCreatorsDefault;
    obj = {
      key: "DEV_IN_APP_NOTIF_TEST_ERROR",
      icon() {
          return closure_1_14(require("WarningIcon").WarningIcon, {});
        },
      content: "Current user is null",
      toastDurationMs: 4000
    };
    obj3.open(obj);
    currentUser = null;
  }
  if (null != obj) {
    if (null != currentUser) {
      if ("media-only" === arg0) {
        obj1 = { content: "", attachments: [], stickerItems: null };
        name = StickersStore.getStickerById(c17);
        if (null != name) {
          const obj2 = { id: null, format_type: null, name: null };
          ({ id: obj12.id, format_type: obj12.format_type, name } = name);
          obj2.name = name;
          obj3 = obj2;
        } else {
          obj3 = { id: tmp20, format_type: StickersTypes.StickerFormat.APNG, name: "Cheer" };
        }
        items1 = [obj3];
        obj1.stickerItems = items1;
        tmp20 = c17;
      } else {
        if ("text-and-media" === arg0) {
          const obj4 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", attachments: null, stickerItems: null };
          const size = { id: null, url: null, proxy_url: null, filename: "og_img_discord_home.png", size: 54697, width: 1200, height: 630, content_type: "image/png" };
          let obj7 = SnowflakeUtilsDefault;
          let obj8 = SnowflakeUtilsDefault;
          const _Date = Date;
          size.id = obj7.cast(obj8.fromTimestamp(Date.now()));
          size.url = httpscdndiscordappcomassetsog_img_discord_homepng;
          size.proxy_url = httpscdndiscordappcomassetsog_img_discord_homepng;
          const items2 = [size];
          obj4.attachments = items2;
          obj4.stickerItems = [];
          let tmp14 = obj4;
        } else if ("text-only" === arg0) {
          const obj5 = { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", attachments: [], stickerItems: [] };
          tmp14 = obj5;
        }
        const obj6 = { attachments: null, stickerItems: null, reactions: null };
        ({ attachments: obj13.attachments, stickerItems: obj13.stickerItems } = tmp14);
        obj6.reactions = items;
        let attachments = obj6.attachments;
        if (undefined === attachments) {
          attachments = [];
        }
        let stickerItems = obj6.stickerItems;
        if (undefined === stickerItems) {
          stickerItems = [];
        }
        let reactions = obj6.reactions;
        if (undefined === reactions) {
          reactions = [];
        }
        obj7 = { id: null, channel_id: null, author: null, content: null, attachments: null, sticker_items: null, reactions: null, timestamp: null };
        const _Date2 = Date;
        obj7.id = SnowflakeUtilsDefault.fromTimestamp(Date.now());
        obj7.channel_id = obj.channel.id;
        obj7.author = currentUser;
        obj7.content = tmp14.content;
        obj7.attachments = attachments;
        obj7.sticker_items = stickerItems;
        obj7.reactions = reactions;
        const _Date3 = Date;
        const date = new Date();
        obj7.timestamp = date;
        const tmp35 = new MessageRecord(obj7);
        obj8 = { channel: null, guild: null, user: null, message: null };
        ({ channel: obj16.channel, guild: obj16.guild } = obj);
        obj8.user = currentUser;
        obj8.message = tmp35;
        return obj8;
      }
    }
  }
  return null;
}
function buildReactionNotification(arg0, items) {
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
    let obj = { type: InAppNotificationTypes.REACTION, channel, guild: null, user: null, message: null, parentChannel: null, reaction: null };
    ({ guild: obj4.guild, user: obj4.user } = tmp3);
    obj.message = message;
    channel = undefined;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    obj.parentChannel = channel;
    obj.reaction = reaction;
    obj = {
      key: message.id,
      duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.REACTION),
      onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
      inAppNotificationId: null
    };
    obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
    const merged = Object.assign(obj);
    return obj;
  }
}
const ScrollView = fn(17).ScrollView;
const createChannelRecord = fn(1961).createChannelRecord;
const Constants = fn(1074);
({ ChannelTypes: closure_12, InAppNotificationTypes } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.content = { padding: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(createStyles);
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
        let obj = { type: InAppNotificationTypes.MESSAGE, channel, guild: tmp.guild, parentChannel: null, message: null, mentionCount: 1 };
        channel = undefined;
        if (null != channel.parent_id) {
          channel = ChannelStore.getChannel(channel.parent_id);
        }
        obj.parentChannel = channel;
        obj.message = message;
        obj = {
          key: message.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
        let obj = { type: InAppNotificationTypes.MESSAGE_REMINDER, channel, author: tmp.user, savedMessage: null };
        obj = { message, saveData: null };
        obj = { channelId: channel.id, messageId: message.id, savedAt: null };
        const _Date = Date;
        const date = new Date();
        obj.savedAt = date;
        obj.saveData = obj;
        obj.savedMessage = obj;
        const obj1 = {
          key: message.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_REMINDER),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj1.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
        let obj1 = ToastActionCreatorsDefault;
        let obj = {
          key: "DEV_IN_APP_NOTIF_TEST_ERROR",
          icon() {
              return closure_1_14(require("WarningIcon").WarningIcon, {});
            },
          content: "Select a channel first",
          toastDurationMs: 4000
        };
        obj1.open(obj);
        obj = null;
      } else {
        const guildId = channel.getGuildId();
        obj = { channel, guild: null };
        let guild;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
        obj.guild = guild;
      }
      if (null == obj) {
        return null;
      } else {
        const obj4 = SnowflakeUtilsDefault;
        const _Date = Date;
        const castResult = obj4.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
        obj = { type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND, channelId: null, messageId: null };
        obj.channelId = obj.channel.id;
        obj.messageId = castResult;
        obj1 = { key: castResult, duration: null, onDismiss: null, inAppNotificationId: null };
        obj1.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
        obj1.onDismiss = function onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        };
        obj1.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        let obj = {
          key: "DEV_IN_APP_NOTIF_TEST_ERROR",
          icon() {
              return closure_1_14(require("WarningIcon").WarningIcon, {});
            },
          content: "Current user is null",
          toastDurationMs: 4000
        };
        obj.open(obj);
        currentUser = null;
      }
      if (null != tmp) {
        if (null != currentUser) {
          const channel = tmp.channel;
          obj = { id: null, type: null, name: "Test Thread", guild_id: null, parent_id: null, ownerId: null };
          const obj4 = SnowflakeUtilsDefault;
          const tmp6 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
          const _Date = Date;
          obj.id = obj4.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
          obj.type = tmp6;
          obj.guild_id = tmp.guild.id;
          obj.parent_id = channel.id;
          obj.ownerId = currentUser.id;
          const tmp11 = createChannelRecord(obj);
          const obj1 = { type: InAppNotificationTypes.FORUM_THREAD_CREATED, thread: tmp11, threadCreator: currentUser, parentChannel: null, guild: null };
          ({ channel: obj6.parentChannel, guild: obj6.guild } = tmp);
          const obj2 = { key: tmp11.id, duration: null, onDismiss: null, inAppNotificationId: null };
          obj2.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.FORUM_THREAD_CREATED);
          obj2.onDismiss = function onDismiss() {
            return InAppNotificationActionCreatorsDefault.clearNotification();
          };
          obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.BUG_REPORTER),
        onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
        inAppNotificationId: null
      };
      obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
        let obj = { type: InAppNotificationTypes.ALERT, channel: null, guild: null };
        ({ channel: obj.channel, guild: obj.guild } = tmp);
        obj = {
          key: tmp.guild.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.ALERT),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj);
        tmp2 = obj;
      }
      return tmp2;
    }
  },
  {
    type: InAppNotificationTypes.MESSAGE_REQUEST,
    label: "Message Request",
    subLabel: "Enqueues notification using the current user as the requester.",
    build: function buildMessageRequestNotification() {
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        let obj = {
          key: "DEV_IN_APP_NOTIF_TEST_ERROR",
          icon() {
              return closure_1_14(require("WarningIcon").WarningIcon, {});
            },
          content: "Current user is null",
          toastDurationMs: 4000
        };
        obj.open(obj);
        currentUser = null;
      }
      let tmp5 = null;
      if (null != currentUser) {
        obj = { type: InAppNotificationTypes.MESSAGE_REQUEST, author: currentUser, numMutualGuilds: 3 };
        const _HermesInternal = HermesInternal;
        const obj1 = {
          key: "dev-tools-message-request-" + currentUser.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_REQUEST),
          onDismiss() {
              return InAppNotificationActionCreatorsDefault.clearNotification();
            },
          inAppNotificationId: null
        };
        obj1.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj1);
        tmp5 = obj;
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
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.RESTRICTED_HOURS_WARNING),
        onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
        inAppNotificationId: null
      };
      obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
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
        duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED),
        onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        },
        inAppNotificationId: null
      };
      obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj);
      return obj;
    }
  }
];
let size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx");

export default function DevToolsInAppNotificationTestingScreen() {
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
  obj = { size: nativeDefault.space.PX_16 };
  items1 = [
    closure_14(require("native").Spacer, obj),
    closure_25.map((title) => {
      let obj = { children: null };
      obj = { title: title.title, description: "Enqueues notification using the currently selected channel.", hasIcons: true, children: null };
      const options = title.options;
      obj.children = options.map((label) => {
        closure_0 = label;
        return closure_1_14(closure_1_0(5605).TableRow, {
          label: label.label,
          subLabel: label.subLabel,
          icon: closure_1_14(closure_1_0(15583).BeakerIcon, {}),
          onPress() {
            return closure_2_0(closure_0);
          },
          trailing: closure_1_14(closure_1_0(5612).TableRowArrow, {})
        }, label.label);
      });
      items = [closure_2_14(TableRowGroup.TableRowGroup, obj), ];
      obj = { size: nativeDefault.space.PX_16 };
      items[1] = closure_2_14(native.Spacer, obj);
      obj.children = items;
      return __initData(noop.Fragment, obj, title.title);
    }),

  ];
  obj = {
    title: "Other Notification Types",
    hasIcons: true,
    children: items3.map((label) => closure_1_14(label(5605).TableRow, {
      label: label.label,
      subLabel: label.subLabel,
      icon: closure_1_14(label(15583).BeakerIcon, {}),
      onPress() {
        return label(label);
      },
      trailing: closure_1_14(label(5612).TableRowArrow, {})
    }, label.label))
  };
  items1[2] = closure_14(require("TableRowGroup").TableRowGroup, obj);
  obj.children = items1;
  return closure_15(ScrollView, obj);
};