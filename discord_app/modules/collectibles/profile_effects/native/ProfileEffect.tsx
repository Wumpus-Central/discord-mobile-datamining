// discord_app/modules/collectibles/profile_effects/native/ProfileEffect.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import useProfileEffectDefault from "../useProfileEffect.tsx";
import utils from "../utils.tsx";
import constants from "../constants.tsx";
import ProfileEffectUtils from "ProfileEffectUtils.tsx";
import ProfileEffectLayerDefault from "ProfileEffectLayer.android.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

require = fn;
function StaticEffect(useThumbnail) {
  ({ profileEffect, bannerAdjustment } = useThumbnail);
  if (bannerAdjustment === undefined) {
    bannerAdjustment = 0;
  }
  useThumbnail = useThumbnail.useThumbnail;
  _slicedToArray = undefined;
  let thumbnailUrlOverride;
  const tmp = closure_10();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  c0 = undefined;
  let obj = thumbnailUrlOverride;
  ({ thumbnailPreviewSrc, accessibilityLabel } = profileEffect);
  [tmp3, c0] = _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  const height = reducedMotionSrc(1477)().height;
  const callback = thumbnailUrlOverride.useCallback((nativeEvent) => {
    memo(nativeEvent.nativeEvent.layout.width);
  }, []);
  dependencyMap = tmp3;
  const tmp2 = _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  const tmp4 = reducedMotionSrc;
  [tmp8, c3] = _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  if (thumbnailUrlOverride == null) {
    thumbnailUrlOverride = thumbnailPreviewSrc;
  }
  const items = [reducedMotionSrc, thumbnailUrlOverride, tmp3, useThumbnail];
  const effect = obj.useEffect(() => {
    if (0 !== c2) {
      size = size.getSize(
        c0 ? thumbnailUrlOverride : reducedMotionSrc,
        (arg0, arg1) => {
          closure_1_3(arg1 * (closure_1_2 / arg0));
        },
        () => {
          closure_1_3(closure_1_2 / c0(c2[15]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
        },
      );
    }
  }, items);
  if (0 === tmp8) {
    obj = { style: tmp.profileEffects, pointerEvents: "none", onLayout: callback };
  } else {
    obj = { style: tmp.profileEffects, pointerEvents: "none", onLayout: callback, children: null };
    if (useThumbnail) {
      reducedMotionSrc = thumbnailUrlOverride;
    }
    size = {
      resizeMode: "cover",
      resizeMethod: "resize",
      enableAnimation: true,
      source: null,
      alt: null,
      height: null,
      width: null,
      style: null,
    };
    const obj1 = { uri: reducedMotionSrc };
    size.source = obj1;
    size.alt = accessibilityLabel;
    size.height = tmp8;
    size.width = tmp3;
    const items1 = [tmp.effect];
    const size1 = { width: tmp3, height: tmp8, top: 0 - bannerAdjustment };
    items1[1] = size1;
    size.style = items1;
    obj.children = tmp10(tmp4(5587), size);
    const tmp4Result = tmp4(5587);
  }
  return <closure_5 {...obj} />;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({
  profileEffects: {
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: "flex-start",
  },
  effect: { position: "absolute" },
});
function ProfileEffect(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  let memo1 = style;
  const paused = profileEffect.paused;
  noop = undefined;
  c10 = undefined;
  c11 = undefined;
  const tmp = c10();
  let ref = tmp;
  const tmp2 = ref(noop.useState(0), 2);
  const height = memo1(1477)().height;
  noop = tmp2[0];
  const accessibilityLabel = profileEffect.accessibilityLabel;
  let items = [profileEffect.effects];
  const callback = noop.useCallback((nativeEvent) => {
    memo(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = noop.useMemo(() => utils.sortEffectLayers(memo.effects), items);
  const items1 = [memo];
  memo1 = noop.useMemo(() => new Set(memo.map((src) => src.src)), items1);
  dependencyMap = noop.useRef(memo1);
  ref = noop.useRef(false);
  const items2 = [memo1];
  const effect = noop.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items2);
  const onLoad = noop.useCallback((arg0) => {
    if (!ref.current) {
      const current = paused.current;
      current.delete(arg0);
      if (0 === paused.current.size) {
        tmp.current = true;
      }
    }
  }, []);
  jsx = noop.useRef(-memo(8803).PROFILE_EFFECT_INTRO_DELAY);
  [c10, c11] = ref(noop.useState([]), 2);
  noop.useRef([]);
  noop.useRef(false);
  noop.useRef(memo);
  const items3 = [memo];
  const effect1 = noop.useEffect(() => {
    closure_14.current = memo;
    closure_13.current = false;
    ref.current = -constants.PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((item) => memo(closure_2[10]).shouldAnimate(item, ref.current));
    closure_12.current = mapped;
    _undefined2(mapped);
  }, items3);
  const items4 = [ref];
  const tmp7 = ref(noop.useState([]), 2);
  const tmp9Result = memo1(8806)(
    noop.useCallback((arg0) => {
      if (ref.current) {
        if (!ref3.current) {
          tmp.current = true;
          ref.current = -memo(paused[9]).PROFILE_EFFECT_INTRO_DELAY;
          ref2.current = [];
        }
        ref.current = ref.current + arg0;
        const current = ref4.current;
        const current1 = ref2.current;
        c1 = current.length !== current1.length;
        const mapped = current.map((item, index) => {
          const shouldAnimateResult = ProfileEffectUtils.shouldAnimate(item, ref.current);
          if (shouldAnimateResult !== current1[index]) {
            c1 = true;
          }
          return shouldAnimateResult;
        });
        if (c1) {
          tmp9.current = mapped;
          _undefined2(mapped);
        }
        tmp9 = ref2;
      }
    }, items4),
  );
  const stop = tmp9Result.stop;
  const reset = tmp9Result.reset;
  let obj = memo(504);
  const items5 = [onLoad];
  const stateFromStores = obj.useStateFromStores(items5, () => onLoad.getState());
  noop.useRef(null);
  const items6 = [stateFromStores, stop, reset];
  const effect2 = noop.useEffect(() => {
    if (null !== ref5.current) {
      if (tmp.current !== stateFromStores) {
        if (tmp3 === ConstantsIOS.AppStates.ACTIVE) {
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
  const effect3 = noop.useEffect(() => {
    if (closure_2) {
      stop();
    } else {
      reset();
    }
  }, items7);
  const items8 = [tmp, style];
  obj = {
    style: noop.useMemo(() => {
      const items = [ref.profileEffects, memo1];
      return items;
    }, items8),
    pointerEvents: "none",
    onLayout: callback,
    children: memo.map((layerConfig, index) => {
      let flag = _undefined[index];
      const sum = layerConfig.src + index;
      if (flag == null) {
        flag = false;
      }
      return jsx(
        ProfileEffectLayerDefault,
        { layerConfig, animate: flag, paused, width, accessibilityLabel, onLoad, loaded: ref.current },
        sum,
      );
    }),
  };
  return (
    <accessibilityLabel
      style={noop.useMemo(() => {
        const items = [ref.profileEffects, memo1];
        return items;
      }, items8)}
      pointerEvents="none"
      onLayout={callback}
    >
      {memo.map((layerConfig, index) => {
        let flag = _undefined[index];
        const sum = layerConfig.src + index;
        if (flag == null) {
          flag = false;
        }
        return jsx(
          ProfileEffectLayerDefault,
          { layerConfig, animate: flag, paused, width, accessibilityLabel, onLoad, loaded: ref.current },
          sum,
        );
      })}
    </accessibilityLabel>
  );
}
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default function WrappedProfileEffect(skuId) {
  let thumbnailUrlOverride = skuId;
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp = useProfileEffectDefault(skuId.skuId);
  useThumbnail = utils.usePotentiallyRandomizedProfileEffect(tmp);
  if (null == useThumbnail) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!thumbnailUrlOverride.useThumbnail) {
        obj = { profileEffect: useThumbnail };
        const merged = Object.assign(thumbnailUrlOverride);
        let tmp8 = <ProfileEffect profileEffect={useThumbnail} />;
      }
    }
    obj = { profileEffect: useThumbnail, bannerAdjustment: null, useThumbnail: null, thumbnailUrlOverride: null };
    ({ bannerAdjustment: obj4.bannerAdjustment, useThumbnail } = thumbnailUrlOverride);
    obj.useThumbnail = useThumbnail;
    thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
    obj.thumbnailUrlOverride = thumbnailUrlOverride;
    tmp8 = (
      <StaticEffect
        profileEffect={useThumbnail}
        bannerAdjustment={null}
        useThumbnail={null}
        thumbnailUrlOverride={null}
      />
    );
  }
}
export const usePreloadProfileEffect = function usePreloadProfileEffect(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => new Set(memo.map((src) => src.src)), items);
  closure_2 = noop.useRef(memo);
  const ref = noop.useRef(false);
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    closure_2.current = memo1;
    ref.current = 0 === memo1.size;
  }, items1);
  return {
    loaded: ref,
    onLayerLoaded: noop.useCallback((arg0) => {
      if (!ref.current) {
        const current = paused.current;
        current.delete(arg0);
        if (0 === paused.current.size) {
          tmp.current = true;
        }
      }
    }, []),
  };
};
