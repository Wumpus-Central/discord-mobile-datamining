// === Module 8927: GameProfileMedia ===

// Module 8927 (GameProfileMedia)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import openMediaModal from "openMediaModal" /* 8386 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8878 */;
import GameProfileMediaSources from "GameProfileMediaSources" /* 8928 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
function keyExtractor(originalUrl, arg1) {
  return "" + originalUrl.originalUrl + "-" + arg1;
}
function getItemType(type) {
  if ("trailer" === type.type) {
    const _HermesInternal = HermesInternal;
    type = "trailer-" + type.originalUrl;
  } else {
    type = type.type;
  }
  return type;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
const NOOP = fn(1096).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_14 = 2 * (fn(8928).MEDIA_ITEM_MAX_WIDTH + PX_12);
const createStyles = fn(5092);
let obj = { container: { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 }, list: { overflow: "visible" }, separator: { width: PX_12 }, listPadding: { width: PX_16 }, mediaItem: null, mediaImage: null, mediaVideo: null, reducedMotionPoster: null, playIconWrapper: null };
let obj3 = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.mediaItem = { maxWidth: fn(8928).MEDIA_ITEM_MAX_WIDTH, maxHeight: fn(8928).MEDIA_ITEM_MAX_HEIGHT, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj.mediaVideo = size;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.resizeMode = "cover";
obj.reducedMotionPoster = obj5;
let obj6 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6.alignItems = "center";
obj6.justifyContent = "center";
obj.playIconWrapper = obj6;
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Separator() {
  const cResult = c.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = options(hasOwnProperty, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Separator() {
  return options(hasOwnProperty, { style: closure_15().separator });
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListPadding() {
  const cResult = c.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.listPadding) {
    const obj2 = { style: tmp2.listPadding };
    const tmp6 = options(hasOwnProperty, obj2);
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListPadding() {
  return options(hasOwnProperty, { style: closure_15().listPadding });
});
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ImageItem(sources) {
  const cResult = index(trackAction[10]).c(21);
  ({ url, index } = sources);
  sources = sources.sources;
  trackAction = sources.trackAction;
  ({ width, height, onScrollToIndex } = sources);
  const setMediaModalOpen = sources.setMediaModalOpen;
  const tmp3 = closure_15();
  const obj = index(trackAction[10]);
  const tmp = trackAction;
  if (cResult[0] === index) {
    if (cResult[1] === onScrollToIndex) {
      if (cResult[2] === setMediaModalOpen) {
        if (cResult[3] === sources) {
          if (cResult[4] === trackAction) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === height) {
            if (cResult[7] === width) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === tmp3.mediaItem) {
              if (cResult[10] === tmp6) {
                let tmp7 = cResult[11];
              }
              if (cResult[12] !== url) {
                const obj2 = { uri: url };
                cResult[12] = url;
                cResult[13] = obj2;
                let tmp8 = obj2;
              } else {
                tmp8 = cResult[13];
              }
              if (cResult[14] === tmp3.mediaImage) {
                if (cResult[15] === tmp8) {
                  let tmp9 = cResult[16];
                }
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp7) {
                    if (cResult[19] === tmp9) {
                      let tmp13 = cResult[20];
                    }
                    return tmp13;
                  }
                }
                const obj3 = { ref, style: tmp7, onPress: tmp5, children: tmp9 };
                const tmp16 = closure_9(closure_6, obj3);
                cResult[17] = tmp5;
                cResult[18] = tmp7;
                cResult[19] = tmp9;
                cResult[20] = tmp16;
                tmp13 = tmp16;
              }
              const obj4 = { source: tmp8, style: tmp3.mediaImage };
              const tmp12 = closure_9(sources(tmp[13]), obj4);
              cResult[14] = tmp3.mediaImage;
              cResult[15] = tmp8;
              cResult[16] = tmp12;
              tmp9 = tmp12;
            }
            const items = [tmp3.mediaItem, tmp6];
            cResult[9] = tmp3.mediaItem;
            cResult[10] = tmp6;
            cResult[11] = items;
            tmp7 = items;
          }
          const size = { width, height };
          cResult[6] = height;
          cResult[7] = width;
          cResult[8] = size;
          tmp6 = size;
        }
      }
    }
  }
  const fn = function o() {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
    setMediaModalOpen(true);
    openMediaModal.openMediaModal({
      initialSources: sources,
      initialIndex: index,
      originViewOrOriginLayout: ref.current,
      analyticsSource: "game_profile",
      openAs: "action-sheet",
      disableMediaOverlayButton: true,
      shareable: false,
      onIndexChange(arg0) {
        return onScrollToIndex(arg0);
      },
      onClose() {
        return setMediaModalOpen(false);
      }
    });
  };
  cResult[0] = index;
  cResult[1] = onScrollToIndex;
  cResult[2] = setMediaModalOpen;
  cResult[3] = sources;
  cResult[4] = trackAction;
  cResult[5] = fn;
  tmp5 = fn;
  ref = setMediaModalOpen.useRef(null);
}) : (function ImageItem(index) {
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ url, width, height } = index);
  const tmp = closure_15();
  const ref = setMediaModalOpen.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  const obj = {
    ref,
    style: null,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      openMediaModal.openMediaModal({
        initialSources: sources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        disableMediaOverlayButton: true,
        shareable: false,
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      });
    }, items),
    children: closure_9(sources(trackAction[13]), { source: { uri: url }, style: tmp.mediaImage })
  };
  const items1 = [tmp.mediaItem, { width, height }];
  obj.style = items1;
  return closure_9(closure_6, obj);
}));
let closure_21 = noop.memo(function TrailerItem(sources) {
  ({ posterUrl, index } = sources);
  sources = sources.sources;
  const trackAction = sources.trackAction;
  const onScrollToIndex = sources.onScrollToIndex;
  const setMediaModalOpen = sources.setMediaModalOpen;
  ({ url, active, reducedMotion, width, height } = sources);
  const tmp = closure_15();
  setMediaModalOpen.useRef(null);
  const ref = setMediaModalOpen.useRef(0);
  const callback = setMediaModalOpen.useCallback((current) => {
    closure_6.current = current;
  }, []);
  const ref1 = setMediaModalOpen.useRef(index(trackAction[14]).createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  const obj2 = {
    ref,
    style: null,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      openMediaModal.openMediaModal({
        initialSources: sources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        disableMediaOverlayButton: true,
        shareable: false,
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      });
    }, items),
    accessibilityLabel: null,
    children: null
  };
  const items1 = [tmp.mediaItem, { width, height }];
  obj2.style = items1;
  const intl = index(trackAction[15]).intl;
  obj2.accessibilityLabel = intl.string(index(trackAction[15]).t.oRN0Og);
  if (reducedMotion) {
    const obj3 = { children: null };
    const obj4 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj5 = { uri: posterUrl };
    obj4.source = obj5;
    obj4.style = tmp.reducedMotionPoster;
    const items2 = [closure_9(sources(tmp5[13]), obj4), ];
    const obj6 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_9(index(tmp5[16]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
    items2[1] = closure_9(ref, obj6);
    obj3.children = items2;
    let tmp8Result = closure_11(closure_10, obj3);
  } else {
    const obj7 = { style: tmp.mediaVideo, source: null, poster: null, posterResizeMode: "cover", paused: null, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: null };
    const obj8 = { uri: url };
    obj7.source = obj8;
    obj7.poster = posterUrl;
    obj7.paused = !active;
    obj7.controls = ref1.current;
    tmp8Result = closure_9(index(tmp5[14]).VideoComponent, obj7);
  }
  obj2.children = tmp8Result;
  return closure_9(ref, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { maxWidth: fn(8928).MEDIA_ITEM_MAX_WIDTH, maxHeight: fn(8928).MEDIA_ITEM_MAX_HEIGHT, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileMedia(arg0) {
  const cResult = trackAction(576).c(44);
  ({ game, trackAction } = arg0);
  closure_15();
  let obj = trackAction(576);
  const obscured = trackAction(8917).useObscuredSurface().obscured;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [bound1];
    const fn = function s() {
      return bound1.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = trackAction(8917);
  const stateFromStores = trackAction(504).useStateFromStores(tmp5, tmp6);
  const tmpResult = trackAction(504);
  [tmp10, dependencyMap] = noop.useState(0);
  let tmp9 = _slicedToArray(noop.useState(0), 2);
  _slicedToArray = _slicedToArray(noop.useState(0), 2)[1];
  const tmp11 = _slicedToArray(noop.useState(0), 2);
  noop = _slicedToArray(noop.useState(false), 2)[1];
  noop.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const carouselPreviewPixelSize = trackAction(8928).getCarouselPreviewPixelSize();
    cResult[2] = carouselPreviewPixelSize;
    let tmp14 = carouselPreviewPixelSize;
    const tmpResult2 = trackAction(8928);
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
    cResult[3] = F;
  } else {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  if (cResult[4] !== game) {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
    const mediaEntries = obj5.buildMediaEntries(game);
    cResult[4] = game;
    cResult[5] = mediaEntries;
  } else {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  const bound = Math.max(0, Math.min(trackAction(8928).MEDIA_ITEM_MAX_WIDTH, tmp10 - PX_12 - 2 * PX_16));
  bound1 = Math.min(trackAction(8928).MEDIA_ITEM_MAX_HEIGHT, bound / trackAction(8928).MEDIA_ITEM_ASPECT_RATIO);
  if (cResult[6] !== arr2) {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
    let mediaViewerSources = obj6.buildMediaViewerSources(arr2, tmp14);
    cResult[6] = arr2;
    cResult[7] = mediaViewerSources;
    const tmp22 = mediaViewerSources;
  } else {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  mediaViewerSources = tmp22;
  const result = (tmp10 - bound - 2 * PX_16) / 2;
  const sum = bound + PX_12;
  closure_10 = sum;
  if (cResult[8] === sum) {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  if (cResult[12] === sum) {
    class F {
      constructor(arg0) {
        tmp = closure_2(arg0.nativeEvent.layout.width);
        return;
      }
    }
    const mapped = arr2.map(Q);
    cResult[8] = sum;
    cResult[9] = arr2;
    cResult[10] = result;
    cResult[11] = mapped;
  }
  class Q {
    constructor(arg0, arg1) {
      return Math.max(0, arg1 * closure_10 - closure_9);
    }
  }
  cResult[12] = sum;
  cResult[13] = result;
  cResult[14] = Q;
  const tmp12 = _slicedToArray(noop.useState(false), 2);
}) : (function GameProfileMedia(game) {
  game = game.game;
  const trackAction = game.trackAction;
  let stateFromStores;
  let first;
  noop = undefined;
  let ref;
  let num;
  const tmp = num();
  let obj = game(stateFromStores[17]);
  let tmp2 = game;
  const items = [ref];
  stateFromStores = game(stateFromStores[18]).useStateFromStores(items, () => ref.useReducedMotion);
  const tmp5 = first(noop.useState(0), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const tmp7 = first(noop.useState(0), 2);
  closure_5 = tmp7[1];
  const tmp8 = first(noop.useState(false), 2);
  const setMediaModalOpen = tmp8[1];
  ref = noop.useRef(null);
  const memo = noop.useMemo(() => game(stateFromStores[7]).getCarouselPreviewPixelSize(), []);
  const items1 = [game];
  const callback = noop.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo1 = noop.useMemo(() => GameProfileMediaSources.buildMediaEntries(game), items1);
  const items2 = [first];
  const memo2 = noop.useMemo(() => Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, first - PX_12 - 2 * PX_16)), items2);
  const items3 = [memo2];
  const memo3 = noop.useMemo(() => Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO), items3);
  const items4 = [memo1, memo];
  const memo4 = noop.useMemo(() => GameProfileMediaSources.buildMediaViewerSources(memo1, memo), items4);
  const items5 = [memo1, first, memo2];
  const memo5 = noop.useMemo(() => memo1.map((item, index) => Math.max(0, index * (memo2 + memo4) - (first - memo2 - 2 * memo5) / 2)), items5);
  const items6 = [memo5];
  const items7 = [memo5];
  const callback1 = noop.useCallback((nativeEvent) => {
    if (0 !== memo5.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      num = 1;
      let absolute = Math.abs(memo5[0] - x);
      let num2 = 0;
      let num3 = 0;
      if (1 < memo5.length) {
        do {
          let _Math = Math;
          let absolute1 = Math.abs(memo5[num] - x);
          let tmp3 = absolute;
          let tmp4 = num2;
          if (absolute1 < absolute) {
            tmp3 = absolute1;
            tmp4 = num;
          }
          num = num + 1;
          absolute = tmp3;
          num2 = tmp4;
          num3 = tmp4;
        } while (num < memo5.length);
      }
      closure_5(num3);
    }
  }, items6);
  const callback2 = noop.useCallback((arg0) => {
    if (null != memo5[arg0]) {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: tmp, animated: false };
        current.scrollToOffset(obj);
      }
    }
    closure_5(arg0);
  }, items7);
  num = -1;
  if (!obj.useObscuredSurface().obscured) {
    num = -1;
    if (!tmp8[0]) {
      num = -1;
      if (!stateFromStores) {
        num = tmp7[0];
      }
    }
  }
  const items8 = [num, memo4, trackAction, memo2, memo3, callback2, stateFromStores];
  const items9 = [num, memo2, memo3, memo4, stateFromStores];
  const callback3 = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    if ("trailer" === item.type) {
      const size = { url: null, posterUrl: null, active: null, reducedMotion: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
      ({ originalUrl: obj2.url, previewUrl: obj2.posterUrl } = item);
      size.active = index === num;
      size.reducedMotion = stateFromStores;
      size.index = index;
      size.sources = memo4;
      size.trackAction = trackAction;
      size.width = memo2;
      size.height = memo3;
      size.onScrollToIndex = callback2;
      size.setMediaModalOpen = setMediaModalOpen;
      let tmp9 = options(closure_21, size);
    } else {
      const size1 = { url: item.previewUrl, index, sources: memo4, trackAction, width: memo2, height: memo3, onScrollToIndex: callback2, setMediaModalOpen };
      tmp9 = options(closure_20, size1);
    }
    return tmp9;
  }, items8);
  let tmp28Result2 = null;
  if (0 !== memo1.length) {
    const obj4 = { style: tmp.container, onLayout: callback, children: null };
    let tmp28Result = memo2 > 0;
    if (tmp28Result) {
      const obj5 = { ref, horizontal: true, renderScrollComponent: trackAction(tmp3[20]), style: tmp.list, overrideProps: null, data: null, extraData: null, renderItem: null, keyExtractor: null, getItemType: null, drawDistance: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToOffsets: null, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: null };
      const obj6 = { style: tmp.list };
      obj5.overrideProps = obj6;
      obj5.data = memo1;
      obj5.extraData = tmp19;
      obj5.renderItem = callback3;
      obj5.keyExtractor = keyExtractor;
      obj5.getItemType = getItemType;
      obj5.drawDistance = callback2;
      obj5.ItemSeparatorComponent = ItemSeparatorComponent;
      obj5.ListHeaderComponent = ListFooterComponent;
      obj5.ListFooterComponent = ListFooterComponent;
      obj5.snapToOffsets = memo5;
      obj5.onMomentumScrollEnd = callback1;
      tmp28Result = tmp28(tmp2(tmp3[19]).FlashList, obj5);
    }
    obj4.children = tmp28Result;
    tmp28Result2 = tmp28(closure_5, obj4);
  }
  return tmp28Result2;
});