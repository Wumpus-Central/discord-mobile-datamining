// discord_app/modules/polls/chat/native/PollStyles.tsx
import merged5 from "../../../../../_runtime/05081_merged5.js";
import PollLayoutTypes from "../../../../../discord_common/js/shared/shared-constants/PollLayoutTypes.tsx";
import PollMessageChatDataTypes from "../PollMessageChatDataTypes.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function normal(border, config) {
  let withResult;
  let closure_0 = border;
  const obj = {
    border: border.colors.BORDER_SUBTLE,
    borderWidth: 1,
    fill: border.colors.CARD_SECONDARY_BG,
    label: withResult.otherwise(() => closure_0.colors.TEXT_DEFAULT),
    opacity: 1,
    answerBackground: border.colors.BACKGROUND_MOD_MUTED,
    answerFill: border.colors.BACKGROUND_MOD_SUBTLE,
    radioStyle: PollMessageChatDataTypes.PollRadioStyle.HOLLOW,
    radioBackground: border.colors.INTERACTIVE_TEXT_ACTIVE,
    radioForeground: border.colors.WHITE,
  };
  const str = merged5;
  const match = str.match(config);
  withResult = match.with(PollLayoutTypes.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => closure_0.colors.WHITE);
  return obj;
}
function normalVote(colors, config) {
  let withResult;
  if (typeof normal === "function") {
    let closure_0 = colors;
    const obj = { borderWidth: 0 };
    const obj2 = {
      border: colors.colors.BORDER_SUBTLE,
      borderWidth: 1,
      fill: colors.colors.CARD_SECONDARY_BG,
      label: withResult.otherwise(() => closure_0.colors.TEXT_DEFAULT),
      opacity: 1,
      answerBackground: colors.colors.BACKGROUND_MOD_MUTED,
      answerFill: colors.colors.BACKGROUND_MOD_SUBTLE,
      radioStyle: PollMessageChatDataTypes.PollRadioStyle.HOLLOW,
      radioBackground: colors.colors.INTERACTIVE_TEXT_ACTIVE,
      radioForeground: colors.colors.WHITE,
    };
    const str = merged5;
    const match = str.match(config);
    withResult = match.with(PollLayoutTypes.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => closure_0.colors.WHITE);
    const merged = Object.assign(obj2);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function notVoted(colors, config) {
  const obj = {
    answerFill: colors.colors.INTERACTIVE_BACKGROUND_ACTIVE,
    radioStyle: PollMessageChatDataTypes.PollRadioStyle.NONE,
  };
  const merged = Object.assign(normalVote(colors, config));
  return obj;
}
function victorNotSelected(colors, config) {
  const obj = {
    border: colors.colors.STATUS_POSITIVE,
    borderWidth: 1,
    answerFill: colors.colors.POLLS_VICTOR_FILL,
    radioStyle: PollMessageChatDataTypes.PollRadioStyle.NONE,
  };
  const merged = Object.assign(normalVote(colors, config));
  return obj;
}
let obj = {
  loserSelected(colors, config) {
    if (typeof notVoted === "function") {
      const obj = {
        radioStyle: PollMessageChatDataTypes.PollRadioStyle.CHECKMARK,
        radioBackground: colors.colors.INTERACTIVE_TEXT_ACTIVE,
        radioForeground: colors.colors.BACKGROUND_BASE_LOW,
      };
      const obj2 = {
        answerFill: colors.colors.INTERACTIVE_BACKGROUND_ACTIVE,
        radioStyle: PollMessageChatDataTypes.PollRadioStyle.NONE,
      };
      const merged = Object.assign(normalVote(colors, config));
      const merged1 = Object.assign(obj2);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  normal,
  notVoted,
  selected(iconBackground, config) {
    const obj = {
      border: iconBackground.colors.BACKGROUND_BRAND,
      borderWidth: 1,
      radioStyle: PollMessageChatDataTypes.PollRadioStyle.FILLED,
      radioBackground: iconBackground.colors.REDESIGN_INPUT_CONTROL_SELECTED,
      radioForeground: iconBackground.colors.STATUS_POSITIVE_TEXT,
    };
    const merged = Object.assign(normalVote(iconBackground, config));
    return obj;
  },
  victorNotSelected,
  victorSelected(colors, config) {
    if (typeof victorNotSelected === "function") {
      const obj = {
        radioStyle: PollMessageChatDataTypes.PollRadioStyle.CHECKMARK,
        radioBackground: colors.colors.STATUS_POSITIVE,
        radioForeground: colors.colors.STATUS_POSITIVE_TEXT,
      };
      const obj2 = {
        border: colors.colors.STATUS_POSITIVE,
        borderWidth: 1,
        answerFill: colors.colors.POLLS_VICTOR_FILL,
        radioStyle: PollMessageChatDataTypes.PollRadioStyle.NONE,
      };
      const merged = Object.assign(normalVote(colors, config));
      const merged1 = Object.assign(obj2);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  voted(colors, config) {
    const obj = {
      border: colors.colors.BACKGROUND_BRAND,
      borderWidth: 1,
      answerFill: colors.colors.POLLS_VOTED_FILL,
      radioStyle: PollMessageChatDataTypes.PollRadioStyle.CHECKMARK,
      radioBackground: colors.colors.REDESIGN_INPUT_CONTROL_SELECTED,
      radioForeground: colors.colors.STATUS_POSITIVE_TEXT,
    };
    const merged = Object.assign(normalVote(colors, config));
    return obj;
  },
  normalVote,
};
const result = size.fileFinishedImporting("modules/polls/chat/native/PollStyles.tsx");

export const pollStyleSets = obj;
