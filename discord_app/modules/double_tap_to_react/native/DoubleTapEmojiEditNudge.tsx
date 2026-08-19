// === Module 10896: DoubleTapEmojiEditNudgeInner ===

// Module 10896 (DoubleTapEmojiEditNudgeInner)
import ThemesDefault from "Themes" /* 712 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry" /* 1495 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import set from "set" /* 1925 */;

const require = fn;
function DoubleTapEmojiEditNudgeInner(location) {
  const _location = location.location;
  const emoji = location.emoji;
  let obj = _location(1497);
  dependencyMap = obj.useAppEntryKey();
  obj1 = _location(589);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = callback3(callback((arg0) => arg0.byAppEntry[closure_2].fontScale));
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = React.useMemo(() => {
    if (null != emoji.id) {
      emoji(1435);
      const obj = { id: null, size: null, animated: null };
      obj[0] = emoji.id;
      obj[1] = closure_1_9;
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = emoji.animated;
      }
      obj[2] = animated;
      let url = obj.getEmojiURL(obj);
    } else {
      url = emoji.url;
    }
    return url;
  }, items1);
  callback = React.useCallback(() => {
    _location(9298);
    let obj = { pickerIntention: closure_1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    closure_0 = stateFromStores((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp2;
                closure_1 = tmp5;
                obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8[0], name: obj8[1], animated: obj8[2] } = callback);
                obj1[4] = callback;
                emoji(closure_2_2[16]).track(closure_2_8.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = callback(closure_2_2[10]).DoubleTapReactionEmoji;
                ({ id: obj9[0], name: obj9[1], animated: obj9[2] } = callback);
                c3 = 1;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = DoubleTapReactionEmoji.updateSetting({ emojiId: null, emojiName: null, animated: null, disableDoubleTap: false });
                return obj3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj = callback(closure_2_2[17]);
              const obj5 = { emoji: null };
              obj5[0] = callback;
              const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp12) {
            c4 = tmp;
            throw tmp12;
          }
        }
      })();
    });
    obj[1] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let result = obj.openEmojiPickerActionSheet(obj, "stack");
  }, items2);
  obj = { color: "text-subtle", variant: "text-sm/normal", children: null };
  const intl = _location(1236).intl;
  obj[2] = intl.string(_location(1236).t["1EUr/W"]);
  const items3 = [callback2(_location(4734).Text, obj), , ];
  obj1 = { style: tmp5.doubleTapEmojiContainer, fastImageStyle: tmp5.doubleTapCustomEmoji, textEmojiStyle: tmp5.doubleTapTextEmoji, src: memo, name: null };
  let str = "";
  const tmp3 = callback((arg0) => arg0.byAppEntry[closure_2].fontScale);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1[4] = str;
  items3[1] = callback2(emoji(6930), obj1);
  const obj2 = { accessibilityRole: "button", onPress: callback, hitSlop: closure_13, style: tmp5.editButton, children: null };
  let obj3 = { color: "text-brand", variant: "text-sm/normal", children: null };
  const intl2 = tmp(1236).intl;
  obj3[2] = intl2.string(_location(1236).t.bt75uw);
  obj2[4] = callback2(_location(4734).Text, obj3);
  items3[2] = callback2(_location(5433).PressableOpacity, obj2);
  obj[1] = items3;
  return callback(View, obj);
}
({ EMOJI_URL_BASE_SIZE: c9, EmojiIntention: c10 } = require("set"));
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { left: 8, right: 8 };
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { marginHorizontal: ThemesDefault.space.PX_4 };
  obj[0] = obj;
  obj = { fontSize: 12 * arg0, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[1] = obj;
  obj[2] = { height: 16 * arg0, width: 16 * arg0 };
  obj[3] = { marginTop: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
  obj[4] = { marginHorizontal: ThemesDefault.space.PX_4 };
  return obj;
});
let result = require("obj132").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  let setting;
  const DoubleTapReactionEmoji = setting(4066).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(dependencyMap[11]).disambiguatedEmojiFromSettingsValue(setting), items);
  const memo1 = React.useMemo(() => setting(table[11]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  [][0] = setting;
  let tmp5 = null;
  if (true === setting.disableDoubleTap) {
    return null;
  } else {
    if (!tmp4) {
      if (tmp5 != memo1) {
        let obj = { location: null, emoji: null };
        obj[0] = _location;
        obj[1] = memo1;
        const tmp8 = callback2(DoubleTapEmojiEditNudgeInner, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      obj = { location: null, emoji: null };
      obj[0] = _location;
      obj[1] = memo;
      tmp5 = callback2(DoubleTapEmojiEditNudgeInner, obj);
    }
    tmp9 = tmp5 != memo;
  }
};