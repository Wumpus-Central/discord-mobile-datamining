// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import DimensionsStore from "../../screen/native/DimensionsStore.android.tsx";

require = fn;
function DoubleTapEmojiEditNudgeInner(location) {
  let _location = location.location;
  const emoji = location.emoji;
  dependencyMap = _location(1481).useAppEntryKey();
  let obj = _location(1481);
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
      return (function* (arg0) {
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
            return { value: "HermesInternal", done: null };
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
                const obj4 = {
                  emoji_id: null,
                  emoji_name: null,
                  emoji_animated: null,
                  recommended: false,
                  location: null,
                };
                ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = _location);
                obj4.location = _location;
                emoji(1241).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                const DoubleTapReactionEmoji = _location(2020).DoubleTapReactionEmoji;
                ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = _location);
                c3 = 1;
                c4 = 1;
                const obj6 = {
                  value: DoubleTapReactionEmoji.updateSetting({
                    emojiId: null,
                    emojiName: null,
                    animated: null,
                    disableDoubleTap: false,
                  }),
                  done: false,
                };
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
              const result = _location(11471).showDoubleTapEmojiUpdatedToast(obj17);
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
    obj2.onPressEmoji = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let result = _location(11468).openEmojiPickerActionSheet(obj2, "stack");
  }, items2);
  let obj4 = { color: "text-subtle", variant: "text-sm/normal", children: null };
  const intl = _location(1115).intl;
  obj4.children = intl.string(_location(1115).t["1EUr/W"]);
  const items3 = [closure_11(_location(4823).Text, obj4), ,];
  const obj5 = {
    style: tmp5.doubleTapEmojiContainer,
    fastImageStyle: tmp5.doubleTapCustomEmoji,
    textEmojiStyle: tmp5.doubleTapTextEmoji,
    src: memo,
    name: null,
  };
  let str = "";
  let obj2 = _location(504);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj5.name = str;
  items3[1] = closure_11(emoji(7461), obj5);
  let obj6 = { accessibilityRole: "button", onPress: callback, hitSlop, style: tmp5.editButton, children: null };
  const obj7 = { color: "text-brand", variant: "text-sm/normal", children: null };
  const intl2 = tmp(1115).intl;
  obj7.children = intl2.string(_location(1115).t.bt75uw);
  obj6.children = closure_11(_location(4823).Text, obj7);
  items3[2] = closure_11(_location(5425).PressableOpacity, obj6);
  obj3.children = items3;
  return closure_12(View, obj3);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const EmojiConstants = fn(1375);
({ EMOJI_URL_BASE_SIZE: closure_9, EmojiIntention: c10 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const hitSlop = { left: 8, right: 8 };
const createStyles = fn(4827);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = {
    doubleTapEmojiContainer: { marginHorizontal: nativeDefault.space.PX_4 },
    doubleTapTextEmoji: null,
    doubleTapCustomEmoji: null,
    doubleTapEmojiEditNudgeContainer: null,
    editButton: null,
  };
  const obj2 = { marginHorizontal: nativeDefault.space.PX_4 };
  obj.doubleTapTextEmoji = { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  size = { height: 16 * arg0, width: 16 * arg0 };
  obj.doubleTapCustomEmoji = size;
  const obj3 = { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.doubleTapEmojiEditNudgeContainer = {
    marginTop: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  const obj4 = {
    marginTop: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  obj.editButton = { marginHorizontal: nativeDefault.space.PX_4 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  let setting;
  const DoubleTapReactionEmoji = setting(2020).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting), items);
  const memo1 = noop.useMemo(() => setting(dependencyMap[11]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  [][0] = setting;
  let tmp5 = null;
  if (true === setting.disableDoubleTap) {
    return null;
  } else {
    if (!tmp4) {
      if (tmp5 != memo1) {
        const obj = { location: _location, emoji: memo1 };
        const tmp8 = closure_11(DoubleTapEmojiEditNudgeInner, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      const obj2 = { location: _location, emoji: memo };
      tmp5 = closure_11(DoubleTapEmojiEditNudgeInner, obj2);
    }
    tmp9 = tmp5 != memo;
  }
};
