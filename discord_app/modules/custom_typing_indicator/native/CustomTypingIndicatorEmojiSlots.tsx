// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

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
  items = [
    closure_11,
    pressed,
    spring_spring.withSpring,
    _mod1652.interpolate,
    0.4,
    springPresets.ON_PRESS_SPRING,
    1.14,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class CustomTypingIndicatorEmojiSlotsTsx1 {
    constructor() {
      value = closure_0.get();
      obj = { opacity: null, transform: null };
      items = [,];
      items[0] = closure_3;
      items[1] = 1;
      obj.opacity = closure_1(closure_2(value, [0, 1], items), closure_4);
      obj1 = { scale: null };
      items1 = [1];
      items1[1] = closure_5;
      obj1.scale = closure_1(closure_2(value, [0, 1], items1), closure_4);
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  CustomTypingIndicatorEmojiSlotsTsx1.__closure = items1;
  CustomTypingIndicatorEmojiSlotsTsx1.__workletHash = 2021761413127;
  CustomTypingIndicatorEmojiSlotsTsx1.__initData = tmp2;
  const animatedStyle = _mod1652.useAnimatedStyle(CustomTypingIndicatorEmojiSlotsTsx1);
  let obj2 = { style: animatedStyle, children: null };
  const obj3 = { size: "custom", style: null };
  const size = { width: v28, height: v28 };
  obj3.style = size;
  obj2.children = <Icon size="custom" style={null} />;
  return jsx(_modDef1652.View, { style: animatedStyle, children: null });
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
const EmojiIntention = fn(1388).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let items = [
  fn(17499).EmojiAngryFaceWithHornsIcon,
  fn(17501).EmojiColdFaceIcon,
  fn(17503).EmojiCowboyHatFaceIcon,
  fn(17505).EmojiCryingFaceIcon,
  fn(17507).EmojiDisguisedFaceIcon,
  fn(17509).EmojiFaceVomitingIcon,
  fn(17511).EmojiFaceWithMonocleIcon,
  fn(17513).EmojiFaceWithSpiralEyesIcon,
  fn(17515).EmojiMeltingFaceIcon,
  fn(17517).EmojiMoneyMouthFaceIcon,
  fn(17519).EmojiNerdFaceIcon,
  fn(17521).EmojiPartyingFaceIcon,
  fn(17523).EmojiSalutingFaceIcon,
  fn(17525).EmojiSkullIcon,
  fn(17527).EmojiSmilingFaceWithHornsIcon,
  fn(17529).EmojiSmilingFaceWithSunglassesIcon,
  fn(17531).EmojiSquintingFaceWithTongueIcon,
  fn(17533).EmojiUpsideDownFaceIcon,
  fn(17535).EmojiWoozyFaceIcon,
  fn(17537).EmojiZanyFaceIcon,
  fn(17539).EmojiRollingOnTheFloorLaughingIcon,
  fn(17541).EmojiSmilingFaceWithHeartsIcon,
];
const createStyles = fn(5141);
let closure_9 = createStyles.createStyles({
  slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" },
});
let closure_11 = {
  code: "(function CustomTypingIndicatorEmojiSlotsTsx1(){let[pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE]=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(emojis) {
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  _slicedToArray = undefined;
  dependencyMap = _slicedToArray(
    noop.useState(() => emojis(12).sampleSize(items, emojis(1407).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)),
    1,
  )[0];
  _slicedToArray = emojis(1407).getCustomTypingIndicatorEmojisKey(emojis);
  const obj2 = { direction: "horizontal", spacing: 8, children: null };
  let obj = emojis(1407);
  obj2.children = Array.from({ length: emojis(1407).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
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
  return jsx(emojis(6147).Stack, { direction: "horizontal", spacing: 8, children: null });
}
