// discord_app/modules/soundboard/native/SoundButton.tsx
import importAllResult from "getPremiumPlanItem";
import { View } from "QUICK_SWITCHER";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "EntitlementFeatureNames";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4083";
import set from "set";
import importDefaultResult1 from "module_4083";
import set from "mergeGuildAvatar";
import { Emoji } from "../../emojis/native/Emoji.tsx";
import { getSoundboardEmojiUrl } from "utils/getSoundboardEmojiUrl.tsx";

let closure_6;
let error;
const require = arg1;
function SoundButtonEmoji(arg0) {
  let sharedValues;
  let sound;
  ({ sound, sharedValues } = arg0);
  const tmp = callback2();
  let obj = { sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } };
  let obj1 = obj(4083);
  const fn = function t() {
    const pressed = obj.sharedValues.pressed;
    const playing = obj.sharedValues.playing;
    let value = pressed.get();
    obj = obj(sharedValue1[5]);
    let num = obj.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    let tmp4Result = tmp4(tmp5[10]);
    tmp4Result = tmp4(tmp5[5]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), outer1_9));
    const tmp4Result1 = obj(sharedValue1[10]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(obj(sharedValue1[5]).interpolate(pressed2.get(), [0, 1], items1), outer1_9);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = obj(sharedValue1[5]);
    const pressed3 = tmp.sharedValues.pressed;
    let num2 = tmp.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: "" + obj(sharedValue1[5]).interpolate(value, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  obj = { animationConfig: obj, withDelay: obj(4083).withDelay, withSpring: obj(4753).withSpring, interpolate: obj(4083).interpolate, SPRING_CONFIG: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 13932429225740;
  fn.__initData = closure_12;
  obj = { sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 };
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj4 = obj(4083);
  const fn2 = function t() {
    const pressed = obj.sharedValues.pressed;
    const playing = obj.sharedValues.playing;
    let value = pressed.get();
    obj = obj(sharedValue1[5]);
    let num = obj.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    let tmp4Result = tmp4(tmp5[10]);
    tmp4Result = tmp4(tmp5[5]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), outer1_9));
    const tmp4Result1 = obj(sharedValue1[10]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(obj(sharedValue1[5]).interpolate(pressed2.get(), [0, 1], items1), outer1_9);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = obj(sharedValue1[5]);
    const pressed3 = tmp.sharedValues.pressed;
    let num2 = tmp.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: "" + obj(sharedValue1[5]).interpolate(value, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  obj1 = { animationConfig: obj, withDelay: obj(4083).withDelay, withSpring: obj(4753).withSpring, interpolate: obj(4083).interpolate, SPRING_CONFIG: closure_9 };
  fn2.__closure = obj1;
  fn2.__workletHash = 13932429225740;
  fn2.__initData = closure_12;
  const obj2 = { style: items, children: null };
  items = [tmp.emojiWrapper, animatedStyle];
  const obj3 = { style: obj4.useAnimatedStyle(fn2), children: null };
  obj4 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: null, name: null };
  obj4[2] = getSoundboardEmojiUrl(sound, 24);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj4[3] = str;
  obj3[1] = closure_6(Emoji, obj4);
  obj2[1] = closure_6(closure_8, obj3);
  return closure_6(closure_8, obj2);
}
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = require("module_4083").createAnimatedComponent(View);
let closure_9 = { damping: 10, stiffness: 300, mass: 1 };
let obj = { button: null, buttonPressed: null, buttonDisabled: null, buttonPlaying: null, playingBackground: null, emoji: null, emojiWrapper: null, text: null, textPlaying: null, lock: null };
obj = { marginTop: 4, height: require("SOUND_BUTTON_HEIGHT").SOUND_BUTTON_HEIGHT, backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
obj[0] = obj;
obj[1] = { backgroundColor: require("Themes").colors.CARD_PRIMARY_PRESSED_BG };
obj[2] = { opacity: 0.5 };
createCacheKey = { borderStyle: "solid", borderWidth: 2, borderColor: require("Themes").colors.STATUS_SPEAKING };
obj[3] = createCacheKey;
let obj1 = { backgroundColor: require("Themes").colors.CARD_PRIMARY_PRESSED_BG };
obj[4] = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: require("Themes").colors.CARD_SECONDARY_BG, borderRadius: require("Themes").radii.lg - 2 };
let num;
if (set.isIOS()) {
  num = 24;
}
obj[5] = { height: 24, width: 24, fontSize: num, lineHeight: 28 };
let obj3 = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: require("Themes").colors.CARD_SECONDARY_BG, borderRadius: require("Themes").radii.lg - 2 };
obj[6] = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: require("Themes").radii.round, marginBottom: 8 };
obj[7] = { marginHorizontal: 8 };
obj[8] = { marginHorizontal: 6 };
let obj4 = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: require("Themes").radii.round, marginBottom: 8 };
obj[9] = { position: "absolute", top: require("Themes").space.PX_12, end: require("Themes").space.PX_12, width: 12, height: 12, tintColor: require("Themes").colors.WHITE };
let closure_10 = createCacheKey.createStyles(obj);
const obj5 = { position: "absolute", top: require("Themes").space.PX_12, end: require("Themes").space.PX_12, width: 12, height: 12, tintColor: require("Themes").colors.WHITE };
let closure_11 = require("module_4083").createAnimatedComponent(require("PressableBase").PressableOpacity);
let closure_12 = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
let result = set.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = importAllResult.memo(function SoundButtonComponent(sound) {
  sound = sound.sound;
  let obj = sound;
  const channel = sound.channel;
  let sharedValue = channel;
  let flag = sound.isSectionLocked;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue1;
  let playSoundboardSound;
  let analyticsLocations;
  let c5;
  obj = obj(sharedValue1[13]);
  let tmp3 = null != sound.emojiId;
  if (!tmp3) {
    tmp3 = null != sound.emojiName;
  }
  const tmp4 = callback2();
  let tmpResult = tmp(tmp2[14]);
  let items = [c5];
  const stateFromStores = tmpResult.useStateFromStores(items, () => _undefined.getCurrentUser());
  sharedValue1 = stateFromStores;
  const tmp6 = sharedValue(sharedValue1[15])(sound, channel.id);
  playSoundboardSound = tmp6.playSoundboardSound;
  const isPlayingSound = tmp6.isPlayingSound;
  analyticsLocations = sharedValue(sharedValue1[16])(sharedValue(tmp2[17]).SOUNDBOARD_BUTTON).analyticsLocations;
  tmpResult = tmp(tmp2[18]);
  let result = tmpResult.canUseSoundboardSound(stateFromStores, sound, channel);
  let tmp29Result = !result;
  c5 = tmp29Result;
  let items1 = [analyticsLocations, channel.guild_id, stateFromStores, playSoundboardSound, sound, tmp29Result];
  obj = isPlayingSound;
  sharedValue = undefined;
  sharedValue1 = undefined;
  const callback = playSoundboardSound.useCallback(() => {
    if (c5) {
      let obj = sharedValue(sharedValue1[19]);
      if (!obj.canUseSoundboardEverywhere(sharedValue1)) {
        if (obj.guildId !== sharedValue.guild_id) {
          let tmp4Result = tmp4(tmp5[20]);
          tmp4Result(obj(tmp5[21]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
        }
      }
      if (!obj.available) {
        tmp4Result = tmp4(tmp5[22]);
        obj = { key: "DISABLED_SOUND_PRESSED", icon: null, content: null, toastDurationMs: 3000 };
        obj[1] = tmp4(tmp5[23]);
        const intl = obj(tmp5[24]).intl;
        obj[2] = intl.string(obj(tmp5[24]).t.MDOXJR);
        tmp4Result.open(obj);
      }
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items1);
  const tmp7 = sharedValue(sharedValue1[16]);
  sharedValue = obj(sharedValue1[5]).useSharedValue(0);
  const tmpResult1 = obj(sharedValue1[5]);
  sharedValue1 = obj(sharedValue1[5]).useSharedValue(0);
  let items2 = [sharedValue];
  let items3 = [sharedValue];
  const callback1 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const items4 = [isPlayingSound, sharedValue1, sharedValue];
  callback2 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  const effect = playSoundboardSound.useEffect(() => {
    let num = 0;
    if (obj) {
      num = 1;
    }
    const result = sharedValue1.set(num);
  }, items4);
  obj = { pressed: sharedValue, playing: sharedValue1 };
  obj = { sharedValues: obj, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  const tmpResult2 = obj(sharedValue1[5]);
  const fn = function t() {
    const pressed = obj.sharedValues.pressed;
    const playing = obj.sharedValues.playing;
    let value = pressed.get();
    obj = obj(sharedValue1[5]);
    let num = obj.playingAnimationDelay;
    if (num == null) {
      num = 0;
    }
    let tmp4Result = tmp4(tmp5[10]);
    tmp4Result = tmp4(tmp5[5]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj.scaleFactors.playing];
    const tmp3 = playing.get() > 0;
    const withDelayResult = obj.withDelay(num, tmp4Result.withSpring(tmp4Result.interpolate(playing2.get(), [0, 1], items), outer1_9));
    const tmp4Result1 = obj(sharedValue1[10]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj.scaleFactors.pressed];
    const withSpringResult = tmp4Result1.withSpring(obj(sharedValue1[5]).interpolate(pressed2.get(), [0, 1], items1), outer1_9);
    let tmp8 = withSpringResult;
    if (0 === value) {
      tmp8 = withSpringResult;
      if (tmp3) {
        tmp8 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp8 }, ];
    const tmp4Result2 = obj(sharedValue1[5]);
    const pressed3 = tmp.sharedValues.pressed;
    let num2 = tmp.pressedRotationDegrees;
    value = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    obj = { transform: null };
    obj = { rotate: "" + obj(sharedValue1[5]).interpolate(value, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  const tmpResult3 = obj(sharedValue1[5]);
  fn.__closure = { animationConfig: obj, withDelay: obj(sharedValue1[5]).withDelay, withSpring: obj(sharedValue1[10]).withSpring, interpolate: obj(sharedValue1[5]).interpolate, SPRING_CONFIG: closure_9 };
  fn.__workletHash = 13932429225740;
  fn.__initData = closure_12;
  let pressed = obj.pressed;
  const animatedStyle = tmpResult3.useAnimatedStyle(fn);
  const items5 = [channel.id, sound];
  const obj1 = { animationConfig: obj, withDelay: obj(sharedValue1[5]).withDelay, withSpring: obj(sharedValue1[10]).withSpring, interpolate: obj(sharedValue1[5]).interpolate, SPRING_CONFIG: closure_9 };
  const items6 = [tmp4.button, { width: obj.useSoundButtonStyleConfig().buttonWidth }, , , , , ];
  let buttonPressed = null;
  const callback3 = playSoundboardSound.useCallback(() => {
    sharedValue(sharedValue1[25])(sharedValue.id, obj);
  }, items5);
  if (tmp17) {
    buttonPressed = tmp4.buttonPressed;
  }
  items6[2] = buttonPressed;
  items6[3] = animatedStyle;
  let buttonPlaying = null;
  if (isPlayingSound) {
    buttonPlaying = tmp4.buttonPlaying;
  }
  items6[4] = buttonPlaying;
  let buttonDisabled = null;
  if (!result) {
    buttonDisabled = null;
    if (!flag) {
      buttonDisabled = tmp4.buttonDisabled;
    }
  }
  const obj2 = { style: items6, accessibilityRole: "button", accessibilityLabel: sound.name, onPressIn: callback1, onPressOut: callback2, onPress: callback, onLongPress: callback3, children: null };
  items6[5] = buttonDisabled;
  items6[6] = sound.style;
  let tmp25 = isPlayingSound;
  if (isPlayingSound) {
    const obj3 = { style: null };
    obj3[0] = tmp4.playingBackground;
    tmp25 = callback(tmp20, obj3);
  }
  const items7 = [tmp25, , ];
  if (tmp3) {
    const obj4 = { sharedValues: null, sound: null };
    obj4[0] = obj;
    obj4[1] = sound;
    tmp3 = callback(SoundButtonEmoji, obj4);
  }
  items7[1] = tmp3;
  const items8 = [tmp4.text, ];
  let textPlaying = null;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  items8[1] = textPlaying;
  items7[2] = callback(obj(sharedValue1[26]).Text, { lineClamp: 1, style: items8, variant: "text-sm/semibold", children: sound.name });
  obj2[7] = items7;
  const children = [closure_7(closure_11, obj2), ];
  if (!result) {
    tmp29Result = !flag;
  }
  if (tmp29Result) {
    const obj6 = { style: null };
    obj6[0] = tmp4.lock;
    tmp29Result = tmp29(tmp(tmp2[27]).LockIcon, obj6);
  }
  children[1] = tmp29Result;
  return closure_7(analyticsLocations, { children });
});