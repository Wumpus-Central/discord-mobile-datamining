// discord_app/modules/game_profile/native/components/GameProfileMedia.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import openMediaModal from "../../../media_viewer/native/components/openMediaModal.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileMediaSources from "GameProfileMediaSources.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ImageItem(index) {
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ url, width, height } = index);
  const tmp = closure_10();
  const ref = setMediaModalOpen.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  let obj = {
    ref,
    style: null,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      const obj = {
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
      obj.openMediaModal(obj);
    }, items),
    children: null,
  };
  const items1 = [tmp.mediaItem, { width, height }];
  obj.style = items1;
  obj = { source: { uri: url }, style: tmp.mediaImage };
  obj.children = <closure_6 source={{ uri: url }} style={tmp.mediaImage} />;
  return <closure_7 source={{ uri: url }} style={tmp.mediaImage} />;
}
function TrailerItem(active) {
  active = active.active;
  const index = active.index;
  const sources = active.sources;
  const trackAction = active.trackAction;
  const onScrollToIndex = active.onScrollToIndex;
  const setMediaModalOpen = active.setMediaModalOpen;
  c8 = undefined;
  ({ url, posterUrl, width, height } = active);
  const tmp = closure_10();
  onScrollToIndex.useRef(null);
  const ref = onScrollToIndex.useRef(0);
  [tmp4, c8] = trackAction(onScrollToIndex.useState(0), 2);
  const callback = onScrollToIndex.useCallback((current) => {
    closure_7.current = current;
  }, []);
  let obj = active(sources[10]);
  const ref1 = onScrollToIndex.useRef(obj.createVideoControls(c8));
  let current = ref1.current;
  const subscribe = current.useSubscribe(callback, c8, c8);
  const items = [active];
  const effect = onScrollToIndex.useEffect(() => {
    if (obj.isAndroid()) {
      if (!active) {
        _undefined((arg0) => arg0 + 1);
      }
    }
    const current = ref1.current;
    current.seek(0);
    obj = utils_PlatformUtils;
  }, items);
  const items1 = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  obj = {
    ref,
    style: null,
    onPress: onScrollToIndex.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      const obj = {
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
      obj.openMediaModal(obj);
    }, items1),
    children: null,
  };
  const items2 = [tmp.mediaItem, { width, height }];
  obj.style = items2;
  obj = {
    style: tmp.mediaVideo,
    source: { uri: url },
    poster: posterUrl,
    paused: !active,
    muted: true,
    resizeMode: "cover",
    pauseWhileAppInactive: true,
    controls: ref1.current,
  };
  const tmp10 = ref;
  const tmp3 = trackAction(onScrollToIndex.useState(0), 2);
  let combined;
  if (obj4.isAndroid()) {
    const _HermesInternal = HermesInternal;
    combined = "render-" + tmp4;
  }
  obj.children = ref1(active(sources[10]).VideoComponent, obj, combined);
  return ref1(tmp10, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = {
  container: null,
  scrollView: null,
  scrollViewContent: null,
  mediaItem: null,
  mediaImage: null,
  mediaVideo: null,
};
createStyles = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.scrollView = { flexDirection: "row", overflow: "visible" };
createStyles.scrollViewContent = { gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
const obj1 = { gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
createStyles.mediaItem = {
  maxWidth: fn(8719).MEDIA_ITEM_MAX_WIDTH,
  maxHeight: fn(8719).MEDIA_ITEM_MAX_HEIGHT,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
createStyles.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK };
createStyles.mediaVideo = size;
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  game = game.game;
  const trackAction = game.trackAction;
  let obscured;
  let first;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let memo;
  const tmp = memo();
  let obj = game(obscured[12]);
  obscured = obj.useObscuredSurface().obscured;
  let tmp3 = first(noop.useState(0), 2);
  first = tmp3[0];
  noop = tmp3[1];
  [c5, c6] = first(noop.useState(0), 2);
  let tmp2 = obscured;
  const tmp5 = first(noop.useState(0), 2);
  [c7, c8] = first(noop.useState(false), 2);
  const ref = noop.useRef(null);
  memo = noop.useMemo(() => game(obscured[7]).getCarouselPreviewPixelSize(), []);
  const items = [game];
  const callback = noop.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo1 = noop.useMemo(() => GameProfileMediaSources.buildMediaEntries(game), items);
  const items1 = [first];
  const memo2 = noop.useMemo(() => {
    const diff = first - nativeDefault.space.PX_12;
    return Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, diff - 2 * nativeDefault.space.PX_16));
  }, items1);
  const items2 = [memo2];
  const height = noop.useMemo(
    () =>
      Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO),
    items2,
  );
  const items3 = [memo1, memo];
  const sources = noop.useMemo(() => GameProfileMediaSources.buildMediaViewerSources(memo1, memo), items3);
  const items4 = [memo1, first, memo2];
  const memo3 = noop.useMemo(() => {
    const diff = first - memo2;
    closure_0 = (diff - 2 * nativeDefault.space.PX_16) / 2;
    closure_1 = memo2 + nativeDefault.space.PX_12;
    return memo1.map((item, index) => Math.max(0, index * closure_1 - closure_0));
  }, items4);
  const items5 = [memo3];
  const items6 = [memo3];
  const callback1 = noop.useCallback((nativeEvent) => {
    if (0 !== memo3.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      let num = 1;
      let absolute = Math.abs(memo3[0] - x);
      let num2 = 0;
      let num3 = 0;
      if (1 < memo3.length) {
        do {
          let _Math = Math;
          let absolute1 = Math.abs(memo3[num] - x);
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
        } while (num < memo3.length);
      }
      _undefined(num3);
    }
  }, items5);
  const onScrollToIndex = noop.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      const point = { x: memo3[arg0], y: 0, animated: false };
      current.scrollTo(point);
    }
    _undefined(arg0);
  }, items6);
  let tmp13 = null;
  if (0 !== memo1.length) {
    obj = { style: tmp.container, onLayout: callback, children: null };
    obj = {
      ref,
      showsHorizontalScrollIndicator: false,
      style: null,
      contentContainerStyle: null,
      decelerationRate: "fast",
      snapToOffsets: null,
      snapToStart: false,
      snapToEnd: false,
      onMomentumScrollEnd: null,
      children: null,
    };
    ({ scrollView: obj3.style, scrollViewContent: obj3.contentContainerStyle } = tmp);
    obj.snapToOffsets = memo3;
    obj.onMomentumScrollEnd = callback1;
    obj.children = memo1.map((type, index) => {
      if ("trailer" === type.type) {
        const size = {
          url: null,
          posterUrl: null,
          active: null,
          index: null,
          sources: null,
          trackAction: null,
          width: null,
          height: null,
          onScrollToIndex: null,
          setMediaModalOpen: null,
        };
        ({ originalUrl: obj.url, previewUrl: obj.posterUrl } = type);
        let tmp4 = !obscured;
        if (!obscured) {
          tmp4 = !c7;
        }
        if (tmp4) {
          tmp4 = c5 === index;
        }
        size.active = tmp4;
        size.index = index;
        size.sources = sources;
        size.trackAction = trackAction;
        size.width = memo2;
        size.height = height;
        size.onScrollToIndex = onScrollToIndex;
        size.setMediaModalOpen = setMediaModalOpen;
        const _HermesInternal = HermesInternal;
        let tmpResult = (
          <TrailerItem
            key={"" + type.originalUrl + "-" + index}
            url={null}
            posterUrl={null}
            active={null}
            index={null}
            sources={null}
            trackAction={null}
            width={null}
            height={null}
            onScrollToIndex={null}
            setMediaModalOpen={null}
          />
        );
      } else {
        const size1 = {
          url: type.previewUrl,
          index,
          sources,
          trackAction,
          width: memo2,
          height,
          onScrollToIndex,
          setMediaModalOpen,
        };
        const _HermesInternal2 = HermesInternal;
        tmpResult = (
          <ImageItem
            key={"" + type.originalUrl + "-" + index}
            url={type.previewUrl}
            index={index}
            sources={sources}
            trackAction={trackAction}
            width={memo2}
            height={height}
            onScrollToIndex={onScrollToIndex}
            setMediaModalOpen={setMediaModalOpen}
          />
        );
      }
      return tmpResult;
    });
    obj.children = ref(trackAction(tmp2[13]), obj);
    tmp13 = ref(c5, obj);
    const tmp17 = trackAction(tmp2[13]);
  }
  return tmp13;
}
