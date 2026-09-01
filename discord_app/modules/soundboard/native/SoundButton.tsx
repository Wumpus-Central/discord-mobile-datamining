// discord_app/modules/soundboard/native/SoundButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import getSoundboardEmojiUrlDefault from "utils/getSoundboardEmojiUrl.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../reanimated/ReanimatedRexport.tsx";
import set from "../../../utils/PlatformUtils.tsx";

const require = arg1;
function SoundButtonEmoji(arg0) {
  ({ sound, sharedValues } = arg0);
  const tmp = callback();
  let obj = { sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } };
  obj1 = obj(4217);
  const fn = function o() {
    const pressed = obj.sharedValues.pressed;
    const playing = obj.sharedValues.playing;
    let value = pressed.get();
    obj = obj(sharedValue1[4]);
    let num = obj.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    let tmp4Result = tmp4(tmp5[9]);
    tmp4Result = tmp4(tmp5[4]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), closure_1_8));
    const tmp4Result1 = obj(sharedValue1[9]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(obj(sharedValue1[4]).interpolate(pressed2.get(), [0, 1], items1), closure_1_8);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = obj(sharedValue1[4]);
    const pressed3 = tmp.sharedValues.pressed;
    let num2 = tmp.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: "" + obj(sharedValue1[4]).interpolate(value, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  obj = { animationConfig: obj, withDelay: obj(4217).withDelay, withSpring: obj(4927).withSpring, interpolate: obj(4217).interpolate, SPRING_CONFIG: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 13932429225740;
  fn.__initData = closure_11;
  obj = { sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 };
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj4 = obj(4217);
  const fn2 = function o() {
    const pressed = obj.sharedValues.pressed;
    const playing = obj.sharedValues.playing;
    let value = pressed.get();
    obj = obj(sharedValue1[4]);
    let num = obj.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    let tmp4Result = tmp4(tmp5[9]);
    tmp4Result = tmp4(tmp5[4]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), closure_1_8));
    const tmp4Result1 = obj(sharedValue1[9]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(obj(sharedValue1[4]).interpolate(pressed2.get(), [0, 1], items1), closure_1_8);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = obj(sharedValue1[4]);
    const pressed3 = tmp.sharedValues.pressed;
    let num2 = tmp.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: "" + obj(sharedValue1[4]).interpolate(value, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  obj1 = { animationConfig: obj, withDelay: obj(4217).withDelay, withSpring: obj(4927).withSpring, interpolate: obj(4217).interpolate, SPRING_CONFIG: closure_8 };
  fn2.__closure = obj1;
  fn2.__workletHash = 13932429225740;
  fn2.__initData = closure_11;
  const obj2 = { style: items, children: null };
  items = [tmp.emojiWrapper, animatedStyle];
  const obj3 = { style: obj4.useAnimatedStyle(fn2), children: null };
  obj4 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: getSoundboardEmojiUrlDefault(sound, 24), name: null };
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj4[3] = str;
  obj3[1] = closure_5(EmojiDefault, obj4);
  obj2[1] = closure_5(closure_7, obj3);
  return closure_5(closure_7, obj2);
}
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = importDefaultResult.createAnimatedComponent(View);
let closure_8 = { damping: 10, stiffness: 300, mass: 1 };
let obj = { button: null, buttonPressed: null, buttonDisabled: null, buttonPlaying: null, playingBackground: null, emoji: null, emojiWrapper: null, text: null, textPlaying: null, lock: null };
obj = { marginTop: 4, height: require("SOUND_BUTTON_HEIGHT").SOUND_BUTTON_HEIGHT, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.lg, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
obj[0] = obj;
obj[1] = { backgroundColor: ThemesDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj[2] = { opacity: 0.5 };
createCacheKey = { borderStyle: "solid", borderWidth: 2, borderColor: ThemesDefault.colors.STATUS_SPEAKING };
obj[3] = createCacheKey;
let obj1 = { backgroundColor: ThemesDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj[4] = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG, borderRadius: ThemesDefault.radii.lg - 2 };
let num;
if (set.isIOS()) {
  num = 24;
}
obj[5] = { height: 24, width: 24, fontSize: num, lineHeight: 28 };
let obj3 = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG, borderRadius: ThemesDefault.radii.lg - 2 };
obj[6] = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: ThemesDefault.radii.round, marginBottom: 8 };
obj[7] = { marginHorizontal: 8 };
obj[8] = { marginHorizontal: 6 };
let obj4 = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: ThemesDefault.radii.round, marginBottom: 8 };
obj[9] = { position: "absolute", top: ThemesDefault.space.PX_12, end: ThemesDefault.space.PX_12, width: 12, height: 12, tintColor: ThemesDefault.colors.WHITE };
let closure_9 = createCacheKey.createStyles(obj);
const obj5 = { position: "absolute", top: ThemesDefault.space.PX_12, end: ThemesDefault.space.PX_12, width: 12, height: 12, tintColor: ThemesDefault.colors.WHITE };
let closure_10 = importDefaultResult.createAnimatedComponent(require("PressableBase").PressableOpacity);
let closure_11 = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
const importDefaultResult1 = importDefaultResult;
let result = set.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = importAllResult.memo(function SoundButtonComponent(sound) {
  sound = sound.sound;
  let obj = sound;
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
  obj = obj(sharedValue1[12]);
  let tmp3 = null != sound.emojiId;
  if (!tmp3) {
    tmp3 = null != sound.emojiName;
  }
  const tmp4 = callback();
  const tmp5 = sharedValue(sharedValue1[13])(sound, channel.id);
  playSoundboardSound = tmp5.playSoundboardSound;
  const isPlayingSound = tmp5.isPlayingSound;
  analyticsLocations = sharedValue(sharedValue1[14])(sharedValue(tmp2[15]).SOUNDBOARD_BUTTON).analyticsLocations;
  let tmpResult = tmp(tmp2[16]);
  const soundboardSoundLock = tmpResult.useSoundboardSoundLock(sound, channel);
  isLocked = soundboardSoundLock.isLocked;
  onLockedPress = soundboardSoundLock.onLockedPress;
  let items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
  obj = isPlayingSound;
  sharedValue = undefined;
  sharedValue1 = undefined;
  callback = playSoundboardSound.useCallback(() => {
    if (isLocked) {
      onLockedPress(() => {
        obj = closure_1_0(closure_1_2[17]);
        obj = { channel: closure_1, analyticsSource: closure_1_1(closure_1_2[15]).PREMIUM_UPSELL, initialScrollLocation: closure_2 };
        const result = obj.openSoundboardSoundPickerActionSheet(obj);
      });
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items);
  tmpResult = tmp(tmp2[4]);
  sharedValue = tmpResult.useSharedValue(0);
  const tmp6 = sharedValue(sharedValue1[14]);
  sharedValue1 = obj(sharedValue1[4]).useSharedValue(0);
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
    if (obj) {
      num = 1;
    }
    const result = sharedValue1.set(num);
  }, items3);
  obj = { pressed: sharedValue, playing: sharedValue1 };
  obj = { sharedValues: obj, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  const tmpResult1 = obj(sharedValue1[4]);
  const fn = function o() {
    const pressed = obj.sharedValues.pressed;
    const playing = obj.sharedValues.playing;
    let value = pressed.get();
    obj = obj(sharedValue1[4]);
    let num = obj.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    let tmp4Result = tmp4(tmp5[9]);
    tmp4Result = tmp4(tmp5[4]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), closure_1_8));
    const tmp4Result1 = obj(sharedValue1[9]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(obj(sharedValue1[4]).interpolate(pressed2.get(), [0, 1], items1), closure_1_8);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = obj(sharedValue1[4]);
    const pressed3 = tmp.sharedValues.pressed;
    let num2 = tmp.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: "" + obj(sharedValue1[4]).interpolate(value, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  const tmpResult2 = obj(sharedValue1[4]);
  fn.__closure = { animationConfig: obj, withDelay: obj(sharedValue1[4]).withDelay, withSpring: obj(sharedValue1[9]).withSpring, interpolate: obj(sharedValue1[4]).interpolate, SPRING_CONFIG: closure_8 };
  fn.__workletHash = 13932429225740;
  fn.__initData = closure_11;
  let pressed = obj.pressed;
  const animatedStyle = tmpResult2.useAnimatedStyle(fn);
  const items4 = [channel, sound, soundGridLocation, analyticsLocations];
  obj1 = { animationConfig: obj, withDelay: obj(sharedValue1[4]).withDelay, withSpring: obj(sharedValue1[9]).withSpring, interpolate: obj(sharedValue1[4]).interpolate, SPRING_CONFIG: closure_8 };
  const items5 = [tmp4.button, { width: obj.useSoundButtonStyleConfig().buttonWidth }, , , , , ];
  let buttonPressed = null;
  const callback3 = playSoundboardSound.useCallback(() => {
    sharedValue(sharedValue1[18])(sharedValue, obj, analyticsLocations[analyticsLocations.length - 1], sharedValue1);
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
    const obj3 = { style: null };
    obj3[0] = tmp4.playingBackground;
    tmp23 = isLocked(tmp18, obj3);
  }
  const items6 = [tmp23, , ];
  if (tmp3) {
    const obj4 = { sharedValues: null, sound: null };
    obj4[0] = obj;
    obj4[1] = sound;
    tmp3 = isLocked(SoundButtonEmoji, obj4);
  }
  items6[1] = tmp3;
  const items7 = [tmp4.text, ];
  let textPlaying = null;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  items7[1] = textPlaying;
  items6[2] = isLocked(obj(sharedValue1[19]).Text, { lineClamp: 1, style: items7, variant: "text-sm/semibold", children: sound.name });
  obj2[8] = items6;
  const children = [onLockedPress(closure_10, obj2), ];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj6 = { style: null };
    obj6[0] = tmp4.lock;
    isLocked = tmp27(tmp(tmp2[20]).LockIcon, obj6);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
});