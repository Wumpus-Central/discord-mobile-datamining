// === Module 14234: createWaveTransition ===

// Module 14234 (createWaveTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import waveTransition from "waveTransition" /* 14233 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap, set, set2;

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
let closure_3 = { code: "function createWaveTransitionNativeTsx2(finished){const{runOnJS,finishPass,runId}=this.__closure;if(finished===true)runOnJS(finishPass)(runId);}" };
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/createWaveTransition.native.tsx");

export { incomingSlotForPass };
export const createWaveTransition = function createWaveTransition(duration) {
  let obj;
  let random;
  let respectReducedMotion;
  let str2;
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
    const tmp = obj;
    DEFAULT_PASS_DURATION = obj(14233).DEFAULT_PASS_DURATION;
  }
  obj = { duration: DEFAULT_PASS_DURATION, random, reducedMotion: null, respectReducedMotion, animationProgress: null, crossFadeOpacity: null, glyphCount: null, onPass: null, onStart: null, onComplete: null };
  random = duration.rng;
  if (random == null) {
    const _Math = Math;
    random = Math.random;
  }
  ({ reducedMotion: obj.reducedMotion, respectReducedMotion } = duration);
  if (respectReducedMotion == null) {
    respectReducedMotion = true;
  }
  ({ animationProgress: obj.animationProgress, crossFadeOpacity: obj.crossFadeOpacity, glyphCount: obj.glyphCount, onPass: obj.onPass, onStart: obj.onStart, onComplete: obj.onComplete } = duration);
  dependencyMap = 0;
  let to = duration.from;
  if (to == null) {
    to = duration.to;
  }
  let to2 = duration.to;
  let c5 = false;
  let c6 = 0;
  let c7 = null;
  let closure_8 = 0;
  id = 1;
  let obj2 = { id, slotA: to, slotB: to2, band: str2 };
  let onPass = obj.onPass;
  let glyphCountResult = obj.glyphCount();
  let str = "";
  let num = 0;
  str2 = "";
  if (0 < glyphCountResult) {
    do {
      let tmp6 = obj;
      let str3 = obj(14233).GLYPH_PEAK;
      let charAt = str3.charAt;
      let tmp5Result = tmp5();
      str = `${charAt(tmp8 * obj(c1[0]).GLYPH_PEAK.length | 0)}`;
      num = num + 1;
      str2 = str;
    } while (num < glyphCountResult);
  }
  function stop() {
    if (null != c7) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c7);
    }
    c7 = null;
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
  onPass(obj2);
  let obj3 = {
    play() {
      if (null != c7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c7);
      }
      c7 = null;
      if ("" === to) {
        if ("" === to2) {
          const onComplete = obj.onComplete;
          if (onComplete != null) {
            onComplete();
          }
        }
      }
      c6 = id;
    },
    stop,
    setTransition(current2, current) {
      let str6;
      if (null != c7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c7);
      }
      c7 = null;
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
        if (current2 !== ("A" === str2 ? to2 : to)) {
          if (typeof incomingSlotForPass === "function") {
            let str3 = "A";
            if (result2 === 0) {
              str3 = "B";
            }
            if ("A" === str3) {
              to2 = current2;
            } else {
              to = current2;
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
            to = current;
          } else {
            to2 = current;
          }
          id = id + 1;
          const onPass = obj2.onPass;
          const obj3 = { id, slotA: to, slotB: to2, band: str6 };
          const glyphCountResult = obj.glyphCount();
          let str5 = "";
          let num2 = 0;
          str6 = "";
          if (0 < glyphCountResult) {
            do {
              let str7 = waveTransition.GLYPH_PEAK;
              let charAt = str7.charAt;
              let tmp18Result = tmp18();
              str5 = `${charAt(tmp21 * waveTransition.GLYPH_PEAK.length | 0)}`;
              num2 = num2 + 1;
              str6 = str5;
            } while (num2 < glyphCountResult);
          }
          onPass(obj3);
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
      let closure_7;
      if (0 !== c6) {
        if (tmp === id) {
          c6 = 0;
          const obj4 = obj(c1[2]);
          obj4.cancelAnimation(obj.animationProgress);
          const sum = closure_8 + 1;
          closure_8 = sum;
          c5 = true;
          closure_1 = closure_1 + 1;
          const onStart = obj.onStart;
          if (onStart != null) {
            onStart();
          }
          if (obj.respectReducedMotion) {
            if (true === obj.reducedMotion) {
              let crossFadeOpacity = tmp18.crossFadeOpacity;
              set2 = crossFadeOpacity.set;
              const obj2 = { duration: obj(c1[0]).REDUCED_MOTION_FADE_MS };
              const withTiming2 = obj(c1[1]).withTiming;
              obj(c1[1]);
              set2(withTiming2(0, obj2, "animate-always"));
              let _setTimeout = setTimeout;
              let timeout = setTimeout(() => {
                if (sum === sum) {
                  const animationProgress = sum.animationProgress;
                  const result = animationProgress.set(closure_1);
                  const crossFadeOpacity = sum.crossFadeOpacity;
                  set = crossFadeOpacity.set;
                  const tmp6 = obj(c1[1]);
                  obj = { duration: obj(c1[0]).REDUCED_MOTION_FADE_MS };
                  const withTiming = tmp6.withTiming;
                  const result1 = set(withTiming(1, obj, "animate-always"));
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => {
                    c7 = null;
                    if (closure_1_0 === closure_2_8) {
                      c5 = false;
                      const onComplete = sum.onComplete;
                      if (onComplete != null) {
                        onComplete();
                      }
                    }
                  }, obj(c1[0]).REDUCED_MOTION_FADE_MS);
                }
              }, tmp16(c1[0]).REDUCED_MOTION_FADE_MS);
            }
          }
          obj = sum;
          let animationProgress = tmp18.animationProgress;
          set = animationProgress.set;
          const tmp16Result2 = obj(c1[1]);
          obj = { duration: obj.duration, easing: obj(c1[2]).Easing.linear };
          let withTiming = tmp16Result2.withTiming;
          const fn = function t(arg0) {
            if (true === arg0) {
              obj = ReanimatedRexport;
              obj.runOnJS(finishPass)(sum);
            }
          };
          fn.__closure = { runOnJS: obj(c1[2]).runOnJS, finishPass, runId: sum };
          fn.__workletHash = 1670888017826;
          fn.__initData = to2;
          const obj3 = { runOnJS: obj(c1[2]).runOnJS, finishPass, runId: sum };
          let result = set(withTiming(closure_1, obj, "animate-always", fn));
        }
      }
    },
    refreshBand() {
      let str2;
      if (!c5) {
        id = id + 1;
        obj = { id, slotA: to, slotB: to2, band: str2 };
        const onPass = obj.onPass;
        const glyphCountResult = obj.glyphCount();
        let str = "";
        let num3 = 0;
        str2 = "";
        if (0 < glyphCountResult) {
          do {
            let str3 = waveTransition.GLYPH_PEAK;
            let charAt = str3.charAt;
            let tmp8Result = tmp8();
            str = `${charAt(tmp11 * waveTransition.GLYPH_PEAK.length | 0)}`;
            num3 = num3 + 1;
            str2 = str;
          } while (num3 < glyphCountResult);
        }
        onPass(obj);
        if (0 !== c6) {
          c6 = id;
        }
      }
    },
    destroy() {
      if (null != c7) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c7);
      }
      c7 = null;
      closure_8 = closure_8 + 1;
      c6 = 0;
      c5 = false;
      obj = ReanimatedRexport;
      obj.cancelAnimation(obj.animationProgress);
      const obj2 = ReanimatedRexport;
      obj2.cancelAnimation(obj.crossFadeOpacity);
    }
  };
  Object.defineProperty(obj3, "running", { get: () => c5, set: undefined });
  return obj3;
};