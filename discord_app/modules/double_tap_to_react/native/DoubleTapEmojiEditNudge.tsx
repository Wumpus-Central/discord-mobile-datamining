// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx
import ME from "ME";
import getSystemLocale from "getSystemLocale";
import { View } from "ToastEmoji";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry";
import { AnalyticEvents } from "ME";
import set from "set";
import jsxProd from "PressableBase";
import createCacheKey from "createCacheKey";
import set from "get ActivityIndicator";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";

let c10;
let c9;
let closure_12;
let unpackModuleId;
const require = arg1;
function DoubleTapEmojiEditNudgeInner(location) {
  const _location = location.location;
  const emoji = location.emoji;
  let dependencyMap;
  let stateFromStores;
  let obj = _location(1496);
  dependencyMap = obj.useAppEntryKey();
  let obj1 = _location(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = callback3(callback((arg0) => arg0.byAppEntry[closure_2].fontScale));
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = React.useMemo(() => {
    if (null != emoji.id) {
      let obj = emoji(1435);
      obj = { id: null, size: null, animated: null };
      obj[0] = tmp.id;
      obj[1] = outer1_9;
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = tmp.animated;
      }
      obj[2] = animated;
      let url = obj.getEmojiURL(obj);
    } else {
      url = tmp.url;
    }
    return url;
  }, items1);
  obj = { style: tmp5.doubleTapEmojiEditNudgeContainer, children: null };
  callback = React.useCallback(() => {
    let obj = _location(8700);
    obj = { pickerIntention: outer1_10.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    let closure_0 = stateFromStores((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
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
            return { value: "HermesInternal", done: null };
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
                let closure_2 = tmp2;
                let closure_1 = tmp5;
                const obj1 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: null };
                ({ id: obj8[0], name: obj8[1], animated: obj8[2] } = callback);
                obj1[4] = callback;
                outer2_1(outer2_2[16]).track(outer2_8.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = callback(outer2_2[10]).DoubleTapReactionEmoji;
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
              obj = callback(outer2_2[17]);
              const obj5 = { emoji: null };
              obj5[0] = callback;
              const result = obj.showDoubleTapEmojiUpdatedToast(obj5);
              c4 = 3;
              return { value: "HermesInternal", done: null };
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
  const items3 = [callback2(_location(4338).Text, obj), , ];
  obj1 = { style: tmp5.doubleTapEmojiContainer, fastImageStyle: tmp5.doubleTapCustomEmoji, textEmojiStyle: tmp5.doubleTapTextEmoji, src: memo, name: null };
  let str = "";
  const tmp3 = callback((arg0) => arg0.byAppEntry[closure_2].fontScale);
  const tmp8 = closure_12;
  const tmp9 = View;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1[4] = str;
  items3[1] = callback2(emoji(5421), obj1);
  const obj2 = { accessibilityRole: "button", onPress: callback, hitSlop: closure_13, style: tmp5.editButton, children: null };
  let obj3 = { color: "text-brand", variant: "text-sm/normal", children: null };
  const intl2 = tmp(1236).intl;
  obj3[2] = intl2.string(_location(1236).t.bt75uw);
  obj2[4] = callback2(_location(4338).Text, obj3);
  items3[2] = callback2(_location(4909).PressableOpacity, obj2);
  obj[1] = items3;
  return tmp8(tmp9, obj);
}
({ EMOJI_URL_BASE_SIZE: c9, EmojiIntention: c10 } = set);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { left: 8, right: 8 };
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { doubleTapEmojiContainer: null, doubleTapTextEmoji: null, doubleTapCustomEmoji: null, doubleTapEmojiEditNudgeContainer: null, editButton: null };
  obj = { marginHorizontal: Themes.space.PX_4 };
  obj[0] = obj;
  obj = { fontSize: 12 * arg0, color: Themes.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[1] = obj;
  obj[2] = { height: 16 * arg0, width: 16 * arg0 };
  obj[3] = { marginTop: Themes.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
  const obj1 = { height: 16 * arg0, width: 16 * arg0 };
  const obj2 = { marginTop: Themes.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
  obj[4] = { marginHorizontal: Themes.space.PX_4 };
  return obj;
});
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  let setting;
  const DoubleTapReactionEmoji = setting(4034).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_2[11]).disambiguatedEmojiFromSettingsValue(setting), items);
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
        let tmp8 = callback2(DoubleTapEmojiEditNudgeInner, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      obj = { location: null, emoji: null };
      obj[0] = _location;
      obj[1] = memo;
      tmp5 = callback2(DoubleTapEmojiEditNudgeInner, obj);
    }
    tmp8 = tmp5;
    tmp9 = tmp5 != memo;
  }
};