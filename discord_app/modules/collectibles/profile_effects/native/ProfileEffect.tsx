// === Module 8490: ProfileEffect ===

// Module 8490 (ProfileEffect)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useProfileEffectDefault from "useProfileEffect" /* 7909 */;
import utils from "utils" /* 8491 */;
import profile_effects_constants from "profile_effects/constants" /* 8492 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 8493 */;
import ProfileEffectLayerDefault from "ProfileEffectLayer" /* 8496 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
let jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ profileEffects: { position: "absolute", width: "100%", top: 0, bottom: 0, left: 0, right: 0, flex: 1, justifyContent: "flex-start" }, effect: { position: "absolute" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arr) {
  let tmp11;
  let tmp12;
  let tmp2;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== arr) {
    let tmp4;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function i(src) {
        return src.src;
      };
      cResult[2] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(arr.map(tmp4));
    cResult[0] = arr;
    cResult[1] = set;
    tmp2 = set;
  } else {
    tmp2 = cResult[1];
  }
  let closure_0 = tmp2;
  let closure_1 = react.useRef(tmp2);
  const ref = react.useRef(false);
  if (cResult[3] !== tmp2) {
    const fn2 = function o() {
      closure_1.current = current;
      ref.current = 0 === current.size;
    };
    const items = [tmp2];
    cResult[3] = tmp2;
    cResult[4] = fn2;
    cResult[5] = items;
    tmp9 = items;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const effect = react.useEffect(tmp8, tmp9);
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
    tmp11 = fn3;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { loaded: ref, onLayerLoaded: tmp11 };
    cResult[7] = obj3;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[7];
  }
  return tmp12;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    set = new Set(closure_0.map((src) => src.src));
    return set;
  }, items);
  let closure_2 = react.useRef(memo);
  const ref = react.useRef(false);
  const items1 = [memo];
  const effect = react.useEffect(() => {
    closure_2.current = memo;
    ref.current = 0 === memo.size;
  }, items1);
  const obj = {
    loaded: ref,
    onLayerLoaded: react.useCallback((arg0) => {
      if (!ref.current) {
        const current = ref.current;
        current.delete(arg0);
        if (0 === ref.current.size) {
          tmp.current = true;
        }
      }
    }, [])
  };
  return obj;
});
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let first;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(4);
  [tmp3, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const height = useWindowDimensionsDefault().height;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === height) {
    let tmp5;
    if (cResult[2] === tmp3) {
      tmp5 = cResult[3];
    }
    return tmp5;
  }
  size = { height, width: tmp3, onLayout: first };
  cResult[1] = height;
  cResult[2] = tmp3;
  cResult[3] = size;
  tmp5 = size;
}) : (() => {
  const tmp = _slicedToArray(react.useState(0), 2);
  let closure_0 = tmp[1];
  size = {
    height: useWindowDimensionsDefault().height,
    width: tmp[0],
    onLayout: react.useCallback((nativeEvent) => {
      closure_0(nativeEvent.nativeEvent.layout.width);
    }, [])
  };
  return size;
});
function ProfileEffect(profileEffect) {
  let _undefined;
  let _undefined2;
  let c10;
  let c11;
  let profileEffects;
  let ref;
  let replayOnNavigationFocus;
  let style;
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
  const onLayout = tmp2.onLayout;
  const memo = width.useMemo(() => {
    const obj = utils;
    return obj.sortEffectLayers(profileEffect.effects);
  }, items);
  const tmp3 = c11(memo);
  const loaded = tmp3.loaded;
  const onLayerLoaded = tmp3.onLayerLoaded;
  jsx = width.useRef(-profileEffect(paused[11]).PROFILE_EFFECT_INTRO_DELAY);
  [c10, c11] = width.useState([]);
  _slicedToArray(width.useState([]), 2);
  ref2 = width.useRef([]);
  const ref3 = width.useRef(false);
  const ref4 = width.useRef(memo);
  const items1 = [memo];
  const effect = width.useEffect(() => {
    ref4.current = memo;
    ref3.current = false;
    ref.current = -profile_effects_constants.PROFILE_EFFECT_INTRO_DELAY;
    const mapped = memo.map((item) => {
      const obj = profileEffect(paused[12]);
      return obj.shouldAnimate(item, ref.current);
    });
    ref2.current = mapped;
    _undefined2(mapped);
  }, items1);
  const items2 = [loaded];
  const tmp6 = style(paused[13]);
  const tmp6Result = tmp6(width.useCallback((arg0) => {
    if (loaded.current) {
      if (!ref3.current) {
        tmp.current = true;
        ref.current = -profileEffect(paused[11]).PROFILE_EFFECT_INTRO_DELAY;
        ref2.current = [];
      }
      ref.current = ref.current + arg0;
      const current = ref4.current;
      const current1 = ref2.current;
      let c1 = current.length !== current1.length;
      const mapped = current.map((item, index) => {
        const obj = ProfileEffectUtils;
        const shouldAnimateResult = obj.shouldAnimate(item, ref.current);
        if (shouldAnimateResult !== current1[index]) {
          c1 = true;
        }
        return shouldAnimateResult;
      });
      const tmp11 = c1;
      if (tmp11) {
        ref2.current = mapped;
        _undefined2(mapped);
      }
    }
  }, items2));
  const stop = tmp6Result.stop;
  const reset = tmp6Result.reset;
  let obj = profileEffect(paused[14]);
  const items3 = [onLayerLoaded];
  const stateFromStores = obj.useStateFromStores(items3, () => onLayerLoaded.getState());
  const ref5 = width.useRef(null);
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
  return <accessibilityLabel style={width.useMemo(() => {
    const items = [profileEffects.profileEffects, style];
    return items;
  }, items6)} pointerEvents="none" onLayout={onLayout}>{memo.map((layerConfig, index) => {
    let flag = c10[index];
    const sum = layerConfig.src + index;
    if (flag == null) {
      flag = false;
    }
    return jsx(ProfileEffectLayerDefault, { layerConfig, animate: flag, paused, width, accessibilityLabel, onLoad: onLayerLoaded, loaded: loaded.current }, sum);
  })}</accessibilityLabel>;
}
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((thumbnailUrlOverride) => {
  let bannerAdjustment;
  let profileEffect;
  let tmp6;
  let useThumbnail;
  let width;
  const obj = useThumbnail(width[8]);
  const cResult = obj.c(28);
  ({ profileEffect, bannerAdjustment, useThumbnail } = thumbnailUrlOverride);
  thumbnailUrlOverride = thumbnailUrlOverride.thumbnailUrlOverride;
  let num = 0;
  const tmp = width;
  if (undefined !== bannerAdjustment) {
    num = bannerAdjustment;
  }
  const tmp3 = closure_10();
  let reducedMotionSrc = profileEffect.reducedMotionSrc;
  const accessibilityLabel = profileEffect.accessibilityLabel;
  const thumbnailPreviewSrc = profileEffect.thumbnailPreviewSrc;
  const tmp4 = closure_12();
  width = tmp4.width;
  const onLayout = tmp4.onLayout;
  const tmp5 = _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  [tmp6, _slicedToArray] = tmp5;
  const obj2 = thumbnailUrlOverride;
  if (thumbnailUrlOverride == null) {
    thumbnailUrlOverride = thumbnailPreviewSrc;
  }
  if (cResult[0] === reducedMotionSrc) {
    if (cResult[1] === width) {
      if (cResult[2] === thumbnailUrlOverride) {
        let tmp7;
        let tmp8;
        if (cResult[3] === useThumbnail) {
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        const effect = obj2.useEffect(tmp7, tmp8);
        if (0 === tmp6) {
          if (cResult[6] === onLayout) {
            let tmp22;
            if (cResult[7] === tmp3.profileEffects) {
              tmp22 = cResult[8];
            }
            return tmp22;
          }
          const tmp25 = <closure_5 style={tmp3.profileEffects} pointerEvents="none" onLayout={onLayout} />;
          cResult[6] = onLayout;
          cResult[7] = tmp3.profileEffects;
          cResult[8] = tmp25;
          tmp22 = tmp25;
        } else {
          let tmp10;
          if (useThumbnail) {
            reducedMotionSrc = thumbnailUrlOverride;
          }
          if (cResult[9] !== reducedMotionSrc) {
            const obj4 = { uri: reducedMotionSrc };
            cResult[9] = reducedMotionSrc;
            cResult[10] = obj4;
            tmp10 = obj4;
          } else {
            tmp10 = cResult[10];
          }
          const diff = 0 - num;
          if (cResult[11] === tmp6) {
            if (cResult[12] === width) {
              let tmp12;
              if (cResult[13] === diff) {
                tmp12 = cResult[14];
              }
              if (cResult[15] === tmp3.effect) {
                let tmp13;
                if (cResult[16] === tmp12) {
                  tmp13 = cResult[17];
                }
                if (cResult[18] === accessibilityLabel) {
                  if (cResult[19] === tmp6) {
                    if (cResult[20] === width) {
                      if (cResult[21] === tmp10) {
                        let tmp14;
                        if (cResult[22] === tmp13) {
                          tmp14 = cResult[23];
                        }
                        if (cResult[24] === onLayout) {
                          if (cResult[25] === tmp3.profileEffects) {
                            let tmp18;
                            if (cResult[26] === tmp14) {
                              tmp18 = cResult[27];
                            }
                            return tmp18;
                          }
                        }
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
      size = metroRequire.getSize(useThumbnail ? thumbnailUrlOverride : reducedMotionSrc, (arg0, arg1) => {
        closure_1_3(arg1 * (width / arg0));
      }, () => {
        closure_1_3(closure_1_2 / useThumbnail(width[17]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  };
  const items1 = [reducedMotionSrc, thumbnailUrlOverride, width, useThumbnail];
  cResult[0] = reducedMotionSrc;
  cResult[1] = width;
  cResult[2] = thumbnailUrlOverride;
  cResult[3] = useThumbnail;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((useThumbnail) => {
  let accessibilityLabel;
  let bannerAdjustment;
  let c3;
  let items1;
  let obj3;
  let obj4;
  let profileEffect;
  let thumbnailPreviewSrc;
  let tmp4;
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
  _slicedToArray(thumbnailUrlOverride.useState(0), 2);
  const obj = thumbnailUrlOverride;
  if (thumbnailUrlOverride == null) {
    thumbnailUrlOverride = thumbnailPreviewSrc;
  }
  const items = [reducedMotionSrc, thumbnailUrlOverride, width, useThumbnail];
  const effect = obj.useEffect(() => {
    if (0 !== width) {
      size = metroRequire.getSize(useThumbnail ? thumbnailUrlOverride : reducedMotionSrc, (arg0, arg1) => {
        closure_1_3(arg1 * (width / arg0));
      }, () => {
        closure_1_3(closure_1_2 / useThumbnail(width[17]).DEFAULT_PROFILE_EFFECT_WH_RATIO);
      });
    }
  }, items);
  if (0 === tmp4) {
    obj3 = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
    const obj2 = { style: tmp.profileEffects, pointerEvents: "none", onLayout };
  } else {
    obj3 = { style: tmp.profileEffects, pointerEvents: "none", onLayout, children: null };
    reducedMotionSrc(width[18]);
    if (useThumbnail) {
      reducedMotionSrc = thumbnailUrlOverride;
    }
    size = { resizeMode: "cover", resizeMethod: "resize", enableAnimation: true, source: obj4, accessibilityLabel, height: tmp4, width, style: items1 };
    items1 = [tmp.effect, ];
    const size1 = { width, height: tmp4, top: 0 - bannerAdjustment };
    obj4 = { uri: reducedMotionSrc };
    items1[1] = size1;
  }
  return <closure_5 {...obj3} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = useProfileEffectDefault(skuId.skuId);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult2 = utils;
  const potentiallyRandomizedProfileEffect = tmpResult2.usePotentiallyRandomizedProfileEffect(tmp4);
  let tmp10 = null;
  if (null != potentiallyRandomizedProfileEffect) {
    let tmp11;
    if (!stateFromStores) {
      if (!skuId.useThumbnail) {
        if (cResult[7] === potentiallyRandomizedProfileEffect) {
          if (cResult[8] === skuId) {
            tmp11 = cResult[9];
          }
        }
        const merged = Object.assign(skuId);
        const tmp17 = <ProfileEffect profileEffect={potentiallyRandomizedProfileEffect} />;
        cResult[7] = potentiallyRandomizedProfileEffect;
        cResult[8] = skuId;
        cResult[9] = tmp17;
        tmp11 = tmp17;
      }
      tmp10 = tmp11;
    }
    if (cResult[2] === potentiallyRandomizedProfileEffect) {
      if (cResult[3] === skuId.bannerAdjustment) {
        if (cResult[4] === skuId.thumbnailUrlOverride) {
          let tmp18;
          if (cResult[5] === skuId.useThumbnail) {
            tmp18 = cResult[6];
          }
          tmp11 = tmp18;
        }
      }
    }
    ({ bannerAdjustment: obj5.bannerAdjustment, useThumbnail: obj5.useThumbnail, thumbnailUrlOverride: obj5.thumbnailUrlOverride } = skuId);
    const tmp21 = <closure_14 profileEffect={potentiallyRandomizedProfileEffect} bannerAdjustment={null} useThumbnail={null} thumbnailUrlOverride={null} />;
    cResult[2] = potentiallyRandomizedProfileEffect;
    cResult[3] = skuId.bannerAdjustment;
    cResult[4] = skuId.thumbnailUrlOverride;
    cResult[5] = skuId.useThumbnail;
    cResult[6] = tmp21;
    tmp18 = tmp21;
  }
  return tmp10;
}) : ((skuId) => {
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = useProfileEffectDefault(skuId.skuId);
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = utils;
  const potentiallyRandomizedProfileEffect = obj2.usePotentiallyRandomizedProfileEffect(tmp);
  let tmp4 = null;
  if (null != potentiallyRandomizedProfileEffect) {
    if (!stateFromStores) {
      let tmp10;
      if (!skuId.useThumbnail) {
        const merged = Object.assign(skuId);
        tmp10 = <ProfileEffect profileEffect={potentiallyRandomizedProfileEffect} />;
      }
      tmp4 = tmp10;
    }
    ({ bannerAdjustment: obj4.bannerAdjustment, useThumbnail: obj4.useThumbnail, thumbnailUrlOverride: obj4.thumbnailUrlOverride } = skuId);
    tmp10 = <closure_14 profileEffect={potentiallyRandomizedProfileEffect} bannerAdjustment={null} useThumbnail={null} thumbnailUrlOverride={null} />;
  }
  return tmp4;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffect.tsx");

export default tmp4;
export const usePreloadProfileEffect = tmp3;