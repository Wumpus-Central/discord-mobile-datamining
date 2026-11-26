// discord_app/modules/embedded_apps/shim_host/parseLaunchTimings.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

function keepCheckedEntries(marks, arg1) {
  items = [];
  if (Array.isArray(marks)) {
    const iter = marks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (hasCoreFields(nextResult, arg1)) {
        let arr = items.push(tmp5);
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
}
function keepCheckedOptionalEntries(largestContentfulPaints, arg1) {
  let tmp = null;
  if (Array.isArray(largestContentfulPaints)) {
    tmp = keepCheckedEntries(largestContentfulPaints, arg1);
  }
  return tmp;
}
function hasCoreFields(nextResult, arg1) {
  if (typeof nextResult === "object") {
    if (null != nextResult) {
      const _Object = Object;
      const entries = Object.entries(arg1);
      const obj = entries[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp9 = _slicedToArray(tmp6, 2);
        if (typeof nextResult[tmp9[0]] !== tmp9[1]) {
          obj.return();
          let flag = false;
          return false;
        }
      }
      return true;
    }
  }
  return false;
}
let closure_1 = {
  name: "string",
  startTime: "number",
  duration: "number",
  fetchStart: "number",
  requestStart: "number",
  responseStart: "number",
  responseEnd: "number",
  transferSize: "number",
};
let closure_2 = { name: "string", startTime: "number" };
let closure_3 = { startTime: "number", size: "number" };
let closure_4 = { startTime: "number", duration: "number" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/shim_host/parseLaunchTimings.tsx");

export default function parseLaunchTimings(str) {
  if (typeof str !== "string") {
    return null;
  } else {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(str);
      if (typeof parsed === "object") {
        if (null != parsed) {
          if (typeof parsed.timeOrigin !== "number") {
            return null;
          } else {
            let num2 = 0;
            if (typeof parsed.droppedResources === "number") {
              num2 = parsed.droppedResources;
            }
            const obj = {
              timeOrigin: parsed.timeOrigin,
              navigation: keepCheckedEntries(parsed.navigation, closure_1),
              resources: keepCheckedEntries(parsed.resources, closure_1),
              droppedResources: num2,
              paints: keepCheckedEntries(parsed.paints, closure_2),
              marks: keepCheckedEntries(parsed.marks, closure_2),
              largestContentfulPaints: keepCheckedOptionalEntries(parsed.largestContentfulPaints, closure_3),
              longAnimationFrames: keepCheckedOptionalEntries(parsed.longAnimationFrames, closure_4),
            };
            return obj;
          }
        }
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}
