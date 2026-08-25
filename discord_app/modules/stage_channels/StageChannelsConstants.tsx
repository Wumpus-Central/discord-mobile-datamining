// === Module 5239: MAX_STAGE_TOPIC_LENGTH ===

// Module 5239 (MAX_STAGE_TOPIC_LENGTH)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const result = set.fileFinishedImporting("modules/stage_channels/StageChannelsConstants.tsx");

export const MAX_STAGE_TOPIC_LENGTH = 240;
export const MAX_AUDIENCE_ROW_LIMIT = 4;
export const STAGE_APPLICATION_ID = "834488117758001152";
export const REQUEST_TO_SPEAK_SHEET_KEY = "request-to-speak-list";
export const START_STAGE_CHANNEL_EVENT_SHEET_KEY = "start-stage-channel-event";
export const START_STAGE_CHANNEL_EVENT_MODAL_KEY = "start-stage-channel-event-modal";
export const PUBLIC_STAGE_INFO_ACTION_SHEET_KEY = "public-stage-info-action-sheet";
export const STAGE_AUDIENCE_NOTICE_SHEET_KEY = "stage-channel-audience-notice";
export const STAGE_BLOCKED_USERS_SHEET_KEY = "stage-channel-blocked-users";
export const STAGE_SETTINGS_SHEET_KEY = "stage-settings";
export const EXPLICIT_END_STAGE_SHEET_KEY = "explicit-end-stage";
export const STAGE_INVITE_STATE_KEY = "stage-invite";
export const STAGE_BOOSTING_SHEET_KEY = "stage-boosting";
export const STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY = "stage-channel-audience-notice-shown";
export const RequestToSpeakPermissionStates = { EVERYONE: 1, [1]: "EVERYONE", NO_ONE: 2, [2]: "NO_ONE", ROLES: 3, [3]: "ROLES" };
export const getStagePublicInfoText = function getStagePublicInfoText() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t["9XlQ9W"]), , , ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.lF0IbB);
  const intl3 = getSystemLocale.intl;
  const obj = { articleURL: combinedDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
  items[2] = intl3.format(getSystemLocale.t.q2jZ6N, obj);
  const intl4 = getSystemLocale.intl;
  items[3] = intl4.string(getSystemLocale.t.xfb7ZU);
  return items;
};