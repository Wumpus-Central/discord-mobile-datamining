// === Module 10700: AppStoreOverlayScreenshotItem ===

// Module 10700 (AppStoreOverlayScreenshotItem)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { NOOP } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function AppStoreOverlayScreenshotItem(index) {
  index = index.index;
  const mediaViewerSources = index.mediaViewerSources;
  const onGetGamePress = index.onGetGamePress;
  let ref;
  const tmp = callback3();
  ref = ref.useRef(null);
  const items = [index, mediaViewerSources, onGetGamePress];
  let obj = {
    ref,
    style: tmp.mediaItem,
    onPress: ref.useCallback(() => {
      index(onGetGamePress[7]);
      const obj = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items),
    accessibilityLabel: null,
    children: null
  };
  const intl = index(onGetGamePress[8]).intl;
  obj[3] = intl.string(index(onGetGamePress[8]).t.lWDPcO);
  obj = { uri: index.media.url };
  obj[4] = callback(mediaViewerSources(onGetGamePress[9]), obj);
  return callback(closure_4, obj);
}
function AppStoreOverlayTrailerItem(mediaViewerSources) {
  ({ media, index } = mediaViewerSources);
  mediaViewerSources = mediaViewerSources.mediaViewerSources;
  const onGetGamePress = mediaViewerSources.onGetGamePress;
  let ref;
  const tmp = callback3();
  ref = ref.useRef(null);
  closure_4 = ref.useRef(0);
  let obj = index(onGetGamePress[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = ref.useCallback((current) => {
    closure_4.current = current;
  }, []);
  obj1 = index(onGetGamePress[11]);
  const ref1 = ref.useRef(obj1.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items1 = [index, mediaViewerSources, onGetGamePress];
  obj = {
    ref,
    style: tmp.mediaItem,
    onPress: ref.useCallback(() => {
      index(onGetGamePress[7]);
      const obj = { initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items1),
    accessibilityLabel: null,
    children: null
  };
  const intl = index(onGetGamePress[8]).intl;
  obj[3] = intl.string(index(onGetGamePress[8]).t.N0IE3v);
  obj = { style: tmp.media, source: obj1, poster: media.posterUrl, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  obj1 = { uri: media.url };
  const items2 = [callback(index(onGetGamePress[11]).VideoComponent, obj), callback(closure_6, { style: tmp.playIconWrapper, pointerEvents: "none", children: callback(index(onGetGamePress[12]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) })];
  obj[4] = items2;
  return callback2(closure_4, obj);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  ({ media, index, mediaViewerSources, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    let obj = { media: null, index: null, mediaViewerSources: null, onGetGamePress: null };
    obj[0] = media;
    obj[1] = index;
    obj[2] = mediaViewerSources;
    obj[3] = onGetGamePress;
    return callback(AppStoreOverlayScreenshotItem, obj);
  } else if ("trailer" === type) {
    obj = { media: null, index: null, mediaViewerSources: null, onGetGamePress: null };
    obj[0] = media;
    obj[1] = index;
    obj[2] = mediaViewerSources;
    obj[3] = onGetGamePress;
    return callback(AppStoreOverlayTrailerItem, obj);
  }
}
({ Pressable: c4, ScrollView: c5, StyleSheet, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let c11 = 1080;
let c12 = 1920;
const createCacheKey = { marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { width: 166, height: 289, borderRadius: ThemesDefault.space.PX_16, overflow: "hidden", backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[3] = {};
const obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "center";
obj4.justifyContent = "center";
createCacheKey[4] = obj4;
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default function AppStoreOverlayMediaCarousel(media) {
  media = media.media;
  const onGetGamePress = media.onGetGamePress;
  const items = [media];
  closure_2 = React.useMemo(() => media.map((item, index) => {
    if ("trailer" === item.type) {
      let obj = { uri: null, mediaIndex: null, width: null, height: null, videoURI: null, thumbnail: null, accessoryType: "embed", disableDownload: true };
      obj[0] = item.url;
      obj[1] = index;
      obj[2] = closure_11;
      obj[3] = closure_12;
      obj[4] = item.url;
      let tmp6;
      if (null != item.posterUrl) {
        obj = { width: null, height: null, uri: null };
        obj[0] = tmp3;
        obj[1] = tmp4;
        obj[2] = item.posterUrl;
        tmp6 = obj;
      }
      obj[5] = tmp6;
    } else {
      obj = { uri: null, mediaIndex: null, width: null, height: null, accessoryType: "embed", disableDownload: true };
      obj[0] = item.url;
      obj[1] = index;
      obj[2] = closure_11;
      obj[3] = closure_12;
    }
    return obj;
  }), items);
  let tmp2 = null;
  if (0 !== media.length) {
    let obj = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj[3], carouselContent: obj[4] } = tmp);
    obj[5] = media.map((item, index) => closure_1_9(AppStoreOverlayMediaCarouselItem, { media: item, index, mediaViewerSources: closure_2, onGetGamePress }, "" + item.type + "-" + index));
    tmp2 = callback(closure_5, obj);
  }
  return tmp2;
};