// === Module 17551: SoundboardSoundPreviewActionSheet ===

// Module 17551 (SoundboardSoundPreviewActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7583 */;
import SoundboardUtils from "SoundboardUtils" /* 7589 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17534 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5225 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsObjects: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { soundPresentation: { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, paddingBottom: nativeDefault.space.PX_16 }, soundPresentationPlaying: null, emoji: null, emojiFastImage: null, emojiText: null, text: null, buttonContainer: null, star: null, primaryIcon: null };
let obj3 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, paddingBottom: nativeDefault.space.PX_16 };
obj2.soundPresentationPlaying = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
let size = { marginTop: nativeDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
obj2.emoji = size;
obj2.emojiFastImage = { width: 128, height: 128 };
const PlatformUtils = fn(1364);
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
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channel) {
  channel = channel.channel;
  const sound = channel.sound;
  const soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  onLockedPress = undefined;
  let stateFromStores;
  let stateFromStores1;
  c10 = undefined;
  let primaryIcon = closure_15();
  let id = channel.id;
  let stringResult1 = soundGridLocation;
  const soundboardSoundPreviewMenuEnabled = channel(soundGridLocation[11]).useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  let obj = channel(soundGridLocation[11]);
  const soundboardSoundLock = channel(soundGridLocation[12]).useSoundboardSoundLock(sound, channel);
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
  let obj2 = channel(soundGridLocation[12]);
  const items2 = [stateFromStores];
  stateFromStores = channel(soundGridLocation[14]).useStateFromStores(items2, () => {
    const currentUser = stateFromStores.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj4 = channel(soundGridLocation[14]);
  const items3 = [stateFromStores1];
  stateFromStores1 = channel(soundGridLocation[14]).useStateFromStores(items3, () => SoundboardStore.isFavoriteSound(sound.soundId));
  const obj5 = channel(soundGridLocation[14]);
  const items4 = [stateFromStores1];
  const items5 = [sound];
  const stateFromStores2 = channel(soundGridLocation[14]).useStateFromStores(items4, () => SoundboardStore.isPlayingSound(sound.soundId), items5);
  const obj6 = channel(soundGridLocation[14]);
  const items6 = [stateFromStores1];
  const items7 = [stateFromStores];
  let stateFromStores3 = channel(soundGridLocation[14]).useStateFromStores(items6, () => {
    let isUserPlayingSoundsResult = null != stateFromStores;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = SoundboardStore.isUserPlayingSounds(tmp);
    }
    return isUserPlayingSoundsResult;
  }, items7);
  const obj7 = channel(soundGridLocation[14]);
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
    let StarOutlineIcon = tmp(stringResult1[19]).StarIcon;
  } else {
    StarOutlineIcon = tmp(stringResult1[20]).StarOutlineIcon;
  }
  obj8.icon = closure_12(StarOutlineIcon, { style: primaryIcon.star });
  const intl = tmp(stringResult1[21]).intl;
  const string = intl.string;
  const t = tmp(stringResult1[21]).t;
  if (stateFromStores1) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj8.text = stringResult;
  obj8.onPress = callback2;
  const tmp17Result = closure_12(channel(stringResult1[18]).Button, obj8);
  if (tmp12) {
    const obj10 = { style: primaryIcon.star };
    let tmp17Result3 = closure_12(tmp(stringResult1[22]).WaveformIcon, obj10);
  } else {
    const obj11 = { style: primaryIcon.star, source: sound(stringResult1[23]) };
    tmp17Result3 = closure_12(onLockedPress, obj11);
  }
  const obj12 = { variant: "secondary", icon: tmp17Result3, text: null, onPress: null };
  const intl2 = tmp(stringResult1[21]).intl;
  const t2 = tmp(stringResult1[21]).t;
  obj12.text = intl2.string(tmp12 ? t2.diasud : t2.Kd4uxG);
  obj12.onPress = callback3;
  const tmp17Result4 = closure_12(channel(stringResult1[18]).Button, obj12);
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
    const intl3 = tmp(stringResult1[21]).intl;
    obj15.text = intl3.string(tmp(stringResult1[21]).t.diasud);
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
  obj16.src = sound(stringResult1[26])(sound, 64);
  let str2 = sound.emojiName;
  if (str2 == null) {
    str2 = "";
  }
  obj16.name = str2;
  const items14 = [closure_12(sound(stringResult1[25]), obj16), closure_12(channel(stringResult1[27]).Text, { style: primaryIcon.text, variant: "heading-lg/extrabold", children: sound.name })];
  obj14.children = items14;
  const items15 = [closure_13(soundboardSoundPreviewMenuEnabled, obj14), ];
  const obj18 = { style: primaryIcon.buttonContainer, children: null };
  const obj19 = { children: null };
  if (soundboardSoundPreviewMenuEnabled) {
    let Button = tmp(stringResult1[18]).Button;
    if (isLocked) {
      let PlayIcon = tmp(stringResult1[28]).LockIcon;
    } else {
      PlayIcon = tmp(stringResult1[29]).PlayIcon;
    }
    const obj20 = { variant: "primary", icon: null, text: null, disabled: null, accessibilityHint: null, onPress: null, onPressDisabled: null };
    const obj21 = { style: null };
    primaryIcon = primaryIcon.primaryIcon;
    obj21.style = primaryIcon;
    obj20.icon = closure_12(PlayIcon, obj21);
    const intl4 = tmp(stringResult1[21]).intl;
    stringResult1 = intl4.string(tmp(stringResult1[21]).t.RscU7I);
    obj20.text = stringResult1;
    obj20.disabled = isLocked;
    obj20.accessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
    obj20.onPress = callback4;
    obj20.onPressDisabled = callback1;
    Button = closure_12(Button, obj20);
    const items16 = [Button, tmp17Result4, tmp17Result];
    obj19.children = items16;
  } else {
    const items17 = [tmp17Result, tmp17Result4];
    obj19.children = items17;
    const obj22 = { children: null };
    obj18.children = closure_13(tmp29, obj19);
    items15[1] = closure_12(tmp25, obj18);
    obj22.children = items15;
    obj13.children = closure_13(tmp25, obj22);
    return closure_12(tmp(stringResult1[24]).ActionSheet, obj13);
  }
  const obj17 = { style: primaryIcon.text, variant: "heading-lg/extrabold", children: sound.name };
  const tmp28 = sound(stringResult1[25]);
};