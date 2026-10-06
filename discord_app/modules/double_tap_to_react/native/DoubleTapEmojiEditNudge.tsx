// === Module 11376: DoubleTapEmojiEditNudge ===

// Module 11376 (DoubleTapEmojiEditNudge)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2028 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7638 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import DimensionsStore from "DimensionsStore" /* 1485 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3, c4, dependencyMap;

let c10;
let c9;
let closure_12;
let unpackModuleId;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ EMOJI_URL_BASE_SIZE: c9, EmojiIntention: c10 } = EmojiConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const hitSlop = { left: 8, right: 8 };
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { doubleTapEmojiContainer: { marginHorizontal: nativeDefault.space.PX_4 }, doubleTapTextEmoji: { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, doubleTapCustomEmoji: size, doubleTapEmojiEditNudgeContainer: { marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }, editButton: { marginHorizontal: nativeDefault.space.PX_4 } };
  ({ marginHorizontal: nativeDefault.space.PX_4 });
  size = { height: 16 * arg0, width: 16 * arg0 };
  ({ fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  ({ marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" });
  ({ marginHorizontal: nativeDefault.space.PX_4 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let emojiId;
  let emojiName;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  const _location = location.location;
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  if (cResult[0] !== setting) {
    const tmpResult = DoubleTapToReactUtils;
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    cResult[0] = setting;
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = DoubleTapToReactUtils;
    const fallbackDoubleTapDisambiguatedEmoji = tmpResult2.getFallbackDoubleTapDisambiguatedEmoji();
    cResult[2] = fallbackDoubleTapDisambiguatedEmoji;
    tmp7 = fallbackDoubleTapDisambiguatedEmoji;
  } else {
    tmp7 = cResult[2];
  }
  ({ emojiId, emojiName } = setting);
  let tmp9 = null;
  if (true !== setting.disableDoubleTap) {
    if (null == emojiId) {
      if (null == emojiName) {
        let tmp10;
        if (null != tmp7) {
          if (cResult[3] !== _location) {
            const obj2 = { location: _location, emoji: tmp7 };
            const tmp13 = unpackModuleId(closure_15, obj2);
            cResult[3] = _location;
            cResult[4] = tmp13;
            tmp10 = tmp13;
          } else {
            tmp10 = cResult[4];
          }
        }
        tmp9 = tmp10;
      }
    }
    let tmp14 = null;
    if (null != tmp5) {
      if (cResult[5] === tmp5) {
        let tmp15;
        if (cResult[6] === _location) {
          tmp15 = cResult[7];
        }
        tmp14 = tmp15;
      }
      const obj3 = { location: _location, emoji: tmp5 };
      const tmp18 = unpackModuleId(closure_15, obj3);
      cResult[5] = tmp5;
      cResult[6] = _location;
      cResult[7] = tmp18;
      tmp15 = tmp18;
    }
    tmp10 = tmp14;
  }
  return tmp9;
}) : ((location) => {
  const _location = location.location;
  let setting;
  const DoubleTapReactionEmoji = setting(2028).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = DoubleTapToReactUtils;
    return obj.disambiguatedEmojiFromSettingsValue(setting);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = setting(dependencyMap[13]);
    return obj.getFallbackDoubleTapDisambiguatedEmoji();
  }, []);
  const items1 = [setting];
  let tmp4 = null;
  if (true !== setting.disableDoubleTap) {
    if (!react.useMemo(() => {
      let emojiId;
      let emojiName;
      ({ emojiId, emojiName } = setting);
      let tmp = null != emojiId && "0" !== emojiId;
      if (!tmp) {
        tmp = null != emojiName && "" !== emojiName;
        const tmp2 = null != emojiName && "" !== emojiName;
      }
      return tmp;
    }, items1)) {
      let tmp7;
      if (null != memo1) {
        let obj = { location: _location, emoji: memo1 };
        tmp7 = closure_11(closure_15, obj);
      }
      tmp4 = tmp7;
    }
    let tmp8 = null;
    if (null != memo) {
      const obj2 = { location: _location, emoji: memo };
      tmp8 = closure_11(closure_15, obj2);
    }
    tmp7 = tmp8;
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let _location;
  let emojiURL;
  let intl;
  let tmp5;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  let tmp = _location;
  let obj = _location(576);
  const cResult = obj.c(26);
  _location = location.location;
  const emoji = location.emoji;
  let obj2 = _location(1487);
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function c(arg0) {
      return arg0.byAppEntry[appEntryKey].fontScale;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = DimensionsStore(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn2 = function f() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[2] = items;
    cResult[3] = fn2;
    tmp8 = fn2;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmp11 = closure_14(tmp6);
  if (cResult[4] === emoji.animated) {
    if (cResult[5] === emoji.id) {
      if (cResult[6] === emoji.url) {
        let tmp12;
        if (cResult[7] === stateFromStores) {
          tmp12 = cResult[8];
        }
        if (cResult[9] !== _location) {
          class R {
            constructor() {
              tmp = location(closure_1_2[17]);
              obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
              openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
              closure_0 = closure_1_3(async (arg0) => {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_2 = tmp;
                        let closure_1 = tmp4;
                        const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                        ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                        const obj7 = appEntryKey(dependencyMap[18]);
                        obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                        const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                        const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                        ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                        c3 = 1;
                        c4 = 1;
                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj17 = { emoji };
                      const obj = emoji(dependencyMap[19]);
                      const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c4 = 3;
                    throw tmp11;
                  }
                }
              });
              obj.onPressEmoji = function() {
                return closure_0(...arguments);
              };
              result = openEmojiPickerActionSheet(obj, "stack");
              return;
            }
          }
          cResult[9] = _location;
          cResult[10] = R;
        } else {
          class R {
            constructor() {
              tmp = location(closure_1_2[17]);
              obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
              openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
              closure_0 = closure_1_3(async (arg0) => {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_2 = tmp;
                        let closure_1 = tmp4;
                        const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                        ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                        const obj7 = appEntryKey(dependencyMap[18]);
                        obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                        const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                        const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                        ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                        c3 = 1;
                        c4 = 1;
                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj17 = { emoji };
                      const obj = emoji(dependencyMap[19]);
                      const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c4 = 3;
                    throw tmp11;
                  }
                }
              });
              obj.onPressEmoji = function() {
                return closure_0(...arguments);
              };
              result = openEmojiPickerActionSheet(obj, "stack");
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              tmp = location(closure_1_2[17]);
              obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
              openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
              closure_0 = closure_1_3(async (arg0) => {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_2 = tmp;
                        let closure_1 = tmp4;
                        const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                        ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                        const obj7 = appEntryKey(dependencyMap[18]);
                        obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                        const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                        const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                        ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                        c3 = 1;
                        c4 = 1;
                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj17 = { emoji };
                      const obj = emoji(dependencyMap[19]);
                      const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c4 = 3;
                    throw tmp11;
                  }
                }
              });
              obj.onPressEmoji = function() {
                return closure_0(...arguments);
              };
              result = openEmojiPickerActionSheet(obj, "stack");
              return;
            }
          }
          let obj3 = { color: "text-subtle", variant: "text-sm/normal", children: intl.string(tmp(1126).t["1EUr/W"]) };
          const Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          cResult[11] = closure_11(Text, obj3);
          const tmp19 = closure_11(Text, obj3);
        } else {
          class R {
            constructor() {
              tmp = location(closure_1_2[17]);
              obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
              openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
              closure_0 = closure_1_3(async (arg0) => {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_2 = tmp;
                        let closure_1 = tmp4;
                        const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                        ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                        const obj7 = appEntryKey(dependencyMap[18]);
                        obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                        const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                        const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                        ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                        c3 = 1;
                        c4 = 1;
                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj17 = { emoji };
                      const obj = emoji(dependencyMap[19]);
                      const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c4 = 3;
                    throw tmp11;
                  }
                }
              });
              obj.onPressEmoji = function() {
                return closure_0(...arguments);
              };
              result = openEmojiPickerActionSheet(obj, "stack");
              return;
            }
          }
        }
        if (null == emoji.id) {
          class R {
            constructor() {
              tmp = location(closure_1_2[17]);
              obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
              openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
              closure_0 = closure_1_3(async (arg0) => {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_2 = tmp;
                        let closure_1 = tmp4;
                        const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                        ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                        const obj7 = appEntryKey(dependencyMap[18]);
                        obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                        const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                        const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                        ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                        c3 = 1;
                        c4 = 1;
                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj17 = { emoji };
                      const obj = emoji(dependencyMap[19]);
                      const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c4 = 3;
                    throw tmp11;
                  }
                }
              });
              obj.onPressEmoji = function() {
                return closure_0(...arguments);
              };
              result = openEmojiPickerActionSheet(obj, "stack");
              return;
            }
          }
        }
        if (cResult[12] === tmp12) {
          class R {
            constructor() {
              tmp = location(closure_1_2[17]);
              obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
              openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
              closure_0 = closure_1_3(async (arg0) => {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_2 = tmp;
                        let closure_1 = tmp4;
                        const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                        ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                        const obj7 = appEntryKey(dependencyMap[18]);
                        obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                        const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                        const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                        ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                        c3 = 1;
                        c4 = 1;
                        const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj17 = { emoji };
                      const obj = emoji(dependencyMap[19]);
                      const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c4 = 3;
                    throw tmp11;
                  }
                }
              });
              obj.onPressEmoji = function() {
                return closure_0(...arguments);
              };
              result = openEmojiPickerActionSheet(obj, "stack");
              return;
            }
          }
        }
        let obj4 = { style: null, fastImageStyle: null, textEmojiStyle: null, src: tmp12, name: str };
        ({ doubleTapEmojiContainer: obj6.style, doubleTapCustomEmoji: obj6.fastImageStyle, doubleTapTextEmoji: obj6.textEmojiStyle } = tmp11);
        cResult[12] = tmp12;
        cResult[13] = tmp11.doubleTapCustomEmoji;
        cResult[14] = tmp11.doubleTapEmojiContainer;
        cResult[15] = tmp11.doubleTapTextEmoji;
        cResult[16] = "";
        cResult[17] = closure_11(appEntryKey(6632), obj4);
        const tmp24 = closure_11(appEntryKey(6632), obj4);
      }
    }
  }
  if (null != emoji.id) {
    class R {
      constructor() {
        tmp = location(closure_1_2[17]);
        obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
        openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
        closure_0 = closure_1_3(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp;
                  let closure_1 = tmp4;
                  const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                  ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                  const obj7 = appEntryKey(dependencyMap[18]);
                  obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                  const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                  const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                  ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                const obj17 = { emoji };
                const obj = emoji(dependencyMap[19]);
                const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c4 = 3;
              throw tmp11;
            }
          }
        });
        obj.onPressEmoji = function() {
          return closure_0(...arguments);
        };
        result = openEmojiPickerActionSheet(obj, "stack");
        return;
      }
    }
    let obj5 = { id: emoji.id, size, animated: tmp16 };
    const getEmojiURL = appEntryKey(1402).getEmojiURL;
    appEntryKey(1402);
    if (!stateFromStores) {
      class R {
        constructor() {
          tmp = location(closure_1_2[17]);
          obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
          openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
          closure_0 = closure_1_3(async (arg0) => {
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c4 = 2;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_2 = tmp;
                    let closure_1 = tmp4;
                    const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                    ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                    const obj7 = appEntryKey(dependencyMap[18]);
                    obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                    const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                    const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                    ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                    c3 = 1;
                    c4 = 1;
                    const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj16 = { value, done: true };
                  return obj16;
                } else {
                  const obj17 = { emoji };
                  const obj = emoji(dependencyMap[19]);
                  const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp11) {
                c4 = 3;
                throw tmp11;
              }
            }
          });
          obj.onPressEmoji = function() {
            return closure_0(...arguments);
          };
          result = openEmojiPickerActionSheet(obj, "stack");
          return;
        }
      }
    }
    emojiURL = getEmojiURL(obj5);
  } else {
    class R {
      constructor() {
        tmp = location(closure_1_2[17]);
        obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
        openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
        closure_0 = closure_1_3(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp;
                  let closure_1 = tmp4;
                  const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
                  ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
                  const obj7 = appEntryKey(dependencyMap[18]);
                  obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                  const DoubleTapReactionEmoji = emoji(dependencyMap[12]).DoubleTapReactionEmoji;
                  const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                  ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                const obj17 = { emoji };
                const obj = emoji(dependencyMap[19]);
                const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c4 = 3;
              throw tmp11;
            }
          }
        });
        obj.onPressEmoji = function() {
          return closure_0(...arguments);
        };
        result = openEmojiPickerActionSheet(obj, "stack");
        return;
      }
    }
  }
  cResult[4] = emoji.animated;
  cResult[5] = emoji.id;
  cResult[6] = emoji.url;
  cResult[7] = stateFromStores;
  cResult[8] = emojiURL;
  tmp12 = emojiURL;
}) : ((location) => {
  let Text2;
  let intl;
  let intl2;
  let items3;
  let obj7;
  let str;
  let useReducedMotion;
  const _location = location.location;
  const emoji = location.emoji;
  let tmp = _location;
  let obj = _location(1487);
  dependencyMap = obj.useAppEntryKey();
  const tmp3 = DimensionsStore((arg0) => arg0.byAppEntry[closure_2].fontScale);
  let obj2 = _location(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = closure_14(tmp3);
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = react.useMemo(() => {
    let animated;
    let url;
    if (null != emoji.id) {
      const obj = { id: emoji.id, size, animated };
      animated = !stateFromStores;
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (!stateFromStores) {
        animated = emoji.animated;
      }
      url = getEmojiURL(obj);
    } else {
      url = emoji.url;
    }
    return url;
  }, items1);
  let obj3 = { style: tmp5.doubleTapEmojiEditNudgeContainer, children: items3 };
  const callback = react.useCallback(() => {
    const tmp = _location(closure_2[17]);
    let obj = {
      pickerIntention: constants.DEFAULT_REACT_EMOJI,
      onPressEmoji: function() {
        return closure_0(...arguments);
      },
      startExpanded: true
    };
    const openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
    let closure_0 = stateFromStores(function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              let closure_1 = tmp4;
              const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
              ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
              const obj7 = emoji(closure_2_2[18]);
              obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
              const DoubleTapReactionEmoji = emoji(closure_2_2[12]).DoubleTapReactionEmoji;
              const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
              ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
              c3 = 1;
              c4 = 1;
              const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            const obj17 = { emoji };
            const obj = emoji(closure_2_2[19]);
            const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    });
    let result = openEmojiPickerActionSheet(obj, "stack");
  }, items2);
  let obj4 = { color: "text-subtle", variant: "text-sm/normal", children: intl.string(_location(1126).t["1EUr/W"]) };
  const Text = _location(4892).Text;
  intl = _location(1126).intl;
  items3 = [closure_11(Text, obj4), , ];
  let obj5 = { style: tmp5.doubleTapEmojiContainer, fastImageStyle: tmp5.doubleTapCustomEmoji, textEmojiStyle: tmp5.doubleTapTextEmoji, src: memo, name: str };
  str = "";
  const tmp11 = emoji(6632);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  items3[1] = closure_11(tmp11, obj5);
  let obj6 = { accessibilityRole: "button", onPress: callback, hitSlop, style: tmp5.editButton, children: closure_11(Text2, obj7) };
  const PressableOpacity = tmp(5916).PressableOpacity;
  obj7 = { color: "text-brand", variant: "text-sm/normal", children: intl2.string(tmp(1126).t.bt75uw) };
  Text2 = tmp(4892).Text;
  intl2 = tmp(1126).intl;
  items3[2] = closure_11(PressableOpacity, obj6);
  return closure_12(View, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = tmp4;