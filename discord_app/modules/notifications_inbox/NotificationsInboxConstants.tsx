// discord_app/modules/notifications_inbox/NotificationsInboxConstants.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import setDefault from "../../utils/Durations.tsx";
import getSystemLocale from "../../intl/index.native.tsx";

const NOTIFICATIONS_INBOX = ME.NOTIFICATIONS_INBOX;
let obj = { UNREAD: "UNREAD", TODAY: "TODAY", YESTERDAY: "YESTERDAY", OLDER: "OLDER" };
obj = { ALL: "all", MENTIONS: "mentions", BOOKMARKS: "bookmarks" };
obj = {};
obj[obj.UNREAD] = getSystemLocale.t.sRUdB8;
obj[obj.TODAY] = getSystemLocale.t.F4jZQs;
obj[obj.YESTERDAY] = getSystemLocale.t.gnv4pE;
obj[obj.OLDER] = getSystemLocale.t.exrPZv;
const result = set.fileFinishedImporting("modules/notifications_inbox/NotificationsInboxConstants.tsx");

export const ANALYTICS_NAME = "Notifications Inbox";
export const NOTIFICATIONS_INBOX_RAW_GUILD_ID = "notifications_inbox_guild_id";
export const GUILD_HEADER_HEIGHT = 88;
export const INBOX_MESSAGE_AGE_THRESHOLD = setDefault.Millis.WEEK;
export const MAX_MESSAGES_PER_CHANNEL = 50;
export const MAX_UNREAD_MESSAGES_PER_CHANNEL = 10;
export const NOTIFICATIONS_INBOX_FEATURE = "notifications-inbox";
export const getNotificationsInboxGuild = function getNotificationsInboxGuild(arg0) {
  if (arg0 === obj.BOOKMARKS) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t["2pAkDA"]);
    let tmp2 = require;
  } else if (arg0 === tmp.MENTIONS) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.jbV6MM);
    tmp2 = require;
  } else {
    tmp2 = require;
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.HcoRu0);
  }
  obj = { id: NOTIFICATIONS_INBOX, name: stringResult, description: "", icon: "Array", features: 13 };
  obj[4] = [];
  return tmp2(1430).fromGuildBasic(obj);
};
export const MessageCategory = obj;
export const InboxFilters = obj;
export const InboxReadState = { READ: "READ", UNREAD: "UNREAD" };
export const InboxMessageType = { ALL_MESSAGES_CHANNEL: "ALL_MESSAGES_CHANNEL", MENTION: "MENTION", BOOKMARK: "BOOKMARK" };
export const MESSAGE_CATEGORY_DISPLAY_MAP = obj;
export const getFilterMap = function getFilterMap() {
  obj = {};
  const intl = getSystemLocale.intl;
  obj[obj.ALL] = intl.string(getSystemLocale.t.iWyjNt);
  const intl2 = getSystemLocale.intl;
  obj[obj.MENTIONS] = intl2.string(getSystemLocale.t.jbV6MM);
  const intl3 = getSystemLocale.intl;
  obj[obj.BOOKMARKS] = intl3.string(getSystemLocale.t["+rlGYW"]);
  return obj;
};
export const ChannelLoadState = { UNLOADED: "unloaded", LOADED: "loaded", LOADED_UNREAD: "loadedUnread" };
export const LoadingTrigger = { AUTO_LOAD: "auto_load", ON_OPEN: "on_open", FILL_SCROLLER: "fill_scroller", USER_SCROLL: "user_scroll", UNKNOWN: "unknown" };
export const NotificationInboxItemType = { MENTION: "MENTION", REPLY: "REPLY", REACTION: "REACTION", ANNOUNCEMENT: "ANNOUNCEMENT", MESSAGE: "MESSAGE" };
export const NotificationInboxActionType = { ACK: "ACK", BOOKMARK: "BOOKMARK", SETTINGS: "SETTINGS" };