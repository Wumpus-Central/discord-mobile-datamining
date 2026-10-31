// discord_app/modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import StickersTypes from "../../../../stickers/StickersTypes.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import InAppNotificationUtils from "../../../../in_app_notifications/native/InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../../../actions/native/InAppNotificationActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import StickersStore from "../../../../stickers/StickersStore.tsx";
import MessageRecord from "../../../../../records/MessageRecord.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function getSelectedGuildChannel() {
  const channelId = SelectedChannelStore.getChannelId();
  let channel;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  if (null == channel) {
    ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
      text: "Select a channel first",
      variant: "critical",
    });
    let obj = null;
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
    ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
      text: "Select a guild channel first",
      variant: "critical",
    });
  } else {
    const obj5 = { channel: null, guild: null };
    ({ channel: obj3.channel, guild: obj3.guild } = obj);
  }
}
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
    ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
      text: "Select a channel first",
      variant: "critical",
    });
    let obj = null;
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
    ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
      text: "Current user is null",
      variant: "critical",
    });
    currentUser = null;
  }
  if (null != obj) {
    if (null != currentUser) {
      if ("media-only" === arg0) {
        const obj4 = { content: "", attachments: [], stickerItems: null };
        name = StickersStore.getStickerById(id);
        if (null != name) {
          const obj5 = { id: null, format_type: null, name: null };
          ({ id: obj10.id, format_type: obj10.format_type, name } = name);
          obj5.name = name;
          let obj8 = obj5;
        } else {
          obj8 = { id, format_type: StickersTypes.StickerFormat.APNG, name: "Cheer" };
        }
        items1 = [obj8];
        obj4.stickerItems = items1;
      } else {
        if ("text-and-media" === arg0) {
          const obj9 = {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
            attachments: null,
            stickerItems: null,
          };
          const size = {
            id: null,
            url: null,
            proxy_url: null,
            filename: "og_img_discord_home.png",
            size: 54697,
            width: 1200,
            height: 630,
            content_type: "image/png",
          };
          const obj6 = SnowflakeUtilsDefault;
          const _Date = Date;
          size.id = obj6.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
          size.url = httpscdndiscordappcomassetsog_img_discord_homepng;
          size.proxy_url = httpscdndiscordappcomassetsog_img_discord_homepng;
          const items2 = [size];
          obj9.attachments = items2;
          obj9.stickerItems = [];
          let tmp14 = obj9;
        } else if ("text-only" === arg0) {
          const obj12 = {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            attachments: [],
            stickerItems: [],
          };
          tmp14 = obj12;
        }
        const obj15 = { attachments: null, stickerItems: null, reactions: null };
        ({ attachments: obj11.attachments, stickerItems: obj11.stickerItems } = tmp14);
        obj15.reactions = items;
        let attachments = obj15.attachments;
        if (undefined === attachments) {
          attachments = [];
        }
        let stickerItems = obj15.stickerItems;
        if (undefined === stickerItems) {
          stickerItems = [];
        }
        let reactions = obj15.reactions;
        if (undefined === reactions) {
          reactions = [];
        }
        const obj23 = {
          id: null,
          channel_id: null,
          author: null,
          content: null,
          attachments: null,
          sticker_items: null,
          reactions: null,
          timestamp: null,
        };
        const _Date2 = Date;
        obj23.id = SnowflakeUtilsDefault.fromTimestamp(Date.now());
        obj23.channel_id = obj.channel.id;
        obj23.author = currentUser;
        obj23.content = tmp14.content;
        obj23.attachments = attachments;
        obj23.sticker_items = stickerItems;
        obj23.reactions = reactions;
        const _Date3 = Date;
        const date = new Date();
        obj23.timestamp = date;
        const tmp35 = new MessageRecord(obj23);
        const obj24 = { channel: null, guild: null, user: null, message: null };
        ({ channel: obj14.channel, guild: obj14.guild } = obj);
        obj24.user = currentUser;
        obj24.message = tmp35;
        return obj24;
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
    const obj5 = {
      type: InAppNotificationTypes.REACTION,
      channel,
      guild: null,
      user: null,
      message: null,
      parentChannel: null,
      reaction: null,
    };
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
      inAppNotificationId: null,
    };
    obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
    const merged = Object.assign(obj);
    return obj5;
  }
}
const ScrollView = fn(17).ScrollView;
const createChannelRecord = fn(4867).createChannelRecord;
const Constants = fn(1072);
({ ChannelTypes: closure_12, InAppNotificationTypes } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(obj2);
let c17 = "781324722394103808";
let c18 = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
const reaction = {
  emoji: { id: null, name: "\u{1F389}", animated: false },
  me: false,
  me_burst: false,
  count: 1,
  count_details: { normal: 1 },
  burst_count: 0,
};
let items = [
  {
    emoji: { id: null, name: "\u{1F389}", animated: false },
    me: false,
    me_burst: false,
    count: 10,
    count_details: { normal: 10 },
    burst_count: 0,
  },
];
let items1 = [
  { variant: "text-only", label: "Text Only" },
  { variant: "media-only", label: "Media Only" },
  { variant: "text-and-media", label: "Message and Media" },
];
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
        const obj4 = {
          type: InAppNotificationTypes.MESSAGE,
          channel,
          guild: tmp.guild,
          parentChannel: null,
          message: null,
          mentionCount: 1,
        };
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
          inAppNotificationId: null,
        };
        obj.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj);
        return obj4;
      }
    },
  },
  { type: InAppNotificationTypes.REACTION, label: "Reaction", build: buildReactionNotification },
  {
    type: InAppNotificationTypes.REACTION,
    label: "Reaction Milestone",
    build: function buildReactionMilestoneNotification(arg0) {
      return buildReactionNotification(arg0, items);
    },
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
          inAppNotificationId: null,
        };
        obj4.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj4);
        return obj;
      }
    },
  },
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
        },
      };
    }),
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
        ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
          text: "Select a channel first",
          variant: "critical",
        });
        let obj = null;
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
        const obj3 = SnowflakeUtilsDefault;
        const _Date = Date;
        const castResult = obj3.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
        const obj5 = {
          type: InAppNotificationTypes.MESSAGE_FAILED_TO_SEND,
          channelId: obj.channel.id,
          messageId: castResult,
        };
        const obj6 = { key: castResult, duration: null, onDismiss: null, inAppNotificationId: null };
        obj6.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_FAILED_TO_SEND);
        obj6.onDismiss = function onDismiss() {
          return InAppNotificationActionCreatorsDefault.clearNotification();
        };
        obj6.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj6);
        return obj5;
      }
    },
  },
  {
    type: InAppNotificationTypes.FORUM_THREAD_CREATED,
    label: "Forum Thread Created",
    subLabel: "Enqueues notification using the currently selected channel as the parent and a mock thread.",
    build: function buildForumThreadCreatedNotification() {
      const tmp = getSelectedGuildChannel();
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
          text: "Current user is null",
          variant: "critical",
        });
        currentUser = null;
      }
      if (null != tmp) {
        if (null != currentUser) {
          const channel = tmp.channel;
          const obj2 = { id: null, type: null, name: "Test Thread", guild_id: null, parent_id: null, ownerId: null };
          const obj3 = SnowflakeUtilsDefault;
          const tmp6 = channel.type === constants.GUILD_MEDIA ? constants.MEDIA_THREAD : constants.PUBLIC_THREAD;
          const _Date = Date;
          obj2.id = obj3.cast(SnowflakeUtilsDefault.fromTimestamp(Date.now()));
          obj2.type = tmp6;
          obj2.guild_id = tmp.guild.id;
          obj2.parent_id = channel.id;
          obj2.ownerId = currentUser.id;
          const tmp11 = createChannelRecord(obj2);
          const obj6 = {
            type: InAppNotificationTypes.FORUM_THREAD_CREATED,
            thread: tmp11,
            threadCreator: currentUser,
            parentChannel: null,
            guild: null,
          };
          ({ channel: obj5.parentChannel, guild: obj5.guild } = tmp);
          const obj11 = { key: tmp11.id, duration: null, onDismiss: null, inAppNotificationId: null };
          obj11.duration = InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.FORUM_THREAD_CREATED);
          obj11.onDismiss = function onDismiss() {
            return InAppNotificationActionCreatorsDefault.clearNotification();
          };
          obj11.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
          const merged = Object.assign(obj11);
          return obj6;
        }
      }
      return null;
    },
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
        inAppNotificationId: null,
      };
      const obj = { type: InAppNotificationTypes.BUG_REPORTER, image: null };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj2);
      return obj;
    },
  },
  {
    type: InAppNotificationTypes.ALERT,
    label: "Alert",
    subLabel: "Enqueues notification using the currently selected server channel.",
    build: function buildAlertNotification() {
      const tmp = getSelectedGuildChannel();
      let tmp2 = null;
      if (null != tmp) {
        const obj = { type: InAppNotificationTypes.ALERT, channel: null, guild: null };
        ({ channel: obj.channel, guild: obj.guild } = tmp);
        const obj2 = {
          key: tmp.guild.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.ALERT),
          onDismiss() {
            return InAppNotificationActionCreatorsDefault.clearNotification();
          },
          inAppNotificationId: null,
        };
        obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj2);
        tmp2 = obj;
      }
      return tmp2;
    },
  },
  {
    type: InAppNotificationTypes.MESSAGE_REQUEST,
    label: "Message Request",
    subLabel: "Enqueues notification using the current user as the requester.",
    build: function buildMessageRequestNotification() {
      let currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        ToastActionCreatorsDefault.open("DEV_IN_APP_NOTIF_TEST_ERROR", {
          text: "Current user is null",
          variant: "critical",
        });
        currentUser = null;
      }
      let tmp5 = null;
      if (null != currentUser) {
        const obj2 = { type: InAppNotificationTypes.MESSAGE_REQUEST, author: currentUser, numMutualGuilds: 3 };
        const _HermesInternal = HermesInternal;
        const obj3 = {
          key: "dev-tools-message-request-" + currentUser.id,
          duration: InAppNotificationUtils.getNotificationDuration(InAppNotificationTypes.MESSAGE_REQUEST),
          onDismiss() {
            return InAppNotificationActionCreatorsDefault.clearNotification();
          },
          inAppNotificationId: null,
        };
        obj3.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
        const merged = Object.assign(obj3);
        tmp5 = obj2;
      }
      return tmp5;
    },
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
        inAppNotificationId: null,
      };
      const obj = {
        type: InAppNotificationTypes.RESTRICTED_HOURS_WARNING,
        title: "Restricted Hours Warning",
        subtitle: "Test restricted hours warning.",
      };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj2);
      return obj;
    },
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
        inAppNotificationId: null,
      };
      const obj = {
        type: InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED,
        title: "Restricted Schedule Updated",
        subtitle: "Test restricted schedule update.",
      };
      obj2.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      const merged = Object.assign(obj2);
      return obj;
    },
  },
];
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsInAppNotificationTestingScreen.tsx",
);

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
  const tmp2 = useSafeAreaInsetsDefault();
  items1 = [
    closure_14(require("native").Spacer, { size: nativeDefault.space.PX_16 }),
    closure_25.map((title) => {
      const obj = { children: null };
      const obj2 = {
        title: title.title,
        description: "Enqueues notification using the currently selected channel.",
        hasIcons: true,
        children: null,
      };
      const options = title.options;
      obj2.children = options.map((label) => {
        closure_0 = label;
        return closure_1_14(
          closure_1_0(6975).TableRow,
          {
            label: label.label,
            subLabel: label.subLabel,
            icon: closure_1_14(closure_1_0(17571).BeakerIcon, {}),
            onPress() {
              return closure_2_0(closure_0);
            },
            trailing: closure_1_14(closure_1_0(6984).TableRowArrow, {}),
          },
          label.label,
        );
      });
      items = [
        closure_2_14(TableRowGroup.TableRowGroup, obj2),
        closure_2_14(native.Spacer, { size: nativeDefault.space.PX_16 }),
      ];
      obj.children = items;
      return __initData(noop.Fragment, obj, title.title);
    }),
  ];
  let obj2 = { size: nativeDefault.space.PX_16 };
  items1[2] = closure_14(require("TableRowGroup").TableRowGroup, {
    title: "Other Notification Types",
    hasIcons: true,
    children: items3.map((label) =>
      closure_1_14(
        label(6975).TableRow,
        {
          label: label.label,
          subLabel: label.subLabel,
          icon: closure_1_14(label(17571).BeakerIcon, {}),
          onPress() {
            return label(label);
          },
          trailing: closure_1_14(label(6984).TableRowArrow, {}),
        },
        label.label,
      ),
    ),
  });
  obj.children = items1;
  return closure_15(ScrollView, obj);
}
