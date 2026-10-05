// discord_app/modules/threads/ThreadConstants.tsx
import Constants from "../../Constants.tsx";
import intl4 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const ThreadMemberFlags = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
let items = [, , ,];
({
  TOO_MANY_ATTACHMENTS: arr[0],
  EXPLICIT_CONTENT: arr[1],
  ENTITY_TOO_LARGE: arr[2],
  EXPLICIT_CONTENT: arr[3],
} = AbortCodes);
const items1 = [,];
({ AUTOMOD_MESSAGE_BLOCKED: arr2[0], AUTOMOD_TITLE_BLOCKED: arr2[1] } = AbortCodes);
const set = new Set(items);
const set1 = new Set(items1);
const result = size.fileFinishedImporting("modules/threads/ThreadConstants.tsx");

export const DEFAULT_AUTO_ARCHIVE_DURATION = 4320;
export const MAX_THREAD_MESSAGE_COUNT_OLD = 50;
export const MAX_THREAD_MESSAGE_COUNT = 100000;
export const MAX_THREAD_MEMBERS_PREVIEW = 50;
export const MAX_THREAD_UNREAD_MESSAGE_COUNT = 25;
export { ThreadMemberFlags };
export const OpenThreadAnalyticsLocations = {
  EMBED: "Embed",
  BROWSER: "Thread Browser",
  POPOUT: "Active Threads Popout",
  CHANNEL_LIST: "Channel List",
  GUILD_ACTIVE_THREADS_MODAL: "Guild Active Threads Modal",
  INBOX: "Inbox",
  FORUM: "Forum",
  VOICE_AUTO_OPEN: "Voice Auto Open",
};
export const getThreadNotificationOptions = function getThreadNotificationOptions() {
  let intl;
  let intl2;
  let intl3;
  let obj;
  obj = { setting: obj.ALL_MESSAGES, label: intl.string(intl4.t["n/bTaY"]) };
  intl = intl4.intl;
  const items = [obj, ,];
  const obj2 = { setting: obj.ONLY_MENTIONS, label: intl2.format(intl4.t.L2hmYy, {}) };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { setting: obj.NO_MESSAGES, label: intl3.string(intl4.t.CtVGyQ) };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
};
export const ThreadSortOrderReadableForAnalytics = { LATEST_ACTIVITY: "Last Message", CREATION_DATE: "Creation" };
export const FORUM_POST_CREATION_UPLOAD_ERRORS = set;
export const FORUM_POST_CREATION_AUTOMOD_ERRORS = set1;
