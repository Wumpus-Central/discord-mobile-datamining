// === Module 9004: ProfileEffect ===

// Module 9004 (ProfileEffect)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useProfileEffectDefault from "useProfileEffect" /* 8352 */;
import utils from "utils" /* 9005 */;
import constants from "constants" /* 9006 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 9007 */;
import ProfileEffectLayerDefault from "ProfileEffectLayer" /* 9010 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import AppStateStore from "AppStateStore" /* 1999 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles({ profileEffects: { position: "absolute", width: "100%", top: 0, bottom: 0, left: 0, right: 0, flex: 1, justifyContent: "flex-start" }, effect: { position: "absolute" } });
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreloadProfileEffect(arr) {
  const cResult = c.c(8);
  if (cResult[0] !== arr) {
    let tmp3 = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function i(src) {
        return src.src;
      };
      cResult[2] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const set = new tmp3.Set(arr.map(tmp4));
    tmp3 = set;
    cResult[0] = arr;
    cResult[1] = set;
  } else {
    let current = tmp2;
    noop.useRef(tmp2);
    const ref = noop.useRef(false);
    if (cResult[3] !== cResult[1]) {
      const fn2 = function o() {
        closure_1.current = current;
        ref.current = 0 === current.size;
      };
      const items = [tmp2];
      cResult[3] = tmp2;
      cResult[4] = fn2;
      cResult[5] = items;
      let tmp12 = items;
      let tmp11 = fn2;
    } else {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    const effect = noop.useEffect(tmp11, tmp12);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function l(arg0) {
        if (!ref.current) {
          current = ref.current;
          current.delete(arg0);
          if (0 === ref.current.size) {
            tmp.current = true;
          }
        }
      };
      cResult[6] = fn3;
      let tmp15 = fn3;
    } else {
      tmp15 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { loaded: ref, onLayerLoaded: tmp15 };
      cResult[7] = obj3;
      let tmp16 = obj3;
    } else {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
}) : (function usePreloadProfileEffect(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => new Set(closure_0.map((src) => src.src)), items);
  noop.useRef(memo);
  const ref = noop.useRef(false);
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    closure_2.current = memo;
    ref.current = 0 === memo.size;
  }, items1);
  return {
    loaded: ref,
    onLayerLoaded: noop.useCallback((arg0) => {
      if (!ref.current) {
        const current = ref.current;
        current.delete(arg0);
        if (0 === ref.current.size) {
          tmp.current = true;
        }
      }
    }, [])
  };
});
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileDimensions() {
  const cResult = c.c(4);
  [tmp3, require] = noop.useState(0);
  const height = useWindowDimensionsDefault().height;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === height) {
    if (cResult[2] === tmp3) {
      let tmp5 = cResult[3];
    }
    return tmp5;
  }
  const size = { height, width: tmp3, onLayout: first };
  cResult[1] = height;
  cResult[2] = tmp3;
  cResult[3] = size;
  tmp5 = size;
}) : (function useProfileDimensions() {
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp[1];
  const size = {
    height: useWindowDimensionsDefault().height,
    width: tmp[0],
    onLayout: noop.useCallback((nativeEvent) => {
      closure_0(nativeEvent.nativeEvent.layout.width);
    }, [])
  };
  return size;
});
function ProfileEffect(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  ({ replayOnNavigationFocus, style } = profileEffect);
  const paused = profileEffect.paused;
  c10 = undefined;
  c11 = undefined;
  let ref2;
  const tmp = c10();
  _slicedToArray = tmp;
  const tmp2 = ref2();
  const width = tmp2.width;
  const accessibilityLabel = profileEffect.accessibilityLabel;
  let items = [profileEffect.effects];
  const memo = width.useMemo(() => utils.sortEffectLayers(profileEffect.effects), items);
  const tmp3 = c11(memo);
  const loaded = tmp3.loaded;
  const onLayerLoaded = tmp3.onLayerLoaded;
  jsx = width.useRef(-profileEffect(paused[11]).PROFILE_EFFECT_INTRO_DELAY);
  [c10, c11] = width.useState([]);
  ref2 = width.useRef([]);
  width.useRef(false);
  width.useRef(memo);
  const items1 = [memo];
  const effect = width.useEffect(() => {
    closure_14.current = memo;
    closure_13.current = false;
    ref.current = -constants.PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((item) => profileEffect(paused[12]).shouldAnimate(item, ref.current));
    closure_12.current = mapped;
    _undefined2(mapped);
  }, items1);
  const items2 = [loaded];
  const tmp4 = _slicedToArray(width.useState([]), 2);
  const tmp6Result = style(paused[13])(width.useCallback((arg0) => {
    if (loaded.current) {
      if (!ref3.current) {
        tmp.current = true;
        ref.current = -profileEffect(paused[11]).PROFILE_EFFECT_INTRO_DELAY;
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
        ref2.current = mapped;
        _undefined2(mapped);
      }
    }
  }, items2));
  const stop = tmp6Result.stop;
  const reset = tmp6Result.reset;
  const tmp6 = style(paused[13]);
  const items3 = [onLayerLoaded];
  const stateFromStores = profileEffect(paused[14]).useStateFromStores(items3, () => onLayerLoaded.getState());
  width.useRef(null);
  const items4 = [stateFromStores, stop, reset];
  const effect1 = width.useEffect(() => {
    if (null !== ref5.current) {
      if (ref5.current !== stateFromStores) {
        if (stateFromStores === ConstantsIOS.AppStates.ACTIVE) {
          reset();
        } else {
          stop();
        }
        ref5.current = stateFromStores;
      }
    } else {
      ref5.current = stateFromStores;
    }
  }, items4);
  const items5 = [paused, stop, reset];
  const effect2 = width.useEffect(() => {
    if (paused) {
      stop();
    } else {
      reset();
    }
  }, items5);
  const items6 = [tmp, style];
  const obj = profileEffect(paused[14]);
  return <accessibilityLabel style={width.useMemo(() => {
    const items = [profileEffects.profileEffects, style];
    return items;
  }, items6)} pointerEvents="none" onLayout={tmp2.onLayout}>{memo.map((layerConfig, index) => {
    let flag = _undefined[index];
    const sum = layerConfig.src + index;
    if (flag == null) {
      flag = false;
    }
    return jsx(ProfileEffectLayerDefault, { layerConfig, animate: flag, paused, width, accessibilityLabel, onLoad: onLayerLoaded, loaded: loaded.current }, sum);
  })}</accessibilityLabel>;
}
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticEffect(thumbnailUrlOverride) {
  const cResult = useThumbnail(width[8]).c(28);
  ({ profileEffect, bannerAdjustment, useThumbnail } = thumbnailUrlOverride);
  let thumbnailPreviewSrc = thumbnailUrlOverride.thumbnailUrlOverride;
  let num = 0;
  if (undefined !== bannerAdjustment) {
    num = bannerAdjustment;
  }
  const tmp3 = closure_10();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  const accessibilityLabel = profileEffect.accessibilityLabel;
  const tmp4 = closure_12();
  width = tmp4.width;
  const onLayout = tmp4.onLayout;
  const obj = useThumbnail(width[8]);
  const obj2 = thumbnailPreviewSrc;
  const tmp = width;
  [tmp6, _slicedToArray] = thumbnailPreviewSrc.useState(0);
  if (thumbnailPreviewSrc == null) {
    thumbnailPreviewSrc = profileEffect.thumbnailPreviewSrc;
  }
  if (cResult[0] === reducedMotionSrc) {
    if (cResult[1] === width) {
      if (cResult[2] === thumbnailPreviewSrc) {
        if (cResult[3] === useThumbnail) {
          let tmp7 = cResult[4];
          let tmp8 = cResult[5];
        }
        const effect = obj2.useEffect(tmp7, tmp8);
        if (0 === tmp6) {
          if (cResult[6] === onLayout) {
            if (cResult[7] === tmp3.profileEffects) {
              let tmp22 = cResult[8];
            }
            return tmp22;
          }
          const obj3 = { style: tmp3.profileEffects, pointerEvents: "none", onLayout };
          const tmp25 = <closure_5 style={tmp3.profileEffects} pointerEvents="none" onLayout={onLayout} />;
          cResult[6] = onLayout;
          cResult[7] = tmp3.profileEffects;
          cResult[8] = tmp25;
          tmp22 = tmp25;
        } else {
          if (useThumbnail) {
            reducedMotionSrc = thumbnailPreviewSrc;
          }
          if (cResult[9] !== reducedMotionSrc) {
            const obj4 = { uri: reducedMotionSrc };
            cResult[9] = reducedMotionSrc;
            cResult[10] = obj4;
            let tmp10 = obj4;
          } else {
            tmp10 = cResult[10];
          }
          const diff = 0 - num;
          if (cResult[11] === tmp6) {
            if (cResult[12] === width) {
              if (cResult[13] === diff) {
                let tmp12 = cResult[14];
              }
              if (cResult[15] === tmp3.effect) {
                if (cResult[16] === tmp12) {
                  let tmp13 = cResult[17];
                }
                if (cResult[18] === accessibilityLabel) {
                  if (cResult[19] === tmp6) {
                    if (cResult[20] === width) {
                      if (cResult[21] === tmp10) {
                        if (cResult[22] === tmp13) {
                          let tmp14 = cResult[23];
                        }
                        if (cResult[24] === onLayout) {
                          if (cResult[25] === tmp3.profileEffects) {
                            if (cResult[26] === tmp14) {
                              let tmp18 = cResult[27];
                            }
                            return tmp18;
                          }
                        }
                        const obj5 = { style: tmp3.profileEffects, pointerEvents: "none", onLayout, children: tmp14 };
                        const tmp21 = <closure_5 style={tmp3.profileEffects} pointerEvents="none" onLayout={onLayout}>{tmp14}</closure_5>;
                        cResult[24] = onLayout;
                        cResult[25] = tmp3.profileEffects;
                        cResult[26] = tmp14;
                        cResult[27] = tmp21;
                        tmp18 = tmp21;
                      }
                    }
                  }
                }
                let size = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: tmp10, accessibilityLabel, height: tmp6, width, style: tmp13 };
                const tmp17 = jsx(reducedMotionSrc(tmp[18]), { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: tmp10, accessibilityLabel, height: tmp6, width, style: tmp13 });
                cResult[18] = accessibilityLabel;
                cResult[19] = tmp6;
                cResult[20] = width;
                cResult[21] = tmp10;
                cResult[22] = tmp13;
                cResult[23] = tmp17;
                tmp14 = tmp17;
              }
              const items = [tmp3.effect, tmp12];
              cResult[15] = tmp3.effect;
              cResult[16] = tmp12;
              cResult[17] = items;
              tmp13 = items;
            }
          }
          const size1 = { width, height: tmp6, top: diff };
          cResult[11] = tmp6;
          cResult[12] = width;
          cResult[13] = diff;
          cResult[14] = size1;
          tmp12 = size1;
        }
      }
    }
  }
  const fn = function o() {
    if (0 !== width) {
      const size = timestampProducer.getSize(useThumbnail ? thumbnailPreviewSrc : reducedMotionSrc, (arg0, arg1) => {
        closure_1_3(arg1 * (width / arg0));
      }, () => {
        closure_1_3(closure_1_2 / useThumbnail(width[17]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  };
  const items1 = [reducedMotionSrc, thumbnailPreviewSrc, width, useThumbnail];
  cResult[0] = reducedMotionSrc;
  cResult[1] = width;
  cResult[2] = thumbnailPreviewSrc;
  cResult[3] = useThumbnail;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const tmp5 = _slicedToArray(thumbnailPreviewSrc.useState(0), 2);
}) : (function StaticEffect(useThumbnail) {
  ({ profileEffect, bannerAdjustment } = useThumbnail);
  if (bannerAdjustment === undefined) {
    bannerAdjustment = 0;
  }
  useThumbnail = useThumbnail.useThumbnail;
  _slicedToArray = undefined;
  let thumbnailUrlOverride;
  const tmp = closure_10();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  ({ thumbnailPreviewSrc, accessibilityLabel } = profileEffect);
  const tmp2 = closure_12();
  const width = tmp2.width;
  const onLayout = tmp2.onLayout;
  [tmp4, c3] = thumbnailUrlOverride.useState(0);
  if (thumbnailUrlOverride == null) {
    thumbnailUrlOverride = thumbnailPreviewSrc;
  }
  const items = [reducedMotionSrc, thumbnailUrlOverride, width, useThumbnail];
  const effect = thumbnailUrlOverride.useEffect(() => {
    if (0 !== width) {
      const size = timestampProducer.getSize(useThumbnail ? thumbnailUrlOverride : reducedMotionSrc, (arg0, arg1) => {
        closure_1_3(arg1 * (width / arg0));
      }, () => {
        closure_1_3(closure_1_2 / useThumbnail(width[17]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  }, items);
  if (0 === tmp4) {
    const obj2 = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
    let obj3 = obj2;
  } else {
    obj3 = { style: tmp.profileEffects, pointerEvents: "none", onLayout, children: null };
    if (useThumbnail) {
      reducedMotionSrc = thumbnailUrlOverride;
    }
    let size = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: null, accessibilityLabel: null, height: null, width: null, style: null };
    const obj4 = { uri: reducedMotionSrc };
    size.source = obj4;
    size.accessibilityLabel = accessibilityLabel;
    size.height = tmp4;
    size.width = width;
    const items1 = [tmp.effect, ];
    const size1 = { width, height: tmp4, top: 0 - bannerAdjustment };
    items1[1] = size1;
    size.style = items1;
    obj3.children = jsx(reducedMotionSrc(width[18]), { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: null, accessibilityLabel: null, height: null, width: null, style: null });
    const tmp10 = reducedMotionSrc(width[18]);
  }
  return <closure_5 {...obj3} />;
});
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WrappedProfileEffect(skuId) {
  let useThumbnail = skuId;
  const cResult = c.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = useProfileEffectDefault(skuId.skuId);
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  thumbnailUrlOverride = utils.usePotentiallyRandomizedProfileEffect(tmp4);
  if (null == thumbnailUrlOverride) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!useThumbnail.useThumbnail) {
        if (cResult[7] === thumbnailUrlOverride) {
        }
        const obj2 = { profileEffect: thumbnailUrlOverride };
        const merged = Object.assign(useThumbnail);
        const tmp15 = <ProfileEffect profileEffect={thumbnailUrlOverride} />;
        cResult[7] = thumbnailUrlOverride;
        cResult[8] = useThumbnail;
        cResult[9] = tmp15;
      }
    }
    if (cResult[2] === thumbnailUrlOverride) {
      if (cResult[3] === useThumbnail.bannerAdjustment) {
        if (cResult[4] === useThumbnail.thumbnailUrlOverride) {
        }
      }
    }
    const obj3 = { profileEffect: thumbnailUrlOverride, bannerAdjustment: null, useThumbnail: null, thumbnailUrlOverride: null };
    ({ bannerAdjustment: obj5.bannerAdjustment, useThumbnail: obj5.useThumbnail, thumbnailUrlOverride: obj5.thumbnailUrlOverride } = useThumbnail);
    const tmp19 = <closure_14 profileEffect={thumbnailUrlOverride} bannerAdjustment={null} useThumbnail={null} thumbnailUrlOverride={null} />;
    cResult[2] = thumbnailUrlOverride;
    ({ bannerAdjustment: tmp3[3], thumbnailUrlOverride } = useThumbnail);
    cResult[4] = thumbnailUrlOverride;
    useThumbnail = useThumbnail.useThumbnail;
    cResult[5] = useThumbnail;
    cResult[6] = tmp19;
  }
  const tmpResult2 = utils;
}) : (function WrappedProfileEffect(skuId) {
  let thumbnailUrlOverride = skuId;
  const tmp = useProfileEffectDefault(skuId.skuId);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  useThumbnail = utils.usePotentiallyRandomizedProfileEffect(tmp);
  if (null == useThumbnail) {
    return null;
  } else {
    if (!stateFromStores) {
      if (!thumbnailUrlOverride.useThumbnail) {
        const obj3 = { profileEffect: useThumbnail };
        const merged = Object.assign(thumbnailUrlOverride);
        let tmp8 = <ProfileEffect profileEffect={useThumbnail} />;
      }
    }
    const obj6 = { profileEffect: useThumbnail, bannerAdjustment: null, useThumbnail: null, thumbnailUrlOverride: null };
    ({ bannerAdjustment: obj4.bannerAdjustment, useThumbnail } = thumbnailUrlOverride);
    obj6.useThumbnail = useThumbnail;
    thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
    obj6.thumbnailUrlOverride = thumbnailUrlOverride;
    tmp8 = <closure_14 profileEffect={useThumbnail} bannerAdjustment={null} useThumbnail={null} thumbnailUrlOverride={null} />;
  }
});
export const usePreloadProfileEffect = tmp3;