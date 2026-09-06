// discord_app/modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
function EmojiConfetti(children) {
  const top = children.top;
  ({ bottom, left } = children);
  ({ right, leading: dependencyMap } = children);
  const sharedValue = top(4296).useSharedValue(0);
  let obj = top(4296);
  const sharedValue1 = top(4296).useSharedValue(0);
  const obj2 = top(4296);
  const sharedValue2 = top(4296).useSharedValue(0.2);
  const obj3 = top(4296);
  const sharedValue3 = top(4296).useSharedValue(0);
  let obj4 = top(4296);
  const mountLayoutEffect = top(4992).useMountLayoutEffect(() => {
    let obj = sharedValue;
    let num = 0;
    if (!dependencyMap) {
      const _Math = Math;
      num = 50 + 150 * Math.random();
    }
    const obj5 = ReanimatedRexport;
    const withTimingResult = timing.withTiming(0, { duration: num });
    obj = { duration: 600, easing: null };
    const result = 10 * Math.random();
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const result1 = obj.set(obj5.withSequence(withTimingResult, timing.withTiming(result + 35, obj)));
    const obj9 = ReanimatedRexport;
    const withTimingResult1 = timing.withTiming(0, { duration: num });
    obj = { duration: 600, easing: null };
    const result2 = 40 * Math.random();
    obj.easing = ReanimatedRexport.Easing.ease;
    const result3 = sharedValue1.set(obj9.withSequence(withTimingResult1, timing.withTiming(result2 + 20, obj)));
    const obj13 = ReanimatedRexport;
    const withTimingResult2 = timing.withTiming(0, { duration: num });
    const withTimingResult3 = timing.withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const result4 = sharedValue2.set(
      obj13.withSequence(withTimingResult2, withTimingResult3, timing.withTiming(0.5, { duration: 360 })),
    );
    const obj17 = ReanimatedRexport;
    const withTimingResult4 = timing.withTiming(0, { duration: num });
    const withTimingResult5 = timing.withTiming(1, { duration: 360 });
    const result5 = sharedValue3.set(
      obj17.withSequence(withTimingResult4, withTimingResult5, timing.withTiming(0, { duration: 240 })),
    );
  });
  let obj5 = top(4992);
  const fn = function f() {
    let obj = { scale: sharedValue2.get() };
    const items = [obj];
    let num = 1;
    if (true === left) {
      num = -1;
    }
    const rect = { position: "absolute", transform: null, top: null, left: null, opacity: null };
    obj = { rotate: `${num * sharedValue1.get()}deg` };
    items[1] = obj;
    rect.transform = items;
    if (true === top) {
      value = -sharedValue.get();
      let obj4 = sharedValue;
    } else {
      obj4 = sharedValue;
      value = sharedValue.get();
    }
    rect.top = value;
    value = obj4.get();
    if (true === left) {
      let result = 1.5 * -value;
    } else {
      result = 1.5 * value;
    }
    rect.left = result;
    rect.opacity = sharedValue3.get();
    return rect;
  };
  fn.__closure = {
    sizeValue: sharedValue2,
    left,
    rotationValue: sharedValue1,
    top,
    positionValue: sharedValue,
    opacityValue: sharedValue3,
  };
  fn.__workletHash = 1455873119263;
  fn.__initData = __initData;
  const style = top(4296).useAnimatedStyle(fn);
  return closure_11(left(4296).View, { style, children: children.emojiComponent });
}
function EmojiBurstAnimation(emojiComponent) {
  emojiComponent = emojiComponent.emojiComponent;
  const obj = { style: closure_13().burstContainer, children: null };
  const items = [
    closure_1_11(EmojiConfetti, { emojiComponent, top: true, left: true, leading: true }),
    closure_1_11(EmojiConfetti, { emojiComponent, top: true, right: true }),
    closure_1_11(EmojiConfetti, { emojiComponent, bottom: true, left: true }),
    closure_1_11(EmojiConfetti, { emojiComponent, bottom: true, right: true }),
  ];
  obj.children = items;
  return closure_1_12(View, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  emoji: { width: 48, height: 48, zIndex: 2 },
  selectedCustomEmoji: { width: 48, height: 48 },
  selectedTextEmoji: null,
  selectedEmojiText: null,
  content: null,
  emojiContainer: null,
  alignCenter: null,
  emojiSelectRow: null,
  header: null,
  emojiName: null,
  burstContainer: null,
};
let PlatformUtils = fn(1115);
let num = 36;
if (PlatformUtils.isIOS()) {
  num = 48;
}
createStyles = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1115);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 56;
}
createStyles.lineHeight = num2;
createStyles.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
createStyles.selectedTextEmoji = createStyles;
let obj1 = { marginLeft: nativeDefault.space.PX_16, fontSize: 40, lineHeight: null };
PlatformUtils = fn(1115);
let num3;
if (PlatformUtils.isIOS()) {
  num3 = 56;
}
obj1.lineHeight = num3;
createStyles.selectedEmojiText = obj1;
PlatformUtils = {
  flexDirection: "column",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_12,
};
createStyles.content = PlatformUtils;
createStyles.emojiContainer = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 4,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xl,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.alignCenter = { textAlign: "center" };
PlatformUtils = { marginVertical: nativeDefault.space.PX_24 };
createStyles.emojiSelectRow = PlatformUtils;
let obj3 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 4,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xl,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.header = {
  marginBottom: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
PlatformUtils = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
createStyles.emojiName = PlatformUtils;
createStyles.burstContainer = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 };
let closure_13 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}",
};
const __initData2 = {
  code: "function DoubleTapToReactActionSheetTsx2(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}",
};
const __initData3 = {
  code: "function DoubleTapToReactActionSheetTsx3(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}",
};
let closure_19 = {
  code: "function DoubleTapToReactActionSheetTsx4(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  emoji = emoji.emoji;
  let selectedEmoji;
  _slicedToArray = undefined;
  let first1;
  let ref;
  let sharedValue1;
  let sharedValue2;
  let memo;
  let callback1;
  const tmp = closure_13();
  let obj = first1;
  const tmp2 = _slicedToArray(first1.useState(false), 2);
  _require = tmp2[1];
  let obj1 = require("initialize");
  let items = [ref];
  const stateFromStores = obj1.useStateFromStores(items, () => ref.useReducedMotion);
  const tmp6 = _slicedToArray(first1.useState(emoji), 2);
  selectedEmoji = tmp6[0];
  asyncGeneratorStep = tmp6[1];
  _slicedToArray = first1.useRef(true);
  const tmp8 = _slicedToArray(first1.useState(false), 2);
  first1 = tmp8[0];
  closure_6 = tmp8[1];
  ref = first1.useRef(null);
  let obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = { transform: null };
      obj = { scale: null };
      obj3 = closure_0(closure_2[12]);
      obj.scale = obj3.interpolate(closure_8.get(), [0, 1], [1, 1.3]);
      items = [,];
      items[0] = obj;
      obj1 = { translateY: null };
      obj5 = closure_0(closure_2[12]);
      obj1.translateY = obj5.interpolate(closure_8.get(), [0, 1], [0, -20]);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
  S.__closure = obj;
  S.__workletHash = 14159749218638;
  S.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(S);
  let obj5 = require("ReanimatedRexport");
  sharedValue1 = obj5.useSharedValue(1);
  let obj6 = require("ReanimatedRexport");
  sharedValue2 = obj6.useSharedValue(1);
  let obj7 = require("ReanimatedRexport");
  class C {
    constructor() {
      obj = { transform: null, opacity: null };
      obj = { scale: closure_9.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj.opacity = closure_10.get();
      return obj;
    }
  }
  C.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
  C.__workletHash = 17229591239241;
  C.__initData = __initData3;
  const items1 = [sharedValue1, sharedValue2, stateFromStores, first1];
  const animatedStyle1 = obj7.useAnimatedStyle(C);
  const items2 = [selectedEmoji];
  const callback = first1.useCallback((arg0, current) => {
    setAnimateConfetti = arg0;
    if (!first1) {
      let set = sharedValue1.set;
      if (current) {
        const result = set(1);
        set = sharedValue2;
        const result1 = sharedValue2.set(1);
      } else {
        const obj = setAnimateConfetti(first[12]);
        const obj2 = setAnimateConfetti(first[13]);
        const withTimingResult = setAnimateConfetti(first[13]).withTiming(0.7, { duration: 0 });
        const result2 = set(
          obj.withSequence(
            withTimingResult,
            setAnimateConfetti(first[16]).withSpring(1, { stiffness: 1500, damping: 60, mass: 3 }),
          ),
        );
        const obj3 = setAnimateConfetti(first[16]);
        const obj4 = setAnimateConfetti(first[12]);
        const obj5 = setAnimateConfetti(first[13]);
        const withTimingResult1 = setAnimateConfetti(first[13]).withTiming(0.6, { duration: 0 });
        const result3 = sharedValue2.set(
          obj4.withSequence(
            withTimingResult1,
            setAnimateConfetti(first[16]).withSpring(1, {
              duration: 200,
              dampingRatio: 0.45,
              mass: 10,
              overshootClamping: true,
            }),
          ),
        );
        const obj6 = setAnimateConfetti(first[16]);
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3(closure_0);
        closure_4.current = current;
      }, 0);
    }
  }, items1);
  memo = first1.useMemo(() => {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    ({ emojiId, emojiName } = setting);
    if (null != emojiId) {
      let customEmojiById = EmojiStore.getCustomEmojiById(emojiId);
    } else {
      customEmojiById = null;
      if (null != emojiName) {
        customEmojiById = UnicodeEmojisDefault.getByName(emojiName);
      }
    }
    let tmp7 = null == customEmojiById;
    if (!tmp7) {
      tmp7 = !DoubleTapToReactUtils.areEmojisEqual(customEmojiById, first);
      const tmpResult = DoubleTapToReactUtils;
    }
    return tmp7;
  }, items2);
  const items3 = [selectedEmoji, stateFromStores];
  const memo1 = first1.useMemo(() => {
    if (null != first.id) {
      const obj = { id: first.id, animated: null, size: null };
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = first.animated;
      }
      obj.animated = animated;
      obj.size = EMOJI_URL_BASE_SIZE;
      let url = obj.getEmojiURL(obj);
    } else {
      url = first.url;
    }
    return url;
  }, items3);
  obj = {
    style: tmp.emoji,
    fastImageStyle: tmp.selectedCustomEmoji,
    textEmojiStyle: tmp.selectedTextEmoji,
    name: null,
    src: null,
  };
  let str = "";
  if (null == selectedEmoji.id) {
    str = selectedEmoji.surrogates;
  }
  obj.name = str;
  obj.src = memo1;
  let tmp18Result = tmp18(stateFromStores(selectedEmoji[21]), obj);
  const items4 = [memo, selectedEmoji];
  callback1 = obj.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp22 = tmp2;
              if (memo) {
                const DoubleTapReactionEmoji = tmp2(1935).DoubleTapReactionEmoji;
                let obj1 = { emojiId: first.id, emojiName: null, animated: null, disableDoubleTap: false };
                tmp22 = first;
                obj1.emojiName = first.name;
                obj1.animated = first.animated;
                dependencyMap = 1;
                c3 = 1;
                const obj2 = { value: DoubleTapReactionEmoji.updateSetting(obj1), done: false };
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
          obj1 = tmp22(1242);
          const obj3 = {
            emoji_id: closure_129_2.id,
            emoji_name: closure_129_2.name,
            emoji_animated: closure_129_2.animated,
            recommended: closure_129_4.current,
            location: tmp22(7182).DOUBLE_TAP_TO_REACT_ACTION_SHEET,
          };
          obj1.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj3);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            closure_0(emoji[24]);
            const obj = { emoji };
            return obj.showDoubleTapEmojiUpdatedToast(obj);
          }, 500);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp24) {
          c3 = tmp;
          throw tmp24;
        }
      }
    }),
    items4,
  );
  const items5 = [stateFromStores, sharedValue, callback1];
  const items6 = [callback1];
  const callback2 = obj.useCallback(() => {
    closure_6(true);
    if (stateFromStores) {
      const result = set(0);
    } else {
      const withTimingResult = timing.withTiming(0, { duration: 0 });
      let obj = { duration: 100, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj.easing = Easing.out(ReanimatedRexport.Easing.quad);
      const withTimingResult1 = timing.withTiming(1, obj);
      const obj5 = timing;
      const fn = function t() {
        return closure_0(first[12]).runOnJS(setAnimateConfetti)(true);
      };
      obj = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
      fn.__closure = obj;
      fn.__workletHash = 13953384401061;
      fn.__initData = __initData;
      const withTimingResult2 = obj5.withTiming(1, { duration: 100 }, undefined, fn);
      const result1 = set(
        obj.withSequence(
          withTimingResult,
          withTimingResult1,
          withTimingResult2,
          spring.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 }),
        ),
      );
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    let num6 = 900;
    if (stateFromStores) {
      num6 = 0;
    }
    ref.current = setTimeout(() => {
      ref.current = null;
      callback1();
      stateFromStores(first[25]).hideActionSheet();
    }, num6);
  }, items5);
  const callback3 = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    callback1();
  }, items6);
  obj1 = { onDismiss: callback3, children: null };
  obj2 = { style: tmp.content, children: null };
  obj3 = { style: tmp.emojiContainer, children: null };
  let obj4 = { style: null, children: null };
  const items7 = [animatedStyle, animatedStyle1];
  obj4.style = items7;
  const items8 = [tmp18Result];
  tmp18Result = null;
  if (!stateFromStores) {
    tmp18Result = null;
    if (tmp2[0]) {
      obj5 = { emojiComponent: tmp18Result };
      tmp18Result = tmp18(EmojiBurstAnimation, obj5);
    }
  }
  items8[1] = tmp18Result;
  obj4.children = items8;
  const items9 = [callback1(stateFromStores(selectedEmoji[12]).View, obj4)];
  obj6 = {
    variant: "text-lg/semibold",
    style: tmp.selectedEmojiText,
    color: "interactive-text-default",
    children: "1",
  };
  items9[1] = memo(require("Text/Text").Text, obj6);
  obj3.children = items9;
  const items10 = [callback1(closure_6, obj3), , , , ,];
  obj7 = {
    variant: "text-sm/normal",
    color: "text-subtle",
    style: tmp.emojiName,
    children: ":" + selectedEmoji.name + ":",
  };
  items10[1] = memo(require("Text/Text").Text, obj7);
  const obj8 = { style: tmp.header, children: null };
  const obj9 = {
    style: tmp.alignCenter,
    variant: "text-lg/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp3(tmp4[28]).intl;
  obj9.children = intl.string(require("util").t.F6lRAI);
  const items11 = [memo(require("Text/Text").Text, obj9), memo(require("renderChannelBadge").NewBadge, {})];
  obj8.children = items11;
  items10[2] = callback1(closure_6, obj8);
  const obj10 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp3(tmp4[28]).intl;
  obj10.children = intl2.string(require("util").t.yIax8g);
  items10[3] = memo(require("Text/Text").Text, obj10);
  items10[4] = memo(stateFromStores(selectedEmoji[30]), {
    style: tmp.emojiSelectRow,
    selectedEmoji,
    onPressEmoji: callback,
  });
  const obj11 = { style: tmp.emojiSelectRow, selectedEmoji, onPressEmoji: callback };
  const tmp20 = stateFromStores(selectedEmoji[21]);
  const tmp3Result = require("DoubleTapToReactUtils");
  const intl3 = tmp3(tmp4[28]).intl;
  const string = intl3.string;
  const t = tmp3(tmp4[28]).t;
  if (areEmojisEqualResult) {
    let stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  items10[5] = memo(require("components/Button/Button").Button, {
    grow: true,
    size: "lg",
    text: stringResult,
    variant: "primary",
    onPress: callback2,
    disabled: first1,
  });
  obj2.children = items10;
  obj1.children = callback1(closure_6, obj2);
  return memo(require("ActionSheet").ActionSheet, obj1);
}
