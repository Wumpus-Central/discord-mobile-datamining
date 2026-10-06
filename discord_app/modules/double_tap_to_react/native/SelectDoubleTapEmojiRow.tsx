// discord_app/modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import MessageReactionsTypes from "../../messages/MessageReactionsTypes.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import openEmojiPickerActionSheet2 from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let dependencyMap, selectedEmoji;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let num2;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ EMOJI_URL_BASE_SIZE: metroImportDefault, EmojiIntention: metroImportAll } = EmojiConstants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  emoji: { width: 24, height: 24 },
  customEmoji: { width: 24, height: 24 },
  textEmoji: obj2,
  emojiRow: obj3,
  emojiPressable: obj4,
  selectedEmojiPressable: obj5,
  emojiWrapper: obj6,
  selectedEmojiWrapper: obj7,
  chooseEmojiButton: obj8,
  customReactionOverlay: size,
  selectedCustomReactionIcon: size1,
};
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 20;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj2 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 28;
}
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj4 = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: 2 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  height: 24,
  width: 24,
  position: "absolute",
  right: -8,
  bottom: -8,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  borderWidth: 2,
  boxSizing: "content-box",
};
size1 = { height: 12, width: 12, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let closure_12 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (emoji) => {
        let animated;
        let tmp5;
        let tmp6;
        let useReducedMotion;
        const obj = emoji(576);
        const cResult = obj.c(30);
        emoji = emoji.emoji;
        const onPress = emoji.onPress;
        const selected = emoji.selected;
        const tmp4 = closure_12();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function n() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = emoji(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        if (cResult[2] === emoji) {
          let tmp10;
          if (cResult[3] === onPress) {
            tmp10 = cResult[4];
          }
          let prop;
          if (selected) {
            prop = tmp4.selectedEmojiPressable;
          }
          if (cResult[5] === tmp4.emojiPressable) {
            let tmp12;
            if (cResult[6] === prop) {
              tmp12 = cResult[7];
            }
            let selectedEmojiWrapper;
            if (selected) {
              selectedEmojiWrapper = tmp4.selectedEmojiWrapper;
            }
            if (cResult[8] === tmp4.emojiWrapper) {
              let tmp14;
              let url;
              if (cResult[9] === selectedEmojiWrapper) {
                tmp14 = cResult[10];
              }
              let str = "";
              if (null == emoji.id) {
                str = emoji.surrogates;
              }
              if (cResult[11] === emoji.animated) {
                if (cResult[12] === emoji.id) {
                  if (cResult[13] === emoji.url) {
                    let tmp15;
                    if (cResult[14] === stateFromStores) {
                      tmp15 = cResult[15];
                    }
                    if (cResult[16] === tmp4.customEmoji) {
                      if (cResult[17] === tmp4.emoji) {
                        if (cResult[18] === tmp4.textEmoji) {
                          if (cResult[19] === tmp15) {
                            let tmp19;
                            if (cResult[20] === str) {
                              tmp19 = cResult[21];
                            }
                            if (cResult[22] === tmp19) {
                              let tmp23;
                              if (cResult[23] === tmp14) {
                                tmp23 = cResult[24];
                              }
                              if (cResult[25] === tmp23) {
                                if ((cResult[26] === null) == emoji) {
                                  if (cResult[27] === tmp10) {
                                    let tmp27;
                                    if (cResult[28] === tmp12) {
                                      tmp27 = cResult[29];
                                    }
                                    return tmp27;
                                  }
                                }
                              }
                              const obj2 = {
                                accessibilityRole: "button",
                                disabled: null == emoji,
                                onPress: tmp10,
                                style: tmp12,
                                children: tmp23,
                              };
                              const tmp29 = closure_9(emoji(5916).PressableOpacity, obj2);
                              cResult[25] = tmp23;
                              cResult[26] = null == emoji;
                              cResult[27] = tmp10;
                              cResult[28] = tmp12;
                              cResult[29] = tmp29;
                              tmp27 = tmp29;
                            }
                            const obj3 = { style: tmp14, children: tmp19 };
                            const tmp26 = closure_9(View, obj3);
                            cResult[22] = tmp19;
                            cResult[23] = tmp14;
                            cResult[24] = tmp26;
                            tmp23 = tmp26;
                          }
                        }
                      }
                    }
                    const obj5 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: str, src: tmp15 };
                    ({ emoji: obj4.style, customEmoji: obj4.fastImageStyle, textEmoji: obj4.textEmojiStyle } = tmp4);
                    const tmp22 = closure_9(onPress(6632), obj5);
                    cResult[16] = tmp4.customEmoji;
                    cResult[17] = tmp4.emoji;
                    cResult[18] = tmp4.textEmoji;
                    cResult[19] = tmp15;
                    cResult[20] = str;
                    cResult[21] = tmp22;
                    tmp19 = tmp22;
                  }
                }
              }
              if (null != emoji.id) {
                const obj6 = { id: emoji.id, animated, size };
                animated = !stateFromStores;
                const getEmojiURL = onPress(1402).getEmojiURL;
                onPress(1402);
                if (!stateFromStores) {
                  animated = emoji.animated;
                }
                url = getEmojiURL(obj6);
              } else {
                url = emoji.url;
              }
              cResult[11] = emoji.animated;
              cResult[12] = emoji.id;
              cResult[13] = emoji.url;
              cResult[14] = stateFromStores;
              cResult[15] = url;
              tmp15 = url;
            }
            const items1 = [tmp4.emojiWrapper, selectedEmojiWrapper];
            cResult[8] = tmp4.emojiWrapper;
            cResult[9] = selectedEmojiWrapper;
            cResult[10] = items1;
            tmp14 = items1;
          }
          const items2 = [tmp4.emojiPressable, prop];
          cResult[5] = tmp4.emojiPressable;
          cResult[6] = prop;
          cResult[7] = items2;
          tmp12 = items2;
        }
        const fn2 = function h() {
          return onPress(emoji);
        };
        cResult[2] = emoji;
        cResult[3] = onPress;
        cResult[4] = fn2;
        tmp10 = fn2;
      }
    : (emoji) => {
        let animated;
        let items1;
        let obj3;
        let obj4;
        let selected;
        let str;
        let tmp9;
        let url;
        let useReducedMotion;
        emoji = emoji.emoji;
        ({ onPress: importDefault, selected } = emoji);
        const tmp = closure_12();
        const items = [AccessibilityStore];
        const obj = emoji(504);
        const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        const obj2 = {
          accessibilityRole: "button",
          disabled: null == emoji,
          onPress() {
            return importDefault(emoji);
          },
          style: items1,
          children: closure_9(View, obj3),
        };
        items1 = [tmp.emojiPressable];
        let prop;
        const PressableOpacity = emoji(5916).PressableOpacity;
        if (selected) {
          prop = tmp.selectedEmojiPressable;
        }
        items1[1] = prop;
        const items2 = [tmp.emojiWrapper];
        let selectedEmojiWrapper;
        if (selected) {
          selectedEmojiWrapper = tmp.selectedEmojiWrapper;
        }
        items2[1] = selectedEmojiWrapper;
        obj3 = { style: items2, children: closure_9(tmp9, obj4) };
        obj4 = {
          style: tmp.emoji,
          fastImageStyle: tmp.customEmoji,
          textEmojiStyle: tmp.textEmoji,
          name: str,
          src: url,
        };
        str = "";
        tmp9 = EmojiDefault;
        if (null == emoji.id) {
          str = emoji.surrogates;
        }
        if (null != emoji.id) {
          const obj5 = { id: emoji.id, animated, size };
          animated = !stateFromStores;
          const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
          AvatarUtilsDefault;
          if (!stateFromStores) {
            animated = emoji.animated;
          }
          url = getEmojiURL(obj5);
        } else {
          url = emoji.url;
        }
        return closure_9(PressableOpacity, obj2);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (selectedEmoji) => {
        let closure_2;
        let tmp20;
        let tmp6;
        let tmp7;
        let useReducedMotion;
        let tmp = selectedEmoji;
        let obj = selectedEmoji(576);
        const cResult = obj.c(54);
        selectedEmoji = selectedEmoji.selectedEmoji;
        const onPressEmoji = selectedEmoji.onPressEmoji;
        const style = selectedEmoji.style;
        const tmp4 = closure_12();
        let obj2 = selectedEmoji(9883);
        const frequentlyUsedReactionEmojis = obj2.useFrequentlyUsedReactionEmojis(undefined);
        const rounded = Math.floor(Math.min(onPressEmoji(1484)().width, ACTION_SHEET_MAX_WIDTH) / 60);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function u() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp6 = items;
          tmp7 = fn;
        } else {
          [tmp6, tmp7] = cResult;
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
        if (cResult[2] === frequentlyUsedReactionEmojis) {
          let arr3;
          if (cResult[3] === rounded) {
            arr3 = cResult[4];
          }
          if (cResult[6] === arr3) {
            let tmp13;
            let tmp17;
            if (cResult[7] === selectedEmoji) {
              tmp13 = cResult[8];
            }
            dependencyMap = tmp13;
            if (cResult[11] !== onPressEmoji) {
              class L {
                constructor(arg0) {
                  onPressEmoji(arg0, true);
                }
              }
              cResult[11] = onPressEmoji;
              cResult[12] = L;
            } else {
              class L {
                constructor(arg0) {
                  onPressEmoji(arg0, true);
                }
              }
            }
            L = tmp16;
            if (cResult[13] !== onPressEmoji) {
              class F {
                constructor(arg0) {
                  onPressEmoji(arg0, false);
                }
              }
              cResult[13] = onPressEmoji;
              cResult[14] = F;
              tmp17 = F;
            } else {
              class F {
                constructor(arg0) {
                  onPressEmoji(arg0, false);
                }
              }
            }
            F = tmp17;
            if (cResult[15] === style) {
              class F {
                constructor(arg0) {
                  onPressEmoji(arg0, false);
                }
              }
              if (cResult[18] === arr3) {
                class F {
                  constructor(arg0) {
                    onPressEmoji(arg0, false);
                  }
                }
              }
              if (cResult[22] === tmp16) {
                class F {
                  constructor(arg0) {
                    onPressEmoji(arg0, false);
                  }
                }
                const mapped = arr3.map(tmp20);
                cResult[18] = arr3;
                cResult[19] = tmp16;
                cResult[20] = tmp13;
                cResult[21] = mapped;
              }
              const fn2 = function k(emoji, arg1) {
                let tmp = null;
                if (null != emoji) {
                  const obj = { emoji, selected: arg1 === closure_2, onPress: L };
                  tmp = React4(closure_13, obj, arg1);
                }
                return tmp;
              };
              cResult[22] = tmp16;
              cResult[23] = tmp13;
              cResult[24] = fn2;
              tmp20 = fn2;
            }
            const items1 = [style, tmp4.emojiRow];
            cResult[15] = style;
            cResult[16] = tmp4.emojiRow;
            cResult[17] = items1;
          }
          if (cResult[9] !== selectedEmoji) {
            class F {
              constructor(arg0) {
                onPressEmoji(arg0, false);
              }
            }
            cResult[9] = selectedEmoji;
            cResult[10] = U;
          } else {
            class F {
              constructor(arg0) {
                onPressEmoji(arg0, false);
              }
            }
          }
          const findIndexResult = arr3.findIndex(U);
          cResult[6] = arr3;
          cResult[7] = selectedEmoji;
          cResult[8] = findIndexResult;
          tmp13 = findIndexResult;
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              onPressEmoji(arg0, false);
            }
          }
          cResult[5] = tmp11;
        } else {
          class F {
            constructor(arg0) {
              onPressEmoji(arg0, false);
            }
          }
        }
        const found = frequentlyUsedReactionEmojis.filter(tmp11);
        const substr = found.slice(0, rounded - 1);
        cResult[2] = frequentlyUsedReactionEmojis;
        cResult[3] = rounded;
        cResult[4] = substr;
        arr3 = substr;
      }
    : (selectedEmoji) => {
        let animated;
        let items4;
        let items5;
        let items6;
        let items8;
        let obj11;
        let obj5;
        let str;
        let tmp10Result;
        let url;
        selectedEmoji = selectedEmoji.selectedEmoji;
        let substr;
        let memo;
        let onPressEmoji;
        const style = selectedEmoji.style;
        let tmp = closure_12();
        let obj = selectedEmoji(substr[15]);
        const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(undefined);
        const rounded = Math.floor(Math.min(onPressEmoji(substr[16])().width, ACTION_SHEET_MAX_WIDTH) / 60);
        let obj2 = selectedEmoji(substr[11]);
        const items = [onPressEmoji];
        const stateFromStores = obj2.useStateFromStores(items, () => onPressEmoji.useReducedMotion);
        const found = frequentlyUsedReactionEmojis.filter((emoji) => {
          const obj2 = { emoji, channel: "Array", intention: constants.DEFAULT_REACT_EMOJI };
          const obj = onPressEmoji(substr[17]);
          return !obj.isEmojiFilteredOrLocked(obj2);
        });
        substr = found.slice(0, rounded - 1);
        const items1 = [substr, selectedEmoji];
        memo = memo.useMemo(
          () =>
            substr.findIndex((item) => {
              const obj = selectedEmoji(substr[18]);
              return obj.areEmojisEqual(closure_1_0, item);
            }),
          items1,
        );
        const items2 = [onPressEmoji];
        const onPress = memo.useCallback((arg0) => {
          onPressEmoji(arg0, true);
        }, items2);
        const items3 = [onPressEmoji];
        onPressEmoji = memo.useCallback((arg0) => {
          onPressEmoji(arg0, false);
        }, items3);
        const obj3 = { style: items4, children: items5 };
        items4 = [style, tmp.emojiRow];
        items5 = [
          substr.map((emoji, index) => {
            let tmp = null;
            if (null != emoji) {
              const obj = { emoji, selected: index === memo, onPress };
              tmp = React4(closure_13, obj, index);
            }
            return tmp;
          }),
        ];
        const obj4 = {
          accessibilityRole: "button",
          onPress() {
            const obj = {
              onPressEmoji,
              channel: "r",
              pickerIntention: metroImportAll.DEFAULT_REACT_EMOJI,
              reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
              startExpanded: null,
            };
            const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
            openEmojiPickerActionSheet2;
            const result = openEmojiPickerActionSheet(obj, "stack");
          },
          style: items6,
          children: closure_9(onPress, obj5),
        };
        items6 = [tmp.emojiPressable];
        let selectedEmojiPressable = tmp11;
        const PressableOpacity = selectedEmoji(substr[14]).PressableOpacity;
        if (-1 === memo) {
          selectedEmojiPressable = tmp.selectedEmojiPressable;
        }
        items6[1] = selectedEmojiPressable;
        const items7 = [tmp.emojiWrapper];
        obj5 = { style: items7, children: tmp10Result };
        const tmp12 = -1 === memo && tmp.selectedEmojiWrapper;
        items7[1] = tmp12;
        if (-1 === memo) {
          const obj6 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: str, src: url };
          ({ emoji: obj7.style, customEmoji: obj7.fastImageStyle, textEmoji: obj7.textEmojiStyle } = tmp);
          str = "";
          const tmp4Result = onPressEmoji(substr[13]);
          if (null == selectedEmoji.id) {
            str = selectedEmoji.surrogates;
          }
          if (null != selectedEmoji.id) {
            const obj8 = { id: selectedEmoji.id, animated, size };
            animated = !stateFromStores;
            const getEmojiURL = onPressEmoji(substr[12]).getEmojiURL;
            onPressEmoji(substr[12]);
            if (!stateFromStores) {
              animated = selectedEmoji.animated;
            }
            url = getEmojiURL(obj8);
          } else {
            url = selectedEmoji.url;
          }
          const obj9 = { children: items8 };
          items8 = [closure_9(tmp4Result, obj6)];
          const obj10 = {
            style: tmp.customReactionOverlay,
            children: closure_9(selectedEmoji(substr[21]).ReactionIcon, obj11),
          };
          obj11 = { color: tmp.selectedCustomReactionIcon.color, style: tmp.selectedCustomReactionIcon };
          items8[1] = closure_9(onPress, obj10);
          tmp10Result = closure_11(closure_10, obj9);
        } else {
          const obj20 = { color: tmp.chooseEmojiButton.color };
          tmp10Result = closure_9(tmp2(tmp3[21]).ReactionIcon, obj20);
        }
        items5[1] = closure_9(PressableOpacity, obj4);
        return closure_11(onPress, obj3);
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx");

export default memo2Result;
