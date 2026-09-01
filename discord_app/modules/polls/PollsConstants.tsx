// === Module 7573: POLL_ATTACHMENT_FOLDER ===

// Module 7573 (POLL_ATTACHMENT_FOLDER)
import ExpressionPickerViewType from "ExpressionPickerViewType" /* 1338 */;
import set from "set" /* 2 */;

const items = [, ];
({ GIF: arr[0], EMOJI: arr[1] } = ExpressionPickerViewType.ExpressionPickerViewType);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/polls/PollsConstants.tsx");

export const POLL_ATTACHMENT_FOLDER = "polls";
export const POLL_CREATION_MODAL_KEY = "POLL_CREATION_MODAL_KEY";
export const POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY = "PollsImageInputActionSheet";
export const POLL_CREATION_DURATION_ACTION_SHEET_KEY = "PollsDurationActionSheet";
export const MIN_NUMBER_OF_ANSWERS_PER_POLL = 1;
export const MAX_NUMBER_OF_ANSWERS_PER_POLL = 10;
export const MAX_POLL_QUESTION_LENGTH = 300;
export const MAX_POLL_ANSWER_LENGTH = 55;
export const VOTES_TOOLTIP_MAX_USERS = 3;
export const POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS = 50;
export const PollDurations = { ONE_HOUR: 1, [1]: "ONE_HOUR", FOUR_HOURS: 4, [4]: "FOUR_HOURS", EIGHT_HOURS: 8, [8]: "EIGHT_HOURS", ONE_DAY: 24, [24]: "ONE_DAY", THREE_DAYS: 72, [72]: "THREE_DAYS", SEVEN_DAYS: 168, [168]: "SEVEN_DAYS", FOURTEEN_DAYS: 336, [336]: "FOURTEEN_DAYS" };
export const POLLS_SUPPORTED_EXPRESSION_PICKER_VIEW_TYPES = set;