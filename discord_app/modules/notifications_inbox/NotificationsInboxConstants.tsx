import { NOTIFICATIONS_INBOX } from "ME";

let obj = { UNREAD: "UNREAD", TODAY: "TODAY", YESTERDAY: "YESTERDAY", OLDER: "OLDER" };
obj = { ALL: "all", MENTIONS: "mentions", BOOKMARKS: "bookmarks" };
obj = {};
obj[obj.UNREAD] = require("getSystemLocale").t.sRUdB8;
obj[obj.TODAY] = require("getSystemLocale").t.F4jZQs;
obj[obj.YESTERDAY] = require("getSystemLocale").t.gnv4pE;
obj[obj.OLDER] = require("getSystemLocale").t.exrPZv;
const result = require("getSystemLocale").fileFinishedImporting("modules/notifications_inbox/NotificationsInboxConstants.tsx");

export const ANALYTICS_NAME = "Notifications Inbox";
export const NOTIFICATIONS_INBOX_RAW_GUILD_ID = "notifications_inbox_guild_id";
export const GUILD_HEADER_HEIGHT = 88;
export const INBOX_MESSAGE_AGE_THRESHOLD = require("set").Millis.WEEK;
export const MAX_MESSAGES_PER_CHANNEL = 50;
export const MAX_UNREAD_MESSAGES_PER_CHANNEL = 10;
export const NOTIFICATIONS_INBOX_FEATURE = "notifications-inbox";
export const getNotificationsInboxGuild = function getNotificationsInboxGuild(arg0) {
  if (arg0 === obj.BOOKMARKS) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1236) /* getSystemLocale */.t["2pAkDA"]);
    let tmp2 = require;
  } else if (arg0 === tmp.MENTIONS) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1236) /* getSystemLocale */.t.jbV6MM);
    tmp2 = require;
  } else {
    tmp2 = require;
    const intl = require(1236) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1236) /* getSystemLocale */.t.HcoRu0);
  }
  obj = { id: NOTIFICATIONS_INBOX, name: stringResult, description: "", icon: "Array", features: "header" };
  obj[4] = [];
  return tmp2(1411).fromGuildBasic(obj);
};
export const MessageCategory = obj;
export const InboxFilters = obj;
export const InboxReadState = { READ: "READ", UNREAD: "UNREAD" };
export const InboxMessageType = { ALL_MESSAGES_CHANNEL: "ALL_MESSAGES_CHANNEL", MENTION: "MENTION", BOOKMARK: "BOOKMARK" };
export const MESSAGE_CATEGORY_DISPLAY_MAP = obj;
export const getFilterMap = function getFilterMap() {
  const obj = {};
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[obj.ALL] = intl.string(require(1236) /* getSystemLocale */.t.iWyjNt);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[obj.MENTIONS] = intl2.string(require(1236) /* getSystemLocale */.t.jbV6MM);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[obj.BOOKMARKS] = intl3.string(require(1236) /* getSystemLocale */.t["+rlGYW"]);
  return obj;
};
export const ChannelLoadState = { UNLOADED: "unloaded", LOADED: "loaded", LOADED_UNREAD: "loadedUnread" };
export const LoadingTrigger = { AUTO_LOAD: "auto_load", ON_OPEN: "on_open", FILL_SCROLLER: "fill_scroller", USER_SCROLL: "user_scroll", UNKNOWN: "unknown" };
export const NotificationInboxItemType = { MENTION: "MENTION", REPLY: "REPLY", REACTION: "REACTION", ANNOUNCEMENT: "ANNOUNCEMENT", MESSAGE: "MESSAGE" };
export const NotificationInboxActionType = { ACK: "ACK", BOOKMARK: "BOOKMARK", SETTINGS: "SETTINGS" };