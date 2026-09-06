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
  let obj = _location(1480);
  dependencyMap = obj.useAppEntryKey();
  let obj1 = _location(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = closure_14(DimensionsStore((arg0) => arg0.byAppEntry[closure_2].fontScale));
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = noop.useMemo(() => {
    if (null != emoji.id) {
      const obj = { id: tmp.id, size, animated: null };
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = tmp.animated;
      }
      obj.animated = animated;
      let url = obj.getEmojiURL(obj);
    } else {
      url = tmp.url;
    }
    return url;
  }, items1);
  obj = { style: tmp5.doubleTapEmojiEditNudgeContainer, children: null };
  const callback = noop.useCallback(() => {
    _location(11121);
    let obj = { pickerIntention: constants.DEFAULT_REACT_EMOJI, onPressEmoji: null, startExpanded: true };
    closure_0 = stateFromStores((_location) => {
      c3 = 0;
      c4 = 0;
      return (function* (arg0, value) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
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
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp2;
                closure_1 = tmp5;
                closure_129_0 = _location;
                const obj1 = {
                  emoji_id: null,
                  emoji_name: null,
                  emoji_animated: null,
                  recommended: false,
                  location: null,
                };
                ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = _location);
                obj1.location = _location;
                emoji(1242).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj1);
                const DoubleTapReactionEmoji = _location(1935).DoubleTapReactionEmoji;
                ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = _location);
                c3 = 1;
                c4 = 1;
                const obj3 = {
                  value: DoubleTapReactionEmoji.updateSetting({
                    emojiId: null,
                    emojiName: null,
                    animated: null,
                    disableDoubleTap: false,
                  }),
                  done: false,
                };
                return obj3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              obj = _location(11124);
              const obj5 = { emoji: closure_129_0 };
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
    obj.onPressEmoji = function () {
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
  const intl = _location(1114).intl;
  obj.children = intl.string(_location(1114).t["1EUr/W"]);
  const items3 = [closure_11(_location(4556).Text, obj), ,];
  obj1 = {
    style: tmp5.doubleTapEmojiContainer,
    fastImageStyle: tmp5.doubleTapCustomEmoji,
    textEmojiStyle: tmp5.doubleTapTextEmoji,
    src: memo,
    name: null,
  };
  let str = "";
  const tmp3 = DimensionsStore((arg0) => arg0.byAppEntry[closure_2].fontScale);
  const tmp8 = closure_12;
  const tmp9 = View;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  items3[1] = closure_11(emoji(7130), obj1);
  const obj2 = { accessibilityRole: "button", onPress: callback, hitSlop, style: tmp5.editButton, children: null };
  let obj3 = { color: "text-brand", variant: "text-sm/normal", children: null };
  const intl2 = tmp(1114).intl;
  obj3.children = intl2.string(_location(1114).t.bt75uw);
  obj2.children = closure_11(_location(4556).Text, obj3);
  items3[2] = closure_11(_location(5123).PressableOpacity, obj2);
  obj.children = items3;
  return tmp8(tmp9, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const EmojiConstants = fn(1374);
({ EMOJI_URL_BASE_SIZE: closure_9, EmojiIntention: c10 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const hitSlop = { left: 8, right: 8 };
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles((arg0) => {
  let obj = {
    doubleTapEmojiContainer: null,
    doubleTapTextEmoji: null,
    doubleTapCustomEmoji: null,
    doubleTapEmojiEditNudgeContainer: null,
    editButton: null,
  };
  obj = { marginHorizontal: nativeDefault.space.PX_4 };
  obj.doubleTapEmojiContainer = obj;
  obj = { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.doubleTapTextEmoji = obj;
  size = { height: 16 * arg0, width: 16 * arg0 };
  obj.doubleTapCustomEmoji = size;
  obj.doubleTapEmojiEditNudgeContainer = {
    marginTop: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  const obj1 = {
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
  const DoubleTapReactionEmoji = setting(1935).DoubleTapReactionEmoji;
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
        let obj = { location: _location, emoji: memo1 };
        const tmp8 = closure_11(DoubleTapEmojiEditNudgeInner, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      obj = { location: _location, emoji: memo };
      tmp5 = closure_11(DoubleTapEmojiEditNudgeInner, obj);
    }
    tmp9 = tmp5 != memo;
  }
};
