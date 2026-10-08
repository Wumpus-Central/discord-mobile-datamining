// === Module 9665: ExpressionPickerHandlers ===

// Module 9665 (ExpressionPickerHandlers)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePressEmojiHandler(selection) {
  const cResult = c.c(13);
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  if (cResult[0] === draftContent) {
    if (cResult[1] === focusTextInput) {
      if (cResult[2] === handleTextChange) {
        if (cResult[3] === selection) {
          if (cResult[4] === setSelection) {
            let tmp2 = cResult[5];
          }
          noop.useRef(tmp2);
          if (cResult[6] === draftContent) {
            if (cResult[7] === focusTextInput) {
              if (cResult[8] === handleTextChange) {
                if (cResult[9] === selection) {
                  if (cResult[10] === setSelection) {
                    let tmp3 = cResult[11];
                  }
                  const effect = noop.useEffect(tmp3);
                  const _Symbol = Symbol;
                  class C {
                    constructor() {
                      obj = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
                      closure_5.current = obj;
                      return;
                    }
                  }
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn = function x(id) {
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
                    };
                    cResult[12] = fn;
                    let tmp6 = fn;
                  } else {
                    tmp6 = cResult[12];
                  }
                  return tmp6;
                }
              }
            }
          }
          class C {
            constructor() {
              obj = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
              closure_5.current = obj;
              return;
            }
          }
          cResult[6] = draftContent;
          cResult[7] = focusTextInput;
          cResult[8] = handleTextChange;
          cResult[9] = selection;
          cResult[10] = setSelection;
          cResult[11] = C;
          tmp3 = C;
        }
      }
    }
  }
  const obj2 = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
  cResult[0] = draftContent;
  cResult[1] = focusTextInput;
  cResult[2] = handleTextChange;
  cResult[3] = selection;
  cResult[4] = setSelection;
  cResult[5] = obj2;
  tmp2 = obj2;
}) : (function usePressEmojiHandler(selection) {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx");

export const usePressEmojiHandler = tmp2;
export const usePressGIFHandler = ReactCompilerGating.isReactCompilerEnabled() ? (function usePressGIFHandler(selection) {
  const cResult = c.c(7);
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  if (cResult[0] === draftContent) {
    if (cResult[1] === focusTextInput) {
      if (cResult[2] === handleTextChange) {
        if (cResult[3] === selection.end) {
          if (cResult[4] === selection.start) {
            if (cResult[5] === setSelection) {
              let tmp2 = cResult[6];
            }
            return tmp2;
          }
        }
      }
    }
  }
  const fn = function n(url) {
    url = url.url;
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = draftContent.substring(start);
    if (substr.endsWith(" ")) {
      handleTextChange(substr + url + substr1);
      let length = substr + url.length;
    } else {
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + " " + url.length;
    }
    setSelection({ start: length, end: length });
    focusTextInput();
  };
  cResult[0] = draftContent;
  cResult[1] = focusTextInput;
  cResult[2] = handleTextChange;
  cResult[3] = selection.end;
  cResult[4] = selection.start;
  cResult[5] = setSelection;
  cResult[6] = fn;
  tmp2 = fn;
}) : (function usePressGIFHandler(selection) {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  const items = [draftContent, focusTextInput, handleTextChange, , , ];
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
      handleTextChange(substr + url + substr1);
      let length = substr + url.length;
    } else {
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + " " + url.length;
    }
    setSelection({ start: length, end: length });
    focusTextInput();
  }, items);
});