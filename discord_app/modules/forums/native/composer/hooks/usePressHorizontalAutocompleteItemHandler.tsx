// === Module 9666: usePressHorizontalAutocompleteItemHandler ===

// Module 9666 (usePressHorizontalAutocompleteItemHandler)
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 9667 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [, , , ];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = fn(1085).AutoCompleteResultTypes);
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx");

export const usePressHorizontalAutocompleteItemHandler = ReactCompilerGating.isReactCompilerEnabled() ? (function usePressHorizontalAutocompleteItemHandler(draftContent) {
  const cResult = draftContent(handleTextChange[3]).c(5);
  draftContent = draftContent.draftContent;
  handleTextChange = draftContent.handleTextChange;
  const setSelection = draftContent.setSelection;
  const channel = draftContent.channel;
  if (cResult[0] === channel) {
    if (cResult[1] === draftContent) {
      if (cResult[2] === handleTextChange) {
        if (cResult[3] === setSelection) {
          let tmp2 = cResult[4];
        }
        return tmp2;
      }
    }
  }
  const fn = function n(type, length2, arg2) {
    const substr = draftContent.substring(0, length2);
    handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
    const length = substr + autocompleter_AutocompleteUtils.getAutocompleteResultText(type, channel, set).length;
    setSelection({ start: length, end: length });
  };
  cResult[0] = channel;
  cResult[1] = draftContent;
  cResult[2] = handleTextChange;
  cResult[3] = setSelection;
  cResult[4] = fn;
  tmp2 = fn;
}) : (function usePressHorizontalAutocompleteItemHandler(draftContent) {
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
});