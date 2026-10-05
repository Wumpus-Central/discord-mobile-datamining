// === Module 6630: DropdownOptionsActionSheet ===

// Module 6630 (DropdownOptionsActionSheet)
import useStateFromStores from "useStateFromStores" /* 573 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6595 */;

require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, newBadge: { fontWeight: "bold" }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((option) => {
  const cResult = option(576).c(32);
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
  let id1;
  if (emoji != null) {
    id1 = emoji.id;
  }
  if (cResult[1] !== id1) {
    let emoji2 = option.emoji;
    let id2;
    if (emoji2 != null) {
      id2 = emoji2.id;
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
    cResult[1] = id2;
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
          class C {
            constructor() {
              tmp = onSelect(option, !closure_2);
              return;
            }
          }
          if (cResult[11] === undefined) {
            const emoji4 = option.emoji;
            class C {
              constructor() {
                tmp = onSelect(option, !closure_2);
                return;
              }
            }
            if (cResult[12] === undefined) {
              if (cResult[13] === tmp4.optionImageEmoji) {
                if (cResult[14] === tmp4.optionTextEmoji) {
                  let tmp16 = cResult[15];
                }
                if (cResult[16] === canBeNew) {
                  if (cResult[17] === option.isUnseen) {
                    if (cResult[18] === tmp4.newBadge) {
                      let tmp27 = cResult[19];
                    }
                    if (cResult[20] !== option.title) {
                      { variant: "text-md/normal", children: null }.children = option.title;
                      class C {
                        constructor() {
                          tmp = onSelect(option, !closure_2);
                          return;
                        }
                      }
                      cResult[20] = option.title;
                      cResult[21] = tmp31;
                      let tmp29 = tmp31;
                      const obj2 = { variant: "text-md/normal", children: null };
                    } else {
                      tmp29 = cResult[21];
                    }
                    if (cResult[22] === tmp27) {
                      if (cResult[23] === tmp4.labelRow) {
                        if (cResult[24] === tmp29) {
                          let tmp32 = cResult[25];
                        }
                        if (cResult[26] === tmp16) {
                          if (cResult[27] === tmp13) {
                            if (cResult[28] === tmp32) {
                              if (cResult[29] === tmp27) {
                                if (cResult[30] === tmp11) {
                                  let tmp35 = cResult[31];
                                }
                                return tmp35;
                              }
                            }
                          }
                        }
                        class C {
                          constructor() {
                            tmp = onSelect(option, !closure_2);
                            return;
                          }
                        }
                        const obj3 = { label: tmp32, selected: tmp11, leading: tmp16, trailing: tmp27, onPress: tmp13 };
                        const tmp37 = closure_8(onSelect(6631), obj3);
                        cResult[26] = tmp16;
                        cResult[27] = tmp13;
                        cResult[28] = tmp32;
                        cResult[29] = tmp27;
                        cResult[30] = tmp11;
                        cResult[31] = tmp37;
                        tmp35 = tmp37;
                      }
                    }
                    class C {
                      constructor() {
                        tmp = onSelect(option, !closure_2);
                        return;
                      }
                    }
                    const obj5 = { style: tmp4.labelRow, children: null };
                    const items1 = [tmp29, tmp27];
                    obj5.children = items1;
                    const tmp34 = closure_9(View, obj5);
                    cResult[22] = tmp27;
                    cResult[23] = tmp4.labelRow;
                    cResult[24] = tmp29;
                    cResult[25] = tmp34;
                    tmp32 = tmp34;
                  }
                }
                class C {
                  constructor() {
                    tmp = onSelect(option, !closure_2);
                    return;
                  }
                }
                cResult[16] = canBeNew;
                cResult[17] = option.isUnseen;
                cResult[18] = tmp4.newBadge;
                cResult[19] = null;
                tmp27 = tmp28;
              }
            }
          }
        }
        const emoji5 = option.emoji;
        class C {
          constructor() {
            tmp = onSelect(option, !closure_2);
            return;
          }
        }
        if (emoji5 != null) {
          let id = emoji5.id;
        }
        if (null != id) {
          const obj6 = { style: { display: "flex", alignItems: "center" }, children: null };
          class C {
            constructor() {
              tmp = onSelect(option, !closure_2);
              return;
            }
          }
          const obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
          ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp4);
          let emojiURL;
          if (null != stateFromStores) {
            const obj8 = { id: stateFromStores.id, animated: null, size: null };
            class C {
              constructor() {
                tmp = onSelect(option, !closure_2);
                return;
              }
            }
            obj8.size = EMOJI_URL_BASE_SIZE;
            emojiURL = onSelect(1402).getEmojiURL(obj8);
            const tmp21Result = onSelect(1402);
          }
          obj7.src = emojiURL;
          const emoji7 = option.emoji;
          let str;
          if (emoji7 != null) {
            str = emoji7.name;
          }
          if (str == null) {
            str = "";
          }
          obj7.name = str;
          obj6.children = closure_8(onSelect(6625), obj7);
          const tmp19Result = closure_8(tmp20, obj6);
          const tmp22 = onSelect(6625);
        } else {
          const emoji6 = option.emoji;
          let name;
          if (emoji6 != null) {
            name = emoji6.name;
          }
          class C {
            constructor() {
              tmp = onSelect(option, !closure_2);
              return;
            }
          }
        }
        cResult[10] = stateFromStores;
        const emoji8 = option.emoji;
        let id3;
        if (emoji8 != null) {
          id3 = emoji8.id;
        }
        cResult[11] = id3;
        const emoji9 = option.emoji;
        let name1;
        if (emoji9 != null) {
          name1 = emoji9.name;
        }
        cResult[12] = name1;
        cResult[13] = tmp4.optionImageEmoji;
        cResult[14] = tmp4.optionTextEmoji;
        cResult[15] = tmp19Result;
        tmp16 = tmp19Result;
      }
    }
    class C {
      constructor() {
        tmp = onSelect(option, !closure_2);
        return;
      }
    }
    cResult[6] = onSelect;
    cResult[7] = option;
    cResult[8] = tmp11;
    cResult[9] = C;
    tmp13 = C;
  }
  const hasItem = responses.includes(option.id);
  cResult[3] = option.id;
  cResult[4] = responses;
  cResult[5] = hasItem;
  tmp11 = hasItem;
  const tmpResult = option(573);
}) : ((option) => {
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
      const obj7 = { color: tmp2(tmp3[12]).BadgeColors.BRAND, text: null, textStyle: null };
      const intl = tmp2(tmp3[13]).intl;
      obj7.text = intl.string(tmp2(tmp3[13]).t.y2b7CA);
      obj7.textStyle = tmp.newBadge;
      trailing = closure_8(tmp2(tmp3[12]).TextBadge, obj7);
    }
  }
  const obj8 = { style: tmp.labelRow, children: null };
  const items2 = [closure_8(option(selected[14]).Text, { variant: "text-md/normal", children: option.title }), trailing];
  obj8.children = items2;
  const label = closure_9(View, obj8);
  return closure_8(onSelect(selected[15]), { label, selected, leading, trailing, onPress });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(canBeNew[8]).c(30);
  guildId = guildId.guildId;
  const promptId = guildId.promptId;
  canBeNew = guildId.canBeNew;
  const onSelect = guildId.onSelect;
  closure_10();
  const bottom = promptId(canBeNew[16])().bottom;
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
  const stateFromStores = guildId(canBeNew[9]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingPromptsStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === promptId) {
      let tmp11 = cResult[6];
    }
    const stateFromStoresArray = tmp(tmp2[9]).useStateFromStoresArray(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          obj = promptId(canBeNew[17]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      cResult[7] = I;
    } else {
      class I {
        constructor() {
          obj = promptId(canBeNew[17]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    if (null == stateFromStores) {
      class I {
        constructor() {
          obj = promptId(canBeNew[17]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    } else {
      class I {
        constructor() {
          obj = promptId(canBeNew[17]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        const obj2 = { title: null };
        const intl = tmp(tmp2[13]).intl;
        obj2.title = intl.string(tmp(tmp2[13]).t.E2ICbC);
        cResult[8] = closure_8(tmp(tmp2[18]).BottomSheetTitleHeader, obj2);
        class P {
          constructor(arg0) {
            obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
            return jsx(f38553, obj, guildId.id);
          }
        }
        const tmp15 = closure_8(tmp(tmp2[18]).BottomSheetTitleHeader, obj2);
      } else {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      if (cResult[9] !== bottom) {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        tmp17[0] = bottom;
        cResult[9] = bottom;
        cResult[10] = tmp17;
      } else {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        const stringResult = obj5.string(tmp(tmp2[13]).t.E2ICbC);
        cResult[11] = stringResult;
      } else {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      if (cResult[12] === canBeNew) {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      if (cResult[17] === canBeNew) {
        class I {
          constructor() {
            obj = promptId(canBeNew[17]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      class P {
        constructor(arg0) {
          obj = { option: guildId, responses: closure_4, onSelect, canBeNew: Boolean(canBeNew) };
          return jsx(f38553, obj, guildId.id);
        }
      }
      cResult[17] = canBeNew;
      cResult[18] = onSelect;
      cResult[19] = stateFromStoresArray;
      cResult[20] = P;
    }
    const tmpResult2 = tmp(tmp2[9]);
  }
  class C {
    constructor() {
      return closure_6.getOnboardingResponsesForPrompt(guildId, promptId);
    }
  }
  cResult[4] = guildId;
  cResult[5] = promptId;
  cResult[6] = C;
  tmp11 = C;
  const tmpResult = guildId(canBeNew[9]);
}) : ((arg0) => {
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
    options = stateFromStores.options;
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