// discord_app/modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx
import StarIcon from "StarIcon";
import get_ActivityIndicator from "Text";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";
import { AnalyticsObjects } from "ME";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "mergeGuildAvatar";

let c10;
let c4;
let c5;
let c9;
const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { emoji: null, emojiFastImage: null, emojiText: null, text: null, buttonContainer: null, star: null };
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
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channelId) {
  channelId = channelId.channelId;
  const sound = channelId.sound;
  let dependencyMap;
  let analyticsLocations;
  let isPlayingSound;
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
  analyticsLocations = sound(5595)().analyticsLocations;
  let obj1 = channelId(589);
  const items1 = [handleSoundCreateOrUpdate];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let isUserPlayingSoundsResult = null != closure_2;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = outer1_7.isUserPlayingSounds(tmp);
    }
    return { isPlayingSound: isUserPlayingSoundsResult, isFavorite: outer1_7.isFavoriteSound(sound.soundId) };
  });
  isPlayingSound = stateFromStoresObject.isPlayingSound;
  isFavorite = stateFromStoresObject.isFavorite;
  const items2 = [isFavorite, sound, analyticsLocations];
  const items3 = [channelId, sound, isPlayingSound];
  const callback = analyticsLocations.useCallback(() => {
    if (isFavorite) {
      let tmpResult = tmp(5847);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(5853);
      let obj = { sound: null, location: null };
      obj[0] = sound;
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj.object = outer1_8.SOUNDBOARD_SOUND;
      obj[1] = obj;
      tmpResult.trackSoundFavorited(obj);
      channelId(5847).addFavoriteSound(sound.soundId);
      const obj4 = channelId(5847);
    }
  }, items2);
  const callback1 = analyticsLocations.useCallback(() => {
    if (!isPlayingSound) {
      channelId(5847).playSoundLocally(channelId, sound, channelId(4707).LocalSoundTrigger.SOUNDBOARD);
      const obj = channelId(5847);
    }
  }, items3);
  obj = { fastImageStyle: items4, textEmojiStyle: items5, src: null, name: null };
  items4 = [, ];
  ({ emoji: arr5[0], emojiFastImage: arr5[1] } = tmp);
  items5 = [, ];
  ({ emoji: arr6[0], emojiText: arr6[1] } = tmp);
  obj[2] = sound(11226)(sound, 64);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  const items6 = [closure_9(sound(5286), obj), , ];
  obj = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items6[1] = closure_9(channelId(4251).Text, obj);
  obj1 = { style: tmp.buttonContainer, children: null };
  if (isFavorite) {
    let StarOutlineIcon = tmp2(8638).StarIcon;
  } else {
    StarOutlineIcon = tmp2(8640).StarOutlineIcon;
  }
  const obj2 = { variant: "primary", icon: closure_9(StarOutlineIcon, obj3), text: null, onPress: null };
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
  const items7 = [closure_9(channelId(4665).Button, obj2), ];
  if (isPlayingSound) {
    let obj4 = { style: null };
    obj4[0] = tmp.star;
    let tmp8Result = tmp8(tmp2(9696).WaveformIcon, obj4);
  } else {
    const obj5 = { style: null, source: null };
    obj5[0] = tmp.star;
    obj5[1] = sound(7796);
    tmp8Result = tmp8(isFavorite, obj5);
  }
  const obj6 = { variant: "secondary", icon: tmp8Result, text: null, onPress: null };
  const intl2 = tmp2(1236).intl;
  const t2 = tmp2(1236).t;
  const obj7 = { startExpanded: true, children: null };
  const obj8 = { children: null };
  obj6[2] = intl2.string(isPlayingSound ? t2.diasud : t2.Kd4uxG);
  obj6[3] = callback1;
  items7[1] = closure_9(channelId(4665).Button, obj6);
  obj1[1] = items7;
  items6[2] = closure_10(isPlayingSound, obj1);
  obj8[0] = items6;
  obj7[1] = closure_10(isPlayingSound, obj8);
  return closure_9(channelId(5631).ActionSheet, obj7);
};