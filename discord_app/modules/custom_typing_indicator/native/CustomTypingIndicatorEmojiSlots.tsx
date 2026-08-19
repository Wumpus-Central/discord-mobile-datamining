// === Module 14714: EmojiGlyph ===

// Module 14714 (EmojiGlyph)
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import _modDef4115 from "module_4115" /* 4115 */;
import Stack from "Stack" /* 4733 */;
import EmojiDefault from "Emoji" /* 6930 */;
import CustomTypingIndicatorAnimation from "CustomTypingIndicatorAnimation" /* 14707 */;
import getRandomCustomTypingIndicatorEmojis from "getRandomCustomTypingIndicatorEmojis" /* 14709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { EmojiIntention } from "set" /* 1925 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function EmojiGlyph(emoji) {
  emoji = emoji.emoji;
  let obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  if (null != emoji.id) {
    obj = { id: null, animated: null, size: 28 };
    ({ id: obj3[0], animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj[1] = animated;
    emojiURL = getAvatarURLDefault.getEmojiURL(obj);
    const tmp2Result = getAvatarURLDefault;
  }
  obj[1] = emojiURL;
  obj[2] = { width: 28, height: 28 };
  obj[3] = { fontSize: 28, lineHeight: 32 };
  return jsx(EmojiDefault, { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null });
}
function PlaceholderEmojiGlyph(emoji) {
  const pressed = emoji.pressed;
  pressed(4115);
  const fn = function o() {
    const value = pressed.get();
    let obj = { opacity: null, transform: null };
    const obj2 = pressed(dependencyMap[8]);
    const obj3 = pressed(dependencyMap[7]);
    obj[0] = obj2.withSpring(pressed(dependencyMap[7]).interpolate(value, [0, 1], [0.4, 1]), pressed(dependencyMap[9]).ON_PRESS_SPRING);
    obj = { scale: null };
    const interpolateResult = pressed(dependencyMap[7]).interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = pressed(dependencyMap[8]);
    const obj6 = pressed(dependencyMap[7]);
    obj[0] = obj5.withSpring(pressed(dependencyMap[7]).interpolate(value, [0, 1], [1, 1.14]), pressed(dependencyMap[9]).ON_PRESS_SPRING);
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  let obj = { pressed, withSpring: pressed(4744).withSpring, interpolate: pressed(4115).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(4748).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__closure = obj;
  fn.__workletHash = 16574219123934;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: <EmojiGlyph emoji={emoji.emoji} /> };
  return jsx(_modDef4115.View, { style: animatedStyle, children: <EmojiGlyph emoji={emoji.emoji} /> });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  let obj = index(sharedValue[7]);
  sharedValue = obj.useSharedValue(0);
  const items = [index, onChange];
  const items1 = [sharedValue];
  const callback = React.useCallback(() => {
    index(sharedValue[10]);
    let obj = {
      onPressEmoji(id) {
        id = id.id;
        const obj = { id, name: null, animated: null };
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              let str2 = id.optionallyDiverseSequence;
            }
            obj[1] = str2;
            obj[2] = id.animated;
            return callback(closure_0, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR
    };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  const items2 = [sharedValue];
  const callback1 = React.useCallback(() => sharedValue.set(1), items1);
  const callback2 = React.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[11]).intl;
    obj = { slot: null, total: null, emojiName: null };
    obj[0] = index + 1;
    obj[1] = tmp2(tmp3[13]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
    obj[2] = emoji.name;
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[12])["lEsZ+N"], obj);
  } else {
    const intl = tmp2(tmp3[11]).intl;
    obj = { slot: null, total: null };
    obj[0] = index + 1;
    obj[1] = tmp2(tmp3[13]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[12]).O0Pe85, obj);
  }
  obj1 = { style: callback2().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj2 = { emoji: null };
    obj2[0] = emoji;
    let tmp11Result = <EmojiGlyph emoji={null} />;
  } else {
    const obj3 = { emoji: null, pressed: null };
    obj3[0] = index.placeholderEmoji;
    obj3[1] = sharedValue;
    tmp11Result = <PlaceholderEmojiGlyph emoji={null} pressed={null} />;
  }
  obj1[6] = tmp11Result;
  return jsx(index(sharedValue[14]).Card, { style: callback2().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
let closure_7 = createCacheKey.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
let closure_9 = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let result = require("obj132").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  ({ emojis: require, onChange: importDefault } = arg0);
  dependencyMap = callback(React.useState(getRandomCustomTypingIndicatorEmojis.getRandomCustomTypingIndicatorEmojis), 1)[0];
  let obj = { length: CustomTypingIndicatorAnimation.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  obj[2] = Array.from(obj, (arg0, index) => {
    const obj = { index, emoji: null, placeholderEmoji: null, onChange: null };
    let tmp3 = table[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj[1] = tmp3;
    obj[2] = table2[index];
    obj[3] = closure_1;
    return <CustomTypingIndicatorEmojiSlot key={index} index={index} emoji={null} placeholderEmoji={null} onChange={null} />;
  });
  return jsx(Stack.Stack, { length: CustomTypingIndicatorAnimation.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT });
};