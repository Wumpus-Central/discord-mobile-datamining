// discord_app/modules/channel_autocomplete/AutocompleteBoundaryUtils.tsx
import Constants from "../../Constants.tsx";
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function isAutocompleteSeparatingBoundary(c22, selectionStart) {
  let isMatch = 0 === selectionStart;
  if (!isMatch) {
    isMatch = WHITESPACE_RE.test(c22[selectionStart - 1]);
  }
  if (!isMatch) {
    let hasItem = null != tmp3;
    if (hasItem) {
      hasItem = set.has(tmp3);
    }
    isMatch = hasItem;
  }
  return isMatch;
}
function getAutocompleteToken(c22) {
  let num = 0;
  if (0 < c22.length) {
    while (true) {
      if (isAutocompleteSeparatingBoundary(c22, num)) {
        for (const item10013 of closure_1) {
          if (arg0.startsWith(item10013, num)) {
            let substr = arg0.slice(num);
            obj.return();
            return substr;
          }
        }
      }
      num = num + 1;
    }
  }
  return c22;
}
({ CHANNEL_SENTINEL, COMMAND_SENTINEL, EMOJI_SENTINEL, MENTION_SENTINEL, REACTION_START_SENTINEL } =
  ChannelAutocompleteConstants);
const WHITESPACE_RE = Constants.WHITESPACE_RE;
const items = [REACTION_START_SENTINEL, MENTION_SENTINEL, CHANNEL_SENTINEL, EMOJI_SENTINEL, COMMAND_SENTINEL];
let closure_1 = items.sort((arg0, arg1) => arg1.length - arg0.length);
const items1 = ["("];
const set = new Set(items1);
const result = size.fileFinishedImporting("modules/channel_autocomplete/AutocompleteBoundaryUtils.tsx");

export const AUTOCOMPLETE_BOUNDARY_CHARACTERS = items1;
export const AUTOCOMPLETE_BOUNDARY_CHARACTERS_SET = set;
export { isAutocompleteSeparatingBoundary };
export { getAutocompleteToken };
export const boundAutocompleteWord = function boundAutocompleteWord(c22, arr) {
  arr = getAutocompleteToken(c22);
  const diff = c22.length - arr.length;
  return { word: arr, fullWord: arr.slice(diff), didTrimPrefix: diff > 0 };
};
