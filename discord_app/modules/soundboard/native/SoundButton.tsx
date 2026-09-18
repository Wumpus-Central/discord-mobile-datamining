// discord_app/modules/soundboard/native/SoundButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import getSoundboardEmojiUrlDefault from "utils/getSoundboardEmojiUrl.tsx";
import openSoundboardSoundPreviewActionSheetDefault from "utils/openSoundboardSoundPreviewActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
function SoundButtonEmoji(arg0) {
  ({ sound, sharedValues } = arg0);
  const tmp = closure_9();
  const animationConfig = { sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } };
  const fn = function o() {
    const pressed = isPlayingSound.sharedValues.pressed;
    const playing = isPlayingSound.sharedValues.playing;
    value = pressed.get();
    const tmp3 = playing.get() > 0;
    let num = isPlayingSound.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    const obj = ReanimatedRexport2;
    const tmp4Result = spring;
    const playing2 = isPlayingSound.sharedValues.playing;
    const items = [1, isPlayingSound.scaleFactors.playing];
    const tmp4Result5 = ReanimatedRexport2;
    const withDelayResult = obj.withDelay(
      num,
      tmp4Result.withSpring(ReanimatedRexport2.interpolate(playing2.get(), [0, 1], items), closure_8),
    );
    const tmp4Result6 = spring;
    const pressed2 = isPlayingSound.sharedValues.pressed;
    const items1 = [1, isPlayingSound.scaleFactors.pressed];
    const withSpringResult = tmp4Result6.withSpring(
      ReanimatedRexport2.interpolate(pressed2.get(), [0, 1], items1),
      closure_8,
    );
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }];
    const tmp4Result7 = ReanimatedRexport2;
    const pressed3 = isPlayingSound.sharedValues.pressed;
    let num2 = isPlayingSound.pressedRotationDegrees;
    value2 = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    const obj2 = { transform: null };
    const obj3 = { rotate: null };
    const items3 = [0, num2];
    obj3.rotate = "" + ReanimatedRexport2.interpolate(value2, [0, 1], items3) + "deg";
    items2[1] = obj3;
    obj2.transform = items2;
    return obj2;
  };
  const obj2 = animationConfig(4458);
  fn.__closure = {
    animationConfig,
    withDelay: animationConfig(4458).withDelay,
    withSpring: animationConfig(5143).withSpring,
    interpolate: animationConfig(4458).interpolate,
    SPRING_CONFIG,
  };
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  const obj4 = {
    sharedValues,
    scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 },
    playingAnimationDelay: 100,
    pressedRotationDegrees: -15,
  };
  closure_129_0 = obj4;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = {
    animationConfig,
    withDelay: animationConfig(4458).withDelay,
    withSpring: animationConfig(5143).withSpring,
    interpolate: animationConfig(4458).interpolate,
    SPRING_CONFIG,
  };
  const fn2 = function o() {
    const pressed = isPlayingSound.sharedValues.pressed;
    const playing = isPlayingSound.sharedValues.playing;
    value = pressed.get();
    const tmp3 = playing.get() > 0;
    let num = isPlayingSound.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    const obj = ReanimatedRexport2;
    const tmp4Result = spring;
    const playing2 = isPlayingSound.sharedValues.playing;
    const items = [1, isPlayingSound.scaleFactors.playing];
    const tmp4Result5 = ReanimatedRexport2;
    const withDelayResult = obj.withDelay(
      num,
      tmp4Result.withSpring(ReanimatedRexport2.interpolate(playing2.get(), [0, 1], items), closure_8),
    );
    const tmp4Result6 = spring;
    const pressed2 = isPlayingSound.sharedValues.pressed;
    const items1 = [1, isPlayingSound.scaleFactors.pressed];
    const withSpringResult = tmp4Result6.withSpring(
      ReanimatedRexport2.interpolate(pressed2.get(), [0, 1], items1),
      closure_8,
    );
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }];
    const tmp4Result7 = ReanimatedRexport2;
    const pressed3 = isPlayingSound.sharedValues.pressed;
    let num2 = isPlayingSound.pressedRotationDegrees;
    value2 = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    const obj2 = { transform: null };
    const obj3 = { rotate: null };
    const items3 = [0, num2];
    obj3.rotate = "" + ReanimatedRexport2.interpolate(value2, [0, 1], items3) + "deg";
    items2[1] = obj3;
    obj2.transform = items2;
    return obj2;
  };
  const obj5 = animationConfig(4458);
  fn2.__closure = {
    animationConfig: obj4,
    withDelay: animationConfig(4458).withDelay,
    withSpring: animationConfig(5143).withSpring,
    interpolate: animationConfig(4458).interpolate,
    SPRING_CONFIG,
  };
  fn2.__workletHash = 13932429225740;
  fn2.__initData = __initData;
  const obj7 = { style: null, children: null };
  const items = [tmp.emojiWrapper, animatedStyle];
  obj7.style = items;
  const obj8 = { style: obj5.useAnimatedStyle(fn2), children: null };
  const obj9 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: null, name: null };
  const obj6 = {
    animationConfig: obj4,
    withDelay: animationConfig(4458).withDelay,
    withSpring: animationConfig(5143).withSpring,
    interpolate: animationConfig(4458).interpolate,
    SPRING_CONFIG,
  };
  obj9.src = getSoundboardEmojiUrlDefault(sound, 24);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj9.name = str;
  obj8.children = closure_5(EmojiDefault, obj9);
  obj7.children = closure_5(closure_7, obj8);
  return closure_5(closure_7, obj7);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_7 = ReanimatedRexport.createAnimatedComponent(View);
const SPRING_CONFIG = { damping: 10, stiffness: 300, mass: 1 };
const createStyles = fn(4722);
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
  height: fn(17437).SOUND_BUTTON_HEIGHT,
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
  height: fn(17437).SOUND_BUTTON_HEIGHT,
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
obj.buttonPlaying = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.STATUS_SPEAKING };
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
const PlatformUtils = fn(1364);
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
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(5292).PressableOpacity);
const __initData = {
  code: 'function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+"deg"}]};}',
};
let obj5 = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.STATUS_SPEAKING };
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
  let items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
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
  const tmpResult4 = isPlayingSound(sharedValue1[4]);
  sharedValue1 = isPlayingSound(sharedValue1[4]).useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback1 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(1);
  }, items1);
  let items3 = [isPlayingSound, sharedValue1, sharedValue];
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
  let obj2 = { pressed: sharedValue, playing: sharedValue1 };
  let obj3 = { sharedValues: obj2, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  closure_129_0 = obj3;
  const tmpResult5 = isPlayingSound(sharedValue1[4]);
  const fn = function o() {
    const pressed = isPlayingSound.sharedValues.pressed;
    const playing = isPlayingSound.sharedValues.playing;
    value = pressed.get();
    const tmp3 = playing.get() > 0;
    let num = isPlayingSound.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    const obj = ReanimatedRexport2;
    const tmp4Result = spring;
    const playing2 = isPlayingSound.sharedValues.playing;
    const items = [1, isPlayingSound.scaleFactors.playing];
    const tmp4Result5 = ReanimatedRexport2;
    const withDelayResult = obj.withDelay(
      num,
      tmp4Result.withSpring(ReanimatedRexport2.interpolate(playing2.get(), [0, 1], items), closure_8),
    );
    const tmp4Result6 = spring;
    const pressed2 = isPlayingSound.sharedValues.pressed;
    const items1 = [1, isPlayingSound.scaleFactors.pressed];
    const withSpringResult = tmp4Result6.withSpring(
      ReanimatedRexport2.interpolate(pressed2.get(), [0, 1], items1),
      closure_8,
    );
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }];
    const tmp4Result7 = ReanimatedRexport2;
    const pressed3 = isPlayingSound.sharedValues.pressed;
    let num2 = isPlayingSound.pressedRotationDegrees;
    value2 = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    const obj2 = { transform: null };
    const obj3 = { rotate: null };
    const items3 = [0, num2];
    obj3.rotate = "" + ReanimatedRexport2.interpolate(value2, [0, 1], items3) + "deg";
    items2[1] = obj3;
    obj2.transform = items2;
    return obj2;
  };
  const tmpResult6 = isPlayingSound(sharedValue1[4]);
  fn.__closure = {
    animationConfig: obj3,
    withDelay: isPlayingSound(sharedValue1[4]).withDelay,
    withSpring: isPlayingSound(sharedValue1[9]).withSpring,
    interpolate: isPlayingSound(sharedValue1[4]).interpolate,
    SPRING_CONFIG,
  };
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  let pressed = obj2.pressed;
  const animatedStyle = tmpResult6.useAnimatedStyle(fn);
  const items4 = [channel, sound, soundGridLocation, analyticsLocations];
  const obj4 = {
    animationConfig: obj3,
    withDelay: isPlayingSound(sharedValue1[4]).withDelay,
    withSpring: isPlayingSound(sharedValue1[9]).withSpring,
    interpolate: isPlayingSound(sharedValue1[4]).interpolate,
    SPRING_CONFIG,
  };
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
  items5[3] = animatedStyle;
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
  const obj5 = {
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
    const obj6 = { style: tmp4.playingBackground };
    tmp23 = isLocked(tmp18, obj6);
  }
  const items6 = [tmp23, ,];
  if (tmp3) {
    const obj7 = { sharedValues: obj2, sound };
    tmp3 = isLocked(SoundButtonEmoji, obj7);
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
  obj5.children = items6;
  const children = [onLockedPress(closure_10, obj5)];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj9 = { style: tmp4.lock };
    isLocked = tmp27(tmp(tmp2[20]).LockIcon, obj9);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
});
