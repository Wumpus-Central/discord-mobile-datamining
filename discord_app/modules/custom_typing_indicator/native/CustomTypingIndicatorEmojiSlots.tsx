// === Module 17984: CustomTypingIndicatorEmojiSlots ===

// Module 17984 (CustomTypingIndicatorEmojiSlots)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import _mod1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import springPresets from "springPresets" /* 5940 */;
import EmojiDefault from "Emoji" /* 7894 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9543 */;
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji" /* 14594 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1655 = _mod1655;

require = fn;
function EmojiGlyph(emoji) {
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
}
function PlaceholderEmojiGlyph(arg0) {
  ({ Icon, pressed } = arg0);
  items = [closure_11, spring_spring.withSpring, _mod1655.interpolate, pressed, 1.14, springPresets.ON_PRESS_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class CustomTypingIndicatorEmojiSlotsTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: null };
      items = [1];
      items[1] = closure_3;
      obj1.scale = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_4);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  CustomTypingIndicatorEmojiSlotsTsx1.__closure = items1;
  CustomTypingIndicatorEmojiSlotsTsx1.__workletHash = 15621299402355;
  CustomTypingIndicatorEmojiSlotsTsx1.__initData = tmp2;
  const animatedStyle = _mod1655.useAnimatedStyle(CustomTypingIndicatorEmojiSlotsTsx1);
  let obj2 = { style: animatedStyle, children: null };
  const obj3 = { size: "custom", color: nativeDefault.colors.ICON_MUTED, style: null };
  const size = { width: v28, height: v28 };
  obj3.style = size;
  obj2.children = <Icon size="custom" color={nativeDefault.colors.ICON_MUTED} style={null} />;
  return jsx(_modDef1655.View, { style: animatedStyle, children: null });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  ({ emojisKey, placeholderIcon } = index);
  const tmp = closure_9();
  sharedValue = index(sharedValue[30]).useSharedValue(0);
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
    const intl2 = tmp2(tmp3[35]).intl;
    const obj2 = { slot: index + 1, total: tmp2(tmp3[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[36])["lEsZ+N"], obj2);
  } else {
    const intl = tmp2(tmp3[35]).intl;
    const obj3 = { slot: index + 1, total: tmp2(tmp3[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[36]).O0Pe85, obj3);
  }
  const obj4 = { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj5 = { emoji };
    let tmp11Result = <EmojiGlyph key={emojisKey} emoji={emoji} />;
  } else {
    const obj6 = { Icon: placeholderIcon, pressed: sharedValue };
    tmp11Result = <PlaceholderEmojiGlyph Icon={placeholderIcon} pressed={sharedValue} />;
  }
  obj4.children = tmp11Result;
  return jsx(index(sharedValue[38]).Card, { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
const EmojiIntention = fn(1391).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let items = [fn(17985).EmojiAngryFaceWithHornsIcon, fn(17987).EmojiColdFaceIcon, fn(17989).EmojiCowboyHatFaceIcon, fn(17991).EmojiCryingFaceIcon, fn(17993).EmojiDisguisedFaceIcon, fn(17995).EmojiFaceVomitingIcon, fn(17997).EmojiFaceWithMonocleIcon, fn(17999).EmojiFaceWithSpiralEyesIcon, fn(18001).EmojiMeltingFaceIcon, fn(18003).EmojiMoneyMouthFaceIcon, fn(18005).EmojiNerdFaceIcon, fn(18007).EmojiPartyingFaceIcon, fn(18009).EmojiSalutingFaceIcon, fn(18011).EmojiSkullIcon, fn(18013).EmojiSmilingFaceWithHornsIcon, fn(18015).EmojiSmilingFaceWithSunglassesIcon, fn(18017).EmojiSquintingFaceWithTongueIcon, fn(18019).EmojiUpsideDownFaceIcon, fn(18021).EmojiWoozyFaceIcon, fn(18023).EmojiZanyFaceIcon, fn(18025).EmojiRollingOnTheFloorLaughingIcon, fn(18027).EmojiSmilingFaceWithHeartsIcon];
const createStyles = fn(5306);
let closure_9 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
let closure_11 = { code: "(function CustomTypingIndicatorEmojiSlotsTsx1(){let[withSpring,interpolate,pressed,PLACEHOLDER_EMOJI_ACTIVE_SCALE,ON_PRESS_SPRING]=this.__closure;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(emojis) {
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
    return <CustomTypingIndicatorEmojiSlot key={index} index={index} emoji={null} emojisKey={null} placeholderIcon={null} onChange={null} />;
  });
  return jsx(emojis(6337).Stack, { direction: "horizontal", spacing: 8, children: null });
};