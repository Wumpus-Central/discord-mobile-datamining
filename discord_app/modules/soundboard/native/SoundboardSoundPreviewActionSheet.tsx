// === Module 17705: SoundboardSoundPreviewActionSheet ===

// Module 17705 (SoundboardSoundPreviewActionSheet)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7041 */;
import SoundboardUtils from "SoundboardUtils" /* 7049 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17688 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
import SoundboardStore from "SoundboardStore" /* 5425 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, AnalyticsObjects: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { soundPresentation: { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, paddingBottom: nativeDefault.space.PX_16 }, soundPresentationPlaying: null, emoji: null, emojiFastImage: null, emojiText: null, text: null, buttonContainer: null, star: null, primaryIcon: null };
let obj3 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, paddingBottom: nativeDefault.space.PX_16 };
obj2.soundPresentationPlaying = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
let size = { marginTop: nativeDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
obj2.emoji = size;
obj2.emojiFastImage = { width: 128, height: 128 };
const PlatformUtils = fn(1382);
let num;
if (PlatformUtils.isIOS()) {
  num = 60;
}
obj2.emojiText = { fontSize: num, lineHeight: 74 };
let obj4 = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
obj2.text = { marginTop: nativeDefault.space.PX_16, alignSelf: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center" };
obj2.buttonContainer = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
const size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj2.star = size1;
const size2 = { width: 16, height: 16, tintColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj2.primaryIcon = size2;
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SoundboardSoundPreviewActionSheet(channel) {
  const cResult = channel(soundGridLocation[12]).c(97);
  channel = channel.channel;
  const sound = channel.sound;
  soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  closure_14();
  let id = channel.id;
  let obj = channel(soundGridLocation[12]);
  const soundboardSoundPreviewMenuEnabled = channel(soundGridLocation[13]).useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  let obj2 = channel(soundGridLocation[13]);
  const soundboardSoundLock = channel(soundGridLocation[14]).useSoundboardSoundLock(sound, channel);
  ({ isLocked, lockedAccessibilityHint, onLockedPress } = soundboardSoundLock);
  if (cResult[0] === analyticsSource) {
    if (cResult[1] === channel) {
      if (cResult[2] === soundboardSoundPreviewMenuEnabled) {
        if (cResult[3] === soundGridLocation) {
          let tmp7 = cResult[4];
        }
        UserStore = tmp7;
        if (cResult[5] === onLockedPress) {
          const _Symbol = Symbol;
          class T {
            constructor() {
              tmp = onLockedPress(() => currentUser());
              return;
            }
          }
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [UserStore];
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[8] = items;
            cResult[9] = R;
            let tmp11 = R;
            let tmp10 = items;
          } else {
            tmp10 = cResult[8];
            tmp11 = cResult[9];
          }
          const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp10, tmp11);
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [stateFromStores];
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[10] = items1;
            let tmp14 = items1;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] !== sound.soundId) {
            const fn2 = function w() {
              return SoundboardStore.isFavoriteSound(sound.soundId);
            };
            cResult[11] = sound.soundId;
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[12] = fn2;
            let tmp16 = fn2;
          } else {
            tmp16 = cResult[12];
          }
          let tmpResult = tmp(tmp2[16]);
          const stateFromStores1 = tmp(tmp2[16]).useStateFromStores(tmp14, tmp16);
          const _Symbol3 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [stateFromStores];
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[13] = items2;
            let tmp18 = items2;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] !== sound.soundId) {
            class H {
              constructor() {
                return closure_8.isPlayingSound(sound.soundId);
              }
            }
            cResult[14] = sound.soundId;
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[15] = H;
          } else {
            class H {
              constructor() {
                return closure_8.isPlayingSound(sound.soundId);
              }
            }
          }
          if (cResult[16] !== sound) {
            class H {
              constructor() {
                return closure_8.isPlayingSound(sound.soundId);
              }
            }
            tmp22[0] = sound;
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[17] = tmp22;
          } else {
            class H {
              constructor() {
                return closure_8.isPlayingSound(sound.soundId);
              }
            }
          }
          const tmpResult4 = tmp(tmp2[16]);
          const _Symbol4 = Symbol;
          const stateFromStores2 = tmp(tmp2[16]).useStateFromStores(tmp18, H, tmp22);
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor() {
                return closure_8.isPlayingSound(sound.soundId);
              }
            }
            const items3 = [stateFromStores];
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[18] = items3;
            const tmp24 = items3;
          } else {
            class H {
              constructor() {
                return closure_8.isPlayingSound(sound.soundId);
              }
            }
          }
          if (cResult[19] !== stateFromStores) {
            class M {
              constructor() {
                isUserPlayingSoundsResult = null != closure_8;
                if (isUserPlayingSoundsResult) {
                  tmp3 = closure_8;
                  isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                }
                return isUserPlayingSoundsResult;
              }
            }
            const items4 = [stateFromStores];
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[19] = stateFromStores;
            cResult[20] = M;
            cResult[21] = items4;
            let tmp26 = items4;
          } else {
            class M {
              constructor() {
                isUserPlayingSoundsResult = null != closure_8;
                if (isUserPlayingSoundsResult) {
                  tmp3 = closure_8;
                  isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                }
                return isUserPlayingSoundsResult;
              }
            }
            tmp26 = cResult[21];
          }
          const tmpResult5 = tmp(tmp2[16]);
          const stateFromStores3 = tmp(tmp2[16]).useStateFromStores(tmp24, M, tmp26);
          const tmpResult6 = tmp(tmp2[16]);
          [tmp31, closure_10] = analyticsSource(id.useState(false), 2);
          if (!tmp31) {
            class M {
              constructor() {
                isUserPlayingSoundsResult = null != closure_8;
                if (isUserPlayingSoundsResult) {
                  tmp3 = closure_8;
                  isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                }
                return isUserPlayingSoundsResult;
              }
            }
          }
          if (tmp32) {
            class M {
              constructor() {
                isUserPlayingSoundsResult = null != closure_8;
                if (isUserPlayingSoundsResult) {
                  tmp3 = closure_8;
                  isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                }
                return isUserPlayingSoundsResult;
              }
            }
          }
          if (tmp31) {
            class M {
              constructor() {
                isUserPlayingSoundsResult = null != closure_8;
                if (isUserPlayingSoundsResult) {
                  tmp3 = closure_8;
                  isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                }
                return isUserPlayingSoundsResult;
              }
            }
          }
          closure_11 = tmp31;
          if (cResult[22] === stateFromStores1) {
            class M {
              constructor() {
                isUserPlayingSoundsResult = null != closure_8;
                if (isUserPlayingSoundsResult) {
                  tmp3 = closure_8;
                  isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                }
                return isUserPlayingSoundsResult;
              }
            }
            if (cResult[25] === id) {
              class M {
                constructor() {
                  isUserPlayingSoundsResult = null != closure_8;
                  if (isUserPlayingSoundsResult) {
                    tmp3 = closure_8;
                    isUserPlayingSoundsResult = closure_8.isUserPlayingSounds(tmp);
                  }
                  return isUserPlayingSoundsResult;
                }
              }
            }
            function oe() {
              if (!closure_11) {
                constants2(true);
                const obj4 = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: null };
                ({ soundId: obj2.sound_id, name: obj2.sound_name, guildId: obj2.sound_guild_id } = sound);
                channel = ChannelStore.getChannel(id);
                let guild_id;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                obj4.location_guild_id = guild_id;
                AnalyticsUtilsDefault.track(constants.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj4);
                SoundboardActionCreators.playSoundLocally(id, sound);
              }
            }
            class R {
              constructor() {
                currentUser = closure_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[25] = id;
            cResult[26] = tmp31;
            cResult[27] = sound;
            cResult[28] = oe;
          }
          const fn3 = function z() {
            if (stateFromStores1) {
              SoundboardActionCreators.removeFavoriteSound(sound.soundId);
              const tmpResult = SoundboardActionCreators;
            } else {
              const obj = { sound, location: null };
              const obj2 = { object: constants2.SOUNDBOARD_SOUND };
              obj.location = obj2;
              SoundboardUtils.trackSoundFavorited(obj);
              const tmpResult2 = SoundboardUtils;
              SoundboardActionCreators.addFavoriteSound(sound.soundId);
            }
          };
          cResult[22] = stateFromStores1;
          cResult[23] = sound;
          cResult[24] = fn3;
          const tmp30 = analyticsSource(id.useState(false), 2);
          tmp32 = !tmp31;
        }
        class T {
          constructor() {
            tmp = onLockedPress(() => currentUser());
            return;
          }
        }
        cResult[5] = onLockedPress;
        cResult[6] = tmp7;
        cResult[7] = T;
      }
    }
  }
  const fn = function b() {
    if (soundboardSoundPreviewMenuEnabled) {
      const obj2 = { channel, analyticsSource, initialScrollLocation: soundGridLocation };
      const result = soundboard_SoundboardActionCreators.openSoundboardSoundPickerActionSheet(obj2);
    }
  };
  cResult[0] = analyticsSource;
  cResult[1] = channel;
  cResult[2] = soundboardSoundPreviewMenuEnabled;
  cResult[3] = soundGridLocation;
  cResult[4] = fn;
  tmp7 = fn;
  let obj3 = channel(soundGridLocation[14]);
}) : (function SoundboardSoundPreviewActionSheet(channel) {
  channel = channel.channel;
  const sound = channel.sound;
  const soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  onLockedPress = undefined;
  c10 = undefined;
  let primaryIcon = closure_14();
  let id = channel.id;
  let stringResult1 = soundGridLocation;
  const soundboardSoundPreviewMenuEnabled = channel(soundGridLocation[13]).useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  let obj = channel(soundGridLocation[13]);
  const soundboardSoundLock = channel(soundGridLocation[14]).useSoundboardSoundLock(sound, channel);
  ({ isLocked, onLockedPress } = soundboardSoundLock);
  let items = [channel, soundGridLocation, soundboardSoundPreviewMenuEnabled, analyticsSource];
  const onDismiss = id.useCallback(() => {
    if (soundboardSoundPreviewMenuEnabled) {
      const obj2 = { channel, analyticsSource, initialScrollLocation: soundGridLocation };
      const result = soundboard_SoundboardActionCreators.openSoundboardSoundPickerActionSheet(obj2);
    }
  }, items);
  const items1 = [onLockedPress, onDismiss];
  const callback1 = id.useCallback(() => {
    onLockedPress(() => onDismiss());
  }, items1);
  let obj2 = channel(soundGridLocation[14]);
  const items2 = [onDismiss];
  const stateFromStores = channel(soundGridLocation[16]).useStateFromStores(items2, () => {
    const currentUser = callback.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj4 = channel(soundGridLocation[16]);
  const items3 = [stateFromStores];
  const stateFromStores1 = channel(soundGridLocation[16]).useStateFromStores(items3, () => SoundboardStore.isFavoriteSound(sound.soundId));
  const obj5 = channel(soundGridLocation[16]);
  const items4 = [stateFromStores];
  const items5 = [sound];
  const stateFromStores2 = channel(soundGridLocation[16]).useStateFromStores(items4, () => SoundboardStore.isPlayingSound(sound.soundId), items5);
  const obj6 = channel(soundGridLocation[16]);
  const items6 = [stateFromStores];
  const items7 = [stateFromStores];
  let stateFromStores3 = channel(soundGridLocation[16]).useStateFromStores(items6, () => {
    let isUserPlayingSoundsResult = null != stateFromStores;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = SoundboardStore.isUserPlayingSounds(tmp);
    }
    return isUserPlayingSoundsResult;
  }, items7);
  const obj7 = channel(soundGridLocation[16]);
  [tmp12, c10] = analyticsSource(id.useState(false), 2);
  let tmp13 = !tmp12;
  if (!tmp12) {
    tmp13 = stateFromStores2;
  }
  if (tmp13) {
    tmp13 = stateFromStores3;
  }
  stateFromStores3 = tmp12;
  const items8 = [stateFromStores1, sound];
  const items9 = [id, sound, tmp12];
  const callback2 = obj3.useCallback(() => {
    if (stateFromStores1) {
      SoundboardActionCreators.removeFavoriteSound(sound.soundId);
      const tmpResult = SoundboardActionCreators;
    } else {
      const obj = { sound, location: null };
      const obj2 = { object: constants2.SOUNDBOARD_SOUND };
      obj.location = obj2;
      SoundboardUtils.trackSoundFavorited(obj);
      const tmpResult2 = SoundboardUtils;
      SoundboardActionCreators.addFavoriteSound(sound.soundId);
    }
  }, items8);
  const items10 = [sound, id, analyticsSource];
  const callback3 = obj3.useCallback(() => {
    if (!stateFromStores3) {
      _undefined(true);
      const obj4 = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: null };
      ({ soundId: obj2.sound_id, name: obj2.sound_name, guildId: obj2.sound_guild_id } = sound);
      channel = ChannelStore.getChannel(id);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj4.location_guild_id = guild_id;
      AnalyticsUtilsDefault.track(constants.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj4);
      SoundboardActionCreators.playSoundLocally(id, sound);
    }
  }, items9);
  const callback4 = obj3.useCallback(() => {
    _undefined(false);
    const items = [analyticsSource];
    SoundboardUtils.playSound(sound, id, items);
  }, items10);
  let str = "primary";
  if (soundboardSoundPreviewMenuEnabled) {
    str = "secondary";
  }
  const obj8 = { variant: str, icon: null, text: null, onPress: null };
  if (stateFromStores1) {
    let StarOutlineIcon = tmp(stringResult1[20]).StarIcon;
  } else {
    StarOutlineIcon = tmp(stringResult1[21]).StarOutlineIcon;
  }
  obj8.icon = stateFromStores3(StarOutlineIcon, { style: primaryIcon.star });
  const intl = tmp(stringResult1[22]).intl;
  const string = intl.string;
  const t = tmp(stringResult1[22]).t;
  if (stateFromStores1) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj8.text = stringResult;
  obj8.onPress = callback2;
  const tmp17Result = stateFromStores3(channel(stringResult1[23]).Button, obj8);
  if (tmp12) {
    const obj10 = { style: primaryIcon.star };
    let tmp17Result3 = tmp17(tmp(stringResult1[24]).WaveformIcon, obj10);
  } else {
    const obj11 = { style: primaryIcon.star, source: sound(stringResult1[26]) };
    tmp17Result3 = tmp17(sound(stringResult1[25]), obj11);
    const tmp21 = sound(stringResult1[25]);
  }
  const obj12 = { variant: "secondary", icon: tmp17Result3, text: null, onPress: null };
  const intl2 = tmp(stringResult1[22]).intl;
  const t2 = tmp(stringResult1[22]).t;
  obj12.text = intl2.string(tmp12 ? t2.diasud : t2.Kd4uxG);
  obj12.onPress = callback3;
  const tmp17Result4 = stateFromStores3(channel(stringResult1[23]).Button, obj12);
  const obj13 = { startExpanded: true, onDismiss, children: null };
  const items11 = [primaryIcon.soundPresentation, ];
  let prop = null;
  if (tmp13) {
    prop = primaryIcon.soundPresentationPlaying;
  }
  const obj14 = { style: items11, accessible: true, accessibilityLabel: sound.name, accessibilityValue: null, children: null };
  items11[1] = prop;
  let tmp27;
  if (tmp13) {
    const obj15 = { text: null };
    const intl3 = tmp(stringResult1[22]).intl;
    obj15.text = intl3.string(tmp(stringResult1[22]).t.diasud);
    tmp27 = obj15;
  }
  obj14.accessibilityValue = tmp27;
  const obj16 = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
  const items12 = [, ];
  ({ emoji: arr13[0], emojiFastImage: arr13[1] } = primaryIcon);
  obj16.fastImageStyle = items12;
  const items13 = [, ];
  ({ emoji: arr14[0], emojiText: arr14[1] } = primaryIcon);
  obj16.textEmojiStyle = items13;
  const obj9 = { style: primaryIcon.star };
  const tmp11 = analyticsSource(id.useState(false), 2);
  obj16.src = sound(stringResult1[27])(sound, 64);
  let str2 = sound.emojiName;
  if (str2 == null) {
    str2 = "";
  }
  obj16.name = str2;
  const items14 = [stateFromStores3(sound(stringResult1[28]), obj16), stateFromStores3(channel(stringResult1[29]).Text, { style: primaryIcon.text, variant: "heading-lg/extrabold", children: sound.name })];
  obj14.children = items14;
  const items15 = [closure_12(soundboardSoundPreviewMenuEnabled, obj14), ];
  const obj18 = { style: primaryIcon.buttonContainer, children: null };
  const obj19 = { children: null };
  if (soundboardSoundPreviewMenuEnabled) {
    let Button = tmp(stringResult1[23]).Button;
    if (isLocked) {
      let PlayIcon = tmp(stringResult1[30]).LockIcon;
    } else {
      PlayIcon = tmp(stringResult1[31]).PlayIcon;
    }
    const obj20 = { variant: "primary", icon: null, text: null, disabled: null, accessibilityHint: null, onPress: null, onPressDisabled: null };
    const obj21 = { style: null };
    primaryIcon = primaryIcon.primaryIcon;
    obj21.style = primaryIcon;
    obj20.icon = tmp17(PlayIcon, obj21);
    const intl4 = tmp(stringResult1[22]).intl;
    stringResult1 = intl4.string(tmp(stringResult1[22]).t.RscU7I);
    obj20.text = stringResult1;
    obj20.disabled = isLocked;
    obj20.accessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
    obj20.onPress = callback4;
    obj20.onPressDisabled = callback1;
    Button = tmp17(Button, obj20);
    const items16 = [Button, tmp17Result4, tmp17Result];
    obj19.children = items16;
  } else {
    const items17 = [tmp17Result, tmp17Result4];
    obj19.children = items17;
    const obj22 = { children: null };
    obj18.children = closure_12(tmp29, obj19);
    items15[1] = tmp17(tmp25, obj18);
    obj22.children = items15;
    obj13.children = closure_12(tmp25, obj22);
    return tmp17(tmp(stringResult1[32]).ActionSheet, obj13);
  }
  const obj17 = { style: primaryIcon.text, variant: "heading-lg/extrabold", children: sound.name };
  const tmp28 = sound(stringResult1[28]);
});