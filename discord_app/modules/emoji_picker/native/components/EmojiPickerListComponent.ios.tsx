// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const EmojiPickerListConstants = fn(9362);
({
  ROW_HEIGHT: closure_4,
  LABEL_HEIGHT: hasOwnProperty,
  LABEL_TOP_PADDING: metroRequire,
  LABEL_BOTTOM_PADDING: closure_7,
} = EmojiPickerListConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiPickerListComponent(categoryIndexActive) {
      const cResult = categoryIndexActive(ref1[4]).c(16);
      categoryIndexActive = categoryIndexActive.categoryIndexActive;
      ({ data, paddingTop, paddingBottom, renderItem } = categoryIndexActive);
      ({ data: data2, headerIndices } = data);
      ({ onShowNitroUpsell, ref } = categoryIndexActive);
      ref1 = noop.useRef(null);
      if (cResult[0] === paddingBottom) {
        if (cResult[1] === paddingTop) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function f(type) {
            return type.type;
          };
          cResult[3] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function h(type, arg1) {
            return "" + type.type + "-" + arg1;
          };
          cResult[4] = fn2;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[4];
        }
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor(arg0, arg1) {
              type = arg1.type;
              tmp = categoryIndexActive;
              tmp2 = closure_2;
              if (categoryIndexActive(closure_2[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                num = 0;
                categoryIndexActive.size = 0;
              } else if (tmp(tmp2[5]).EmojiPickerItemType.TITLE === type) {
                tmp4 = closure_1_5;
                tmp5 = closure_1_6;
                tmp6 = closure_1_7;
                categoryIndexActive.size = closure_1_5 + closure_1_6 + closure_1_7;
              } else {
                if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                  if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                    if (tmp(tmp2[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                      categoryIndexActive.size = tmp(tmp2[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                    }
                  }
                }
                tmp3 = closure_1_4;
                categoryIndexActive.size = closure_1_4;
              }
              return;
            }
          }
          cResult[5] = O;
        } else {
          class O {
            constructor(arg0, arg1) {
              type = arg1.type;
              tmp = categoryIndexActive;
              tmp2 = closure_2;
              if (categoryIndexActive(closure_2[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                num = 0;
                categoryIndexActive.size = 0;
              } else if (tmp(tmp2[5]).EmojiPickerItemType.TITLE === type) {
                tmp4 = closure_1_5;
                tmp5 = closure_1_6;
                tmp6 = closure_1_7;
                categoryIndexActive.size = closure_1_5 + closure_1_6 + closure_1_7;
              } else {
                if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                  if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                    if (tmp(tmp2[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                      categoryIndexActive.size = tmp(tmp2[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                    }
                  }
                }
                tmp3 = closure_1_4;
                categoryIndexActive.size = closure_1_4;
              }
              return;
            }
          }
        }
        if (cResult[6] === categoryIndexActive) {
          class O {
            constructor(arg0, arg1) {
              type = arg1.type;
              tmp = categoryIndexActive;
              tmp2 = closure_2;
              if (categoryIndexActive(closure_2[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                num = 0;
                categoryIndexActive.size = 0;
              } else if (tmp(tmp2[5]).EmojiPickerItemType.TITLE === type) {
                tmp4 = closure_1_5;
                tmp5 = closure_1_6;
                tmp6 = closure_1_7;
                categoryIndexActive.size = closure_1_5 + closure_1_6 + closure_1_7;
              } else {
                if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                  if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                    if (tmp(tmp2[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                      categoryIndexActive.size = tmp(tmp2[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                    }
                  }
                }
                tmp3 = closure_1_4;
                categoryIndexActive.size = closure_1_4;
              }
              return;
            }
          }
          const imperativeHandle = noop.useImperativeHandle(ref, C);
          const isPortalKeyboardInModal = tmp(tmp2[8]).useIsPortalKeyboardInModal();
          if (cResult[9] === tmp5) {
            class O {
              constructor(arg0, arg1) {
                type = arg1.type;
                tmp = categoryIndexActive;
                tmp2 = closure_2;
                if (categoryIndexActive(closure_2[5]).EmojiPickerItemType.PLACEHOLDER === type) {
                  num = 0;
                  categoryIndexActive.size = 0;
                } else if (tmp(tmp2[5]).EmojiPickerItemType.TITLE === type) {
                  tmp4 = closure_1_5;
                  tmp5 = closure_1_6;
                  tmp6 = closure_1_7;
                  categoryIndexActive.size = closure_1_5 + closure_1_6 + closure_1_7;
                } else {
                  if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW !== type) {
                    if (tmp(tmp2[5]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
                      if (tmp(tmp2[5]).EmojiPickerItemType.FOOTER_UPSELL === type) {
                        categoryIndexActive.size = tmp(tmp2[6]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
                      }
                    }
                  }
                  tmp3 = closure_1_4;
                  categoryIndexActive.size = closure_1_4;
                }
                return;
              }
            }
          }
          const obj3 = {
            contentContainerStyle: tmp5,
            data: data2,
            getItemType: tmp7,
            keyboardShouldPersistTaps: "always",
            keyExtractor: tmp8,
            onViewableItemsChanged: null,
            overrideItemLayout: null,
            preventNativeModalDismiss: null,
            ref: null,
            renderItem: null,
            stickyHeaderIndices: null,
          };
          class C {
            constructor() {
              obj = {
                scrollToHeaderIndex(animated) {
                  animated = animated.animated;
                  let tmp = undefined === animated;
                  if (!tmp) {
                    tmp = animated;
                  }
                  const current = ref.current;
                  if (current != null) {
                    let num = length[animated.index];
                    if (num == null) {
                      num = 0;
                    }
                    const obj = { index: num, animated: tmp };
                    current.scrollToIndex(obj);
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
          obj3.overrideItemLayout = O;
          obj3.preventNativeModalDismiss = isPortalKeyboardInModal;
          obj3.ref = ref1;
          obj3.renderItem = renderItem;
          obj3.stickyHeaderIndices = headerIndices;
          const tmp16 = jsx(tmp(tmp2[9]).BottomSheetFlashList, {
            contentContainerStyle: tmp5,
            data: data2,
            getItemType: tmp7,
            keyboardShouldPersistTaps: "always",
            keyExtractor: tmp8,
            onViewableItemsChanged: null,
            overrideItemLayout: null,
            preventNativeModalDismiss: null,
            ref: null,
            renderItem: null,
            stickyHeaderIndices: null,
          });
          cResult[9] = tmp5;
          cResult[10] = data2;
          cResult[11] = headerIndices;
          cResult[12] = headerIndices(tmp2[7])(onShowNitroUpsell).onViewableItemsChanged;
          cResult[13] = isPortalKeyboardInModal;
          cResult[14] = renderItem;
          cResult[15] = tmp16;
          const tmpResult = tmp(tmp2[8]);
        }
        class C {
          constructor() {
            obj = {
              scrollToHeaderIndex(animated) {
                animated = animated.animated;
                let tmp = undefined === animated;
                if (!tmp) {
                  tmp = animated;
                }
                const current = ref.current;
                if (current != null) {
                  let num = length[animated.index];
                  if (num == null) {
                    num = 0;
                  }
                  const obj = { index: num, animated: tmp };
                  current.scrollToIndex(obj);
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
      let obj = categoryIndexActive(ref1[4]);
    }
  : function EmojiPickerListComponent(paddingTop) {
      ({ categoryIndexActive: require, data } = paddingTop);
      const stickyHeaderIndices = data.headerIndices;
      paddingTop = paddingTop.paddingTop;
      const paddingBottom = paddingTop.paddingBottom;
      ({ onShowNitroUpsell, renderItem, ref } = paddingTop);
      const ref2 = paddingBottom.useRef(null);
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
          arg0.size = ref2;
        }
      }, []);
      const imperativeHandle = paddingBottom.useImperativeHandle(ref, () => ({
        scrollToHeaderIndex(animated) {
          let flag = animated.animated;
          if (flag === undefined) {
            flag = true;
          }
          const current = ref.current;
          if (current != null) {
            let num = length[animated.index];
            if (num == null) {
              num = 0;
            }
            const obj = { index: num, animated: flag };
            current.scrollToIndex(obj);
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
      }));
      const preventNativeModalDismiss = require("PortalKeyboardModalContext").useIsPortalKeyboardInModal();
      return jsx(require("../../../../../discord_common/js/packages/flash-list/index.js").BottomSheetFlashList, {
        contentContainerStyle,
        data: data.data,
        getItemType,
        keyboardShouldPersistTaps: "always",
        keyExtractor,
        onViewableItemsChanged: stickyHeaderIndices(paddingTop[7])(onViewableItemsChanged).onViewableItemsChanged,
        overrideItemLayout,
        preventNativeModalDismiss,
        ref: ref2,
        renderItem,
        stickyHeaderIndices,
      });
    };
