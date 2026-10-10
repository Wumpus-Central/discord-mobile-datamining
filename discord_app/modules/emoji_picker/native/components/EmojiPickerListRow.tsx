// discord_app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import native from "../../../../design/void/native.tsx";
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import shared from "../../../../design/shared.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef6820 from "../../../../../_runtime/metro/06820__.js";
import _modDef6821 from "../../../../../_runtime/metro/06821__.js";
import LockIcon from "../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import getEmojiItemUrlDefault from "../../../emojis/utils/getEmojiItemUrl.tsx";
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

require = fn;
let closure_3 = ["nativeRow"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const EmojiPickerListConstants = fn(9429);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = fn(1241).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, surrogates: null, row: null, lockContainer: null, lock: null };
const PlatformUtils = fn(1382);
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.surrogates = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj.row = { height: EmojiPickerListConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj6 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
let obj4 = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
const obj8 = _modDef683("#000000");
obj6.backgroundColor = _modDef683("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.lockContainer = obj6;
obj.lock = { width: 16, height: 16, tintColor: "white" };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiItemLockedOverlay() {
  const cResult = c.c(5);
  const tmp4 = closure_11();
  if (cResult[0] !== tmp4.lock) {
    const obj2 = { style: tmp4.lock };
    const tmp7 = options(LockIcon.LockIcon, obj2);
    cResult[0] = tmp4.lock;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.lockContainer) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = options(hasOwnProperty, { style: tmp4.lockContainer, children: tmp5 });
  cResult[2] = tmp4.lockContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj3 = { style: tmp4.lockContainer, children: tmp5 };
}) : (function EmojiItemLockedOverlay() {
  const tmp = closure_11();
  const obj = { style: tmp.lockContainer, children: options(LockIcon.LockIcon, { style: tmp.lock }) };
  return options(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiItem(emoji) {
  const cResult = c.c(28);
  emoji = emoji.emoji;
  const category = emoji.category;
  ({ disabled, onPressEmoji } = emoji);
  const onLongPressEmoji = emoji.onLongPressEmoji;
  const animateEmoji = emoji.animateEmoji;
  let surrogates = closure_11();
  if (cResult[0] === animateEmoji) {
    if (cResult[1] === emoji) {
      let image = cResult[2];
    }
    if (disabled) {
      disabled = !emoji.isSectionNitroLocked;
    }
    let disabledOverlay = disabled;
    if (disabled) {
      disabledOverlay = surrogates.disabledOverlay;
    }
    if (cResult[3] === surrogates.surrogatesFrame) {
      if (cResult[4] === disabledOverlay) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === category) {
        if (cResult[7] === emoji) {
          if (cResult[8] === onPressEmoji) {
            let tmp6 = cResult[9];
          }
          if (cResult[10] === emoji) {
            if (cResult[11] === onLongPressEmoji) {
              let tmp7 = cResult[12];
            }
            if (cResult[13] === emoji.id) {
              if (cResult[14] === emoji.surrogates) {
                if (cResult[15] === image) {
                  if (cResult[16] === surrogates.image) {
                    if (cResult[17] === surrogates.surrogates) {
                      if (cResult[19] !== disabled) {
                        let tmp20 = disabled;
                        if (disabled) {
                          tmp20 = options(closure_12, {});
                        }
                        cResult[19] = disabled;
                        cResult[20] = tmp20;
                        let tmp19 = tmp20;
                      } else {
                        tmp19 = cResult[20];
                      }
                      if (cResult[21] === emoji.name) {
                        if (cResult[22] === tmp5) {
                          if (cResult[23] === tmp6) {
                            if (cResult[24] === tmp7) {
                              if (cResult[25] === tmp8) {
                                if (cResult[26] === tmp19) {
                                  let tmp23 = cResult[27];
                                }
                                return tmp23;
                              }
                            }
                          }
                        }
                      }
                      const obj2 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: tmp5, onPress: tmp6, onLongPress: tmp7, children: null };
                      const items = [cResult[18], tmp19];
                      obj2.children = items;
                      const tmp25 = collapsed(Pressables.PressableOpacity, obj2);
                      cResult[21] = emoji.name;
                      cResult[22] = tmp5;
                      cResult[23] = tmp6;
                      cResult[24] = tmp7;
                      cResult[25] = cResult[18];
                      cResult[26] = tmp19;
                      cResult[27] = tmp25;
                      tmp23 = tmp25;
                    }
                  }
                }
              }
            }
            if (null == emoji.id) {
              const obj3 = { allowFontScaling: false, style: surrogates.surrogates, children: emoji.surrogates };
              const tmp11 = options(native.LegacyText, obj3);
              cResult[13] = emoji.id;
              cResult[14] = emoji.surrogates;
              cResult[15] = image;
              image = surrogates.image;
              cResult[16] = image;
              surrogates = surrogates.surrogates;
              cResult[17] = surrogates;
              cResult[18] = tmp11;
            }
            const obj4 = { resizeMode: "contain", style: surrogates.image, placeholder: null, source: null, usesSmallCache: true };
            const tmp14 = FastImageDefault;
            if (tmpResult.isThemeDark(ThemeStore.theme)) {
              let tmp13Result = _modDef6820;
            } else {
              tmp13Result = _modDef6821;
            }
            obj4.placeholder = tmp13Result;
            const obj5 = { uri: image };
            obj4.source = obj5;
            options(tmp14, obj4);
            tmpResult = shared;
          }
          const fn2 = function f() {
            return onLongPressEmoji(emoji);
          };
          cResult[10] = emoji;
          cResult[11] = onLongPressEmoji;
          cResult[12] = fn2;
          tmp7 = fn2;
        }
      }
      const fn = function k() {
        return onPressEmoji(emoji, category);
      };
      cResult[6] = category;
      cResult[7] = emoji;
      cResult[8] = onPressEmoji;
      cResult[9] = fn;
      tmp6 = fn;
    }
    const items1 = [surrogates.surrogatesFrame, disabledOverlay];
    cResult[3] = surrogates.surrogatesFrame;
    cResult[4] = disabledOverlay;
    cResult[5] = items1;
    tmp5 = items1;
  }
  const tmp4 = getEmojiItemUrlDefault(emoji, animateEmoji, IMAGE_SIZE);
  cResult[0] = animateEmoji;
  cResult[1] = emoji;
  cResult[2] = tmp4;
  image = tmp4;
}) : (function EmojiItem(emoji) {
  emoji = emoji.emoji;
  ({ category: importDefault, disabled, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3 } = emoji);
  ({ animateEmoji, isSectionNitroLocked } = emoji);
  const tmp = closure_11();
  let tmp3 = dependencyMap;
  if (disabled) {
    disabled = !isSectionNitroLocked;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: null, onPress: null, onLongPress: null, children: null };
  const items = [tmp.surrogatesFrame, ];
  let disabledOverlay = disabled;
  if (disabled) {
    disabledOverlay = tmp.disabledOverlay;
  }
  items[1] = disabledOverlay;
  obj.style = items;
  obj.onPress = function onPress() {
    return dependencyMap(emoji, importDefault);
  };
  obj.onLongPress = function onLongPress() {
    return closure_1_3(emoji);
  };
  if (null != emoji.id) {
    const obj2 = { resizeMode: "contain", style: tmp.image, placeholder: null, source: null, usesSmallCache: true };
    const tmp2Result = FastImageDefault;
    if (tmp6Result.isThemeDark(ThemeStore.theme)) {
      tmp3 = 6820;
      let tmp2Result2 = importDefault(tmp3);
    } else {
      tmp2Result2 = _modDef6821;
    }
    obj2.placeholder = tmp2Result2;
    const obj3 = { uri: tmp4 };
    obj2.source = obj3;
    options(tmp2Result, obj2);
    tmp6Result = shared;
  } else {
    const obj4 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
    const tmp8 = options(native.LegacyText, obj4);
    const items1 = [tmp8, ];
    if (disabled) {
      disabled = options(closure_12, {});
    }
    items1[1] = disabled;
    obj.children = items1;
    return collapsed(Pressables.PressableOpacity, obj);
  }
  tmp4 = getEmojiItemUrlDefault(emoji, animateEmoji, IMAGE_SIZE);
});
let closure_13 = tmp6;
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerListRow(emojis) {
  const cResult = c.c(22);
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
          if (cResult[4] === rowSize) {
            let tmp3 = cResult[5];
          }
          if (cResult[6] === containerWidth) {
            if (cResult[7] === isSectionNitroLocked) {
              if (cResult[8] === tmp3) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === category) {
                if (cResult[11] === emojis) {
                  if (cResult[12] === onPressEmoji) {
                    let tmp12 = cResult[13];
                  }
                  if (cResult[14] === emojis) {
                    if (cResult[15] === onLongPressEmoji) {
                      let tmp13 = cResult[16];
                    }
                    if (cResult[17] === tmp2.row) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp12) {
                          if (cResult[20] === tmp13) {
                            let tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                      }
                    }
                    class R {
                      constructor(arg0) {
                        closure_0 = emojis;
                        found = emojis.find(() => { ... });
                        if (null != found) {
                          tmp2 = onLongPressEmoji;
                          tmp3 = onLongPressEmoji(found);
                        }
                        return;
                      }
                    }
                    const obj2 = { style: tmp2.row, rowData: tmp8, onPressEmoji: tmp12, onLongPressEmoji: tmp13 };
                    const tmp17 = options(EmojiPickerListRowViewDefault, obj2);
                    cResult[17] = tmp2.row;
                    cResult[18] = tmp8;
                    cResult[19] = tmp12;
                    cResult[20] = tmp13;
                    cResult[21] = tmp17;
                    tmp14 = tmp17;
                  }
                  class R {
                    constructor(arg0) {
                      closure_0 = emojis;
                      found = emojis.find(() => { ... });
                      if (null != found) {
                        tmp2 = onLongPressEmoji;
                        tmp3 = onLongPressEmoji(found);
                      }
                      return;
                    }
                  }
                  cResult[14] = emojis;
                  cResult[15] = onLongPressEmoji;
                  cResult[16] = R;
                  tmp13 = R;
                }
              }
              class C {
                constructor(arg0) {
                  closure_0 = emojis;
                  found = emojis.find(() => { ... });
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
      class R {
        constructor(arg0) {
          closure_0 = emojis;
          found = emojis.find(() => { ... });
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
}) : (function EmojiPickerListRow(emojis) {
  emojis = emojis.emojis;
  ({ emojisDisabled, category: importDefault, rowSize, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
      } else {
        let id = tmp4.id;
        if (id == null) {
          id = null;
        }
        let obj = { id, name: null, url: null, animated: null, disabled: null };
        let str = tmp4.name;
        if (str == null) {
          str = "";
        }
        obj.name = str;
        obj.url = getEmojiItemUrlDefault(tmp4, animateEmoji, IMAGE_SIZE);
        obj.animated = true === tmp4.animated && animateEmoji;
        let tmp10 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        obj.disabled = tmp10;
        let arr3 = items.push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj2 = {
    style: closure_11().row,
    rowData: { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked },
    onPressEmoji(arg0) {
      const nativeEvent = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        dependencyMap(found, importDefault);
      }
    },
    onLongPressEmoji(callback) {
      const nativeEvent = callback;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_3(found);
      }
    }
  };
  return options(EmojiPickerListRowViewDefault, obj2);
}));
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerListRow(arg0) {
  const cResult = c.c(14);
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
                    if (cResult[9] === tmp2) {
                      let tmp3 = cResult[10];
                    }
                    if (cResult[11] === tmp3) {
                      if (cResult[12] === tmp2.row) {
                        let tmp15 = cResult[13];
                      }
                      return tmp15;
                    }
                    const obj2 = { style: tmp2.row, children: tmp3 };
                    const tmp18 = options(hasOwnProperty, obj2);
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
        let arr = items.push(options(hasOwnProperty, obj3, sum));
      } else {
        let obj4 = { emoji: tmp6, category, animateEmoji, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        let hasItem = null != tmp6.id;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp6.id);
        }
        obj4.disabled = hasItem;
        obj4.onPressEmoji = onPressEmoji;
        obj4.onLongPressEmoji = onLongPressEmoji;
        obj4.isSectionNitroLocked = isSectionNitroLocked;
        let arr3 = items.push(options(closure_13, obj4, sum));
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
}) : (function EmojiPickerListRow(arg0) {
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
        let arr = items.push(options(hasOwnProperty, obj2, sum));
      } else {
        let obj = { emoji: tmp4, category, animateEmoji, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        let hasItem = null != tmp4.id;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        obj.disabled = hasItem;
        obj.onPressEmoji = onPressEmoji;
        obj.onLongPressEmoji = onLongPressEmoji;
        obj.isSectionNitroLocked = isSectionNitroLocked;
        let arr3 = items.push(options(closure_13, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  return options(hasOwnProperty, { style: tmp.row, children: items });
}));
ReactCompilerGating = fn(558);
const alphaResult = _modDef683("#000000").alpha(0.2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiItem = tmp6;
export const EmojiPickerListRow = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerListRow(nativeRow) {
  const cResult = c.c(7);
  if (cResult[0] !== nativeRow) {
    nativeRow = nativeRow.nativeRow;
    const tmp8 = _objectWithoutProperties(nativeRow, closure_3);
    cResult[0] = nativeRow;
    cResult[1] = tmp8;
    cResult[2] = nativeRow;
    let isAndroidResult = nativeRow;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    isAndroidResult = cResult[2];
  }
  if (undefined === isAndroidResult) {
    isAndroidResult = PlatformUtils2.isAndroid();
    const tmpResult = PlatformUtils2;
  }
  if (isAndroidResult) {
    if (cResult[3] !== tmp4) {
      const obj2 = {};
      const merged = Object.assign(tmp4);
      const tmp22 = options(closure_14, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp22;
    }
  } else {
    if (cResult[5] !== tmp4) {
      const obj3 = {};
      const merged1 = Object.assign(tmp4);
      const tmp15 = options(closure_15, obj3);
      cResult[5] = tmp4;
      cResult[6] = tmp15;
      let tmp9 = tmp15;
    } else {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
}) : (function EmojiPickerListRow(nativeRow) {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    nativeRow = PlatformUtils2.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const merged1 = Object.assign(merged);
  return options(nativeRow ? closure_14 : closure_15, {});
}));