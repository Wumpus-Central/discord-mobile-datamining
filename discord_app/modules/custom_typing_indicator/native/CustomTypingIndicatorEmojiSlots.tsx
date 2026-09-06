// === Module 15360: EmojiGlyph ===

// Module 15360 (EmojiGlyph)
import CUSTOM_TYPING_INDICATOR_EMOJI_COUNT from "CUSTOM_TYPING_INDICATOR_EMOJI_COUNT" /* 1392 */;
import getAvatarURLDefault from "getAvatarURL" /* 1396 */;
import _modDef4296 from "module_4296" /* 4296 */;
import Stack from "Stack" /* 4973 */;
import EmojiDefault from "Emoji" /* 7130 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { EmojiIntention } from "set" /* 1374 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function EmojiGlyph(emoji) {
  emoji = emoji.emoji;
  let obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  if (null != emoji.id) {
    obj = { id: null, animated: null, size: null };
    ({ id: obj3[0], animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj[1] = animated;
    obj[2] = c7;
    emojiURL = getAvatarURLDefault.getEmojiURL(obj);
    const tmp2Result = getAvatarURLDefault;
  }
  obj[1] = emojiURL;
  obj = { width: c7, height: c7 };
  obj[2] = obj;
  obj[3] = { fontSize: c7, lineHeight: 32 };
  return jsx(EmojiDefault, { width: c7, height: c7 });
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  let obj = pressed(4296);
  const fn = function t() {
    const value = pressed.get();
    let obj = { opacity: null, transform: null };
    const obj2 = pressed(closure_1_2[30]);
    const obj3 = pressed(closure_1_2[29]);
    obj[0] = obj2.withSpring(pressed(closure_1_2[29]).interpolate(value, [0, 1], [0.4, 1]), pressed(closure_1_2[31]).ON_PRESS_SPRING);
    obj = { scale: null };
    const interpolateResult = pressed(closure_1_2[29]).interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = pressed(closure_1_2[30]);
    const obj6 = pressed(closure_1_2[29]);
    obj[0] = obj5.withSpring(pressed(closure_1_2[29]).interpolate(value, [0, 1], [1, 1.14]), pressed(closure_1_2[31]).ON_PRESS_SPRING);
    items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { pressed, withSpring: pressed(4974).withSpring, interpolate: pressed(4296).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(4978).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__closure = obj;
  fn.__workletHash = 16574219123934;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: jsx(pressed.Icon, { size: "custom", style: obj1 }) };
  return jsx(_modDef4296.View, { style: animatedStyle, children: jsx(pressed.Icon, { size: "custom", style: obj1 }) });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  let obj = index(sharedValue[29]);
  sharedValue = obj.useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = React.useCallback(() => {
    let obj = index(sharedValue[32]);
    obj = {
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
            return closure_1(closure_0, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: closure_1_5.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  const items2 = [sharedValue];
  const callback1 = React.useCallback(() => sharedValue.set(1), items1);
  const callback2 = React.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[33]).intl;
    obj = { slot: null, total: null, emojiName: null };
    obj[0] = index + 1;
    obj[1] = tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
    obj[2] = emoji.name;
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[34])["lEsZ+N"], obj);
  } else {
    const intl = tmp2(tmp3[33]).intl;
    obj = { slot: null, total: null };
    obj[0] = index + 1;
    obj[1] = tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[34]).O0Pe85, obj);
  }
  obj1 = { style: callback2().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj2 = { emoji: null };
    obj2[0] = emoji;
    let tmp11Result = tmp11(EmojiGlyph, obj2);
  } else {
    const obj3 = { Icon: null, pressed: null };
    obj3[0] = index.placeholderIcon;
    obj3[1] = sharedValue;
    tmp11Result = tmp11(PlaceholderEmojiGlyph, obj3);
  }
  obj1[6] = tmp11Result;
  return jsx(index(sharedValue[36]).Card, { style: callback2().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
let c7 = 28;
let items = [require("EmojiAngryFaceWithHornsIcon").EmojiAngryFaceWithHornsIcon, require("EmojiColdFaceIcon").EmojiColdFaceIcon, require("EmojiCowboyHatFaceIcon").EmojiCowboyHatFaceIcon, require("EmojiCryingFaceIcon").EmojiCryingFaceIcon, require("EmojiDisguisedFaceIcon").EmojiDisguisedFaceIcon, require("EmojiFaceVomitingIcon").EmojiFaceVomitingIcon, require("EmojiFaceWithMonocleIcon").EmojiFaceWithMonocleIcon, require("EmojiFaceWithSpiralEyesIcon").EmojiFaceWithSpiralEyesIcon, require("EmojiMeltingFaceIcon").EmojiMeltingFaceIcon, require("EmojiMoneyMouthFaceIcon").EmojiMoneyMouthFaceIcon, require("EmojiNerdFaceIcon").EmojiNerdFaceIcon, require("EmojiPartyingFaceIcon").EmojiPartyingFaceIcon, require("EmojiSalutingFaceIcon").EmojiSalutingFaceIcon, require("EmojiSkullIcon").EmojiSkullIcon, require("EmojiSmilingFaceWithHornsIcon").EmojiSmilingFaceWithHornsIcon, require("EmojiSmilingFaceWithSunglassesIcon").EmojiSmilingFaceWithSunglassesIcon, require("EmojiSquintingFaceWithTongueIcon").EmojiSquintingFaceWithTongueIcon, require("EmojiUpsideDownFaceIcon").EmojiUpsideDownFaceIcon, require("EmojiWoozyFaceIcon").EmojiWoozyFaceIcon, require("EmojiZanyFaceIcon").EmojiZanyFaceIcon, require("EmojiRollingOnTheFloorLaughingIcon").EmojiRollingOnTheFloorLaughingIcon, require("EmojiSmilingFaceWithHeartsIcon").EmojiSmilingFaceWithHeartsIcon];
let closure_9 = createCacheKey.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
let closure_11 = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  ({ emojis: require, onChange: importDefault } = arg0);
  dependencyMap = undefined;
  dependencyMap = callback(React.useState(() => dependencyMap(12).sampleSize(closure_8, dependencyMap(1392).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)), 1)[0];
  let obj = { direction: "horizontal", spacing: 8, children: null };
  obj = { length: CUSTOM_TYPING_INDICATOR_EMOJI_COUNT.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  obj[2] = Array.from(obj, (arg0, index) => {
    const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
    let tmp3 = dependencyMap[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj[1] = tmp3;
    obj[2] = dependencyMap2[index];
    obj[3] = closure_1;
    return closure_1_6(closure_1_13, obj, index);
  });
  return jsx(Stack.Stack, { length: CUSTOM_TYPING_INDICATOR_EMOJI_COUNT.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT });
};