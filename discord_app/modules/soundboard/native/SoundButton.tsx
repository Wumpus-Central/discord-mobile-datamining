// === Module 17069: SoundButton ===

// Module 17069 (SoundButton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import EmojiDefault from "Emoji" /* 7130 */;
import getSoundboardEmojiUrlDefault from "getSoundboardEmojiUrl" /* 11935 */;
import openSoundboardSoundPreviewActionSheetDefault from "openSoundboardSoundPreviewActionSheet" /* 17075 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function SoundButtonEmoji(arg0) {
  ({ sound, sharedValues } = arg0);
  const tmp = closure_9();
  let animationConfig = { sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } };
  let obj1 = animationConfig(4296);
  const fn = function o() {
    const pressed = isPlayingSound.sharedValues.pressed;
    const playing = isPlayingSound.sharedValues.playing;
    value = pressed.get();
    let obj = ReanimatedRexport2;
    let num = isPlayingSound.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    const tmp4Result = ReanimatedRexport2;
    const playing2 = isPlayingSound.sharedValues.playing;
    const items = [1, isPlayingSound.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), closure_8));
    const tmp4Result1 = spring;
    const pressed2 = isPlayingSound.sharedValues.pressed;
    const items1 = [1, isPlayingSound.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(ReanimatedRexport2.interpolate(pressed2.get(), [0, 1], items1), closure_8);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = ReanimatedRexport2;
    const pressed3 = isPlayingSound.sharedValues.pressed;
    let num2 = isPlayingSound.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: null };
    const items3 = [0, num2];
    obj.rotate = "" + ReanimatedRexport2.interpolate(value, [0, 1], items3) + "deg";
    items2[1] = obj;
    obj.transform = items2;
    return obj;
  };
  animationConfig = { animationConfig, withDelay: animationConfig(4296).withDelay, withSpring: animationConfig(4974).withSpring, interpolate: animationConfig(4296).interpolate, SPRING_CONFIG };
  fn.__closure = animationConfig;
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  animationConfig = { sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 };
  closure_129_0 = animationConfig;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj4 = animationConfig(4296);
  const fn2 = function o() {
    const pressed = isPlayingSound.sharedValues.pressed;
    const playing = isPlayingSound.sharedValues.playing;
    value = pressed.get();
    let obj = ReanimatedRexport2;
    let num = isPlayingSound.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    const tmp4Result = ReanimatedRexport2;
    const playing2 = isPlayingSound.sharedValues.playing;
    const items = [1, isPlayingSound.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), closure_8));
    const tmp4Result1 = spring;
    const pressed2 = isPlayingSound.sharedValues.pressed;
    const items1 = [1, isPlayingSound.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(ReanimatedRexport2.interpolate(pressed2.get(), [0, 1], items1), closure_8);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = ReanimatedRexport2;
    const pressed3 = isPlayingSound.sharedValues.pressed;
    let num2 = isPlayingSound.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: null };
    const items3 = [0, num2];
    obj.rotate = "" + ReanimatedRexport2.interpolate(value, [0, 1], items3) + "deg";
    items2[1] = obj;
    obj.transform = items2;
    return obj;
  };
  obj1 = { animationConfig, withDelay: animationConfig(4296).withDelay, withSpring: animationConfig(4974).withSpring, interpolate: animationConfig(4296).interpolate, SPRING_CONFIG };
  fn2.__closure = obj1;
  fn2.__workletHash = 13932429225740;
  fn2.__initData = __initData;
  const obj2 = { style: null, children: null };
  const items = [tmp.emojiWrapper, animatedStyle];
  obj2.style = items;
  const obj3 = { style: obj4.useAnimatedStyle(fn2), children: null };
  obj4 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: getSoundboardEmojiUrlDefault(sound, 24), name: null };
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj4.name = str;
  obj3.children = closure_5(EmojiDefault, obj4);
  obj2.children = closure_5(closure_7, obj3);
  return closure_5(closure_7, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = ReanimatedRexport.createAnimatedComponent(View);
const SPRING_CONFIG = { damping: 10, stiffness: 300, mass: 1 };
fn(4560);
let obj = { button: null, buttonPressed: null, buttonDisabled: null, buttonPlaying: null, playingBackground: null, emoji: null, emojiWrapper: null, text: null, textPlaying: null, lock: null };
obj = { marginTop: 4, height: fn(17062).SOUND_BUTTON_HEIGHT, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.button = obj;
obj.buttonPressed = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj.buttonDisabled = { opacity: 0.5 };
const createStyles = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.STATUS_SPEAKING };
obj.buttonPlaying = createStyles;
const rect = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.lg - 2 };
obj.playingBackground = rect;
const PlatformUtils = fn(1115);
let num;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj.emoji = { height: 24, width: 24, fontSize: num, lineHeight: 28 };
let size = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: nativeDefault.radii.round, marginBottom: 8 };
obj.emojiWrapper = size;
obj.text = { marginHorizontal: 8 };
obj.textPlaying = { marginHorizontal: 6 };
const size1 = { position: "absolute", top: nativeDefault.space.PX_12, end: nativeDefault.space.PX_12, width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
obj.lock = size1;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(5123).PressableOpacity);
const __initData = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
let obj1 = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
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
  let obj = isPlayingSound(sharedValue1[12]);
  let tmp3 = null != sound.emojiId;
  if (!tmp3) {
    tmp3 = null != sound.emojiName;
  }
  const tmp4 = closure_9();
  const tmp5 = sharedValue(sharedValue1[13])(sound, channel.id);
  playSoundboardSound = tmp5.playSoundboardSound;
  isPlayingSound = tmp5.isPlayingSound;
  analyticsLocations = sharedValue(sharedValue1[14])(sharedValue(tmp2[15]).SOUNDBOARD_BUTTON).analyticsLocations;
  let tmpResult = tmp(tmp2[16]);
  const soundboardSoundLock = tmpResult.useSoundboardSoundLock(sound, channel);
  isLocked = soundboardSoundLock.isLocked;
  onLockedPress = soundboardSoundLock.onLockedPress;
  let items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
  sharedValue1 = undefined;
  const callback = playSoundboardSound.useCallback(() => {
    if (isLocked) {
      onLockedPress(() => {
        isPlayingSound(sharedValue1[17]);
        const obj = { channel, analyticsSource: sharedValue(sharedValue1[15]).PREMIUM_UPSELL, initialScrollLocation };
        const result = obj.openSoundboardSoundPickerActionSheet(obj);
      });
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items);
  tmpResult = tmp(tmp2[4]);
  sharedValue = tmpResult.useSharedValue(0);
  const tmp6 = sharedValue(sharedValue1[14]);
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
  obj = { pressed: sharedValue, playing: sharedValue1 };
  obj = { sharedValues: obj, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  closure_129_0 = obj;
  const tmpResult1 = isPlayingSound(sharedValue1[4]);
  const fn = function o() {
    const pressed = isPlayingSound.sharedValues.pressed;
    const playing = isPlayingSound.sharedValues.playing;
    value = pressed.get();
    let obj = ReanimatedRexport2;
    let num = isPlayingSound.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    const tmp4Result = ReanimatedRexport2;
    const playing2 = isPlayingSound.sharedValues.playing;
    const items = [1, isPlayingSound.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), closure_8));
    const tmp4Result1 = spring;
    const pressed2 = isPlayingSound.sharedValues.pressed;
    const items1 = [1, isPlayingSound.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(ReanimatedRexport2.interpolate(pressed2.get(), [0, 1], items1), closure_8);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = ReanimatedRexport2;
    const pressed3 = isPlayingSound.sharedValues.pressed;
    let num2 = isPlayingSound.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: null };
    const items3 = [0, num2];
    obj.rotate = "" + ReanimatedRexport2.interpolate(value, [0, 1], items3) + "deg";
    items2[1] = obj;
    obj.transform = items2;
    return obj;
  };
  const tmpResult2 = isPlayingSound(sharedValue1[4]);
  fn.__closure = { animationConfig: obj, withDelay: isPlayingSound(sharedValue1[4]).withDelay, withSpring: isPlayingSound(sharedValue1[9]).withSpring, interpolate: isPlayingSound(sharedValue1[4]).interpolate, SPRING_CONFIG };
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  let pressed = obj.pressed;
  const animatedStyle = tmpResult2.useAnimatedStyle(fn);
  const items4 = [channel, sound, soundGridLocation, analyticsLocations];
  const obj1 = { animationConfig: obj, withDelay: isPlayingSound(sharedValue1[4]).withDelay, withSpring: isPlayingSound(sharedValue1[9]).withSpring, interpolate: isPlayingSound(sharedValue1[4]).interpolate, SPRING_CONFIG };
  const items5 = [tmp4.button, { width: obj.useSoundButtonStyleConfig().buttonWidth }, , , , , ];
  let buttonPressed = null;
  const callback3 = playSoundboardSound.useCallback(() => {
    openSoundboardSoundPreviewActionSheetDefault(sharedValue, isPlayingSound, analyticsLocations[analyticsLocations.length - 1], sharedValue1);
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
  const obj2 = { style: items5, accessibilityRole: "button", accessibilityLabel: sound.name, accessibilityHint: soundboardSoundLock.lockedAccessibilityHint, onPressIn: callback1, onPressOut: callback2, onPress: callback, onLongPress: callback3, children: null };
  items5[5] = buttonDisabled;
  items5[6] = sound.style;
  let tmp23 = isPlayingSound;
  if (isPlayingSound) {
    const obj3 = { style: tmp4.playingBackground };
    tmp23 = isLocked(tmp18, obj3);
  }
  const items6 = [tmp23, , ];
  if (tmp3) {
    const obj4 = { sharedValues: obj, sound };
    tmp3 = isLocked(SoundButtonEmoji, obj4);
  }
  items6[1] = tmp3;
  const items7 = [tmp4.text, ];
  let textPlaying = null;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  items7[1] = textPlaying;
  items6[2] = isLocked(isPlayingSound(sharedValue1[19]).Text, { lineClamp: 1, style: items7, variant: "text-sm/semibold", children: sound.name });
  obj2.children = items6;
  const children = [onLockedPress(closure_10, obj2), ];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj6 = { style: tmp4.lock };
    isLocked = tmp27(tmp(tmp2[20]).LockIcon, obj6);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
});