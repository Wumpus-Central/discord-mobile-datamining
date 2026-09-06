// discord_app/modules/profiling/ComponentProfiler.tsx
import noop from "../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
class StatCollector {
  constructor() {
    return Object.assign({ totalMicroseconds: 0, count: 0, minMicroseconds: null, maxMicroseconds: null });
  }
}
const prototype = StatCollector.prototype;
prototype["addValue"] = function addValue(arg0) {
  const self = this;
  this.count = this.count + 1;
  const rounded = Math.round(1000 * arg0);
  this.totalMicroseconds = this.totalMicroseconds + rounded;
  let MAX_SAFE_INTEGER = this.minMicroseconds;
  if (MAX_SAFE_INTEGER == null) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  self.minMicroseconds = Math.min(MAX_SAFE_INTEGER, rounded);
  let MIN_SAFE_INTEGER = self.maxMicroseconds;
  if (MIN_SAFE_INTEGER == null) {
    const _Number2 = Number;
    MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
  }
  self.maxMicroseconds = Math.max(MIN_SAFE_INTEGER, rounded);
};
Object.defineProperty(prototype, "mean", {
  get: function mean() {
    return this.totalMicroseconds / this.count;
  },
  set: undefined,
});
let closure_3 = {};
let c4 = true;
const size = fn(2);
const result = size.fileFinishedImporting("modules/profiling/ComponentProfiler.tsx");

export default function ComponentProfiler(arg0) {
  ({ id, children } = arg0);
  return (
    <noop.Profiler
      id={id}
      onRender={noop.useCallback((arg0, arg1, arg2) => {
        if (closure_1_4) {
          if (!(arg0 in dependencyMap)) {
            if (typeof StatCollector === "function") {
              const obj = {
                mount: Object.assign({ totalMicroseconds: 0, count: 0, minMicroseconds: null, maxMicroseconds: null }),
                update: null,
                nestedUpdate: null,
              };
              if (typeof StatCollector === "function") {
                obj.update = Object.assign({
                  totalMicroseconds: 0,
                  count: 0,
                  minMicroseconds: null,
                  maxMicroseconds: null,
                });
                if (typeof StatCollector === "function") {
                  obj.nestedUpdate = Object.assign({
                    totalMicroseconds: 0,
                    count: 0,
                    minMicroseconds: null,
                    maxMicroseconds: null,
                  });
                  tmp3[arg0] = obj;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if ("mount" === arg1) {
            const mount = dependencyMap[arg0].mount;
            mount.addValue(arg2);
          } else if ("update" === arg1) {
            const update = dependencyMap[arg0].update;
            update.addValue(arg2);
          } else if ("nested-update" === arg1) {
            const nestedUpdate = dependencyMap[arg0].nestedUpdate;
            nestedUpdate.addValue(arg2);
          }
        }
      }, [])}
    >
      {children}
    </noop.Profiler>
  );
}
export { StatCollector };
export function clearComponentRenderStats() {
  closure_3 = {};
}
export function getComponentRenderStats() {
  return closure_3;
}
export const serializeComponentRenderAverages = function serializeComponentRenderAverages() {
  let str = "";
  if (0 !== Object.keys(closure_3).length) {
    let num = 20;
    if ("id".length <= 20) {
      num = "id".length;
    }
    const substring = "id".substring;
    let substr = "id".substring(0, num);
    let num3 = 8;
    if ("Mounts".length <= 8) {
      num3 = "Mounts".length;
    }
    const substring2 = "Mounts".substring;
    let substr1 = "Mounts".substring(0, num3);
    let padEndResult = substr.padEnd(20, " ");
    let num4 = 20;
    if ("Mount Mean".length <= 20) {
      num4 = "Mount Mean".length;
    }
    const substring3 = "Mount Mean".substring;
    let substr2 = "Mount Mean".substring(0, num4);
    let padEndResult1 = substr1.padEnd(8, " ");
    let num5 = 8;
    if ("Updates".length <= 8) {
      num5 = "Updates".length;
    }
    const substring4 = "Updates".substring;
    let substr3 = "Updates".substring(0, num5);
    let padEndResult2 = substr2.padEnd(20, " ");
    let num6 = 20;
    if ("Update Mean".length <= 20) {
      num6 = "Update Mean".length;
    }
    const substring5 = "Update Mean".substring;
    let substr4 = "Update Mean".substring(0, num6);
    let padEndResult3 = substr3.padEnd(8, " ");
    let num7 = 8;
    if ("Nested".length <= 8) {
      num7 = "Nested".length;
    }
    const substring6 = "Nested".substring;
    let substr5 = "Nested".substring(0, num7);
    let padEndResult4 = substr4.padEnd(20, " ");
    let num8 = 20;
    if ("Nested Mean".length <= 20) {
      num8 = "Nested Mean".length;
    }
    const substring7 = "Nested Mean".substring;
    let substr6 = "Nested Mean".substring(0, num8);
    const _HermesInternal = HermesInternal;
    const _Object = Object;
    const text = `Component Render Stats (microseconds):
  ${"|" + tmp + "|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + obj7.padEnd(20, " ") + "|\n"}`;
    const entries = Object.entries(closure_3);
    str = `Component Render Stats (microseconds):
  ${"|" + tmp + "|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + obj7.padEnd(20, " ") + "|\n"}${arr.map(
    (item) => {
      [arr, tmp] = item;
      let num = 20;
      if (arr.length <= 20) {
        num = arr.length;
      }
      const substr = arr.substring(0, num);
      let str = tmp.mount.count;
      str = str.toString();
      let num2 = 8;
      if (str.length <= 8) {
        num2 = str.length;
      }
      const substr1 = str.substring(0, num2);
      const padEndResult = substr.padEnd(20, " ");
      let str2 = tmp.mount.mean;
      const str1 = str2.toString();
      let num3 = 20;
      if (str1.length <= 20) {
        num3 = str1.length;
      }
      const substr2 = str1.substring(0, num3);
      const padEndResult1 = substr1.padEnd(8, " ");
      let str3 = tmp.update.count;
      str2 = str3.toString();
      let num4 = 8;
      if (str2.length <= 8) {
        num4 = str2.length;
      }
      const substr3 = str2.substring(0, num4);
      const padEndResult2 = substr2.padEnd(20, " ");
      let str4 = tmp.update.mean;
      str3 = str4.toString();
      let num5 = 20;
      if (str3.length <= 20) {
        num5 = str3.length;
      }
      const substr4 = str3.substring(0, num5);
      const padEndResult3 = substr3.padEnd(8, " ");
      let str5 = tmp.nestedUpdate.count;
      str4 = str5.toString();
      let num6 = 8;
      if (str4.length <= 8) {
        num6 = str4.length;
      }
      const substr5 = str4.substring(0, num6);
      const padEndResult4 = substr4.padEnd(20, " ");
      str5 = tmp.nestedUpdate.mean.toString();
      let num7 = 20;
      if (str5.length <= 20) {
        num7 = str5.length;
      }
      const substr6 = str5.substring(0, num7);
      return (
        "|" +
        padEndResult +
        "|" +
        padEndResult1 +
        "|" +
        padEndResult2 +
        "|" +
        padEndResult3 +
        "|" +
        padEndResult4 +
        "|" +
        substr5.padEnd(8, " ") +
        "|" +
        substr6.padEnd(20, " ") +
        "|\n"
      );
    },
  )}`;
    const padEndResult5 = substr5.padEnd(8, " ");
  }
  return str;
};
export function resetComponentProfiler() {
  closure_3 = {};
}
export function pauseComponentProfiler() {
  c4 = false;
}
export function resumeComponentProfiler() {
  c4 = true;
}
export function dumpStats() {
  return closure_3;
}
