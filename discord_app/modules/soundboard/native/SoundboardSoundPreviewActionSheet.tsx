// === Module 16657: SoundboardSoundPreviewActionSheet ===

// Module 16657 (SoundboardSoundPreviewActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import closure_9 from "handleSoundCreateOrUpdate" /* 4965 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import set from "set" /* 500 */;

const require = arg1;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { soundPresentation: null, soundPresentationPlaying: null, emoji: null, emojiFastImage: null, emojiText: null, text: null, buttonContainer: null, star: null, primaryIcon: null };
createCacheKey = { borderWidth: 2, borderColor: "transparent", borderRadius: ThemesDefault.radii.lg, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.STATUS_SPEAKING };
let obj1 = { borderColor: ThemesDefault.colors.STATUS_SPEAKING };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
createCacheKey[3] = { width: 128, height: 128 };
let num;
if (set.isIOS()) {
  num = 60;
}
createCacheKey[4] = { fontSize: num, lineHeight: 74 };
let obj2 = { marginTop: ThemesDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
createCacheKey[5] = { marginTop: ThemesDefault.space.PX_16, alignSelf: "center" };
let obj3 = { marginTop: ThemesDefault.space.PX_16, alignSelf: "center" };
createCacheKey[6] = { gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_24 };
set = { width: 16, height: 16, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[7] = set;
let obj4 = { gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_24 };
createCacheKey[8] = { width: 16, height: 16, tintColor: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channel) {
  channel = channel.channel;
  const sound = channel.sound;
  const soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  let id;
  let soundboardSoundPreviewMenuEnabled;
  onLockedPress = undefined;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  c10 = undefined;
  let stateFromStores3;
  let primaryIcon = callback();
  id = channel.id;
  let stringResult1 = soundGridLocation;
  let obj = channel(soundGridLocation[11]);
  soundboardSoundPreviewMenuEnabled = obj.useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  obj1 = channel(soundGridLocation[12]);
  const soundboardSoundLock = obj1.useSoundboardSoundLock(sound, channel);
  ({ isLocked, onLockedPress } = soundboardSoundLock);
  let obj2 = id;
  let items = [channel, soundGridLocation, soundboardSoundPreviewMenuEnabled, analyticsSource];
  callback = id.useCallback(() => {
    if (soundboardSoundPreviewMenuEnabled) {
      let obj = channel(soundGridLocation[13]);
      obj = { channel: null, analyticsSource: null, initialScrollLocation: null };
      obj[0] = channel;
      obj[1] = analyticsSource;
      obj[2] = soundGridLocation;
      const result = obj.openSoundboardSoundPickerActionSheet(obj);
    }
  }, items);
  const items1 = [onLockedPress, callback];
  const callback1 = id.useCallback(() => {
    onLockedPress(() => callback());
  }, items1);
  let obj3 = channel(soundGridLocation[14]);
  const items2 = [stateFromStores];
  stateFromStores = obj3.useStateFromStores(items2, () => {
    const currentUser = stateFromStores.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj4 = channel(soundGridLocation[14]);
  const items3 = [stateFromStores1];
  stateFromStores1 = obj4.useStateFromStores(items3, () => stateFromStores1.isFavoriteSound(sound.soundId));
  let obj5 = channel(soundGridLocation[14]);
  const items4 = [stateFromStores1];
  const items5 = [sound];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => stateFromStores1.isPlayingSound(sound.soundId), items5);
  let obj6 = channel(soundGridLocation[14]);
  const items6 = [stateFromStores1];
  const items7 = [stateFromStores];
  stateFromStores3 = obj6.useStateFromStores(items6, () => {
    let isUserPlayingSoundsResult = null != stateFromStores;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = stateFromStores1.isUserPlayingSounds(tmp);
    }
    return isUserPlayingSoundsResult;
  }, items7);
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
  const callback2 = obj2.useCallback(() => {
    if (stateFromStores1) {
      let tmpResult = tmp(tmp2[15]);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(tmp2[16]);
      let obj = { sound: null, location: null };
      obj[0] = sound;
      obj = { object: null };
      obj[0] = stateFromStores3.SOUNDBOARD_SOUND;
      obj[1] = obj;
      tmpResult.trackSoundFavorited(obj);
      channel(soundGridLocation[15]).addFavoriteSound(sound.soundId);
      const obj4 = channel(soundGridLocation[15]);
    }
  }, items8);
  const items10 = [sound, id, analyticsSource];
  const callback3 = obj2.useCallback(() => {
    if (!stateFromStores3) {
      _undefined(true);
      let obj = sound(soundGridLocation[17]);
      obj = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: null };
      ({ soundId: obj2[0], name: obj2[1], guildId: obj2[2] } = sound);
      channel = callback.getChannel(id);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj[3] = guild_id;
      obj.track(_undefined.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj);
      channel(soundGridLocation[15]).playSoundLocally(id, sound);
      const obj3 = channel(soundGridLocation[15]);
      const tmp4 = soundGridLocation;
      const tmp6 = sound;
      const tmp8 = id;
    }
  }, items9);
  const callback4 = obj2.useCallback(() => {
    _undefined(false);
    const items = [analyticsSource];
    channel(soundGridLocation[16]).playSound(sound, id, items);
  }, items10);
  let str = "primary";
  if (soundboardSoundPreviewMenuEnabled) {
    str = "secondary";
  }
  obj = { variant: str, icon: null, text: null, onPress: null };
  if (stateFromStores1) {
    let StarOutlineIcon = tmp(stringResult1[19]).StarIcon;
  } else {
    StarOutlineIcon = tmp(stringResult1[20]).StarOutlineIcon;
  }
  obj = { style: primaryIcon.star };
  obj[1] = closure_12(StarOutlineIcon, obj);
  const intl = tmp(stringResult1[21]).intl;
  const string = intl.string;
  const t = tmp(stringResult1[21]).t;
  if (stateFromStores1) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj[2] = stringResult;
  obj[3] = callback2;
  let tmp17Result = tmp17(tmp(stringResult1[18]).Button, obj);
  if (tmp12) {
    obj1 = { style: null };
    obj1[0] = primaryIcon.star;
    tmp17Result = tmp17(tmp(stringResult1[22]).WaveformIcon, obj1);
  } else {
    obj2 = { style: null, source: null };
    obj2[0] = primaryIcon.star;
    obj2[1] = sound(stringResult1[23]);
    tmp17Result = tmp17(onLockedPress, obj2);
  }
  obj3 = { variant: "secondary", icon: tmp17Result, text: null, onPress: null };
  const intl2 = tmp(stringResult1[21]).intl;
  const t2 = tmp(stringResult1[21]).t;
  obj3[2] = intl2.string(tmp12 ? t2.diasud : t2.Kd4uxG);
  obj3[3] = callback3;
  const tmp17Result1 = closure_12(channel(stringResult1[18]).Button, obj3);
  obj4 = { startExpanded: true, onDismiss: callback, children: null };
  const items11 = [primaryIcon.soundPresentation, ];
  let prop = null;
  if (tmp13) {
    prop = primaryIcon.soundPresentationPlaying;
  }
  obj5 = { style: items11, accessible: true, accessibilityLabel: sound.name, accessibilityValue: null, children: null };
  items11[1] = prop;
  let tmp27;
  if (tmp13) {
    obj6 = { text: null };
    const intl3 = tmp(stringResult1[21]).intl;
    obj6[0] = intl3.string(tmp(stringResult1[21]).t.diasud);
    tmp27 = obj6;
  }
  obj5[3] = tmp27;
  const obj7 = { fastImageStyle: items12, textEmojiStyle: items13, src: null, name: null };
  items12 = [, ];
  ({ emoji: arr13[0], emojiFastImage: arr13[1] } = primaryIcon);
  items13 = [, ];
  ({ emoji: arr14[0], emojiText: arr14[1] } = primaryIcon);
  const tmp11 = analyticsSource(id.useState(false), 2);
  obj7[2] = sound(stringResult1[26])(sound, 64);
  let str2 = sound.emojiName;
  if (str2 == null) {
    str2 = "";
  }
  obj7[3] = str2;
  const items14 = [closure_12(sound(stringResult1[25]), obj7), closure_12(channel(stringResult1[27]).Text, { style: primaryIcon.text, variant: "heading-lg/extrabold", children: sound.name })];
  obj5[4] = items14;
  const items15 = [closure_13(soundboardSoundPreviewMenuEnabled, obj5), ];
  const obj9 = { style: primaryIcon.buttonContainer, children: null };
  const obj10 = { children: null };
  if (soundboardSoundPreviewMenuEnabled) {
    let Button = tmp(stringResult1[18]).Button;
    if (isLocked) {
      let PlayIcon = tmp(stringResult1[28]).LockIcon;
    } else {
      PlayIcon = tmp(stringResult1[29]).PlayIcon;
    }
    const obj11 = { variant: "primary", icon: null, text: null, disabled: null, accessibilityHint: null, onPress: null, onPressDisabled: null };
    const obj12 = { style: null };
    primaryIcon = primaryIcon.primaryIcon;
    obj12[0] = primaryIcon;
    obj11[1] = tmp17(PlayIcon, obj12);
    const intl4 = tmp(stringResult1[21]).intl;
    stringResult1 = intl4.string(tmp(stringResult1[21]).t.RscU7I);
    obj11[2] = stringResult1;
    obj11[3] = isLocked;
    obj11[4] = soundboardSoundLock.lockedAccessibilityHint;
    obj11[5] = callback4;
    obj11[6] = callback1;
    Button = tmp17(Button, obj11);
    const items16 = [Button, tmp17Result1, tmp17Result];
    obj10[0] = items16;
  } else {
    const items17 = [tmp17Result, tmp17Result1];
    obj10[0] = items17;
    const obj13 = { children: null };
    obj9[1] = tmp24(tmp29, obj10);
    items15[1] = tmp17(tmp25, obj9);
    obj13[0] = items15;
    obj4[2] = tmp24(tmp25, obj13);
    return tmp17(tmp(stringResult1[24]).ActionSheet, obj4);
  }
};