// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import CUSTOM_TYPING_INDICATOR_EMOJI_COUNT from "../CustomTypingIndicatorTypes.tsx";
import _modDef4184 from "../../reanimated/ReanimatedRexport.tsx";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { EmojiIntention } from "../../emojis/EmojiConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
    obj[2] = c6;
    emojiURL = getAvatarURLDefault.getEmojiURL(obj);
    const tmp2Result = getAvatarURLDefault;
  }
  obj[1] = emojiURL;
  obj = { width: c6, height: c6 };
  obj[2] = obj;
  obj[3] = { fontSize: c6, lineHeight: 32 };
  return jsx(EmojiDefault, { width: c6, height: c6 });
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  let obj = pressed(4184);
  const fn = function s() {
    const value = pressed.get();
    let obj = { opacity: null, transform: null };
    const obj2 = pressed(closure_1_2[10]);
    const obj3 = pressed(closure_1_2[9]);
    obj[0] = obj2.withSpring(pressed(closure_1_2[9]).interpolate(value, [0, 1], [0.4, 1]), pressed(closure_1_2[11]).ON_PRESS_SPRING);
    obj = { scale: null };
    const interpolateResult = pressed(closure_1_2[9]).interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = pressed(closure_1_2[10]);
    const obj6 = pressed(closure_1_2[9]);
    obj[0] = obj5.withSpring(pressed(closure_1_2[9]).interpolate(value, [0, 1], [1, 1.14]), pressed(closure_1_2[11]).ON_PRESS_SPRING);
    items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { pressed, withSpring: pressed(4878).withSpring, interpolate: pressed(4184).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(4882).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__closure = obj;
  fn.__workletHash = 16574219123934;
  fn.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: jsx(pressed.Icon, { size: "custom", style: obj1 }) };
  return jsx(_modDef4184.View, { style: animatedStyle, children: jsx(pressed.Icon, { size: "custom", style: obj1 }) });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  let obj = index(sharedValue[9]);
  sharedValue = obj.useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = React.useCallback(() => {
    let obj = index(sharedValue[12]);
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
      pickerIntention: closure_1_4.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  const items2 = [sharedValue];
  const callback1 = React.useCallback(() => sharedValue.set(1), items1);
  const callback2 = React.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[13]).intl;
    obj = { slot: null, total: null, emojiName: null };
    obj[0] = index + 1;
    obj[1] = tmp2(tmp3[15]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
    obj[2] = emoji.name;
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[14])["lEsZ+N"], obj);
  } else {
    const intl = tmp2(tmp3[13]).intl;
    obj = { slot: null, total: null };
    obj[0] = index + 1;
    obj[1] = tmp2(tmp3[15]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[14]).O0Pe85, obj);
  }
  obj1 = { style: callback().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
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
  return jsx(index(sharedValue[16]).Card, { style: callback().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
let c6 = 28;
let items = [require("EmojiColdFaceIcon").EmojiColdFaceIcon, require("EmojiCryingFaceIcon").EmojiCryingFaceIcon, require("EmojiSmilingFaceWithHornsIcon").EmojiSmilingFaceWithHornsIcon];
let closure_8 = createCacheKey.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
let closure_10 = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  ({ emojis: require, onChange: importDefault } = arg0);
  let obj = { direction: "horizontal", spacing: 8, children: null };
  obj = { length: CUSTOM_TYPING_INDICATOR_EMOJI_COUNT.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  obj[2] = Array.from(obj, (arg0, index) => {
    const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
    let tmp3 = table[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj[1] = tmp3;
    obj[2] = closure_1_7[index];
    obj[3] = closure_1;
    return closure_1_5(closure_1_12, obj, index);
  });
  return jsx(Stack.Stack, { length: CUSTOM_TYPING_INDICATOR_EMOJI_COUNT.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT });
};