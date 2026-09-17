// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize.tsx";
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
  const memo = recordMediaSize.useMemo(
    () => AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(media.url),
    items,
  );
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
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({
        initialSources: mediaViewerSources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "quest_app_store_overlay",
        onGetGamePress,
      });
    }, items2),
    accessibilityLabel: null,
    children: null,
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj.style = items3;
  const intl = media(mediaViewerSources[9]).intl;
  obj.accessibilityLabel = intl.string(media(mediaViewerSources[9]).t.lWDPcO);
  obj.children = closure_9(index(mediaViewerSources[10]), {
    source: { uri: memo },
    style: tmp.media,
    resizeMode: "cover",
    onLoad: callback,
    accessibilityIgnoresInvertColors: true,
  });
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
  const items1 = [AccessibilityStore];
  const stateFromStores = media(mediaViewerSources[11]).useStateFromStores(
    items1,
    () => useReducedMotion.useReducedMotion,
  );
  const callback = onGetGamePress.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let obj = media(mediaViewerSources[11]);
  const ref1 = onGetGamePress.useRef(media(mediaViewerSources[12]).createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const obj3 = {
    ref,
    style: null,
    onPress: onGetGamePress.useCallback(() => {
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({
        initialSources: mediaViewerSources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "quest_app_store_overlay",
        onGetGamePress,
      });
    }, items2),
    accessibilityLabel: null,
    children: null,
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj3.style = items3;
  const intl = media(mediaViewerSources[9]).intl;
  obj3.accessibilityLabel = intl.string(media(mediaViewerSources[9]).t.N0IE3v);
  const items4 = [
    closure_9(media(mediaViewerSources[12]).VideoComponent, {
      style: tmp.media,
      source: { uri: media.url },
      poster: memo,
      posterResizeMode: "cover",
      resizeMode: "cover",
      muted: true,
      pauseWhileAppInactive: true,
      paused: stateFromStores,
      controls: ref1.current,
    }),
  ];
  const obj2 = media(mediaViewerSources[12]);
  const obj4 = {
    style: tmp.media,
    source: { uri: media.url },
    poster: memo,
    posterResizeMode: "cover",
    resizeMode: "cover",
    muted: true,
    pauseWhileAppInactive: true,
    paused: stateFromStores,
    controls: ref1.current,
  };
  items4[1] = closure_9(closure_6, {
    style: tmp.playIconWrapper,
    pointerEvents: "none",
    children: closure_9(media(mediaViewerSources[13]).CirclePlayIcon, {
      size: "md",
      color: "white",
      secondaryColor: "black",
    }),
  });
  obj3.children = items4;
  return closure_10(ref, obj3);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
    return React7(AppStoreOverlayScreenshotItem, obj2);
  } else if ("trailer" === type) {
    const obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    return React7(AppStoreOverlayTrailerItem, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  carousel: { marginHorizontal: -nativeDefault.space.PX_16 },
  carouselContent: null,
  mediaItem: null,
  media: null,
  playIconWrapper: null,
};
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = {
  gap: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
  paddingRight: nativeDefault.space.PX_16,
  alignItems: "center",
};
let obj4 = {
  gap: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
  paddingRight: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj2.mediaItem = {
  borderRadius: nativeDefault.space.PX_16,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj2.playIconWrapper = obj7;
let closure_11 = createStyles.createStyles(obj2);
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
  const tmp = closure_11();
  const tmp3 = media;
  const tmp4 = sizes;
  const appStoreOverlayMediaSizes = media(sizes[7]).useAppStoreOverlayMediaSizes(memo);
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
        const size1 = {
          uri: type.url,
          mediaIndex,
          width,
          height,
          videoURI: type.url,
          thumbnail: null,
          accessoryType: "embed",
          disableDownload: true,
        };
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
    const obj2 = { gesture: tmp7, children: null };
    const obj5 = {
      horizontal: true,
      nestedScrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      style: null,
      contentContainerStyle: null,
      children: null,
    };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
    obj5.children = media.map((media, index) => {
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
    obj2.children = closure_9(closure_5, obj5);
    tmp8 = closure_9(tmp3(tmp4[14]).GestureDetector, obj2);
  }
  return tmp8;
}
