// === Module 8718: ImageItem ===

// Module 8718 (ImageItem)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NOOP } from "sum" /* 1085 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function ImageItem(index) {
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  let ref;
  ({ url, width, height } = index);
  const tmp = callback();
  ref = setMediaModalOpen.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  obj = {
    ref,
    style: items1,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(index(trackAction[8]).GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      let obj = index(trackAction[9]);
      obj = {
        initialSources: sources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        onIndexChange(arg0) {
          return callback(arg0);
        },
        onClose() {
          return callback2(false);
        }
      };
      obj.openMediaModal(obj);
    }, items),
    children: <closure_6 {...obj} />
  };
  items1 = [tmp.mediaItem, { width, height }];
  obj = { source: { uri: url }, style: tmp.mediaImage };
  return <closure_7 source={{ uri: url }} style={tmp.mediaImage} />;
}
function TrailerItem(active) {
  active = active.active;
  const index = active.index;
  const sources = active.sources;
  const trackAction = active.trackAction;
  const onScrollToIndex = active.onScrollToIndex;
  const setMediaModalOpen = active.setMediaModalOpen;
  let ref;
  closure_7 = undefined;
  c8 = undefined;
  let ref1;
  ({ url, posterUrl, width, height } = active);
  const tmp = callback();
  ref = onScrollToIndex.useRef(null);
  closure_7 = onScrollToIndex.useRef(0);
  [tmp4, c8] = trackAction(onScrollToIndex.useState(0), 2);
  callback = onScrollToIndex.useCallback((current) => {
    closure_7.current = current;
  }, []);
  let obj = active(sources[10]);
  ref1 = onScrollToIndex.useRef(obj.createVideoControls(c8));
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
  }, items);
  const items1 = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  obj = {
    ref,
    style: items2,
    onPress: onScrollToIndex.useCallback(() => {
      trackAction(active(sources[8]).GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      let obj = active(sources[9]);
      obj = {
        initialSources: sources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        onIndexChange(arg0) {
          return callback(arg0);
        },
        onClose() {
          return callback2(false);
        }
      };
      obj.openMediaModal(obj);
    }, items1),
    children: null
  };
  items2 = [tmp.mediaItem, { width, height }];
  obj = { style: tmp.mediaVideo, source: { uri: url }, poster: posterUrl, paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current };
  const tmp10 = closure_7;
  const tmp3 = trackAction(onScrollToIndex.useState(0), 2);
  let combined;
  if (obj4.isAndroid()) {
    const _HermesInternal = HermesInternal;
    combined = "render-" + tmp4;
  }
  obj[3] = ref1(active(sources[10]).VideoComponent, obj, combined);
  return ref1(tmp10, obj);
}
({ View: c5, Image: closure_6, Pressable: error } = get_ActivityIndicator);
createCacheKey = { container: null, scrollView: null, scrollViewContent: null, mediaItem: null, mediaImage: null, mediaVideo: null };
createCacheKey = { gap: ThemesDefault.space.PX_12, marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", overflow: "visible" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
const obj1 = { gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
createCacheKey[3] = { maxWidth: require("MEDIA_ITEM_MAX_WIDTH").MEDIA_ITEM_MAX_WIDTH, maxHeight: require("MEDIA_ITEM_MAX_WIDTH").MEDIA_ITEM_MAX_HEIGHT, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[4] = { width: "100%", height: "100%", resizeMode: "cover" };
const obj2 = { maxWidth: require("MEDIA_ITEM_MAX_WIDTH").MEDIA_ITEM_MAX_WIDTH, maxHeight: require("MEDIA_ITEM_MAX_WIDTH").MEDIA_ITEM_MAX_HEIGHT, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[5] = { width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BLACK };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj3 = { width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BLACK };
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  game = game.game;
  const trackAction = game.trackAction;
  let obscured;
  let first;
  let React;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let ref;
  let memo;
  let memo1;
  let memo2;
  closure_13 = undefined;
  closure_14 = undefined;
  let memo3;
  closure_16 = undefined;
  let tmp = memo();
  let obj = game(obscured[12]);
  obscured = obj.useObscuredSurface().obscured;
  let tmp3 = first(React.useState(0), 2);
  first = tmp3[0];
  React = tmp3[1];
  [c5, c6] = first(React.useState(0), 2);
  let tmp2 = obscured;
  const tmp5 = first(React.useState(0), 2);
  [c7, c8] = first(React.useState(false), 2);
  ref = React.useRef(null);
  memo = React.useMemo(() => game(obscured[7]).getCarouselPreviewPixelSize(), []);
  const items = [game];
  const callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  memo1 = React.useMemo(() => game(obscured[7]).buildMediaEntries(game), items);
  const items1 = [first];
  memo2 = React.useMemo(() => {
    const diff = first - trackAction(obscured[6]).space.PX_12;
    return Math.max(0, Math.min(game(obscured[7]).MEDIA_ITEM_MAX_WIDTH, diff - 2 * trackAction(obscured[6]).space.PX_16));
  }, items1);
  const items2 = [memo2];
  closure_13 = React.useMemo(() => Math.min(game(obscured[7]).MEDIA_ITEM_MAX_HEIGHT, memo2 / game(obscured[7]).MEDIA_ITEM_ASPECT_RATIO), items2);
  const items3 = [memo1, memo];
  closure_14 = React.useMemo(() => game(obscured[7]).buildMediaViewerSources(memo1, memo), items3);
  const items4 = [memo1, first, memo2];
  memo3 = React.useMemo(() => {
    const diff = first - memo2;
    closure_0 = (diff - 2 * trackAction(obscured[6]).space.PX_16) / 2;
    closure_1 = memo2 + trackAction(obscured[6]).space.PX_12;
    return memo1.map((arg0, arg1) => Math.max(0, arg1 * closure_1 - closure_0));
  }, items4);
  const items5 = [memo3];
  const items6 = [memo3];
  const callback1 = React.useCallback((nativeEvent) => {
    let arr2;
    if (0 !== memo3.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      let num = 1;
      let absolute = Math.abs(arr[0] - x);
      let num2 = 0;
      let num3 = 0;
      if (1 < arr.length) {
        do {
          let _Math = Math;
          arr2 = memo3;
          let absolute1 = Math.abs(memo3[num] - x);
          let tmp2 = num;
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
        } while (num < arr2.length);
      }
      _undefined(num3);
    }
  }, items5);
  closure_16 = React.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x: null, y: 0, animated: false };
      obj[0] = memo3[arg0];
      current.scrollTo(obj);
    }
    _undefined(arg0);
  }, items6);
  let tmp13 = null;
  if (0 !== memo1.length) {
    obj = { style: null, onLayout: null, children: null };
    obj[0] = tmp.container;
    obj[1] = callback;
    obj = { ref: null, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToOffsets: null, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: null, children: null };
    obj[0] = ref;
    ({ scrollView: obj3[2], scrollViewContent: obj3[3] } = tmp);
    obj[5] = memo3;
    obj[8] = callback1;
    obj[9] = memo1.map((type) => {
      if ("trailer" === type.type) {
        let obj = { url: null, posterUrl: null, active: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
        ({ originalUrl: obj[0], previewUrl: obj[1] } = type);
        let tmp4 = !obscured;
        if (!obscured) {
          tmp4 = !c7;
        }
        if (tmp4) {
          tmp4 = c5 === arg1;
        }
        obj[2] = tmp4;
        obj[3] = arg1;
        obj[4] = closure_14;
        obj[5] = trackAction;
        obj[6] = memo2;
        obj[7] = closure_13;
        obj[8] = closure_16;
        obj[9] = c8;
        const _HermesInternal = HermesInternal;
        let tmpResult = ref(memo2, obj, "" + type.originalUrl + "-" + arg1);
        const tmp = ref;
        const tmp2 = memo2;
      } else {
        obj = { url: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
        obj[0] = type.previewUrl;
        obj[1] = arg1;
        obj[2] = closure_14;
        obj[3] = trackAction;
        obj[4] = memo2;
        obj[5] = closure_13;
        obj[6] = closure_16;
        obj[7] = c8;
        const _HermesInternal2 = HermesInternal;
        tmpResult = ref(memo1, obj, "" + type.originalUrl + "-" + arg1);
      }
      return tmpResult;
    });
    obj[2] = ref(trackAction(tmp2[13]), obj);
    tmp13 = ref(c5, obj);
    const tmp17 = trackAction(tmp2[13]);
  }
  return tmp13;
};