// _runtime/01124_mapSamples.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import DEFAULT_BUNDLE_NAME from "01120_DEFAULT_BUNDLE_NAME.js";
import _mod1123 from "metro/01123__.js";

function mapSamples(samples) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_2;
  }
  const items = [];
  const set = new Set();
  const set1 = new Set();
  const first = samples[0];
  if (first) {
    const _Number = Number;
    const iter = samples[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      let addResult = set.add(nextResult.tid);
      let addResult1 = set1.add(nextResult.sf);
      let _Number2 = Number;
      let result = 1000 * (Number(nextResult.ts) - NumberResult);
      let obj4 = result;
      if (result >= tmp) {
        let tmp18 = require;
        let tmp19 = dependencyMap;
        let debug2 = registerSpanErrorInstrumentation.debug;
        let tmp20 = result;
        let _HermesInternal = HermesInternal;
        let str2 = "ns.";
        let str3 = "ns greater than the max elapsed time ";
        let str4 = "[Profiling] Sample has elapsed time since start ";
        let tmp21 = tmp;
        let warnResult = debug2.warn("[Profiling] Sample has elapsed time since start " + obj4 + "ns greater than the max elapsed time " + tmp + "ns.");
        let tmp23 = iter;
        iter.return();
        break;
      } else {
        let obj = { stack_id: null, thread_id: null, elapsed_since_start_ns: null };
        let tmp15 = nextResult;
        ({ sf: obj5[0], tid: obj5[1] } = tmp11);
        let tmp16 = result;
        obj[2] = obj4.toFixed(0);
        let arr = items.push(obj);
        continue;
      }
      obj = { samples: null, hermesStacks: null, jsThreads: null };
      obj[0] = items;
      obj[1] = set1;
      obj[2] = set;
      return obj;
    }
    NumberResult = Number(first.ts);
  } else {
    const debug = registerSpanErrorInstrumentation.debug;
    debug.warn("[Profiling] No samples found in profile.");
    obj1 = { samples: null, hermesStacks: null, jsThreads: null };
    obj1[0] = items;
    obj1[1] = set1;
    obj1[2] = set;
    return obj1;
  }
}
function parseHermesJSStackFrame(category) {
  if ("JavaScript" !== category.category) {
    if ("[root]" === category.name) {
      let obj = { function: null, in_app: false };
      obj[0] = category.name;
    } else {
      obj = { function: null };
      obj[0] = category.name;
    }
    return obj;
  } else {
    if (undefined !== category.funcVirtAddr) {
      if (undefined !== category.offset) {
        obj1 = { function: null, abs_path: null, lineno: 1, colno: null };
        obj1[0] = category.name;
        obj1[1] = DEFAULT_BUNDLE_NAME.DEFAULT_BUNDLE_NAME;
        const _Number3 = Number;
        const _Number4 = Number;
        obj1[3] = Number(category.funcVirtAddr) + Number(category.offset) + 1;
        return obj1;
      }
    }
    let name = category.name;
    const index = name.indexOf("(");
    if (-1 !== index) {
      name = category.name.substring(0, index) || undefined;
      const str2 = category.name;
      const tmp2 = category.name.substring(0, index) || undefined;
    } else {
      name = category.name;
    }
    obj = { function: null, abs_path: null, lineno: null, colno: null };
    obj[0] = name;
    obj[1] = DEFAULT_BUNDLE_NAME.DEFAULT_BUNDLE_NAME;
    let NumberResult1;
    if (undefined !== category.line) {
      const _Number = Number;
      NumberResult1 = Number(category.line);
    }
    obj[2] = NumberResult1;
    let NumberResult2;
    if (undefined !== category.column) {
      const _Number2 = Number;
      NumberResult2 = Number(category.column);
    }
    obj[3] = NumberResult2;
    return obj;
  }
}
let closure_2 = 1000000 * _mod1123.MAX_PROFILE_DURATION_MS;

export const convertToSentryProfile = function convertToSentryProfile(hermesProfile) {
  if (0 === hermesProfile.samples.length) {
    const debug2 = registerSpanErrorInstrumentation.debug;
    debug2.warn("[Profiling] No samples found in profile.");
    return null;
  } else {
    ({ samples, jsThreads, hermesStacks } = mapSamples(hermesProfile.samples));
    const tmp22 = (function mapFrames(stackFrames) {
      const frames = [];
      const hermesStackFrameIdToSentryFrameIdMap = new Map();
      for (const key10011 in arg0) {
        let tmp6 = key10011;
        let _Object = Object;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10011);
        } else {
          hasOwnPropertyResult = call(arg0, key10011);
        }
        if (!hasOwnPropertyResult) {
          continue;
        } else {
          let tmp2 = arg0[key10011];
          if (!tmp2) {
            continue;
          } else {
            let _Number = Number;
            let result = hermesStackFrameIdToSentryFrameIdMap.set(Number(key10011), frames.length);
            let tmp4 = callback;
            let arr = frames.push(callback(tmp2));
            continue;
          }
          continue;
        }
        continue;
      }
      return { frames, hermesStackFrameIdToSentryFrameIdMap };
    })(hermesProfile.stackFrames);
    const tmp23 = (function mapStacks(hermesStacks, stackFrames, hermesStackFrameIdToSentryFrameIdMap) {
      const hermesStackToSentryStackMap = new Map();
      const stacks = [];
      const iter = hermesStacks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let result = hermesStackToSentryStackMap.set(nextResult, stacks.length);
        let items1 = [];
        let tmp3 = nextResult;
        if (undefined !== nextResult) {
          do {
            let tmp4 = tmp3;
            let value = hermesStackFrameIdToSentryFrameIdMap.get(tmp3);
            if (undefined !== value) {
              let tmp7 = items1;
              let tmp8 = value;
              let arr = items1.push(tmp6);
            }
            let tmp10 = tmp3;
            let tmp11 = stackFrames[tmp3];
            let tmp12 = tmp11;
            parent = undefined;
            if (null !== tmp11) {
              let tmp14 = tmp11;
              if (undefined !== tmp12) {
                let tmp15 = tmp11;
                parent = tmp12.parent;
              }
            }
            tmp3 = parent;
          } while (undefined !== parent);
        }
        let tmp16 = items1;
        arr = stacks.push(items1);
        continue;
      }
      return { stacks, hermesStackToSentryStackMap };
    })(hermesStacks, hermesProfile.stackFrames, tmp22.hermesStackFrameIdToSentryFrameIdMap);
    let hermesStackToSentryStackMap = tmp23.hermesStackToSentryStackMap;
    let iter = samples[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let value = hermesStackToSentryStackMap.get(nextResult.stack_id);
      if (undefined === value) {
        let tmp9 = require;
        let tmp10 = dependencyMap;
        let debug = registerSpanErrorInstrumentation.debug;
        let tmp11 = nextResult;
        let _HermesInternal = HermesInternal;
        let errorResult = debug.error("[Profiling] Hermes Stack ID " + tmp4.stack_id + " not found when mapping to Sentry Stack ID.");
        tmp4.stack_id = -1;
      } else {
        let tmp7 = nextResult;
        let tmp8 = value;
        tmp4.stack_id = tmp6;
      }
      continue;
    }
    let obj = {};
    for (const item10034 of jsThreads) {
      obj[item10034] = { name: "JavaScriptThread", priority: 1 };
      continue;
    }
    obj = { samples: null, frames: null, stacks: null, thread_metadata: null, active_thread_id: null };
    obj[0] = samples;
    obj[1] = tmp22.frames;
    obj[2] = tmp23.stacks;
    obj[3] = obj;
    let _Object = Object;
    const tmp21 = mapSamples(hermesProfile.samples);
    obj[4] = Object.keys(obj)[0] || "0";
    return obj;
  }
};
export { mapSamples };
export { parseHermesJSStackFrame };