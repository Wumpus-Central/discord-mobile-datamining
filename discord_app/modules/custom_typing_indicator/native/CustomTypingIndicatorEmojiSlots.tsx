// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

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
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const fn = function t() {
    value = pressed.get();
    const obj = { opacity: null, transform: null };
    const obj2 = spring;
    obj.opacity = obj2.withSpring(
      ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]),
      springPresets.ON_PRESS_SPRING,
    );
    const obj4 = { scale: null };
    const interpolateResult = ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = spring;
    obj4.scale = obj5.withSpring(
      ReanimatedRexport.interpolate(value, [0, 1], [1, 1.14]),
      springPresets.ON_PRESS_SPRING,
    );
    items = [obj4];
    obj.transform = items;
    return obj;
  };
  let obj = pressed(5095);
  fn.__closure = {
    pressed,
    withSpring: pressed(5637).withSpring,
    interpolate: pressed(5095).interpolate,
    PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4,
    ON_PRESS_SPRING: pressed(5638).ON_PRESS_SPRING,
    PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14,
  };
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: animatedStyle, children: null };
  let obj4 = { size: "custom", style: null };
  const size = { width: v28, height: v28 };
  obj4.style = size;
  obj3.children = <pressed.Icon size="custom" style={null} />;
  return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
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
      bypassPremiumEmojiEntitlement: true,
    });
  }, items);
  const items2 = [sharedValue];
  const callback1 = noop.useCallback(() => sharedValue.set(1), items1);
  const callback2 = noop.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[34]).intl;
    const obj2 = { slot: index + 1, total: tmp2(tmp3[36]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[35])["lEsZ+N"], obj2);
  } else {
    const intl = tmp2(tmp3[34]).intl;
    const obj3 = { slot: index + 1, total: tmp2(tmp3[36]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[35]).O0Pe85, obj3);
  }
  const obj4 = {
    style: tmp.slot,
    onPress: callback,
    onPressIn: callback1,
    onPressOut: callback2,
    accessibilityLabel: formatToPlainStringResult,
    radius: 16,
    children: null,
  };
  if (null != emoji) {
    const obj5 = { emoji };
    let tmp11Result = <EmojiGlyph key={emojisKey} emoji={emoji} />;
  } else {
    const obj6 = { Icon: placeholderIcon, pressed: sharedValue };
    tmp11Result = <PlaceholderEmojiGlyph Icon={placeholderIcon} pressed={sharedValue} />;
  }
  obj4.children = tmp11Result;
  return jsx(index(sharedValue[37]).Card, {
    style: tmp.slot,
    onPress: callback,
    onPressIn: callback1,
    onPressOut: callback2,
    accessibilityLabel: formatToPlainStringResult,
    radius: 16,
    children: null,
  });
}
const EmojiIntention = fn(1386).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let items = [
  fn(17343).EmojiAngryFaceWithHornsIcon,
  fn(17345).EmojiColdFaceIcon,
  fn(17347).EmojiCowboyHatFaceIcon,
  fn(17349).EmojiCryingFaceIcon,
  fn(17351).EmojiDisguisedFaceIcon,
  fn(17353).EmojiFaceVomitingIcon,
  fn(17355).EmojiFaceWithMonocleIcon,
  fn(17357).EmojiFaceWithSpiralEyesIcon,
  fn(17359).EmojiMeltingFaceIcon,
  fn(17361).EmojiMoneyMouthFaceIcon,
  fn(17363).EmojiNerdFaceIcon,
  fn(17365).EmojiPartyingFaceIcon,
  fn(17367).EmojiSalutingFaceIcon,
  fn(17369).EmojiSkullIcon,
  fn(17371).EmojiSmilingFaceWithHornsIcon,
  fn(17373).EmojiSmilingFaceWithSunglassesIcon,
  fn(17375).EmojiSquintingFaceWithTongueIcon,
  fn(17377).EmojiUpsideDownFaceIcon,
  fn(17379).EmojiWoozyFaceIcon,
  fn(17381).EmojiZanyFaceIcon,
  fn(17383).EmojiRollingOnTheFloorLaughingIcon,
  fn(17385).EmojiSmilingFaceWithHeartsIcon,
];
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles({
  slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" },
});
const __initData = {
  code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(emojis) {
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  _slicedToArray = undefined;
  dependencyMap = _slicedToArray(
    noop.useState(() => emojis(12).sampleSize(items, emojis(1405).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)),
    1,
  )[0];
  _slicedToArray = emojis(1405).getCustomTypingIndicatorEmojisKey(emojis);
  const obj2 = { direction: "horizontal", spacing: 8, children: null };
  let obj = emojis(1405);
  obj2.children = Array.from({ length: emojis(1405).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
    const obj = { index, emoji: null, emojisKey: null, placeholderIcon: null, onChange: null };
    let tmp3 = emojis[index];
    if (tmp3 == null) {
      tmp3 = null;
    }
    obj.emoji = tmp3;
    obj.emojisKey = emojisKey;
    obj.placeholderIcon = dependencyMap[index];
    obj.onChange = onChange;
    return (
      <CustomTypingIndicatorEmojiSlot
        key={index}
        index={index}
        emoji={null}
        emojisKey={null}
        placeholderIcon={null}
        onChange={null}
      />
    );
  });
  return jsx(emojis(6027).Stack, { direction: "horizontal", spacing: 8, children: null });
}
