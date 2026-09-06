// === Module 11719: PollStyles ===

// Module 11719 (PollStyles)
import _mod4745 from "module_4745" /* 4745 */;
import PollLayoutTypes from "PollLayoutTypes" /* 11720 */;
import PollMessageChatDataTypes from "PollMessageChatDataTypes" /* 11721 */;
import size from "module_2" /* 2 */;

function normal(border, arg1) {
  closure_0 = border;
  const obj = { border: border.colors.BORDER_SUBTLE, borderWidth: 1, fill: border.colors.CARD_SECONDARY_BG, label: null, opacity: 1, answerBackground: null, answerFill: null, radioStyle: null, radioBackground: null, radioForeground: null };
  const match = _mod4745.match(arg1);
  obj.label = match.with(PollLayoutTypes.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => colors.colors.WHITE).otherwise(() => colors.colors.TEXT_DEFAULT);
  obj.answerBackground = border.colors.BACKGROUND_MOD_MUTED;
  obj.answerFill = border.colors.BACKGROUND_MOD_SUBTLE;
  obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.HOLLOW;
  obj.radioBackground = border.colors.INTERACTIVE_TEXT_ACTIVE;
  obj.radioForeground = border.colors.WHITE;
  return obj;
}
function normalVote(colors, arg1) {
  if (typeof normal === "function") {
    let obj = {};
    obj = { border: colors.colors.BORDER_SUBTLE, borderWidth: 1, fill: colors.colors.CARD_SECONDARY_BG, label: null, opacity: 1, answerBackground: null, answerFill: null, radioStyle: null, radioBackground: null, radioForeground: null };
    const match = _mod4745.match(arg1);
    obj.label = match.with(PollLayoutTypes.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => colors.colors.WHITE).otherwise(() => colors.colors.TEXT_DEFAULT);
    obj.answerBackground = colors.colors.BACKGROUND_MOD_MUTED;
    obj.answerFill = colors.colors.BACKGROUND_MOD_SUBTLE;
    obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.HOLLOW;
    obj.radioBackground = colors.colors.INTERACTIVE_TEXT_ACTIVE;
    obj.radioForeground = colors.colors.WHITE;
    const merged = Object.assign(obj);
    obj.borderWidth = 0;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function notVoted(colors, arg1) {
  const obj = {};
  const merged = Object.assign(normalVote(colors, arg1));
  obj.answerFill = colors.colors.INTERACTIVE_BACKGROUND_ACTIVE;
  obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.NONE;
  return obj;
}
function victorNotSelected(colors, arg1) {
  const obj = {};
  const merged = Object.assign(normalVote(colors, arg1));
  obj.border = colors.colors.STATUS_POSITIVE;
  obj.borderWidth = 1;
  obj.answerFill = colors.colors.POLLS_VICTOR_FILL;
  obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.NONE;
  return obj;
}
const result = size.fileFinishedImporting("modules/polls/chat/native/PollStyles.tsx");

export const pollStyleSets = {
  loserSelected(colors, arg1) {
    if (typeof notVoted === "function") {
      let obj = {};
      obj = {};
      const merged = Object.assign(normalVote(colors, arg1));
      obj.answerFill = colors.colors.INTERACTIVE_BACKGROUND_ACTIVE;
      obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.NONE;
      const merged1 = Object.assign(obj);
      obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.CHECKMARK;
      obj.radioBackground = colors.colors.INTERACTIVE_TEXT_ACTIVE;
      obj.radioForeground = colors.colors.BACKGROUND_BASE_LOW;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  normal,
  notVoted,
  selected(unselected, arg1) {
    const obj = {};
    const merged = Object.assign(normalVote(unselected, arg1));
    obj.border = unselected.colors.BACKGROUND_BRAND;
    obj.borderWidth = 1;
    obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.FILLED;
    obj.radioBackground = unselected.colors.REDESIGN_INPUT_CONTROL_SELECTED;
    obj.radioForeground = unselected.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  victorNotSelected,
  victorSelected(colors, arg1) {
    if (typeof victorNotSelected === "function") {
      let obj = {};
      obj = {};
      const merged = Object.assign(normalVote(colors, arg1));
      obj.border = colors.colors.STATUS_POSITIVE;
      obj.borderWidth = 1;
      obj.answerFill = colors.colors.POLLS_VICTOR_FILL;
      obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.NONE;
      const merged1 = Object.assign(obj);
      obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.CHECKMARK;
      obj.radioBackground = colors.colors.STATUS_POSITIVE;
      obj.radioForeground = colors.colors.STATUS_POSITIVE_TEXT;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  voted(colors, arg1) {
    const obj = {};
    const merged = Object.assign(normalVote(colors, arg1));
    obj.border = colors.colors.BACKGROUND_BRAND;
    obj.borderWidth = 1;
    obj.answerFill = colors.colors.POLLS_VOTED_FILL;
    obj.radioStyle = PollMessageChatDataTypes.PollRadioStyle.CHECKMARK;
    obj.radioBackground = colors.colors.REDESIGN_INPUT_CONTROL_SELECTED;
    obj.radioForeground = colors.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  normalVote
};