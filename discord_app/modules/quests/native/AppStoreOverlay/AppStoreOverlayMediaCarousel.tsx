// === Module 11019: getMeasurableUrl ===

// Module 11019 (getMeasurableUrl)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import { NOOP } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function getMeasurableUrl(type) {
  if ("trailer" === type.type) {
    let posterUrl = type.posterUrl;
    if (posterUrl == null) {
      posterUrl = null;
    }
    let url = posterUrl;
  } else {
    url = type.url;
  }
  return url;
}
function AppStoreOverlayScreenshotItem(index) {
  index = index.index;
  const mediaViewerSources = index.mediaViewerSources;
  const onGetGamePress = index.onGetGamePress;
  let ref;
  ({ media, tileSize } = index);
  const tmp = callback3();
  ref = ref.useRef(null);
  const items = [index, mediaViewerSources, onGetGamePress];
  let obj = {
    ref,
    style: items1,
    onPress: ref.useCallback(() => {
      let obj = index(onGetGamePress[8]);
      obj = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items),
    accessibilityLabel: null,
    children: null
  };
  items1 = [tmp.mediaItem, tileSize];
  const intl = index(onGetGamePress[9]).intl;
  obj[3] = intl.string(index(onGetGamePress[9]).t.lWDPcO);
  obj = { source: obj, style: tmp.media, resizeMode: "cover", accessibilityIgnoresInvertColors: true };
  obj = { uri: media.url };
  obj[4] = callback(mediaViewerSources(onGetGamePress[10]), obj);
  return callback(closure_4, obj);
}
function AppStoreOverlayTrailerItem(mediaViewerSources) {
  ({ media, index } = mediaViewerSources);
  mediaViewerSources = mediaViewerSources.mediaViewerSources;
  const onGetGamePress = mediaViewerSources.onGetGamePress;
  let ref;
  closure_4 = undefined;
  const tmp = callback3();
  ref = ref.useRef(null);
  closure_4 = ref.useRef(0);
  let obj = index(onGetGamePress[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = ref.useCallback((current) => {
    closure_4.current = current;
  }, []);
  obj1 = index(onGetGamePress[12]);
  const ref1 = ref.useRef(obj1.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items1 = [index, mediaViewerSources, onGetGamePress];
  obj = {
    ref,
    style: items2,
    onPress: ref.useCallback(() => {
      let obj = index(onGetGamePress[8]);
      obj = { initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items1),
    accessibilityLabel: null,
    children: null
  };
  items2 = [tmp.mediaItem, mediaViewerSources.tileSize];
  const intl = index(onGetGamePress[9]).intl;
  obj[3] = intl.string(index(onGetGamePress[9]).t.N0IE3v);
  obj = { style: tmp.media, source: obj1, poster: media.posterUrl, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  obj1 = { uri: media.url };
  const items3 = [callback(index(onGetGamePress[12]).VideoComponent, obj), callback(closure_6, { style: tmp.playIconWrapper, pointerEvents: "none", children: callback(index(onGetGamePress[13]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) })];
  obj[4] = items3;
  return callback2(closure_4, obj);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    let obj = { media: null, index: null, mediaViewerSources: null, tileSize: null, onGetGamePress: null };
    obj[0] = media;
    obj[1] = index;
    obj[2] = mediaViewerSources;
    obj[3] = tileSize;
    obj[4] = onGetGamePress;
    return callback(AppStoreOverlayScreenshotItem, obj);
  } else if ("trailer" === type) {
    obj = { media: null, index: null, mediaViewerSources: null, tileSize: null, onGetGamePress: null };
    obj[0] = media;
    obj[1] = index;
    obj[2] = mediaViewerSources;
    obj[3] = tileSize;
    obj[4] = onGetGamePress;
    return callback(AppStoreOverlayTrailerItem, obj);
  }
}
({ Pressable: c4, ScrollView: c5, StyleSheet, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { carousel: null, carouselContent: null, carouselPlaceholder: null, mediaItem: null, media: null, playIconWrapper: null };
createCacheKey = { marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16, alignItems: "center" };
let obj1 = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[2] = { height: require("MEDIA_SHORT_SIDE").MEDIA_LONG_SIDE };
const obj2 = { height: require("MEDIA_SHORT_SIDE").MEDIA_LONG_SIDE };
createCacheKey[3] = { borderRadius: ThemesDefault.space.PX_16, overflow: "hidden", backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[4] = {};
const obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.alignItems = "center";
obj5.justifyContent = "center";
createCacheKey[5] = obj5;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj3 = { borderRadius: ThemesDefault.space.PX_16, overflow: "hidden", backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const obj4 = {};
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default function AppStoreOverlayMediaCarousel(media) {
  media = media.media;
  const onGetGamePress = media.onGetGamePress;
  let sizes;
  let React;
  let map = callback3();
  const items = [media];
  const memo = React.useMemo(() => {
    const mapped = media.map(closure_1_12);
    return mapped.filter((arg0) => null != arg0);
  }, items);
  let obj = media(sizes[7]);
  const remoteMediaSizes = obj.useRemoteMediaSizes(memo);
  sizes = remoteMediaSizes.sizes;
  const items1 = [media, sizes];
  React = React.useMemo(() => {
    media = sizes;
    return media.map((type) => {
      if ("trailer" === type.type) {
        let posterUrl = type.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = type.url;
      }
      let value;
      if (null != url) {
        value = lib.get(url);
      }
      if (value == null) {
        let obj = { width: null, height: null };
        obj[0] = lib(closure_1_2[7]).MEDIA_FALLBACK_WIDTH;
        obj[1] = lib(closure_1_2[7]).MEDIA_FALLBACK_HEIGHT;
        value = obj;
      }
      ({ width, height } = value);
      if ("trailer" === type.type) {
        obj = { uri: null, mediaIndex: null, width: null, height: null, videoURI: null, thumbnail: null, accessoryType: "embed", disableDownload: true };
        obj[0] = type.url;
        obj[1] = arg1;
        obj[2] = width;
        obj[3] = height;
        obj[4] = type.url;
        let tmp7;
        if (null != type.posterUrl) {
          obj = { width: null, height: null, uri: null };
          obj[0] = width;
          obj[1] = height;
          obj[2] = type.posterUrl;
          tmp7 = obj;
        }
        obj[5] = tmp7;
        obj1 = obj;
      } else {
        obj1 = { uri: null, mediaIndex: null, width: null, height: null, accessoryType: "embed", disableDownload: true };
        obj1[0] = type.url;
        obj1[1] = arg1;
        obj1[2] = width;
        obj1[3] = height;
      }
      return obj1;
    });
  }, items1);
  if (0 === media.length) {
    return null;
  } else if (remoteMediaSizes.isMeasured) {
    obj = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj3[3], carouselContent: obj3[4] } = map);
    map = media.map;
    obj[5] = map((media, index) => {
      if ("trailer" === media.type) {
        let posterUrl = media.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = media.url;
      }
      const obj = { media, index, mediaViewerSources: closure_3, tileSize: null, onGetGamePress: null };
      let value;
      if (null != url) {
        value = sizes.get(url);
      }
      obj[3] = media(sizes[7]).getMediaTileSize(value);
      obj[4] = onGetGamePress;
      return closure_1_9(closure_1_15, obj, "" + media.type + "-" + index);
    });
    let tmp3Result = tmp3(closure_5, obj);
  } else {
    obj = { style: null };
    obj[0] = map.carouselPlaceholder;
    tmp3Result = tmp3(closure_6, obj);
  }
};