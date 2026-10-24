// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 50;
let c11 = 1.6666666666666667;
let c12 = 250;
let c13 = 400;
let c14 = 150;
let c15 = 250;
let c16 = 300;
let c17 = 1100;
let c18 = 500;
const createStyles = fn(4971);
let obj2 = {
  cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" },
  circle: null,
  ring: null,
  confetti: null,
  stem: null,
  checkBadge: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = 25;
obj2.circle = obj3;
obj2.ring = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.confetti = { position: "absolute", top: -50, left: -50, width: 150, height: 150 };
let obj4 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.stem = { position: "absolute", left: 24, width: 2, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.checkBadge = { position: "absolute", right: -1, bottom: -1 };
let closure_19 = createStyles.createStyles(obj2);
function getWindowProgress(arg0, arg1, arg2) {
  let num = 1;
  if (null != arg1) {
    const obj = ReanimatedRexport;
    const items = [arg1, arg1 + arg2];
    num = obj.interpolate(arg0, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
  }
  return num;
}
let obj5 = { position: "absolute", left: 24, width: 2, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
getWindowProgress.__closure = { interpolate: fn(5052).interpolate, Extrapolation: fn(5052).Extrapolation };
getWindowProgress.__workletHash = 10001292080604;
getWindowProgress.__initData = {
  code: "function getWindowProgress_OrbsArcadeRewardChainCellTsx1(timeMs,startMs,durationMs){const{interpolate,Extrapolation}=this.__closure;if(startMs==null){return 1;}return interpolate(timeMs,[startMs,startMs+durationMs],[0,1],Extrapolation.CLAMP);}",
};
fn(558);
const __initData = {
  code: "function OrbsArcadeRewardChainCellTsx2(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}",
};
const __initData2 = {
  code: "function OrbsArcadeRewardChainCellTsx3(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}",
};
const __initData3 = {
  code: "function OrbsArcadeRewardChainCellTsx4(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}",
};
const __initData4 = {
  code: "function OrbsArcadeRewardChainCellTsx5(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}",
};
const __initData5 = {
  code: "function OrbsArcadeRewardChainCellTsx6(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}",
};
const __initData6 = {
  code: "function OrbsArcadeRewardChainCellTsx7(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}",
};
const __initData7 = {
  code: "function OrbsArcadeRewardChainCellTsx8(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}",
};
const __initData8 = {
  code: "function OrbsArcadeRewardChainCellTsx9(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}",
};
const __initData9 = {
  code: "function OrbsArcadeRewardChainCellTsx10(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}",
};
const __initData10 = {
  code: "function OrbsArcadeRewardChainCellTsx11(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}",
};
const __initData11 = {
  code: "function OrbsArcadeRewardChainCellTsx12(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}",
};
const __initData12 = {
  code: "function OrbsArcadeRewardChainCellTsx13(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}",
};
const __initData13 = {
  code: "function OrbsArcadeRewardChainCellTsx14(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}",
};
const __initData14 = {
  code: "function OrbsArcadeRewardChainCellTsx15(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}",
};
const __initData15 = {
  code: "function OrbsArcadeRewardChainCellTsx16(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}",
};
const __initData16 = {
  code: "function OrbsArcadeRewardChainCellTsx17(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}",
};
let obj6 = { interpolate: fn(5052).interpolate, Extrapolation: fn(5052).Extrapolation };
const ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOrbsArcadeRewardChainTimeline(grantedRewardIds) {
      const cResult = grantedRewardIds(grantAnimatedOnOpenRewardIds[9]).c(19);
      grantedRewardIds = grantedRewardIds.grantedRewardIds;
      const focusedRewardId = grantedRewardIds.focusedRewardId;
      grantAnimatedOnOpenRewardIds = grantedRewardIds.grantAnimatedOnOpenRewardIds;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = grantedRewardIds(grantAnimatedOnOpenRewardIds[9]);
      const stateFromStores = grantedRewardIds(grantAnimatedOnOpenRewardIds[10]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === focusedRewardId) {
        if (cResult[3] === grantAnimatedOnOpenRewardIds) {
          if (cResult[4] === grantedRewardIds) {
            if (cResult[5] === stateFromStores) {
              let tmp8 = cResult[6];
            }
            first = stateFromStores(first.useState(tmp8), 1)[0];
            const sharedValue = tmp(tmp2[7]).useSharedValue(0);
            if (cResult[7] === first) {
              if (cResult[8] === sharedValue) {
                let tmp12 = cResult[9];
                let tmp13 = cResult[10];
              }
              const effect = obj3.useEffect(tmp12, tmp13);
              let grantAtMsByRewardId;
              if (first != null) {
                grantAtMsByRewardId = first.grantAtMsByRewardId;
              }
              if (cResult[11] !== grantAtMsByRewardId) {
                let grantAtMsByRewardId1;
                if (first != null) {
                  grantAtMsByRewardId1 = first.grantAtMsByRewardId;
                }
                class S {
                  constructor(arg0) {
                    value = undefined;
                    if (closure_4 != null) {
                      tmp3 = grantedRewardIds;
                      grantAtMsByRewardId = tmp.grantAtMsByRewardId;
                      value = grantAtMsByRewardId.get(grantedRewardIds);
                    }
                    if (value == null) {
                      value = null;
                    }
                    return value;
                  }
                }
                cResult[11] = grantAtMsByRewardId1;
                cResult[12] = S;
                let tmp17 = S;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] !== first) {
                class T {
                  constructor(arg0) {
                    tmp = closure_4;
                    focusRingRewardId = undefined;
                    if (closure_4 != null) {
                      focusRingRewardId = tmp.focusRingRewardId;
                    }
                    focusRingAtMs = null;
                    if (focusRingRewardId === grantedRewardIds) {
                      focusRingAtMs = tmp.focusRingAtMs;
                    }
                    return focusRingAtMs;
                  }
                }
                class S {
                  constructor(arg0) {
                    value = undefined;
                    if (closure_4 != null) {
                      tmp3 = grantedRewardIds;
                      grantAtMsByRewardId = tmp.grantAtMsByRewardId;
                      value = grantAtMsByRewardId.get(grantedRewardIds);
                    }
                    if (value == null) {
                      value = null;
                    }
                    return value;
                  }
                }
                cResult[14] = T;
              } else {
                class T {
                  constructor(arg0) {
                    tmp = closure_4;
                    focusRingRewardId = undefined;
                    if (closure_4 != null) {
                      focusRingRewardId = tmp.focusRingRewardId;
                    }
                    focusRingAtMs = null;
                    if (focusRingRewardId === grantedRewardIds) {
                      focusRingAtMs = tmp.focusRingAtMs;
                    }
                    return focusRingAtMs;
                  }
                }
              }
              if (cResult[15] === tmp17) {
                class T {
                  constructor(arg0) {
                    tmp = closure_4;
                    focusRingRewardId = undefined;
                    if (closure_4 != null) {
                      focusRingRewardId = tmp.focusRingRewardId;
                    }
                    focusRingAtMs = null;
                    if (focusRingRewardId === grantedRewardIds) {
                      focusRingAtMs = tmp.focusRingAtMs;
                    }
                    return focusRingAtMs;
                  }
                }
              }
              const obj2 = { timeline: sharedValue, getGrantAtMs: tmp17, getFocusRingAtMs: T };
              cResult[15] = tmp17;
              cResult[16] = T;
              cResult[17] = sharedValue;
              cResult[18] = obj2;
            }
            const fn2 = function f() {
              if (null != first) {
                const _requestAnimationFrame = requestAnimationFrame;
                closure_0 = requestAnimationFrame(() => {
                  const obj = grantedRewardIds(grantAnimatedOnOpenRewardIds[11]);
                  return sharedValue.set(
                    obj.withTiming(first.endMs, {
                      duration: first.endMs,
                      easing: grantedRewardIds(grantAnimatedOnOpenRewardIds[7]).Easing.linear,
                    }),
                  );
                });
                return () => cancelAnimationFrame(closure_0);
              }
            };
            const items1 = [first, sharedValue];
            cResult[7] = first;
            cResult[8] = sharedValue;
            cResult[9] = fn2;
            class R {
              constructor() {
                if (closure_3) {
                  tmp12 = null;
                  return null;
                } else {
                  tmp = globalThis;
                  _Map = Map;
                  tmp2 = grantedRewardIds;
                  found = grantedRewardIds.filter((item) => {
                    let hasItem;
                    if (grantAnimatedOnOpenRewardIds != null) {
                      hasItem = grantAnimatedOnOpenRewardIds.has(item);
                    }
                    return true === hasItem;
                  });
                  tmp3 = new.target;
                  tmp4 = new.target;
                  map = new Map(
                    found.map((item, index) => {
                      const items = [item, closure_1_12 + index * closure_1_17];
                      return items;
                    }),
                  );
                  tmp6 = map;
                  tmp7 = c12;
                  tmp8 = c17;
                  sum = c12 + map.size * c17;
                  obj = { grantAtMsByRewardId: null, focusRingRewardId: null, focusRingAtMs: null, endMs: null };
                  obj.grantAtMsByRewardId = map;
                  tmp10 = focusedRewardId;
                  obj.focusRingRewardId = focusedRewardId;
                  obj.focusRingAtMs = sum;
                  tmp11 = null;
                  num = 0;
                  if (null != focusedRewardId) {
                    num = c18;
                  }
                  obj.endMs = sum + num;
                  return obj;
                }
              }
            }
            tmp13 = items1;
            tmp12 = fn2;
            obj3 = first;
            const tmpResult2 = tmp(tmp2[7]);
          }
        }
      }
      class R {
        constructor() {
          if (closure_3) {
            tmp12 = null;
            return null;
          } else {
            tmp = globalThis;
            _Map = Map;
            tmp2 = grantedRewardIds;
            found = grantedRewardIds.filter((item) => {
              let hasItem;
              if (grantAnimatedOnOpenRewardIds != null) {
                hasItem = grantAnimatedOnOpenRewardIds.has(item);
              }
              return true === hasItem;
            });
            tmp3 = new.target;
            tmp4 = new.target;
            map = new Map(
              found.map((item, index) => {
                const items = [item, closure_1_12 + index * closure_1_17];
                return items;
              }),
            );
            tmp6 = map;
            tmp7 = c12;
            tmp8 = c17;
            sum = c12 + map.size * c17;
            obj = { grantAtMsByRewardId: null, focusRingRewardId: null, focusRingAtMs: null, endMs: null };
            obj.grantAtMsByRewardId = map;
            tmp10 = focusedRewardId;
            obj.focusRingRewardId = focusedRewardId;
            obj.focusRingAtMs = sum;
            tmp11 = null;
            num = 0;
            if (null != focusedRewardId) {
              num = c18;
            }
            obj.endMs = sum + num;
            return obj;
          }
        }
      }
      cResult[2] = focusedRewardId;
      cResult[3] = grantAnimatedOnOpenRewardIds;
      cResult[4] = grantedRewardIds;
      cResult[5] = stateFromStores;
      cResult[6] = R;
      tmp8 = R;
      const tmpResult = grantedRewardIds(grantAnimatedOnOpenRewardIds[10]);
    }
  : function useOrbsArcadeRewardChainTimeline(arg0) {
      ({
        grantedRewardIds: require,
        focusedRewardId: importDefault,
        grantAnimatedOnOpenRewardIds: dependencyMap,
      } = arg0);
      let first;
      let items = [AccessibilityStore];
      _slicedToArray = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      first = _slicedToArray(
        first.useState(() => {
          if (closure_3) {
            return null;
          } else {
            const _Map = Map;
            const found = _require.filter((item) => {
              let hasItem;
              if (dependencyMap != null) {
                hasItem = dependencyMap.has(item);
              }
              return true === hasItem;
            });
            const map = new Map(
              found.map((item, index) => {
                const items = [item, closure_1_12 + index * closure_1_17];
                return items;
              }),
            );
            const sum = c12 + map.size * c17;
            const obj = { grantAtMsByRewardId: map, focusRingRewardId, focusRingAtMs: sum, endMs: null };
            let num = 0;
            if (null != focusRingRewardId) {
              num = c18;
            }
            obj.endMs = sum + num;
            return obj;
          }
        }),
        1,
      )[0];
      const sharedValue = ReanimatedRexport.useSharedValue(0);
      const items1 = [first, sharedValue];
      const effect = first.useEffect(() => {
        if (null != first) {
          const _requestAnimationFrame = requestAnimationFrame;
          closure_0 = requestAnimationFrame(() => {
            const obj = require("timing");
            return sharedValue.set(
              obj.withTiming(first.endMs, {
                duration: first.endMs,
                easing: require("ReanimatedRexport").Easing.linear,
              }),
            );
          });
          return () => cancelAnimationFrame(closure_0);
        }
      }, items1);
      return {
        timeline: sharedValue,
        getGrantAtMs(id) {
          value = undefined;
          if (first != null) {
            const grantAtMsByRewardId = tmp.grantAtMsByRewardId;
            value = grantAtMsByRewardId.get(id);
          }
          if (value == null) {
            value = null;
          }
          return value;
        },
        getFocusRingAtMs(id) {
          focusRingRewardId = undefined;
          if (first != null) {
            focusRingRewardId = first.focusRingRewardId;
          }
          let focusRingAtMs = null;
          if (focusRingRewardId === id) {
            focusRingAtMs = first.focusRingAtMs;
          }
          return focusRingAtMs;
        },
      };
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardChainCell(timeline) {
      const cResult = stemLength(grantAtMs[9]).c(43);
      ({ reward, isFocused, stemLength } = timeline);
      timeline = timeline.timeline;
      grantAtMs = timeline.grantAtMs;
      const focusRingAtMs = timeline.focusRingAtMs;
      const tmp4 = closure_19();
      let obj = stemLength(grantAtMs[9]);
      const theme = stemLength(grantAtMs[12]).useThemeContext().theme;
      let obj2 = stemLength(grantAtMs[12]);
      const token = stemLength(grantAtMs[13]).useToken(timeline(grantAtMs[6]).colors.ICON_STRONG);
      let obj3 = stemLength(grantAtMs[13]);
      const token1 = stemLength(grantAtMs[13]).useToken(timeline(grantAtMs[6]).colors.STATUS_POSITIVE);
      ref = ref.useRef(null);
      let sum = null;
      if (null != grantAtMs) {
        sum = grantAtMs + GRANT_FILL_MS;
      }
      closure_5 = sum;
      let sum1 = null;
      if (null != sum) {
        sum1 = sum + GRANT_CHECK_MS;
      }
      let sum2 = null;
      if (null != sum1) {
        sum2 = sum1 + GRANT_CONFETTI_MS;
      }
      const obj4 = stemLength(grantAtMs[13]);
      const fn = function n() {
        value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != grantAtMs) {
            const obj = ReanimatedRexport;
            const items = [grantAtMs, grantAtMs + tmp3];
            num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          return num;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      fn.__closure = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS };
      fn.__workletHash = 16298581706582;
      fn.__initData = __initData;
      const derivedValue = stemLength(grantAtMs[7]).useDerivedValue(fn);
      const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS };
      let tmpResult = stemLength(grantAtMs[7]);
      const fn2 = function o() {
        value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != focusRingAtMs) {
            const obj = ReanimatedRexport;
            const items = [focusRingAtMs, focusRingAtMs + tmp3];
            num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          return num;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      fn2.__closure = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
      fn2.__workletHash = 2996759496631;
      fn2.__initData = __initData2;
      const derivedValue1 = stemLength(grantAtMs[7]).useDerivedValue(fn2);
      const obj6 = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
      const tmpResult8 = stemLength(grantAtMs[7]);
      const fn3 = function c() {
        value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != sum2) {
            const obj = ReanimatedRexport;
            const items = [sum2, sum2 + tmp3];
            num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          return num;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      fn3.__closure = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS };
      fn3.__workletHash = 4451047761232;
      fn3.__initData = __initData3;
      const derivedValue2 = stemLength(grantAtMs[7]).useDerivedValue(fn3);
      function playConfetti() {
        const current = ref.current;
        let playResult;
        if (current != null) {
          playResult = current.play();
        }
        return playResult;
      }
      const obj7 = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS };
      const tmpResult9 = stemLength(grantAtMs[7]);
      class M {
        constructor() {
          tmp2 = null != closure_6;
          if (tmp2) {
            tmp3 = timeline;
            tmp2 = timeline.get() >= tmp;
          }
          return tmp2;
        }
      }
      M.__closure = { confettiAtMs: sum1, timeline };
      M.__workletHash = 17078558180439;
      M.__initData = __initData4;
      const fn4 = function u(arg0, arg1) {
        let tmp = arg0;
        if (arg0) {
          tmp = false === arg1;
        }
        if (tmp) {
          ReanimatedRexport.runOnJS(playConfetti)();
        }
      };
      const tmpResult10 = stemLength(grantAtMs[7]);
      fn4.__closure = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti };
      fn4.__workletHash = 13780775152900;
      fn4.__initData = __initData5;
      const animatedReaction = tmpResult10.useAnimatedReaction(M, fn4);
      if (cResult[0] !== token1) {
        const obj13 = tmp5(tmp2[15])(token1);
        const cssResult = tmp5(tmp2[15])(token1).alpha(0.5).css();
        cResult[0] = token1;
        cResult[1] = cssResult;
        let tmp20 = cssResult;
        const alphaResult = tmp5(tmp2[15])(token1).alpha(0.5);
      } else {
        tmp20 = cResult[1];
      }
      if (cResult[2] !== tmp20) {
        const obj9 = { boxShadow: null };
        const obj10 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: tmp20 };
        let items = [obj10];
        obj9.boxShadow = items;
        cResult[2] = tmp20;
        cResult[3] = obj9;
        let tmp22 = obj9;
      } else {
        tmp22 = cResult[3];
      }
      const obj8 = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti };
      function se() {
        return { opacity: derivedValue.get() };
      }
      se.__closure = { fillProgress: derivedValue };
      se.__workletHash = 7749646821819;
      se.__initData = __initData6;
      const animatedStyle = stemLength(grantAtMs[7]).useAnimatedStyle(se);
      const tmpResult11 = stemLength(grantAtMs[7]);
      function ne() {
        value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != sum) {
            const tmpResult = ReanimatedRexport;
            const items = [sum, sum + 400];
            num = tmpResult.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          const obj2 = { transform: null };
          const obj3 = { scale: obj.interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) };
          const items1 = [obj3];
          obj2.transform = items1;
          return obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        obj = ReanimatedRexport;
      }
      const tmpResult12 = stemLength(grantAtMs[7]);
      ne.__closure = {
        interpolate: stemLength(grantAtMs[7]).interpolate,
        getWindowProgress,
        timeline,
        checkAtMs: sum,
        GRANT_CHECK_MS,
        GRANT_CONFETTI_MS,
      };
      ne.__workletHash = 17236262951265;
      ne.__initData = __initData7;
      const animatedStyle1 = tmpResult12.useAnimatedStyle(ne);
      const obj11 = {
        interpolate: stemLength(grantAtMs[7]).interpolate,
        getWindowProgress,
        timeline,
        checkAtMs: sum,
        GRANT_CHECK_MS,
        GRANT_CONFETTI_MS,
      };
      function ie() {
        let num = stemLength;
        let num2 = stemLength;
        if (stemLength == null) {
          num2 = 0;
        }
        const obj = { top: -num2 * derivedValue2.get(), height: null };
        if (num == null) {
          num = 0;
        }
        obj.height = num * derivedValue2.get();
        return obj;
      }
      ie.__closure = { stemLength, stemProgress: derivedValue2 };
      ie.__workletHash = 13706139303941;
      ie.__initData = __initData8;
      const animatedStyle2 = stemLength(grantAtMs[7]).useAnimatedStyle(ie);
      if (cResult[4] === stemLength) {
        if (cResult[5] === animatedStyle2) {
          if (cResult[6] === tmp4.stem) {
            let tmp26 = cResult[7];
          }
          if (cResult[8] === tmp4.circle) {
            if (cResult[9] === tmp4.ring) {
              let tmp29 = cResult[10];
            }
            const tmp33 = timeline.status !== stemLength(grantAtMs[14]).OrbsArcadeRewardStatus.LOCKED;
            if (cResult[11] === token) {
              if (cResult[12] === derivedValue1) {
                if (cResult[13] === isFocused) {
                  if (cResult[14] === tmp33) {
                    let tmp34 = cResult[15];
                  }
                  if (cResult[16] === derivedValue) {
                    if (cResult[17] === token1) {
                      if (cResult[18] === animatedStyle) {
                        if (cResult[19] === tmp22) {
                          if (cResult[20] === tmp33) {
                            if (cResult[21] === tmp4.circle) {
                              if (cResult[22] === theme) {
                                let tmp39 = cResult[23];
                              }
                              if (cResult[24] !== reward) {
                                if (reward.type === stemLength(tmp2[14]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
                                  let tmp50 = sum2(stemLength(tmp2[17]).NitroCoinSpotIllustration, { height: 30 });
                                } else {
                                  const obj12 = { reward, size: 38 };
                                  tmp50 = sum2(tmp5(tmp2[18]), obj12);
                                }
                                cResult[24] = reward;
                                cResult[25] = tmp50;
                              } else {
                                if (cResult[26] === animatedStyle1) {
                                  if (cResult[27] === tmp33) {
                                    if (cResult[28] === tmp4.checkBadge) {
                                      let tmp53 = cResult[29];
                                    }
                                    if (cResult[30] === grantAtMs) {
                                      if (cResult[31] === tmp33) {
                                        if (cResult[32] === tmp4.confetti) {
                                          let tmp56 = cResult[33];
                                        }
                                        if (cResult[34] === tmp4.cell) {
                                          if (cResult[35] === tmp26) {
                                            if (cResult[36] === tmp29) {
                                              if (cResult[37] === tmp34) {
                                                if (cResult[38] === tmp39) {
                                                  if (cResult[39] === tmp48) {
                                                    if (cResult[40] === tmp53) {
                                                      if (cResult[41] === tmp56) {
                                                        let tmp61 = cResult[42];
                                                      }
                                                      return tmp61;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj14 = { style: tmp4.cell, children: null };
                                        let items1 = [tmp26, tmp29, tmp34, tmp39, tmp48, tmp53, tmp56];
                                        obj14.children = items1;
                                        const tmp64 = derivedValue2(closure_5, obj14);
                                        cResult[34] = tmp4.cell;
                                        cResult[35] = tmp26;
                                        cResult[36] = tmp29;
                                        cResult[37] = tmp34;
                                        cResult[38] = tmp39;
                                        cResult[39] = tmp48;
                                        cResult[40] = tmp53;
                                        cResult[41] = tmp56;
                                        cResult[42] = tmp64;
                                        tmp61 = tmp64;
                                      }
                                    }
                                    let tmp57 = null;
                                    if (tmp33) {
                                      tmp57 = null;
                                      if (null != grantAtMs) {
                                        const obj15 = { pointerEvents: "none", style: tmp4.confetti, children: null };
                                        const obj16 = {
                                          ref,
                                          source: stemLength(tmp2[21]),
                                          autoPlay: false,
                                          loop: false,
                                        };
                                        obj15.children = sum2(tmp5(tmp2[20]), obj16);
                                        tmp57 = sum2(closure_5, obj15);
                                        const tmp5Result = tmp5(tmp2[20]);
                                      }
                                    }
                                    cResult[30] = grantAtMs;
                                    cResult[31] = tmp33;
                                    cResult[32] = tmp4.confetti;
                                    cResult[33] = tmp57;
                                    tmp56 = tmp57;
                                  }
                                }
                                let tmp54 = null;
                                if (tmp33) {
                                  const obj17 = { style: null, children: null };
                                  const items2 = [tmp4.checkBadge, animatedStyle1];
                                  obj17.style = items2;
                                  const obj18 = {
                                    size: "xs",
                                    color: tmp5(tmp2[6]).colors.STATUS_POSITIVE,
                                    secondaryColor: tmp5(tmp2[6]).colors.WHITE,
                                  };
                                  obj17.children = sum2(stemLength(tmp2[19]).CircleCheckIcon, obj18);
                                  tmp54 = sum2(tmp5(tmp2[7]).View, obj17);
                                }
                                cResult[26] = animatedStyle1;
                                cResult[27] = tmp33;
                                cResult[28] = tmp4.checkBadge;
                                cResult[29] = tmp54;
                                tmp53 = tmp54;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let tmp41Result = null;
                  if (tmp33) {
                    let tmp43 = null;
                    if (!tmpResult14.isThemeLight(theme)) {
                      const obj19 = { style: null };
                      const items3 = [tmp4.circle, tmp22, animatedStyle];
                      obj19.style = items3;
                      tmp43 = sum2(tmp5(tmp2[7]).View, obj19);
                    }
                    const obj20 = { children: null };
                    const items4 = [tmp43];
                    const obj21 = { color: token1, progress: derivedValue, rewardSize: playConfetti, strokeWidth };
                    items4[1] = sum2(tmp5(tmp2[16]), obj21);
                    obj20.children = items4;
                    tmp41Result = derivedValue2(derivedValue, obj20);
                    tmpResult14 = stemLength(tmp2[12]);
                  }
                  cResult[16] = derivedValue;
                  cResult[17] = token1;
                  cResult[18] = animatedStyle;
                  cResult[19] = tmp22;
                  cResult[20] = tmp33;
                  cResult[21] = tmp4.circle;
                  cResult[22] = theme;
                  cResult[23] = tmp41Result;
                  tmp39 = tmp41Result;
                }
              }
            }
            if (isFocused) {
              const obj22 = { color: token, progress: derivedValue1, rewardSize: playConfetti, strokeWidth };
              let tmp35 = sum2(tmp5(tmp2[16]), obj22);
            } else {
              tmp35 = null;
            }
            cResult[11] = token;
            cResult[12] = derivedValue1;
            cResult[13] = isFocused;
            cResult[14] = tmp33;
            cResult[15] = tmp35;
            tmp34 = tmp35;
          }
          const obj23 = { style: null };
          const items5 = [,];
          ({ circle: arr3[0], ring: arr3[1] } = tmp4);
          obj23.style = items5;
          const tmp32 = sum2(closure_5, obj23);
          cResult[8] = tmp4.circle;
          cResult[9] = tmp4.ring;
          cResult[10] = tmp32;
          tmp29 = tmp32;
        }
      }
      let tmp27 = null;
      if (null != stemLength) {
        const obj24 = { style: null };
        const items6 = [tmp4.stem, animatedStyle2];
        obj24.style = items6;
        tmp27 = sum2(tmp5(tmp2[7]).View, obj24);
      }
      cResult[4] = stemLength;
      cResult[5] = animatedStyle2;
      cResult[6] = tmp4.stem;
      cResult[7] = tmp27;
      tmp26 = tmp27;
      const tmpResult13 = stemLength(grantAtMs[7]);
    }
  : function OrbsArcadeRewardChainCell(timeline) {
      ({ reward, stemLength } = timeline);
      timeline = timeline.timeline;
      const grantAtMs = timeline.grantAtMs;
      const focusRingAtMs = timeline.focusRingAtMs;
      c6 = undefined;
      let sum1;
      let sum2;
      let derivedValue;
      let derivedValue2;
      strokeWidth = undefined;
      ({ status, isFocused } = timeline);
      let tmp = closure_19();
      let obj = stemLength(grantAtMs[12]);
      const token = stemLength(grantAtMs[13]).useToken(timeline(grantAtMs[6]).colors.ICON_STRONG);
      let obj2 = stemLength(grantAtMs[13]);
      const token1 = stemLength(grantAtMs[13]).useToken(timeline(grantAtMs[6]).colors.STATUS_POSITIVE);
      const ref = token1.useRef(null);
      let sum = null;
      if (null != grantAtMs) {
        sum = grantAtMs + GRANT_FILL_MS;
      }
      c6 = sum;
      sum1 = null;
      if (null != sum) {
        sum1 = sum + GRANT_CHECK_MS;
      }
      sum2 = null;
      if (null != sum1) {
        sum2 = sum1 + GRANT_CONFETTI_MS;
      }
      let obj3 = stemLength(grantAtMs[13]);
      class P {
        constructor() {
          value = timeline.get();
          tmp2 = grantAtMs;
          if (typeof getWindowProgress === "function") {
            tmp4 = null;
            num = 1;
            if (null != tmp2) {
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = closure_0(closure_2[7]);
              items = [,];
              items[0] = tmp2;
              items[1] = tmp2 + tmp3;
              tmp7 = obj;
              tmp8 = value;
              tmp9 = items;
              num = obj.interpolate(value, items, [0, 1], closure_0(closure_2[7]).Extrapolation.CLAMP);
            }
            return num;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      P.__closure = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS };
      P.__workletHash = 6558713580453;
      P.__initData = __initData9;
      derivedValue = stemLength(grantAtMs[7]).useDerivedValue(P);
      const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS };
      const tmp2Result = stemLength(grantAtMs[7]);
      const fn = function y() {
        value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != focusRingAtMs) {
            const obj = ReanimatedRexport;
            const items = [focusRingAtMs, focusRingAtMs + tmp3];
            num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          return num;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      fn.__closure = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
      fn.__workletHash = 8764166275748;
      fn.__initData = __initData10;
      const derivedValue1 = stemLength(grantAtMs[7]).useDerivedValue(fn);
      const obj6 = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
      const tmp2Result8 = stemLength(grantAtMs[7]);
      class L {
        constructor() {
          value = timeline.get();
          tmp2 = closure_8;
          if (typeof getWindowProgress === "function") {
            num = 1;
            tmp4 = null;
            if (null != tmp2) {
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = closure_0(closure_2[7]);
              items = [,];
              items[0] = tmp2;
              items[1] = tmp2 + tmp3;
              tmp7 = obj;
              tmp8 = value;
              tmp9 = items;
              num = obj.interpolate(value, items, [0, 1], closure_0(closure_2[7]).Extrapolation.CLAMP);
            }
            return num;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      L.__closure = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS };
      L.__workletHash = 14786680607207;
      L.__initData = __initData11;
      derivedValue2 = stemLength(grantAtMs[7]).useDerivedValue(L);
      strokeWidth = obj4.useCallback(() => {
        const current = ref.current;
        let playResult;
        if (current != null) {
          playResult = current.play();
        }
        return playResult;
      }, []);
      const obj7 = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS };
      const tmp2Result9 = stemLength(grantAtMs[7]);
      class E {
        constructor() {
          tmp2 = null != closure_7;
          if (tmp2) {
            tmp3 = timeline;
            tmp2 = timeline.get() >= tmp;
          }
          return tmp2;
        }
      }
      E.__closure = { confettiAtMs: sum1, timeline };
      E.__workletHash = 15383316588928;
      E.__initData = __initData12;
      class N {
        constructor(arg0, arg1) {
          tmp = timeline;
          if (timeline) {
            tmp2 = arg1;
            flag = false;
            tmp = false === arg1;
          }
          if (tmp) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[7]);
            tmp5 = closure_11;
            tmp6 = obj.runOnJS(closure_11)();
          }
          return;
        }
      }
      const tmp2Result10 = stemLength(grantAtMs[7]);
      N.__closure = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti: strokeWidth };
      N.__workletHash = 4007045048631;
      N.__initData = __initData13;
      const animatedReaction = tmp2Result10.useAnimatedReaction(E, N);
      let items = [token1];
      const memo = obj4.useMemo(() => {
        const obj = { boxShadow: null };
        const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: null };
        const obj3 = _modDef683(token1);
        obj2.color = _modDef683(token1).alpha(0.5).css();
        const items = [obj2];
        obj.boxShadow = items;
        return obj;
      }, items);
      const obj8 = { runOnJS: stemLength(grantAtMs[7]).runOnJS, playConfetti: strokeWidth };
      function ee() {
        return { opacity: derivedValue.get() };
      }
      ee.__closure = { fillProgress: derivedValue };
      ee.__workletHash = 13951092941864;
      ee.__initData = __initData14;
      const animatedStyle = stemLength(grantAtMs[7]).useAnimatedStyle(ee);
      const tmp2Result11 = stemLength(grantAtMs[7]);
      function te() {
        value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != c6) {
            const tmpResult = ReanimatedRexport;
            const items = [c6, c6 + 400];
            num = tmpResult.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          const obj2 = { transform: null };
          const obj3 = { scale: obj.interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) };
          const items1 = [obj3];
          obj2.transform = items1;
          return obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        obj = ReanimatedRexport;
      }
      const tmp2Result12 = stemLength(grantAtMs[7]);
      te.__closure = {
        interpolate: stemLength(grantAtMs[7]).interpolate,
        getWindowProgress,
        timeline,
        checkAtMs: sum,
        GRANT_CHECK_MS,
        GRANT_CONFETTI_MS,
      };
      te.__workletHash = 5571102787774;
      te.__initData = __initData15;
      const animatedStyle1 = tmp2Result12.useAnimatedStyle(te);
      stemLength(grantAtMs[7]);
      function re() {
        let num = stemLength;
        let num2 = stemLength;
        if (stemLength == null) {
          num2 = 0;
        }
        const obj = { top: -num2 * derivedValue2.get(), height: null };
        if (num == null) {
          num = 0;
        }
        obj.height = num * derivedValue2.get();
        return obj;
      }
      re.__closure = { stemLength, stemProgress: derivedValue2 };
      re.__workletHash = 2751998266906;
      re.__initData = __initData16;
      const obj10 = { style: tmp.cell, children: null };
      let tmp26 = null;
      if (null != stemLength) {
        const obj11 = { style: null };
        let items1 = [tmp.stem, tmp23];
        obj11.style = items1;
        tmp26 = sum1(tmp4(tmp3[7]).View, obj11);
      }
      const tmp28 = status !== stemLength(grantAtMs[14]).OrbsArcadeRewardStatus.LOCKED;
      const items2 = [tmp26, , , , , ,];
      const obj12 = { style: null };
      const items3 = [,];
      ({ circle: arr4[0], ring: arr4[1] } = tmp);
      obj12.style = items3;
      items2[1] = sum1(ref, obj12);
      if (isFocused) {
        const obj13 = { color: token, progress: derivedValue1, rewardSize: derivedValue2, strokeWidth };
        let tmp29Result = tmp29(tmp4(tmp3[16]), obj13);
      } else {
        tmp29Result = null;
      }
      items2[2] = tmp29Result;
      let tmp24Result = null;
      if (tmp28) {
        let tmp29Result5 = null;
        if (!tmp2Result14.isThemeLight(obj.useThemeContext().theme)) {
          const obj14 = { style: null };
          const items4 = [tmp.circle, memo, animatedStyle];
          obj14.style = items4;
          tmp29Result5 = tmp29(tmp4(tmp3[7]).View, obj14);
        }
        const obj15 = { children: null };
        const items5 = [tmp29Result5];
        const obj16 = { color: token1, progress: derivedValue, rewardSize: derivedValue2, strokeWidth };
        items5[1] = tmp29(tmp4(tmp3[16]), obj16);
        obj15.children = items5;
        tmp24Result = tmp24(sum2, obj15);
        tmp2Result14 = stemLength(tmp3[12]);
      }
      items2[3] = tmp24Result;
      if (reward.type === stemLength(grantAtMs[14]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
        let tmp29Result6 = tmp29(stemLength(tmp3[17]).NitroCoinSpotIllustration, { height: 30 });
      } else {
        const obj17 = { reward, size: 38 };
        tmp29Result6 = tmp29(tmp4(tmp3[18]), obj17);
      }
      items2[4] = tmp29Result6;
      let tmp29Result7 = null;
      if (tmp28) {
        const obj18 = { style: null, children: null };
        const items6 = [tmp.checkBadge, animatedStyle1];
        obj18.style = items6;
        const obj19 = {
          size: "xs",
          color: tmp4(tmp3[6]).colors.STATUS_POSITIVE,
          secondaryColor: tmp4(tmp3[6]).colors.WHITE,
        };
        obj18.children = tmp29(stemLength(tmp3[19]).CircleCheckIcon, obj19);
        tmp29Result7 = tmp29(tmp4(tmp3[7]).View, obj18);
      }
      items2[5] = tmp29Result7;
      let tmp29Result8 = null;
      if (tmp28) {
        tmp29Result8 = null;
        if (null != grantAtMs) {
          const obj20 = { pointerEvents: "none", style: tmp.confetti, children: null };
          const obj21 = { ref, source: stemLength(tmp3[21]), autoPlay: false, loop: false };
          obj20.children = tmp29(tmp4(tmp3[20]), obj21);
          tmp29Result8 = tmp29(tmp25, obj20);
          const tmp4Result = tmp4(tmp3[20]);
        }
      }
      items2[6] = tmp29Result8;
      obj10.children = items2;
      return derivedValue(ref, obj10);
    };
export const useOrbsArcadeRewardChainTimeline = tmp5;
