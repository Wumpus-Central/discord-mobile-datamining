// discord_app/modules/threads/ThreadConstants.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
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
  obj = { setting: obj.ALL_MESSAGES, label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["n/bTaY"]);
  const items = [obj, ,];
  obj = { setting: obj.ONLY_MENTIONS, label: null };
  const intl2 = util.intl;
  obj.label = intl2.format(util.t.L2hmYy, {});
  items[1] = obj;
  obj = { setting: obj.NO_MESSAGES, label: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.CtVGyQ);
  items[2] = obj;
  return items;
};
export const ThreadSortOrderReadableForAnalytics = { LATEST_ACTIVITY: "Last Message", CREATION_DATE: "Creation" };
export const FORUM_POST_CREATION_UPLOAD_ERRORS = set;
export const FORUM_POST_CREATION_AUTOMOD_ERRORS = new Set(items1);
