// discord_app/modules/search/native/components/layout/SearchScreenSearchBar.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import mergeProps from "../../../../../design/utils/native/mergeProps.native.tsx";
import useKeyboardIsOpen from "../../../../keyboard/native/useKeyboardIsOpen.tsx";
import SearchBarDefault from "SearchBar.tsx";
import SearchFilterSuggestionsDefault from "autocomplete/SearchFilterSuggestions.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, tmp2;

let hasOwnProperty;
let metroRequire;
let tmp8;
const SearchFilterButtonDefault = tmp8(16799);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 },
  headerWithBackButton: { paddingLeft: 0 },
  headerSearch: { flex: 1, flexGrow: 1 },
  headerControlsRight: { paddingRight: 16, paddingLeft: 12 },
  suggestionsAnchor: { height: 0 },
  suggestions: { position: "absolute", left: 0, right: -50, top: 8 },
  suggestionsWithBackButton: { left: -28 },
});
const forwardRef = react.forwardRef;
const memoResult = react.memo(
  forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (arg0, ref) => {
          let backButton;
          let items;
          let searchContext;
          let tmp6;
          let obj = ref(576);
          const cResult = obj.c(33);
          ({ searchContext, backButton } = arg0);
          const tmp4 = closure_7();
          const tmp = ref;
          ref = react.useRef(null);
          if (cResult[0] !== ref) {
            const tmpResult = tmp(4585);
            const mergeRefsResult = tmpResult.mergeRefs(ref, ref);
            cResult[0] = ref;
            cResult[1] = mergeRefsResult;
            tmp6 = mergeRefsResult;
          } else {
            tmp6 = cResult[1];
          }
          importDefault = react.useRef(false);
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                obj = closure_0(closure_2[7]);
                closure_1.current = obj.getKeyboardIsOpen();
                obj2 = closure_0(closure_2[8]);
                result = obj2.dismissGlobalKeyboard();
                return;
              }
            }
            cResult[2] = B;
          } else {
            class B {
              constructor() {
                obj = closure_0(closure_2[7]);
                closure_1.current = obj.getKeyboardIsOpen();
                obj2 = closure_0(closure_2[8]);
                result = obj2.dismissGlobalKeyboard();
                return;
              }
            }
          }
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor(arg0) {
                current = arg0;
                if (current) {
                  tmp = closure_1;
                  current = closure_1.current;
                }
                if (current) {
                  tmp2 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  animationFrame = requestAnimationFrame(() => {
                    /* body not rendered: F146574 */
                  });
                }
                return;
              }
            }
            cResult[3] = S;
          } else {
            class S {
              constructor(arg0) {
                current = arg0;
                if (current) {
                  tmp = closure_1;
                  current = closure_1.current;
                }
                if (current) {
                  tmp2 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  animationFrame = requestAnimationFrame(() => {
                    /* body not rendered: F146574 */
                  });
                }
                return;
              }
            }
          }
          if (cResult[4] === tmp4.header) {
            class S {
              constructor(arg0) {
                current = arg0;
                if (current) {
                  tmp = closure_1;
                  current = closure_1.current;
                }
                if (current) {
                  tmp2 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  animationFrame = requestAnimationFrame(() => {
                    /* body not rendered: F146574 */
                  });
                }
                return;
              }
            }
            if (cResult[7] === tmp6) {
              class S {
                constructor(arg0) {
                  current = arg0;
                  if (current) {
                    tmp = closure_1;
                    current = closure_1.current;
                  }
                  if (current) {
                    tmp2 = globalThis;
                    _requestAnimationFrame = requestAnimationFrame;
                    animationFrame = requestAnimationFrame(() => {
                      /* body not rendered: F146574 */
                    });
                  }
                  return;
                }
              }
              if (cResult[10] === tmp4.suggestions) {
                class S {
                  constructor(arg0) {
                    current = arg0;
                    if (current) {
                      tmp = closure_1;
                      current = closure_1.current;
                    }
                    if (current) {
                      tmp2 = globalThis;
                      _requestAnimationFrame = requestAnimationFrame;
                      animationFrame = requestAnimationFrame(() => {
                        /* body not rendered: F146574 */
                      });
                    }
                    return;
                  }
                }
                if (cResult[13] === searchContext) {
                  class S {
                    constructor(arg0) {
                      current = arg0;
                      if (current) {
                        tmp = closure_1;
                        current = closure_1.current;
                      }
                      if (current) {
                        tmp2 = globalThis;
                        _requestAnimationFrame = requestAnimationFrame;
                        animationFrame = requestAnimationFrame(() => {
                          /* body not rendered: F146574 */
                        });
                      }
                      return;
                    }
                  }
                  if (cResult[16] === tmp4.suggestionsAnchor) {
                    class S {
                      constructor(arg0) {
                        current = arg0;
                        if (current) {
                          tmp = closure_1;
                          current = closure_1.current;
                        }
                        if (current) {
                          tmp2 = globalThis;
                          _requestAnimationFrame = requestAnimationFrame;
                          animationFrame = requestAnimationFrame(() => {
                            /* body not rendered: F146574 */
                          });
                        }
                        return;
                      }
                    }
                    if (cResult[19] === tmp4.headerSearch) {
                      class S {
                        constructor(arg0) {
                          current = arg0;
                          if (current) {
                            tmp = closure_1;
                            current = closure_1.current;
                          }
                          if (current) {
                            tmp2 = globalThis;
                            _requestAnimationFrame = requestAnimationFrame;
                            animationFrame = requestAnimationFrame(() => {
                              /* body not rendered: F146574 */
                            });
                          }
                          return;
                        }
                      }
                    }
                    const obj3 = { style: tmp4.headerSearch, children: items };
                    items = [tmp11, tmp21];
                    cResult[19] = tmp4.headerSearch;
                    cResult[20] = tmp21;
                    cResult[21] = tmp11;
                    cResult[22] = closure_6(View, obj3);
                    const tmp28 = closure_6(View, obj3);
                  }
                  const obj4 = { style: tmp4.suggestionsAnchor, children: tmp17 };
                  cResult[16] = tmp4.suggestionsAnchor;
                  cResult[17] = tmp17;
                  cResult[18] = closure_5(View, obj4);
                  const tmp24 = closure_5(View, obj4);
                }
                const obj5 = { searchContext, containerStyle: tmp16 };
                cResult[13] = searchContext;
                cResult[14] = tmp16;
                cResult[15] = closure_5(SearchFilterSuggestionsDefault, obj5);
                const tmp20 = closure_5(SearchFilterSuggestionsDefault, obj5);
              }
              const items1 = [tmp4.suggestions, null != backButton && tmp4.suggestionsWithBackButton];
              cResult[10] = tmp4.suggestions;
              cResult[11] = null != backButton && tmp4.suggestionsWithBackButton;
              cResult[12] = items1;
            }
            const obj6 = { ref: tmp6, searchContext };
            cResult[7] = tmp6;
            cResult[8] = searchContext;
            cResult[9] = closure_5(SearchBarDefault, obj6);
            const tmp14 = closure_5(SearchBarDefault, obj6);
          }
          const items2 = [tmp4.header, null != backButton && tmp4.headerWithBackButton];
          cResult[4] = tmp4.header;
          cResult[5] = null != backButton && tmp4.headerWithBackButton;
          cResult[6] = items2;
        }
      : (arg0, arg1) => {
          let backButton;
          let closure_1;
          let items2;
          let items3;
          let items4;
          let obj4;
          let ref;
          let searchContext;
          let tmp10;
          ({ searchContext, backButton } = arg0);
          let closure_0 = arg1;
          const tmp = closure_7();
          importDefault = react.useRef(null);
          const items = [arg1];
          const memo = react.useMemo(() => {
            const obj = mergeProps;
            return obj.mergeRefs(closure_0, closure_1);
          }, items);
          dependencyMap = react.useRef(false);
          const callback = react.useCallback(() => {
            const obj = useKeyboardIsOpen;
            ref.current = obj.getKeyboardIsOpen();
            const obj2 = KeyboardManagerUtils;
            const result = obj2.dismissGlobalKeyboard();
          }, []);
          const items1 = [tmp.header];
          let headerWithBackButton = null != backButton;
          const callback1 = react.useCallback((arg0) => {
            let current = arg0 && ref.current;
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
          let obj = { style: items1, children: items2 };
          items1[1] = headerWithBackButton;
          items2 = [backButton, ,];
          let obj2 = { style: tmp.headerSearch, children: items3 };
          items3 = [closure_5(SearchBarDefault, { ref: memo, searchContext })];
          const obj3 = { style: tmp.suggestionsAnchor, children: closure_5(tmp10, obj4) };
          obj4 = { searchContext, containerStyle: items4 };
          items4 = [tmp.suggestions];
          let suggestionsWithBackButton = null != backButton;
          tmp10 = SearchFilterSuggestionsDefault;
          if (suggestionsWithBackButton) {
            suggestionsWithBackButton = tmp.suggestionsWithBackButton;
          }
          items4[1] = suggestionsWithBackButton;
          items3[1] = closure_5(View, obj3);
          items2[1] = closure_6(View, obj2);
          const obj5 = {
            style: tmp.headerControlsRight,
            children: closure_5(SearchFilterButtonDefault, { searchContext, onOpen: callback, onClose: callback1 }),
          };
          items2[2] = closure_5(View, obj5);
          return closure_6(View, obj);
        },
  ),
);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default memoResult;
