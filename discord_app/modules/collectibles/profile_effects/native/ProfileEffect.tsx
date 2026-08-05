import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useProfileEffect } from "../useProfileEffect.tsx";
import { sortEffectLayers } from "../utils.tsx";
// discord_app/modules/collectibles/profile_effects/native/ProfileEffect.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "useProfileEffect";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import getState from "getState";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function StaticEffect(useThumbnail) {
  let accessibilityLabel;
  let bannerAdjustment;
  let c0;
  let c3;
  let profileEffect;
  let thumbnailPreviewSrc;
  let tmp3;
  let tmp8;
  ({ profileEffect, bannerAdjustment } = useThumbnail);
  if (bannerAdjustment === undefined) {
    bannerAdjustment = 0;
  }
  useThumbnail = useThumbnail.useThumbnail;
  c0 = useThumbnail;
  let thumbnailUrlOverride = useThumbnail.thumbnailUrlOverride;
  let reducedMotionSrc;
  let dependencyMap;
  let callback;
  thumbnailUrlOverride = undefined;
  const tmp = callback2();
  reducedMotionSrc = profileEffect.reducedMotionSrc;
  c0 = undefined;
  let obj = thumbnailUrlOverride;
  ({ thumbnailPreviewSrc, accessibilityLabel } = profileEffect);
  [tmp3, c0] = callback(thumbnailUrlOverride.useState(0), 2);
  const height = reducedMotionSrc(1474)().height;
  callback = thumbnailUrlOverride.useCallback((nativeEvent) => {
    memo(nativeEvent.nativeEvent.layout.width);
  }, []);
  dependencyMap = tmp3;
  const tmp2 = callback(thumbnailUrlOverride.useState(0), 2);
  const tmp4 = reducedMotionSrc;
  [tmp8, c3] = callback(thumbnailUrlOverride.useState(0), 2);
  if (thumbnailUrlOverride == null) {
    thumbnailUrlOverride = thumbnailPreviewSrc;
  }
  const items = [reducedMotionSrc, thumbnailUrlOverride, tmp3, useThumbnail];
  const effect = obj.useEffect(() => {
    if (0 !== c2) {
      const size = outer1_6.getSize(c0 ? thumbnailUrlOverride : reducedMotionSrc, (arg0, arg1) => {
        callback(arg1 * (closure_2 / arg0));
      }, () => {
        callback(closure_2 / outer1_0(outer1_2[15]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  }, items);
  if (0 === tmp8) {
    obj = { style: null, pointerEvents: "none", onLayout: null };
    obj[0] = tmp.profileEffects;
    obj[2] = callback;
  } else {
    obj = { style: null, pointerEvents: "none", onLayout: null, children: null };
    obj[0] = tmp.profileEffects;
    obj[2] = callback;
    if (useThumbnail) {
      reducedMotionSrc = thumbnailUrlOverride;
    }
    const obj1 = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: null, alt: null, height: null, width: null, style: null };
    const obj2 = { uri: null };
    obj2[0] = reducedMotionSrc;
    obj1[3] = obj2;
    obj1[4] = accessibilityLabel;
    obj1[5] = tmp8;
    obj1[6] = tmp3;
    const items1 = [tmp.effect, ];
    const obj3 = { width: null, height: null, top: null };
    obj3[0] = tmp3;
    obj3[1] = tmp8;
    obj3[2] = 0 - bannerAdjustment;
    items1[1] = obj3;
    obj1[7] = items1;
    obj[3] = tmp10(tmp4(5236), obj1);
    const tmp4Result = tmp4(5236);
  }
  return <closure_5 {...obj} />;
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
let closure_10 = createCacheKey.createStyles({ profileEffects: { position: "absolute", width: "100%", top: 0, bottom: 0, left: 0, right: 0, flex: 1, justifyContent: "flex-start" }, effect: { position: "absolute" } });
function ProfileEffect(profileEffect) {
  let c10;
  let c11;
  let replayOnNavigationFocus;
  let style;
  profileEffect = profileEffect.profileEffect;
  let memo = profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  let memo1 = style;
  const paused = profileEffect.paused;
  let dependencyMap = paused;
  let ref;
  let React;
  let accessibilityLabel;
  memo = undefined;
  ref = undefined;
  let getState;
  let jsx;
  let callback2;
  c11 = undefined;
  let closure_12;
  let closure_13;
  let closure_14;
  let stop;
  let reset;
  let stateFromStores;
  let closure_18;
  const tmp = callback2();
  ref = tmp;
  memo = undefined;
  const tmp2 = ref(React.useState(0), 2);
  memo = tmp2[1];
  const height = memo1(1474)().height;
  React = tmp2[0];
  accessibilityLabel = profileEffect.accessibilityLabel;
  let items = [profileEffect.effects];
  const callback = React.useCallback((nativeEvent) => {
    memo(nativeEvent.nativeEvent.layout.width);
  }, []);
  memo = React.useMemo(() => memo(ref[8]).sortEffectLayers(memo.effects), items);
  memo1 = undefined;
  dependencyMap = undefined;
  ref = undefined;
  const items1 = [memo];
  memo1 = React.useMemo(() => new Set(memo.map((src) => src.src)), items1);
  dependencyMap = React.useRef(memo1);
  ref = React.useRef(false);
  const items2 = [memo1];
  const effect = React.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items2);
  getState = React.useCallback((arg0) => {
    if (!ref.current) {
      const current = ref.current;
      current.delete(arg0);
      if (0 === ref.current.size) {
        tmp.current = true;
      }
    }
  }, []);
  jsx = React.useRef(-memo(9299).PROFILE_EFFECT_INTRO_DELAY);
  [c10, c11] = ref(React.useState([]), 2);
  closure_12 = React.useRef([]);
  closure_13 = React.useRef(false);
  closure_14 = React.useRef(memo);
  const items3 = [memo];
  const effect1 = React.useEffect(() => {
    closure_14.current = memo;
    closure_13.current = false;
    closure_9.current = -memo(ref[9]).PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((start) => outer1_0(outer1_2[10]).shouldAnimate(start, ref.current));
    closure_12.current = mapped;
    _undefined2(mapped);
  }, items3);
  const items4 = [ref];
  const tmp7 = ref(React.useState([]), 2);
  const tmp9Result = memo1(9302)(React.useCallback((arg0) => {
    if (ref.current) {
      if (!ref4.current) {
        tmp.current = true;
        ref2.current = -memo(ref[9]).PROFILE_EFFECT_INTRO_DELAY;
        ref3.current = [];
      }
      ref2.current = ref2.current + arg0;
      const current = ref5.current;
      const current1 = ref3.current;
      let closure_1 = current.length !== current1.length;
      const mapped = current.map((start) => {
        const shouldAnimateResult = memo(table[10]).shouldAnimate(start, outer1_9.current);
        if (shouldAnimateResult !== current1[arg1]) {
          let c1 = true;
        }
        return shouldAnimateResult;
      });
      if (closure_1) {
        tmp9.current = mapped;
        _undefined2(mapped);
      }
      tmp9 = ref3;
    }
  }, items4));
  stop = tmp9Result.stop;
  reset = tmp9Result.reset;
  let obj = memo(589);
  const items5 = [getState];
  stateFromStores = obj.useStateFromStores(items5, () => state.getState());
  closure_18 = React.useRef(null);
  const items6 = [stateFromStores, stop, reset];
  const effect2 = React.useEffect(() => {
    if (null !== ref6.current) {
      if (tmp.current !== stateFromStores) {
        if (tmp3 === memo(ref[13]).AppStates.ACTIVE) {
          reset();
        } else {
          stop();
        }
        tmp.current = tmp3;
      }
    } else {
      tmp.current = stateFromStores;
    }
  }, items6);
  const items7 = [paused, stop, reset];
  const effect3 = React.useEffect(() => {
    if (closure_2) {
      stop();
    } else {
      reset();
    }
  }, items7);
  const items8 = [tmp, style];
  obj = {
    style: React.useMemo(() => {
      const items = [ref.profileEffects, memo1];
      return items;
    }, items8),
    pointerEvents: "none",
    onLayout: callback,
    children: memo.map((layerConfig) => {
      let flag = _undefined[arg1];
      const sum = layerConfig.src + arg1;
      if (flag == null) {
        flag = false;
      }
      return ref2(memo1(ref[14]), { layerConfig, animate: flag, paused: ref, width: noop, accessibilityLabel, onLoad: getState, loaded: ref.current }, sum);
    })
  };
  return <accessibilityLabel style={React.useMemo(() => {
    const items = [ref.profileEffects, memo1];
    return items;
  }, items8)} pointerEvents="none" onLayout={callback}>{memo.map((layerConfig) => {
    let flag = _undefined[arg1];
    const sum = layerConfig.src + arg1;
    if (flag == null) {
      flag = false;
    }
    return ref2(memo1(ref[14]), { layerConfig, animate: flag, paused: ref, width: noop, accessibilityLabel, onLoad: getState, loaded: ref.current }, sum);
  })}</accessibilityLabel>;
}
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default function WrappedProfileEffect(skuId) {
  let useThumbnail;
  let thumbnailUrlOverride = skuId;
  let obj = initialize /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp = useProfileEffect(skuId.skuId);
  useThumbnail = sortEffectLayers /* sortEffectLayers */.usePotentiallyRandomizedProfileEffect(tmp);
  if (null == useThumbnail) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!thumbnailUrlOverride.useThumbnail) {
        obj = { profileEffect: null };
        obj[0] = useThumbnail;
        const merged = Object.assign(thumbnailUrlOverride);
        let tmp8 = <ProfileEffect profileEffect={null} />;
      }
    }
    obj = { profileEffect: null, bannerAdjustment: null, useThumbnail: null, thumbnailUrlOverride: null };
    obj[0] = useThumbnail;
    ({ bannerAdjustment: obj4[1], useThumbnail } = thumbnailUrlOverride);
    obj[2] = useThumbnail;
    thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
    obj[3] = thumbnailUrlOverride;
    tmp8 = <StaticEffect profileEffect={null} bannerAdjustment={null} useThumbnail={null} thumbnailUrlOverride={null} />;
  }
};
export const usePreloadProfileEffect = function usePreloadProfileEffect(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => new Set(memo.map((src) => src.src)), items);
  let closure_2 = React.useRef(memo);
  const ref = React.useRef(false);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items1);
  return {
    loaded: ref,
    onLayerLoaded: React.useCallback((arg0) => {
      if (!ref.current) {
        const current = ref.current;
        current.delete(arg0);
        if (0 === ref.current.size) {
          tmp.current = true;
        }
      }
    }, [])
  };
};