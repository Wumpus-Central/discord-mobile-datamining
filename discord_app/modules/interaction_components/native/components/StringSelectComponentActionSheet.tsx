// === Module 11444: StringSelectComponentActionSheet ===

// Module 11444 (StringSelectComponentActionSheet)
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 1985 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import EmojiDefault from "Emoji" /* 6632 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 }, emojiWrapper: { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" }, textEmoji: { fontSize: 16, color: "#000000" }, fastImageEmoji: { width: 24, height: 24 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selectionActionComponent) => {
  const cResult = selectionActionComponent(576).c(38);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, channelId, onSubmit } = selectionActionComponent);
  const allowEmpty = selectionActionComponent.allowEmpty;
  let tmp3 = closure_6();
  dependencyMap = tmp3;
  let obj = selectionActionComponent(576);
  const obj2 = selectionActionComponent(7813);
  const tmp5 = first(noop.useState(new Set(selectionActionComponent(7813).getInitialStringSelectOptions(selectionActionComponent, selectionActionComponent.containerId))), 2);
  first = tmp5[0];
  noop = tmp5[1];
  jsx = tmp7;
  if (cResult[0] !== onSubmit) {
    const fn = function c(values) {
      onSubmit({ type: Server.ComponentType.STRING_SELECT, values });
      const obj = { type: Server.ComponentType.STRING_SELECT, values };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = onSubmit;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  closure_6 = tmp8;
  if (cResult[2] === first) {
    if (cResult[3] === tmp8) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      if (cResult[6] === first) {
        if (cResult[7] === selectionActionComponent.maxValues) {
          if (cResult[8] === tmp8) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] !== tmp3) {
            class A {
              constructor(arg0) {
                tmp = null;
                if (null != selectionActionComponent.emoji) {
                  tmp2 = jsx;
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = { src: null, name: null, style: null, textEmojiStyle: null, fastImageStyle: null };
                  obj.src = selectionActionComponent.emoji.src;
                  obj.name = selectionActionComponent.emoji.name;
                  tmp5 = closure_2;
                  ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
                  tmp = jsx(closure_1(closure_2[10]), obj);
                }
                return tmp;
              }
            }
            cResult[10] = tmp3;
            cResult[11] = A;
          } else {
            class A {
              constructor(arg0) {
                tmp = null;
                if (null != selectionActionComponent.emoji) {
                  tmp2 = jsx;
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = { src: null, name: null, style: null, textEmojiStyle: null, fastImageStyle: null };
                  obj.src = selectionActionComponent.emoji.src;
                  obj.name = selectionActionComponent.emoji.name;
                  tmp5 = closure_2;
                  ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
                  tmp = jsx(closure_1(closure_2[10]), obj);
                }
                return tmp;
              }
            }
          }
          if (cResult[12] !== tmp3) {
            class N {
              constructor(arg0) {
                tmp = null;
                if (null != selectionActionComponent.description) {
                  str = "";
                  tmp = null;
                  if ("" !== selectionActionComponent.description) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.selectionOptionItemDescription;
                    obj.children = selectionActionComponent.description;
                    tmp = jsx(closure_0(closure_2[11]).Text, obj);
                  }
                }
                return tmp;
              }
            }
            cResult[12] = tmp3;
            cResult[13] = N;
          } else {
            class N {
              constructor(arg0) {
                tmp = null;
                if (null != selectionActionComponent.description) {
                  str = "";
                  tmp = null;
                  if ("" !== selectionActionComponent.description) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.selectionOptionItemDescription;
                    obj.children = selectionActionComponent.description;
                    tmp = jsx(closure_0(closure_2[11]).Text, obj);
                  }
                }
                return tmp;
              }
            }
          }
          if (cResult[14] !== selectionActionComponent.options) {
            class N {
              constructor(arg0) {
                tmp = null;
                if (null != selectionActionComponent.description) {
                  str = "";
                  tmp = null;
                  if ("" !== selectionActionComponent.description) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.selectionOptionItemDescription;
                    obj.children = selectionActionComponent.description;
                    tmp = jsx(closure_0(closure_2[11]).Text, obj);
                  }
                }
                return tmp;
              }
            }
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class N {
                constructor(arg0) {
                  tmp = null;
                  if (null != selectionActionComponent.description) {
                    str = "";
                    tmp = null;
                    if ("" !== selectionActionComponent.description) {
                      tmp2 = jsx;
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                      tmp5 = closure_2;
                      obj.style = closure_2.selectionOptionItemDescription;
                      obj.children = selectionActionComponent.description;
                      tmp = jsx(closure_0(closure_2[11]).Text, obj);
                    }
                  }
                  return tmp;
                }
              }
              cResult[16] = tmp15;
            } else {
              class N {
                constructor(arg0) {
                  tmp = null;
                  if (null != selectionActionComponent.description) {
                    str = "";
                    tmp = null;
                    if ("" !== selectionActionComponent.description) {
                      tmp2 = jsx;
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                      tmp5 = closure_2;
                      obj.style = closure_2.selectionOptionItemDescription;
                      obj.children = selectionActionComponent.description;
                      tmp = jsx(closure_0(closure_2[11]).Text, obj);
                    }
                  }
                  return tmp;
                }
              }
            }
            options = selectionActionComponent.options;
            const someResult = options.some(tmp15);
            cResult[14] = selectionActionComponent.options;
            cResult[15] = someResult;
          } else {
            class N {
              constructor(arg0) {
                tmp = null;
                if (null != selectionActionComponent.description) {
                  str = "";
                  tmp = null;
                  if ("" !== selectionActionComponent.description) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.selectionOptionItemDescription;
                    obj.children = selectionActionComponent.description;
                    tmp = jsx(closure_0(closure_2[11]).Text, obj);
                  }
                }
                return tmp;
              }
            }
            if (cResult[17] !== selectionActionComponent.options) {
              class N {
                constructor(arg0) {
                  tmp = null;
                  if (null != selectionActionComponent.description) {
                    str = "";
                    tmp = null;
                    if ("" !== selectionActionComponent.description) {
                      tmp2 = jsx;
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
                      tmp5 = closure_2;
                      obj.style = closure_2.selectionOptionItemDescription;
                      obj.children = selectionActionComponent.description;
                      tmp = jsx(closure_0(closure_2[11]).Text, obj);
                    }
                  }
                  return tmp;
                }
              }
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class M {
                  constructor(arg0) {
                    return null != selectionActionComponent.emoji;
                  }
                }
                cResult[19] = M;
              } else {
                class M {
                  constructor(arg0) {
                    return null != selectionActionComponent.emoji;
                  }
                }
              }
              const options2 = selectionActionComponent.options;
              const someResult1 = options2.some(M);
              cResult[17] = selectionActionComponent.options;
              cResult[18] = someResult1;
            } else {
              class M {
                constructor(arg0) {
                  return null != selectionActionComponent.emoji;
                }
              }
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor(arg0) {
                    intl = selectionActionComponent(closure_2[12]).intl;
                    emoji = selectionActionComponent.emoji;
                    name = undefined;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                    obj = { emojiName: name, optionName: selectionActionComponent.label, optionDescription: selectionActionComponent.description };
                    return intl.formatToPlainString(selectionActionComponent(closure_2[12]).t.ZbrH2f, obj);
                  }
                }
                cResult[20] = H;
              } else {
                class H {
                  constructor(arg0) {
                    intl = selectionActionComponent(closure_2[12]).intl;
                    emoji = selectionActionComponent.emoji;
                    name = undefined;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                    obj = { emojiName: name, optionName: selectionActionComponent.label, optionDescription: selectionActionComponent.description };
                    return intl.formatToPlainString(selectionActionComponent(closure_2[12]).t.ZbrH2f, obj);
                  }
                }
              }
              if (tmp13) {
                class H {
                  constructor(arg0) {
                    intl = selectionActionComponent(closure_2[12]).intl;
                    emoji = selectionActionComponent.emoji;
                    name = undefined;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                    obj = { emojiName: name, optionName: selectionActionComponent.label, optionDescription: selectionActionComponent.description };
                    return intl.formatToPlainString(selectionActionComponent(closure_2[12]).t.ZbrH2f, obj);
                  }
                }
              }
              if (cResult[21] !== tmp13) {
                class H {
                  constructor(arg0) {
                    intl = selectionActionComponent(closure_2[12]).intl;
                    emoji = selectionActionComponent.emoji;
                    name = undefined;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                    obj = { emojiName: name, optionName: selectionActionComponent.label, optionDescription: selectionActionComponent.description };
                    return intl.formatToPlainString(selectionActionComponent(closure_2[12]).t.ZbrH2f, obj);
                  }
                }
                tmp24[0] = tmp13;
                cResult[21] = tmp13;
                cResult[22] = tmp24;
              } else {
                class H {
                  constructor(arg0) {
                    intl = selectionActionComponent(closure_2[12]).intl;
                    emoji = selectionActionComponent.emoji;
                    name = undefined;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                    obj = { emojiName: name, optionName: selectionActionComponent.label, optionDescription: selectionActionComponent.description };
                    return intl.formatToPlainString(selectionActionComponent(closure_2[12]).t.ZbrH2f, obj);
                  }
                }
              }
              if (cResult[23] !== first) {
                class F {
                  constructor(arg0) {
                    return closure_3.has(selectionActionComponent.value);
                  }
                }
                cResult[23] = first;
                cResult[24] = F;
              } else {
                class F {
                  constructor(arg0) {
                    return closure_3.has(selectionActionComponent.value);
                  }
                }
              }
              if (cResult[25] === allowEmpty) {
                class F {
                  constructor(arg0) {
                    return closure_3.has(selectionActionComponent.value);
                  }
                }
              }
              const obj3 = { onPressOptionItem: tmp10, renderIcon: A, skipIcon: !cResult[18], renderDescription: N, selectionActionComponent, labelComponent, options: selectionActionComponent.options, itemStyle: tmp24, selectedCount: first.size, isSelected: F, submitSelection: tmp9, itemAccessibilityLabel: H, channelId, allowEmpty };
              const tmp29 = jsx(onSubmit(11445), { onPressOptionItem: tmp10, renderIcon: A, skipIcon: !cResult[18], renderDescription: N, selectionActionComponent, labelComponent, options: selectionActionComponent.options, itemStyle: tmp24, selectedCount: first.size, isSelected: F, submitSelection: tmp9, itemAccessibilityLabel: H, channelId, allowEmpty });
              cResult[25] = allowEmpty;
              cResult[26] = channelId;
              cResult[27] = labelComponent;
              cResult[28] = tmp10;
              cResult[29] = N;
              class O {
                constructor() {
                  items = [...closure_3];
                  return closure_6(items);
                }
              }
              cResult[31] = first.size;
              cResult[32] = selectionActionComponent;
              cResult[33] = tmp9;
              cResult[34] = tmp24;
              cResult[35] = F;
              cResult[36] = !cResult[18];
              cResult[37] = tmp29;
            }
          }
        }
      }
    }
    const fn2 = function w(arg0, value) {
      const hasItem = first.has(value.value);
      let tmp3 = !hasItem;
      closure_1 = tmp3;
      if (closure_5) {
        if (!hasItem) {
          tmp3 = first.size >= selectionActionComponent.maxValues;
        }
        if (!tmp3) {
          closure_4((items) => {
            set = new Set(items);
            if (closure_1) {
              set.add(value.value);
            } else {
              set.delete(value.value);
            }
            return set;
          });
        }
      } else {
        if (hasItem) {
          let items = [];
        } else {
          items = [value.value];
        }
        closure_6(items);
      }
    };
    cResult[5] = tmp7;
    cResult[6] = first;
    cResult[7] = selectionActionComponent.maxValues;
    cResult[8] = tmp8;
    cResult[9] = fn2;
    tmp10 = fn2;
  }
  class O {
    constructor() {
      items = [...closure_3];
      return closure_6(items);
    }
  }
  cResult[2] = first;
  cResult[3] = tmp8;
  cResult[4] = O;
  tmp9 = O;
  set = new Set(selectionActionComponent(7813).getInitialStringSelectOptions(selectionActionComponent, selectionActionComponent.containerId));
}) : ((selectionActionComponent) => {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onSubmit = selectionActionComponent.onSubmit;
  let first;
  noop = undefined;
  let callback;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  dependencyMap = tmp;
  let obj = selectionActionComponent(7813);
  let tmp3 = first(noop.useState(new Set(selectionActionComponent(7813).getInitialStringSelectOptions(selectionActionComponent, containerId))), 2);
  first = tmp3[0];
  noop = tmp3[1];
  let items = [selectionActionComponent];
  const memo = noop.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const items1 = [onSubmit];
  callback = noop.useCallback((values) => {
    onSubmit({ type: Server.ComponentType.STRING_SELECT, values });
    const obj = { type: Server.ComponentType.STRING_SELECT, values };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = noop.useCallback((arg0, value) => {
    const hasItem = first.has(value.value);
    let tmp3 = !hasItem;
    closure_1 = tmp3;
    if (memo) {
      if (!hasItem) {
        tmp3 = first.size >= selectionActionComponent.maxValues;
      }
      if (!tmp3) {
        closure_4((items) => {
          set = new Set(items);
          if (closure_1) {
            set.add(value.value);
          } else {
            set.delete(value.value);
          }
          return set;
        });
      }
    } else {
      if (hasItem) {
        let items = [];
      } else {
        items = [value.value];
      }
      callback(items);
    }
  }, items2);
  let selectionOptionItemWithDescription = noop.useMemo(() => {
    options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = noop.useMemo(() => {
    options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  const obj2 = {
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
          const obj = { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description };
          tmp = jsx(Text_Text.Text, { style: closure_2.selectionOptionItemDescription, variant: "text-xs/medium", color: "text-default", children: description.description });
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options,
    itemStyle: null,
    selectedCount: null,
    isSelected: null,
    submitSelection: null,
    itemAccessibilityLabel: null,
    channelId: null,
    allowEmpty: null
  };
  set = new Set(selectionActionComponent(7813).getInitialStringSelectOptions(selectionActionComponent, containerId));
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  const items5 = [selectionOptionItemWithDescription];
  obj2.itemStyle = items5;
  obj2.selectedCount = first.size;
  obj2.isSelected = function isSelected(value) {
    return first.has(value.value);
  };
  obj2.submitSelection = function submitSelection() {
    const items = [...first];
    return callback(items);
  };
  obj2.itemAccessibilityLabel = function itemAccessibilityLabel(emoji) {
    const intl = selectionActionComponent(closure_2[12]).intl;
    emoji = emoji.emoji;
    let name;
    if (emoji != null) {
      name = emoji.name;
    }
    return intl.formatToPlainString(selectionActionComponent(closure_2[12]).t.ZbrH2f, { emojiName: name, optionName: emoji.label, optionDescription: emoji.description });
  };
  obj2.channelId = channelId;
  obj2.allowEmpty = allowEmpty;
  return tmp9(onSubmit(11445), obj2);
});