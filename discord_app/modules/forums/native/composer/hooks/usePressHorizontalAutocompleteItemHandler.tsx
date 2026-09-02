// discord_app/modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import set from "../../../../../../_runtime/00002_set.js";

const require = arg1;
let items = [, , ,];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = require("ME").AutoCompleteResultTypes);
let set = new Set(items);
const result = set.fileFinishedImporting(
  "modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx",
);

export const usePressHorizontalAutocompleteItemHandler = function usePressHorizontalAutocompleteItemHandler(
  draftContent,
) {
  draftContent = draftContent.draftContent;
  const handleTextChange = draftContent.handleTextChange;
  const setSelection = draftContent.setSelection;
  const channel = draftContent.channel;
  const items = [draftContent, handleTextChange, setSelection, channel];
  return setSelection.useCallback((type, length2) => {
    const obj = draftContent(handleTextChange[2]);
    const substr = draftContent.substring(0, length2);
    handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
    const length = substr + draftContent(handleTextChange[2]).getAutocompleteResultText(type, channel, channel).length;
    setSelection({ start: length, end: length });
  }, items);
};
