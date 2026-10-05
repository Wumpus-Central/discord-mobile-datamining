// === Module 17243: SoundboardSoundPreviewActionSheet ===

// Module 17243 (SoundboardSoundPreviewActionSheet)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6841 */;
import SoundboardUtils from "SoundboardUtils" /* 6847 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17226 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import SoundboardStore from "SoundboardStore" /* 5680 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channel;

let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
let unpackModuleId;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { soundPresentation: obj2, soundPresentationPlaying: obj3, emoji: size, emojiFastImage: { width: 128, height: 128 }, emojiText: { fontSize: num, lineHeight: 74 }, text: obj4, buttonContainer: obj5, star: size1, primaryIcon: size2 };
obj2 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
size = { marginTop: nativeDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 60;
}
obj4 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center" };
obj5 = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_DEFAULT };
size2 = { width: 16, height: 16, tintColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let closure_15 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_10;
  let isLocked;
  let lockedAccessibilityHint;
  let onLockedPress;
  let soundGridLocation;
  let stateFromStores;
  let stateFromStores1;
  let tmp30;
  const tmp = channel;
  let obj = channel(soundGridLocation[12]);
  const cResult = obj.c(97);
  channel = channel.channel;
  const sound = channel.sound;
  soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  closure_15();
  let id = channel.id;
  let obj2 = channel(soundGridLocation[13]);
  const soundboardSoundPreviewMenuEnabled = obj2.useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  const obj3 = channel(soundGridLocation[14]);
  const soundboardSoundLock = obj3.useSoundboardSoundLock(sound, channel);
  ({ isLocked, lockedAccessibilityHint, onLockedPress } = soundboardSoundLock);
  if (cResult[0] === analyticsSource) {
    if (cResult[1] === channel) {
      if (cResult[2] === soundboardSoundPreviewMenuEnabled) {
        let tmp7;
        if (cResult[3] === soundGridLocation) {
          tmp7 = cResult[4];
        }
        let closure_7 = tmp7;
        if (cResult[5] === onLockedPress) {
          let tmp11;
          let tmp10;
          let tmp14;
          let tmp18;
          let tmp23;
          let tmp25;
          const _Symbol = Symbol;
          class U {
            constructor() {
              tmp = onLockedPress(() => closure_1_7());
              return;
            }
          }
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [stateFromStores];
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[8] = items;
            cResult[9] = N;
            tmp11 = N;
            tmp10 = items;
          } else {
            tmp10 = cResult[8];
            tmp11 = cResult[9];
          }
          let tmpResult = tmp(tmp2[16]);
          stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [stateFromStores1];
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[10] = items1;
            tmp14 = items1;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] !== sound.soundId) {
            class X {
              constructor() {
                return SoundboardStore.isFavoriteSound(sound.soundId);
              }
            }
            cResult[11] = sound.soundId;
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[12] = X;
          } else {
            class X {
              constructor() {
                return SoundboardStore.isFavoriteSound(sound.soundId);
              }
            }
          }
          const tmpResult4 = tmp(soundGridLocation[16]);
          stateFromStores1 = tmpResult4.useStateFromStores(tmp14, X);
          const _Symbol3 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor() {
                return SoundboardStore.isFavoriteSound(sound.soundId);
              }
            }
            const items2 = [stateFromStores1];
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[13] = items2;
            tmp18 = items2;
          } else {
            class X {
              constructor() {
                return SoundboardStore.isFavoriteSound(sound.soundId);
              }
            }
          }
          if (cResult[14] !== sound.soundId) {
            class K {
              constructor() {
                return SoundboardStore.isPlayingSound(sound.soundId);
              }
            }
            cResult[14] = sound.soundId;
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[15] = K;
          } else {
            class K {
              constructor() {
                return SoundboardStore.isPlayingSound(sound.soundId);
              }
            }
          }
          if (cResult[16] !== sound) {
            class K {
              constructor() {
                return SoundboardStore.isPlayingSound(sound.soundId);
              }
            }
            tmp21[0] = sound;
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[17] = tmp21;
          } else {
            class K {
              constructor() {
                return SoundboardStore.isPlayingSound(sound.soundId);
              }
            }
          }
          const _Symbol4 = Symbol;
          const tmpResult5 = tmp(soundGridLocation[16]);
          const stateFromStores2 = tmpResult5.useStateFromStores(tmp18, K, tmp21);
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class K {
              constructor() {
                return SoundboardStore.isPlayingSound(sound.soundId);
              }
            }
            const items3 = [stateFromStores1];
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[18] = items3;
            tmp23 = items3;
          } else {
            class K {
              constructor() {
                return SoundboardStore.isPlayingSound(sound.soundId);
              }
            }
          }
          if (cResult[19] !== stateFromStores) {
            class Y {
              constructor() {
                const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
                return isUserPlayingSoundsResult;
              }
            }
            const items4 = [stateFromStores];
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[19] = stateFromStores;
            cResult[20] = Y;
            cResult[21] = items4;
            tmp25 = items4;
          } else {
            class Y {
              constructor() {
                const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
                return isUserPlayingSoundsResult;
              }
            }
            tmp25 = cResult[21];
          }
          const tmpResult6 = tmp(soundGridLocation[16]);
          const stateFromStores3 = tmpResult6.useStateFromStores(tmp23, Y, tmp25);
          [tmp30, closure_10] = analyticsSource(id.useState(false), 2);
          analyticsSource(id.useState(false), 2);
          if (tmp30) {
            class Y {
              constructor() {
                const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
                return isUserPlayingSoundsResult;
              }
            }
          }
          let closure_11 = tmp30;
          if (cResult[22] === stateFromStores1) {
            class Y {
              constructor() {
                const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
                return isUserPlayingSoundsResult;
              }
            }
            if (cResult[25] === id) {
              class Y {
                constructor() {
                  const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
                  return isUserPlayingSoundsResult;
                }
              }
            }
            function ie() {
              let guild_id;
              if (!constants2) {
                closure_10(true);
                const obj = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: guild_id };
                ({ soundId: obj.sound_id, name: obj.sound_name, guildId: obj.sound_guild_id } = sound);
                const track = AnalyticsUtilsDefault.track;
                const EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED = c10.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED;
                AnalyticsUtilsDefault;
                channel = ChannelStore.getChannel(id);
                guild_id = undefined;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                track(EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj);
                const obj2 = SoundboardActionCreators;
                obj2.playSoundLocally(id, sound);
              }
            }
            class N {
              constructor() {
                const currentUser = stateFromStores.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[25] = id;
            cResult[26] = tmp30;
            cResult[27] = sound;
            cResult[28] = ie;
          }
          const fn2 = function q() {
            let obj2;
            if (stateFromStores1) {
              const tmpResult = SoundboardActionCreators;
              tmpResult.removeFavoriteSound(sound.soundId);
            } else {
              const obj = { sound, location: obj2 };
              obj2 = { object: unpackModuleId.SOUNDBOARD_SOUND };
              const tmpResult2 = SoundboardUtils;
              tmpResult2.trackSoundFavorited(obj);
              const obj4 = SoundboardActionCreators;
              obj4.addFavoriteSound(sound.soundId);
            }
          };
          cResult[22] = stateFromStores1;
          cResult[23] = sound;
          cResult[24] = fn2;
        }
        class U {
          constructor() {
            tmp = onLockedPress(() => closure_1_7());
            return;
          }
        }
        cResult[5] = onLockedPress;
        cResult[6] = tmp7;
        cResult[7] = U;
      }
    }
  }
  const fn = function y() {
    if (soundboardSoundPreviewMenuEnabled) {
      const obj2 = { channel, analyticsSource, initialScrollLocation: soundGridLocation };
      const obj = soundboard_SoundboardActionCreators;
      const result = obj.openSoundboardSoundPickerActionSheet(obj2);
    }
  };
  cResult[0] = analyticsSource;
  cResult[1] = channel;
  cResult[2] = soundboardSoundPreviewMenuEnabled;
  cResult[3] = soundGridLocation;
  cResult[4] = fn;
  tmp7 = fn;
}) : ((channel) => {
  let StarOutlineIcon;
  let _undefined;
  let c10;
  let intl3;
  let intl4;
  let isLocked;
  let items12;
  let items13;
  let items14;
  let obj21;
  let obj22;
  let obj9;
  let onLockedPress;
  let str2;
  let string2;
  let stringResult;
  let t2;
  let tmp13;
  let tmp18Result3;
  let tmp28;
  let tmp31;
  channel = channel.channel;
  const sound = channel.sound;
  const soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  onLockedPress = undefined;
  let stateFromStores;
  let stateFromStores1;
  c10 = undefined;
  const tmp = closure_15();
  let id = channel.id;
  let obj = channel(soundGridLocation[13]);
  const soundboardSoundPreviewMenuEnabled = obj.useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  let obj2 = channel(soundGridLocation[14]);
  const soundboardSoundLock = obj2.useSoundboardSoundLock(sound, channel);
  ({ isLocked, onLockedPress } = soundboardSoundLock);
  let items = [channel, soundGridLocation, soundboardSoundPreviewMenuEnabled, analyticsSource];
  const lockedAccessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
  const onDismiss = id.useCallback(() => {
    if (soundboardSoundPreviewMenuEnabled) {
      const obj2 = { channel, analyticsSource, initialScrollLocation: soundGridLocation };
      const obj = soundboard_SoundboardActionCreators;
      const result = obj.openSoundboardSoundPickerActionSheet(obj2);
    }
  }, items);
  const items1 = [onLockedPress, onDismiss];
  const callback1 = id.useCallback(() => {
    onLockedPress(() => onDismiss());
  }, items1);
  let obj4 = channel(soundGridLocation[16]);
  const items2 = [stateFromStores];
  stateFromStores = obj4.useStateFromStores(items2, () => {
    const currentUser = stateFromStores.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items3 = [stateFromStores1];
  const obj5 = channel(soundGridLocation[16]);
  stateFromStores1 = obj5.useStateFromStores(items3, () => SoundboardStore.isFavoriteSound(sound.soundId));
  const items4 = [stateFromStores1];
  const items5 = [sound];
  const obj6 = channel(soundGridLocation[16]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => SoundboardStore.isPlayingSound(sound.soundId), items5);
  const items6 = [stateFromStores1];
  const items7 = [stateFromStores];
  const obj7 = channel(soundGridLocation[16]);
  obj7.useStateFromStores(items6, () => {
    const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
    return isUserPlayingSoundsResult;
  }, items7);
  [tmp13, c10] = analyticsSource(id.useState(false), 2);
  const stateFromStores3 = tmp13;
  const items8 = [stateFromStores1, sound];
  const items9 = [id, sound, tmp13];
  const tmp12 = analyticsSource(id.useState(false), 2);
  const callback2 = obj3.useCallback(() => {
    let obj2;
    if (stateFromStores1) {
      const tmpResult = SoundboardActionCreators;
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      const obj = { sound, location: obj2 };
      obj2 = { object: unpackModuleId.SOUNDBOARD_SOUND };
      const tmpResult2 = SoundboardUtils;
      tmpResult2.trackSoundFavorited(obj);
      const obj4 = SoundboardActionCreators;
      obj4.addFavoriteSound(sound.soundId);
    }
  }, items8);
  const items10 = [sound, id, analyticsSource];
  const callback3 = obj3.useCallback(() => {
    let guild_id;
    if (!stateFromStores3) {
      _undefined(true);
      const obj = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: guild_id };
      ({ soundId: obj.sound_id, name: obj.sound_name, guildId: obj.sound_guild_id } = sound);
      const track = AnalyticsUtilsDefault.track;
      const EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED = _undefined.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED;
      AnalyticsUtilsDefault;
      channel = ChannelStore.getChannel(id);
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      track(EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj);
      const obj2 = SoundboardActionCreators;
      obj2.playSoundLocally(id, sound);
    }
  }, items9);
  const callback4 = obj3.useCallback(() => {
    _undefined(false);
    const items = [analyticsSource];
    const obj = SoundboardUtils;
    obj.playSound(sound, id, items);
  }, items10);
  let str = "primary";
  const Button = tmp2(tmp3[23]).Button;
  if (soundboardSoundPreviewMenuEnabled) {
    str = "secondary";
  }
  const obj8 = { variant: str, icon: closure_12(StarOutlineIcon, obj9), text: stringResult, onPress: callback2 };
  if (stateFromStores1) {
    StarOutlineIcon = tmp2(tmp3[20]).StarIcon;
  } else {
    StarOutlineIcon = tmp2(tmp3[21]).StarOutlineIcon;
  }
  obj9 = { style: tmp.star };
  const intl = tmp2(tmp3[22]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[22]).t;
  if (stateFromStores1) {
    stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  const tmp18Result = closure_12(Button, obj8);
  const Button2 = tmp2(tmp3[23]).Button;
  if (tmp13) {
    const obj10 = { style: tmp.star };
    tmp18Result3 = closure_12(tmp2(tmp3[24]).WaveformIcon, obj10);
  } else {
    const obj11 = { style: tmp.star, source: sound(soundGridLocation[25]) };
    tmp18Result3 = closure_12(onLockedPress, obj11);
  }
  const obj12 = { variant: "secondary", icon: tmp18Result3, text: string2(tmp13 ? t2.diasud : t2.Kd4uxG), onPress: callback3 };
  const intl2 = tmp2(tmp3[22]).intl;
  string2 = intl2.string;
  t2 = tmp2(tmp3[22]).t;
  const tmp18Result4 = closure_12(Button2, obj12);
  const items11 = [tmp.soundPresentation, ];
  let prop = null;
  const obj13 = { startExpanded: true, onDismiss, children: closure_13(soundboardSoundPreviewMenuEnabled, obj22) };
  const ActionSheet = tmp2(tmp3[31]).ActionSheet;
  if (!tmp13 && stateFromStores2 && stateFromStores3) {
    prop = tmp.soundPresentationPlaying;
  }
  const obj14 = { style: items11, accessible: true, accessibilityLabel: sound.name, accessibilityValue: tmp28, children: items14 };
  items11[1] = prop;
  tmp28 = undefined;
  if (!tmp13 && stateFromStores2 && stateFromStores3) {
    const obj15 = { text: intl3.string(channel(soundGridLocation[22]).t.diasud) };
    intl3 = tmp2(tmp3[22]).intl;
    tmp28 = obj15;
  }
  const obj16 = { fastImageStyle: items12, textEmojiStyle: items13, src: sound(soundGridLocation[26])(sound, 64), name: str2 };
  items12 = [, ];
  ({ emoji: arr13[0], emojiFastImage: arr13[1] } = tmp);
  items13 = [, ];
  ({ emoji: arr14[0], emojiText: arr14[1] } = tmp);
  str2 = sound.emojiName;
  const tmp29 = sound(soundGridLocation[27]);
  if (str2 == null) {
    str2 = "";
  }
  items14 = [closure_12(tmp29, obj16), ];
  const obj17 = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items14[1] = closure_12(channel(soundGridLocation[28]).Text, obj17);
  const items15 = [closure_13(soundboardSoundPreviewMenuEnabled, obj14), ];
  const obj19 = { children: null };
  const obj18 = { style: tmp.buttonContainer, children: closure_13(closure_14, tmp31) };
  if (soundboardSoundPreviewMenuEnabled) {
    let PlayIcon;
    const Button3 = tmp2(tmp3[23]).Button;
    if (isLocked) {
      PlayIcon = tmp2(tmp3[29]).LockIcon;
    } else {
      PlayIcon = tmp2(tmp3[30]).PlayIcon;
    }
    const obj20 = { variant: "primary", icon: closure_12(PlayIcon, obj21), text: intl4.string(channel(soundGridLocation[22]).t.RscU7I), disabled: isLocked, accessibilityHint: lockedAccessibilityHint, onPress: callback4, onPressDisabled: callback1 };
    obj21 = { style: tmp.primaryIcon };
    intl4 = tmp2(tmp3[22]).intl;
    const items16 = [closure_12(Button3, obj20), tmp18Result4, tmp18Result];
    obj19.children = items16;
    tmp31 = obj19;
  } else {
    const items17 = [tmp18Result, tmp18Result4];
    obj19.children = items17;
    tmp31 = obj19;
  }
  obj22 = { children: items15 };
  items15[1] = closure_12(soundboardSoundPreviewMenuEnabled, obj18);
  return closure_12(ActionSheet, obj13);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default tmp6;