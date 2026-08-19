// === Module 16295: SoundboardSoundPreviewActionSheet ===

// Module 16295 (SoundboardSoundPreviewActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate" /* 4780 */;
import { AnalyticsObjects } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;

const require = fn;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { marginTop: ThemesDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 128, height: 128 };
let num;
if (obj132.isIOS()) {
  num = 60;
}
createCacheKey[2] = { fontSize: num, lineHeight: 74 };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_16, alignSelf: "center" };
createCacheKey[4] = { gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_24 };
obj132 = { width: 16, height: 16, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[5] = obj132;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channelId) {
  channelId = channelId.channelId;
  const sound = channelId.sound;
  const tmp = callback();
  let obj = channelId(589);
  const items = [closure_6];
  dependencyMap = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const analyticsLocations = sound(7139)().analyticsLocations;
  obj1 = channelId(589);
  const items1 = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let isUserPlayingSoundsResult = null != closure_2;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = closure_1_7.isUserPlayingSounds(tmp);
    }
    return { isPlayingSound: isUserPlayingSoundsResult, isFavorite: closure_1_7.isFavoriteSound(sound.soundId) };
  });
  const isPlayingSound = stateFromStoresObject.isPlayingSound;
  const isFavorite = stateFromStoresObject.isFavorite;
  const items2 = [isFavorite, sound, analyticsLocations];
  const items3 = [channelId, sound, isPlayingSound];
  callback = analyticsLocations.useCallback(() => {
    if (isFavorite) {
      let tmpResult = channelId(7299);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = channelId(7304);
      let obj = { sound: null, location: null };
      obj[0] = sound;
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj.object = AnalyticsObjects.SOUNDBOARD_SOUND;
      obj[1] = obj;
      tmpResult.trackSoundFavorited(obj);
      channelId(7299).addFavoriteSound(sound.soundId);
      const obj4 = channelId(7299);
    }
  }, items2);
  const callback1 = analyticsLocations.useCallback(() => {
    if (!isPlayingSound) {
      channelId(7299).playSoundLocally(channelId, sound, channelId(6824).LocalSoundTrigger.SOUNDBOARD);
      const obj = channelId(7299);
    }
  }, items3);
  obj = { fastImageStyle: items4, textEmojiStyle: items5, src: sound(11121)(sound, 64), name: null };
  items4 = [, ];
  ({ emoji: arr5[0], emojiFastImage: arr5[1] } = tmp);
  items5 = [, ];
  ({ emoji: arr6[0], emojiText: arr6[1] } = tmp);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  const items6 = [callback(sound(6930), obj), , ];
  obj = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items6[1] = callback(channelId(4734).Text, obj);
  obj1 = { style: tmp.buttonContainer, children: null };
  if (isFavorite) {
    let StarOutlineIcon = tmp2(9410).StarIcon;
  } else {
    StarOutlineIcon = tmp2(9412).StarOutlineIcon;
  }
  const obj2 = { variant: "primary", icon: callback(StarOutlineIcon, obj3), text: null, onPress: null };
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
  const items7 = [callback(channelId(4745).Button, obj2), ];
  if (isPlayingSound) {
    let obj4 = { style: null };
    obj4[0] = tmp.star;
    let tmp8Result = callback(tmp2(10074).WaveformIcon, obj4);
  } else {
    const obj5 = { style: null, source: null };
    obj5[0] = tmp.star;
    obj5[1] = sound(8130);
    tmp8Result = callback(isFavorite, obj5);
  }
  const obj6 = { variant: "secondary", icon: tmp8Result, text: null, onPress: null };
  const intl2 = tmp2(1236).intl;
  const t2 = tmp2(1236).t;
  const obj7 = { startExpanded: true, children: null };
  const obj8 = { children: null };
  obj6[2] = intl2.string(isPlayingSound ? t2.diasud : t2.Kd4uxG);
  obj6[3] = callback1;
  items7[1] = callback(channelId(4745).Button, obj6);
  obj1[1] = items7;
  items6[2] = callback2(isPlayingSound, obj1);
  obj8[0] = items6;
  obj7[1] = callback2(isPlayingSound, obj8);
  return callback(channelId(7175).ActionSheet, obj7);
};