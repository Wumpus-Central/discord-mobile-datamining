// === Module 9925: EmojiPickerListRow ===

// Module 9925 (EmojiPickerListRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import native from "native" /* 1188 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import shared from "shared" /* 4735 */;
import LockIcon from "LockIcon" /* 5886 */;
import Pressables from "Pressables" /* 5916 */;
import FastImageDefault from "FastImage" /* 5981 */;
import AssetRegistryDefault from "AssetRegistry" /* 6633 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6634 */;
import getEmojiItemUrlDefault from "getEmojiItemUrl" /* 9926 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 9927 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9882 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let emoji, nativeRow;

let StyleSheet;
let alphaResult;
let c10;
let c9;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let closure_3 = ["nativeRow"];
({ View: hasOwnProperty, StyleSheet } = react_native);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const ROW_HEIGHT = EmojiPickerListConstants.ROW_HEIGHT;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: obj2, surrogates: obj3, row: { height: ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, lockContainer: obj4, lock: { width: 16, height: 16, tintColor: "white" } };
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
obj3 = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { backgroundColor: alphaResult.hex(), alignItems: "center", justifyContent: "center" };
const obj6 = _modDef683("#000000");
alphaResult = obj6.alpha(0.2);
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_11();
  if (cResult[0] !== tmp4.lock) {
    const obj2 = { style: tmp4.lock };
    const tmp7 = React4(LockIcon.LockIcon, obj2);
    cResult[0] = tmp4.lock;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.lockContainer) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.lockContainer, children: tmp5 };
  const tmp9 = React4(hasOwnProperty, obj3);
  cResult[2] = tmp4.lockContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  let obj2;
  const tmp = closure_11();
  const obj = { style: tmp.lockContainer, children: React4(LockIcon.LockIcon, obj2) };
  obj2 = { style: tmp.lock };
  return React4(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let disabled;
  let items;
  let obj4;
  let onPressEmoji;
  let tmp16Result;
  const obj = react2;
  const cResult = obj.c(28);
  emoji = emoji.emoji;
  const category = emoji.category;
  ({ disabled, onPressEmoji } = emoji);
  const onLongPressEmoji = emoji.onLongPressEmoji;
  const animateEmoji = emoji.animateEmoji;
  const isSectionNitroLocked = emoji.isSectionNitroLocked;
  const tmp4 = closure_11();
  if (cResult[0] === animateEmoji) {
    let tmp5;
    if (cResult[1] === emoji) {
      tmp5 = cResult[2];
    }
    if (disabled) {
      disabled = !isSectionNitroLocked;
    }
    if (cResult[3] === tmp4.surrogatesFrame) {
      let tmp8;
      if (cResult[4] === (disabled && tmp4.disabledOverlay)) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === category) {
        if (cResult[7] === emoji) {
          let tmp9;
          if (cResult[8] === onPressEmoji) {
            tmp9 = cResult[9];
          }
          if (cResult[10] === emoji) {
            let tmp10;
            let tmp15Result;
            if (cResult[11] === onLongPressEmoji) {
              tmp10 = cResult[12];
            }
            if (cResult[13] === emoji.id) {
              if (cResult[14] === emoji.surrogates) {
                if (cResult[15] === tmp5) {
                  if (cResult[16] === tmp4.image) {
                    let tmp11;
                    let tmp20;
                    if (cResult[17] === tmp4.surrogates) {
                      tmp11 = cResult[18];
                    }
                    if (cResult[19] !== disabled) {
                      const tmp21 = disabled && React4(closure_12, {});
                      cResult[19] = disabled;
                      cResult[20] = tmp21;
                      tmp20 = tmp21;
                    } else {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] === emoji.name) {
                      if (cResult[22] === tmp8) {
                        if (cResult[23] === tmp9) {
                          if (cResult[24] === tmp10) {
                            if (cResult[25] === tmp11) {
                              let tmp24;
                              if (cResult[26] === tmp20) {
                                tmp24 = cResult[27];
                              }
                              return tmp24;
                            }
                          }
                        }
                      }
                    }
                    const obj2 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: tmp8, onPress: tmp9, onLongPress: tmp10, children: items };
                    items = [tmp11, tmp20];
                    const tmp26 = authStore(Pressables.PressableOpacity, obj2);
                    cResult[21] = emoji.name;
                    cResult[22] = tmp8;
                    cResult[23] = tmp9;
                    cResult[24] = tmp10;
                    cResult[25] = tmp11;
                    cResult[26] = tmp20;
                    cResult[27] = tmp26;
                    tmp24 = tmp26;
                  }
                }
              }
            }
            if (null != emoji.id) {
              const obj3 = { resizeMode: "contain", style: tmp4.image, placeholder: tmp16Result, source: obj4, usesSmallCache: true };
              const tmp17 = FastImageDefault;
              const tmpResult = shared;
              if (tmpResult.isThemeDark(ThemeStore.theme)) {
                tmp16Result = AssetRegistryDefault;
              } else {
                tmp16Result = AssetRegistryDefault2;
              }
              obj4 = { uri: tmp5 };
              tmp15Result = React4(tmp17, obj3);
            } else {
              const obj5 = { allowFontScaling: false, style: tmp4.surrogates, children: emoji.surrogates };
              tmp15Result = React4(native.LegacyText, obj5);
            }
            cResult[13] = emoji.id;
            cResult[14] = emoji.surrogates;
            cResult[15] = tmp5;
            cResult[16] = tmp4.image;
            cResult[17] = tmp4.surrogates;
            cResult[18] = tmp15Result;
            tmp11 = tmp15Result;
          }
          const fn2 = function k() {
            return onLongPressEmoji(emoji);
          };
          cResult[10] = emoji;
          cResult[11] = onLongPressEmoji;
          cResult[12] = fn2;
          tmp10 = fn2;
        }
      }
      const fn = function f() {
        return onPressEmoji(emoji, category);
      };
      cResult[6] = category;
      cResult[7] = emoji;
      cResult[8] = onPressEmoji;
      cResult[9] = fn;
      tmp9 = fn;
    }
    const items1 = [tmp4.surrogatesFrame, disabled && tmp4.disabledOverlay];
    cResult[3] = tmp4.surrogatesFrame;
    cResult[4] = disabled && tmp4.disabledOverlay;
    cResult[5] = items1;
    tmp8 = items1;
  }
  const tmp6 = getEmojiItemUrlDefault(emoji, animateEmoji, IMAGE_SIZE);
  cResult[0] = animateEmoji;
  cResult[1] = emoji;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((emoji) => {
  let animateEmoji;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let disabled;
  let isSectionNitroLocked;
  let items;
  let items1;
  let obj3;
  let tmp10Result;
  let tmp2Result2;
  let tmp8;
  emoji = emoji.emoji;
  ({ category: closure_129_1, disabled, onPressEmoji: closure_129_2, onLongPressEmoji: closure_129_3 } = emoji);
  ({ animateEmoji, isSectionNitroLocked } = emoji);
  const tmp = closure_11();
  const tmp4 = getEmojiItemUrlDefault(emoji, animateEmoji, IMAGE_SIZE);
  if (disabled) {
    disabled = !isSectionNitroLocked;
  }
  const obj = {
    accessibilityRole: "button",
    accessibilityLabel: emoji.name,
    style: items,
    onPress() {
      return closure_1_2(emoji, closure_1_1);
    },
    onLongPress() {
      return closure_1_3(emoji);
    },
    children: items1
  };
  items = [tmp.surrogatesFrame, ];
  let disabledOverlay = disabled;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabledOverlay = tmp.disabledOverlay;
  }
  items[1] = disabledOverlay;
  if (null != emoji.id) {
    const obj2 = { resizeMode: "contain", style: tmp.image, placeholder: tmp2Result2, source: obj3, usesSmallCache: true };
    const tmp2Result = FastImageDefault;
    const tmp6Result = shared;
    if (tmp6Result.isThemeDark(ThemeStore.theme)) {
      tmp2Result2 = AssetRegistryDefault;
    } else {
      tmp2Result2 = AssetRegistryDefault2;
    }
    obj3 = { uri: tmp4 };
    tmp10Result = React4(tmp2Result, obj2);
    tmp8 = React4;
  } else {
    tmp8 = React4;
    const obj4 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
    tmp10Result = React4(native.LegacyText, obj4);
  }
  items1 = [tmp10Result, ];
  if (disabled) {
    disabled = tmp8(closure_12, {});
  }
  items1[1] = disabled;
  return authStore(PressableOpacity, obj);
});
let closure_13 = tmp8;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((emojis) => {
  let animateEmoji;
  let category;
  let containerWidth;
  let emojisDisabled;
  let isSectionNitroLocked;
  let onPressEmoji;
  let row;
  let rowSize;
  const obj = react2;
  const cResult = obj.c(22);
  emojis = emojis.emojis;
  ({ emojisDisabled, category } = emojis);
  ({ rowSize, containerWidth, row, onPressEmoji } = emojis);
  const onLongPressEmoji = emojis.onLongPressEmoji;
  ({ animateEmoji, isSectionNitroLocked } = emojis);
  const tmp2 = closure_11();
  if (cResult[0] === animateEmoji) {
    if (cResult[1] === emojis) {
      if (cResult[2] === emojisDisabled) {
        if (cResult[3] === row) {
          let tmp3;
          if (cResult[4] === rowSize) {
            tmp3 = cResult[5];
          }
          if (cResult[6] === containerWidth) {
            if (cResult[7] === isSectionNitroLocked) {
              let tmp8;
              if (cResult[8] === tmp3) {
                tmp8 = cResult[9];
              }
              if (cResult[10] === category) {
                if (cResult[11] === emojis) {
                  let tmp12;
                  if (cResult[12] === onPressEmoji) {
                    tmp12 = cResult[13];
                  }
                  if (cResult[14] === emojis) {
                    let tmp13;
                    if (cResult[15] === onLongPressEmoji) {
                      tmp13 = cResult[16];
                    }
                    if (cResult[17] === tmp2.row) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp12) {
                          let tmp14;
                          if (cResult[20] === tmp13) {
                            tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                      }
                    }
                    class N {
                      constructor(arg0) {
                        closure_0 = emojis;
                        found = emojis.find(() => { /* body not rendered: F140279 */ });
                        if (null != found) {
                          tmp2 = onLongPressEmoji;
                          tmp3 = onLongPressEmoji(found);
                        }
                        return;
                      }
                    }
                    const obj2 = { style: tmp2.row, rowData: tmp8, onPressEmoji: tmp12, onLongPressEmoji: tmp13 };
                    const tmp17 = React4(EmojiPickerListRowViewDefault, obj2);
                    cResult[17] = tmp2.row;
                    cResult[18] = tmp8;
                    cResult[19] = tmp12;
                    cResult[20] = tmp13;
                    cResult[21] = tmp17;
                    tmp14 = tmp17;
                  }
                  class N {
                    constructor(arg0) {
                      closure_0 = emojis;
                      found = emojis.find(() => { /* body not rendered: F140279 */ });
                      if (null != found) {
                        tmp2 = onLongPressEmoji;
                        tmp3 = onLongPressEmoji(found);
                      }
                      return;
                    }
                  }
                  cResult[14] = emojis;
                  cResult[15] = onLongPressEmoji;
                  cResult[16] = N;
                  tmp13 = N;
                }
              }
              class C {
                constructor(arg0) {
                  closure_0 = emojis;
                  found = emojis.find(() => { /* body not rendered: F140278 */ });
                  if (null != found) {
                    tmp2 = onPressEmoji;
                    tmp3 = category;
                    tmp4 = onPressEmoji(found, category);
                  }
                  return;
                }
              }
              cResult[10] = category;
              cResult[11] = emojis;
              cResult[12] = onPressEmoji;
              cResult[13] = C;
              tmp12 = C;
            }
          }
          tmp9[0] = containerWidth;
          tmp9[1] = PADDING_VERTICAL;
          tmp9[2] = IMAGE_SIZE;
          tmp9[3] = tmp3;
          tmp9[4] = isSectionNitroLocked;
          cResult[6] = containerWidth;
          cResult[7] = isSectionNitroLocked;
          cResult[8] = tmp3;
          cResult[9] = tmp9;
          tmp8 = tmp9;
        }
      }
    }
  }
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      class N {
        constructor(arg0) {
          closure_0 = emojis;
          found = emojis.find(() => { /* body not rendered: F140279 */ });
          if (null != found) {
            tmp2 = onLongPressEmoji;
            tmp3 = onLongPressEmoji(found);
          }
          return;
        }
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  cResult[0] = animateEmoji;
  cResult[1] = emojis;
  cResult[2] = emojisDisabled;
  cResult[3] = row;
  cResult[4] = rowSize;
  cResult[5] = items;
  tmp3 = items;
}) : ((emojis) => {
  let animateEmoji;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let containerWidth;
  let emojisDisabled;
  let isSectionNitroLocked;
  let obj3;
  let row;
  let rowSize;
  let str;
  let tmp10;
  emojis = emojis.emojis;
  ({ emojisDisabled, category: closure_129_1, rowSize, onPressEmoji: closure_129_2, onLongPressEmoji: closure_129_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  const tmp = closure_11();
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
      } else {
        let id = tmp4.id;
        let push = items.push;
        if (id == null) {
          id = null;
        }
        let obj = { id, name: str, url: getEmojiItemUrlDefault(tmp4, animateEmoji, IMAGE_SIZE), animated: true === tmp4.animated && animateEmoji, disabled: tmp10 };
        str = tmp4.name;
        if (str == null) {
          str = "";
        }
        tmp10 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        let arr3 = push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj2 = {
    style: tmp.row,
    rowData: obj3,
    onPressEmoji(arg0) {
      let closure_0 = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_2(found, closure_1_1);
      }
    },
    onLongPressEmoji(callback) {
      let closure_0 = callback;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_3(found);
      }
    }
  };
  obj3 = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  return React4(EmojiPickerListRowViewDefault, obj2);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animateEmoji;
  let category;
  let emojis;
  let emojisDisabled;
  let hasItem;
  let isSectionNitroLocked;
  let onLongPressEmoji;
  let onPressEmoji;
  let row;
  let rowSize;
  const obj = react2;
  const cResult = obj.c(14);
  ({ emojis, emojisDisabled, category, rowSize, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp2 = closure_11();
  if (cResult[0] === animateEmoji) {
    if (cResult[1] === category) {
      if (cResult[2] === emojis) {
        if (cResult[3] === emojisDisabled) {
          if (cResult[4] === isSectionNitroLocked) {
            if (cResult[5] === onLongPressEmoji) {
              if (cResult[6] === onPressEmoji) {
                if (cResult[7] === row) {
                  if (cResult[8] === rowSize) {
                    let tmp3;
                    if (cResult[9] === tmp2) {
                      tmp3 = cResult[10];
                    }
                    if (cResult[11] === tmp3) {
                      let tmp15;
                      if (cResult[12] === tmp2.row) {
                        tmp15 = cResult[13];
                      }
                      return tmp15;
                    }
                    const obj2 = { style: tmp2.row, children: tmp3 };
                    const tmp18 = React4(hasOwnProperty, obj2);
                    cResult[11] = tmp3;
                    cResult[12] = tmp2.row;
                    cResult[13] = tmp18;
                    tmp15 = tmp18;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp6 = emojis[sum];
      if (undefined === tmp6) {
        let obj3 = { style: tmp2.image };
        let arr = items.push(React4(hasOwnProperty, obj3, sum));
      } else {
        let obj4 = { emoji: tmp6, category, animateEmoji, disabled: hasItem, onPressEmoji, onLongPressEmoji, isSectionNitroLocked };
        hasItem = null != tmp6.id;
        let push = items.push;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp6.id);
        }
        let arr3 = push(React4(closure_13, obj4, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  cResult[0] = animateEmoji;
  cResult[1] = category;
  cResult[2] = emojis;
  cResult[3] = emojisDisabled;
  cResult[4] = isSectionNitroLocked;
  cResult[5] = onLongPressEmoji;
  cResult[6] = onPressEmoji;
  cResult[7] = row;
  cResult[8] = rowSize;
  cResult[9] = tmp2;
  cResult[10] = items;
  tmp3 = items;
}) : ((arg0) => {
  let animateEmoji;
  let category;
  let emojis;
  let emojisDisabled;
  let hasItem;
  let isSectionNitroLocked;
  let onLongPressEmoji;
  let onPressEmoji;
  let row;
  let rowSize;
  ({ emojisDisabled, rowSize } = arg0);
  ({ emojis, category, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp = closure_11();
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let obj2 = { style: tmp.image };
        let arr = items.push(React4(hasOwnProperty, obj2, sum));
      } else {
        let obj = { emoji: tmp4, category, animateEmoji, disabled: hasItem, onPressEmoji, onLongPressEmoji, isSectionNitroLocked };
        hasItem = null != tmp4.id;
        let push = items.push;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        let arr3 = push(React4(closure_13, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj3 = { style: tmp.row, children: items };
  return React4(hasOwnProperty, obj3);
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(ReactCompilerGating.isReactCompilerEnabled() ? ((nativeRow) => {
  let isAndroidResult;
  let tmp4;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== nativeRow) {
    nativeRow = nativeRow.nativeRow;
    const tmp8 = _objectWithoutProperties(nativeRow, closure_3);
    cResult[0] = nativeRow;
    cResult[1] = tmp8;
    cResult[2] = nativeRow;
    isAndroidResult = nativeRow;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    isAndroidResult = cResult[2];
  }
  if (undefined === isAndroidResult) {
    const tmpResult = PlatformUtils;
    isAndroidResult = tmpResult.isAndroid();
  }
  if (isAndroidResult) {
    let tmp16;
    if (cResult[3] !== tmp4) {
      const obj2 = {};
      const merged = Object.assign(tmp4);
      const tmp22 = React4(closure_14, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp22;
      tmp16 = tmp22;
    } else {
      tmp16 = cResult[4];
    }
    tmp9 = tmp16;
  } else if (cResult[5] !== tmp4) {
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    const tmp15 = React4(closure_15, obj3);
    cResult[5] = tmp4;
    cResult[6] = tmp15;
    tmp9 = tmp15;
  } else {
    tmp9 = cResult[6];
  }
  return tmp9;
}) : ((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    const obj = PlatformUtils;
    nativeRow = obj.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const obj2 = {};
  const tmp5 = nativeRow ? closure_14 : closure_15;
  const merged1 = Object.assign(merged);
  return React4(tmp5, obj2);
}));
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiItem = tmp8;
export const EmojiPickerListRow = memo3Result;