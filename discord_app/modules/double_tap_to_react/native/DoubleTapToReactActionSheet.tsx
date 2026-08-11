// discord_app/modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
import getEmojiToGroupId from "getEmojiToGroupId";
import closure_4 from "set";
import getFallbackDoubleTapDisambiguatedEmoji from "getFallbackDoubleTapDisambiguatedEmoji";
import { View } from "explicitContentFromProto";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import closure_8 from "getEmojiToGroupId";
import { AnalyticEvents } from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "Emoji";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "set";
import set from "set";
import set from "noop";

let closure_12;
let unpackModuleId;
const require = arg1;
function EmojiConfetti(children) {
  let bottom;
  let dependencyMap;
  let left;
  let right;
  const top = children.top;
  ({ bottom, left } = children);
  ({ right, leading: dependencyMap } = children);
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  sharedValue = top(4042).useSharedValue(0);
  let obj = top(4042);
  sharedValue1 = top(4042).useSharedValue(0);
  let obj2 = top(4042);
  sharedValue2 = top(4042).useSharedValue(0.2);
  let obj3 = top(4042);
  sharedValue3 = top(4042).useSharedValue(0);
  let obj4 = top(4042);
  const mountLayoutEffect = top(4730).useMountLayoutEffect(() => {
    let obj = sharedValue;
    let num = 0;
    if (!closure_2) {
      const _Math = Math;
      num = 50 + 150 * Math.random();
    }
    const obj2 = sharedValue1;
    const obj3 = sharedValue2;
    const obj4 = sharedValue3;
    const obj5 = top(outer1_2[12]);
    const obj6 = top(outer1_2[13]);
    const withTimingResult = top(outer1_2[13]).withTiming(0, { duration: num });
    obj = { duration: 600, easing: null };
    const result = 10 * Math.random();
    const Easing = top(outer1_2[12]).Easing;
    obj[1] = Easing.out(top(outer1_2[12]).Easing.ease);
    const result1 = obj.set(obj5.withSequence(withTimingResult, top(outer1_2[13]).withTiming(result + 35, obj)));
    const obj7 = top(outer1_2[13]);
    const obj9 = top(outer1_2[12]);
    const obj10 = top(outer1_2[13]);
    const withTimingResult1 = top(outer1_2[13]).withTiming(0, { duration: num });
    obj = { duration: 600, easing: null };
    const result2 = 40 * Math.random();
    obj[1] = top(outer1_2[12]).Easing.ease;
    const result3 = obj2.set(obj9.withSequence(withTimingResult1, top(outer1_2[13]).withTiming(result2 + 20, obj)));
    const obj11 = top(outer1_2[13]);
    const obj13 = top(outer1_2[12]);
    const obj14 = top(outer1_2[13]);
    const withTimingResult2 = top(outer1_2[13]).withTiming(0, { duration: num });
    const obj15 = top(outer1_2[13]);
    const withTimingResult3 = top(outer1_2[13]).withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const result4 = obj3.set(obj13.withSequence(withTimingResult2, withTimingResult3, top(outer1_2[13]).withTiming(0.5, { duration: 360 })));
    const obj16 = top(outer1_2[13]);
    const obj17 = top(outer1_2[12]);
    const obj18 = top(outer1_2[13]);
    const withTimingResult4 = top(outer1_2[13]).withTiming(0, { duration: num });
    const obj19 = top(outer1_2[13]);
    const withTimingResult5 = top(outer1_2[13]).withTiming(1, { duration: 360 });
    const result5 = obj4.set(obj17.withSequence(withTimingResult4, withTimingResult5, top(outer1_2[13]).withTiming(0, { duration: 240 })));
  });
  let obj5 = top(4730);
  const fn = function f() {
    let obj = { scale: sharedValue2.get() };
    const items = [obj, ];
    let num = 1;
    if (true === left) {
      num = -1;
    }
    obj = { position: "absolute", transform: null, top: null, left: null, opacity: null };
    obj = { rotate: `${num * sharedValue1.get()}deg` };
    items[1] = obj;
    obj[1] = items;
    if (true === top) {
      let value = -sharedValue.get();
      let obj4 = sharedValue;
    } else {
      obj4 = sharedValue;
      value = sharedValue.get();
    }
    obj[2] = value;
    value = obj4.get();
    if (true === left) {
      let result = 1.5 * -value;
    } else {
      result = 1.5 * value;
    }
    obj[3] = result;
    obj[4] = sharedValue3.get();
    return obj;
  };
  fn.__closure = { sizeValue: sharedValue2, left, rotationValue: sharedValue1, top, positionValue: sharedValue, opacityValue: sharedValue3 };
  fn.__workletHash = 1455873119263;
  fn.__initData = closure_14;
  const style = top(4042).useAnimatedStyle(fn);
  return callback3(left(4042).View, { style, children: children.emojiComponent });
}
function EmojiBurstAnimation(emojiComponent) {
  emojiComponent = emojiComponent.emojiComponent;
  const obj = { style: createCacheKey().burstContainer, children: null };
  const items = [callback3(EmojiConfetti, { emojiComponent, top: true, left: true, leading: true }), callback3(EmojiConfetti, { emojiComponent, top: true, right: true }), callback3(EmojiConfetti, { emojiComponent, bottom: true, left: true }), callback3(EmojiConfetti, { emojiComponent, bottom: true, right: true })];
  obj[1] = items;
  return callback4(View, obj);
}
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { emoji: { width: 48, height: 48, zIndex: 2 }, selectedCustomEmoji: { width: 48, height: 48 }, selectedTextEmoji: null, selectedEmojiText: null, content: null, emojiContainer: null, alignCenter: null, emojiSelectRow: null, header: null, emojiName: null, burstContainer: null };
let num = 36;
if (set.isIOS()) {
  num = 48;
}
createCacheKey = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
let num2;
if (set.isIOS()) {
  num2 = 56;
}
createCacheKey[1] = num2;
createCacheKey[3] = require("Themes").colors.INTERACTIVE_TEXT_DEFAULT;
createCacheKey[2] = createCacheKey;
let obj1 = { marginLeft: require("Themes").space.PX_16, fontSize: 40, lineHeight: null };
let num3;
if (set.isIOS()) {
  num3 = 56;
}
obj1[2] = num3;
createCacheKey[3] = obj1;
set = { flexDirection: "column", alignItems: "center", paddingHorizontal: require("Themes").space.PX_4, paddingTop: require("Themes").space.PX_32, paddingBottom: require("Themes").space.PX_12 };
createCacheKey[4] = set;
createCacheKey[5] = { flexDirection: "row", backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.BORDER_STRONG, borderWidth: 4, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, borderRadius: require("Themes").radii.xl, justifyContent: "center", alignItems: "center" };
createCacheKey[6] = { textAlign: "center" };
set = { marginVertical: require("Themes").space.PX_24 };
createCacheKey[7] = set;
let obj3 = { flexDirection: "row", backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.BORDER_STRONG, borderWidth: 4, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, borderRadius: require("Themes").radii.xl, justifyContent: "center", alignItems: "center" };
createCacheKey[8] = { marginBottom: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
set = { marginTop: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_24 };
createCacheKey[9] = set;
createCacheKey[10] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_14 = { code: "function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}" };
let closure_17 = { code: "function DoubleTapToReactActionSheetTsx2(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}" };
let closure_18 = { code: "function DoubleTapToReactActionSheetTsx3(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}" };
let closure_19 = { code: "function DoubleTapToReactActionSheetTsx4(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}" };
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  emoji = emoji.emoji;
  let _require;
  let stateFromStores;
  let first;
  let callback;
  let callback2;
  let first1;
  let closure_6;
  let maybeApplyNoTextColorForLightCustomTheme;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let memo;
  let callback1;
  const tmp = createCacheKey();
  let obj = first1;
  const tmp2 = callback2(first1.useState(false), 2);
  _require = tmp2[1];
  let obj1 = _require(first[15]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj1.useStateFromStores(items, () => ref.useReducedMotion);
  const tmp6 = callback2(first1.useState(emoji), 2);
  first = tmp6[0];
  callback = tmp6[1];
  callback2 = first1.useRef(true);
  const tmp8 = callback2(first1.useState(false), 2);
  first1 = tmp8[0];
  closure_6 = tmp8[1];
  maybeApplyNoTextColorForLightCustomTheme = first1.useRef(null);
  let obj2 = _require(first[12]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = _require(first[12]);
  class S {
    constructor() {
      obj = { transform: null };
      obj = { scale: null };
      obj3 = useState(c2[12]);
      obj[0] = obj3.interpolate(useSharedValue.get(), [0, 1], [1, 1.3]);
      items = [, ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj5 = useState(c2[12]);
      obj1[0] = obj5.interpolate(useSharedValue.get(), [0, 1], [0, -20]);
      items[1] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  obj = { interpolate: _require(first[12]).interpolate, sharedSaveValue: sharedValue };
  S.__closure = obj;
  S.__workletHash = 14159749218638;
  S.__initData = closure_17;
  const animatedStyle = obj3.useAnimatedStyle(S);
  let obj5 = _require(first[12]);
  sharedValue1 = obj5.useSharedValue(1);
  let obj6 = _require(first[12]);
  sharedValue2 = obj6.useSharedValue(1);
  let obj7 = _require(first[12]);
  class C {
    constructor() {
      obj = { transform: null, opacity: null };
      obj = { scale: c9.get() };
      items = [];
      items[0] = obj;
      obj[0] = items;
      obj[1] = useSharedValue.get();
      return obj;
    }
  }
  C.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
  C.__workletHash = 17229591239241;
  C.__initData = closure_18;
  const items1 = [sharedValue1, sharedValue2, stateFromStores, first1];
  const animatedStyle1 = obj7.useAnimatedStyle(C);
  const items2 = [first];
  callback = first1.useCallback((arg0, arg1) => {
    const callback = arg0;
    let closure_1 = arg1;
    if (!first1) {
      let set = sharedValue1.set;
      if (closure_1) {
        const result = set(1);
        set = sharedValue2;
        const result1 = sharedValue2.set(1);
      } else {
        const obj = callback(first[12]);
        const obj2 = callback(first[13]);
        const withTimingResult = callback(first[13]).withTiming(0.7, { duration: 0 });
        const result2 = set(obj.withSequence(withTimingResult, callback(first[16]).withSpring(1, { stiffness: 1500, damping: 60, mass: 3 })));
        const obj3 = callback(first[16]);
        const obj4 = callback(first[12]);
        const obj5 = callback(first[13]);
        const withTimingResult1 = callback(first[13]).withTiming(0.6, { duration: 0 });
        const result3 = sharedValue2.set(obj4.withSequence(withTimingResult1, callback(first[16]).withSpring(1, { duration: 200, dampingRatio: 0.45, mass: 10, overshootClamping: true })));
        const obj6 = callback(first[16]);
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer1_3(closure_0);
        outer1_4.current = closure_1;
      }, 0);
    }
  }, items1);
  memo = first1.useMemo(() => {
    let emojiId;
    let emojiName;
    const DoubleTapReactionEmoji = callback(first[17]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    ({ emojiId, emojiName } = setting);
    if (null != emojiId) {
      let customEmojiById = sharedValue.getCustomEmojiById(emojiId);
    } else {
      customEmojiById = null;
      if (null != emojiName) {
        customEmojiById = stateFromStores(tmp2[18]).getByName(emojiName);
        const obj = stateFromStores(tmp2[18]);
      }
    }
    let tmp7 = null == customEmojiById;
    if (!tmp7) {
      tmp7 = !callback(tmp2[19]).areEmojisEqual(customEmojiById, first);
      const tmpResult = callback(tmp2[19]);
    }
    return tmp7;
  }, items2);
  const items3 = [first, stateFromStores];
  const memo1 = first1.useMemo(() => {
    if (null != first.id) {
      let obj = stateFromStores(first[20]);
      obj = { id: null, animated: null, size: null };
      obj[0] = tmp.id;
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = tmp.animated;
      }
      obj[1] = animated;
      obj[2] = sharedValue2;
      let url = obj.getEmojiURL(obj);
    } else {
      url = tmp.url;
    }
    return url;
  }, items3);
  obj = { style: tmp.emoji, fastImageStyle: tmp.selectedCustomEmoji, textEmojiStyle: tmp.selectedTextEmoji, name: null, src: null };
  let str = "";
  if (null == first.id) {
    str = first.surrogates;
  }
  obj[3] = str;
  obj[4] = memo1;
  let tmp18Result = tmp18(stateFromStores(first[21]), obj);
  const items4 = [memo, first];
  callback1 = obj.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === user) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let closure_0 = tmp2;
            if (outer1_11) {
              const DoubleTapReactionEmoji = outer1_0(user[17]).DoubleTapReactionEmoji;
              let obj1 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
              obj1[0] = user.id;
              obj1[1] = user.name;
              obj1[2] = user.animated;
              user = 1;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = DoubleTapReactionEmoji.updateSetting(obj1);
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        obj1 = outer1_1(user[22]);
        const obj3 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: null, location: null };
        obj3[0] = user.id;
        obj3[1] = user.name;
        obj3[2] = user.animated;
        obj3[3] = ref.current;
        obj3[4] = outer1_1(user[23]).DOUBLE_TAP_TO_REACT_ACTION_SHEET;
        obj1.track(outer1_9.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj3);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj = tmp2(table[24]);
          obj = { emoji: table };
          return obj.showDoubleTapEmojiUpdatedToast(obj);
        }, 500);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp24) {
        c3 = tmp;
        throw tmp24;
      }
    }
  }), items4);
  const items5 = [stateFromStores, sharedValue, callback1];
  const items6 = [callback1];
  callback2 = obj.useCallback(() => {
    callback2(true);
    if (stateFromStores) {
      const result = set(0);
    } else {
      let obj = callback(first[12]);
      const withTimingResult = callback(first[13]).withTiming(0, { duration: 0 });
      const obj2 = callback(first[13]);
      obj = { duration: 100, easing: null };
      const Easing = callback(first[12]).Easing;
      obj[1] = Easing.out(callback(first[12]).Easing.quad);
      const withTimingResult1 = callback(first[13]).withTiming(1, obj);
      const obj5 = callback(first[13]);
      const fn = function t() {
        return outer1_0(outer1_2[12]).runOnJS(closure_0)(true);
      };
      obj = { runOnJS: null, setAnimateConfetti: null };
      obj[0] = callback(first[12]).runOnJS;
      obj[1] = callback;
      fn.__closure = obj;
      fn.__workletHash = 13953384401061;
      fn.__initData = outer1_19;
      const obj3 = callback(first[13]);
      const withTimingResult2 = obj5.withTiming(1, { duration: 100 }, undefined, fn);
      const result1 = set(obj.withSequence(withTimingResult, withTimingResult1, withTimingResult2, callback(first[16]).withSpring(0, { stiffness: 2000, damping: 70, mass: 3 })));
      const obj7 = callback(first[16]);
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp18.current);
    }
    let num6 = 900;
    if (stateFromStores) {
      num6 = 0;
    }
    ref.current = setTimeout(() => {
      maybeApplyNoTextColorForLightCustomTheme.current = null;
      callback();
      outer1_1(outer1_2[25]).hideActionSheet();
    }, num6);
  }, items5);
  const callback3 = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    callback1();
  }, items6);
  obj1 = { onDismiss: callback3, children: null };
  obj2 = { style: tmp.content, children: null };
  obj3 = { style: tmp.emojiContainer, children: null };
  let obj4 = { style: items7, children: null };
  items7 = [animatedStyle, animatedStyle1];
  const items8 = [tmp18Result, ];
  tmp18Result = null;
  if (!stateFromStores) {
    tmp18Result = null;
    if (tmp2[0]) {
      obj5 = { emojiComponent: null };
      obj5[0] = tmp18Result;
      tmp18Result = tmp18(EmojiBurstAnimation, obj5);
    }
  }
  items8[1] = tmp18Result;
  obj4[1] = items8;
  const items9 = [callback1(stateFromStores(first[12]).View, obj4), ];
  obj6 = { variant: "text-lg/semibold", style: tmp.selectedEmojiText, color: "interactive-text-default", children: "1" };
  items9[1] = memo(_require(first[27]).Text, obj6);
  obj3[1] = items9;
  const items10 = [callback1(closure_6, obj3), , , , , ];
  obj7 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.emojiName, children: null };
  obj7[3] = ":" + first.name + ":";
  items10[1] = memo(_require(first[27]).Text, obj7);
  const obj8 = { style: tmp.header, children: null };
  const obj9 = { style: tmp.alignCenter, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp3(tmp4[28]).intl;
  obj9[3] = intl.string(_require(first[28]).t.F6lRAI);
  const items11 = [memo(_require(first[27]).Text, obj9), memo(_require(first[29]).NewBadge, {})];
  obj8[1] = items11;
  items10[2] = callback1(closure_6, obj8);
  const obj10 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp3(tmp4[28]).intl;
  obj10[3] = intl2.string(_require(first[28]).t.yIax8g);
  items10[3] = memo(_require(first[27]).Text, obj10);
  items10[4] = memo(stateFromStores(first[30]), { style: tmp.emojiSelectRow, selectedEmoji: first, onPressEmoji: callback });
  const obj11 = { style: tmp.emojiSelectRow, selectedEmoji: first, onPressEmoji: callback };
  const tmp20 = stateFromStores(first[21]);
  const tmp3Result = _require(first[19]);
  const intl3 = tmp3(tmp4[28]).intl;
  const string = intl3.string;
  const t = tmp3(tmp4[28]).t;
  if (areEmojisEqualResult) {
    let stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  items10[5] = memo(_require(first[31]).Button, { grow: true, size: "lg", text: stringResult, variant: "primary", onPress: callback2, disabled: first1 });
  obj2[1] = items10;
  obj1[1] = callback1(closure_6, obj2);
  return memo(_require(first[26]).ActionSheet, obj1);
};