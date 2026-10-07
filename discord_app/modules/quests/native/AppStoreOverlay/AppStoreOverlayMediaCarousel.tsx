// === Module 10941: AppStoreOverlayMediaCarousel ===

// Module 10941 (AppStoreOverlayMediaCarousel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize" /* 10942 */;
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal" /* 10943 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

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
function AppStoreOverlayTrailerItem(media) {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  ref = undefined;
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
  const stateFromStores = media(mediaViewerSources[14]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const callback = ref.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let obj = media(mediaViewerSources[14]);
  const ref1 = ref.useRef(media(mediaViewerSources[15]).createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const obj3 = {
    ref,
    style: null,
    onPress: ref.useCallback(() => {
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({ initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress });
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj3.style = items3;
  const intl = media(mediaViewerSources[12]).intl;
  obj3.accessibilityLabel = intl.string(media(mediaViewerSources[12]).t.N0IE3v);
  const items4 = [closure_10(media(mediaViewerSources[15]).VideoComponent, { style: tmp.media, source: { uri: media.url }, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current }), ];
  const obj2 = media(mediaViewerSources[15]);
  const obj4 = { style: tmp.media, source: { uri: media.url }, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  items4[1] = closure_10(closure_7, { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_10(media(mediaViewerSources[16]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) });
  obj3.children = items4;
  return closure_11(ref, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet, View: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1096).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4896);
let obj2 = { carousel: { marginHorizontal: -nativeDefault.space.PX_16 }, carouselContent: null, mediaItem: null, media: null, playIconWrapper: null };
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = { gap: PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { gap: PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
obj2.mediaItem = { borderRadius: nativeDefault.space.PX_16, overflow: "hidden", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj2.playIconWrapper = obj7;
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((media) => {
  const cResult = media(mediaViewerSources[10]).c(23);
  media = media.media;
  const index = media.index;
  mediaViewerSources = media.mediaViewerSources;
  ({ tileSize, recordMediaSize } = media);
  const onGetGamePress = media.onGetGamePress;
  const tmp4 = closure_14();
  ref = onGetGamePress.useRef(null);
  if (cResult[0] !== media.url) {
    const appStoreOverlayCarouselImageUrl = tmp(tmp2[8]).getAppStoreOverlayCarouselImageUrl(media.url);
    cResult[0] = media.url;
    cResult[1] = appStoreOverlayCarouselImageUrl;
    let tmp6 = appStoreOverlayCarouselImageUrl;
    const tmpResult = tmp(tmp2[8]);
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === media.url) {
    if (cResult[3] === recordMediaSize) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === index) {
      if (cResult[6] === mediaViewerSources) {
        if (cResult[7] === onGetGamePress) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.mediaItem) {
          if (cResult[10] === tileSize) {
            let tmp10 = cResult[11];
          }
          class C {
            constructor() {
              obj = closure_0(closure_2[11]);
              obj1 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: closure_5.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
              result = obj.openAppStoreOverlayMediaModal(obj1);
              return;
            }
          }
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const string = tmp(tmp2[12]).intl.string;
            class C {
              constructor() {
                obj = closure_0(closure_2[11]);
                obj1 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: closure_5.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
                result = obj.openAppStoreOverlayMediaModal(obj1);
                return;
              }
            }
            cResult[12] = tmp14;
            let tmp13 = tmp14;
          } else {
            tmp13 = cResult[12];
          }
          if (cResult[13] !== tmp6) {
            const obj2 = { uri: tmp6 };
            class C {
              constructor() {
                obj = closure_0(closure_2[11]);
                obj1 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: closure_5.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
                result = obj.openAppStoreOverlayMediaModal(obj1);
                return;
              }
            }
            cResult[13] = tmp6;
            cResult[14] = obj2;
            let tmp15 = obj2;
          } else {
            tmp15 = cResult[14];
          }
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp4.media) {
              if (cResult[17] === tmp15) {
                let tmp16 = cResult[18];
              }
              if (cResult[19] === tmp9) {
                if (cResult[20] === tmp10) {
                  if (cResult[21] === tmp16) {
                    let tmp20 = cResult[22];
                  }
                  return tmp20;
                }
              }
              class C {
                constructor() {
                  obj = closure_0(closure_2[11]);
                  obj1 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: closure_5.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
                  result = obj.openAppStoreOverlayMediaModal(obj1);
                  return;
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
          const obj4 = { source: tmp15, style: tmp4.media, resizeMode: "cover", onLoad: tmp8, accessibilityIgnoresInvertColors: true };
          const tmp19 = closure_10(index(tmp2[13]), obj4);
          cResult[15] = tmp8;
          cResult[16] = tmp4.media;
          cResult[17] = tmp15;
          cResult[18] = tmp19;
          tmp16 = tmp19;
        }
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            obj1 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: closure_5.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
            result = obj.openAppStoreOverlayMediaModal(obj1);
            return;
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
        obj = closure_0(closure_2[11]);
        obj1 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: closure_5.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
        result = obj.openAppStoreOverlayMediaModal(obj1);
        return;
      }
    }
    cResult[5] = index;
    cResult[6] = mediaViewerSources;
    cResult[7] = onGetGamePress;
    cResult[8] = C;
    tmp9 = C;
  }
  const fn = function z(nativeEvent) {
    const mediaSizeFromLoadEvent = AppStoreOverlayMediaSize.getMediaSizeFromLoadEvent(nativeEvent);
    if (null != mediaSizeFromLoadEvent) {
      recordMediaSize(media.url, mediaSizeFromLoadEvent);
    }
  };
  cResult[2] = media.url;
  cResult[3] = recordMediaSize;
  cResult[4] = fn;
  tmp8 = fn;
  let obj = media(mediaViewerSources[10]);
}) : ((media) => {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const recordMediaSize = media.recordMediaSize;
  const onGetGamePress = media.onGetGamePress;
  const tmp = closure_14();
  ref = onGetGamePress.useRef(null);
  const items = [media.url];
  const items1 = [media.url, recordMediaSize];
  const memo = onGetGamePress.useMemo(() => AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(media.url), items);
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
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({ initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress });
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj.style = items3;
  const intl = media(mediaViewerSources[12]).intl;
  obj.accessibilityLabel = intl.string(media(mediaViewerSources[12]).t.lWDPcO);
  obj.children = closure_10(index(mediaViewerSources[13]), { source: { uri: memo }, style: tmp.media, resizeMode: "cover", onLoad: callback, accessibilityIgnoresInvertColors: true });
  return closure_10(ref, obj);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ media, index, mediaViewerSources, tileSize, recordMediaSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    if (cResult[0] === index) {
      if (cResult[1] === media) {
        if (cResult[2] === mediaViewerSources) {
          if (cResult[3] === onGetGamePress) {
            if (cResult[4] === recordMediaSize) {
              if (cResult[5] === tileSize) {
                let tmp6 = cResult[6];
              }
              return tmp6;
            }
          }
        }
      }
    }
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize, onGetGamePress };
    const tmp9 = v65535(closure_16, obj2);
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
            if (cResult[11] === tileSize) {
              let tmp2 = cResult[12];
            }
            return tmp2;
          }
        }
      }
    }
    const obj3 = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    const tmp5 = v65535(AppStoreOverlayTrailerItem, obj3);
    cResult[7] = index;
    cResult[8] = media;
    cResult[9] = mediaViewerSources;
    cResult[10] = onGetGamePress;
    cResult[11] = tileSize;
    cResult[12] = tmp5;
    tmp2 = tmp5;
  }
}) : ((arg0) => {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
    return v65535(closure_16, obj2);
  } else if ("trailer" === type) {
    const obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    return v65535(AppStoreOverlayTrailerItem, obj);
  }
});
ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.space.PX_16, overflow: "hidden", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const obj6 = {};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onCarouselScroll) => {
  const cResult = onGetGamePress(sizes[10]).c(43);
  ({ media, onGetGamePress } = onCarouselScroll);
  onCarouselScroll = onCarouselScroll.onCarouselScroll;
  closure_14();
  if (cResult[0] !== media) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(arg0) {
        return null != arg0;
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = media.map(getMeasurableUrl);
    const found = mapped.filter(tmp6);
    cResult[0] = media;
    cResult[1] = found;
  } else {
    const appStoreOverlayMediaSizes = onGetGamePress(tmp2[8]).useAppStoreOverlayMediaSizes(cResult[1]);
    sizes = appStoreOverlayMediaSizes.sizes;
    const recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
    if (cResult[3] === media) {
      if (cResult[4] === sizes) {
        let tmp11 = cResult[5];
      }
      noop = tmp11;
      if (cResult[6] === media) {
        if (cResult[7] === sizes) {
          noop.useRef(0);
          const tmp19 = recordMediaSize(noop.useState(0), 2);
          const first = tmp19[0];
          closure_8 = tmp19[1];
          const length = media.length;
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
            cResult[11] = O;
          } else {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
          }
          if (cResult[12] !== length) {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
            tmp24[0] = length;
            cResult[12] = length;
            cResult[13] = tmp24;
          } else {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
          }
          const effect = noop.useEffect(O, tmp24);
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
            cResult[14] = tmp27;
          } else {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
          }
          if (cResult[15] === length) {
            class O {
              constructor() {
                closure_6.current = 0;
                return;
              }
            }
          }
          class H {
            constructor(arg0) {
              if (null != onCarouselScroll) {
                num6 = 1;
                if (length > 1) {
                  tmp14 = closure_7;
                  num7 = 0;
                  if (closure_7 > 0) {
                    tmp15 = onCarouselScroll;
                    x = onCarouselScroll.nativeEvent.contentOffset.x;
                    arr = closure_5;
                    num5 = 0;
                    if (0 !== closure_5.length) {
                      num5 = 0;
                      if (tmp14 > 0) {
                        sum1 = PX_16;
                        tmp3 = globalThis;
                        num = 0;
                        num2 = 0;
                        num3 = 0;
                        num4 = 0;
                        if (0 < arr.length) {
                          do {
                            sum = sum1 + arr[num];
                            _Math = Math;
                            _Math2 = Math;
                            _Math3 = Math;
                            bound = Math.min(x + tmp14, sum);
                            bound1 = Math.max(0, bound - Math.max(x, sum1));
                            tmp7 = num;
                            tmp8 = num2;
                            tmp9 = num3;
                            if (bound1 > num2) {
                              tmp8 = bound1;
                              tmp9 = num;
                            }
                            tmp10 = PX_16;
                            sum1 = sum + PX_16;
                            num = num + 1;
                            num2 = tmp8;
                            num3 = tmp9;
                            num4 = tmp9;
                          } while (num < arr.length);
                        }
                        num5 = num4;
                      }
                    }
                    current = closure_6.current;
                    if (num5 !== current) {
                      tmpResult = { carouselType: null, scrollingDirection: null, carouselPosition: null, carouselSize: null };
                      tmp12 = closure_0;
                      HorizontalScrollingDirection = closure_2;
                      tmpResult.carouselType = closure_0(closure_2[17]).AppStoreOverlayCarouselTypes.MEDIA;
                      if (num5 > current) {
                        HorizontalScrollingDirection = tmp12(HorizontalScrollingDirection[18]).HorizontalScrollingDirection;
                        LEFT = HorizontalScrollingDirection.RIGHT;
                      } else {
                        LEFT = tmp12(HorizontalScrollingDirection[18]).HorizontalScrollingDirection.LEFT;
                      }
                      tmpResult.scrollingDirection = LEFT;
                      tmpResult.carouselPosition = num5;
                      tmpResult.carouselSize = tmp13;
                      tmpResult = tmp(tmpResult);
                      tmp11.current = num5;
                    }
                  }
                }
              }
              return;
            }
          }
          cResult[15] = length;
          cResult[16] = first;
          cResult[17] = cResult[8];
          cResult[18] = onCarouselScroll;
          cResult[19] = H;
        }
      }
      if (cResult[9] !== sizes) {
        class O {
          constructor() {
            closure_6.current = 0;
            return;
          }
        }
        cResult[9] = sizes;
        cResult[10] = tmp15;
      } else {
        class O {
          constructor() {
            closure_6.current = 0;
            return;
          }
        }
      }
      const mapped1 = media.map(tmp15);
      cResult[6] = media;
      cResult[7] = sizes;
      cResult[8] = mapped1;
    }
    closure_129_0 = sizes;
    const mapped2 = media.map((type, mediaIndex) => {
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
        const size = { width: media(onCarouselScroll[8]).MEDIA_FALLBACK_WIDTH, height: media(onCarouselScroll[8]).MEDIA_FALLBACK_HEIGHT };
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
    cResult[3] = media;
    cResult[4] = sizes;
    cResult[5] = mapped2;
    tmp11 = mapped2;
    const tmpResult = onGetGamePress(tmp2[8]);
  }
  let obj = onGetGamePress(sizes[10]);
  tmp2 = sizes;
}) : ((media) => {
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
        const size = { width: media(onCarouselScroll[8]).MEDIA_FALLBACK_WIDTH, height: media(onCarouselScroll[8]).MEDIA_FALLBACK_HEIGHT };
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
  const items2 = [media, sizes];
  const memo1 = recordMediaSize.useMemo(() => media.map((type) => {
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
  }), items2);
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
  media(onCarouselScroll[19]);
  let tmp15 = null;
  if (0 !== media.length) {
    const obj2 = { gesture: tmp14, children: null };
    const obj5 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, onLayout: null, onScrollEndDrag: null, onMomentumScrollEnd: null, children: null };
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
      return v65535(closure_18, obj, "" + media.type + "-" + index);
    });
    obj2.children = length(memo1, obj5);
    tmp15 = length(tmp3(tmp4[19]).GestureDetector, obj2);
  }
  return tmp15;
});