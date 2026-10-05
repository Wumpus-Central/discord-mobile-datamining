// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00019_react.js";
import EmojiPickerListConstants from "EmojiPickerListConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let categoryIndexActive;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  ROW_HEIGHT: closure_4,
  LABEL_HEIGHT: hasOwnProperty,
  LABEL_TOP_PADDING: metroRequire,
  LABEL_BOTTOM_PADDING: metroImportDefault,
} = EmojiPickerListConstants);
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (categoryIndexActive, arg1) => {
        let data;
        let data2;
        let headerIndices;
        let paddingBottom;
        let paddingTop;
        let ref;
        let renderItem;
        let tmp = categoryIndexActive;
        let tmp2 = ref;
        let obj = categoryIndexActive(ref[4]);
        const cResult = obj.c(16);
        categoryIndexActive = categoryIndexActive.categoryIndexActive;
        ({ data, paddingTop, paddingBottom, renderItem } = categoryIndexActive);
        ({ data: data2, headerIndices } = data);
        const onShowNitroUpsell = categoryIndexActive.onShowNitroUpsell;
        ref = react.useRef(null);
        if (cResult[0] === paddingBottom) {
          let tmp5;
          let tmp7;
          if (cResult[1] === paddingTop) {
            tmp5 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function f(type) {
              return type.type;
            };
            let num = 3;
            cResult[3] = fn;
            tmp7 = fn;
          } else {
            tmp7 = cResult[3];
          }
          const _Symbol2 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function b(type, arg1) {
              return "" + type.type + "-" + arg1;
            };
            let num2 = 4;
            cResult[4] = fn2;
          }
          const _Symbol3 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(arg0, type) {
                type = type.type;
                if (categoryIndexActive(ref[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                  arg0.size = 0;
                } else if (categoryIndexActive(ref[5]).EmojiPickerItemType.TITLE === type) {
                  arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
                } else {
                  if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                    if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                      if (categoryIndexActive(ref[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                        arg0.size = categoryIndexActive(ref[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                      }
                    }
                  }
                  arg0.size = size;
                }
              }
            }
            let num3 = 5;
            cResult[5] = O;
          } else {
            class O {
              constructor(arg0, type) {
                type = type.type;
                if (categoryIndexActive(ref[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                  arg0.size = 0;
                } else if (categoryIndexActive(ref[5]).EmojiPickerItemType.TITLE === type) {
                  arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
                } else {
                  if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                    if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                      if (categoryIndexActive(ref[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                        arg0.size = categoryIndexActive(ref[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                      }
                    }
                  }
                  arg0.size = size;
                }
              }
            }
          }
          if (cResult[6] === categoryIndexActive) {
            class O {
              constructor(arg0, type) {
                type = type.type;
                if (categoryIndexActive(ref[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                  arg0.size = 0;
                } else if (categoryIndexActive(ref[5]).EmojiPickerItemType.TITLE === type) {
                  arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
                } else {
                  if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                    if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                      if (categoryIndexActive(ref[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                        arg0.size = categoryIndexActive(ref[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                      }
                    }
                  }
                  arg0.size = size;
                }
              }
            }
            const imperativeHandle = react.useImperativeHandle(arg1, C);
            const onViewableItemsChanged = headerIndices(tmp2[7])(onShowNitroUpsell).onViewableItemsChanged;
            const tmpResult = tmp(tmp2[8]);
            const isPortalKeyboardInModal = tmpResult.useIsPortalKeyboardInModal();
            if (cResult[9] === tmp5) {
              class O {
                constructor(arg0, type) {
                  type = type.type;
                  if (categoryIndexActive(ref[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                    arg0.size = 0;
                  } else if (categoryIndexActive(ref[5]).EmojiPickerItemType.TITLE === type) {
                    arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
                  } else {
                    if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                      if (categoryIndexActive(ref[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                        if (categoryIndexActive(ref[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                          arg0.size = categoryIndexActive(ref[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                        }
                      }
                    }
                    arg0.size = size;
                  }
                }
              }
            }
            class C {
              constructor() {
                obj = {
                  scrollToHeaderIndex(animated) {
                    animated = animated.animated;
                    let tmp = undefined === animated;
                    const index = animated.index;
                    if (!tmp) {
                      tmp = animated;
                    }
                    const current = ref.current;
                    if (current != null) {
                      let num = length[index];
                      const scrollToIndex = current.scrollToIndex;
                      if (num == null) {
                        num = 0;
                      }
                      const obj = { index: num, animated: tmp };
                      scrollToIndex(obj);
                    }
                  },
                  forceUpdate() {
                    const current = ref.current;
                    if (null != current.forceUpdate) {
                      current.forceUpdate();
                    }
                  },
                  onStickyHeaderRendered(arg0) {
                    let num = 0;
                    let num2 = 0;
                    let num3 = 0;
                    if (0 < length.length) {
                      do {
                        let tmp2 = num3;
                        if (arg0 >= length[num2]) {
                          tmp2 = num2;
                        }
                        num2 = num2 + 1;
                        num3 = tmp2;
                        num = tmp2;
                      } while (num2 < length.length);
                    }
                    const result = categoryIndexActive.set(num);
                  },
                };
                return obj;
              }
            }
            cResult[9] = tmp5;
            cResult[10] = data2;
            cResult[11] = headerIndices;
            cResult[12] = onViewableItemsChanged;
            cResult[13] = isPortalKeyboardInModal;
            cResult[14] = renderItem;
            cResult[15] = jsx(tmp(tmp2[9]).BottomSheetFlashList, {
              contentContainerStyle: tmp5,
              data: data2,
              getItemType: tmp7,
              keyboardShouldPersistTaps: "always",
              keyExtractor: null,
              onViewableItemsChanged,
              overrideItemLayout: O,
              preventNativeModalDismiss: isPortalKeyboardInModal,
              ref,
              renderItem,
              stickyHeaderIndices: headerIndices,
            });
            const tmp17 = jsx(tmp(tmp2[9]).BottomSheetFlashList, {
              contentContainerStyle: tmp5,
              data: data2,
              getItemType: tmp7,
              keyboardShouldPersistTaps: "always",
              keyExtractor: null,
              onViewableItemsChanged,
              overrideItemLayout: O,
              preventNativeModalDismiss: isPortalKeyboardInModal,
              ref,
              renderItem,
              stickyHeaderIndices: headerIndices,
            });
          }
          class C {
            constructor() {
              obj = {
                scrollToHeaderIndex(animated) {
                  animated = animated.animated;
                  let tmp = undefined === animated;
                  const index = animated.index;
                  if (!tmp) {
                    tmp = animated;
                  }
                  const current = ref.current;
                  if (current != null) {
                    let num = length[index];
                    const scrollToIndex = current.scrollToIndex;
                    if (num == null) {
                      num = 0;
                    }
                    const obj = { index: num, animated: tmp };
                    scrollToIndex(obj);
                  }
                },
                forceUpdate() {
                  const current = ref.current;
                  if (null != current.forceUpdate) {
                    current.forceUpdate();
                  }
                },
                onStickyHeaderRendered(arg0) {
                  let num = 0;
                  let num2 = 0;
                  let num3 = 0;
                  if (0 < length.length) {
                    do {
                      let tmp2 = num3;
                      if (arg0 >= length[num2]) {
                        tmp2 = num2;
                      }
                      num2 = num2 + 1;
                      num3 = tmp2;
                      num = tmp2;
                    } while (num2 < length.length);
                  }
                  const result = categoryIndexActive.set(num);
                },
              };
              return obj;
            }
          }
          cResult[6] = categoryIndexActive;
          cResult[7] = headerIndices;
          cResult[8] = C;
        }
        const obj4 = { paddingTop, paddingBottom };
        cResult[0] = paddingBottom;
        cResult[1] = paddingTop;
        cResult[2] = obj4;
        tmp5 = obj4;
      }
    : (paddingTop, arg1) => {
        let data;
        let onShowNitroUpsell;
        let renderItem;
        ({ categoryIndexActive: require, data } = paddingTop);
        const stickyHeaderIndices = data.headerIndices;
        paddingTop = paddingTop.paddingTop;
        const paddingBottom = paddingTop.paddingBottom;
        const data2 = data.data;
        ({ onShowNitroUpsell, renderItem } = paddingTop);
        const ref = paddingBottom.useRef(null);
        const items = [paddingTop, paddingBottom];
        const contentContainerStyle = paddingBottom.useMemo(() => ({ paddingTop, paddingBottom }), items);
        const getItemType = paddingBottom.useCallback((type) => type.type, []);
        const keyExtractor = paddingBottom.useCallback((type, arg1) => "" + type.type + "-" + arg1, []);
        const overrideItemLayout = paddingBottom.useCallback((arg0, type) => {
          type = type.type;
          if (require("useEmojiPickerData").EmojiPickerItemType.PLACEHOLDER === type) {
            arg0.size = 0;
          } else if (require("useEmojiPickerData").EmojiPickerItemType.TITLE === type) {
            arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
          } else {
            if (require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW !== type) {
              if (require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                if (require("useEmojiPickerData").EmojiPickerItemType.FOOTER_UPSELL === type) {
                  arg0.size =
                    require("PremiumExpressionPickerSearchUpsell").PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                }
              }
            }
            arg0.size = ref;
          }
        }, []);
        const imperativeHandle = paddingBottom.useImperativeHandle(arg1, () => {
          let length;
          let obj = {
            scrollToHeaderIndex(animated) {
              let flag = animated.animated;
              const index = animated.index;
              if (flag === undefined) {
                flag = true;
              }
              const current = ref.current;
              if (current != null) {
                let num = length[index];
                const scrollToIndex = current.scrollToIndex;
                if (num == null) {
                  num = 0;
                }
                const obj = { index: num, animated: flag };
                scrollToIndex(obj);
              }
            },
            forceUpdate() {
              const current = ref.current;
              if (null != current.forceUpdate) {
                current.forceUpdate();
              }
            },
            onStickyHeaderRendered(arg0) {
              let num = 0;
              let num2 = 0;
              let num3 = 0;
              if (0 < length.length) {
                do {
                  let tmp2 = num3;
                  if (arg0 >= length[num2]) {
                    tmp2 = num2;
                  }
                  num2 = num2 + 1;
                  num3 = tmp2;
                  num = tmp2;
                } while (num2 < length.length);
              }
              const result = closure_1_0.set(num);
            },
          };
          return obj;
        });
        const onViewableItemsChanged = stickyHeaderIndices(paddingTop[7])(onShowNitroUpsell).onViewableItemsChanged;
        let obj = require("PortalKeyboardModalContext");
        const preventNativeModalDismiss = obj.useIsPortalKeyboardInModal();
        return jsx(require("defaultMVCPConfig").BottomSheetFlashList, {
          contentContainerStyle,
          data: data2,
          getItemType,
          keyboardShouldPersistTaps: "always",
          keyExtractor,
          onViewableItemsChanged,
          overrideItemLayout,
          preventNativeModalDismiss,
          ref,
          renderItem,
          stickyHeaderIndices,
        });
      },
);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default forwardRefResult;
