// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize.tsx";
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
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
  const tmp = closure_14();
  const ref = onGetGamePress.useRef(null);
  const items = [media.url];
  const items1 = [media.url, recordMediaSize];
  const memo = onGetGamePress.useMemo(
    () => AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(media.url),
    items,
  );
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const callback = onGetGamePress.useCallback((nativeEvent) => {
    const mediaSizeFromLoadEvent = AppStoreOverlayMediaSize.getMediaSizeFromLoadEvent(nativeEvent);
    if (null != mediaSizeFromLoadEvent) {
      recordMediaSize(media.url, mediaSizeFromLoadEvent);
    }
  }, items1);
  let obj = {
    ref,
    style: null,
    onPress: onGetGamePress.useCallback(() => {
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
  const intl = media(mediaViewerSources[10]).intl;
  obj.accessibilityLabel = intl.string(media(mediaViewerSources[10]).t.lWDPcO);
  obj.children = closure_10(index(mediaViewerSources[11]), {
    source: { uri: memo },
    style: tmp.media,
    resizeMode: "cover",
    onLoad: callback,
    accessibilityIgnoresInvertColors: true,
  });
  return closure_10(ref, obj);
}
function AppStoreOverlayTrailerItem(media) {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  let ref;
  const tmp = closure_14();
  ref = ref.useRef(null);
  ref = ref.useRef(0);
  const items = [media.posterUrl];
  const memo = ref.useMemo(() => {
    let appStoreOverlayCarouselImageUrl;
    if (null != media.posterUrl) {
      appStoreOverlayCarouselImageUrl = AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(tmp.posterUrl);
    }
    return appStoreOverlayCarouselImageUrl;
  }, items);
  const items1 = [AccessibilityStore];
  const stateFromStores = media(mediaViewerSources[12]).useStateFromStores(
    items1,
    () => useReducedMotion.useReducedMotion,
  );
  const callback = ref.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let obj = media(mediaViewerSources[12]);
  const ref1 = ref.useRef(media(mediaViewerSources[13]).createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const obj3 = {
    ref,
    style: null,
    onPress: ref.useCallback(() => {
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
  const intl = media(mediaViewerSources[10]).intl;
  obj3.accessibilityLabel = intl.string(media(mediaViewerSources[10]).t.N0IE3v);
  const items4 = [
    closure_10(media(mediaViewerSources[13]).VideoComponent, {
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
  const obj2 = media(mediaViewerSources[13]);
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
  items4[1] = closure_10(closure_7, {
    style: tmp.playIconWrapper,
    pointerEvents: "none",
    children: closure_10(media(mediaViewerSources[14]).CirclePlayIcon, {
      size: "md",
      color: "white",
      secondaryColor: "black",
    }),
  });
  obj3.children = items4;
  return closure_11(ref, obj3);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
    return closure_1_10(AppStoreOverlayScreenshotItem, obj2);
  } else if ("trailer" === type) {
    const obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    return closure_1_10(AppStoreOverlayTrailerItem, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet, View: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4836);
let obj2 = {
  carousel: { marginHorizontal: -nativeDefault.space.PX_16 },
  carouselContent: null,
  mediaItem: null,
  media: null,
  playIconWrapper: null,
};
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = {
  gap: PX_16,
  paddingLeft: nativeDefault.space.PX_16,
  paddingRight: nativeDefault.space.PX_16,
  alignItems: "center",
};
let obj4 = {
  gap: PX_16,
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
let closure_14 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default function AppStoreOverlayMediaCarousel(media) {
  media = media.media;
  ({ onGetGamePress: importDefault, onCarouselScroll } = media);
  let recordMediaSize;
  const items = [media];
  const memo = recordMediaSize.useMemo(() => {
    const mapped = media.map(getMeasurableUrl);
    return mapped.filter((item) => null != item);
  }, items);
  const tmp = closure_14();
  const tmp3 = media;
  const tmp4 = onCarouselScroll;
  const appStoreOverlayMediaSizes = media(onCarouselScroll[8]).useAppStoreOverlayMediaSizes(memo);
  const sizes = appStoreOverlayMediaSizes.sizes;
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
        const size = {
          width: media(onCarouselScroll[8]).MEDIA_FALLBACK_WIDTH,
          height: media(onCarouselScroll[8]).MEDIA_FALLBACK_HEIGHT,
        };
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
  const items2 = [media, sizes];
  const memo1 = recordMediaSize.useMemo(
    () =>
      media.map((type) => {
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
          value = sizes.get(url);
        }
        return media(onCarouselScroll[8]).getMediaTileSize(value).width;
      }),
    items2,
  );
  recordMediaSize.useRef(0);
  let tmp7 = sizes(recordMediaSize.useState(0), 2);
  const first = tmp7[0];
  closure_9 = tmp7[1];
  const length = media.length;
  const items3 = [length];
  const effect = recordMediaSize.useEffect(() => {
    closure_7.current = 0;
  }, items3);
  const items4 = [length, first, memo1, onCarouselScroll];
  const callback = recordMediaSize.useCallback((nativeEvent) => {
    closure_9(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = recordMediaSize.useCallback((nativeEvent) => {
    if (null != onCarouselScroll) {
      if (length > 1) {
        if (first > 0) {
          const x = nativeEvent.nativeEvent.contentOffset.x;
          let num5 = 0;
          if (0 !== memo1.length) {
            num5 = 0;
            if (first > 0) {
              let sum1 = PX_16;
              let num = 0;
              let num2 = 0;
              let num3 = 0;
              let num4 = 0;
              if (0 < memo1.length) {
                do {
                  let sum = sum1 + memo1[num];
                  let _Math = Math;
                  let _Math2 = Math;
                  let _Math3 = Math;
                  let bound = Math.min(x + first, sum);
                  let bound1 = Math.max(0, bound - Math.max(x, sum1));
                  let tmp8 = num2;
                  let tmp9 = num3;
                  if (bound1 > num2) {
                    tmp8 = bound1;
                    tmp9 = num;
                  }
                  sum1 = sum + PX_16;
                  num = num + 1;
                  num2 = tmp8;
                  num3 = tmp9;
                  num4 = tmp9;
                } while (num < memo1.length);
              }
              num5 = num4;
            }
          }
          const current = ref.current;
          if (num5 !== current) {
            let obj = { carouselType: null, scrollingDirection: null, carouselPosition: null, carouselSize: null };
            let HorizontalScrollingDirection = dependencyMap;
            obj.carouselType = AnalyticsActions.AppStoreOverlayCarouselTypes.MEDIA;
            if (num5 > current) {
              HorizontalScrollingDirection = AnalyticsTypes.HorizontalScrollingDirection;
              let LEFT = HorizontalScrollingDirection.RIGHT;
            } else {
              LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
            }
            obj.scrollingDirection = LEFT;
            obj.carouselPosition = num5;
            obj.carouselSize = tmp13;
            obj = tmp(obj);
            tmp11.current = num5;
          }
        }
      }
    }
  }, items4);
  const items5 = [callback1];
  const callback2 = recordMediaSize.useCallback((nativeEvent) => {
    const velocity = nativeEvent.nativeEvent.velocity;
    let num;
    if (velocity != null) {
      num = velocity.x;
    }
    if (num == null) {
      num = 0;
    }
    if (0 === num) {
      callback1(nativeEvent);
    }
  }, items5);
  media(onCarouselScroll[17]);
  let tmp15 = null;
  if (0 !== media.length) {
    const obj2 = { gesture: tmp14, children: null };
    const obj5 = {
      horizontal: true,
      nestedScrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      style: null,
      contentContainerStyle: null,
      onLayout: null,
      onScrollEndDrag: null,
      onMomentumScrollEnd: null,
      children: null,
    };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
    obj5.onLayout = callback;
    obj5.onScrollEndDrag = callback2;
    obj5.onMomentumScrollEnd = callback1;
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
      return closure_2_10(AppStoreOverlayMediaCarouselItem, obj, "" + media.type + "-" + index);
    });
    obj2.children = length(memo1, obj5);
    tmp15 = length(tmp3(tmp4[17]).GestureDetector, obj2);
  }
  return tmp15;
}
