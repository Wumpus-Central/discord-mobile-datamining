// === Module 11506: AppStoreOverlayMediaCarousel ===

// Module 11506 (AppStoreOverlayMediaCarousel)
import nativeDefault from "native" /* 576 */;
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize" /* 11507 */;
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal" /* 11508 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
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
  const tmp = closure_11();
  const ref = recordMediaSize.useRef(null);
  const items = [media.url];
  const items1 = [media.url, recordMediaSize];
  const memo = recordMediaSize.useMemo(() => AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(media.url), items);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const callback = recordMediaSize.useCallback((nativeEvent) => {
    const mediaSizeFromLoadEvent = AppStoreOverlayMediaSize.getMediaSizeFromLoadEvent(nativeEvent);
    if (null != mediaSizeFromLoadEvent) {
      recordMediaSize(media.url, mediaSizeFromLoadEvent);
    }
  }, items1);
  let obj = {
    ref,
    style: null,
    onPress: recordMediaSize.useCallback(() => {
      const obj = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj.style = items3;
  const intl = media(mediaViewerSources[9]).intl;
  obj.accessibilityLabel = intl.string(media(mediaViewerSources[9]).t.lWDPcO);
  obj = { source: { uri: memo }, style: tmp.media, resizeMode: "cover", onLoad: callback, accessibilityIgnoresInvertColors: true };
  obj.children = closure_9(index(mediaViewerSources[10]), obj);
  return closure_9(onGetGamePress, obj);
}
function AppStoreOverlayTrailerItem(media) {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  const tmp = closure_11();
  onGetGamePress.useRef(null);
  const ref = onGetGamePress.useRef(0);
  const items = [media.posterUrl];
  const memo = onGetGamePress.useMemo(() => {
    let appStoreOverlayCarouselImageUrl;
    if (null != media.posterUrl) {
      appStoreOverlayCarouselImageUrl = AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(tmp.posterUrl);
    }
    return appStoreOverlayCarouselImageUrl;
  }, items);
  let obj = media(mediaViewerSources[11]);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const callback = onGetGamePress.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let obj1 = media(mediaViewerSources[12]);
  const ref1 = onGetGamePress.useRef(obj1.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  obj = {
    ref,
    style: null,
    onPress: onGetGamePress.useCallback(() => {
      const obj = { initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj);
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj.style = items3;
  const intl = media(mediaViewerSources[9]).intl;
  obj.accessibilityLabel = intl.string(media(mediaViewerSources[9]).t.N0IE3v);
  obj = { style: tmp.media, source: { uri: media.url }, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  const items4 = [closure_9(media(mediaViewerSources[12]).VideoComponent, obj), ];
  obj1 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_9(media(mediaViewerSources[13]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
  items4[1] = closure_9(closure_6, obj1);
  obj.children = items4;
  return closure_10(ref, obj);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    let obj = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
    return React7(AppStoreOverlayScreenshotItem, obj);
  } else if ("trailer" === type) {
    obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    return React7(AppStoreOverlayTrailerItem, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { carousel: null, carouselContent: null, mediaItem: null, media: null, playIconWrapper: null };
createStyles = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles.carousel = createStyles;
createStyles.carouselContent = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
let obj1 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.mediaItem = { borderRadius: nativeDefault.space.PX_16, overflow: "hidden", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.media = {};
const obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "center";
obj4.justifyContent = "center";
createStyles.playIconWrapper = obj4;
let closure_11 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default function AppStoreOverlayMediaCarousel(media) {
  media = media.media;
  const onGetGamePress = media.onGetGamePress;
  let sizes;
  let recordMediaSize;
  const items = [media];
  const memo = recordMediaSize.useMemo(() => {
    const mapped = media.map(getMeasurableUrl);
    return mapped.filter((item) => null != item);
  }, items);
  let obj = media(sizes[7]);
  const appStoreOverlayMediaSizes = obj.useAppStoreOverlayMediaSizes(memo);
  sizes = appStoreOverlayMediaSizes.sizes;
  recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
  const items1 = [media, sizes];
  const mediaViewerSources = recordMediaSize.useMemo(() => {
    closure_0 = sizes;
    return media.map((type, mediaIndex) => {
      if ("trailer" === type.type) {
        let posterUrl = type.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = type.url;
      }
      value = undefined;
      if (null != url) {
        value = closure_0.get(url);
      }
      if (value == null) {
        const size = { width: media(sizes[7]).MEDIA_FALLBACK_WIDTH, height: media(sizes[7]).MEDIA_FALLBACK_HEIGHT };
        value = size;
      }
      ({ width, height } = value);
      if ("trailer" === type.type) {
        const size1 = { uri: type.url, mediaIndex, width, height, videoURI: type.url, thumbnail: null, accessoryType: "embed", disableDownload: true };
        let tmp7;
        if (null != type.posterUrl) {
          const size2 = { width, height, uri: type.posterUrl };
          tmp7 = size2;
        }
        size1.thumbnail = tmp7;
        let size3 = size1;
      } else {
        size3 = { uri: type.url, mediaIndex, width, height, accessoryType: "embed", disableDownload: true };
      }
      return size3;
    });
  }, items1);
  media(sizes[14]);
  let tmp8 = null;
  if (0 !== media.length) {
    obj = { gesture: tmp7, children: null };
    obj = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
    obj.children = media.map((media, index) => {
      if ("trailer" === media.type) {
        let posterUrl = media.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = media.url;
      }
      const obj = { media, index, mediaViewerSources, tileSize: null, recordMediaSize: null, onGetGamePress: null };
      value = undefined;
      if (null != url) {
        value = sizes.get(url);
      }
      obj.tileSize = AppStoreOverlayMediaSize.getMediaTileSize(value);
      obj.recordMediaSize = recordMediaSize;
      obj.onGetGamePress = onGetGamePress;
      return React7(AppStoreOverlayMediaCarouselItem, obj, "" + media.type + "-" + index);
    });
    obj.children = closure_9(closure_5, obj);
    tmp8 = closure_9(media(sizes[14]).GestureDetector, obj);
  }
  return tmp8;
};