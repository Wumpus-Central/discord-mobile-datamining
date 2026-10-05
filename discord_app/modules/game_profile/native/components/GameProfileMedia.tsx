// discord_app/modules/game_profile/native/components/GameProfileMedia.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import openMediaModal from "../../../media_viewer/native/components/openMediaModal.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileMediaSources from "GameProfileMediaSources.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
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
let react = react_mod;
({ View: hasOwnProperty, Image: metroRequire, Pressable: metroImportDefault, StyleSheet } = react_native);
let NOOP = Constants.NOOP;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_15 = 2 * (GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH + PX_12);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  list: { overflow: "visible" },
  separator: { width: PX_12 },
  listPadding: { width: PX_16 },
  mediaItem: obj3,
  mediaImage: { width: "100%", height: "100%", resizeMode: "cover" },
  mediaVideo: size,
  reducedMotionPoster: obj4,
  playIconWrapper: obj5,
};
obj2 = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  maxWidth: GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH,
  maxHeight: GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj4 = { resizeMode: "cover" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { alignItems: "center", justifyContent: "center" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_16();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = authStore(hasOwnProperty, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_16().separator };
      return authStore(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_16();
      if (cResult[0] !== tmp2.listPadding) {
        const obj2 = { style: tmp2.listPadding };
        const tmp6 = authStore(hasOwnProperty, obj2);
        cResult[0] = tmp2.listPadding;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_16().listPadding };
      return authStore(hasOwnProperty, obj);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (sources) => {
        let height;
        let index;
        let onScrollToIndex;
        let trackAction;
        let url;
        let width;
        let obj = index(trackAction[10]);
        const cResult = obj.c(21);
        ({ url, index } = sources);
        sources = sources.sources;
        trackAction = sources.trackAction;
        ({ width, height, onScrollToIndex } = sources);
        const setMediaModalOpen = sources.setMediaModalOpen;
        const tmp2 = closure_16();
        const ref = setMediaModalOpen.useRef(null);
        if (cResult[0] === index) {
          if (cResult[1] === onScrollToIndex) {
            if (cResult[2] === setMediaModalOpen) {
              if (cResult[3] === sources) {
                let tmp4;
                if (cResult[4] === trackAction) {
                  tmp4 = cResult[5];
                }
                if (cResult[6] === height) {
                  let tmp5;
                  if (cResult[7] === width) {
                    tmp5 = cResult[8];
                  }
                  if (cResult[9] === tmp2.mediaItem) {
                    let tmp6;
                    let tmp7;
                    if (cResult[10] === tmp5) {
                      tmp6 = cResult[11];
                    }
                    if (cResult[12] !== url) {
                      let obj2 = { uri: url };
                      cResult[12] = url;
                      cResult[13] = obj2;
                      tmp7 = obj2;
                    } else {
                      tmp7 = cResult[13];
                    }
                    if (cResult[14] === tmp2.mediaImage) {
                      let tmp8;
                      if (cResult[15] === tmp7) {
                        tmp8 = cResult[16];
                      }
                      if (cResult[17] === tmp4) {
                        if (cResult[18] === tmp6) {
                          let tmp12;
                          if (cResult[19] === tmp8) {
                            tmp12 = cResult[20];
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
                size = { width, height };
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
          const obj = openMediaModal;
          const obj2 = {
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
          };
          obj.openMediaModal(obj2);
        };
        cResult[0] = index;
        cResult[1] = onScrollToIndex;
        cResult[2] = setMediaModalOpen;
        cResult[3] = sources;
        cResult[4] = trackAction;
        cResult[5] = fn;
        tmp4 = fn;
      }
    : (index) => {
        let height;
        let items1;
        let obj2;
        let url;
        let width;
        index = index.index;
        const sources = index.sources;
        const trackAction = index.trackAction;
        const onScrollToIndex = index.onScrollToIndex;
        const setMediaModalOpen = index.setMediaModalOpen;
        ({ url, width, height } = index);
        const tmp = closure_16();
        const ref = setMediaModalOpen.useRef(null);
        const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
        let obj = {
          ref,
          style: items1,
          onPress: setMediaModalOpen.useCallback(() => {
            trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
            setMediaModalOpen(true);
            const obj = openMediaModal;
            const obj2 = {
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
            };
            obj.openMediaModal(obj2);
          }, items),
          children: closure_10(closure_6, obj2),
        };
        items1 = [tmp.mediaItem, { width, height }];
        obj2 = { source: { uri: url }, style: tmp.mediaImage };
        return closure_10(closure_7, obj);
      },
);
let closure_22 = react.memo((sources) => {
  let active;
  let height;
  let index;
  let intl;
  let items1;
  let items2;
  let obj5;
  let obj8;
  let posterUrl;
  let reducedMotion;
  let tmp8Result;
  let url;
  let width;
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
    ref.current = current;
  }, []);
  const useRef = setMediaModalOpen.useRef;
  let obj = index(trackAction[13]);
  const ref1 = useRef(obj.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  let obj2 = {
    ref,
    style: items1,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      const obj = openMediaModal;
      const obj2 = {
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
      };
      obj.openMediaModal(obj2);
    }, items),
    accessibilityLabel: intl.string(index(trackAction[14]).t.oRN0Og),
    children: tmp8Result,
  };
  items1 = [tmp.mediaItem, { width, height }];
  intl = index(trackAction[14]).intl;
  if (reducedMotion) {
    const obj4 = { source: obj5, style: tmp.reducedMotionPoster, accessibilityIgnoresInvertColors: true };
    const obj3 = { children: items2 };
    obj5 = { uri: posterUrl };
    items2 = [closure_10(ref, obj4)];
    const obj6 = {
      style: tmp.playIconWrapper,
      pointerEvents: "none",
      children: closure_10(index(trackAction[15]).CirclePlayIcon, {
        size: "md",
        color: "white",
        secondaryColor: "black",
      }),
    };
    items2[1] = closure_10(ref, obj6);
    tmp8Result = closure_12(closure_11, obj3);
  } else {
    const obj7 = {
      style: tmp.mediaVideo,
      source: obj8,
      poster: posterUrl,
      posterResizeMode: "cover",
      paused: !active,
      muted: true,
      resizeMode: "cover",
      pauseWhileAppInactive: true,
      controls: ref1.current,
    };
    obj8 = { uri: url };
    tmp8Result = closure_10(index(tmp5[13]).VideoComponent, obj7);
  }
  return closure_10(closure_7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_3;
      let game;
      let length;
      let mediaViewerSources;
      let onScrollToIndex;
      let setMediaModalOpen;
      let tmp10;
      let tmp14;
      let tmp22;
      let tmp5;
      let tmp6;
      let trackAction;
      let obj = trackAction(576);
      const cResult = obj.c(44);
      ({ game, trackAction } = arg0);
      let tmp4 = closure_16();
      const obj2 = trackAction(8356);
      const obscured = obj2.useObscuredSurface().obscured;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [mediaViewerSources];
        const fn = function s() {
          return mediaViewerSources.useReducedMotion;
        };
        let num = 0;
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = trackAction(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      let tmp9 = _slicedToArray(react.useState(0), 2);
      [tmp10, dependencyMap] = tmp9;
      [, _slicedToArray] = react.useState(0);
      [, react] = react.useState(false);
      const ref = react.useRef(null);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult2 = trackAction(8367);
        const carouselPreviewPixelSize = tmpResult2.getCarouselPreviewPixelSize();
        cResult[2] = carouselPreviewPixelSize;
        tmp14 = carouselPreviewPixelSize;
      } else {
        tmp14 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
        let num3 = 3;
        cResult[3] = F;
      } else {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[4] !== game) {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
        const mediaEntries = obj5.buildMediaEntries(game);
        cResult[4] = game;
        cResult[5] = mediaEntries;
      } else {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      const bound = Math.max(0, Math.min(trackAction(8367).MEDIA_ITEM_MAX_WIDTH, tmp10 - PX_12 - 2 * PX_16));
      const height = min(trackAction(8367).MEDIA_ITEM_MAX_HEIGHT, bound / trackAction(8367).MEDIA_ITEM_ASPECT_RATIO);
      min(trackAction(8367).MEDIA_ITEM_MAX_HEIGHT, bound / trackAction(8367).MEDIA_ITEM_ASPECT_RATIO);
      if (cResult[6] !== arr2) {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
        mediaViewerSources = obj6.buildMediaViewerSources(arr2, tmp14);
        cResult[6] = arr2;
        cResult[7] = mediaViewerSources;
        tmp22 = mediaViewerSources;
      } else {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      mediaViewerSources = tmp22;
      const result = (tmp10 - bound - 2 * PX_16) / 2;
      NOOP = result;
      const sum = bound + PX_12;
      let closure_10 = sum;
      if (cResult[8] === sum) {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[12] === sum) {
        class F {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.width);
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
          return Math.max(0, arg1 * closure_10 - NOOP);
        }
      }
      cResult[12] = sum;
      cResult[13] = result;
      cResult[14] = Q;
    }
  : (game) => {
      let closure_4;
      let obj6;
      let tmp30Result;
      game = game.game;
      const trackAction = game.trackAction;
      let stateFromStores;
      let first;
      react = undefined;
      let memo;
      const tmp = closure_16();
      let tmp3 = stateFromStores;
      let tmp2 = game;
      let obj = game(stateFromStores[16]);
      const obscured = obj.useObscuredSurface().obscured;
      const obj2 = game(stateFromStores[17]);
      const items = [memo];
      stateFromStores = obj2.useStateFromStores(items, () => memo.useReducedMotion);
      const tmp5 = first(react.useState(0), 2);
      first = tmp5[0];
      const obj3 = react;
      react = tmp5[1];
      const tmp7 = first(react.useState(0), 2);
      let closure_5 = tmp7[1];
      const first1 = tmp7[0];
      let tmp9 = first(react.useState(false), 2);
      const setMediaModalOpen = tmp9[1];
      const first2 = tmp9[0];
      const ref = react.useRef(null);
      memo = react.useMemo(() => {
        const obj = game(stateFromStores[7]);
        return obj.getCarouselPreviewPixelSize();
      }, []);
      const items1 = [game];
      const callback = react.useCallback((nativeEvent) => {
        closure_4(nativeEvent.nativeEvent.layout.width);
      }, []);
      const memo1 = react.useMemo(() => {
        const obj = GameProfileMediaSources;
        return obj.buildMediaEntries(game);
      }, items1);
      const items2 = [first];
      const memo2 = react.useMemo(
        () => Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, first - PX_12 - 2 * PX_16)),
        items2,
      );
      const items3 = [memo2];
      const memo3 = react.useMemo(() => {
        return min(
          GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT,
          memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO,
        );
      }, items3);
      const items4 = [memo1, memo];
      const memo4 = react.useMemo(() => {
        const obj = GameProfileMediaSources;
        return obj.buildMediaViewerSources(memo1, memo);
      }, items4);
      const items5 = [memo1, first, memo2];
      const memo5 = react.useMemo(
        () => memo1.map((item, index) => Math.max(0, index * (memo2 + memo5) - (first - memo2 - 2 * callback2) / 2)),
        items5,
      );
      const items6 = [memo5];
      const items7 = [memo5];
      const callback1 = react.useCallback((nativeEvent) => {
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
      const callback2 = react.useCallback((arg0) => {
        if (null != memo5[arg0]) {
          const current = ref.current;
          if (current != null) {
            const obj = { offset: memo5[arg0], animated: false };
            current.scrollToOffset(obj);
          }
        }
        closure_5(arg0);
      }, items7);
      let num = -1;
      if (!obscured) {
        num = -1;
        if (!first2) {
          num = -1;
          if (!stateFromStores) {
            num = first1;
          }
        }
      }
      const items8 = [num, memo4, trackAction, memo2, memo3, callback2, stateFromStores];
      const items9 = [num, memo2, memo3, memo4, stateFromStores];
      const callback3 = obj3.useCallback((arg0) => {
        let index;
        let item;
        let tmp9;
        ({ item, index } = arg0);
        if ("trailer" === item.type) {
          size = {
            url: null,
            posterUrl: null,
            active: index === num,
            reducedMotion: stateFromStores,
            index,
            sources: memo4,
            trackAction,
            width: memo2,
            height: memo3,
            onScrollToIndex: callback2,
            setMediaModalOpen,
          };
          ({ originalUrl: obj2.url, previewUrl: obj2.posterUrl } = item);
          tmp9 = authStore(closure_22, size);
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
          tmp9 = authStore(closure_21, size1);
        }
        return tmp9;
      }, items8);
      let tmp30Result2 = null;
      if (0 !== memo1.length) {
        const obj4 = { style: tmp.container, onLayout: callback, children: tmp30Result };
        tmp30Result = memo2 > 0;
        const tmp31 = closure_5;
        if (tmp30Result) {
          const obj5 = {
            ref,
            horizontal: true,
            renderScrollComponent: trackAction(tmp3[19]),
            style: tmp.list,
            overrideProps: obj6,
            data: memo1,
            extraData: tmp21,
            renderItem: callback3,
            keyExtractor,
            getItemType,
            drawDistance: num,
            showsHorizontalScrollIndicator: false,
            ItemSeparatorComponent,
            ListHeaderComponent: ListFooterComponent,
            ListFooterComponent,
            decelerationRate: "fast",
            snapToOffsets: memo5,
            snapToStart: false,
            snapToEnd: false,
            onMomentumScrollEnd: callback1,
          };
          const FlashList = tmp2(tmp3[18]).FlashList;
          obj6 = { style: tmp.list };
          tmp30Result = tmp30(FlashList, obj5);
        }
        tmp30Result2 = tmp30(tmp31, obj4);
      }
      return tmp30Result2;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default tmp8;
