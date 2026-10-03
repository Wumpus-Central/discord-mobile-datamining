// discord_app/modules/game_profile/native/components/GameProfileMedia.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openMediaModal from "../../../media_viewer/native/components/openMediaModal.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileMediaSources from "GameProfileMediaSources.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
({ View: hasOwnProperty, Image: metroRequire, Pressable: closure_7, StyleSheet } = get_ActivityIndicator);
let NOOP = fn(1096).NOOP;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_15 = 2 * (fn(8367).MEDIA_ITEM_MAX_WIDTH + PX_12);
const createStyles = fn(4890);
let obj = {
  container: { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 },
  list: { overflow: "visible" },
  separator: { width: PX_12 },
  listPadding: { width: PX_16 },
  mediaItem: null,
  mediaImage: null,
  mediaVideo: null,
  reducedMotionPoster: null,
  playIconWrapper: null,
};
let obj3 = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.mediaItem = {
  maxWidth: fn(8367).MEDIA_ITEM_MAX_WIDTH,
  maxHeight: fn(8367).MEDIA_ITEM_MAX_HEIGHT,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
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
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp2 = closure_16();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = v65535(hasOwnProperty, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => v65535(hasOwnProperty, { style: closure_16().separator });
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp2 = closure_16();
      if (cResult[0] !== tmp2.listPadding) {
        const obj2 = { style: tmp2.listPadding };
        const tmp6 = v65535(hasOwnProperty, obj2);
        cResult[0] = tmp2.listPadding;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => v65535(hasOwnProperty, { style: closure_16().listPadding });
ReactCompilerGating = fn(558);
let closure_21 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (sources) => {
        const cResult = index(trackAction[10]).c(21);
        ({ url, index } = sources);
        sources = sources.sources;
        trackAction = sources.trackAction;
        ({ width, height, onScrollToIndex } = sources);
        const setMediaModalOpen = sources.setMediaModalOpen;
        const tmp2 = closure_16();
        const obj = index(trackAction[10]);
        if (cResult[0] === index) {
          if (cResult[1] === onScrollToIndex) {
            if (cResult[2] === setMediaModalOpen) {
              if (cResult[3] === sources) {
                if (cResult[4] === trackAction) {
                  let tmp4 = cResult[5];
                }
                if (cResult[6] === height) {
                  if (cResult[7] === width) {
                    let tmp5 = cResult[8];
                  }
                  if (cResult[9] === tmp2.mediaItem) {
                    if (cResult[10] === tmp5) {
                      let tmp6 = cResult[11];
                    }
                    if (cResult[12] !== url) {
                      const obj2 = { uri: url };
                      cResult[12] = url;
                      cResult[13] = obj2;
                      let tmp7 = obj2;
                    } else {
                      tmp7 = cResult[13];
                    }
                    if (cResult[14] === tmp2.mediaImage) {
                      if (cResult[15] === tmp7) {
                        let tmp8 = cResult[16];
                      }
                      if (cResult[17] === tmp4) {
                        if (cResult[18] === tmp6) {
                          if (cResult[19] === tmp8) {
                            let tmp12 = cResult[20];
                          }
                          return tmp12;
                        }
                      }
                      const obj3 = { ref, style: tmp6, onPress: tmp4, children: tmp8 };
                      const tmp15 = closure_10(closure_7, obj3);
                      cResult[17] = tmp4;
                      cResult[18] = tmp6;
                      cResult[19] = tmp8;
                      cResult[20] = tmp15;
                      tmp12 = tmp15;
                    }
                    const obj4 = { source: tmp7, style: tmp2.mediaImage };
                    const tmp11 = closure_10(closure_6, obj4);
                    cResult[14] = tmp2.mediaImage;
                    cResult[15] = tmp7;
                    cResult[16] = tmp11;
                    tmp8 = tmp11;
                  }
                  const items = [tmp2.mediaItem, tmp5];
                  cResult[9] = tmp2.mediaItem;
                  cResult[10] = tmp5;
                  cResult[11] = items;
                  tmp6 = items;
                }
                const size = { width, height };
                cResult[6] = height;
                cResult[7] = width;
                cResult[8] = size;
                tmp5 = size;
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
            onIndexChange(arg0) {
              return onScrollToIndex(arg0);
            },
            onClose() {
              return setMediaModalOpen(false);
            },
          });
        };
        cResult[0] = index;
        cResult[1] = onScrollToIndex;
        cResult[2] = setMediaModalOpen;
        cResult[3] = sources;
        cResult[4] = trackAction;
        cResult[5] = fn;
        tmp4 = fn;
        ref = setMediaModalOpen.useRef(null);
      }
    : (index) => {
        index = index.index;
        const sources = index.sources;
        const trackAction = index.trackAction;
        const onScrollToIndex = index.onScrollToIndex;
        const setMediaModalOpen = index.setMediaModalOpen;
        ({ url, width, height } = index);
        const tmp = closure_16();
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
              onIndexChange(arg0) {
                return onScrollToIndex(arg0);
              },
              onClose() {
                return setMediaModalOpen(false);
              },
            });
          }, items),
          children: closure_10(closure_6, { source: { uri: url }, style: tmp.mediaImage }),
        };
        const items1 = [tmp.mediaItem, { width, height }];
        obj.style = items1;
        return closure_10(closure_7, obj);
      },
);
let closure_22 = noop.memo((sources) => {
  ({ posterUrl, index } = sources);
  sources = sources.sources;
  const trackAction = sources.trackAction;
  const onScrollToIndex = sources.onScrollToIndex;
  const setMediaModalOpen = sources.setMediaModalOpen;
  ({ url, active, reducedMotion, width, height } = sources);
  const tmp = closure_16();
  setMediaModalOpen.useRef(null);
  const ref = setMediaModalOpen.useRef(0);
  const callback = setMediaModalOpen.useCallback((current) => {
    closure_6.current = current;
  }, []);
  const ref1 = setMediaModalOpen.useRef(index(trackAction[13]).createVideoControls(NOOP));
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
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        },
      });
    }, items),
    accessibilityLabel: null,
    children: null,
  };
  const items1 = [tmp.mediaItem, { width, height }];
  obj2.style = items1;
  const intl = index(trackAction[14]).intl;
  obj2.accessibilityLabel = intl.string(index(trackAction[14]).t.oRN0Og);
  if (reducedMotion) {
    const obj3 = { children: null };
    const obj4 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj5 = { uri: posterUrl };
    obj4.source = obj5;
    obj4.style = tmp.reducedMotionPoster;
    const items2 = [closure_10(ref, obj4)];
    const obj6 = {
      style: tmp.playIconWrapper,
      pointerEvents: "none",
      children: closure_10(index(tmp5[15]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }),
    };
    items2[1] = closure_10(ref, obj6);
    obj3.children = items2;
    let tmp8Result = closure_12(closure_11, obj3);
  } else {
    const obj7 = {
      style: tmp.mediaVideo,
      source: null,
      poster: null,
      posterResizeMode: "cover",
      paused: null,
      muted: true,
      resizeMode: "cover",
      pauseWhileAppInactive: true,
      controls: null,
    };
    const obj8 = { uri: url };
    obj7.source = obj8;
    obj7.poster = posterUrl;
    obj7.paused = !active;
    obj7.controls = ref1.current;
    tmp8Result = closure_10(index(tmp5[13]).VideoComponent, obj7);
  }
  obj2.children = tmp8Result;
  return closure_10(closure_7, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = {
  maxWidth: fn(8367).MEDIA_ITEM_MAX_WIDTH,
  maxHeight: fn(8367).MEDIA_ITEM_MAX_HEIGHT,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = trackAction(576).c(44);
      ({ game, trackAction } = arg0);
      closure_16();
      let obj = trackAction(576);
      const obscured = trackAction(8356).useObscuredSurface().obscured;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [mediaViewerSources];
        const fn = function s() {
          return mediaViewerSources.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj2 = trackAction(8356);
      const stateFromStores = trackAction(504).useStateFromStores(tmp5, tmp6);
      const tmpResult = trackAction(504);
      [tmp10, dependencyMap] = noop.useState(0);
      let tmp9 = _slicedToArray(noop.useState(0), 2);
      _slicedToArray = _slicedToArray(noop.useState(0), 2)[1];
      const tmp11 = _slicedToArray(noop.useState(0), 2);
      noop = _slicedToArray(noop.useState(false), 2)[1];
      noop.useRef(null);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const carouselPreviewPixelSize = trackAction(8367).getCarouselPreviewPixelSize();
        cResult[2] = carouselPreviewPixelSize;
        let tmp14 = carouselPreviewPixelSize;
        const tmpResult2 = trackAction(8367);
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
      const bound = Math.max(0, Math.min(trackAction(8367).MEDIA_ITEM_MAX_WIDTH, tmp10 - PX_12 - 2 * PX_16));
      const bound1 = Math.min(
        trackAction(8367).MEDIA_ITEM_MAX_HEIGHT,
        bound / trackAction(8367).MEDIA_ITEM_ASPECT_RATIO,
      );
      if (cResult[6] !== arr2) {
        class F {
          constructor(arg0) {
            tmp = closure_2(arg0.nativeEvent.layout.width);
            return;
          }
        }
        mediaViewerSources = obj6.buildMediaViewerSources(arr2, tmp14);
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
      NOOP = result;
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
    }
  : (game) => {
      game = game.game;
      const trackAction = game.trackAction;
      let stateFromStores;
      let first;
      noop = undefined;
      let memo;
      const tmp = closure_16();
      let obj = game(stateFromStores[16]);
      let tmp2 = game;
      const items = [memo];
      stateFromStores = game(stateFromStores[17]).useStateFromStores(items, () => memo.useReducedMotion);
      const tmp5 = first(noop.useState(0), 2);
      first = tmp5[0];
      noop = tmp5[1];
      const tmp7 = first(noop.useState(0), 2);
      closure_5 = tmp7[1];
      const tmp8 = first(noop.useState(false), 2);
      const setMediaModalOpen = tmp8[1];
      const ref = noop.useRef(null);
      memo = noop.useMemo(() => game(stateFromStores[7]).getCarouselPreviewPixelSize(), []);
      const items1 = [game];
      const callback = noop.useCallback((nativeEvent) => {
        closure_4(nativeEvent.nativeEvent.layout.width);
      }, []);
      const memo1 = noop.useMemo(() => GameProfileMediaSources.buildMediaEntries(game), items1);
      const items2 = [first];
      const memo2 = noop.useMemo(
        () => Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, first - PX_12 - 2 * PX_16)),
        items2,
      );
      const items3 = [memo2];
      const memo3 = noop.useMemo(
        () =>
          Math.min(
            GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT,
            memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO,
          ),
        items3,
      );
      const items4 = [memo1, memo];
      const memo4 = noop.useMemo(() => GameProfileMediaSources.buildMediaViewerSources(memo1, memo), items4);
      const items5 = [memo1, first, memo2];
      const memo5 = noop.useMemo(
        () => memo1.map((item, index) => Math.max(0, index * (memo2 + memo5) - (first - memo2 - 2 * callback2) / 2)),
        items5,
      );
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
      let num = -1;
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
          const size = {
            url: null,
            posterUrl: null,
            active: null,
            reducedMotion: null,
            index: null,
            sources: null,
            trackAction: null,
            width: null,
            height: null,
            onScrollToIndex: null,
            setMediaModalOpen: null,
          };
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
          let tmp9 = v65535(closure_22, size);
        } else {
          const size1 = {
            url: item.previewUrl,
            index,
            sources: memo4,
            trackAction,
            width: memo2,
            height: memo3,
            onScrollToIndex: callback2,
            setMediaModalOpen,
          };
          tmp9 = v65535(closure_21, size1);
        }
        return tmp9;
      }, items8);
      let tmp28Result2 = null;
      if (0 !== memo1.length) {
        const obj4 = { style: tmp.container, onLayout: callback, children: null };
        let tmp28Result = memo2 > 0;
        if (tmp28Result) {
          const obj5 = {
            ref,
            horizontal: true,
            renderScrollComponent: trackAction(tmp3[19]),
            style: tmp.list,
            overrideProps: null,
            data: null,
            extraData: null,
            renderItem: null,
            keyExtractor: null,
            getItemType: null,
            drawDistance: null,
            showsHorizontalScrollIndicator: false,
            ItemSeparatorComponent: null,
            ListHeaderComponent: null,
            ListFooterComponent: null,
            decelerationRate: "fast",
            snapToOffsets: null,
            snapToStart: false,
            snapToEnd: false,
            onMomentumScrollEnd: null,
          };
          const obj6 = { style: tmp.list };
          obj5.overrideProps = obj6;
          obj5.data = memo1;
          obj5.extraData = tmp19;
          obj5.renderItem = callback3;
          obj5.keyExtractor = keyExtractor;
          obj5.getItemType = getItemType;
          obj5.drawDistance = num;
          obj5.ItemSeparatorComponent = ItemSeparatorComponent;
          obj5.ListHeaderComponent = ListFooterComponent;
          obj5.ListFooterComponent = ListFooterComponent;
          obj5.snapToOffsets = memo5;
          obj5.onMomentumScrollEnd = callback1;
          tmp28Result = tmp28(tmp2(tmp3[18]).FlashList, obj5);
        }
        obj4.children = tmp28Result;
        tmp28Result2 = tmp28(closure_5, obj4);
      }
      return tmp28Result2;
    };
