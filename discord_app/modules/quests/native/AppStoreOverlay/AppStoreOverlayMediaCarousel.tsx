// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize.tsx";
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let ref;

let StyleSheet;
let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function getMeasurableUrl(type) {
  let url;
  if ("trailer" === type.type) {
    let posterUrl = type.posterUrl;
    if (posterUrl == null) {
      posterUrl = null;
    }
    url = posterUrl;
  } else {
    url = type.url;
  }
  return url;
}
function AppStoreOverlayTrailerItem(media) {
  let intl;
  let items3;
  let items4;
  let useReducedMotion;
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  ref = undefined;
  const tileSize = media.tileSize;
  const tmp = closure_14();
  ref = ref.useRef(null);
  ref = ref.useRef(0);
  const items = [media.posterUrl];
  const memo = ref.useMemo(() => {
    let appStoreOverlayCarouselImageUrl;
    if (null != media.posterUrl) {
      const obj = AppStoreOverlayMediaSize;
      appStoreOverlayCarouselImageUrl = obj.getAppStoreOverlayCarouselImageUrl(tmp.posterUrl);
    }
    return appStoreOverlayCarouselImageUrl;
  }, items);
  let obj = media(mediaViewerSources[14]);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const callback = ref.useCallback((current) => {
    ref.current = current;
  }, []);
  const useRef = ref.useRef;
  let obj2 = media(mediaViewerSources[15]);
  const ref1 = useRef(obj2.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const obj3 = {
    ref,
    style: items3,
    onPress: ref.useCallback(() => {
      const obj = openAppStoreOverlayMediaModal;
      const obj2 = {
        initialSources: mediaViewerSources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "quest_app_store_overlay",
        onGetGamePress,
      };
      const result = obj.openAppStoreOverlayMediaModal(obj2);
    }, items2),
    accessibilityLabel: intl.string(media(mediaViewerSources[12]).t.N0IE3v),
    children: items4,
  };
  items3 = [tmp.mediaItem, tileSize];
  intl = media(mediaViewerSources[12]).intl;
  items4 = [,];
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
  items4[0] = closure_10(media(mediaViewerSources[15]).VideoComponent, obj4);
  const obj5 = {
    style: tmp.playIconWrapper,
    pointerEvents: "none",
    children: closure_10(media(mediaViewerSources[16]).CirclePlayIcon, {
      size: "md",
      color: "white",
      secondaryColor: "black",
    }),
  };
  items4[1] = closure_10(closure_7, obj5);
  return closure_11(ref, obj3);
}
let react = react_mod;
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet, View: metroImportDefault } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_162 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { carousel: obj2, carouselContent: obj3, mediaItem: obj4, media: obj5, playIconWrapper: obj6 };
obj2 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  gap: PX_16,
  paddingLeft: nativeDefault.space.PX_16,
  paddingRight: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj4 = {
  borderRadius: nativeDefault.space.PX_16,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
};
obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { alignItems: "center", justifyContent: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (media) => {
      let mediaViewerSources;
      let recordMediaSize;
      let tileSize;
      let tmp6;
      let obj = media(mediaViewerSources[10]);
      const cResult = obj.c(23);
      media = media.media;
      const index = media.index;
      mediaViewerSources = media.mediaViewerSources;
      ({ tileSize, recordMediaSize } = media);
      const onGetGamePress = media.onGetGamePress;
      const tmp4 = closure_14();
      ref = onGetGamePress.useRef(null);
      if (cResult[0] !== media.url) {
        const tmpResult = media(mediaViewerSources[8]);
        const appStoreOverlayCarouselImageUrl = tmpResult.getAppStoreOverlayCarouselImageUrl(media.url);
        cResult[0] = media.url;
        cResult[1] = appStoreOverlayCarouselImageUrl;
        tmp6 = appStoreOverlayCarouselImageUrl;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === media.url) {
        let tmp8;
        if (cResult[3] === recordMediaSize) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === index) {
          if (cResult[6] === mediaViewerSources) {
            let tmp9;
            if (cResult[7] === onGetGamePress) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === tmp4.mediaItem) {
              let tmp10;
              let tmp13;
              let tmp15;
              if (cResult[10] === tileSize) {
                tmp10 = cResult[11];
              }
              class C {
                constructor() {
                  const obj = openAppStoreOverlayMediaModal;
                  const obj2 = {
                    initialSources: mediaViewerSources,
                    initialIndex: index,
                    originViewOrOriginLayout: ref.current,
                    analyticsSource: "quest_app_store_overlay",
                    onGetGamePress,
                  };
                  const result = obj.openAppStoreOverlayMediaModal(obj2);
                }
              }
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(tmp2[12]).intl.string;
                class C {
                  constructor() {
                    const obj = openAppStoreOverlayMediaModal;
                    const obj2 = {
                      initialSources: mediaViewerSources,
                      initialIndex: index,
                      originViewOrOriginLayout: ref.current,
                      analyticsSource: "quest_app_store_overlay",
                      onGetGamePress,
                    };
                    const result = obj.openAppStoreOverlayMediaModal(obj2);
                  }
                }
                cResult[12] = tmp14;
                tmp13 = tmp14;
              } else {
                tmp13 = cResult[12];
              }
              if (cResult[13] !== tmp6) {
                let obj2 = { uri: tmp6 };
                class C {
                  constructor() {
                    const obj = openAppStoreOverlayMediaModal;
                    const obj2 = {
                      initialSources: mediaViewerSources,
                      initialIndex: index,
                      originViewOrOriginLayout: ref.current,
                      analyticsSource: "quest_app_store_overlay",
                      onGetGamePress,
                    };
                    const result = obj.openAppStoreOverlayMediaModal(obj2);
                  }
                }
                cResult[13] = tmp6;
                cResult[14] = obj2;
                tmp15 = obj2;
              } else {
                tmp15 = cResult[14];
              }
              if (cResult[15] === tmp8) {
                if (cResult[16] === tmp4.media) {
                  let tmp16;
                  if (cResult[17] === tmp15) {
                    tmp16 = cResult[18];
                  }
                  if (cResult[19] === tmp9) {
                    if (cResult[20] === tmp10) {
                      let tmp20;
                      if (cResult[21] === tmp16) {
                        tmp20 = cResult[22];
                      }
                      return tmp20;
                    }
                  }
                  class C {
                    constructor() {
                      const obj = openAppStoreOverlayMediaModal;
                      const obj2 = {
                        initialSources: mediaViewerSources,
                        initialIndex: index,
                        originViewOrOriginLayout: ref.current,
                        analyticsSource: "quest_app_store_overlay",
                        onGetGamePress,
                      };
                      const result = obj.openAppStoreOverlayMediaModal(obj2);
                    }
                  }
                  const obj3 = { ref, style: tmp10, onPress: tmp9, accessibilityLabel: tmp13, children: tmp16 };
                  const tmp22 = closure_10(ref, obj3);
                  cResult[19] = tmp9;
                  cResult[20] = tmp10;
                  cResult[21] = tmp16;
                  cResult[22] = tmp22;
                  tmp20 = tmp22;
                }
              }
              const obj4 = {
                source: tmp15,
                style: tmp4.media,
                resizeMode: "cover",
                onLoad: tmp8,
                accessibilityIgnoresInvertColors: true,
              };
              const tmp19 = closure_10(index(mediaViewerSources[13]), obj4);
              cResult[15] = tmp8;
              cResult[16] = tmp4.media;
              cResult[17] = tmp15;
              cResult[18] = tmp19;
              tmp16 = tmp19;
            }
            class C {
              constructor() {
                const obj = openAppStoreOverlayMediaModal;
                const obj2 = {
                  initialSources: mediaViewerSources,
                  initialIndex: index,
                  originViewOrOriginLayout: ref.current,
                  analyticsSource: "quest_app_store_overlay",
                  onGetGamePress,
                };
                const result = obj.openAppStoreOverlayMediaModal(obj2);
              }
            }
            tmp11[0] = tmp4.mediaItem;
            tmp11[1] = tileSize;
            cResult[9] = tmp4.mediaItem;
            cResult[10] = tileSize;
            cResult[11] = tmp11;
            tmp10 = tmp11;
          }
        }
        class C {
          constructor() {
            const obj = openAppStoreOverlayMediaModal;
            const obj2 = {
              initialSources: mediaViewerSources,
              initialIndex: index,
              originViewOrOriginLayout: ref.current,
              analyticsSource: "quest_app_store_overlay",
              onGetGamePress,
            };
            const result = obj.openAppStoreOverlayMediaModal(obj2);
          }
        }
        cResult[5] = index;
        cResult[6] = mediaViewerSources;
        cResult[7] = onGetGamePress;
        cResult[8] = C;
        tmp9 = C;
      }
      const fn = function z(nativeEvent) {
        const obj = AppStoreOverlayMediaSize;
        const mediaSizeFromLoadEvent = obj.getMediaSizeFromLoadEvent(nativeEvent);
        if (null != mediaSizeFromLoadEvent) {
          recordMediaSize(media.url, mediaSizeFromLoadEvent);
        }
      };
      cResult[2] = media.url;
      cResult[3] = recordMediaSize;
      cResult[4] = fn;
      tmp8 = fn;
    }
  : (media) => {
      let intl;
      let items3;
      let obj2;
      media = media.media;
      const index = media.index;
      const mediaViewerSources = media.mediaViewerSources;
      const recordMediaSize = media.recordMediaSize;
      const onGetGamePress = media.onGetGamePress;
      const tileSize = media.tileSize;
      const tmp = closure_14();
      ref = onGetGamePress.useRef(null);
      const items = [media.url];
      const items1 = [media.url, recordMediaSize];
      const memo = onGetGamePress.useMemo(() => {
        const obj = AppStoreOverlayMediaSize;
        return obj.getAppStoreOverlayCarouselImageUrl(media.url);
      }, items);
      const items2 = [index, mediaViewerSources, onGetGamePress];
      const callback = onGetGamePress.useCallback((nativeEvent) => {
        const obj = AppStoreOverlayMediaSize;
        const mediaSizeFromLoadEvent = obj.getMediaSizeFromLoadEvent(nativeEvent);
        if (null != mediaSizeFromLoadEvent) {
          recordMediaSize(media.url, mediaSizeFromLoadEvent);
        }
      }, items1);
      let obj = {
        ref,
        style: items3,
        onPress: onGetGamePress.useCallback(() => {
          const obj = openAppStoreOverlayMediaModal;
          const obj2 = {
            initialSources: mediaViewerSources,
            initialIndex: index,
            originViewOrOriginLayout: ref.current,
            analyticsSource: "quest_app_store_overlay",
            onGetGamePress,
          };
          const result = obj.openAppStoreOverlayMediaModal(obj2);
        }, items2),
        accessibilityLabel: intl.string(media(mediaViewerSources[12]).t.lWDPcO),
        children: closure_10(index(mediaViewerSources[13]), obj2),
      };
      items3 = [tmp.mediaItem, tileSize];
      intl = media(mediaViewerSources[12]).intl;
      obj2 = {
        source: { uri: memo },
        style: tmp.media,
        resizeMode: "cover",
        onLoad: callback,
        accessibilityIgnoresInvertColors: true,
      };
      return closure_10(ref, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let index;
      let media;
      let mediaViewerSources;
      let onGetGamePress;
      let recordMediaSize;
      let tileSize;
      const obj = react2;
      const cResult = obj.c(13);
      ({ media, index, mediaViewerSources, tileSize, recordMediaSize, onGetGamePress } = arg0);
      const type = media.type;
      if ("screenshot" === type) {
        if (cResult[0] === index) {
          if (cResult[1] === media) {
            if (cResult[2] === mediaViewerSources) {
              if (cResult[3] === onGetGamePress) {
                if (cResult[4] === recordMediaSize) {
                  let tmp6;
                  if (cResult[5] === tileSize) {
                    tmp6 = cResult[6];
                  }
                  return tmp6;
                }
              }
            }
          }
        }
        const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize, onGetGamePress };
        const tmp9 = authStore(closure_16, obj2);
        cResult[0] = index;
        cResult[1] = media;
        cResult[2] = mediaViewerSources;
        cResult[3] = onGetGamePress;
        cResult[4] = recordMediaSize;
        cResult[5] = tileSize;
        cResult[6] = tmp9;
        tmp6 = tmp9;
      } else if ("trailer" === type) {
        if (cResult[7] === index) {
          if (cResult[8] === media) {
            if (cResult[9] === mediaViewerSources) {
              if (cResult[10] === onGetGamePress) {
                let tmp2;
                if (cResult[11] === tileSize) {
                  tmp2 = cResult[12];
                }
                return tmp2;
              }
            }
          }
        }
        const obj3 = { media, index, mediaViewerSources, tileSize, onGetGamePress };
        const tmp5 = authStore(AppStoreOverlayTrailerItem, obj3);
        cResult[7] = index;
        cResult[8] = media;
        cResult[9] = mediaViewerSources;
        cResult[10] = onGetGamePress;
        cResult[11] = tileSize;
        cResult[12] = tmp5;
        tmp2 = tmp5;
      }
    }
  : (arg0) => {
      let index;
      let media;
      let mediaViewerSources;
      let onGetGamePress;
      let tileSize;
      ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
      const type = media.type;
      if ("screenshot" === type) {
        const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
        return authStore(closure_16, obj2);
      } else if ("trailer" === type) {
        const obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
        return authStore(AppStoreOverlayTrailerItem, obj);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onCarouselScroll) => {
      let media;
      let mediaViewerSources;
      let onGetGamePress;
      let sizes;
      let tmp5;
      let obj = onGetGamePress(sizes[10]);
      const cResult = obj.c(43);
      ({ media, onGetGamePress } = onCarouselScroll);
      onCarouselScroll = onCarouselScroll.onCarouselScroll;
      closure_14();
      const tmp2 = sizes;
      if (cResult[0] !== media) {
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(arg0) {
            return null != arg0;
          };
          let num = 2;
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const mapped = media.map(getMeasurableUrl);
        const found = mapped.filter(tmp7);
        let num2 = 0;
        cResult[0] = media;
        let num3 = 1;
        cResult[1] = found;
        tmp5 = found;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = onGetGamePress(tmp2[8]);
      const appStoreOverlayMediaSizes = tmpResult.useAppStoreOverlayMediaSizes(tmp5);
      sizes = appStoreOverlayMediaSizes.sizes;
      const recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
      if (cResult[3] === media) {
        let tmp11;
        if (cResult[4] === sizes) {
          tmp11 = cResult[5];
        }
        react = tmp11;
        if (cResult[6] === media) {
          let tmp13;
          if (cResult[7] === sizes) {
            tmp13 = cResult[8];
          }
          ref = react.useRef(0);
          const tmp18 = recordMediaSize(react.useState(0), 2);
          const first = tmp18[0];
          let closure_8 = tmp18[1];
          const length = media.length;
          const _Symbol2 = Symbol;
          const obj3 = react;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
            cResult[11] = O;
          } else {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
          }
          if (cResult[12] !== length) {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
            tmp23[0] = length;
            cResult[12] = length;
            cResult[13] = tmp23;
          } else {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
          }
          const effect = obj3.useEffect(O, tmp23);
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
            cResult[14] = tmp26;
          } else {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
          }
          if (cResult[15] === length) {
            class O {
              constructor() {
                ref.current = 0;
              }
            }
          }
          class H {
            constructor(nativeEvent) {
              let LEFT;
              if (null != onCarouselScroll) {
                if (length > 1) {
                  if (first > 0) {
                    const x = nativeEvent.nativeEvent.contentOffset.x;
                    let num5 = 0;
                    if (0 !== length.length) {
                      num5 = 0;
                      if (first > 0) {
                        let sum1 = PX_162;
                        let num = 0;
                        let num2 = 0;
                        let num3 = 0;
                        let num4 = 0;
                        if (0 < length.length) {
                          do {
                            let sum = sum1 + length[num];
                            let _Math = Math;
                            let _Math2 = Math;
                            let _Math3 = Math;
                            let bound = Math.min(x + first, sum);
                            let maxResult = max(0, bound - Math.max(x, sum1));
                            let tmp8 = num2;
                            let tmp9 = num3;
                            if (maxResult > num2) {
                              tmp8 = maxResult;
                              tmp9 = num;
                            }
                            sum1 = sum + PX_16;
                            num = num + 1;
                            num2 = tmp8;
                            num3 = tmp9;
                            num4 = tmp9;
                          } while (num < length.length);
                        }
                        num5 = num4;
                      }
                    }
                    const current = ref.current;
                    if (num5 !== current) {
                      const obj = {
                        carouselType: AnalyticsActions.AppStoreOverlayCarouselTypes.MEDIA,
                        scrollingDirection: LEFT,
                        carouselPosition: num5,
                        carouselSize: tmp15,
                      };
                      if (num5 > current) {
                        LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
                      } else {
                        LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
                      }
                      tmp(obj);
                      tmp11.current = num5;
                    }
                  }
                }
              }
            }
          }
          cResult[15] = length;
          cResult[16] = first;
          cResult[17] = tmp13;
          cResult[18] = onCarouselScroll;
          cResult[19] = H;
        }
        if (cResult[9] !== sizes) {
          class O {
            constructor() {
              ref.current = 0;
            }
          }
          let num4 = 9;
          cResult[9] = sizes;
          let num5 = 10;
          cResult[10] = tmp15;
        } else {
          class O {
            constructor() {
              ref.current = 0;
            }
          }
        }
        const mapped1 = media.map(tmp15);
        cResult[6] = media;
        cResult[7] = sizes;
        cResult[8] = mapped1;
        tmp13 = mapped1;
      }
      const mapped2 = media.map((type, mediaIndex) => {
        let height;
        let size3;
        let tmp7;
        let url;
        let width;
        if ("trailer" === type.type) {
          let posterUrl = type.posterUrl;
          if (posterUrl == null) {
            posterUrl = null;
          }
          url = posterUrl;
        } else {
          url = type.url;
        }
        let value;
        if (null != url) {
          value = closure_0.get(url);
        }
        if (value == null) {
          size = {
            width: sizes(onCarouselScroll[8]).MEDIA_FALLBACK_WIDTH,
            height: sizes(onCarouselScroll[8]).MEDIA_FALLBACK_HEIGHT,
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
            thumbnail: tmp7,
            accessoryType: "embed",
            disableDownload: true,
          };
          tmp7 = undefined;
          if (null != type.posterUrl) {
            const size2 = { width, height, uri: type.posterUrl };
            tmp7 = size2;
          }
          size3 = size1;
        } else {
          size3 = { uri: type.url, mediaIndex, width, height, accessoryType: "embed", disableDownload: true };
        }
        return size3;
      });
      cResult[3] = media;
      cResult[4] = sizes;
      cResult[5] = mapped2;
      tmp11 = mapped2;
    }
  : (media) => {
      let obj5;
      let onCarouselScroll;
      let onGetGamePress;
      media = media.media;
      ({ onGetGamePress: importDefault, onCarouselScroll } = media);
      let recordMediaSize;
      const tmp = closure_14();
      const items = [media];
      const memo = recordMediaSize.useMemo(() => {
        const mapped = media.map(getMeasurableUrl);
        return mapped.filter((item) => null != item);
      }, items);
      const tmp3 = media;
      let obj = media(onCarouselScroll[8]);
      const appStoreOverlayMediaSizes = obj.useAppStoreOverlayMediaSizes(memo);
      let sizes = appStoreOverlayMediaSizes.sizes;
      recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
      const items1 = [media, sizes];
      const mediaViewerSources = recordMediaSize.useMemo(
        () =>
          media.map((type, mediaIndex) => {
            let height;
            let size3;
            let tmp7;
            let url;
            let width;
            if ("trailer" === type.type) {
              let posterUrl = type.posterUrl;
              if (posterUrl == null) {
                posterUrl = null;
              }
              url = posterUrl;
            } else {
              url = type.url;
            }
            let value;
            if (null != url) {
              value = closure_0.get(url);
            }
            if (value == null) {
              size = {
                width: sizes(onCarouselScroll[8]).MEDIA_FALLBACK_WIDTH,
                height: sizes(onCarouselScroll[8]).MEDIA_FALLBACK_HEIGHT,
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
                thumbnail: tmp7,
                accessoryType: "embed",
                disableDownload: true,
              };
              tmp7 = undefined;
              if (null != type.posterUrl) {
                const size2 = { width, height, uri: type.posterUrl };
                tmp7 = size2;
              }
              size3 = size1;
            } else {
              size3 = { uri: type.url, mediaIndex, width, height, accessoryType: "embed", disableDownload: true };
            }
            return size3;
          }),
        items1,
      );
      const items2 = [media, sizes];
      const memo1 = recordMediaSize.useMemo(
        () =>
          media.map((type) => {
            let url;
            if ("trailer" === type.type) {
              let posterUrl = type.posterUrl;
              if (posterUrl == null) {
                posterUrl = null;
              }
              url = posterUrl;
            } else {
              url = type.url;
            }
            let value;
            const getMediaTileSize = media(onCarouselScroll[8]).getMediaTileSize;
            media(onCarouselScroll[8]);
            if (null != url) {
              value = sizes.get(url);
            }
            return getMediaTileSize(value).width;
          }),
        items2,
      );
      ref = recordMediaSize.useRef(0);
      let tmp7 = sizes(recordMediaSize.useState(0), 2);
      const first = tmp7[0];
      let closure_9 = tmp7[1];
      const length = media.length;
      const items3 = [length];
      const effect = recordMediaSize.useEffect(() => {
        ref.current = 0;
      }, items3);
      const items4 = [length, first, memo1, onCarouselScroll];
      const callback = recordMediaSize.useCallback((nativeEvent) => {
        closure_9(nativeEvent.nativeEvent.layout.width);
      }, []);
      const callback1 = recordMediaSize.useCallback((nativeEvent) => {
        let LEFT;
        if (null != onCarouselScroll) {
          if (length > 1) {
            if (first > 0) {
              const x = nativeEvent.nativeEvent.contentOffset.x;
              let num5 = 0;
              if (0 !== memo1.length) {
                num5 = 0;
                if (first > 0) {
                  let sum1 = PX_162;
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
                      let maxResult = max(0, bound - Math.max(x, sum1));
                      let tmp8 = num2;
                      let tmp9 = num3;
                      if (maxResult > num2) {
                        tmp8 = maxResult;
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
                const obj = {
                  carouselType: AnalyticsActions.AppStoreOverlayCarouselTypes.MEDIA,
                  scrollingDirection: LEFT,
                  carouselPosition: num5,
                  carouselSize: tmp15,
                };
                if (num5 > current) {
                  LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
                } else {
                  LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
                }
                tmp(obj);
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
      media(onCarouselScroll[19]);
      let tmp15 = null;
      const tmp4 = onCarouselScroll;
      if (0 !== media.length) {
        const obj2 = { gesture: tmp14, children: length(memo1, obj5) };
        ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
        obj5 = {
          horizontal: true,
          nestedScrollEnabled: true,
          showsHorizontalScrollIndicator: false,
          style: null,
          contentContainerStyle: null,
          onLayout: callback,
          onScrollEndDrag: callback2,
          onMomentumScrollEnd: callback1,
          children: media.map((media, index) => {
            let getMediaTileSize;
            let url;
            let value;
            if ("trailer" === media.type) {
              let posterUrl = media.posterUrl;
              if (posterUrl == null) {
                posterUrl = null;
              }
              url = posterUrl;
            } else {
              url = media.url;
            }
            const obj = {
              media,
              index,
              mediaViewerSources,
              tileSize: getMediaTileSize(value),
              recordMediaSize,
              onGetGamePress: importDefault,
            };
            value = undefined;
            getMediaTileSize = AppStoreOverlayMediaSize.getMediaTileSize;
            AppStoreOverlayMediaSize;
            if (null != url) {
              value = sizes.get(url);
            }
            return authStore(closure_18, obj, "" + media.type + "-" + index);
          }),
        };
        const GestureDetector = tmp3(tmp4[19]).GestureDetector;
        tmp15 = length(GestureDetector, obj2);
      }
      return tmp15;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default tmp7;
