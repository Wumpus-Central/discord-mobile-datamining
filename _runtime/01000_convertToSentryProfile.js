// === Module 1000: convertToSentryProfile ===

// Module 1000 (convertToSentryProfile)
import _mod693 from "module_693" /* 693 */;
import react_native from "react-native" /* 996 */;
import _mod999 from "module_999" /* 999 */;

let hasOwnProperty, set;

function mapSamples(samples) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_2;
  }
  const items = [];
  set = new Set();
  const set1 = new Set();
  const first = samples[0];
  if (first) {
    const _Number = Number;
    const NumberResult = Number(first.ts);
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
        let debug2 = _mod693.debug;
        let _HermesInternal = HermesInternal;
        let str2 = "ns.";
        let str3 = "ns greater than the max elapsed time ";
        let str4 = "[Profiling] Sample has elapsed time since start ";
        let warnResult = debug2.warn("[Profiling] Sample has elapsed time since start " + obj4 + "ns greater than the max elapsed time " + tmp + "ns.");
        iter.return();
        break;
      } else {
        let obj = { stack_id: null, thread_id: null, elapsed_since_start_ns: obj4.toFixed(0) };
        ({ sf: obj5.stack_id, tid: obj5.thread_id } = tmp11);
        let push = items.push;
        let arr = push(obj);
        continue;
      }
      let obj2 = { samples: items, hermesStacks: set1, jsThreads: set };
      return obj2;
    }
  } else {
    const debug = _mod693.debug;
    debug.warn("[Profiling] No samples found in profile.");
    return { samples: items, hermesStacks: set1, jsThreads: set };
  }
}
function parseHermesJSStackFrame(category) {
  let NumberResult;
  let NumberResult1;
  let NumberResult2;
  if ("JavaScript" !== category.category) {
    let obj3;
    if ("[root]" === category.name) {
      obj3 = { function: category.name, in_app: false };
      const obj2 = { function: category.name, in_app: false };
    } else {
      obj3 = { function: category.name };
    }
    return obj3;
  } else {
    let name;
    if (undefined !== category.funcVirtAddr) {
      if (undefined !== category.offset) {
        const _Number3 = Number;
        const _Number4 = Number;
        const obj4 = { function: category.name, abs_path: react_native.DEFAULT_BUNDLE_NAME, lineno: 1, colno: NumberResult + Number(category.offset) + 1 };
        NumberResult = Number(category.funcVirtAddr);
        return obj4;
      }
    }
    const name1 = category.name;
    const index = name1.indexOf("(");
    if (-1 !== index) {
      name = str2.substring(0, index) || undefined;
      category.name.substring(0, index) || undefined;
    } else {
      name = category.name;
    }
    const obj = { function: name, abs_path: react_native.DEFAULT_BUNDLE_NAME, lineno: NumberResult1, colno: NumberResult2 };
    NumberResult1 = undefined;
    if (undefined !== category.line) {
      const _Number = Number;
      NumberResult1 = Number(category.line);
    }
    NumberResult2 = undefined;
    if (undefined !== category.column) {
      const _Number2 = Number;
      NumberResult2 = Number(category.column);
    }
    return obj;
  }
}
let closure_2 = 1000000 * _mod999.MAX_PROFILE_DURATION_MS;

export const convertToSentryProfile = function convertToSentryProfile(hermesProfile) {
  let hermesStacks;
  let jsThreads;
  let samples;
  let tmp15;
  function mapFrames(stackFrames) {
    const frames = [];
    const hermesStackFrameIdToSentryFrameIdMap = new Map();
    for (const key10011 in stackFrames) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(stackFrames, key10011)) {
        continue;
      } else {
        let tmp = stackFrames[key10011];
        if (!tmp) {
          continue;
        } else {
          let _Number = Number;
          let result = hermesStackFrameIdToSentryFrameIdMap.set(Number(key10011), frames.length);
          let arr = frames.push(parseHermesJSStackFrame(tmp));
          continue;
        }
        continue;
      }
      continue;
    }
    return { frames, hermesStackFrameIdToSentryFrameIdMap };
  }
  function mapStacks(hermesStacks, stackFrames, hermesStackFrameIdToSentryFrameIdMap) {
    let parent;
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
          let value = hermesStackFrameIdToSentryFrameIdMap.get(tmp3);
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
      let arr2 = stacks.push(items1);
      continue;
    }
    return { stacks, hermesStackToSentryStackMap };
  }
  if (0 === hermesProfile.samples.length) {
    const debug2 = _mod693.debug;
    debug2.warn("[Profiling] No samples found in profile.");
    return null;
  } else {
    ({ samples, jsThreads, hermesStacks } = mapSamples(hermesProfile.samples));
    mapSamples(hermesProfile.samples);
    const tmp22 = mapFrames(hermesProfile.stackFrames);
    let frames = tmp22.frames;
    const tmp23 = mapStacks(hermesStacks, hermesProfile.stackFrames, tmp22.hermesStackFrameIdToSentryFrameIdMap);
    let hermesStackToSentryStackMap = tmp23.hermesStackToSentryStackMap;
    let stacks = tmp23.stacks;
    let iter = samples[Symbol.iterator]();
    let nextResult = iter.next();
    let tmp3 = iter;
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let value = hermesStackToSentryStackMap.get(nextResult.stack_id);
      if (undefined === value) {
        let debug = _mod693.debug;
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
    const obj = {};
    for (const item10034 of jsThreads) {
      obj[item10034] = { name: "JavaScriptThread", priority: 1 };
      continue;
    }
    let _Object = Object;
    const obj2 = { samples, frames, stacks, thread_metadata: obj, active_thread_id: tmp15 };
    tmp15 = Object.keys(obj)[0] || "0";
    return obj2;
  }
};
export { mapSamples };
export { parseHermesJSStackFrame };