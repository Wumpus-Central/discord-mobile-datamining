// === Module 10082: ExpressionPickerHandlers ===

// Module 10082 (ExpressionPickerHandlers)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selection;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selection) => {
  let obj = react2;
  const cResult = obj.c(13);
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  if (cResult[0] === draftContent) {
    if (cResult[1] === focusTextInput) {
      if (cResult[2] === handleTextChange) {
        if (cResult[3] === selection) {
          let tmp2;
          if (cResult[4] === setSelection) {
            tmp2 = cResult[5];
          }
          let closure_5 = react.useRef(tmp2);
          if (cResult[6] === draftContent) {
            if (cResult[7] === focusTextInput) {
              if (cResult[8] === handleTextChange) {
                if (cResult[9] === selection) {
                  let tmp3;
                  let tmp6;
                  if (cResult[10] === setSelection) {
                    tmp3 = cResult[11];
                  }
                  const effect = react.useEffect(tmp3);
                  const _Symbol = Symbol;
                  class C {
                    constructor() {
                      const obj = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
                      ref.current = obj;
                    }
                  }
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn = function x(id) {
                      let length;
                      const current = ref.current;
                      ({ selection, draftContent, handleTextChange } = current);
                      ({ focusTextInput, setSelection } = current);
                      const substr = draftContent.substring(0, selection.start);
                      let start = selection.end;
                      const substring = draftContent.substring;
                      if (start == null) {
                        start = selection.start;
                      }
                      const substr1 = substring(start);
                      if (null == id.id) {
                        if (null != id.surrogates) {
                          handleTextChange(substr + id.surrogates + substr1);
                          length = (substr + id.surrogates).length;
                        }
                        const obj = { start: length, end: length };
                        setSelection(obj);
                        focusTextInput();
                      }
                      if (null != id.uniqueName) {
                        let name;
                        if ("" !== id.uniqueName) {
                          name = id.uniqueName;
                        }
                        const _HermesInternal = HermesInternal;
                        handleTextChange(substr + ":" + name + ": " + substr1);
                        const _HermesInternal2 = HermesInternal;
                        length = (substr + ":" + name + ": ").length;
                      }
                      name = id.name;
                    };
                    cResult[12] = fn;
                    tmp6 = fn;
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
              const obj = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
              ref.current = obj;
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
}) : ((selection) => {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  let closure_5 = react.useRef({ selection, draftContent, handleTextChange, focusTextInput, setSelection });
  const effect = react.useEffect(() => {
    const obj = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
    ref.current = obj;
  });
  return react.useCallback((id) => {
    let length;
    const current = ref.current;
    ({ selection, draftContent, handleTextChange } = current);
    ({ focusTextInput, setSelection } = current);
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    const substring = draftContent.substring;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        handleTextChange(substr + id.surrogates + substr1);
        length = (substr + id.surrogates).length;
      }
      const obj = { start: length, end: length };
      setSelection(obj);
      focusTextInput();
    }
    if (null != id.uniqueName) {
      let name;
      if ("" !== id.uniqueName) {
        name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + ":" + name + ": ").length;
    }
    name = id.name;
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((selection) => {
  const obj = react2;
  const cResult = obj.c(7);
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
            let tmp2;
            if (cResult[5] === setSelection) {
              tmp2 = cResult[6];
            }
            return tmp2;
          }
        }
      }
    }
  }
  const fn = function n(url) {
    let length;
    url = url.url;
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    const substring = draftContent.substring;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = substring(start);
    if (substr.endsWith(" ")) {
      handleTextChange(substr + url + substr1);
      length = (substr + url).length;
    } else {
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + " " + url).length;
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
}) : ((selection) => {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  const items = [draftContent, focusTextInput, handleTextChange, , , ];
  ({ end: arr[3], start: arr[4] } = selection);
  items[5] = setSelection;
  return react.useCallback((url) => {
    let length;
    url = url.url;
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    const substring = draftContent.substring;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = substring(start);
    if (substr.endsWith(" ")) {
      handleTextChange(substr + url + substr1);
      length = (substr + url).length;
    } else {
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + " " + url).length;
    }
    setSelection({ start: length, end: length });
    focusTextInput();
  }, items);
});
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx");

export const usePressEmojiHandler = tmp2;
export const usePressGIFHandler = tmp3;