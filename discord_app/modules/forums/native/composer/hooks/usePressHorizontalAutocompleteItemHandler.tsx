// discord_app/modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx
import autocompleter_AutocompleteUtils from "../../../../autocompleter/native/AutocompleteUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let items = [, , ,];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = fn(1074).AutoCompleteResultTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting(
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
  return setSelection.useCallback((type, length2, arg2) => {
    const substr = draftContent.substring(0, length2);
    handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
    const length = substr + autocompleter_AutocompleteUtils.getAutocompleteResultText(type, channel, set).length;
    setSelection({ start: length, end: length });
  }, items);
};
