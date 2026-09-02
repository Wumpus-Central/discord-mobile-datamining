// === Module 7437: isAutocompleteSeparatingBoundary ===

// Module 7437 (isAutocompleteSeparatingBoundary)
import ME from "ME" /* 673 */;
import regExp from "regExp" /* 4953 */;
import set from "set" /* 2 */;

function isAutocompleteSeparatingBoundary(c22, arg1) {
  let isMatch = 0 === arg1;
  if (!isMatch) {
    isMatch = WHITESPACE_RE.test(c22[arg1 - 1]);
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
      let tmp = isAutocompleteSeparatingBoundary;
      let tmp2 = num;
      if (isAutocompleteSeparatingBoundary(c22, num)) {
        let tmp3 = closure_1;
        let tmp4 = closure_1;
        for (const item10013 of closure_1) {
          if (arg0.startsWith(item10013, num)) {
            let tmp6 = obj;
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
({ CHANNEL_SENTINEL, COMMAND_SENTINEL, EMOJI_SENTINEL, MENTION_SENTINEL, REACTION_START_SENTINEL } = regExp);
const WHITESPACE_RE = ME.WHITESPACE_RE;
const items = [REACTION_START_SENTINEL, MENTION_SENTINEL, CHANNEL_SENTINEL, EMOJI_SENTINEL, COMMAND_SENTINEL];
let closure_1 = items.sort((arg0, arg1) => arg1.length - arg0.length);
const items1 = ["("];
let set = new Set(items1);
const result = set.fileFinishedImporting("modules/channel_autocomplete/AutocompleteBoundaryUtils.tsx");

export const AUTOCOMPLETE_BOUNDARY_CHARACTERS = items1;
export const AUTOCOMPLETE_BOUNDARY_CHARACTERS_SET = set;
export { isAutocompleteSeparatingBoundary };
export { getAutocompleteToken };
export const boundAutocompleteWord = function boundAutocompleteWord(c22, arr) {
  arr = getAutocompleteToken(c22);
  const diff = c22.length - arr.length;
  return { word: arr, fullWord: arr.slice(diff), didTrimPrefix: diff > 0 };
};