// discord_app/modules/soundboard/native/SoundButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import getSoundboardEmojiUrlDefault from "utils/getSoundboardEmojiUrl.tsx";
import openSoundboardSoundPreviewActionSheetDefault from "utils/openSoundboardSoundPreviewActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const module_1652_mod = _mod1652;

require = fn;
function useAnimation(arg0) {
  items = [closure_11, arg0, _mod1652.withDelay, spring_spring.withSpring, _mod1652.interpolate, closure_8];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  class SoundButtonTsx1 {
    constructor() {
      tmp = closure_0;
      pressed = closure_0.sharedValues.pressed;
      playing = closure_0.sharedValues.playing;
      value = pressed.get();
      num = closure_0.playingAnimationDelay;
      tmp3 = playing.get() > 0;
      tmp4 = closure_1;
      if (num == null) {
        num = 0;
      }
      playing2 = tmp.sharedValues.playing;
      tmp5 = closure_3;
      items = [1];
      items[1] = tmp.scaleFactors.playing;
      pressed2 = tmp.sharedValues.pressed;
      tmp4Result = tmp4(num, closure_2(closure_3(playing2.get(), [0, 1], items), closure_4));
      items1 = [1];
      items1[1] = tmp.scaleFactors.pressed;
      tmp7 = closure_2(closure_3(pressed2.get(), [0, 1], items1), closure_4);
      tmp8 = tmp7;
      if (0 === value) {
        tmp8 = tmp7;
        if (tmp3) {
          tmp8 = tmp4Result;
        }
      }
      items2 = [,];
      items2[0] = { scale: tmp8 };
      pressed3 = tmp.sharedValues.pressed;
      num2 = undefined;
      value1 = pressed3.get();
      if (tmp != null) {
        num2 = tmp.pressedRotationDegrees;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj = { transform: null };
      obj1 = { rotate: null };
      items3 = [0];
      items3[1] = num2;
      obj1.rotate = "" + tmp5(value1, [0, 1], items3) + "deg";
      items2[1] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6];
  SoundButtonTsx1.__closure = items1;
  SoundButtonTsx1.__workletHash = 3937789014357;
  SoundButtonTsx1.__initData = tmp;
  return _mod1652.useAnimatedStyle(SoundButtonTsx1);
}
function SoundButtonEmoji(arg0) {
  ({ sound, sharedValues } = arg0);
  const tmp = closure_9();
  const obj = { style: null, children: null };
  items = [tmp.emojiWrapper, useAnimation({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } })];
  obj.style = items;
  const obj2 = {
    style: useAnimation({
      sharedValues,
      scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 },
      playingAnimationDelay: 100,
      pressedRotationDegrees: -15,
    }),
    children: null,
  };
  const obj3 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: null, name: null };
  const tmp2 = useAnimation({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } });
  obj3.src = getSoundboardEmojiUrlDefault(sound, 24);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj3.name = str;
  obj2.children = hasOwnProperty(EmojiDefault, obj3);
  obj.children = hasOwnProperty(closure_7, obj2);
  return hasOwnProperty(closure_7, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let module_1652 = module_1652_mod;
let closure_7 = module_1652.createAnimatedComponent(View);
let closure_8 = { damping: 10, stiffness: 300, mass: 1 };
const createStyles = fn(5141);
let obj = {
  button: null,
  buttonPressed: null,
  buttonDisabled: null,
  buttonPlaying: null,
  playingBackground: null,
  emoji: null,
  emojiWrapper: null,
  text: null,
  textPlaying: null,
  lock: null,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.button = {
  marginTop: 4,
  height: fn(19332).SOUND_BUTTON_HEIGHT,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
let obj2 = {
  marginTop: 4,
  height: fn(19332).SOUND_BUTTON_HEIGHT,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj.buttonPressed = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj.buttonDisabled = { opacity: 0.5 };
let obj4 = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj.buttonPlaying = {
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
};
const rect = {
  position: "absolute",
  top: 0,
  bottom: 0,
  start: 0,
  end: 0,
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.lg - 2,
};
obj.playingBackground = rect;
const PlatformUtils = fn(1377);
let num;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj.emoji = { height: 24, width: 24, fontSize: num, lineHeight: 28 };
let size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  width: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  backgroundSize: 32,
  borderRadius: nativeDefault.radii.round,
  marginBottom: 8,
};
obj.emojiWrapper = size;
obj.text = { marginHorizontal: 8 };
obj.textPlaying = { marginHorizontal: 6 };
const size1 = {
  position: "absolute",
  top: nativeDefault.space.PX_12,
  end: nativeDefault.space.PX_12,
  width: 12,
  height: 12,
  tintColor: nativeDefault.colors.WHITE,
};
obj.lock = size1;
let closure_9 = createStyles.createStyles(obj);
let module_1652 = module_1652_mod;
let closure_10 = module_1652.createAnimatedComponent(fn(7106).PressableOpacity);
let closure_11 = {
  code: '(function SoundButtonTsx1(){let[animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG]=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+"deg"}]};})',
};
let obj5 = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = noop.memo(function SoundButtonComponent(sound) {
  sound = sound.sound;
  let isPlayingSound = sound;
  const channel = sound.channel;
  let sharedValue = channel;
  const soundGridLocation = sound.soundGridLocation;
  let sharedValue1 = soundGridLocation;
  let flag = sound.isSectionLocked;
  if (flag === undefined) {
    flag = false;
  }
  let playSoundboardSound;
  let analyticsLocations;
  let isLocked;
  let onLockedPress;
  let tmp3 = null != sound.emojiId;
  if (!tmp3) {
    tmp3 = null != sound.emojiName;
  }
  const tmp4 = closure_9();
  const tmp5 = sharedValue(sharedValue1[13])(sound, channel.id);
  playSoundboardSound = tmp5.playSoundboardSound;
  isPlayingSound = tmp5.isPlayingSound;
  let obj = isPlayingSound(sharedValue1[12]);
  analyticsLocations = sharedValue(sharedValue1[14])(sharedValue(tmp2[15]).SOUNDBOARD_BUTTON).analyticsLocations;
  const tmp6 = sharedValue(sharedValue1[14]);
  const soundboardSoundLock = isPlayingSound(sharedValue1[16]).useSoundboardSoundLock(sound, channel);
  isLocked = soundboardSoundLock.isLocked;
  onLockedPress = soundboardSoundLock.onLockedPress;
  items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
  sharedValue1 = undefined;
  const callback = playSoundboardSound.useCallback(() => {
    if (isLocked) {
      onLockedPress(() => {
        const obj = isPlayingSound(sharedValue1[17]);
        const result = obj.openSoundboardSoundPickerActionSheet({
          channel,
          analyticsSource: sharedValue(sharedValue1[15]).PREMIUM_UPSELL,
          initialScrollLocation,
        });
      });
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items);
  const tmpResult = isPlayingSound(sharedValue1[16]);
  sharedValue = isPlayingSound(sharedValue1[4]).useSharedValue(0);
  const tmpResult3 = isPlayingSound(sharedValue1[4]);
  sharedValue1 = isPlayingSound(sharedValue1[4]).useSharedValue(0);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback1 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(1);
  }, items1);
  const items3 = [isPlayingSound, sharedValue1, sharedValue];
  const callback2 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(0);
  }, items2);
  const effect = playSoundboardSound.useEffect(() => {
    let num = 0;
    if (isPlayingSound) {
      num = 1;
    }
    const result = sharedValue1.set(num);
  }, items3);
  const obj2 = { pressed: sharedValue, playing: sharedValue1 };
  const pressed = obj2.pressed;
  const tmpResult4 = isPlayingSound(sharedValue1[4]);
  const items4 = [channel, sound, soundGridLocation, analyticsLocations];
  const tmp14 = useAnimation({ sharedValues: obj2, scaleFactors: { pressed: 0.95, playing: 1.05 } });
  const items5 = [tmp4.button, { width: obj.useSoundButtonStyleConfig().buttonWidth }, , , , ,];
  let buttonPressed = null;
  const callback3 = playSoundboardSound.useCallback(() => {
    openSoundboardSoundPreviewActionSheetDefault(
      sharedValue,
      isPlayingSound,
      analyticsLocations[analyticsLocations.length - 1],
      sharedValue1,
    );
  }, items4);
  if (tmp15) {
    buttonPressed = tmp4.buttonPressed;
  }
  items5[2] = buttonPressed;
  items5[3] = tmp14;
  let buttonPlaying = null;
  if (isPlayingSound) {
    buttonPlaying = tmp4.buttonPlaying;
  }
  items5[4] = buttonPlaying;
  let buttonDisabled = null;
  if (isLocked) {
    buttonDisabled = null;
    if (!flag) {
      buttonDisabled = tmp4.buttonDisabled;
    }
  }
  const obj3 = {
    style: items5,
    accessibilityRole: "button",
    accessibilityLabel: sound.name,
    accessibilityHint: soundboardSoundLock.lockedAccessibilityHint,
    onPressIn: callback1,
    onPressOut: callback2,
    onPress: callback,
    onLongPress: callback3,
    children: null,
  };
  items5[5] = buttonDisabled;
  items5[6] = sound.style;
  let tmp23 = isPlayingSound;
  if (isPlayingSound) {
    const obj4 = { style: tmp4.playingBackground };
    tmp23 = isLocked(tmp18, obj4);
  }
  const items6 = [tmp23, ,];
  if (tmp3) {
    const obj5 = { sharedValues: obj2, sound };
    tmp3 = isLocked(SoundButtonEmoji, obj5);
  }
  items6[1] = tmp3;
  const items7 = [tmp4.text];
  let textPlaying = null;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  items7[1] = textPlaying;
  items6[2] = isLocked(isPlayingSound(sharedValue1[19]).Text, {
    lineClamp: 1,
    style: items7,
    variant: "text-sm/semibold",
    children: sound.name,
  });
  obj3.children = items6;
  const children = [onLockedPress(closure_10, obj3)];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj7 = { style: tmp4.lock };
    isLocked = tmp27(tmp(tmp2[20]).LockIcon, obj7);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
});
