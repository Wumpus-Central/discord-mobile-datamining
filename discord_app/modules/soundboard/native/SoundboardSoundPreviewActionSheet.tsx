// === Module 15924: SoundboardSoundPreviewActionSheet ===

// Module 15924 (SoundboardSoundPreviewActionSheet)
import _objectWithoutProperties from "_objectWithoutProperties";
import Text from "Text";
import get_ActivityIndicator from "Emoji";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";
import { AnalyticsObjects } from "ME";
import jsxProd from "StarIcon";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "get ActivityIndicator";

let StyleSheet;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let closure_3 = ["style"];
({ View: closure_6, Image: error, StyleSheet } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { emoji: null, emojiFastImage: null, emojiText: null, text: null, buttonContainer: null, star: null, border: null, borderPlaying: null };
createCacheKey = { marginTop: require("Themes").space.PX_16, width: 64, height: 64, alignSelf: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 128, height: 128 };
let num;
if (set.isIOS()) {
  num = 60;
}
createCacheKey[2] = { fontSize: num, lineHeight: 74 };
createCacheKey[3] = { marginTop: require("Themes").space.PX_16, alignSelf: "center" };
let obj1 = { marginTop: require("Themes").space.PX_16, alignSelf: "center" };
createCacheKey[4] = { gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_24 };
set = { width: 16, height: 16, tintColor: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[5] = set;
let obj2 = { gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_24 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[6] = { borderColor: "transparent", borderWidth: 1, borderRadius: require("Themes").radii.round, pointerEvents: "none" };
let obj4 = { borderColor: "transparent", borderWidth: 1, borderRadius: require("Themes").radii.round, pointerEvents: "none" };
createCacheKey[7] = { borderColor: require("Themes").colors.TEXT_FEEDBACK_POSITIVE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channelId) {
  channelId = channelId.channelId;
  const sound = channelId.sound;
  let dependencyMap;
  let analyticsLocations;
  let borderPlaying;
  let isFavorite;
  const tmp = createCacheKey();
  let obj = channelId(589);
  const items = [mergeGuildAvatar];
  dependencyMap = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  analyticsLocations = sound(5519)().analyticsLocations;
  let obj1 = channelId(589);
  const items1 = [handleSoundCreateOrUpdate];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let isUserPlayingSoundsResult = null != closure_2;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = outer1_9.isUserPlayingSounds(tmp);
    }
    return { isPlayingSound: isUserPlayingSoundsResult, isFavorite: outer1_9.isFavoriteSound(sound.soundId) };
  });
  borderPlaying = stateFromStoresObject.isPlayingSound;
  isFavorite = stateFromStoresObject.isFavorite;
  const items2 = [isFavorite, sound, analyticsLocations];
  const items3 = [channelId, sound, borderPlaying];
  const callback = isFavorite.useCallback(() => {
    if (isFavorite) {
      let tmpResult = tmp(8051);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(10790);
      let obj = { sound: null, location: null };
      obj[0] = sound;
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj.object = outer1_10.SOUNDBOARD_SOUND;
      obj[1] = obj;
      tmpResult.trackSoundFavorited(obj);
      channelId(8051).addFavoriteSound(sound.soundId);
      const obj4 = channelId(8051);
    }
  }, items2);
  const callback1 = isFavorite.useCallback(() => {
    if (!borderPlaying) {
      channelId(8051).playSoundLocally(channelId, sound, channelId(4646).LocalSoundTrigger.SOUNDBOARD);
      const obj = channelId(8051);
    }
  }, items3);
  let obj2 = channelId(4609);
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps();
  obj = { fastImageStyle: items4, textEmojiStyle: items5, src: null, name: null };
  items4 = [, ];
  ({ emoji: arr5[0], emojiFastImage: arr5[1] } = tmp);
  items5 = [, ];
  ({ emoji: arr6[0], emojiText: arr6[1] } = tmp);
  const tmp9 = borderPlaying(buttonPressAnimationProps, analyticsLocations);
  obj[2] = sound(11142)(sound, 64);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  const items6 = [closure_11(sound(5210), obj), , ];
  obj = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items6[1] = closure_11(channelId(4189).Text, obj);
  obj1 = { style: tmp.buttonContainer, children: null };
  if (isFavorite) {
    let StarOutlineIcon = tmp2(9430).StarIcon;
  } else {
    StarOutlineIcon = tmp2(9432).StarOutlineIcon;
  }
  obj2 = { variant: "primary", icon: tmp10(StarOutlineIcon, obj3), text: null, onPress: null };
  const intl = tmp2(1236).intl;
  const string = intl.string;
  const t = tmp2(1236).t;
  if (isFavorite) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj2[2] = stringResult;
  obj2[3] = callback;
  const items7 = [closure_11(channelId(4604).Button, obj2), ];
  let obj4 = {};
  let merged = Object.assign(tmp9);
  obj4.variant = "secondary";
  obj3 = { style: tmp.star };
  const tmp13 = sound(5210);
  obj4.icon = closure_11(closure_7, { style: tmp.star, source: sound(7689) });
  const intl2 = tmp2(1236).intl;
  obj4.text = intl2.string(channelId(1236).t.Kd4uxG);
  obj4.onPress = callback1;
  const items8 = [closure_11(channelId(4604).Button, obj4), ];
  const items9 = [tmp.border, , ];
  if (borderPlaying) {
    borderPlaying = tmp.borderPlaying;
  }
  const obj6 = { startExpanded: true, children: null };
  const obj7 = { children: null };
  const obj8 = { children: null };
  items9[1] = borderPlaying;
  items9[2] = buttonPressAnimationProps.style;
  items8[1] = closure_11(sound(4054).View, { style: items9 });
  obj8[0] = items8;
  items7[1] = closure_12(closure_6, obj8);
  obj1[1] = items7;
  items6[2] = closure_12(closure_6, obj1);
  obj7[0] = items6;
  obj6[1] = closure_12(closure_6, obj7);
  return closure_11(channelId(5555).ActionSheet, obj6);
};