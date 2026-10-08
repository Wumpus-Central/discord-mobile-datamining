// === Module 15459: CustomTypingIndicatorEmojiSlots ===

// Module 15459 (CustomTypingIndicatorEmojiSlots)
import c from "c" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import springPresets from "springPresets" /* 5378 */;
import EmojiDefault from "Emoji" /* 6809 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9359 */;
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji" /* 11674 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const EmojiIntention = fn(1392).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let c8 = 0.4;
let c9 = 1.14;
let items = [fn(15460).EmojiAngryFaceWithHornsIcon, fn(15462).EmojiColdFaceIcon, fn(15464).EmojiCowboyHatFaceIcon, fn(15466).EmojiCryingFaceIcon, fn(15468).EmojiDisguisedFaceIcon, fn(15470).EmojiFaceVomitingIcon, fn(15472).EmojiFaceWithMonocleIcon, fn(15474).EmojiFaceWithSpiralEyesIcon, fn(15476).EmojiMeltingFaceIcon, fn(15478).EmojiMoneyMouthFaceIcon, fn(15480).EmojiNerdFaceIcon, fn(15482).EmojiPartyingFaceIcon, fn(15484).EmojiSalutingFaceIcon, fn(15486).EmojiSkullIcon, fn(15488).EmojiSmilingFaceWithHornsIcon, fn(15490).EmojiSmilingFaceWithSunglassesIcon, fn(15492).EmojiSquintingFaceWithTongueIcon, fn(15494).EmojiUpsideDownFaceIcon, fn(15496).EmojiWoozyFaceIcon, fn(15498).EmojiZanyFaceIcon, fn(15500).EmojiRollingOnTheFloorLaughingIcon, fn(15502).EmojiSmilingFaceWithHeartsIcon];
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiGlyph(emoji) {
  const cResult = c.c(9);
  emoji = emoji.emoji;
  const tmp4 = useCanPlayAnimatedEmojiDefault();
  if (cResult[0] === tmp4) {
    if (cResult[1] === emoji.animated) {
      if (cResult[2] === emoji.id) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const size = { width: v28, height: v28 };
        const obj2 = { fontSize: v28, lineHeight: 32 };
        cResult[4] = size;
        cResult[5] = obj2;
        let tmp10 = obj2;
        let tmp9 = size;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      if (cResult[6] === emoji.name) {
        if (cResult[7] === tmp5) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj4 = { name: emoji.name, src: tmp5, fastImageStyle: tmp9, textEmojiStyle: tmp10 };
      const tmp14 = jsx(EmojiDefault, { name: emoji.name, src: tmp5, fastImageStyle: tmp9, textEmojiStyle: tmp10 });
      cResult[6] = emoji.name;
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    const obj5 = { id: null, animated: null, size: null };
    ({ id: obj3.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = tmp4;
    }
    obj5.animated = animated;
    obj5.size = v28;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj5);
    const tmp3Result = AvatarUtilsDefault;
  }
  cResult[0] = tmp4;
  cResult[1] = emoji.animated;
  cResult[2] = emoji.id;
  cResult[3] = emojiURL;
  tmp5 = emojiURL;
}) : (function EmojiGlyph(emoji) {
  emoji = emoji.emoji;
  const obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  const tmp3 = useCanPlayAnimatedEmojiDefault();
  if (null != emoji.id) {
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj3.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = tmp3;
    }
    obj2.animated = animated;
    obj2.size = v28;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmpResult = AvatarUtilsDefault;
  }
  obj.src = emojiURL;
  const size = { width: v28, height: v28 };
  obj.fastImageStyle = size;
  obj.textEmojiStyle = { fontSize: v28, lineHeight: 32 };
  return jsx(EmojiDefault, { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null });
});
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
const __initData2 = { code: "function CustomTypingIndicatorEmojiSlotsTsx2(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlaceholderEmojiGlyph(arg0) {
  const cResult = pressed(576).c(6);
  ({ Icon, pressed } = arg0);
  let obj = pressed(576);
  const fn = function n() {
    value = pressed.get();
    const obj = { opacity: null, transform: null };
    const obj2 = spring;
    items = [c8, 1];
    obj.opacity = obj2.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items), springPresets.ON_PRESS_SPRING);
    const obj4 = { scale: null };
    const interpolateResult = ReanimatedRexport.interpolate(value, [0, 1], items);
    const obj5 = spring;
    const items1 = [1, c9];
    obj4.scale = obj5.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items1), springPresets.ON_PRESS_SPRING);
    const items2 = [obj4];
    obj.transform = items2;
    return obj;
  };
  let obj2 = pressed(4810);
  fn.__closure = { pressed, withSpring: pressed(5374).withSpring, interpolate: pressed(4810).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY, ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE };
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: v28, height: v28 };
    cResult[0] = size;
    let first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== Icon) {
    let obj4 = { size: "custom", style: first };
    const tmp8 = <Icon size="custom" style={first} />;
    cResult[1] = Icon;
    cResult[2] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === animatedStyle) {
    if (cResult[4] === tmp6) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp6 });
  cResult[3] = animatedStyle;
  cResult[4] = tmp6;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  let obj3 = { pressed, withSpring: pressed(5374).withSpring, interpolate: pressed(4810).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY, ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE };
}) : (function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const fn = function o() {
    value = pressed.get();
    const obj = { opacity: null, transform: null };
    const obj2 = spring;
    items = [c8, 1];
    obj.opacity = obj2.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items), springPresets.ON_PRESS_SPRING);
    const obj4 = { scale: null };
    const interpolateResult = ReanimatedRexport.interpolate(value, [0, 1], items);
    const obj5 = spring;
    const items1 = [1, c9];
    obj4.scale = obj5.withSpring(ReanimatedRexport.interpolate(value, [0, 1], items1), springPresets.ON_PRESS_SPRING);
    const items2 = [obj4];
    obj.transform = items2;
    return obj;
  };
  let obj = pressed(4810);
  fn.__closure = { pressed, withSpring: pressed(5374).withSpring, interpolate: pressed(4810).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY, ON_PRESS_SPRING: pressed(5378).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE };
  fn.__workletHash = 4597331743997;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: animatedStyle, children: null };
  let obj4 = { size: "custom", style: null };
  const size = { width: v28, height: v28 };
  obj4.style = size;
  obj3.children = <pressed.Icon size="custom" style={null} />;
  return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorEmojiSlot(index) {
  const cResult = index(sharedValue[28]).c(22);
  index = index.index;
  ({ emoji, emojisKey, placeholderIcon, onChange } = index);
  closure_11();
  let obj = index(sharedValue[28]);
  sharedValue = index(sharedValue[32]).useSharedValue(0);
  if (cResult[0] === index) {
    if (cResult[3] !== sharedValue) {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
      cResult[3] = sharedValue;
      cResult[4] = P;
    } else {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
    }
    if (cResult[5] !== sharedValue) {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
      cResult[5] = sharedValue;
      cResult[6] = tmp9;
    } else {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
    }
    if (cResult[7] === emoji) {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
    }
    if (null != emoji) {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
      const obj4 = { slot: index + 1, total: tmp(tmp2[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
      let formatToPlainStringResult = obj5.formatToPlainString(onChange(tmp2[37])["lEsZ+N"], obj4);
    } else {
      class P {
        constructor() {
          return closure_2.set(1);
        }
      }
      const obj6 = { slot: index + 1, total: tmp(tmp2[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
      formatToPlainStringResult = obj3.formatToPlainString(onChange(tmp2[37]).O0Pe85, obj6);
    }
    cResult[7] = emoji;
    cResult[8] = index;
    cResult[9] = formatToPlainStringResult;
  }
  const fn = function n() {
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
      onPressEmoji(id) {
        id = id.id;
        const obj = { id, name: null, animated: null };
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              let str2 = id.optionallyDiverseSequence;
            }
            obj.name = str2;
            obj.animated = id.animated;
            return onChange(index, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    });
  };
  cResult[0] = index;
  cResult[1] = onChange;
  cResult[2] = fn;
  const obj2 = index(sharedValue[32]);
}) : (function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  ({ emojisKey, placeholderIcon } = index);
  const tmp = closure_11();
  sharedValue = index(sharedValue[32]).useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
      onPressEmoji(id) {
        id = id.id;
        const obj = { id, name: null, animated: null };
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              let str2 = id.optionallyDiverseSequence;
            }
            obj.name = str2;
            obj.animated = id.animated;
            return onChange(index, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    });
  }, items);
  const items2 = [sharedValue];
  const callback1 = noop.useCallback(() => sharedValue.set(1), items1);
  const callback2 = noop.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[36]).intl;
    const obj2 = { slot: index + 1, total: tmp2(tmp3[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[37])["lEsZ+N"], obj2);
  } else {
    const intl = tmp2(tmp3[36]).intl;
    const obj3 = { slot: index + 1, total: tmp2(tmp3[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[37]).O0Pe85, obj3);
  }
  const obj4 = { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj5 = { emoji };
    let tmp11Result = <closure_12 key={emojisKey} emoji={emoji} />;
  } else {
    const obj6 = { Icon: placeholderIcon, pressed: sharedValue };
    tmp11Result = <closure_15 Icon={placeholderIcon} pressed={sharedValue} />;
  }
  obj4.children = tmp11Result;
  return jsx(index(sharedValue[39]).Card, { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorEmojiSlots(emojis) {
  const cResult = emojis(first1[28]).c(8);
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return emojis(first1[40]).sampleSize(items, emojis(first1[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(noop.useState(first), 1)[0];
  if (cResult[1] !== emojis) {
    const customTypingIndicatorEmojisKey = tmp(tmp2[38]).getCustomTypingIndicatorEmojisKey(emojis);
    cResult[1] = emojis;
    cResult[2] = customTypingIndicatorEmojisKey;
    let tmp6 = customTypingIndicatorEmojisKey;
    const tmpResult = tmp(tmp2[38]);
  } else {
    tmp6 = cResult[2];
  }
  _slicedToArray = tmp6;
  if (cResult[3] === emojis) {
    if (cResult[4] === tmp6) {
      if (cResult[5] === onChange) {
        if (cResult[6] === first1) {
          let tmp8 = cResult[7];
        }
        return tmp8;
      }
    }
  }
  const obj2 = { direction: "horizontal", spacing: 8, children: null };
  let obj = emojis(first1[28]);
  obj2.children = Array.from({ length: emojis(first1[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
    const obj = { index, emoji: null, emojisKey: null, placeholderIcon: null, onChange: null };
    let tmp3 = emojis[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj.emoji = tmp3;
    obj.emojisKey = emojisKey;
    obj.placeholderIcon = first1[index];
    obj.onChange = onChange;
    return <closure_16 key={index} index={index} emoji={null} emojisKey={null} placeholderIcon={null} onChange={null} />;
  });
  const tmp9 = jsx(emojis(first1[41]).Stack, { direction: "horizontal", spacing: 8, children: null });
  cResult[3] = emojis;
  cResult[4] = tmp6;
  cResult[5] = onChange;
  cResult[6] = first1;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : (function CustomTypingIndicatorEmojiSlots(emojis) {
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  _slicedToArray = undefined;
  dependencyMap = _slicedToArray(noop.useState(() => emojis(12).sampleSize(items, emojis(1410).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)), 1)[0];
  _slicedToArray = emojis(1410).getCustomTypingIndicatorEmojisKey(emojis);
  const obj2 = { direction: "horizontal", spacing: 8, children: null };
  let obj = emojis(1410);
  obj2.children = Array.from({ length: emojis(1410).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
    const obj = { index, emoji: null, emojisKey: null, placeholderIcon: null, onChange: null };
    let tmp3 = emojis[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj.emoji = tmp3;
    obj.emojisKey = emojisKey;
    obj.placeholderIcon = dependencyMap[index];
    obj.onChange = onChange;
    return <closure_16 key={index} index={index} emoji={null} emojisKey={null} placeholderIcon={null} onChange={null} />;
  });
  return jsx(emojis(5373).Stack, { direction: "horizontal", spacing: 8, children: null });
});