// discord_app/modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/UserStore.tsx";
import closure_7 from "../SoundboardStore.tsx";
import { AnalyticsObjects } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../utils/PlatformUtils.tsx";

const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { emoji: null, emojiFastImage: null, emojiText: null, text: null, buttonContainer: null, star: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 128, height: 128 };
let num;
if (set.isIOS()) {
  num = 60;
}
createCacheKey[2] = { fontSize: num, lineHeight: 74 };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_16, alignSelf: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_16, alignSelf: "center" };
createCacheKey[4] = { gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_24 };
set = { width: 16, height: 16, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[5] = set;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channelId) {
  channelId = channelId.channelId;
  const sound = channelId.sound;
  dependencyMap = undefined;
  let analyticsLocations;
  let isPlayingSound;
  let isFavorite;
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
  analyticsLocations = sound(5900)().analyticsLocations;
  obj1 = channelId(589);
  const items1 = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let isUserPlayingSoundsResult = null != closure_2;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = closure_1_7.isUserPlayingSounds(tmp);
    }
    return { isPlayingSound: isUserPlayingSoundsResult, isFavorite: closure_1_7.isFavoriteSound(sound.soundId) };
  });
  isPlayingSound = stateFromStoresObject.isPlayingSound;
  isFavorite = stateFromStoresObject.isFavorite;
  const items2 = [isFavorite, sound, analyticsLocations];
  const items3 = [channelId, sound, isPlayingSound];
  callback = analyticsLocations.useCallback(() => {
    if (isFavorite) {
      let tmpResult = tmp(6128);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(6134);
      let obj = { sound: null, location: null };
      obj[0] = sound;
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj.object = closure_1_8.SOUNDBOARD_SOUND;
      obj[1] = obj;
      tmpResult.trackSoundFavorited(obj);
      channelId(6128).addFavoriteSound(sound.soundId);
      const obj4 = channelId(6128);
    }
  }, items2);
  const callback1 = analyticsLocations.useCallback(() => {
    if (!isPlayingSound) {
      channelId(6128).playSoundLocally(channelId, sound, channelId(4924).LocalSoundTrigger.SOUNDBOARD);
      const obj = channelId(6128);
    }
  }, items3);
  obj = { fastImageStyle: items4, textEmojiStyle: items5, src: sound(11575)(sound, 64), name: null };
  items4 = [, ];
  ({ emoji: arr5[0], emojiFastImage: arr5[1] } = tmp);
  items5 = [, ];
  ({ emoji: arr6[0], emojiText: arr6[1] } = tmp);
  let str = sound.emojiName;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  const items6 = [closure_9(sound(5532), obj), , ];
  obj = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items6[1] = closure_9(channelId(4440).Text, obj);
  obj1 = { style: tmp.buttonContainer, children: null };
  if (isFavorite) {
    let StarOutlineIcon = tmp2(8959).StarIcon;
  } else {
    StarOutlineIcon = tmp2(8961).StarOutlineIcon;
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
  const items7 = [closure_9(channelId(4879).Button, obj2), ];
  if (isPlayingSound) {
    let obj4 = { style: null };
    obj4[0] = tmp.star;
    let tmp8Result = tmp8(tmp2(10032).WaveformIcon, obj4);
  } else {
    const obj5 = { style: null, source: null };
    obj5[0] = tmp.star;
    obj5[1] = sound(8232);
    tmp8Result = tmp8(isFavorite, obj5);
  }
  const obj6 = { variant: "secondary", icon: tmp8Result, text: null, onPress: null };
  const intl2 = tmp2(1236).intl;
  const t2 = tmp2(1236).t;
  const obj7 = { startExpanded: true, children: null };
  const obj8 = { children: null };
  obj6[2] = intl2.string(isPlayingSound ? t2.diasud : t2.Kd4uxG);
  obj6[3] = callback1;
  items7[1] = closure_9(channelId(4879).Button, obj6);
  obj1[1] = items7;
  items6[2] = closure_10(isPlayingSound, obj1);
  obj8[0] = items6;
  obj7[1] = closure_10(isPlayingSound, obj8);
  return closure_9(channelId(5936).ActionSheet, obj7);
};