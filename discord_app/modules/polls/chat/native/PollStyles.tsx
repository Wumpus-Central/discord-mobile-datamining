// === Module 8131: normal ===

// Module 8131 (normal)
import set from "set" /* 2 */;
import NativeShadowType from "NativeShadowType" /* 8133 */;

function normal(border) {
  const _require = border;
  const obj = { border: border.colors.BORDER_SUBTLE, borderWidth: 1, fill: border.colors.CARD_SECONDARY_BG, label: null, opacity: 1, answerBackground: null, answerFill: null, radioStyle: null, radioBackground: null, radioForeground: null };
  const match = _require(4705).match(arg1);
  const str = _require(4705);
  obj[3] = match.with(_require(8132).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => border.colors.WHITE).otherwise(() => border.colors.TEXT_DEFAULT);
  obj[5] = border.colors.BACKGROUND_MOD_MUTED;
  obj[6] = border.colors.BACKGROUND_MOD_SUBTLE;
  obj[7] = _require(8133).PollRadioStyle.HOLLOW;
  obj[8] = border.colors.INTERACTIVE_TEXT_ACTIVE;
  obj[9] = border.colors.WHITE;
  return obj;
}
function normalVote(border, arg1) {
  if (typeof normal !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = {};
  const _require = border;
  obj = { border: border.colors.BORDER_SUBTLE, borderWidth: 1, fill: border.colors.CARD_SECONDARY_BG, label: null, opacity: 1, answerBackground: null, answerFill: null, radioStyle: null, radioBackground: null, radioForeground: null };
  const match = _require(4705).match(arg1);
  const str = _require(4705);
  obj[3] = match.with(_require(8132).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => border.colors.WHITE).otherwise(() => border.colors.TEXT_DEFAULT);
  obj[5] = border.colors.BACKGROUND_MOD_MUTED;
  obj[6] = border.colors.BACKGROUND_MOD_SUBTLE;
  obj[7] = _require(8133).PollRadioStyle.HOLLOW;
  obj[8] = border.colors.INTERACTIVE_TEXT_ACTIVE;
  obj[9] = border.colors.WHITE;
  const merged = Object.assign(obj);
  obj.borderWidth = 0;
  return obj;
}
function notVoted(colors) {
  const obj = {};
  const merged = Object.assign(normalVote(colors, arg1));
  obj.answerFill = colors.colors.INTERACTIVE_BACKGROUND_ACTIVE;
  obj.radioStyle = NativeShadowType.PollRadioStyle.NONE;
  return obj;
}
function victorNotSelected(colors) {
  const obj = {};
  const merged = Object.assign(normalVote(colors, arg1));
  obj.border = colors.colors.STATUS_POSITIVE;
  obj.borderWidth = 1;
  obj.answerFill = colors.colors.POLLS_VICTOR_FILL;
  obj.radioStyle = NativeShadowType.PollRadioStyle.NONE;
  return obj;
}
const result = set.fileFinishedImporting("modules/polls/chat/native/PollStyles.tsx");

export const pollStyleSets = {
  loserSelected(colors) {
    if (typeof notVoted !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = {};
    obj = {};
    const merged = Object.assign(normalVote(colors, arg1));
    obj.answerFill = colors.colors.INTERACTIVE_BACKGROUND_ACTIVE;
    obj.radioStyle = NativeShadowType.PollRadioStyle.NONE;
    const merged1 = Object.assign(obj);
    obj.radioStyle = NativeShadowType.PollRadioStyle.CHECKMARK;
    obj.radioBackground = colors.colors.INTERACTIVE_TEXT_ACTIVE;
    obj.radioForeground = colors.colors.BACKGROUND_BASE_LOW;
    return obj;
  },
  normal,
  notVoted,
  selected(View, arg1, selected) {
    const obj = {};
    const merged = Object.assign(normalVote(View, arg1));
    obj.border = View.colors.BACKGROUND_BRAND;
    obj.borderWidth = 1;
    obj.radioStyle = NativeShadowType.PollRadioStyle.FILLED;
    obj.radioBackground = View.colors.REDESIGN_INPUT_CONTROL_SELECTED;
    obj.radioForeground = View.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  victorNotSelected,
  victorSelected(colors) {
    if (typeof victorNotSelected !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = {};
    obj = {};
    const merged = Object.assign(normalVote(colors, arg1));
    obj.border = colors.colors.STATUS_POSITIVE;
    obj.borderWidth = 1;
    obj.answerFill = colors.colors.POLLS_VICTOR_FILL;
    obj.radioStyle = NativeShadowType.PollRadioStyle.NONE;
    const merged1 = Object.assign(obj);
    obj.radioStyle = NativeShadowType.PollRadioStyle.CHECKMARK;
    obj.radioBackground = colors.colors.STATUS_POSITIVE;
    obj.radioForeground = colors.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  voted(colors) {
    const obj = {};
    const merged = Object.assign(normalVote(colors, arg1));
    obj.border = colors.colors.BACKGROUND_BRAND;
    obj.borderWidth = 1;
    obj.answerFill = colors.colors.POLLS_VOTED_FILL;
    obj.radioStyle = NativeShadowType.PollRadioStyle.CHECKMARK;
    obj.radioBackground = colors.colors.REDESIGN_INPUT_CONTROL_SELECTED;
    obj.radioForeground = colors.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  normalVote
};