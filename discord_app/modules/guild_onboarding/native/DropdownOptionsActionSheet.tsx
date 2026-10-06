// === Module 6637: DropdownOptionsActionSheet ===

// Module 6637 (DropdownOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6602 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, guildId, responses;

let c9;
let metroImportAll;
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, newBadge: { fontWeight: "bold" }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((option) => {
  let closure_2;
  let emojiURL;
  let first;
  let items1;
  let obj7;
  let onSelect;
  let str;
  let tmp25;
  let tmp9;
  const obj = option(576);
  const cResult = obj.c(32);
  const tmp = option;
  option = option.option;
  ({ responses, onSelect } = option);
  const canBeNew = option.canBeNew;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let emoji = option.emoji;
  let id1;
  const tmp7 = cResult[1];
  if (emoji != null) {
    id1 = emoji.id;
  }
  if (tmp7 !== id1) {
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
        const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
        if (emoji2 != null) {
          id1 = emoji2.id;
        }
        usableCustomEmojiById = getUsableCustomEmojiById(id1);
      }
      return usableCustomEmojiById;
    };
    cResult[1] = id2;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === option.id) {
    let tmp12;
    if (cResult[4] === responses) {
      tmp12 = cResult[5];
    }
    dependencyMap = tmp12;
    if (cResult[6] === onSelect) {
      if (cResult[7] === option) {
        let tmp14;
        let id;
        let tmp22Result;
        if (cResult[8] === tmp12) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === stateFromStores) {
          const emoji3 = option.emoji;
          const tmp15 = cResult[11];
          class C {
            constructor() {
              onSelect(option, !closure_2);
            }
          }
          if (tmp15 === undefined) {
            const emoji4 = option.emoji;
            const tmp17 = cResult[12];
            class C {
              constructor() {
                onSelect(option, !closure_2);
              }
            }
            if (tmp17 === undefined) {
              if (cResult[13] === tmp4.optionImageEmoji) {
                let tmp19;
                if (cResult[14] === tmp4.optionTextEmoji) {
                  tmp19 = cResult[15];
                }
                if (cResult[16] === canBeNew) {
                  if (cResult[17] === option.isUnseen) {
                    let tmp30;
                    let tmp32;
                    if (cResult[18] === tmp4.newBadge) {
                      tmp30 = cResult[19];
                    }
                    if (cResult[20] !== option.title) {
                      class C {
                        constructor() {
                          onSelect(option, !closure_2);
                        }
                      }
                      cResult[20] = option.title;
                      cResult[21] = tmp34;
                      tmp32 = tmp34;
                    } else {
                      tmp32 = cResult[21];
                    }
                    if (cResult[22] === tmp30) {
                      if (cResult[23] === tmp4.labelRow) {
                        let tmp35;
                        if (cResult[24] === tmp32) {
                          tmp35 = cResult[25];
                        }
                        if (cResult[26] === tmp19) {
                          if (cResult[27] === tmp14) {
                            if (cResult[28] === tmp35) {
                              if (cResult[29] === tmp30) {
                                let tmp38;
                                if (cResult[30] === tmp12) {
                                  tmp38 = cResult[31];
                                }
                                return tmp38;
                              }
                            }
                          }
                        }
                        class C {
                          constructor() {
                            onSelect(option, !closure_2);
                          }
                        }
                        const obj3 = { label: tmp35, selected: tmp12, leading: tmp19, trailing: tmp30, onPress: tmp14 };
                        const tmp40 = closure_8(onSelect(6638), obj3);
                        cResult[26] = tmp19;
                        cResult[27] = tmp14;
                        cResult[28] = tmp35;
                        cResult[29] = tmp30;
                        cResult[30] = tmp12;
                        cResult[31] = tmp40;
                        tmp38 = tmp40;
                      }
                    }
                    class C {
                      constructor() {
                        onSelect(option, !closure_2);
                      }
                    }
                    const obj5 = { style: tmp4.labelRow, children: items1 };
                    items1 = [tmp32, tmp30];
                    const tmp37 = closure_9(View, obj5);
                    cResult[22] = tmp30;
                    cResult[23] = tmp4.labelRow;
                    cResult[24] = tmp32;
                    cResult[25] = tmp37;
                    tmp35 = tmp37;
                  }
                }
                class C {
                  constructor() {
                    onSelect(option, !closure_2);
                  }
                }
                cResult[16] = canBeNew;
                cResult[17] = option.isUnseen;
                cResult[18] = tmp4.newBadge;
                cResult[19] = null;
                tmp30 = tmp31;
              }
            }
          }
        }
        const emoji5 = option.emoji;
        class C {
          constructor() {
            onSelect(option, !closure_2);
          }
        }
        if (emoji5 != null) {
          id = emoji5.id;
        }
        if (null != id) {
          const obj6 = { style: { display: "flex", alignItems: "center" }, children: closure_8(tmp25, obj7) };
          class C {
            constructor() {
              onSelect(option, !closure_2);
            }
          }
          obj7 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
          ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp4);
          emojiURL = undefined;
          tmp25 = onSelect(6632);
          if (null != stateFromStores) {
            const obj8 = { id: stateFromStores.id, animated: null, size: EMOJI_URL_BASE_SIZE };
            const tmp24Result = onSelect(1402);
            class C {
              constructor() {
                onSelect(option, !closure_2);
              }
            }
            emojiURL = tmp24Result.getEmojiURL(obj8);
          }
          const emoji7 = option.emoji;
          str = undefined;
          if (emoji7 != null) {
            str = emoji7.name;
          }
          if (str == null) {
            str = "";
          }
          tmp22Result = closure_8(tmp23, obj6);
        } else {
          const emoji6 = option.emoji;
          let name;
          if (emoji6 != null) {
            name = emoji6.name;
          }
          class C {
            constructor() {
              onSelect(option, !closure_2);
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
        cResult[15] = tmp22Result;
        tmp19 = tmp22Result;
      }
    }
    class C {
      constructor() {
        onSelect(option, !closure_2);
      }
    }
    cResult[6] = onSelect;
    cResult[7] = option;
    cResult[8] = tmp12;
    cResult[9] = C;
    tmp14 = C;
  }
  const hasItem = responses.includes(option.id);
  cResult[3] = option.id;
  cResult[4] = responses;
  cResult[5] = hasItem;
  tmp12 = hasItem;
}) : ((option) => {
  let emojiURL;
  let intl;
  let items2;
  let leading;
  let obj4;
  let onSelect;
  let str;
  let tmp13;
  option = option.option;
  ({ responses, onSelect } = option);
  let selected;
  const canBeNew = option.canBeNew;
  const tmp = closure_10();
  const items = [EmojiStore];
  const obj = option(selected[9]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = option.emoji;
      let id1;
      const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
      if (emoji2 != null) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  selected = responses.includes(option.id);
  const items1 = [onSelect, option, selected];
  let emoji = option.emoji;
  let id;
  const onPress = react.useCallback(() => {
    onSelect(option, !selected);
  }, items1);
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj2 = { style: { display: "flex", alignItems: "center" }, children: closure_8(tmp13, obj4) };
    obj4 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    emojiURL = undefined;
    tmp13 = onSelect(selected[10]);
    if (null != stateFromStores) {
      const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
      const tmp12Result = onSelect(selected[11]);
      emojiURL = tmp12Result.getEmojiURL(obj6);
    }
    const emoji3 = option.emoji;
    str = undefined;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    leading = closure_8(View, obj2);
  } else {
    let emoji2 = option.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    leading = null;
  }
  let trailing = null;
  if (canBeNew) {
    trailing = null;
    if (option.isUnseen) {
      const obj7 = { color: option(selected[12]).BadgeColors.BRAND, text: intl.string(option(selected[13]).t.y2b7CA), textStyle: tmp.newBadge };
      const TextBadge = tmp2(tmp3[12]).TextBadge;
      intl = tmp2(tmp3[13]).intl;
      trailing = closure_8(TextBadge, obj7);
    }
  }
  const obj8 = { style: tmp.labelRow, children: items2 };
  items2 = [, ];
  const obj14 = { variant: "text-md/normal", children: option.title };
  items2[0] = closure_8(option(selected[14]).Text, obj14);
  items2[1] = trailing;
  const label = closure_9(View, obj8);
  return closure_8(onSelect(selected[15]), { label, selected, leading, trailing, onPress });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let canBeNew;
  let first;
  let intl;
  let tmp7;
  let tmp9;
  let obj = guildId(canBeNew[8]);
  const cResult = obj.c(30);
  guildId = guildId.guildId;
  const promptId = guildId.promptId;
  canBeNew = guildId.canBeNew;
  const onSelect = guildId.onSelect;
  closure_10();
  const bottom = promptId(canBeNew[16])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingPromptsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== promptId) {
    const fn = function s() {
      return GuildOnboardingPromptsStore.getOnboardingPrompt(promptId);
    };
    cResult[1] = promptId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildId(canBeNew[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingPromptsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === guildId) {
    let tmp11;
    if (cResult[5] === promptId) {
      tmp11 = cResult[6];
    }
    const tmpResult2 = guildId(canBeNew[9]);
    const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const obj = promptId(canBeNew[17]);
          obj.hideActionSheet();
        }
      }
      cResult[7] = I;
    } else {
      class I {
        constructor() {
          const obj = promptId(canBeNew[17]);
          obj.hideActionSheet();
        }
      }
    }
    if (null == stateFromStores) {
      class I {
        constructor() {
          const obj = promptId(canBeNew[17]);
          obj.hideActionSheet();
        }
      }
    } else {
      class I {
        constructor() {
          const obj = promptId(canBeNew[17]);
          obj.hideActionSheet();
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
        const obj2 = { title: intl.string(guildId(canBeNew[13]).t.E2ICbC) };
        const BottomSheetTitleHeader = tmp(tmp2[18]).BottomSheetTitleHeader;
        intl = tmp(tmp2[13]).intl;
        cResult[8] = closure_8(BottomSheetTitleHeader, obj2);
        closure_8(BottomSheetTitleHeader, obj2);
        class P {
          constructor(option) {
            const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
            return metroImportAll(closure_11, obj, option.id);
          }
        }
      } else {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[9] !== bottom) {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
        tmp17[0] = bottom;
        cResult[9] = bottom;
        cResult[10] = tmp17;
      } else {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
        cResult[11] = obj5.string(guildId(canBeNew[13]).t.E2ICbC);
        const stringResult = obj5.string(guildId(canBeNew[13]).t.E2ICbC);
      } else {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[12] === canBeNew) {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[17] === canBeNew) {
        class I {
          constructor() {
            const obj = promptId(canBeNew[17]);
            obj.hideActionSheet();
          }
        }
      }
      class P {
        constructor(option) {
          const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
          return metroImportAll(closure_11, obj, option.id);
        }
      }
      cResult[17] = canBeNew;
      cResult[18] = onSelect;
      cResult[19] = stateFromStoresArray;
      cResult[20] = P;
    }
  }
  class C {
    constructor() {
      return GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, promptId);
    }
  }
  cResult[4] = guildId;
  cResult[5] = promptId;
  cResult[6] = C;
  tmp11 = C;
}) : ((arg0) => {
  let BottomSheetScrollView;
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj5;
  let obj6;
  let obj9;
  let onSelect;
  let options;
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: react } = arg0);
  const tmp = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = useStateFromStores;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingPrompt(importDefault));
  const items1 = [GuildOnboardingPromptsStore];
  const obj2 = useStateFromStores;
  responses = obj2.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(require, importDefault));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj3 = { title: intl.string(intl4.t.E2ICbC) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl4.intl;
    const obj4 = { scrollable: true, header: closure_8(BottomSheetTitleHeader, obj3), children: closure_9(BottomSheetScrollView, obj5) };
    closure_8(BottomSheetTitleHeader, obj3);
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    obj5 = { contentContainerStyle: obj6, children: items2 };
    obj6 = { paddingBottom: bottom };
    BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
    const obj7 = {
      accessibilityRole: "radiogroup",
      accessibilityLabel: intl2.string(intl4.t.E2ICbC),
      children: options.map((option) => {
          const obj = { option, responses, onSelect: react, canBeNew: Boolean(dependencyMap) };
          return metroImportAll(closure_11, obj, option.id);
        })
    };
    const CardSection = native.CardSection;
    intl2 = intl4.intl;
    options = stateFromStores.options;
    items2 = [closure_8(CardSection, obj7), ];
    const obj8 = { style: tmp.closeButtonWrapper, children: closure_8(Button, obj9) };
    obj9 = { onPress: tmp5, text: intl3.string(intl4.t.cpT0Cq), grow: true };
    Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    items2[1] = closure_8(responses, obj8);
    return closure_8(BottomSheet, obj4);
  }
});
const result = size.fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default tmp3;