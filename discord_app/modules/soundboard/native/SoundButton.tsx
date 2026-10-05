// === Module 17236: SoundButton ===

// Module 17236 (SoundButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import Pressables from "Pressables" /* 5909 */;
import EmojiDefault from "Emoji" /* 6625 */;
import getSoundboardEmojiUrlDefault from "getSoundboardEmojiUrl" /* 11546 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 17229 */;
import openSoundboardSoundPreviewActionSheetDefault from "openSoundboardSoundPreviewActionSheet" /* 17242 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport_mod = ReanimatedRexport2;
let _require, set;

let hasOwnProperty;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
const View = react_native.View;
const SOUND_BUTTON_HEIGHT = SoundboardStyleConstants.SOUND_BUTTON_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_7 = ReanimatedRexport.createAnimatedComponent(View);
const SPRING_CONFIG = { damping: 10, stiffness: 300, mass: 1 };
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonPressed: obj3, buttonDisabled: { opacity: 0.5 }, buttonPlaying: obj4, playingBackground: rect, emoji: { height: 24, width: 24, fontSize: num, lineHeight: 28 }, emojiWrapper: size, text: { marginHorizontal: 8 }, textPlaying: { marginHorizontal: 6 }, lock: size1 };
obj2 = { marginTop: 4, height: SOUND_BUTTON_HEIGHT, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj4 = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.STATUS_SPEAKING };
rect = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.lg - 2 };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 24;
}
size = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: nativeDefault.radii.round, marginBottom: 8 };
size1 = { position: "absolute", top: nativeDefault.space.PX_12, end: nativeDefault.space.PX_12, width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
let closure_9 = createStyles(obj);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(Pressables.PressableOpacity);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  let tmp5;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(20);
  const obj2 = ReanimatedRexport2;
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = ReanimatedRexport2;
  const sharedValue1 = obj3.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function o() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    let num = 1;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== sharedValue) {
    const fn2 = function c() {
      const result = sharedValue.set(0);
    };
    cResult[2] = sharedValue;
    cResult[3] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] === arg0) {
    let tmp6;
    if (cResult[5] === sharedValue1) {
      tmp6 = cResult[6];
    }
    if (cResult[7] === arg0) {
      if (cResult[8] === sharedValue1) {
        let tmp7;
        if (cResult[9] === sharedValue) {
          tmp7 = cResult[10];
        }
        const effect = react.useEffect(tmp6, tmp7);
        if (cResult[11] === tmp4) {
          let tmp10;
          if (cResult[12] === tmp5) {
            tmp10 = cResult[13];
          }
          if (cResult[14] === sharedValue1) {
            let tmp11;
            if (cResult[15] === sharedValue) {
              tmp11 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              let tmp12;
              if (cResult[18] === tmp11) {
                tmp12 = cResult[19];
              }
              return tmp12;
            }
            const obj4 = { handlers: tmp10, sharedValues: tmp11 };
            cResult[17] = tmp10;
            cResult[18] = tmp11;
            cResult[19] = obj4;
            tmp12 = obj4;
          }
          const obj5 = { pressed: sharedValue, playing: sharedValue1 };
          cResult[14] = sharedValue1;
          cResult[15] = sharedValue;
          cResult[16] = obj5;
          tmp11 = obj5;
        }
        const obj6 = { pressIn: tmp4, pressOut: tmp5 };
        cResult[11] = tmp4;
        cResult[12] = tmp5;
        cResult[13] = obj6;
        tmp10 = obj6;
      }
    }
    const items = [arg0, sharedValue1, sharedValue];
    cResult[7] = arg0;
    cResult[8] = sharedValue1;
    cResult[9] = sharedValue;
    cResult[10] = items;
    tmp7 = items;
  }
  const fn3 = function h() {
    let num = 0;
    set = sharedValue1.set;
    if (closure_0) {
      num = 1;
    }
    const result = set(num);
  };
  cResult[4] = arg0;
  cResult[5] = sharedValue1;
  cResult[6] = fn3;
  tmp6 = fn3;
}) : ((arg0) => {
  let closure_0 = arg0;
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ReanimatedRexport2;
  const sharedValue1 = obj2.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items2 = [arg0, sharedValue1, sharedValue];
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue1.set;
    if (closure_0) {
      num = 1;
    }
    const result = set(num);
  }, items2);
  return { handlers: { pressIn: callback, pressOut: callback1 }, sharedValues: { pressed: sharedValue, playing: sharedValue1 } };
});
const __initData = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
const __initData2 = { code: "function SoundButtonTsx2(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationConfig) => {
  _require = animationConfig;
  let obj = require("ReanimatedRexport");
  const fn = function t() {
    let items3;
    const pressed = animationConfig.sharedValues.pressed;
    const playing = animationConfig.sharedValues.playing;
    const value = pressed.get();
    let num = animationConfig.playingAnimationDelay;
    const tmp3 = playing.get() > 0;
    const withDelay = ReanimatedRexport2.withDelay;
    ReanimatedRexport2;
    if (num == null) {
      num = 0;
    }
    const withSpring = spring.withSpring;
    spring;
    const playing2 = animationConfig.sharedValues.playing;
    const items = [1, animationConfig.scaleFactors.playing];
    const tmp4Result5 = ReanimatedRexport2;
    const withDelayResult = withDelay(num, withSpring(tmp4Result5.interpolate(playing2.get(), [0, 1], items), SPRING_CONFIG));
    const withSpring2 = spring.withSpring;
    spring;
    const pressed2 = animationConfig.sharedValues.pressed;
    const items1 = [1, animationConfig.scaleFactors.pressed];
    const tmp4Result7 = ReanimatedRexport2;
    const withSpring2Result = withSpring2(tmp4Result7.interpolate(pressed2.get(), [0, 1], items1), SPRING_CONFIG);
    let tmp11 = withSpring2Result;
    if (0 === value) {
      tmp11 = withSpring2Result;
      if (tmp3) {
        tmp11 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp11 }, ];
    const pressed3 = animationConfig.sharedValues.pressed;
    const interpolate = ReanimatedRexport2.interpolate;
    let num2;
    ReanimatedRexport2;
    const value2 = pressed3.get();
    if (animationConfig != null) {
      num2 = animationConfig.pressedRotationDegrees;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const obj = { transform: items2 };
    const obj2 = { rotate: "" + interpolate(value2, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj2;
    return obj;
  };
  let obj2 = { animationConfig, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : ((animationConfig) => {
  _require = animationConfig;
  let obj = require("ReanimatedRexport");
  const fn = function t() {
    let items3;
    const pressed = animationConfig.sharedValues.pressed;
    const playing = animationConfig.sharedValues.playing;
    const value = pressed.get();
    let num = animationConfig.playingAnimationDelay;
    const tmp3 = playing.get() > 0;
    const withDelay = ReanimatedRexport2.withDelay;
    ReanimatedRexport2;
    if (num == null) {
      num = 0;
    }
    const withSpring = spring.withSpring;
    spring;
    const playing2 = animationConfig.sharedValues.playing;
    const items = [1, animationConfig.scaleFactors.playing];
    const tmp4Result5 = ReanimatedRexport2;
    const withDelayResult = withDelay(num, withSpring(tmp4Result5.interpolate(playing2.get(), [0, 1], items), SPRING_CONFIG));
    const withSpring2 = spring.withSpring;
    spring;
    const pressed2 = animationConfig.sharedValues.pressed;
    const items1 = [1, animationConfig.scaleFactors.pressed];
    const tmp4Result7 = ReanimatedRexport2;
    const withSpring2Result = withSpring2(tmp4Result7.interpolate(pressed2.get(), [0, 1], items1), SPRING_CONFIG);
    let tmp11 = withSpring2Result;
    if (0 === value) {
      tmp11 = withSpring2Result;
      if (tmp3) {
        tmp11 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp11 }, ];
    const pressed3 = animationConfig.sharedValues.pressed;
    const interpolate = ReanimatedRexport2.interpolate;
    let num2;
    ReanimatedRexport2;
    const value2 = pressed3.get();
    if (animationConfig != null) {
      num2 = animationConfig.pressedRotationDegrees;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const obj = { transform: items2 };
    const obj2 = { rotate: "" + interpolate(value2, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj2;
    return obj;
  };
  let obj2 = { animationConfig, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 15726002162159;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let emoji;
  let emoji2;
  let first;
  let sharedValues;
  let sound;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  ({ sound, sharedValues } = arg0);
  const tmp3 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { pressed: 0.8, playing: 1.2 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== sharedValues) {
    const obj3 = { sharedValues, scaleFactors: first };
    cResult[1] = sharedValues;
    cResult[2] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[2];
  }
  const tmp7 = closure_14(tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { pressed: 0.7200000000000001, playing: 1.08 };
    cResult[3] = obj4;
    tmp8 = obj4;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== sharedValues) {
    const obj5 = { sharedValues, scaleFactors: tmp8, playingAnimationDelay: 100, pressedRotationDegrees: -15 };
    cResult[4] = sharedValues;
    cResult[5] = obj5;
    tmp9 = obj5;
  } else {
    tmp9 = cResult[5];
  }
  const tmp6Result = closure_14(tmp9);
  if (cResult[6] === tmp7) {
    let tmp11;
    let tmp12;
    if (cResult[7] === tmp3.emojiWrapper) {
      tmp11 = cResult[8];
    }
    ({ emoji, emoji: emoji2 } = tmp3);
    if (cResult[9] !== sound) {
      const tmp14 = getSoundboardEmojiUrlDefault(sound, 24);
      cResult[9] = sound;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[10];
    }
    let str = sound.emojiName;
    if (str == null) {
      str = "";
    }
    if (cResult[11] === tmp3.emoji) {
      if (cResult[12] === tmp12) {
        let tmp16;
        if (cResult[13] === str) {
          tmp16 = cResult[14];
        }
        if (cResult[15] === tmp6Result) {
          let tmp20;
          if (cResult[16] === tmp16) {
            tmp20 = cResult[17];
          }
          if (cResult[18] === tmp20) {
            let tmp24;
            if (cResult[19] === tmp11) {
              tmp24 = cResult[20];
            }
            return tmp24;
          }
          const obj6 = { style: tmp11, children: tmp20 };
          const tmp27 = hasOwnProperty(closure_7, obj6);
          cResult[18] = tmp20;
          cResult[19] = tmp11;
          cResult[20] = tmp27;
          tmp24 = tmp27;
        }
        const obj7 = { style: tmp6Result, children: tmp16 };
        const tmp23 = hasOwnProperty(closure_7, obj7);
        cResult[15] = tmp6Result;
        cResult[16] = tmp16;
        cResult[17] = tmp23;
        tmp20 = tmp23;
      }
    }
    const obj8 = { fastImageStyle: emoji, textEmojiStyle: emoji2, src: tmp12, name: str };
    const tmp19 = hasOwnProperty(EmojiDefault, obj8);
    cResult[11] = tmp3.emoji;
    cResult[12] = tmp12;
    cResult[13] = str;
    cResult[14] = tmp19;
    tmp16 = tmp19;
  }
  const items = [tmp3.emojiWrapper, tmp7];
  cResult[6] = tmp7;
  cResult[7] = tmp3.emojiWrapper;
  cResult[8] = items;
  tmp11 = items;
}) : ((arg0) => {
  let items;
  let obj2;
  let obj3;
  let sharedValues;
  let sound;
  let str;
  let tmp5;
  ({ sound, sharedValues } = arg0);
  const tmp = closure_9();
  const obj = { style: items, children: hasOwnProperty(closure_7, obj2) };
  items = [tmp.emojiWrapper, closure_14({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } })];
  closure_14({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } });
  obj2 = { style: closure_14({ sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 }), children: hasOwnProperty(tmp5, obj3) };
  obj3 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: getSoundboardEmojiUrlDefault(sound, 24), name: str };
  str = sound.emojiName;
  tmp5 = EmojiDefault;
  if (str == null) {
    str = "";
  }
  return hasOwnProperty(closure_7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((sound) => {
  let isSectionLocked;
  let items;
  let items1;
  let lockedAccessibilityHint;
  let onLockedPress;
  let soundGridLocation;
  let style;
  let obj = sound(soundGridLocation[10]);
  const cResult = obj.c(56);
  sound = sound.sound;
  const channel = sound.channel;
  soundGridLocation = sound.soundGridLocation;
  ({ style, isSectionLocked } = sound);
  const tmpResult = sound(soundGridLocation[14]);
  const buttonWidth = tmpResult.useSoundButtonStyleConfig().buttonWidth;
  const tmp6 = closure_9();
  const tmp7 = channel(soundGridLocation[15])(sound, channel.id);
  const playSoundboardSound = tmp7.playSoundboardSound;
  const isPlayingSound = tmp7.isPlayingSound;
  const tmp8 = channel(soundGridLocation[16]);
  const analyticsLocations = tmp8(channel(tmp2[17]).SOUNDBOARD_BUTTON).analyticsLocations;
  const tmpResult2 = sound(soundGridLocation[18]);
  const soundboardSoundLock = tmpResult2.useSoundboardSoundLock(sound, channel);
  const isLocked = soundboardSoundLock.isLocked;
  ({ lockedAccessibilityHint, onLockedPress } = soundboardSoundLock);
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === channel) {
      if (cResult[2] === onLockedPress) {
        if (cResult[3] === playSoundboardSound) {
          if (cResult[4] === isLocked) {
            let tmp10;
            let tmp14;
            let tmp15;
            if (cResult[5] === soundGridLocation) {
              tmp10 = cResult[6];
            }
            const tmp12 = closure_11(isPlayingSound);
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { pressed: 0.95, playing: 1.05 };
              cResult[7] = obj2;
              tmp14 = obj2;
            } else {
              tmp14 = cResult[7];
            }
            if (cResult[8] !== tmp12.sharedValues) {
              const obj3 = { sharedValues: tmp12.sharedValues, scaleFactors: tmp14 };
              cResult[8] = tmp12.sharedValues;
              cResult[9] = obj3;
              tmp15 = obj3;
            } else {
              tmp15 = cResult[9];
            }
            const tmp17 = closure_14(tmp15);
            const pressed = tmp12.sharedValues.pressed;
            if (cResult[10] === analyticsLocations) {
              if (cResult[11] === channel) {
                if (cResult[12] === sound) {
                  let tmp19;
                  let tmp20;
                  if (cResult[13] === soundGridLocation) {
                    tmp19 = cResult[14];
                  }
                  if (cResult[15] !== buttonWidth) {
                    const obj4 = { width: buttonWidth };
                    cResult[15] = buttonWidth;
                    cResult[16] = obj4;
                    tmp20 = obj4;
                  } else {
                    tmp20 = cResult[16];
                  }
                  let buttonPressed = null;
                  if (tmp18) {
                    buttonPressed = tmp6.buttonPressed;
                  }
                  let buttonPlaying = null;
                  if (isPlayingSound) {
                    buttonPlaying = tmp6.buttonPlaying;
                  }
                  let buttonDisabled = null;
                  if (isLocked) {
                    buttonDisabled = null;
                    if (!(undefined !== isSectionLocked && isSectionLocked)) {
                      buttonDisabled = tmp6.buttonDisabled;
                    }
                  }
                  if (cResult[17] === tmp17) {
                    if (cResult[18] === style) {
                      if (cResult[19] === tmp6.button) {
                        if (cResult[20] === tmp20) {
                          if (cResult[21] === buttonPressed) {
                            if (cResult[22] === buttonPlaying) {
                              let tmp24;
                              if (cResult[23] === buttonDisabled) {
                                tmp24 = cResult[24];
                              }
                              if (cResult[25] === isPlayingSound) {
                                let tmp25;
                                if (cResult[26] === tmp6.playingBackground) {
                                  tmp25 = cResult[27];
                                }
                                if (cResult[28] === tmp12.sharedValues) {
                                  if (cResult[29] === (null != sound.emojiId || null != sound.emojiName)) {
                                    let tmp29;
                                    if (cResult[30] === sound) {
                                      tmp29 = cResult[31];
                                    }
                                    let textPlaying = null;
                                    if (isPlayingSound) {
                                      textPlaying = tmp6.textPlaying;
                                    }
                                    if (cResult[32] === tmp6.text) {
                                      let tmp34;
                                      if (cResult[33] === textPlaying) {
                                        tmp34 = cResult[34];
                                      }
                                      if (cResult[35] === sound.name) {
                                        let tmp35;
                                        if (cResult[36] === tmp34) {
                                          tmp35 = cResult[37];
                                        }
                                        if (cResult[38] === tmp12.handlers.pressIn) {
                                          if (cResult[39] === tmp12.handlers.pressOut) {
                                            if (cResult[40] === tmp10) {
                                              if (cResult[41] === lockedAccessibilityHint) {
                                                if (cResult[42] === tmp19) {
                                                  if (cResult[43] === sound.name) {
                                                    if (cResult[44] === tmp24) {
                                                      if (cResult[45] === tmp25) {
                                                        if (cResult[46] === tmp29) {
                                                          let tmp38;
                                                          if (cResult[47] === tmp35) {
                                                            tmp38 = cResult[48];
                                                          }
                                                          if (cResult[49] === (undefined !== isSectionLocked && isSectionLocked)) {
                                                            if (cResult[50] === isLocked) {
                                                              let tmp42;
                                                              if (cResult[51] === tmp6.lock) {
                                                                tmp42 = cResult[52];
                                                              }
                                                              if (cResult[53] === tmp38) {
                                                                let tmp45;
                                                                if (cResult[54] === tmp42) {
                                                                  tmp45 = cResult[55];
                                                                }
                                                                return tmp45;
                                                              }
                                                              const obj5 = { children: items };
                                                              items = [tmp38, tmp42];
                                                              const tmp48 = onLockedPress(analyticsLocations, obj5);
                                                              cResult[53] = tmp38;
                                                              cResult[54] = tmp42;
                                                              class E {
                                                                constructor() {
                                                                  openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
                                                                }
                                                              }
                                                              cResult[55] = tmp48;
                                                              tmp45 = tmp48;
                                                            }
                                                          }
                                                          let tmp43 = isLocked && !tmp4;
                                                          if (tmp43) {
                                                            const obj6 = { style: tmp6.lock };
                                                            tmp43 = isLocked(tmp(tmp2[22]).LockIcon, obj6);
                                                          }
                                                          cResult[49] = undefined !== isSectionLocked && isSectionLocked;
                                                          cResult[50] = isLocked;
                                                          cResult[51] = tmp6.lock;
                                                          cResult[52] = tmp43;
                                                          tmp42 = tmp43;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj7 = { style: tmp24, accessibilityRole: "button", accessibilityLabel: sound.name, accessibilityHint: lockedAccessibilityHint, onPressIn: tmp12.handlers.pressIn, onPressOut: tmp12.handlers.pressOut, onPress: tmp10, onLongPress: tmp19, children: items1 };
                                        items1 = [tmp25, , ];
                                        class E {
                                          constructor() {
                                            openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
                                          }
                                        }
                                        items1[2] = tmp35;
                                        const tmp41 = onLockedPress(closure_10, obj7);
                                        cResult[38] = tmp12.handlers.pressIn;
                                        cResult[39] = tmp12.handlers.pressOut;
                                        cResult[40] = tmp10;
                                        cResult[41] = lockedAccessibilityHint;
                                        cResult[42] = tmp19;
                                        cResult[43] = sound.name;
                                        cResult[44] = tmp24;
                                        cResult[45] = tmp25;
                                        cResult[46] = tmp29;
                                        cResult[47] = tmp35;
                                        cResult[48] = tmp41;
                                        tmp38 = tmp41;
                                      }
                                      const obj8 = { lineClamp: 1, style: tmp34, variant: "text-sm/semibold", children: sound.name };
                                      const tmp37 = isLocked(sound(soundGridLocation[21]).Text, obj8);
                                      cResult[35] = sound.name;
                                      cResult[36] = tmp34;
                                      cResult[37] = tmp37;
                                      tmp35 = tmp37;
                                    }
                                    const items2 = [tmp6.text, textPlaying];
                                    cResult[32] = tmp6.text;
                                    cResult[33] = textPlaying;
                                    cResult[34] = items2;
                                    tmp34 = items2;
                                  }
                                }
                                let tmp30 = tmp5;
                                if (tmp30) {
                                  const obj9 = { sharedValues: tmp12.sharedValues, sound };
                                  tmp30 = isLocked(closure_15, obj9);
                                }
                                cResult[28] = tmp12.sharedValues;
                                cResult[29] = null != sound.emojiId || null != sound.emojiName;
                                cResult[30] = sound;
                                cResult[31] = tmp30;
                                tmp29 = tmp30;
                              }
                              let tmp26 = isPlayingSound;
                              if (tmp26) {
                                const obj10 = { style: tmp6.playingBackground };
                                tmp26 = isLocked(analyticsLocations, obj10);
                              }
                              cResult[25] = isPlayingSound;
                              cResult[26] = tmp6.playingBackground;
                              cResult[27] = tmp26;
                              tmp25 = tmp26;
                            }
                          }
                        }
                      }
                    }
                  }
                  const items3 = [tmp6.button, tmp20, buttonPressed, tmp17, , , ];
                  class E {
                    constructor() {
                      openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
                    }
                  }
                  items3[5] = buttonDisabled;
                  items3[6] = style;
                  cResult[17] = tmp17;
                  cResult[18] = style;
                  cResult[19] = tmp6.button;
                  cResult[20] = tmp20;
                  cResult[21] = buttonPressed;
                  cResult[22] = buttonPlaying;
                  cResult[23] = buttonDisabled;
                  cResult[24] = items3;
                  tmp24 = items3;
                }
              }
            }
            class E {
              constructor() {
                openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
              }
            }
            cResult[10] = analyticsLocations;
            cResult[11] = channel;
            cResult[12] = sound;
            cResult[13] = soundGridLocation;
            cResult[14] = E;
            tmp19 = E;
          }
        }
      }
    }
  }
  const fn = function o() {
    let initialScrollLocation;
    if (isLocked) {
      onLockedPress(() => {
        const obj = sound(soundGridLocation[19]);
        const obj2 = { channel, analyticsSource: channel(soundGridLocation[17]).PREMIUM_UPSELL, initialScrollLocation };
        const result = obj.openSoundboardSoundPickerActionSheet(obj2);
      });
    } else {
      playSoundboardSound(analyticsLocations);
    }
  };
  cResult[0] = analyticsLocations;
  cResult[1] = channel;
  cResult[2] = onLockedPress;
  cResult[3] = playSoundboardSound;
  cResult[4] = isLocked;
  cResult[5] = soundGridLocation;
  cResult[6] = fn;
  tmp10 = fn;
}) : ((sound) => {
  let items3;
  sound = sound.sound;
  const channel = sound.channel;
  const soundGridLocation = sound.soundGridLocation;
  let flag = sound.isSectionLocked;
  const style = sound.style;
  if (flag === undefined) {
    flag = false;
  }
  let playSoundboardSound;
  let analyticsLocations;
  let isLocked;
  let onLockedPress;
  let obj = sound(soundGridLocation[14]);
  let tmp3 = null != sound.emojiId;
  const buttonWidth = obj.useSoundButtonStyleConfig().buttonWidth;
  if (!tmp3) {
    tmp3 = null != sound.emojiName;
  }
  const tmp4 = closure_9();
  const tmp5 = channel(soundGridLocation[15])(sound, channel.id);
  playSoundboardSound = tmp5.playSoundboardSound;
  const isPlayingSound = tmp5.isPlayingSound;
  const tmp6 = channel(tmp2[16]);
  analyticsLocations = tmp6(channel(tmp2[17]).SOUNDBOARD_BUTTON).analyticsLocations;
  const tmpResult = sound(soundGridLocation[18]);
  const soundboardSoundLock = tmpResult.useSoundboardSoundLock(sound, channel);
  isLocked = soundboardSoundLock.isLocked;
  onLockedPress = soundboardSoundLock.onLockedPress;
  const items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
  const lockedAccessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
  const callback = playSoundboardSound.useCallback(() => {
    let initialScrollLocation;
    if (isLocked) {
      onLockedPress(() => {
        const obj = sound(soundGridLocation[19]);
        const obj2 = { channel, analyticsSource: channel(soundGridLocation[17]).PREMIUM_UPSELL, initialScrollLocation };
        const result = obj.openSoundboardSoundPickerActionSheet(obj2);
      });
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items);
  const tmp9 = closure_11(isPlayingSound);
  let obj2 = { sharedValues: tmp9.sharedValues, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  const pressed = tmp9.sharedValues.pressed;
  const items1 = [channel, sound, soundGridLocation, analyticsLocations];
  const items2 = [tmp4.button, { width: buttonWidth }, , , , , ];
  let buttonPressed = null;
  const tmp10 = closure_14(obj2);
  const tmp11 = pressed.get() > 0;
  const callback1 = playSoundboardSound.useCallback(() => {
    openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
  }, items1);
  if (tmp11) {
    buttonPressed = tmp4.buttonPressed;
  }
  items2[2] = buttonPressed;
  items2[3] = tmp10;
  let buttonPlaying = null;
  if (isPlayingSound) {
    buttonPlaying = tmp4.buttonPlaying;
  }
  items2[4] = buttonPlaying;
  let buttonDisabled = null;
  if (isLocked) {
    buttonDisabled = null;
    if (!flag) {
      buttonDisabled = tmp4.buttonDisabled;
    }
  }
  const obj3 = { style: items2, accessibilityRole: "button", accessibilityLabel: sound.name, accessibilityHint: lockedAccessibilityHint, onPressIn: tmp9.handlers.pressIn, onPressOut: tmp9.handlers.pressOut, onPress: callback, onLongPress: callback1, children: items3 };
  items2[5] = buttonDisabled;
  items2[6] = style;
  let tmp19 = isPlayingSound;
  if (tmp19) {
    const obj4 = { style: tmp4.playingBackground };
    tmp19 = isLocked(tmp14, obj4);
  }
  items3 = [tmp19, , ];
  if (tmp3) {
    const obj5 = { sharedValues: tmp9.sharedValues, sound };
    tmp3 = isLocked(closure_15, obj5);
  }
  items3[1] = tmp3;
  const items4 = [tmp4.text, ];
  let textPlaying = null;
  const Text = tmp(tmp2[21]).Text;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  const obj6 = { lineClamp: 1, style: items4, variant: "text-sm/semibold", children: sound.name };
  items4[1] = textPlaying;
  items3[2] = isLocked(Text, obj6);
  const children = [onLockedPress(closure_10, obj3), ];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj7 = { style: tmp4.lock };
    isLocked = tmp23(tmp(tmp2[22]).LockIcon, obj7);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = memoResult;