// === Module 7230: DropdownOptionsActionSheet ===

// Module 7230 (DropdownOptionsActionSheet)
import useStateFromStores from "useStateFromStores" /* 573 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import components_Button_Button from "components/Button/Button" /* 5242 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5263 */;
import BottomSheetModal from "BottomSheetModal" /* 5267 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7246 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 6723 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7193 */;

require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1395).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4969);
let closure_10 = createStyles.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function DropdownOptionRow(option) {
  const cResult = option(576).c(31);
  option = option.option;
  ({ responses, onSelect } = option);
  const canBeNew = option.canBeNew;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let emoji = option.emoji;
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  if (cResult[1] !== id) {
    let emoji2 = option.emoji;
    let id1;
    if (emoji2 != null) {
      id1 = emoji2.id;
    }
    const fn = function c() {
      const emoji = option.emoji;
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      let usableCustomEmojiById = null;
      if (null != id) {
        const emoji2 = option.emoji;
        let id1;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
      }
      return usableCustomEmojiById;
    };
    cResult[1] = id1;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = option(576);
  const stateFromStores = option(573).useStateFromStores(first, tmp8);
  if (cResult[3] === option.id) {
    if (cResult[4] === responses) {
      let tmp11 = cResult[5];
    }
    dependencyMap = tmp11;
    if (cResult[6] === onSelect) {
      if (cResult[7] === option) {
        if (cResult[8] === tmp11) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === stateFromStores) {
          const emoji3 = option.emoji;
          let id2;
          if (emoji3 != null) {
            id2 = emoji3.id;
          }
          if (cResult[11] === id2) {
            const emoji4 = option.emoji;
            let name;
            if (emoji4 != null) {
              name = emoji4.name;
            }
            if (cResult[12] === name) {
              if (cResult[13] === tmp4.optionImageEmoji) {
                if (cResult[14] === tmp4.optionTextEmoji) {
                  let tmp16 = cResult[15];
                }
                if (cResult[16] === canBeNew) {
                  if (cResult[17] === option.isUnseen) {
                    let tmp28 = cResult[18];
                  }
                  if (cResult[19] !== option.title) {
                    const obj2 = { variant: "text-md/normal", children: option.title };
                    const tmp33 = closure_8(tmp(5232).Text, obj2);
                    cResult[19] = option.title;
                    cResult[20] = tmp33;
                    let tmp31 = tmp33;
                  } else {
                    tmp31 = cResult[20];
                  }
                  if (cResult[21] === tmp28) {
                    if (cResult[22] === tmp4.labelRow) {
                      if (cResult[23] === tmp31) {
                        let tmp34 = cResult[24];
                      }
                      if (cResult[25] === tmp16) {
                        if (cResult[26] === tmp13) {
                          if (cResult[27] === tmp34) {
                            if (cResult[28] === tmp28) {
                              if (cResult[29] === tmp11) {
                                let tmp38 = cResult[30];
                              }
                              return tmp38;
                            }
                          }
                        }
                      }
                      const obj3 = { label: tmp34, selected: tmp11, leading: tmp16, trailing: tmp28, onPress: tmp13 };
                      const tmp41 = closure_8(onSelect(7233), obj3);
                      cResult[25] = tmp16;
                      cResult[26] = tmp13;
                      cResult[27] = tmp34;
                      cResult[28] = tmp28;
                      cResult[29] = tmp11;
                      cResult[30] = tmp41;
                      tmp38 = tmp41;
                    }
                  }
                  const obj5 = { style: tmp4.labelRow, children: null };
                  const items1 = [tmp31, tmp28];
                  obj5.children = items1;
                  const tmp37 = closure_9(View, obj5);
                  cResult[21] = tmp28;
                  cResult[22] = tmp4.labelRow;
                  cResult[23] = tmp31;
                  cResult[24] = tmp37;
                  tmp34 = tmp37;
                }
                let tmp29 = null;
                if (canBeNew) {
                  tmp29 = null;
                  if (option.isUnseen) {
                    tmp29 = closure_8(tmp(7231).Badge, { type: "new", variant: "primary" });
                  }
                }
                cResult[16] = canBeNew;
                cResult[17] = option.isUnseen;
                cResult[18] = tmp29;
                tmp28 = tmp29;
              }
            }
          }
        }
        const emoji5 = option.emoji;
        let id3;
        if (emoji5 != null) {
          id3 = emoji5.id;
        }
        if (null != id3) {
          const obj7 = { style: { display: "flex", alignItems: "center" }, children: null };
          const obj8 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
          ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp4);
          let emojiURL;
          if (null != stateFromStores) {
            const obj9 = { id: null, animated: null, size: null };
            ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
            obj9.size = EMOJI_URL_BASE_SIZE;
            emojiURL = onSelect(1417).getEmojiURL(obj9);
            const tmp22Result = onSelect(1417);
          }
          obj8.src = emojiURL;
          const emoji7 = option.emoji;
          let str;
          if (emoji7 != null) {
            str = emoji7.name;
          }
          if (str == null) {
            str = "";
          }
          obj8.name = str;
          obj7.children = closure_8(onSelect(7225), obj8);
          let tmp20Result = closure_8(View, obj7);
          const tmp23 = onSelect(7225);
        } else {
          const emoji6 = option.emoji;
          let name1;
          if (emoji6 != null) {
            name1 = emoji6.name;
          }
          tmp20Result = null;
        }
        cResult[10] = stateFromStores;
        const emoji8 = option.emoji;
        let id4;
        if (emoji8 != null) {
          id4 = emoji8.id;
        }
        cResult[11] = id4;
        const emoji9 = option.emoji;
        let name2;
        if (emoji9 != null) {
          name2 = emoji9.name;
        }
        cResult[12] = name2;
        cResult[13] = tmp4.optionImageEmoji;
        cResult[14] = tmp4.optionTextEmoji;
        cResult[15] = tmp20Result;
        tmp16 = tmp20Result;
      }
    }
    const fn2 = function v() {
      onSelect(option, !closure_2);
    };
    cResult[6] = onSelect;
    cResult[7] = option;
    cResult[8] = tmp11;
    cResult[9] = fn2;
    tmp13 = fn2;
  }
  const hasItem = responses.includes(option.id);
  cResult[3] = option.id;
  cResult[4] = responses;
  cResult[5] = hasItem;
  tmp11 = hasItem;
  const tmpResult = option(573);
}) : (function DropdownOptionRow(option) {
  option = option.option;
  ({ responses, onSelect } = option);
  let selected;
  const tmp = closure_10();
  const items = [EmojiStore];
  const stateFromStores = option(selected[9]).useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = option.emoji;
      let id1;
      if (emoji2 != null) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  selected = responses.includes(option.id);
  const items1 = [onSelect, option, selected];
  let emoji = option.emoji;
  let id;
  const onPress = noop.useCallback(() => {
    onSelect(option, !selected);
  }, items1);
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj2 = { style: { display: "flex", alignItems: "center" }, children: null };
    const obj4 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj6 = { id: null, animated: null, size: null };
      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
      obj6.size = EMOJI_URL_BASE_SIZE;
      emojiURL = onSelect(tmp3[11]).getEmojiURL(obj6);
      const tmp12Result = onSelect(tmp3[11]);
    }
    obj4.src = emojiURL;
    const emoji3 = option.emoji;
    let str;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    obj4.name = str;
    obj2.children = closure_8(onSelect(tmp3[10]), obj4);
    let leading = closure_8(View, obj2);
    const tmp13 = onSelect(tmp3[10]);
  } else {
    let emoji2 = option.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    leading = null;
  }
  let trailing = null;
  if (option.canBeNew) {
    trailing = null;
    if (option.isUnseen) {
      trailing = closure_8(tmp2(tmp3[12]).Badge, { type: "new", variant: "primary" });
    }
  }
  const obj7 = { style: tmp.labelRow, children: null };
  const items2 = [closure_8(option(selected[13]).Text, { variant: "text-md/normal", children: option.title }), trailing];
  obj7.children = items2;
  const label = closure_9(View, obj7);
  return closure_8(onSelect(selected[14]), { label, selected, leading, trailing, onPress });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DropdownOptionsActionSheet(guildId) {
  const cResult = guildId(canBeNew[8]).c(30);
  guildId = guildId.guildId;
  const promptId = guildId.promptId;
  canBeNew = guildId.canBeNew;
  const onSelect = guildId.onSelect;
  const tmp4 = closure_10();
  const bottom = promptId(canBeNew[15])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingPromptsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== promptId) {
    const fn = function s() {
      return GuildOnboardingPromptsStore.getOnboardingPrompt(promptId);
    };
    cResult[1] = promptId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = guildId(canBeNew[8]);
  let options = guildId(canBeNew[9]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingPromptsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === promptId) {
      let tmp10 = cResult[6];
    }
    const stateFromStoresArray = tmp(tmp2[9]).useStateFromStoresArray(tmp8, tmp10);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function _() {
        promptId(canBeNew[16]).hideActionSheet();
      };
      cResult[7] = fn3;
      let tmp12 = fn3;
    } else {
      tmp12 = cResult[7];
    }
    if (null == options) {
      return null;
    } else {
      const _Symbol4 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = tmp(tmp2[18]).intl;
        obj2.title = intl.string(tmp(tmp2[18]).t.E2ICbC);
        cResult[8] = closure_8(tmp(tmp2[17]).BottomSheetTitleHeader, obj2);
        class P {
          constructor(arg0) {
            obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
            return jsx(DropdownOptionRow, obj, guildId.id);
          }
        }
        const tmp16 = closure_8(tmp(tmp2[17]).BottomSheetTitleHeader, obj2);
      }
      if (cResult[9] !== bottom) {
        const obj3 = { paddingBottom: bottom };
        cResult[9] = bottom;
        cResult[10] = obj3;
        let tmp17 = obj3;
      } else {
        tmp17 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[18]).intl;
        const stringResult = intl2.string(tmp(tmp2[18]).t.E2ICbC);
        cResult[11] = stringResult;
        let tmp18 = stringResult;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] === canBeNew) {
        if (cResult[13] === onSelect) {
          if (cResult[14] === options.options) {
            if (cResult[15] === stateFromStoresArray) {
              if (cResult[21] !== cResult[16]) {
                const obj4 = { accessibilityRole: "radiogroup", accessibilityLabel: tmp18, children: tmp20 };
                cResult[21] = tmp20;
                cResult[22] = closure_8(tmp(tmp2[19]).CardSection, obj4);
                class P {
                  constructor(arg0) {
                    obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
                    return jsx(DropdownOptionRow, obj, guildId.id);
                  }
                }
                const tmp26 = closure_8(tmp(tmp2[19]).CardSection, obj4);
              }
              const _Symbol3 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { onPress: tmp12, text: null, grow: true };
                const intl3 = tmp(tmp2[18]).intl;
                obj5.text = intl3.string(tmp(tmp2[18]).t.cpT0Cq);
                class P {
                  constructor(arg0) {
                    obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
                    return jsx(DropdownOptionRow, obj, guildId.id);
                  }
                }
                let tmp27 = closure_8(tmp(tmp2[20]).Button, obj5);
                const tmp29 = closure_8(tmp(tmp2[20]).Button, obj5);
              } else {
                tmp27 = cResult[23];
              }
              if (cResult[24] !== tmp4.closeButtonWrapper) {
                const obj6 = { style: tmp4.closeButtonWrapper, children: tmp27 };
                cResult[24] = tmp4.closeButtonWrapper;
                class P {
                  constructor(arg0) {
                    obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
                    return jsx(DropdownOptionRow, obj, guildId.id);
                  }
                }
                let tmp30 = closure_8(stateFromStoresArray, obj6);
                const tmp33 = closure_8(stateFromStoresArray, obj6);
              } else {
                tmp30 = cResult[25];
              }
              if (cResult[26] === tmp24) {
                if (cResult[27] === tmp30) {
                  if (cResult[28] === tmp17) {
                    let tmp34 = cResult[29];
                  }
                  return tmp34;
                }
              }
              const obj7 = { scrollable: true, header: null, children: null };
              class P {
                constructor(arg0) {
                  obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
                  return jsx(DropdownOptionRow, obj, guildId.id);
                }
              }
              const obj8 = { contentContainerStyle: tmp17, children: null };
              const items2 = [tmp24, tmp30];
              obj8.children = items2;
              obj7.children = closure_9(tmp(tmp2[22]).BottomSheetScrollView, obj8);
              const tmp37 = closure_8(tmp(tmp2[21]).BottomSheet, obj7);
              cResult[26] = tmp24;
              cResult[27] = tmp30;
              cResult[28] = tmp17;
              cResult[29] = tmp37;
              tmp34 = tmp37;
            }
          }
        }
      }
      if (cResult[17] === canBeNew) {
        if (cResult[18] === onSelect) {
          if (cResult[19] === stateFromStoresArray) {
            let tmp21 = cResult[20];
          }
          const options1 = options.options;
          const mapped = options1.map(tmp21);
          cResult[12] = canBeNew;
          cResult[13] = onSelect;
          options = options.options;
          class P {
            constructor(arg0) {
              obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
              return jsx(DropdownOptionRow, obj, guildId.id);
            }
          }
          cResult[15] = stateFromStoresArray;
          cResult[16] = mapped;
        }
      }
      class P {
        constructor(arg0) {
          obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
          return jsx(DropdownOptionRow, obj, guildId.id);
        }
      }
      cResult[17] = canBeNew;
      cResult[18] = onSelect;
      cResult[19] = stateFromStoresArray;
      cResult[20] = P;
      tmp21 = P;
    }
    const tmpResult2 = tmp(tmp2[9]);
  }
  const fn2 = function v() {
    return GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, promptId);
  };
  cResult[4] = guildId;
  cResult[5] = promptId;
  cResult[6] = fn2;
  tmp10 = fn2;
  const tmpResult = guildId(canBeNew[9]);
}) : (function DropdownOptionsActionSheet(arg0) {
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: noop } = arg0);
  const tmp = closure_10();
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingPrompt(importDefault));
  const items1 = [GuildOnboardingPromptsStore];
  responses = useStateFromStores.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(require, importDefault));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj3 = { title: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.E2ICbC);
    const obj4 = { scrollable: true, header: closure_8(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3), children: null };
    const obj5 = { contentContainerStyle: null, children: null };
    const obj6 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
    obj5.contentContainerStyle = obj6;
    const obj7 = { accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
    const intl2 = util.intl;
    obj7.accessibilityLabel = intl2.string(util.t.E2ICbC);
    const options = stateFromStores.options;
    obj7.children = options.map((option) => closure_2_8(closure_11, { option, responses, onSelect, canBeNew: Boolean(dependencyMap) }, option.id));
    const items2 = [closure_8(native.CardSection, obj7), ];
    const obj8 = { style: tmp.closeButtonWrapper, children: null };
    const obj9 = { onPress: tmp5, text: null, grow: true };
    const intl3 = util.intl;
    obj9.text = intl3.string(util.t.cpT0Cq);
    obj8.children = closure_8(components_Button_Button.Button, obj9);
    items2[1] = closure_8(responses, obj8);
    obj5.children = items2;
    obj4.children = closure_9(BottomSheetModal.BottomSheetScrollView, obj5);
    return closure_8(Sheet_BottomSheet.BottomSheet, obj4);
  }
});