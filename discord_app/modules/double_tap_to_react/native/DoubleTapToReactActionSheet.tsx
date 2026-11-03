// discord_app/modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function EmojiConfetti(arg0) {
  ({ bottom, right, leading: c0 } = arg0);
  ({ emojiComponent, top, left } = arg0);
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const obj2 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0.2);
  const obj3 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj4 = require("../../../../_runtime/metro/01652__.js");
  const mountLayoutEffect = require("useMountEffect").useMountLayoutEffect(() => {
    let num = 0;
    if (!c0) {
      const _Math = Math;
      num = 50 + 150 * Math.random();
    }
    const obj5 = _mod1652;
    const withTimingResult = timing_timing.withTiming(0, { duration: num });
    const obj8 = { duration: 600, easing: null };
    const result = 10 * Math.random();
    const Easing = _mod1652.Easing;
    obj8.easing = Easing.out(_mod1652.Easing.ease);
    const result1 = _undefined.set(obj5.withSequence(withTimingResult, timing_timing.withTiming(result + 35, obj8)));
    const obj9 = _mod1652;
    const withTimingResult1 = timing_timing.withTiming(0, { duration: num });
    const obj12 = { duration: 600, easing: null };
    const result2 = 40 * Math.random();
    obj12.easing = _mod1652.Easing.ease;
    const result3 = c2.set(obj9.withSequence(withTimingResult1, timing_timing.withTiming(result2 + 20, obj12)));
    const obj13 = _mod1652;
    const withTimingResult2 = timing_timing.withTiming(0, { duration: num });
    const withTimingResult3 = timing_timing.withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const result4 = _undefined2.set(
      obj13.withSequence(withTimingResult2, withTimingResult3, timing_timing.withTiming(0.5, { duration: 360 })),
    );
    const obj17 = _mod1652;
    const withTimingResult4 = timing_timing.withTiming(0, { duration: num });
    const withTimingResult5 = timing_timing.withTiming(1, { duration: 360 });
    const result5 = _undefined3.set(
      obj17.withSequence(withTimingResult4, withTimingResult5, timing_timing.withTiming(0, { duration: 240 })),
    );
  });
  let obj5 = require("useMountEffect");
  items = [closure_14, sharedValue2, left, sharedValue1, top, sharedValue, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class DoubleTapToReactActionSheetTsx1 {
    constructor() {
      obj = { scale: closure_0.get() };
      items = [,];
      items[0] = obj;
      tmp = true === closure_1;
      num = 1;
      if (tmp) {
        num = -1;
      }
      rect = { position: "absolute", transform: null, top: null, left: null, opacity: null };
      obj1 = { rotate: `${num * closure_2.get()}deg` };
      items[1] = obj1;
      rect.transform = items;
      if (true === closure_3) {
        tmp3 = closure_4;
        value = -closure_4.get();
        obj4 = closure_4;
      } else {
        obj4 = closure_4;
        value = closure_4.get();
      }
      rect.top = value;
      value1 = obj4.get();
      if (tmp) {
        result = 1.5 * -value1;
      } else {
        result = 1.5 * value1;
      }
      rect.left = result;
      rect.opacity = closure_5.get();
      return rect;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  DoubleTapToReactActionSheetTsx1.__closure = items1;
  DoubleTapToReactActionSheetTsx1.__workletHash = 7386139842022;
  DoubleTapToReactActionSheetTsx1.__initData = tmp7;
  const style = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(DoubleTapToReactActionSheetTsx1);
  return closure_11(_modDef1652.View, { style, children });
}
function EmojiBurstAnimation(emojiComponent) {
  emojiComponent = emojiComponent.emojiComponent;
  const obj = { style: closure_13().burstContainer, children: null };
  items = [
    closure_1_11(EmojiConfetti, { emojiComponent, top: true, left: true, leading: true }),
    closure_1_11(EmojiConfetti, { emojiComponent, top: true, right: true }),
    closure_1_11(EmojiConfetti, { emojiComponent, bottom: true, left: true }),
    closure_1_11(EmojiConfetti, { emojiComponent, bottom: true, right: true }),
  ];
  obj.children = items;
  return application_id(View, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1072).AnalyticEvents;
const EMOJI_URL_BASE_SIZE = fn(1388).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
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
let PlatformUtils = fn(1377);
let num = 36;
if (PlatformUtils.isIOS()) {
  num = 48;
}
let obj4 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1377);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 56;
}
obj4.lineHeight = num2;
obj4.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.selectedTextEmoji = obj4;
let obj6 = { marginLeft: nativeDefault.space.PX_16, fontSize: 40, lineHeight: null };
PlatformUtils = fn(1377);
let num3;
if (PlatformUtils.isIOS()) {
  num3 = 56;
}
obj6.lineHeight = num3;
obj2.selectedEmojiText = obj6;
obj2.content = {
  flexDirection: "column",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_12,
};
let obj8 = {
  flexDirection: "column",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.emojiContainer = {
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
obj2.alignCenter = { textAlign: "center" };
let obj9 = {
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
obj2.emojiSelectRow = { marginVertical: nativeDefault.space.PX_24 };
let obj10 = { marginVertical: nativeDefault.space.PX_24 };
obj2.header = {
  marginBottom: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let obj11 = {
  marginBottom: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.emojiName = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj2.burstContainer = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = {
  code: "(function DoubleTapToReactActionSheetTsx1(){let[sizeValue,left,rotationValue,top,positionValue,opacityValue]=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};})",
};
let closure_17 = {
  code: "(function DoubleTapToReactActionSheetTsx2(){let[interpolate,sharedSaveValue]=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};})",
};
let closure_18 = {
  code: "(function DoubleTapToReactActionSheetTsx3(){let[scaleChangeValue,opacityChangeValue]=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};})",
};
let closure_19 = {
  code: "(function DoubleTapToReactActionSheetTsx4(){let[scheduleOnRN,setAnimateConfetti]=this.__closure;return scheduleOnRN(setAnimateConfetti,true);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  emoji = emoji.emoji;
  let selectedEmoji;
  closure_4 = undefined;
  let first1;
  let ref;
  let sharedValue1;
  let sharedValue2;
  let memo;
  let callback1;
  const tmp = closure_13();
  let tmp2 = closure_4(first1.useState(false), 2);
  _require = tmp2[1];
  items = [ref];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ref.useReducedMotion);
  const tmp6 = closure_4(first1.useState(emoji), 2);
  selectedEmoji = tmp6[0];
  asyncGeneratorStep = tmp6[1];
  closure_4 = first1.useRef(true);
  const tmp8 = closure_4(first1.useState(false), 2);
  first1 = tmp8[0];
  closure_6 = tmp8[1];
  ref = first1.useRef(null);
  let obj2 = require("initialize");
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  let items1 = [closure_17, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items1;
  class DoubleTapToReactActionSheetTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0(closure_1.get(), [0, 1], [1, 1.3]) };
      items = [,];
      items[0] = obj1;
      obj4 = { translateY: closure_0(closure_1.get(), [0, 1], [0, -20]) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp12, tmp13];
  DoubleTapToReactActionSheetTsx2.__closure = items2;
  DoubleTapToReactActionSheetTsx2.__workletHash = 4658248494487;
  DoubleTapToReactActionSheetTsx2.__initData = tmp11;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    DoubleTapToReactActionSheetTsx2,
  );
  let obj4 = require("../../../../_runtime/metro/01652__.js");
  sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmp3Result = require("../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmp3Result4 = require("../../../../_runtime/metro/01652__.js");
  const items3 = [closure_18, sharedValue1, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  [tmp17, tmp18, tmp19] = items3;
  class DoubleTapToReactActionSheetTsx3 {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      obj.opacity = closure_1.get();
      return obj;
    }
  }
  const items4 = [tmp18, tmp19];
  DoubleTapToReactActionSheetTsx3.__closure = items4;
  DoubleTapToReactActionSheetTsx3.__workletHash = 2167494599504;
  DoubleTapToReactActionSheetTsx3.__initData = tmp17;
  const items5 = [sharedValue1, sharedValue2, stateFromStores, first1];
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    DoubleTapToReactActionSheetTsx3,
  );
  const items6 = [selectedEmoji];
  const callback = obj.useCallback((arg0, current) => {
    closure_0 = arg0;
    if (!first1) {
      let set = sharedValue1.set;
      if (current) {
        const result = set(1);
        set = sharedValue2;
        const result1 = sharedValue2.set(1);
      } else {
        const obj = _undefined(first[12]);
        const obj2 = _undefined(first[13]);
        const withTimingResult = _undefined(first[13]).withTiming(0.7, { duration: 0 });
        const result2 = set(
          obj.withSequence(
            withTimingResult,
            _undefined(first[16]).withSpring(1, { stiffness: 1500, damping: 60, mass: 3 }),
          ),
        );
        const obj3 = _undefined(first[16]);
        const obj4 = _undefined(first[12]);
        const obj5 = _undefined(first[13]);
        const withTimingResult1 = _undefined(first[13]).withTiming(0.6, { duration: 0 });
        const result3 = sharedValue2.set(
          obj4.withSequence(
            withTimingResult1,
            _undefined(first[16]).withSpring(1, {
              duration: 133,
              dampingRatio: 0.45,
              mass: 10,
              overshootClamping: true,
            }),
          ),
        );
        const obj6 = _undefined(first[16]);
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3(closure_0);
        closure_4.current = current;
      }, 0);
    }
  }, items5);
  memo = obj.useMemo(() => {
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
  }, items6);
  const items7 = [selectedEmoji, stateFromStores];
  const memo1 = obj.useMemo(() => {
    if (null != first.id) {
      const obj2 = { id: first.id, animated: null, size: null };
      let animated = !c1;
      if (!c1) {
        animated = first.animated;
      }
      obj2.animated = animated;
      obj2.size = EMOJI_URL_BASE_SIZE;
      let url = AvatarUtilsDefault.getEmojiURL(obj2);
    } else {
      url = first.url;
    }
    return url;
  }, items7);
  let obj5 = {
    style: tmp.emoji,
    fastImageStyle: tmp.selectedCustomEmoji,
    textEmojiStyle: tmp.selectedTextEmoji,
    name: null,
    src: null,
  };
  let str = "";
  const tmp3Result5 = require("../../../../_runtime/metro/01652__.js");
  if (null == selectedEmoji.id) {
    str = selectedEmoji.surrogates;
  }
  obj5.name = str;
  obj5.src = memo1;
  const tmp24Result = memo(require("Emoji"), obj5);
  const items8 = [memo, selectedEmoji];
  callback1 = obj.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp22 = tmp2;
              if (memo) {
                const DoubleTapReactionEmoji = tmp2(4966).DoubleTapReactionEmoji;
                const obj5 = { emojiId: first.id, emojiName: null, animated: null, disableDoubleTap: false };
                tmp22 = first;
                obj5.emojiName = first.name;
                obj5.animated = first.animated;
                dependencyMap = 1;
                c3 = 1;
                const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const obj7 = {
            emoji_id: closure_129_2.id,
            emoji_name: closure_129_2.name,
            emoji_animated: closure_129_2.animated,
            recommended: closure_129_4.current,
            location: tmp22(7471).DOUBLE_TAP_TO_REACT_ACTION_SHEET,
          };
          tmp22(1252).track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj7);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => closure_0(emoji[24]).showDoubleTapEmojiUpdatedToast({ emoji }), 500);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp24) {
          c3 = tmp;
          throw tmp24;
        }
      }
    }),
    items8,
  );
  const items9 = [stateFromStores, sharedValue, callback1];
  const items10 = [callback1];
  const callback2 = obj.useCallback(() => {
    closure_6(true);
    if (c1) {
      const result = set(0);
    } else {
      const obj = _mod1652;
      const withTimingResult = timing_timing.withTiming(0, { duration: 0 });
      const obj4 = { duration: 100, easing: null };
      const Easing = _mod1652.Easing;
      obj4.easing = Easing.out(_mod1652.Easing.quad);
      const withTimingResult1 = timing_timing.withTiming(1, obj4);
      const obj5 = timing_timing;
      items = [closure_19, _mod1705.scheduleOnRN, c0];
      c0 = undefined;
      c1 = undefined;
      [tmp11, tmp12, tmp13] = items;
      class DoubleTapToReactActionSheetTsx4 {
        constructor() {
          return closure_0(closure_1, true);
        }
      }
      const items1 = [tmp12, tmp13];
      DoubleTapToReactActionSheetTsx4.__closure = items1;
      DoubleTapToReactActionSheetTsx4.__workletHash = 601184467601;
      DoubleTapToReactActionSheetTsx4.__initData = tmp11;
      const withTimingResult2 = obj5.withTiming(1, { duration: 100 }, undefined, DoubleTapToReactActionSheetTsx4);
      const result1 = set(
        obj.withSequence(
          withTimingResult,
          withTimingResult1,
          withTimingResult2,
          spring_spring.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 }),
        ),
      );
      const tmp4Result = spring_spring;
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    let num6 = 900;
    if (tmp2) {
      num6 = 0;
    }
    ref.current = setTimeout(() => {
      ref.current = null;
      callback1();
      _undefined2(first[26]).hideActionSheet();
    }, num6);
    tmp2 = c1;
  }, items9);
  const callback3 = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    callback1();
  }, items10);
  let obj6 = { onDismiss: callback3, children: null };
  let obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.emojiContainer, children: null };
  const obj9 = { style: null, children: null };
  const items11 = [animatedStyle, animatedStyle1];
  obj9.style = items11;
  const items12 = [tmp24Result];
  let tmp24Result2 = null;
  if (!stateFromStores) {
    tmp24Result2 = null;
    if (tmp2[0]) {
      const obj10 = { emojiComponent: tmp24Result };
      tmp24Result2 = tmp24(EmojiBurstAnimation, obj10);
    }
  }
  items12[1] = tmp24Result2;
  obj9.children = items12;
  const items13 = [
    callback1(require("../../../../_runtime/metro/01652__.js").View, obj9),
    memo(require("Text/Text").Text, {
      variant: "text-lg/semibold",
      style: tmp.selectedEmojiText,
      color: "interactive-text-default",
      children: "1",
    }),
  ];
  obj8.children = items13;
  const items14 = [callback1(closure_6, obj8), , , , ,];
  const obj11 = {
    variant: "text-lg/semibold",
    style: tmp.selectedEmojiText,
    color: "interactive-text-default",
    children: "1",
  };
  const tmp26 = require("Emoji");
  items14[1] = memo(require("Text/Text").Text, {
    variant: "text-sm/normal",
    color: "text-subtle",
    style: tmp.emojiName,
    children: ":" + selectedEmoji.name + ":",
  });
  const obj13 = { style: tmp.header, children: null };
  const obj14 = {
    style: tmp.alignCenter,
    variant: "text-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp3(tmp4[29]).intl;
  obj14.children = intl.string(require("util").t.F6lRAI);
  const items15 = [memo(require("Text/Text").Text, obj14), memo(require("renderChannelBadge").NewBadge, {})];
  obj13.children = items15;
  items14[2] = callback1(closure_6, obj13);
  const obj15 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp3(tmp4[29]).intl;
  obj15.children = intl2.string(require("util").t.yIax8g);
  items14[3] = memo(require("Text/Text").Text, obj15);
  items14[4] = memo(require("SelectDoubleTapEmojiRow"), {
    style: tmp.emojiSelectRow,
    selectedEmoji,
    onPressEmoji: callback,
  });
  const obj12 = {
    variant: "text-sm/normal",
    color: "text-subtle",
    style: tmp.emojiName,
    children: ":" + selectedEmoji.name + ":",
  };
  const obj16 = { style: tmp.emojiSelectRow, selectedEmoji, onPressEmoji: callback };
  const tmp3Result6 = require("DoubleTapToReactUtils");
  const intl3 = tmp3(tmp4[29]).intl;
  const string = intl3.string;
  const t = tmp3(tmp4[29]).t;
  if (areEmojisEqualResult) {
    let stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  items14[5] = memo(require("components/Button/Button").Button, {
    grow: true,
    size: "lg",
    text: stringResult,
    variant: "primary",
    onPress: callback2,
    disabled: first1,
  });
  obj7.children = items14;
  obj6.children = callback1(closure_6, obj7);
  return memo(require("ActionSheet").ActionSheet, obj6);
}
