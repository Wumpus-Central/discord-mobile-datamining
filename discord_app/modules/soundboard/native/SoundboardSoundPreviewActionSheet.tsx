// discord_app/modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import SoundboardActionCreators from "../SoundboardActionCreators.tsx";
import SoundboardUtils from "../SoundboardUtils.tsx";
import soundboard_SoundboardActionCreators from "SoundboardActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SoundboardStore from "../SoundboardStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsObjects: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  soundPresentation: null,
  soundPresentationPlaying: null,
  emoji: null,
  emojiFastImage: null,
  emojiText: null,
  text: null,
  buttonContainer: null,
  star: null,
  primaryIcon: null,
};
createStyles = {
  borderWidth: 2,
  borderColor: "transparent",
  borderRadius: nativeDefault.radii.lg,
  paddingBottom: nativeDefault.space.PX_16,
};
createStyles.soundPresentation = createStyles;
createStyles.soundPresentationPlaying = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
let size = { marginTop: nativeDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
createStyles.emoji = size;
createStyles.emojiFastImage = { width: 128, height: 128 };
const PlatformUtils = fn(1115);
let num;
if (PlatformUtils.isIOS()) {
  num = 60;
}
createStyles.emojiText = { fontSize: num, lineHeight: 74 };
let obj1 = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
createStyles.text = { marginTop: nativeDefault.space.PX_16, alignSelf: "center" };
let obj2 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center" };
createStyles.buttonContainer = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
const size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_DEFAULT };
createStyles.star = size1;
const size2 = { width: 16, height: 16, tintColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
createStyles.primaryIcon = size2;
let closure_15 = createStyles.createStyles(createStyles);
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
  let obj = channel(soundGridLocation[11]);
  const soundboardSoundPreviewMenuEnabled = obj.useSoundboardSoundPreviewMenuEnabled(
    "SoundboardSoundPreviewActionSheet",
  );
  let obj1 = channel(soundGridLocation[12]);
  const soundboardSoundLock = obj1.useSoundboardSoundLock(sound, channel);
  ({ isLocked, onLockedPress } = soundboardSoundLock);
  let obj2 = id;
  let items = [channel, soundGridLocation, soundboardSoundPreviewMenuEnabled, analyticsSource];
  const onDismiss = id.useCallback(() => {
    if (soundboardSoundPreviewMenuEnabled) {
      const obj = { channel, analyticsSource, initialScrollLocation: soundGridLocation };
      const result = obj.openSoundboardSoundPickerActionSheet(obj);
    }
  }, items);
  const items1 = [onLockedPress, onDismiss];
  const callback1 = id.useCallback(() => {
    onLockedPress(() => onDismiss());
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
  stateFromStores1 = obj4.useStateFromStores(items3, () => SoundboardStore.isFavoriteSound(sound.soundId));
  let obj5 = channel(soundGridLocation[14]);
  const items4 = [stateFromStores1];
  const items5 = [sound];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => SoundboardStore.isPlayingSound(sound.soundId), items5);
  let obj6 = channel(soundGridLocation[14]);
  const items6 = [stateFromStores1];
  const items7 = [stateFromStores];
  let stateFromStores3 = obj6.useStateFromStores(
    items6,
    () => {
      let isUserPlayingSoundsResult = null != stateFromStores;
      if (isUserPlayingSoundsResult) {
        isUserPlayingSoundsResult = SoundboardStore.isUserPlayingSounds(tmp);
      }
      return isUserPlayingSoundsResult;
    },
    items7,
  );
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
      let tmpResult = tmp(7338);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(7344);
      let obj = { sound, location: null };
      obj = { object: constants2.SOUNDBOARD_SOUND };
      obj.location = obj;
      tmpResult.trackSoundFavorited(obj);
      SoundboardActionCreators.addFavoriteSound(sound.soundId);
    }
  }, items8);
  const items10 = [sound, id, analyticsSource];
  const callback3 = obj2.useCallback(() => {
    if (!stateFromStores3) {
      _undefined(true);
      const obj = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: null };
      ({ soundId: obj2.sound_id, name: obj2.sound_name, guildId: obj2.sound_guild_id } = sound);
      channel = ChannelStore.getChannel(id);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj.location_guild_id = guild_id;
      obj.track(constants.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj);
      SoundboardActionCreators.playSoundLocally(id, sound);
    }
  }, items9);
  const callback4 = obj2.useCallback(() => {
    _undefined(false);
    const items = [analyticsSource];
    SoundboardUtils.playSound(sound, id, items);
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
  obj.icon = closure_12(StarOutlineIcon, obj);
  const intl = tmp(stringResult1[21]).intl;
  const string = intl.string;
  const t = tmp(stringResult1[21]).t;
  if (stateFromStores1) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj.text = stringResult;
  obj.onPress = callback2;
  let tmp17Result = tmp17(tmp(stringResult1[18]).Button, obj);
  if (tmp12) {
    obj1 = { style: primaryIcon.star };
    tmp17Result = tmp17(tmp(stringResult1[22]).WaveformIcon, obj1);
  } else {
    obj2 = { style: primaryIcon.star, source: sound(stringResult1[23]) };
    tmp17Result = tmp17(onLockedPress, obj2);
  }
  obj3 = { variant: "secondary", icon: tmp17Result, text: null, onPress: null };
  const intl2 = tmp(stringResult1[21]).intl;
  const t2 = tmp(stringResult1[21]).t;
  obj3.text = intl2.string(tmp12 ? t2.diasud : t2.Kd4uxG);
  obj3.onPress = callback3;
  const tmp17Result1 = closure_12(channel(stringResult1[18]).Button, obj3);
  obj4 = { startExpanded: true, onDismiss, children: null };
  const items11 = [primaryIcon.soundPresentation];
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
    obj6.text = intl3.string(tmp(stringResult1[21]).t.diasud);
    tmp27 = obj6;
  }
  obj5.accessibilityValue = tmp27;
  const obj7 = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
  const items12 = [,];
  ({ emoji: arr13[0], emojiFastImage: arr13[1] } = primaryIcon);
  obj7.fastImageStyle = items12;
  const items13 = [,];
  ({ emoji: arr14[0], emojiText: arr14[1] } = primaryIcon);
  obj7.textEmojiStyle = items13;
  const tmp11 = analyticsSource(id.useState(false), 2);
  obj7.src = sound(stringResult1[26])(sound, 64);
  let str2 = sound.emojiName;
  if (str2 == null) {
    str2 = "";
  }
  obj7.name = str2;
  const items14 = [
    closure_12(sound(stringResult1[25]), obj7),
    closure_12(channel(stringResult1[27]).Text, {
      style: primaryIcon.text,
      variant: "heading-lg/extrabold",
      children: sound.name,
    }),
  ];
  obj5.children = items14;
  const items15 = [closure_13(soundboardSoundPreviewMenuEnabled, obj5)];
  const obj9 = { style: primaryIcon.buttonContainer, children: null };
  const obj10 = { children: null };
  if (soundboardSoundPreviewMenuEnabled) {
    let Button = tmp(stringResult1[18]).Button;
    if (isLocked) {
      let PlayIcon = tmp(stringResult1[28]).LockIcon;
    } else {
      PlayIcon = tmp(stringResult1[29]).PlayIcon;
    }
    const obj11 = {
      variant: "primary",
      icon: null,
      text: null,
      disabled: null,
      accessibilityHint: null,
      onPress: null,
      onPressDisabled: null,
    };
    const obj12 = { style: null };
    primaryIcon = primaryIcon.primaryIcon;
    obj12.style = primaryIcon;
    obj11.icon = tmp17(PlayIcon, obj12);
    const intl4 = tmp(stringResult1[21]).intl;
    stringResult1 = intl4.string(tmp(stringResult1[21]).t.RscU7I);
    obj11.text = stringResult1;
    obj11.disabled = isLocked;
    obj11.accessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
    obj11.onPress = callback4;
    obj11.onPressDisabled = callback1;
    Button = tmp17(Button, obj11);
    const items16 = [Button, tmp17Result1, tmp17Result];
    obj10.children = items16;
  } else {
    const items17 = [tmp17Result, tmp17Result1];
    obj10.children = items17;
    const obj13 = { children: null };
    obj9.children = tmp24(tmp29, obj10);
    items15[1] = tmp17(tmp25, obj9);
    obj13.children = items15;
    obj4.children = tmp24(tmp25, obj13);
    return tmp17(tmp(stringResult1[24]).ActionSheet, obj4);
  }
}
