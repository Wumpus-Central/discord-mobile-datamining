// === Module 7832: NotificationsInboxConstants ===

// Module 7832 (NotificationsInboxConstants)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl4 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const NOTIFICATIONS_INBOX = Constants.NOTIFICATIONS_INBOX;
let obj = { UNREAD: "UNREAD", TODAY: "TODAY", YESTERDAY: "YESTERDAY", OLDER: "OLDER" };
const obj2 = { ALL: "all", MENTIONS: "mentions", BOOKMARKS: "bookmarks" };
const obj3 = {};
const WEEK = DurationsDefault.Millis.WEEK;
obj3[obj.UNREAD] = intl4.t.sRUdB8;
obj3[obj.TODAY] = intl4.t.F4jZQs;
obj3[obj.YESTERDAY] = intl4.t.gnv4pE;
obj3[obj.OLDER] = intl4.t.exrPZv;
const result = size.fileFinishedImporting("modules/notifications_inbox/NotificationsInboxConstants.tsx");

export const ANALYTICS_NAME = "Notifications Inbox";
export const NOTIFICATIONS_INBOX_RAW_GUILD_ID = "notifications_inbox_guild_id";
export const GUILD_HEADER_HEIGHT = 88;
export const INBOX_MESSAGE_AGE_THRESHOLD = WEEK;
export const MAX_MESSAGES_PER_CHANNEL = 50;
export const MAX_UNREAD_MESSAGES_PER_CHANNEL = 10;
export const NOTIFICATIONS_INBOX_FEATURE = "notifications-inbox";
export const getNotificationsInboxGuild = function getNotificationsInboxGuild(arg0) {
  let stringResult;
  let tmp2;
  if (arg0 === obj2.BOOKMARKS) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t["2pAkDA"]);
    tmp2 = require;
  } else if (arg0 === tmp.MENTIONS) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.jbV6MM);
    tmp2 = require;
  } else {
    tmp2 = require;
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.HcoRu0);
  }
  const obj = { id: NOTIFICATIONS_INBOX, name: stringResult, description: "", icon: "Array", features: [] };
  const tmp2Result = tmp2(2066);
  return tmp2Result.fromGuildBasic(obj);
};
export const MessageCategory = obj;
export const InboxFilters = obj2;
export const InboxReadState = { READ: "READ", UNREAD: "UNREAD" };
export const InboxMessageType = { ALL_MESSAGES_CHANNEL: "ALL_MESSAGES_CHANNEL", MENTION: "MENTION", BOOKMARK: "BOOKMARK" };
export const MESSAGE_CATEGORY_DISPLAY_MAP = obj3;
export const getFilterMap = function getFilterMap() {
  const obj = {};
  const ALL = obj2.ALL;
  const intl = intl4.intl;
  obj[ALL] = intl.string(intl4.t.iWyjNt);
  const MENTIONS = obj2.MENTIONS;
  const intl2 = intl4.intl;
  obj[MENTIONS] = intl2.string(intl4.t.jbV6MM);
  const BOOKMARKS = obj2.BOOKMARKS;
  const intl3 = intl4.intl;
  obj[BOOKMARKS] = intl3.string(intl4.t["+rlGYW"]);
  return obj;
};
export const ChannelLoadState = { UNLOADED: "unloaded", LOADED: "loaded", LOADED_UNREAD: "loadedUnread" };
export const LoadingTrigger = { AUTO_LOAD: "auto_load", ON_OPEN: "on_open", FILL_SCROLLER: "fill_scroller", USER_SCROLL: "user_scroll", UNKNOWN: "unknown" };
export const NotificationInboxItemType = { MENTION: "MENTION", REPLY: "REPLY", REACTION: "REACTION", ANNOUNCEMENT: "ANNOUNCEMENT", MESSAGE: "MESSAGE" };
export const NotificationInboxActionType = { ACK: "ACK", BOOKMARK: "BOOKMARK", SETTINGS: "SETTINGS" };