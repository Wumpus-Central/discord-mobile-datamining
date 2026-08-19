// discord_app/modules/collectibles/profile_effects/native/ProfileEffect.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useProfileEffectDefault from "../useProfileEffect.tsx";
import sortEffectLayers from "../utils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import getState from "../../../../stores/native/AppStateStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function StaticEffect(useThumbnail) {
  ({ profileEffect, bannerAdjustment } = useThumbnail);
  if (bannerAdjustment === undefined) {
    bannerAdjustment = 0;
  }
  useThumbnail = useThumbnail.useThumbnail;
  let callback;
  let thumbnailUrlOverride;
  const tmp = callback2();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  c0 = undefined;
  let obj = thumbnailUrlOverride;
  ({ thumbnailPreviewSrc, accessibilityLabel } = profileEffect);
  [tmp3, c0] = callback(thumbnailUrlOverride.useState(0), 2);
  const height = reducedMotionSrc(1494)().height;
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
      const size = closure_1_6.getSize(c0 ? thumbnailUrlOverride : reducedMotionSrc, (arg0, arg1) => {
        callback(arg1 * (closure_2 / arg0));
      }, () => {
        callback(closure_2 / closure_1_0(closure_1_2[15]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
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
    obj1 = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: null, alt: null, height: null, width: null, style: null };
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
    obj[3] = jsx(tmp4(5449), { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: null, alt: null, height: null, width: null, style: null });
    const tmp4Result = tmp4(5449);
  }
  return <closure_5 {...obj} />;
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
let closure_10 = createCacheKey.createStyles({ profileEffects: { position: "absolute", width: "100%", top: 0, bottom: 0, left: 0, right: 0, flex: 1, justifyContent: "flex-start" }, effect: { position: "absolute" } });
function ProfileEffect(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  let memo1 = style;
  const paused = profileEffect.paused;
  let React;
  let callback2;
  c11 = undefined;
  const tmp = callback2();
  let ref = tmp;
  const tmp2 = ref(React.useState(0), 2);
  const height = memo1(1494)().height;
  React = tmp2[0];
  const accessibilityLabel = profileEffect.accessibilityLabel;
  let items = [profileEffect.effects];
  const callback = React.useCallback((nativeEvent) => {
    memo(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = React.useMemo(() => memo(ref[8]).sortEffectLayers(memo.effects), items);
  const items1 = [memo];
  memo1 = React.useMemo(() => new Set(memo.map((item, index) => item.src)), items1);
  dependencyMap = React.useRef(memo1);
  ref = React.useRef(false);
  const items2 = [memo1];
  const effect = React.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items2);
  closure_8 = React.useCallback((arg0) => {
    if (!ref.current) {
      const current = ref.current;
      current.delete(arg0);
      if (0 === ref.current.size) {
        tmp.current = true;
      }
    }
  }, []);
  jsx = React.useRef(-memo(9212).PROFILE_EFFECT_INTRO_DELAY);
  [c10, c11] = ref(React.useState([]), 2);
  closure_12 = React.useRef([]);
  closure_13 = React.useRef(false);
  closure_14 = React.useRef(memo);
  const items3 = [memo];
  const effect1 = React.useEffect(() => {
    closure_14.current = memo;
    closure_13.current = false;
    closure_9.current = -memo(ref[9]).PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((item, index) => memo(closure_1_2[10]).shouldAnimate(item, ref.current));
    closure_12.current = mapped;
    _undefined2(mapped);
  }, items3);
  const items4 = [ref];
  const tmp7 = ref(React.useState([]), 2);
  const tmp9Result = memo1(9215)(React.useCallback((arg0) => {
    if (ref.current) {
      if (!ref4.current) {
        tmp.current = true;
        ref2.current = -memo(ref[9]).PROFILE_EFFECT_INTRO_DELAY;
        ref3.current = [];
      }
      ref2.current = ref2.current + arg0;
      const current = ref5.current;
      const current1 = ref3.current;
      closure_1 = current.length !== current1.length;
      const mapped = current.map((item, index) => {
        const shouldAnimateResult = memo(table[10]).shouldAnimate(item, closure_1_9.current);
        if (shouldAnimateResult !== current1[index]) {
          c1 = true;
        }
        return shouldAnimateResult;
      });
      if (closure_1) {
        ref3.current = mapped;
        _undefined2(mapped);
      }
    }
  }, items4));
  const stop = tmp9Result.stop;
  const reset = tmp9Result.reset;
  let obj = memo(589);
  const items5 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items5, () => state.getState());
  closure_18 = React.useRef(null);
  const items6 = [stateFromStores, stop, reset];
  const effect2 = React.useEffect(() => {
    if (null !== ref6.current) {
      if (ref6.current !== stateFromStores) {
        if (stateFromStores === memo(ref[13]).AppStates.ACTIVE) {
          reset();
        } else {
          stop();
        }
        ref6.current = stateFromStores;
      }
    } else {
      ref6.current = stateFromStores;
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
    children: memo.map((item, index) => {
      let flag = _undefined[index];
      const sum = item.src + index;
      if (flag == null) {
        flag = false;
      }
      return ref2(memo1(ref[14]), { layerConfig: item, animate: flag, paused: ref, width: closure_4, accessibilityLabel, onLoad: closure_8, loaded: ref.current }, sum);
    })
  };
  return <accessibilityLabel style={React.useMemo(() => {
    const items = [ref.profileEffects, memo1];
    return items;
  }, items8)} pointerEvents="none" onLayout={callback}>{memo.map((item, index) => {
    let flag = _undefined[index];
    const sum = item.src + index;
    if (flag == null) {
      flag = false;
    }
    return ref2(memo1(ref[14]), { layerConfig: item, animate: flag, paused: ref, width: closure_4, accessibilityLabel, onLoad: closure_8, loaded: ref.current }, sum);
  })}</accessibilityLabel>;
}
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default function WrappedProfileEffect(skuId) {
  let thumbnailUrlOverride = skuId;
  let obj = initialize;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp = useProfileEffectDefault(skuId.skuId);
  useThumbnail = sortEffectLayers.usePotentiallyRandomizedProfileEffect(tmp);
  if (null == useThumbnail) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!thumbnailUrlOverride.useThumbnail) {
        obj = { profileEffect: null };
        obj[0] = useThumbnail;
        const merged = Object.assign(thumbnailUrlOverride);
      }
    }
    obj = { profileEffect: null, bannerAdjustment: null, useThumbnail: null, thumbnailUrlOverride: null };
    obj[0] = useThumbnail;
    ({ bannerAdjustment: obj4[1], useThumbnail } = thumbnailUrlOverride);
    obj[2] = useThumbnail;
    thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
    obj[3] = thumbnailUrlOverride;
  }
};
export const usePreloadProfileEffect = function usePreloadProfileEffect(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => new Set(memo.map((item, index) => item.src)), items);
  closure_2 = React.useRef(memo);
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