// === Module 11105: getMeasurableUrl ===

// Module 11105 (getMeasurableUrl)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { NOOP } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
function AppStoreOverlayScreenshotItem(media) {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const recordMediaSize = media.recordMediaSize;
  const onGetGamePress = media.onGetGamePress;
  let ref;
  const tmp = callback3();
  ref = recordMediaSize.useRef(null);
  const items = [media.url];
  const items1 = [media.url, recordMediaSize];
  const memo = recordMediaSize.useMemo(() => media(mediaViewerSources[7]).getAppStoreOverlayCarouselImageUrl(media.url), items);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const callback = recordMediaSize.useCallback((nativeEvent) => {
    const mediaSizeFromLoadEvent = media(mediaViewerSources[7]).getMediaSizeFromLoadEvent(nativeEvent);
    if (null != mediaSizeFromLoadEvent) {
      recordMediaSize(media.url, mediaSizeFromLoadEvent);
    }
  }, items1);
  let obj = {
    ref,
    style: items3,
    onPress: recordMediaSize.useCallback(() => {
      let obj = media(mediaViewerSources[8]);
      obj = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  items3 = [tmp.mediaItem, media.tileSize];
  const intl = media(mediaViewerSources[9]).intl;
  obj[3] = intl.string(media(mediaViewerSources[9]).t.lWDPcO);
  obj = { source: { uri: memo }, style: tmp.media, resizeMode: "cover", onLoad: callback, accessibilityIgnoresInvertColors: true };
  obj[4] = callback(index(mediaViewerSources[10]), obj);
  return callback(onGetGamePress, obj);
}
function AppStoreOverlayTrailerItem(media) {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  let ref;
  closure_5 = undefined;
  const tmp = callback3();
  ref = onGetGamePress.useRef(null);
  closure_5 = onGetGamePress.useRef(0);
  const items = [media.posterUrl];
  const memo = onGetGamePress.useMemo(() => {
    let appStoreOverlayCarouselImageUrl;
    if (null != media.posterUrl) {
      appStoreOverlayCarouselImageUrl = media(mediaViewerSources[7]).getAppStoreOverlayCarouselImageUrl(tmp.posterUrl);
      const obj = media(mediaViewerSources[7]);
    }
    return appStoreOverlayCarouselImageUrl;
  }, items);
  let obj = media(mediaViewerSources[11]);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const callback = onGetGamePress.useCallback((current) => {
    closure_5.current = current;
  }, []);
  obj1 = media(mediaViewerSources[12]);
  const ref1 = onGetGamePress.useRef(obj1.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  obj = {
    ref,
    style: items3,
    onPress: onGetGamePress.useCallback(() => {
      let obj = media(mediaViewerSources[8]);
      obj = { initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  items3 = [tmp.mediaItem, media.tileSize];
  const intl = media(mediaViewerSources[9]).intl;
  obj[3] = intl.string(media(mediaViewerSources[9]).t.N0IE3v);
  obj = { style: tmp.media, source: obj1, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  obj1 = { uri: media.url };
  const items4 = [callback(media(mediaViewerSources[12]).VideoComponent, obj), callback(closure_6, { style: tmp.playIconWrapper, pointerEvents: "none", children: callback(media(mediaViewerSources[13]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) })];
  obj[4] = items4;
  return callback2(ref, obj);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    let obj = { media: null, index: null, mediaViewerSources: null, tileSize: null, recordMediaSize: null, onGetGamePress: null };
    obj[0] = media;
    obj[1] = index;
    obj[2] = mediaViewerSources;
    obj[3] = tileSize;
    obj[4] = tmp;
    obj[5] = onGetGamePress;
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
createCacheKey = { carousel: null, carouselContent: null, mediaItem: null, media: null, playIconWrapper: null };
createCacheKey = { marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16, alignItems: "center" };
let obj1 = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[2] = { borderRadius: ThemesDefault.space.PX_16, overflow: "hidden", backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[3] = {};
const obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "center";
obj4.justifyContent = "center";
createCacheKey[4] = obj4;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderRadius: ThemesDefault.space.PX_16, overflow: "hidden", backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const obj3 = {};
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default function AppStoreOverlayMediaCarousel(media) {
  media = media.media;
  const onGetGamePress = media.onGetGamePress;
  let sizes;
  let recordMediaSize;
  closure_4 = undefined;
  const items = [media];
  const memo = recordMediaSize.useMemo(() => {
    const mapped = media.map(closure_1_12);
    return mapped.filter((arg0) => null != arg0);
  }, items);
  let obj = media(sizes[7]);
  const appStoreOverlayMediaSizes = obj.useAppStoreOverlayMediaSizes(memo);
  sizes = appStoreOverlayMediaSizes.sizes;
  recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
  const items1 = [media, sizes];
  closure_4 = recordMediaSize.useMemo(() => {
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
  media(sizes[14]);
  let tmp8 = null;
  if (0 !== media.length) {
    obj = { gesture: null, children: null };
    obj[0] = tmp7;
    obj = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj3[3], carouselContent: obj3[4] } = tmp);
    obj[5] = media.map((media, index) => {
      if ("trailer" === media.type) {
        let posterUrl = media.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = media.url;
      }
      const obj = { media, index, mediaViewerSources: closure_4, tileSize: null, recordMediaSize: null, onGetGamePress: null };
      let value;
      if (null != url) {
        value = sizes.get(url);
      }
      obj[3] = media(sizes[7]).getMediaTileSize(value);
      obj[4] = recordMediaSize;
      obj[5] = onGetGamePress;
      return closure_1_9(closure_1_15, obj, "" + media.type + "-" + index);
    });
    obj[1] = callback(closure_5, obj);
    tmp8 = callback(media(sizes[14]).GestureDetector, obj);
  }
  return tmp8;
};