// === Module 15392: CustomTypingIndicatorEmojiSlots ===

// Module 15392 (CustomTypingIndicatorEmojiSlots)
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1392 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import Stack_Stack from "Stack/Stack" /* 4987 */;
import spring from "spring" /* 4988 */;
import springPresets from "springPresets" /* 4992 */;
import EmojiDefault from "Emoji" /* 7144 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11153 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function EmojiGlyph(emoji) {
  emoji = emoji.emoji;
  let obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  if (null != emoji.id) {
    obj = { id: null, animated: null, size: null };
    ({ id: obj3.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj.animated = animated;
    obj.size = v28;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj);
    const tmp2Result = AvatarUtilsDefault;
  }
  obj.src = emojiURL;
  const size = { width: v28, height: v28 };
  obj.fastImageStyle = size;
  obj.textEmojiStyle = { fontSize: v28, lineHeight: 32 };
  return jsx(EmojiDefault, { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null });
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  pressed(4310);
  const fn = function t() {
    value = pressed.get();
    let obj = { opacity: null, transform: null };
    const obj2 = spring;
    obj.opacity = obj2.withSpring(ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]), springPresets.ON_PRESS_SPRING);
    obj = { scale: null };
    const interpolateResult = ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = spring;
    obj.scale = obj5.withSpring(ReanimatedRexport.interpolate(value, [0, 1], [1, 1.14]), springPresets.ON_PRESS_SPRING);
    items = [obj];
    obj.transform = items;
    return obj;
  };
  let obj = { pressed, withSpring: pressed(4988).withSpring, interpolate: pressed(4310).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(4992).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__closure = obj;
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: null };
  const obj1 = { size: "custom", style: null };
  const size = { width: v28, height: v28 };
  obj1.style = size;
  obj.children = <pressed.Icon size="custom" style={null} />;
  return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  let obj = index(sharedValue[29]);
  sharedValue = obj.useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    let obj = {
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
    };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  const items2 = [sharedValue];
  const callback1 = noop.useCallback(() => sharedValue.set(1), items1);
  const callback2 = noop.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[33]).intl;
    obj = { slot: index + 1, total: tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[34])["lEsZ+N"], obj);
  } else {
    const intl = tmp2(tmp3[33]).intl;
    obj = { slot: index + 1, total: tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[34]).O0Pe85, obj);
  }
  const obj1 = { style: closure_9().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj2 = { emoji };
    let tmp11Result = <EmojiGlyph emoji={emoji} />;
  } else {
    const obj3 = { Icon: index.placeholderIcon, pressed: sharedValue };
    tmp11Result = <PlaceholderEmojiGlyph Icon={index.placeholderIcon} pressed={sharedValue} />;
  }
  obj1.children = tmp11Result;
  return jsx(index(sharedValue[36]).Card, { style: closure_9().slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
const EmojiIntention = fn(1374).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let items = [fn(15393).EmojiAngryFaceWithHornsIcon, fn(15395).EmojiColdFaceIcon, fn(15397).EmojiCowboyHatFaceIcon, fn(15399).EmojiCryingFaceIcon, fn(15401).EmojiDisguisedFaceIcon, fn(15403).EmojiFaceVomitingIcon, fn(15405).EmojiFaceWithMonocleIcon, fn(15407).EmojiFaceWithSpiralEyesIcon, fn(15409).EmojiMeltingFaceIcon, fn(15411).EmojiMoneyMouthFaceIcon, fn(15413).EmojiNerdFaceIcon, fn(15415).EmojiPartyingFaceIcon, fn(15417).EmojiSalutingFaceIcon, fn(15419).EmojiSkullIcon, fn(15421).EmojiSmilingFaceWithHornsIcon, fn(15423).EmojiSmilingFaceWithSunglassesIcon, fn(15425).EmojiSquintingFaceWithTongueIcon, fn(15427).EmojiUpsideDownFaceIcon, fn(15429).EmojiWoozyFaceIcon, fn(15431).EmojiZanyFaceIcon, fn(15433).EmojiRollingOnTheFloorLaughingIcon, fn(15435).EmojiSmilingFaceWithHeartsIcon];
const createStyles = fn(4574);
let closure_9 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  ({ emojis: require, onChange: importDefault } = arg0);
  dependencyMap = _slicedToArray(noop.useState(() => dependencyMap(12).sampleSize(items, dependencyMap(1392).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)), 1)[0];
  let obj = { direction: "horizontal", spacing: 8, children: null };
  obj = { length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  obj.children = Array.from(obj, (arg0, index) => {
    const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
    let tmp3 = dependencyMap[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj.emoji = tmp3;
    obj.placeholderIcon = dependencyMap2[index];
    obj.onChange = onChange;
    return <CustomTypingIndicatorEmojiSlot key={index} index={index} emoji={null} placeholderIcon={null} onChange={null} />;
  });
  return jsx(Stack_Stack.Stack, { length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT });
};