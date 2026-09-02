// === Module 1232: AbortCodes ===

// Module 1232 (AbortCodes)
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import set from "set" /* 2 */;

const AbortCodes = ME.AbortCodes;
let obj = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
let items = [, , , ];
({ TOO_MANY_ATTACHMENTS: arr[0], EXPLICIT_CONTENT: arr[1], ENTITY_TOO_LARGE: arr[2], EXPLICIT_CONTENT: arr[3] } = AbortCodes);
let set = new Set(items);
const items1 = [, ];
({ AUTOMOD_MESSAGE_BLOCKED: arr2[0], AUTOMOD_TITLE_BLOCKED: arr2[1] } = AbortCodes);
const result = set.fileFinishedImporting("modules/threads/ThreadConstants.tsx");

export const DEFAULT_AUTO_ARCHIVE_DURATION = 4320;
export const MAX_THREAD_MESSAGE_COUNT_OLD = 50;
export const MAX_THREAD_MESSAGE_COUNT = 100000;
export const MAX_THREAD_MEMBERS_PREVIEW = 50;
export const MAX_THREAD_UNREAD_MESSAGE_COUNT = 25;
export const ThreadMemberFlags = obj;
export const OpenThreadAnalyticsLocations = { EMBED: "Embed", BROWSER: "Thread Browser", POPOUT: "Active Threads Popout", CHANNEL_LIST: "Channel List", GUILD_ACTIVE_THREADS_MODAL: "Guild Active Threads Modal", INBOX: "Inbox", FORUM: "Forum", VOICE_AUTO_OPEN: "Voice Auto Open" };
export const getThreadNotificationOptions = function getThreadNotificationOptions() {
  obj = { setting: obj.ALL_MESSAGES, label: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["n/bTaY"]);
  const items = [obj, , ];
  obj = { setting: obj.ONLY_MENTIONS, label: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.L2hmYy, {});
  items[1] = obj;
  obj = { setting: obj.NO_MESSAGES, label: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.CtVGyQ);
  items[2] = obj;
  return items;
};
export const ThreadSortOrderReadableForAnalytics = { LATEST_ACTIVITY: "Last Message", CREATION_DATE: "Creation" };
export const FORUM_POST_CREATION_UPLOAD_ERRORS = set;
export const FORUM_POST_CREATION_AUTOMOD_ERRORS = new Set(items1);