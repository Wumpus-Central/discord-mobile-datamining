// === Module 5571: StageChannelsConstants ===

// Module 5571 (StageChannelsConstants)
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelsConstants.tsx");

export const MAX_STAGE_TOPIC_LENGTH = 240;
export const MAX_AUDIENCE_ROW_LIMIT = 4;
export const STAGE_APPLICATION_ID = "834488117758001152";
export const REQUEST_TO_SPEAK_SHEET_KEY = "request-to-speak-list";
export const START_STAGE_CHANNEL_EVENT_SHEET_KEY = "start-stage-channel-event";
export const START_STAGE_CHANNEL_EVENT_MODAL_KEY = "start-stage-channel-event-modal";
export const PUBLIC_STAGE_INFO_ACTION_SHEET_KEY = "public-stage-info-action-sheet";
export const STAGE_BLOCKED_USERS_SHEET_KEY = "stage-channel-blocked-users";
export const STAGE_SETTINGS_SHEET_KEY = "stage-settings";
export const EXPLICIT_END_STAGE_SHEET_KEY = "explicit-end-stage";
export const STAGE_INVITE_STATE_KEY = "stage-invite";
export const STAGE_BOOSTING_SHEET_KEY = "stage-boosting";
export const RequestToSpeakPermissionStates = { EVERYONE: 1, [1]: "EVERYONE", NO_ONE: 2, [2]: "NO_ONE", ROLES: 3, [3]: "ROLES" };
export const getStagePublicInfoText = function getStagePublicInfoText() {
  let obj2;
  const intl = intl5.intl;
  const items = [intl.string(intl5.t["9XlQ9W"]), , , ];
  const intl2 = intl5.intl;
  items[1] = intl2.string(intl5.t.lF0IbB);
  const intl3 = intl5.intl;
  const format = intl3.format;
  const obj = { articleURL: obj2.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
  const q2jZ6N = intl5.t.q2jZ6N;
  obj2 = HelpdeskUtilsDefault;
  items[2] = format(q2jZ6N, obj);
  const intl4 = intl5.intl;
  items[3] = intl4.string(intl5.t.xfb7ZU);
  return items;
};