// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import DimensionsStore from "../../screen/native/DimensionsStore.android.tsx";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const EmojiConstants = fn(1393);
({ EMOJI_URL_BASE_SIZE: closure_9, EmojiIntention: c10 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const hitSlop = { left: 8, right: 8 };
const createStyles = fn(5091);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { doubleTapEmojiContainer: { marginHorizontal: nativeDefault.space.PX_4 }, doubleTapTextEmoji: null, doubleTapCustomEmoji: null, doubleTapEmojiEditNudgeContainer: null, editButton: null };
  const obj2 = { marginHorizontal: nativeDefault.space.PX_4 };
  obj.doubleTapTextEmoji = { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  size = { height: 16 * arg0, width: 16 * arg0 };
  obj.doubleTapCustomEmoji = size;
  const obj3 = { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.doubleTapEmojiEditNudgeContainer = { marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
  const obj4 = { marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
  obj.editButton = { marginHorizontal: nativeDefault.space.PX_4 };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function DoubleTapEmojiEditNudgeInner(location) {
  const cResult = _location(576).c(26);
  _location = location.location;
  const emoji = location.emoji;
  const obj = _location(576);
  const appEntryKey = _location(1500).useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function c(arg0) {
      return arg0.byAppEntry[appEntryKey].fontScale;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let obj2 = _location(1500);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn2 = function f() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[2] = items;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmp6 = DimensionsStore(tmp5);
  const stateFromStores = _location(504).useStateFromStores(tmp7, tmp8);
  const tmp11 = closure_14(tmp6);
  if (cResult[4] === emoji.animated) {
    if (cResult[5] === emoji.id) {
      if (cResult[6] === emoji.url) {
        if (cResult[7] === stateFromStores) {
          if (cResult[9] !== _location) {
            class P {
              constructor() {
                obj = location(closure_1_2[17]);
                obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
                closure_0 = closure_1_3(async (_location) => {
                  c3 = 0;
                  c4 = 0;
                  return (/* F154770 */ function*() { ... })();
                });
                obj1.onPressEmoji = function onPressEmoji() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                result = obj.openEmojiPickerActionSheet(obj1, "stack");
                return;
              }
            }
            cResult[9] = _location;
            cResult[10] = P;
          } else {
            class P {
              constructor() {
                obj = location(closure_1_2[17]);
                obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
                closure_0 = closure_1_3(async (_location) => {
                  c3 = 0;
                  c4 = 0;
                  return (/* F154770 */ function*() { ... })();
                });
                obj1.onPressEmoji = function onPressEmoji() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                result = obj.openEmojiPickerActionSheet(obj1, "stack");
                return;
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                obj = location(closure_1_2[17]);
                obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
                closure_0 = closure_1_3(async (_location) => {
                  c3 = 0;
                  c4 = 0;
                  return (/* F154770 */ function*() { ... })();
                });
                obj1.onPressEmoji = function onPressEmoji() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                result = obj.openEmojiPickerActionSheet(obj1, "stack");
                return;
              }
            }
            let obj3 = { color: "text-subtle", variant: "text-sm/normal", children: null };
            const intl = tmp(1126).intl;
            obj3.children = intl.string(tmp(1126).t["1EUr/W"]);
            const tmp18 = closure_11(tmp(5087).Text, obj3);
            cResult[11] = tmp18;
          } else {
            class P {
              constructor() {
                obj = location(closure_1_2[17]);
                obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
                closure_0 = closure_1_3(async (_location) => {
                  c3 = 0;
                  c4 = 0;
                  return (/* F154770 */ function*() { ... })();
                });
                obj1.onPressEmoji = function onPressEmoji() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                result = obj.openEmojiPickerActionSheet(obj1, "stack");
                return;
              }
            }
          }
          if (null == emoji.id) {
            class P {
              constructor() {
                obj = location(closure_1_2[17]);
                obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
                closure_0 = closure_1_3(async (_location) => {
                  c3 = 0;
                  c4 = 0;
                  return (/* F154770 */ function*() { ... })();
                });
                obj1.onPressEmoji = function onPressEmoji() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                result = obj.openEmojiPickerActionSheet(obj1, "stack");
                return;
              }
            }
          }
          if (cResult[12] === cResult[8]) {
            class P {
              constructor() {
                obj = location(closure_1_2[17]);
                obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
                closure_0 = closure_1_3(async (_location) => {
                  c3 = 0;
                  c4 = 0;
                  return (/* F154770 */ function*() { ... })();
                });
                obj1.onPressEmoji = function onPressEmoji() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                result = obj.openEmojiPickerActionSheet(obj1, "stack");
                return;
              }
            }
          }
          const obj5 = { style: null, fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
          ({ doubleTapEmojiContainer: obj7.style, doubleTapCustomEmoji: obj7.fastImageStyle, doubleTapTextEmoji: obj7.textEmojiStyle } = tmp11);
          obj5.src = cResult[8];
          obj5.name = "";
          const tmp23 = closure_11(appEntryKey(6816), obj5);
          cResult[12] = cResult[8];
          cResult[13] = tmp11.doubleTapCustomEmoji;
          cResult[14] = tmp11.doubleTapEmojiContainer;
          cResult[15] = tmp11.doubleTapTextEmoji;
          cResult[16] = "";
          cResult[17] = tmp23;
        }
      }
    }
  }
  if (null != emoji.id) {
    class P {
      constructor() {
        obj = location(closure_1_2[17]);
        obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
        closure_0 = closure_1_3(async (_location) => {
          c3 = 0;
          c4 = 0;
          return (/* F154770 */ function*() { ... })();
        });
        obj1.onPressEmoji = function onPressEmoji() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        result = obj.openEmojiPickerActionSheet(obj1, "stack");
        return;
      }
    }
    let obj6 = { id: emoji.id, size, animated: null };
    if (!stateFromStores) {
      class P {
        constructor() {
          obj = location(closure_1_2[17]);
          obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
          closure_0 = closure_1_3(async (_location) => {
            c3 = 0;
            c4 = 0;
            return (/* F154770 */ function*() { ... })();
          });
          obj1.onPressEmoji = function onPressEmoji() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result = obj.openEmojiPickerActionSheet(obj1, "stack");
          return;
        }
      }
    }
    obj6.animated = !stateFromStores;
    const emojiURL = appEntryKey(1415).getEmojiURL(obj6);
    let obj4 = appEntryKey(1415);
    const tmp15 = !stateFromStores;
  } else {
    class P {
      constructor() {
        obj = location(closure_1_2[17]);
        obj1 = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
        closure_0 = closure_1_3(async (_location) => {
          c3 = 0;
          c4 = 0;
          return (/* F154770 */ function*() { ... })();
        });
        obj1.onPressEmoji = function onPressEmoji() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        result = obj.openEmojiPickerActionSheet(obj1, "stack");
        return;
      }
    }
  }
  cResult[4] = emoji.animated;
  cResult[5] = emoji.id;
  cResult[6] = emoji.url;
  cResult[7] = stateFromStores;
  cResult[8] = emojiURL;
  const tmpResult = _location(504);
}) : (function DoubleTapEmojiEditNudgeInner(location) {
  let _location = location.location;
  const emoji = location.emoji;
  dependencyMap = _location(1500).useAppEntryKey();
  let obj = _location(1500);
  const tmp3 = DimensionsStore((arg0) => arg0.byAppEntry[closure_2].fontScale);
  const items = [AccessibilityStore];
  const stateFromStores = _location(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = closure_14(tmp3);
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = noop.useMemo(() => {
    if (null != emoji.id) {
      const obj2 = { id: emoji.id, size, animated: null };
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = emoji.animated;
      }
      obj2.animated = animated;
      let url = AvatarUtilsDefault.getEmojiURL(obj2);
    } else {
      url = emoji.url;
    }
    return url;
  }, items1);
  let obj3 = { style: tmp5.doubleTapEmojiEditNudgeContainer, children: null };
  const callback = noop.useCallback(() => {
    let obj2 = { pickerIntention: constants.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    closure_0 = stateFromStores((_location) => {
      c3 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
                closure_2 = tmp2;
                closure_1 = tmp5;
                closure_129_0 = _location;
                const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = _location);
                obj4.location = _location;
                emoji(1265).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                const DoubleTapReactionEmoji = _location(2041).DoubleTapReactionEmoji;
                ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = _location);
                c3 = 1;
                c4 = 1;
                const obj6 = { value: DoubleTapReactionEmoji.updateSetting({ emojiId: null, emojiName: null, animated: null, disableDoubleTap: false }), done: false };
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
              const obj17 = { emoji: closure_129_0 };
              const result = _location(9410).showDoubleTapEmojiUpdatedToast(obj17);
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp12) {
            c4 = tmp;
            throw tmp12;
          }
        }
      })();
    });
    obj2.onPressEmoji = function onPressEmoji() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let result = _location(9397).openEmojiPickerActionSheet(obj2, "stack");
  }, items2);
  let obj4 = { color: "text-subtle", variant: "text-sm/normal", children: null };
  const intl = _location(1126).intl;
  obj4.children = intl.string(_location(1126).t["1EUr/W"]);
  const items3 = [closure_11(_location(5087).Text, obj4), , ];
  const obj5 = { style: tmp5.doubleTapEmojiContainer, fastImageStyle: tmp5.doubleTapCustomEmoji, textEmojiStyle: tmp5.doubleTapTextEmoji, src: memo, name: null };
  let str = "";
  let obj2 = _location(504);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj5.name = str;
  items3[1] = closure_11(emoji(6816), obj5);
  let obj6 = { accessibilityRole: "button", onPress: callback, hitSlop, style: tmp5.editButton, children: null };
  const obj7 = { color: "text-brand", variant: "text-sm/normal", children: null };
  const intl2 = tmp(1126).intl;
  obj7.children = intl2.string(_location(1126).t.bt75uw);
  obj6.children = closure_11(_location(5087).Text, obj7);
  items3[2] = closure_11(_location(6191).PressableOpacity, obj6);
  obj3.children = items3;
  return closure_12(View, obj3);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = ReactCompilerGating.isReactCompilerEnabled() ? (function DoubleTapEmojiEditNudge(location) {
  const cResult = c.c(8);
  const _location = location.location;
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  if (cResult[0] !== setting) {
    const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
    cResult[0] = setting;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = DoubleTapToReactUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fallbackDoubleTapDisambiguatedEmoji = DoubleTapToReactUtils.getFallbackDoubleTapDisambiguatedEmoji();
    cResult[2] = fallbackDoubleTapDisambiguatedEmoji;
    let tmp7 = fallbackDoubleTapDisambiguatedEmoji;
    const tmpResult2 = DoubleTapToReactUtils;
  } else {
    tmp7 = cResult[2];
  }
  ({ emojiId, emojiName } = setting);
  let tmp9 = null;
  if (true === setting.disableDoubleTap) {
    return null;
  } else {
    if (tmp9 == emojiId) {
      if (tmp9 == emojiName) {
        if (tmp9 != tmp7) {
          if (cResult[3] !== _location) {
            const obj2 = { location: _location, emoji: tmp7 };
            const tmp13 = closure_1_11(closure_15, obj2);
            cResult[3] = _location;
            cResult[4] = tmp13;
          }
        }
      }
    }
    tmp9 = null;
    if (!tmp14) {
    } else {
      if (cResult[5] === tmp5) {
      }
      const obj3 = { location: _location, emoji: tmp5 };
      const tmp18 = closure_1_11(closure_15, obj3);
      cResult[5] = tmp5;
      cResult[6] = _location;
      cResult[7] = tmp18;
    }
    tmp14 = tmp9 != tmp5;
  }
}) : (function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  let setting;
  const DoubleTapReactionEmoji = setting(2041).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting), items);
  const memo1 = noop.useMemo(() => setting(dependencyMap[13]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  [][0] = setting;
  let tmp5 = null;
  if (true === setting.disableDoubleTap) {
    return null;
  } else {
    if (!tmp4) {
      if (tmp5 != memo1) {
        const obj = { location: _location, emoji: memo1 };
        const tmp8 = closure_11(closure_15, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      const obj2 = { location: _location, emoji: memo };
      tmp5 = closure_11(closure_15, obj2);
    }
    tmp9 = tmp5 != memo;
  }
});