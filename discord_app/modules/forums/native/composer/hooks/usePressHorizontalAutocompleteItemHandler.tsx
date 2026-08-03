import noop from "noop";
import set from "AutocompleteFormDivider";

const require = arg1;
let items = [, , , ];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = require("ME").AutoCompleteResultTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx");

export const usePressHorizontalAutocompleteItemHandler = function usePressHorizontalAutocompleteItemHandler(draftContent) {
  draftContent = draftContent.draftContent;
  const handleTextChange = draftContent.handleTextChange;
  const setSelection = draftContent.setSelection;
  const channel = draftContent.channel;
  let items = [draftContent, handleTextChange, setSelection, channel];
  return setSelection.useCallback((type, length2) => {
    const obj = draftContent(handleTextChange[2]);
    const str = draftContent.substring(0, length2);
    const items = [...str];
    const reversed = items.reverse();
    const joined = reversed.join("");
    const substr = str.substring(0, str.length - joined.search(/\s|\r|\n/));
    handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
    const length = substr + draftContent(handleTextChange[2]).getAutocompleteResultText(type, channel, channel).length;
    setSelection({ start: length, end: length });
  }, items);
};