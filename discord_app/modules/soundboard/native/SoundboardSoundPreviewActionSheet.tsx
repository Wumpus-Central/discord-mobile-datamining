// discord_app/modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import SoundboardActionCreators from "../SoundboardActionCreators.tsx";
import SoundboardUtils from "../SoundboardUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SoundboardStore from "../SoundboardStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_9, AnalyticsObjects: closure_10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  soundPresentation: {
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: nativeDefault.radii.lg,
    paddingBottom: nativeDefault.space.PX_16,
  },
  soundPresentationPlaying: null,
  emoji: null,
  emojiFastImage: null,
  emojiText: null,
  text: null,
  buttonContainer: null,
  star: null,
  primaryIcon: null,
};
let obj3 = {
  borderWidth: 2,
  borderColor: "transparent",
  borderRadius: nativeDefault.radii.lg,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.soundPresentationPlaying = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
let size = { marginTop: nativeDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
obj2.emoji = size;
obj2.emojiFastImage = { width: 128, height: 128 };
const PlatformUtils = fn(1380);
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
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(analyticsSource) {
  ({ channel, sound } = analyticsSource);
  analyticsSource = analyticsSource.analyticsSource;
  c5 = undefined;
  const tmp = closure_13();
  let id = channel.id;
  const soundboardSoundLock = sound(id[11]).useSoundboardSoundLock(sound, channel);
  ({ isLocked, lockedAccessibilityHint, onLockedPress } = soundboardSoundLock);
  let obj = sound(id[11]);
  items = [UserStore];
  const stateFromStores = sound(id[12]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = sound(id[12]);
  const items1 = [SoundboardStore];
  const stateFromStores1 = sound(id[12]).useStateFromStores(items1, () =>
    SoundboardStore.isFavoriteSound(sound.soundId),
  );
  let obj3 = sound(id[12]);
  const items2 = [SoundboardStore];
  const items3 = [sound];
  const stateFromStores2 = sound(id[12]).useStateFromStores(
    items2,
    () => SoundboardStore.isPlayingSound(sound.soundId),
    items3,
  );
  let obj4 = sound(id[12]);
  const items4 = [SoundboardStore];
  const items5 = [stateFromStores];
  let stateFromStores3 = sound(id[12]).useStateFromStores(
    items4,
    () => {
      let isUserPlayingSoundsResult = null != stateFromStores;
      if (isUserPlayingSoundsResult) {
        isUserPlayingSoundsResult = SoundboardStore.isUserPlayingSounds(tmp);
      }
      return isUserPlayingSoundsResult;
    },
    items5,
  );
  const obj5 = sound(id[12]);
  [tmp10, c5] = stateFromStores(stateFromStores1.useState(false), 2);
  let tmp11 = !tmp10;
  if (!tmp10) {
    tmp11 = stateFromStores2;
  }
  if (tmp11) {
    tmp11 = stateFromStores3;
  }
  stateFromStores3 = tmp10;
  const items6 = [stateFromStores1, sound];
  const items7 = [id, sound, tmp10, analyticsSource];
  const callback = obj6.useCallback(() => {
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
  }, items6);
  const items8 = [sound, id, analyticsSource];
  const callback1 = obj6.useCallback(() => {
    if (!stateFromStores3) {
      _undefined(true);
      const obj4 = {
        sound_id: null,
        sound_name: null,
        sound_guild_id: null,
        location_guild_id: null,
        location_stack: null,
      };
      ({ soundId: obj2.sound_id, name: obj2.sound_name, guildId: obj2.sound_guild_id } = sound);
      const channel = ChannelStore.getChannel(id);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj4.location_guild_id = guild_id;
      items = [analyticsSource];
      obj4.location_stack = items;
      AnalyticsUtilsDefault.track(constants.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj4);
      SoundboardActionCreators.playSoundLocally(id, sound);
    }
  }, items7);
  const callback2 = obj6.useCallback(() => {
    _undefined(false);
    items = [analyticsSource];
    SoundboardUtils.playSound(sound, id, items);
  }, items8);
  const items9 = [tmp.soundPresentation];
  let prop = null;
  if (tmp11) {
    prop = tmp.soundPresentationPlaying;
  }
  const obj7 = {
    style: items9,
    accessible: true,
    accessibilityLabel: sound.name,
    accessibilityValue: null,
    children: null,
  };
  items9[1] = prop;
  let tmp19;
  if (tmp11) {
    const obj8 = { text: null };
    const intl = sound(tmp3[17]).intl;
    obj8.text = intl.string(sound(tmp3[17]).t.diasud);
    tmp19 = obj8;
  }
  obj7.accessibilityValue = tmp19;
  const obj9 = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
  const items10 = [,];
  ({ emoji: arr11[0], emojiFastImage: arr11[1] } = tmp);
  obj9.fastImageStyle = items10;
  const items11 = [,];
  ({ emoji: arr12[0], emojiText: arr12[1] } = tmp);
  obj9.textEmojiStyle = items11;
  const tmp9 = stateFromStores(stateFromStores1.useState(false), 2);
  obj9.src = analyticsSource(id[19])(sound, 64);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj9.name = str;
  const items12 = [
    closure_11(analyticsSource(id[18]), obj9),
    closure_11(sound(id[20]).Text, { style: tmp.text, variant: "heading-lg/semibold", children: sound.name }),
  ];
  obj7.children = items12;
  const items13 = [closure_12(c5, obj7)];
  const obj11 = { style: tmp.buttonContainer, children: null };
  if (isLocked) {
    let PlayIcon = sound(tmp3[22]).LockIcon;
  } else {
    PlayIcon = sound(tmp3[23]).PlayIcon;
  }
  const obj12 = {
    variant: "primary",
    icon: closure_11(PlayIcon, { style: tmp.primaryIcon }),
    text: null,
    disabled: null,
    accessibilityHint: null,
    onPress: null,
    onPressDisabled: null,
  };
  const intl2 = sound(tmp3[17]).intl;
  obj12.text = intl2.string(sound(id[17]).t.RscU7I);
  obj12.disabled = isLocked;
  obj12.accessibilityHint = lockedAccessibilityHint;
  obj12.onPress = callback2;
  obj12.onPressDisabled = onLockedPress;
  const items14 = [closure_11(sound(id[21]).Button, obj12), ,];
  if (tmp10) {
    const obj14 = { style: tmp.star };
    let tmp15Result = closure_11(sound(tmp3[24]).WaveformIcon, obj14);
  } else {
    const obj15 = { style: tmp.star, source: tmp20(tmp3[26]) };
    tmp15Result = closure_11(tmp20(tmp3[25]), obj15);
    const tmp20Result = tmp20(tmp3[25]);
  }
  const obj16 = { variant: "secondary", icon: tmp15Result, text: null, onPress: null };
  const intl3 = sound(tmp3[17]).intl;
  const t = sound(tmp3[17]).t;
  obj16.text = intl3.string(tmp10 ? t.diasud : t.Kd4uxG);
  obj16.onPress = callback1;
  items14[1] = closure_11(sound(id[21]).Button, obj16);
  if (stateFromStores1) {
    let StarOutlineIcon = sound(tmp3[27]).StarIcon;
  } else {
    StarOutlineIcon = sound(tmp3[28]).StarOutlineIcon;
  }
  const obj17 = {
    variant: "secondary",
    icon: closure_11(StarOutlineIcon, { style: tmp.star }),
    text: null,
    onPress: null,
  };
  const intl4 = sound(tmp3[17]).intl;
  const string = intl4.string;
  const t2 = sound(tmp3[17]).t;
  if (stateFromStores1) {
    let stringResult = string(t2.aBUcp3);
  } else {
    stringResult = string(t2.yZFibY);
  }
  const obj19 = { startExpanded: true, children: null };
  const obj20 = { children: null };
  obj17.text = stringResult;
  obj17.onPress = callback;
  items14[2] = closure_11(sound(id[21]).Button, obj17);
  obj11.children = items14;
  items13[1] = closure_12(c5, obj11);
  obj20.children = items13;
  obj19.children = closure_12(c5, obj20);
  return closure_11(sound(id[16]).ActionSheet, obj19);
}
