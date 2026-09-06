// discord_app/modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx");

export const usePressEmojiHandler = function usePressEmojiHandler(selection) {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  noop.useRef({ selection, draftContent, handleTextChange, focusTextInput, setSelection });
  const effect = noop.useEffect(() => {
    closure_5.current = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
  });
  return noop.useCallback((id) => {
    const current = ref.current;
    ({ selection, draftContent, handleTextChange } = current);
    ({ focusTextInput, setSelection } = current);
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = draftContent.substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        handleTextChange(substr + id.surrogates + substr1);
        let length = substr + id.surrogates.length;
      }
      const obj = { start: length, end: length };
      setSelection(obj);
      focusTextInput();
    }
    if (null != id.uniqueName) {
      if ("" !== id.uniqueName) {
        let name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + ":" + name + ": ".length;
    }
    name = id.name;
  }, []);
};
export const usePressGIFHandler = function usePressGIFHandler(selection) {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  const items = [draftContent, focusTextInput, handleTextChange, , ,];
  ({ end: arr[3], start: arr[4] } = selection);
  items[5] = setSelection;
  return noop.useCallback((url) => {
    url = url.url;
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = draftContent.substring(start);
    if (substr.endsWith(" ")) {
      tmp4(substr + url + substr1);
      let length = substr + url.length;
    } else {
      const _HermesInternal = HermesInternal;
      tmp4(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + " " + url.length;
    }
    setSelection({ start: length, end: length });
    focusTextInput();
  }, items);
};
