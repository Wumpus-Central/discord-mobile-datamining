// _runtime/00989_mapSamples.js
import _mod682 from "metro/00682__.js";
import _mod985 from "metro/00985__.js";
import MAX_PROFILE_DURATION_MS from "00988_MAX_PROFILE_DURATION_MS.js";

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
        let debug2 = _mod682.debug;
        let _HermesInternal = HermesInternal;
        let str2 = "ns.";
        let str3 = "ns greater than the max elapsed time ";
        let str4 = "[Profiling] Sample has elapsed time since start ";
        let warnResult = debug2.warn(
          "[Profiling] Sample has elapsed time since start " +
            obj4 +
            "ns greater than the max elapsed time " +
            tmp +
            "ns.",
        );
        iter.return();
        break;
      } else {
        let obj = { stack_id: null, thread_id: null, elapsed_since_start_ns: null };
        ({ sf: obj5.stack_id, tid: obj5.thread_id } = tmp11);
        obj.elapsed_since_start_ns = obj4.toFixed(0);
        let arr = items.push(obj);
        continue;
      }
      obj = { samples: items, hermesStacks: set1, jsThreads: set };
      return obj;
    }
    NumberResult = Number(first.ts);
  } else {
    const debug = _mod682.debug;
    debug.warn("[Profiling] No samples found in profile.");
    const obj1 = { samples: items, hermesStacks: set1, jsThreads: set };
    return obj1;
  }
}
function parseHermesJSStackFrame(category) {
  if ("JavaScript" !== category.category) {
    if ("[root]" === category.name) {
      let obj = { function: category.name, in_app: false };
    } else {
      obj = { function: category.name };
    }
    return obj;
  } else {
    if (undefined !== category.funcVirtAddr) {
      if (undefined !== category.offset) {
        const obj1 = { function: category.name, abs_path: _mod985.DEFAULT_BUNDLE_NAME, lineno: 1, colno: null };
        const _Number3 = Number;
        const _Number4 = Number;
        obj1.colno = Number(category.funcVirtAddr) + Number(category.offset) + 1;
        return obj1;
      }
    }
    let name = category.name;
    const index = name.indexOf("(");
    if (-1 !== index) {
      name = category.name.substring(0, index) || undefined;
      const tmp2 = category.name.substring(0, index) || undefined;
    } else {
      name = category.name;
    }
    obj = { function: name, abs_path: _mod985.DEFAULT_BUNDLE_NAME, lineno: null, colno: null };
    let NumberResult1;
    if (undefined !== category.line) {
      const _Number = Number;
      NumberResult1 = Number(category.line);
    }
    obj.lineno = NumberResult1;
    let NumberResult2;
    if (undefined !== category.column) {
      const _Number2 = Number;
      NumberResult2 = Number(category.column);
    }
    obj.colno = NumberResult2;
    return obj;
  }
}
let closure_2 = 1000000 * MAX_PROFILE_DURATION_MS.MAX_PROFILE_DURATION_MS;

export const convertToSentryProfile = function convertToSentryProfile(hermesProfile) {
  if (0 === hermesProfile.samples.length) {
    const debug2 = _mod682.debug;
    debug2.warn("[Profiling] No samples found in profile.");
    return null;
  } else {
    ({ samples, jsThreads, hermesStacks } = mapSamples(hermesProfile.samples));
    const tmp22 = (function mapFrames(stackFrames) {
      const frames = [];
      const hermesStackFrameIdToSentryFrameIdMap = new Map();
      for (const key10011 in arg0) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
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
            let arr = frames.push(parseHermesJSStackFrame(tmp2));
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
            value = hermesStackFrameIdToSentryFrameIdMap.get(tmp3);
            if (undefined !== value) {
              let arr = items1.push(tmp6);
            }
            let tmp11 = stackFrames[tmp3];
            let tmp12 = tmp11;
            parent = undefined;
            if (null !== tmp11) {
              if (undefined !== tmp12) {
                parent = tmp12.parent;
              }
            }
            tmp3 = parent;
          } while (undefined !== parent);
        }
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
      value = hermesStackToSentryStackMap.get(nextResult.stack_id);
      if (undefined === value) {
        let debug = _mod682.debug;
        let _HermesInternal = HermesInternal;
        let errorResult = debug.error(
          "[Profiling] Hermes Stack ID " + tmp4.stack_id + " not found when mapping to Sentry Stack ID.",
        );
        tmp4.stack_id = -1;
      } else {
        tmp4.stack_id = tmp6;
      }
      continue;
    }
    let obj = {};
    for (const item10034 of jsThreads) {
      obj[item10034] = { name: "JavaScriptThread", priority: 1 };
      continue;
    }
    obj = { samples, frames: tmp22.frames, stacks: tmp23.stacks, thread_metadata: null, active_thread_id: null };
    obj.thread_metadata = obj;
    let _Object = Object;
    const tmp21 = mapSamples(hermesProfile.samples);
    obj.active_thread_id = Object.keys(obj)[0] || "0";
    return obj;
  }
};
export { mapSamples };
export { parseHermesJSStackFrame };
