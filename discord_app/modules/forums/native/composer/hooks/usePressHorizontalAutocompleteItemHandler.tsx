// discord_app/modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx
import Constants from "../../../../../Constants.tsx";
import autocompleter_AutocompleteUtils from "../../../../autocompleter/native/AutocompleteUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let draftContent;

let items = [, , ,];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = Constants.AutoCompleteResultTypes);
const set = new Set(items);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (draftContent) => {
      let handleTextChange;
      let obj = draftContent(handleTextChange[3]);
      const cResult = obj.c(5);
      draftContent = draftContent.draftContent;
      handleTextChange = draftContent.handleTextChange;
      const setSelection = draftContent.setSelection;
      const channel = draftContent.channel;
      if (cResult[0] === channel) {
        if (cResult[1] === draftContent) {
          if (cResult[2] === handleTextChange) {
            let tmp2;
            if (cResult[3] === setSelection) {
              tmp2 = cResult[4];
            }
            return tmp2;
          }
        }
      }
      const fn = function n(type, length2, arg2) {
        const obj = autocompleter_AutocompleteUtils;
        const autocompleteResultText = obj.getAutocompleteResultText(type, channel, set);
        const substr = draftContent.substring(0, length2);
        handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
        setSelection({
          start: (substr + autocompleteResultText).length,
          end: (substr + autocompleteResultText).length,
        });
      };
      cResult[0] = channel;
      cResult[1] = draftContent;
      cResult[2] = handleTextChange;
      cResult[3] = setSelection;
      cResult[4] = fn;
      tmp2 = fn;
    }
  : (draftContent) => {
      draftContent = draftContent.draftContent;
      const handleTextChange = draftContent.handleTextChange;
      const setSelection = draftContent.setSelection;
      const channel = draftContent.channel;
      const items = [draftContent, handleTextChange, setSelection, channel];
      return setSelection.useCallback((type, length2, arg2) => {
        const obj = autocompleter_AutocompleteUtils;
        const autocompleteResultText = obj.getAutocompleteResultText(type, channel, set);
        const substr = draftContent.substring(0, length2);
        handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
        setSelection({
          start: (substr + autocompleteResultText).length,
          end: (substr + autocompleteResultText).length,
        });
      }, items);
    };
const result = size.fileFinishedImporting(
  "modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx",
);

export const usePressHorizontalAutocompleteItemHandler = tmp3;
