// === Module 17091: SearchScreenSearchBar ===

// Module 17091 (SearchScreenSearchBar)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import mergeProps from "mergeProps" /* 4783 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6296 */;
import layout_SearchBarDefault from "layout/SearchBar" /* 17092 */;
import SearchFilterSuggestionsDefault from "SearchFilterSuggestions" /* 17094 */;
import SearchFilterButtonDefault from "SearchFilterButton" /* 17099 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: { flex: 1, flexGrow: 1 }, headerControlsRight: { paddingRight: 16, paddingLeft: 12 }, suggestionsAnchor: { height: 0 }, suggestions: { position: "absolute", left: 0, right: -50, top: 8 }, suggestionsWithBackButton: { left: -28 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchScreenSearchBar(arg0) {
  const cResult = ref1(576).c(33);
  ({ searchContext, backButton, ref } = arg0);
  const tmp4 = closure_7();
  ref1 = noop.useRef(null);
  if (cResult[0] !== ref) {
    const mergeRefsResult = tmp(4783).mergeRefs(ref, ref1);
    cResult[0] = ref;
    cResult[1] = mergeRefsResult;
    let tmp6 = mergeRefsResult;
    const tmpResult = tmp(4783);
  } else {
    tmp6 = cResult[1];
  }
  importDefault = noop.useRef(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      closure_1.current = useKeyboardIsOpen.getKeyboardIsOpen();
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    };
    cResult[2] = fn;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0) {
        current = arg0;
        if (arg0) {
          tmp = closure_1;
          current = closure_1.current;
        }
        if (current) {
          tmp2 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          });
        }
        return;
      }
    }
    cResult[3] = R;
  } else {
    class R {
      constructor(arg0) {
        current = arg0;
        if (arg0) {
          tmp = closure_1;
          current = closure_1.current;
        }
        if (current) {
          tmp2 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          });
        }
        return;
      }
    }
  }
  if (cResult[4] === tmp4.header) {
    class R {
      constructor(arg0) {
        current = arg0;
        if (arg0) {
          tmp = closure_1;
          current = closure_1.current;
        }
        if (current) {
          tmp2 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          });
        }
        return;
      }
    }
    if (cResult[7] === tmp6) {
      class R {
        constructor(arg0) {
          current = arg0;
          if (arg0) {
            tmp = closure_1;
            current = closure_1.current;
          }
          if (current) {
            tmp2 = globalThis;
            _requestAnimationFrame = requestAnimationFrame;
            animationFrame = requestAnimationFrame(() => {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            });
          }
          return;
        }
      }
      if (cResult[10] === tmp4.suggestions) {
        class R {
          constructor(arg0) {
            current = arg0;
            if (arg0) {
              tmp = closure_1;
              current = closure_1.current;
            }
            if (current) {
              tmp2 = globalThis;
              _requestAnimationFrame = requestAnimationFrame;
              animationFrame = requestAnimationFrame(() => {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              });
            }
            return;
          }
        }
        if (cResult[13] === searchContext) {
          class R {
            constructor(arg0) {
              current = arg0;
              if (arg0) {
                tmp = closure_1;
                current = closure_1.current;
              }
              if (current) {
                tmp2 = globalThis;
                _requestAnimationFrame = requestAnimationFrame;
                animationFrame = requestAnimationFrame(() => {
                  const current = ref.current;
                  if (current != null) {
                    current.focus();
                  }
                });
              }
              return;
            }
          }
          if (cResult[16] === tmp4.suggestionsAnchor) {
            class R {
              constructor(arg0) {
                current = arg0;
                if (arg0) {
                  tmp = closure_1;
                  current = closure_1.current;
                }
                if (current) {
                  tmp2 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  animationFrame = requestAnimationFrame(() => {
                    const current = ref.current;
                    if (current != null) {
                      current.focus();
                    }
                  });
                }
                return;
              }
            }
            if (cResult[19] === tmp4.headerSearch) {
              class R {
                constructor(arg0) {
                  current = arg0;
                  if (arg0) {
                    tmp = closure_1;
                    current = closure_1.current;
                  }
                  if (current) {
                    tmp2 = globalThis;
                    _requestAnimationFrame = requestAnimationFrame;
                    animationFrame = requestAnimationFrame(() => {
                      const current = ref.current;
                      if (current != null) {
                        current.focus();
                      }
                    });
                  }
                  return;
                }
              }
            }
            const obj3 = { style: tmp4.headerSearch, children: null };
            const items = [tmp11, tmp21];
            obj3.children = items;
            const tmp28 = closure_6(View, obj3);
            cResult[19] = tmp4.headerSearch;
            cResult[20] = tmp21;
            cResult[21] = tmp11;
            cResult[22] = tmp28;
          }
          const obj4 = { style: tmp4.suggestionsAnchor, children: tmp17 };
          const tmp24 = closure_5(View, obj4);
          cResult[16] = tmp4.suggestionsAnchor;
          cResult[17] = tmp17;
          cResult[18] = tmp24;
        }
        const obj5 = { searchContext, containerStyle: tmp16 };
        const tmp20 = closure_5(SearchFilterSuggestionsDefault, obj5);
        cResult[13] = searchContext;
        cResult[14] = tmp16;
        cResult[15] = tmp20;
      }
      const items1 = [tmp4.suggestions, null != backButton && tmp4.suggestionsWithBackButton];
      cResult[10] = tmp4.suggestions;
      cResult[11] = null != backButton && tmp4.suggestionsWithBackButton;
      cResult[12] = items1;
    }
    const obj6 = { ref: tmp6, searchContext };
    const tmp14 = closure_5(layout_SearchBarDefault, obj6);
    cResult[7] = tmp6;
    cResult[8] = searchContext;
    cResult[9] = tmp14;
  }
  const items2 = [tmp4.header, null != backButton && tmp4.headerWithBackButton];
  cResult[4] = tmp4.header;
  cResult[5] = null != backButton && tmp4.headerWithBackButton;
  cResult[6] = items2;
  let obj = ref1(576);
  tmp = ref1;
}) : (function SearchScreenSearchBar(arg0) {
  ({ searchContext, backButton, ref } = arg0);
  const tmp = closure_7();
  importDefault = noop.useRef(null);
  const items = [ref];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(ref, closure_1), items);
  dependencyMap = noop.useRef(false);
  const callback = noop.useCallback(() => {
    closure_2.current = useKeyboardIsOpen.getKeyboardIsOpen();
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, []);
  const items1 = [tmp.header, ];
  let headerWithBackButton = null != backButton;
  const callback1 = noop.useCallback((arg0) => {
    let current = arg0;
    if (arg0) {
      current = ref.current;
    }
    if (current) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      });
    }
  }, []);
  if (headerWithBackButton) {
    headerWithBackButton = tmp.headerWithBackButton;
  }
  let obj = { style: items1, children: null };
  items1[1] = headerWithBackButton;
  const items2 = [backButton, , ];
  const obj2 = { style: tmp.headerSearch, children: null };
  const items3 = [closure_5(layout_SearchBarDefault, { ref: memo, searchContext }), ];
  const obj3 = { style: tmp.suggestionsAnchor, children: null };
  const obj4 = { searchContext, containerStyle: null };
  const items4 = [tmp.suggestions, ];
  let suggestionsWithBackButton = null != backButton;
  if (suggestionsWithBackButton) {
    suggestionsWithBackButton = tmp.suggestionsWithBackButton;
  }
  items4[1] = suggestionsWithBackButton;
  obj4.containerStyle = items4;
  obj3.children = closure_5(SearchFilterSuggestionsDefault, obj4);
  items3[1] = closure_5(View, obj3);
  obj2.children = items3;
  items2[1] = closure_6(View, obj2);
  items2[2] = closure_5(View, { style: tmp.headerControlsRight, children: closure_5(SearchFilterButtonDefault, { searchContext, onOpen: callback, onClose: callback1 }) });
  obj.children = items2;
  return closure_6(View, obj);
}));