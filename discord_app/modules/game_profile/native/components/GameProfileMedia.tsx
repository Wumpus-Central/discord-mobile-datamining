// discord_app/modules/game_profile/native/components/GameProfileMedia.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOOP } from "../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function ImageItem(index) {
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ url, width, height } = index);
  const tmp = callback();
  const ref = setMediaModalOpen.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  {
    ref,
    style: items1,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(index(trackAction[7]).GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      index(trackAction[8]);
      const obj = {
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
    children: <closure_7 {...obj} />
  };
  items1 = [tmp.mediaItem, { width, height }];
  obj = { source: { uri: url }, style: tmp.mediaImage };
  return <closure_8 source={{ uri: url }} style={tmp.mediaImage} />;
}
function TrailerItem(active) {
  active = active.active;
  const index = active.index;
  const sources = active.sources;
  const trackAction = active.trackAction;
  const onScrollToIndex = active.onScrollToIndex;
  const setMediaModalOpen = active.setMediaModalOpen;
  c8 = undefined;
  let ref1;
  ({ url, posterUrl, width, height } = active);
  const tmp = callback();
  const ref = onScrollToIndex.useRef(null);
  closure_7 = onScrollToIndex.useRef(0);
  [tmp4, c8] = trackAction(onScrollToIndex.useState(0), 2);
  callback = onScrollToIndex.useCallback((current) => {
    closure_7.current = current;
  }, []);
  let obj = active(sources[9]);
  ref1 = onScrollToIndex.useRef(obj.createVideoControls(ref1));
  let current = ref1.current;
  const subscribe = current.useSubscribe(callback, ref1, ref1);
  const items = [active];
  const effect = onScrollToIndex.useEffect(() => {
    if (obj.isAndroid()) {
      if (!active) {
        _undefined((arg0) => arg0 + 1);
      }
    }
    const current = ref1.current;
    current.seek(0);
    obj = active(sources[10]);
  }, items);
  const items1 = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  {
    ref,
    style: items2,
    onPress: onScrollToIndex.useCallback(() => {
      trackAction(active(sources[7]).GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      active(sources[8]);
      const obj = {
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
  const tmp3 = trackAction(onScrollToIndex.useState(0), 2);
  let combined;
  if (obj4.isAndroid()) {
    const _HermesInternal = HermesInternal;
    combined = "render-" + tmp4;
  }
  obj[3] = jsx(active(sources[9]).VideoComponent, { style: tmp.mediaVideo, source: { uri: url }, poster: posterUrl, paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current }, combined);
  return <tmp10 style={tmp.mediaVideo} source={{ uri: url }} poster={posterUrl} paused={!active} muted resizeMode="cover" pauseWhileAppInactive controls={ref1.current} />;
}
({ View: c5, ScrollView: closure_6, Image: error, Pressable: closure_8 } = get_ActivityIndicator);
let c11 = 1920;
const createCacheKey = { gap: ThemesDefault.space.PX_12, marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", overflow: "visible" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
createCacheKey[3] = { maxWidth: 366, maxHeight: 200, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[4] = { width: "100%", height: "100%", resizeMode: "cover" };
createCacheKey[5] = { width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BLACK };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  game = game.game;
  const trackAction = game.trackAction;
  let width;
  let first;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let callback;
  const tmp = callback();
  width = trackAction(width[11])().width;
  let obj = game(width[12]);
  const obscured = obj.useObscuredSurface().obscured;
  let tmp2 = obscured(first.useState(0), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  [c6, c7] = obscured(first.useState(0), 2);
  let tmp4 = obscured(first.useState(0), 2);
  [c8, c9] = obscured(first.useState(false), 2);
  const ref = first.useRef(null);
  let items = [width];
  const tmp7 = obscured(first.useMemo(() => {
    const bound = Math.min(width, first1);
    const obj = game(width[13]);
    const bestMediaProxySize = obj.getBestMediaProxySize(bound * game(width[13]).getDevicePixelRatio());
    const items = [bestMediaProxySize, bestMediaProxySize / 1.83];
    return items;
  }, items), 2);
  const first1 = tmp7[0];
  const items1 = [game, first1, width];
  callback = first.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = first.useMemo(() => {
    if (null == game) {
      let items = [];
    } else {
      let trailers = game.trailers;
      if (trailers == null) {
        trailers = [];
      }
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(trailers.map((item, index) => {
        const obj = { type: "trailer", url: game(width[14]).getAssetURL(item.application_id, item.id, 1920, "mp4"), thumbnailUrl: null };
        const obj2 = game(width[14]);
        ({ application_id, id } = item);
        obj[2] = game(width[14]).getAssetURL(application_id, id, Math.min(closure_2, first1), "webp");
        return obj;
      }), 0);
      let screenshotUrls = game.screenshotUrls;
      if (screenshotUrls == null) {
        screenshotUrls = [];
      }
      arraySpreadResult = HermesBuiltin.arraySpread(screenshotUrls.map((item, index) => ({ type: "image", url: item, thumbnailUrl: item.replace(/size=\d+/g, "size=" + closure_11) })), arraySpreadResult);
    }
    return items;
  }, items1);
  const items2 = [first];
  const memo1 = first.useMemo(() => {
    const diff = first - trackAction(width[6]).space.PX_12;
    return Math.max(0, Math.min(366, diff - 2 * trackAction(width[6]).space.PX_16));
  }, items2);
  const items3 = [memo1];
  closure_15 = first.useMemo(() => Math.min(200, memo1 / 1.83), items3);
  const items4 = [memo, first1, tmp7[1]];
  closure_16 = first.useMemo(() => memo.map((item, index) => {
    let obj = { uri: item.url, videoURI: null, mediaIndex: null, width: null, height: 1080, thumbnail: null, accessoryType: "embed", disableDownload: true };
    let url;
    if ("trailer" === item.type) {
      url = item.url;
    }
    obj[1] = url;
    obj[2] = index;
    obj[3] = first1;
    obj = { width: closure_11, height: closure_12, uri: item.thumbnailUrl };
    obj[5] = obj;
    return obj;
  }), items4);
  const items5 = [memo, first, memo1];
  const memo2 = first.useMemo(() => {
    const diff = first - memo1;
    closure_0 = (diff - 2 * trackAction(width[6]).space.PX_16) / 2;
    closure_1 = memo1 + trackAction(width[6]).space.PX_12;
    return memo.map((item, index) => Math.max(0, index * closure_1 - closure_0));
  }, items5);
  const items6 = [memo2];
  const items7 = [memo2];
  const callback1 = first.useCallback((nativeEvent) => {
    if (0 !== memo2.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      let num = 1;
      let absolute = Math.abs(memo2[0] - x);
      let num2 = 0;
      let num3 = 0;
      if (1 < memo2.length) {
        do {
          let _Math = Math;
          let absolute1 = Math.abs(memo2[num] - x);
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
        } while (num < memo2.length);
      }
      _undefined(num3);
    }
  }, items6);
  closure_18 = first.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x: null, y: 0, animated: false };
      obj[0] = memo2[arg0];
      current.scrollTo(obj);
    }
    _undefined(arg0);
  }, items7);
  let tmp14 = null;
  if (0 !== memo.length) {
    obj = { style: null, onLayout: null, children: null };
    obj[0] = tmp.container;
    obj[1] = callback;
    obj = { ref: null, horizontal: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToOffsets: null, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: null, children: null };
    obj[0] = ref;
    ({ scrollView: obj3[3], scrollViewContent: obj3[4] } = tmp);
    obj[6] = memo2;
    obj[9] = callback1;
    obj[10] = memo.map((item, index) => {
      if ("trailer" === item.type) {
        let obj = { url: null, posterUrl: null, active: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
        ({ url: obj[0], thumbnailUrl: obj[1] } = item);
        let tmp4 = !obscured;
        if (!obscured) {
          tmp4 = !c8;
        }
        if (tmp4) {
          tmp4 = c6 === index;
        }
        obj[2] = tmp4;
        obj[3] = index;
        obj[4] = closure_16;
        obj[5] = trackAction;
        obj[6] = memo1;
        obj[7] = closure_15;
        obj[8] = closure_18;
        obj[9] = c9;
        const _HermesInternal = HermesInternal;
        let tmpResult = ref(memo1, obj, "" + item.url + "-" + index);
      } else {
        obj = { url: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
        obj[0] = item.url;
        obj[1] = index;
        obj[2] = closure_16;
        obj[3] = trackAction;
        obj[4] = memo1;
        obj[5] = closure_15;
        obj[6] = closure_18;
        obj[7] = c9;
        const _HermesInternal2 = HermesInternal;
        tmpResult = ref(memo, obj, "" + item.url + "-" + index);
      }
      return tmpResult;
    });
    obj[2] = ref(c6, obj);
    tmp14 = ref(closure_5, obj);
  }
  return tmp14;
};