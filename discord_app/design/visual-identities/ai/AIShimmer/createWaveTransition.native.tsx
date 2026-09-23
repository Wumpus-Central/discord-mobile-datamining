// === Module 14497: createWaveTransition ===

// Module 14497 (createWaveTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import timing from "timing" /* 4828 */;
import waveTransition from "waveTransition" /* 14495 */;
import size from "module_2" /* 2 */;

function incomingSlotForPass(rounded) {
  let str = "A";
  if (rounded % 2 === 0) {
    str = "B";
  }
  return str;
}
incomingSlotForPass.__closure = {};
incomingSlotForPass.__workletHash = 3269171663385;
incomingSlotForPass.__initData = { code: "function incomingSlotForPass_createWaveTransitionNativeTsx1(passIndex){return passIndex%2===0?'B':'A';}" };
let slotB = { code: "function createWaveTransitionNativeTsx2(finished){const{runOnJS,finishPass,runId}=this.__closure;if(finished===true)runOnJS(finishPass)(runId);}" };
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/createWaveTransition.native.tsx");

export { incomingSlotForPass };
export const createWaveTransition = function createWaveTransition(duration) {
  function finishPass(arg0) {
    if (arg0 === closure_8) {
      c5 = false;
      const onComplete = obj.onComplete;
      if (onComplete != null) {
        onComplete();
      }
    }
  }
  let DEFAULT_PASS_DURATION = duration.duration;
  if (DEFAULT_PASS_DURATION == null) {
    DEFAULT_PASS_DURATION = obj(14495).DEFAULT_PASS_DURATION;
  }
  obj = { duration: DEFAULT_PASS_DURATION, random: null, reducedMotion: null, respectReducedMotion: null, animationProgress: null, crossFadeOpacity: null, glyphCount: null, onPass: null, onStart: null, onComplete: null };
  let random = duration.rng;
  if (random == null) {
    const _Math = Math;
    random = Math.random;
  }
  obj.random = random;
  ({ reducedMotion: obj.reducedMotion, respectReducedMotion } = duration);
  if (respectReducedMotion == null) {
    respectReducedMotion = true;
  }
  obj.respectReducedMotion = respectReducedMotion;
  ({ animationProgress: obj.animationProgress, crossFadeOpacity: obj.crossFadeOpacity, glyphCount: obj.glyphCount, onPass: obj.onPass, onStart: obj.onStart, onComplete: obj.onComplete } = duration);
  dependencyMap = 0;
  let to = duration.from;
  if (to == null) {
    to = duration.to;
  }
  slotA = to;
  slotB = duration.to;
  c5 = false;
  c6 = 0;
  closure_7 = null;
  closure_8 = 0;
  id = 1;
  let obj2 = { id, slotA, slotB, band: null };
  let glyphCountResult = obj.glyphCount();
  let str = "";
  let num = 0;
  let str2 = "";
  if (0 < glyphCountResult) {
    do {
      let GLYPH_PEAK = obj(14495).GLYPH_PEAK;
      let tmp5Result = tmp5();
      str = `${tmp8(tmp9 * obj(c1[0]).GLYPH_PEAK.length | 0)}`;
      num = num + 1;
      str2 = str;
    } while (num < glyphCountResult);
  }
  obj2.band = str2;
  function stop() {
    if (null != closure_7) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7);
    }
    closure_7 = null;
    closure_8 = closure_8 + 1;
    c6 = 0;
    c5 = false;
    obj = ReanimatedRexport;
    obj.cancelAnimation(obj.animationProgress);
    if (c5) {
      const animationProgress = tmp4.animationProgress;
      const result = animationProgress.set(c1);
    }
    const crossFadeOpacity = tmp4.crossFadeOpacity;
    const result1 = crossFadeOpacity.set(1);
  }
  obj.onPass(obj2);
  let obj3 = {
    play() {
      if (null != closure_7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_7);
      }
      closure_7 = null;
      if ("" === closure_2) {
        if ("" === closure_3) {
          const onComplete = obj.onComplete;
          if (onComplete != null) {
            onComplete();
          }
        }
      }
      c6 = closure_4;
    },
    stop,
    setTransition(current, current2) {
      if (null != closure_7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_7);
      }
      closure_7 = null;
      closure_8 = closure_8 + 1;
      c6 = 0;
      c5 = false;
      obj = ReanimatedRexport;
      obj.cancelAnimation(obj.animationProgress);
      if (c5) {
        const animationProgress = obj2.animationProgress;
        const result = animationProgress.set(c1);
      }
      const crossFadeOpacity = obj2.crossFadeOpacity;
      const result1 = crossFadeOpacity.set(1);
      if (typeof incomingSlotForPass === "function") {
        const result2 = tmp9 % 2;
        let str2 = "A";
        if (result2 === 0) {
          str2 = "B";
        }
        if (current !== ("A" === str2 ? slotB : slotA)) {
          if (typeof incomingSlotForPass === "function") {
            let str3 = "A";
            if (result2 === 0) {
              str3 = "B";
            }
            if ("A" === str3) {
              slotB = current;
            } else {
              slotA = current;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (typeof incomingSlotForPass === "function") {
          let str4 = "A";
          if (result2 === 0) {
            str4 = "B";
          }
          if ("A" === str4) {
            slotA = current2;
          } else {
            slotB = current2;
          }
          id = id + 1;
          const obj3 = { id, slotA, slotB, band: null };
          const glyphCountResult = obj2.glyphCount();
          let str5 = "";
          let num2 = 0;
          let str6 = "";
          if (0 < glyphCountResult) {
            do {
              let GLYPH_PEAK = waveTransition.GLYPH_PEAK;
              let tmp18Result = tmp18();
              str5 = `${tmp21(tmp22 * waveTransition.GLYPH_PEAK.length | 0)}`;
              num2 = num2 + 1;
              str6 = str5;
            } while (num2 < glyphCountResult);
          }
          obj3.band = str6;
          obj2.onPass(obj3);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
    setOptions(duration) {
      if (undefined !== duration.duration) {
        obj.duration = duration.duration;
      }
      if (undefined !== duration.reducedMotion) {
        obj.reducedMotion = duration.reducedMotion;
      }
    },
    startQueuedPass(id) {
      if (0 !== c6) {
        if (tmp === id) {
          c6 = 0;
          obj(dependencyMap[2]).cancelAnimation(obj.animationProgress);
          sum = sum + 1;
          c5 = true;
          closure_1 = closure_1 + 1;
          const onStart = obj.onStart;
          if (onStart != null) {
            onStart();
          }
          if (obj.respectReducedMotion) {
            if (true === tmp16.reducedMotion) {
              closure_129_0 = sum;
              let crossFadeOpacity = tmp16.crossFadeOpacity;
              obj = { duration: tmp14(dependencyMap[0]).REDUCED_MOTION_FADE_MS };
              let result = crossFadeOpacity.set(tmp14(dependencyMap[1]).withTiming(0, obj, "animate-always"));
              let _setTimeout = setTimeout;
              let timeout = setTimeout(() => {
                if (sum === closure_8) {
                  const animationProgress = obj.animationProgress;
                  const result = animationProgress.set(c1);
                  const crossFadeOpacity = obj.crossFadeOpacity;
                  obj = timing;
                  const obj2 = { duration: waveTransition.REDUCED_MOTION_FADE_MS };
                  const result1 = crossFadeOpacity.set(obj.withTiming(1, obj2, "animate-always"));
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => {
                    c7 = null;
                    if (closure_1_0 === sum) {
                      c5 = false;
                      const onComplete = sum.onComplete;
                      if (onComplete != null) {
                        onComplete();
                      }
                    }
                  }, waveTransition.REDUCED_MOTION_FADE_MS);
                }
              }, tmp14(dependencyMap[0]).REDUCED_MOTION_FADE_MS);
              const tmp14Result = tmp14(dependencyMap[1]);
            }
          }
          obj = sum;
          let animationProgress = tmp16.animationProgress;
          const tmp14Result2 = obj(dependencyMap[1]);
          let obj2 = { duration: obj.duration, easing: obj(dependencyMap[2]).Easing.linear };
          const fn = function t(arg0) {
            if (true === arg0) {
              ReanimatedRexport.runOnJS(finishPass)(sum);
            }
          };
          const obj3 = { runOnJS: obj(dependencyMap[2]).runOnJS, finishPass, runId: sum };
          fn.__closure = obj3;
          fn.__workletHash = 1670888017826;
          fn.__initData = __initData;
          let result1 = animationProgress.set(tmp14Result2.withTiming(closure_1, obj2, "animate-always", fn));
          const obj6 = obj(dependencyMap[2]);
        }
      }
    },
    refreshBand() {
      if (!c5) {
        id = id + 1;
        obj = { id, slotA, slotB, band: null };
        const glyphCountResult = obj.glyphCount();
        let str = "";
        let num3 = 0;
        let str2 = "";
        if (0 < glyphCountResult) {
          do {
            let GLYPH_PEAK = waveTransition.GLYPH_PEAK;
            let tmp7Result = tmp7();
            str = `${tmp10(tmp11 * waveTransition.GLYPH_PEAK.length | 0)}`;
            num3 = num3 + 1;
            str2 = str;
          } while (num3 < glyphCountResult);
        }
        obj.band = str2;
        obj.onPass(obj);
        if (0 !== c6) {
          c6 = id;
        }
      }
    },
    destroy() {
      if (null != closure_7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_7);
      }
      closure_7 = null;
      closure_8 = closure_8 + 1;
      c6 = 0;
      c5 = false;
      obj = ReanimatedRexport;
      obj.cancelAnimation(obj.animationProgress);
      ReanimatedRexport.cancelAnimation(obj.crossFadeOpacity);
    }
  };
  Object.defineProperty(obj3, "running", { get: () => c5, set: undefined });
  return obj3;
};