// discord_app/modules/notifications_inbox/NotificationsInboxConstants.tsx
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NOTIFICATIONS_INBOX = Constants.NOTIFICATIONS_INBOX;
let MESSAGE_CATEGORY_DISPLAY_MAP = { UNREAD: "UNREAD", TODAY: "TODAY", YESTERDAY: "YESTERDAY", OLDER: "OLDER" };
MESSAGE_CATEGORY_DISPLAY_MAP = { ALL: "all", MENTIONS: "mentions", BOOKMARKS: "bookmarks" };
MESSAGE_CATEGORY_DISPLAY_MAP = {};
MESSAGE_CATEGORY_DISPLAY_MAP[MESSAGE_CATEGORY_DISPLAY_MAP.UNREAD] = util.t.sRUdB8;
MESSAGE_CATEGORY_DISPLAY_MAP[MESSAGE_CATEGORY_DISPLAY_MAP.TODAY] = util.t.F4jZQs;
MESSAGE_CATEGORY_DISPLAY_MAP[MESSAGE_CATEGORY_DISPLAY_MAP.YESTERDAY] = util.t.gnv4pE;
MESSAGE_CATEGORY_DISPLAY_MAP[MESSAGE_CATEGORY_DISPLAY_MAP.OLDER] = util.t.exrPZv;
const result = size.fileFinishedImporting("modules/notifications_inbox/NotificationsInboxConstants.tsx");

export const ANALYTICS_NAME = "Notifications Inbox";
export const NOTIFICATIONS_INBOX_RAW_GUILD_ID = "notifications_inbox_guild_id";
export const GUILD_HEADER_HEIGHT = 88;
export const INBOX_MESSAGE_AGE_THRESHOLD = DurationsDefault.Millis.WEEK;
export const MAX_MESSAGES_PER_CHANNEL = 50;
export const MAX_UNREAD_MESSAGES_PER_CHANNEL = 10;
export const NOTIFICATIONS_INBOX_FEATURE = "notifications-inbox";
export const getNotificationsInboxGuild = function getNotificationsInboxGuild(arg0) {
  if (arg0 === obj.BOOKMARKS) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["2pAkDA"]);
    let tmp2 = require;
  } else if (arg0 === tmp.MENTIONS) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.jbV6MM);
    tmp2 = require;
  } else {
    tmp2 = require;
    const intl = util.intl;
    stringResult = intl.string(util.t.HcoRu0);
  }
  obj = { id: NOTIFICATIONS_INBOX, name: stringResult, description: "", icon: "Array", features: [] };
  return tmp2(1971).fromGuildBasic(obj);
};
export const MessageCategory = MESSAGE_CATEGORY_DISPLAY_MAP;
export const InboxFilters = MESSAGE_CATEGORY_DISPLAY_MAP;
export const InboxReadState = { READ: "READ", UNREAD: "UNREAD" };
export const InboxMessageType = {
  ALL_MESSAGES_CHANNEL: "ALL_MESSAGES_CHANNEL",
  MENTION: "MENTION",
  BOOKMARK: "BOOKMARK",
};
export { MESSAGE_CATEGORY_DISPLAY_MAP };
export const getFilterMap = function getFilterMap() {
  obj = {};
  const intl = util.intl;
  obj[obj.ALL] = intl.string(util.t.iWyjNt);
  const intl2 = util.intl;
  obj[obj.MENTIONS] = intl2.string(util.t.jbV6MM);
  const intl3 = util.intl;
  obj[obj.BOOKMARKS] = intl3.string(util.t["+rlGYW"]);
  return obj;
};
export const ChannelLoadState = { UNLOADED: "unloaded", LOADED: "loaded", LOADED_UNREAD: "loadedUnread" };
export const LoadingTrigger = {
  AUTO_LOAD: "auto_load",
  ON_OPEN: "on_open",
  FILL_SCROLLER: "fill_scroller",
  USER_SCROLL: "user_scroll",
  UNKNOWN: "unknown",
};
export const NotificationInboxItemType = {
  MENTION: "MENTION",
  REPLY: "REPLY",
  REACTION: "REACTION",
  ANNOUNCEMENT: "ANNOUNCEMENT",
  MESSAGE: "MESSAGE",
};
export const NotificationInboxActionType = { ACK: "ACK", BOOKMARK: "BOOKMARK", SETTINGS: "SETTINGS" };
