// === Module 11444: StringSelectComponentActionSheet ===

// Module 11444 (StringSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 1985 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import EmojiDefault from "Emoji" /* 6632 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, selectionActionComponent, set;

let obj2;
let react = react_mod;
let jsx = Fragment.jsx;
let obj = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 }, emojiWrapper: obj2, textEmoji: { fontSize: 16, color: "#000000" }, fastImageEmoji: { width: 24, height: 24 } };
obj2 = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectionActionComponent) => {
  let channelId;
  let closure_2;
  let closure_4;
  let closure_5;
  let first;
  let labelComponent;
  let onSubmit;
  let tmp8;
  let tmp = dependencyMap;
  let obj = selectionActionComponent(576);
  const cResult = obj.c(38);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, channelId, onSubmit } = selectionActionComponent);
  const allowEmpty = selectionActionComponent.allowEmpty;
  const containerId = selectionActionComponent.containerId;
  let tmp3 = closure_6();
  dependencyMap = tmp3;
  let obj2 = selectionActionComponent(7813);
  const useState = react.useState;
  set = new Set(obj2.getInitialStringSelectOptions(selectionActionComponent, containerId));
  const tmp5 = first(useState(set), 2);
  first = tmp5[0];
  react = tmp5[1];
  jsx = tmp7;
  if (cResult[0] !== onSubmit) {
    const fn = function c(values) {
      const obj = { type: Server.ComponentType.STRING_SELECT, values };
      onSubmit(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    };
    cResult[0] = onSubmit;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  closure_6 = tmp8;
  if (cResult[2] === first) {
    let tmp9;
    if (cResult[3] === tmp8) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === selectionActionComponent.maxValues > 1) {
      if (cResult[6] === first) {
        if (cResult[7] === selectionActionComponent.maxValues) {
          let tmp10;
          if (cResult[8] === tmp8) {
            tmp10 = cResult[9];
          }
          if (cResult[10] !== tmp3) {
            class A {
              constructor(emoji) {
                let tmp = null;
                if (null != emoji.emoji) {
                  const obj = { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null };
                  ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
                  tmp = jsx(EmojiDefault, { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null });
                }
                return tmp;
              }
            }
            cResult[10] = tmp3;
            cResult[11] = A;
          } else {
            class A {
              constructor(emoji) {
                let tmp = null;
                if (null != emoji.emoji) {
                  const obj = { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null };
                  ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
                  tmp = jsx(EmojiDefault, { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null });
                }
                return tmp;
              }
            }
          }
          if (cResult[12] !== tmp3) {
            class N {
              constructor(description) {
                let tmp = null;
                if (null != description.description) {
                  tmp = null;
                  if ("" !== description.description) {
                    tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                  }
                }
                return tmp;
              }
            }
            cResult[12] = tmp3;
            cResult[13] = N;
          } else {
            class N {
              constructor(description) {
                let tmp = null;
                if (null != description.description) {
                  tmp = null;
                  if ("" !== description.description) {
                    tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                  }
                }
                return tmp;
              }
            }
          }
          if (cResult[14] !== selectionActionComponent.options) {
            class N {
              constructor(description) {
                let tmp = null;
                if (null != description.description) {
                  tmp = null;
                  if ("" !== description.description) {
                    tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                  }
                }
                return tmp;
              }
            }
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class N {
                constructor(description) {
                  let tmp = null;
                  if (null != description.description) {
                    tmp = null;
                    if ("" !== description.description) {
                      tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                    }
                  }
                  return tmp;
                }
              }
              cResult[16] = tmp15;
            } else {
              class N {
                constructor(description) {
                  let tmp = null;
                  if (null != description.description) {
                    tmp = null;
                    if ("" !== description.description) {
                      tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                    }
                  }
                  return tmp;
                }
              }
            }
            const options = selectionActionComponent.options;
            cResult[14] = selectionActionComponent.options;
            cResult[15] = options.some(tmp15);
            const someResult = options.some(tmp15);
          } else {
            class N {
              constructor(description) {
                let tmp = null;
                if (null != description.description) {
                  tmp = null;
                  if ("" !== description.description) {
                    tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                  }
                }
                return tmp;
              }
            }
          }
          if (cResult[17] !== selectionActionComponent.options) {
            class N {
              constructor(description) {
                let tmp = null;
                if (null != description.description) {
                  tmp = null;
                  if ("" !== description.description) {
                    tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
                  }
                }
                return tmp;
              }
            }
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(emoji) {
                  return null != emoji.emoji;
                }
              }
              cResult[19] = M;
            } else {
              class M {
                constructor(emoji) {
                  return null != emoji.emoji;
                }
              }
            }
            const options2 = selectionActionComponent.options;
            const someResult1 = options2.some(M);
            cResult[17] = selectionActionComponent.options;
            cResult[18] = someResult1;
          } else {
            class M {
              constructor(emoji) {
                return null != emoji.emoji;
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor(emoji) {
                const intl = selectionActionComponent(closure_2[12]).intl;
                const formatToPlainString = intl.formatToPlainString;
                emoji = emoji.emoji;
                let name;
                const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
                if (emoji != null) {
                  name = emoji.name;
                }
                const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
                return formatToPlainString(ZbrH2f, obj);
              }
            }
            cResult[20] = H;
          } else {
            class H {
              constructor(emoji) {
                const intl = selectionActionComponent(closure_2[12]).intl;
                const formatToPlainString = intl.formatToPlainString;
                emoji = emoji.emoji;
                let name;
                const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
                if (emoji != null) {
                  name = emoji.name;
                }
                const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
                return formatToPlainString(ZbrH2f, obj);
              }
            }
          }
          if (tmp13) {
            class H {
              constructor(emoji) {
                const intl = selectionActionComponent(closure_2[12]).intl;
                const formatToPlainString = intl.formatToPlainString;
                emoji = emoji.emoji;
                let name;
                const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
                if (emoji != null) {
                  name = emoji.name;
                }
                const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
                return formatToPlainString(ZbrH2f, obj);
              }
            }
          }
          if (cResult[21] !== tmp13) {
            class H {
              constructor(emoji) {
                const intl = selectionActionComponent(closure_2[12]).intl;
                const formatToPlainString = intl.formatToPlainString;
                emoji = emoji.emoji;
                let name;
                const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
                if (emoji != null) {
                  name = emoji.name;
                }
                const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
                return formatToPlainString(ZbrH2f, obj);
              }
            }
            tmp23[0] = tmp13;
            cResult[21] = tmp13;
            cResult[22] = tmp23;
          } else {
            class H {
              constructor(emoji) {
                const intl = selectionActionComponent(closure_2[12]).intl;
                const formatToPlainString = intl.formatToPlainString;
                emoji = emoji.emoji;
                let name;
                const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
                if (emoji != null) {
                  name = emoji.name;
                }
                const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
                return formatToPlainString(ZbrH2f, obj);
              }
            }
          }
          if (cResult[23] !== first) {
            class F {
              constructor(value) {
                return first.has(value.value);
              }
            }
            cResult[23] = first;
            cResult[24] = F;
          } else {
            class F {
              constructor(value) {
                return first.has(value.value);
              }
            }
          }
          if (cResult[25] === allowEmpty) {
            class F {
              constructor(value) {
                return first.has(value.value);
              }
            }
          }
          cResult[25] = allowEmpty;
          cResult[26] = channelId;
          cResult[27] = labelComponent;
          const tmp28 = jsx(onSubmit(11445), { onPressOptionItem: tmp10, renderIcon: A, skipIcon: !tmp17, renderDescription: N, selectionActionComponent, labelComponent, options: selectionActionComponent.options, itemStyle: tmp23, selectedCount: first.size, isSelected: F, submitSelection: tmp9, itemAccessibilityLabel: H, channelId, allowEmpty });
          class O {
            constructor() {
              const items = [...first];
              return closure_6(items);
            }
          }
          cResult[29] = N;
          cResult[30] = A;
          cResult[31] = first.size;
          cResult[32] = selectionActionComponent;
          cResult[33] = tmp9;
          cResult[34] = tmp23;
          cResult[35] = F;
          cResult[36] = !tmp17;
          cResult[37] = tmp28;
        }
      }
    }
    const fn2 = function w(arg0, value) {
      let closure_0 = value;
      const hasItem = first.has(value.value);
      let tmp3 = !hasItem;
      let closure_1 = tmp3;
      if (closure_5) {
        if (!hasItem) {
          tmp3 = first.size >= selectionActionComponent.maxValues;
        }
        if (!tmp3) {
          closure_4((items) => {
            set = new Set(items);
            if (closure_1) {
              set.add(closure_0.value);
            } else {
              set.delete(closure_0.value);
            }
            return set;
          });
        }
      } else {
        let items;
        if (hasItem) {
          items = [];
        } else {
          items = [value.value];
        }
        closure_6(items);
      }
    };
    cResult[5] = selectionActionComponent.maxValues > 1;
    cResult[6] = first;
    cResult[7] = selectionActionComponent.maxValues;
    cResult[8] = tmp8;
    cResult[9] = fn2;
    tmp10 = fn2;
  }
  class O {
    constructor() {
      const items = [...first];
      return closure_6(items);
    }
  }
  cResult[2] = first;
  cResult[3] = tmp8;
  cResult[4] = O;
  tmp9 = O;
}) : ((selectionActionComponent) => {
  let allowEmpty;
  let channelId;
  let closure_2;
  let closure_4;
  let containerId;
  let items5;
  let labelComponent;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onSubmit = selectionActionComponent.onSubmit;
  let first;
  react = undefined;
  let callback;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  dependencyMap = tmp;
  let obj = selectionActionComponent(7813);
  const useState = react.useState;
  set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  let tmp3 = first(useState(set), 2);
  first = tmp3[0];
  react = tmp3[1];
  let items = [selectionActionComponent];
  const memo = react.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const items1 = [onSubmit];
  callback = react.useCallback((values) => {
    const obj = { type: Server.ComponentType.STRING_SELECT, values };
    onSubmit(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = react.useCallback((arg0, value) => {
    let closure_0 = value;
    const hasItem = first.has(value.value);
    let tmp3 = !hasItem;
    let closure_1 = tmp3;
    if (memo) {
      if (!hasItem) {
        tmp3 = first.size >= selectionActionComponent.maxValues;
      }
      if (!tmp3) {
        closure_4((items) => {
          set = new Set(items);
          if (closure_1) {
            set.add(closure_0.value);
          } else {
            set.delete(closure_0.value);
          }
          return set;
        });
      }
    } else {
      let items;
      if (hasItem) {
        items = [];
      } else {
        items = [value.value];
      }
      callback(items);
    }
  }, items2);
  let selectionOptionItemWithDescription = react.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = react.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  let obj2 = {
    onPressOptionItem: callback1,
    renderIcon(emoji) {
      let tmp = null;
      if (null != emoji.emoji) {
        const obj = { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null };
        ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
        tmp = jsx(EmojiDefault, { src: emoji.emoji.src, name: emoji.emoji.name, style: null, textEmojiStyle: null, fastImageStyle: null });
      }
      return tmp;
    },
    skipIcon: !memo1,
    renderDescription(description) {
      let tmp = null;
      if (null != description.description) {
        tmp = null;
        if ("" !== description.description) {
          tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options,
    itemStyle: items5,
    selectedCount: first.size,
    isSelected(value) {
      return first.has(value.value);
    },
    submitSelection() {
      const items = [...first];
      return callback(items);
    },
    itemAccessibilityLabel(emoji) {
      const intl = selectionActionComponent(closure_2[12]).intl;
      const formatToPlainString = intl.formatToPlainString;
      emoji = emoji.emoji;
      let name;
      const ZbrH2f = selectionActionComponent(closure_2[12]).t.ZbrH2f;
      if (emoji != null) {
        name = emoji.name;
      }
      const obj = { emojiName: name, optionName: emoji.label, optionDescription: emoji.description };
      return formatToPlainString(ZbrH2f, obj);
    },
    channelId,
    allowEmpty
  };
  const tmp10 = onSubmit(11445);
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  items5 = [selectionOptionItemWithDescription];
  return tmp9(tmp10, obj2);
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default tmp2;