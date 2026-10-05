// discord_app/modules/profiling/ComponentProfiler.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
class StatCollector {
  constructor() {
    return Object.assign({ totalMicroseconds: 0, count: 0, minMicroseconds: null, maxMicroseconds: null });
  }
  addValue(arg0) {
    const self = this;
    this.count = this.count + 1;
    const rounded = Math.round(1000 * arg0);
    this.totalMicroseconds = this.totalMicroseconds + rounded;
    let MAX_SAFE_INTEGER = this.minMicroseconds;
    const _Math = Math;
    if (MAX_SAFE_INTEGER == null) {
      const _Number = Number;
      MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    }
    self.minMicroseconds = min(MAX_SAFE_INTEGER, rounded);
    let MIN_SAFE_INTEGER = self.maxMicroseconds;
    const _Math2 = Math;
    if (MIN_SAFE_INTEGER == null) {
      const _Number2 = Number;
      MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
    }
    self.maxMicroseconds = max(MIN_SAFE_INTEGER, rounded);
  }
}
Object.defineProperty(StatCollector.prototype, "mean", {
  get: function mean() {
    return this.totalMicroseconds / this.count;
  },
  set: undefined,
});
let closure_5 = {};
let c6 = true;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let first;
      let id;
      let obj = react2;
      const cResult = obj.c(4);
      ({ id, children } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(arg0, arg1, arg2) {
          if (closure_1_6) {
            if (!(arg0 in closure_1_5)) {
              const self = this;
              if (typeof StatCollector === "function") {
                const obj = {
                  mount: Object.assign({
                    totalMicroseconds: 0,
                    count: 0,
                    minMicroseconds: null,
                    maxMicroseconds: null,
                  }),
                  update: null,
                  nestedUpdate: null,
                };
                const self2 = this;
                if (typeof StatCollector === "function") {
                  obj.update = Object.assign({
                    totalMicroseconds: 0,
                    count: 0,
                    minMicroseconds: null,
                    maxMicroseconds: null,
                  });
                  const self3 = this;
                  if (typeof StatCollector === "function") {
                    obj.nestedUpdate = Object.assign({
                      totalMicroseconds: 0,
                      count: 0,
                      minMicroseconds: null,
                      maxMicroseconds: null,
                    });
                    tmp4[arg0] = obj;
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
              const mount = closure_1_5[arg0].mount;
              mount.addValue(arg2);
            } else if ("update" === arg1) {
              const update = closure_1_5[arg0].update;
              update.addValue(arg2);
            } else if ("nested-update" === arg1) {
              const nestedUpdate = closure_1_5[arg0].nestedUpdate;
              nestedUpdate.addValue(arg2);
            }
          }
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === children) {
        let tmp3;
        if (cResult[2] === id) {
          tmp3 = cResult[3];
        }
        return tmp3;
      }
      const tmp4 = (
        <react.Profiler id={id} onRender={first}>
          {children}
        </react.Profiler>
      );
      cResult[1] = children;
      cResult[2] = id;
      cResult[3] = tmp4;
      tmp3 = tmp4;
    }
  : (arg0) => {
      let children;
      let id;
      ({ id, children } = arg0);
      return (
        <react.Profiler
          id={id}
          onRender={react.useCallback(function (arg0, arg1, arg2) {
            if (closure_1_6) {
              if (!(arg0 in closure_1_5)) {
                const self = this;
                if (typeof StatCollector === "function") {
                  const obj = {
                    mount: Object.assign({
                      totalMicroseconds: 0,
                      count: 0,
                      minMicroseconds: null,
                      maxMicroseconds: null,
                    }),
                    update: null,
                    nestedUpdate: null,
                  };
                  const self2 = this;
                  if (typeof StatCollector === "function") {
                    obj.update = Object.assign({
                      totalMicroseconds: 0,
                      count: 0,
                      minMicroseconds: null,
                      maxMicroseconds: null,
                    });
                    const self3 = this;
                    if (typeof StatCollector === "function") {
                      obj.nestedUpdate = Object.assign({
                        totalMicroseconds: 0,
                        count: 0,
                        minMicroseconds: null,
                        maxMicroseconds: null,
                      });
                      tmp4[arg0] = obj;
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
                const mount = closure_1_5[arg0].mount;
                mount.addValue(arg2);
              } else if ("update" === arg1) {
                const update = closure_1_5[arg0].update;
                update.addValue(arg2);
              } else if ("nested-update" === arg1) {
                const nestedUpdate = closure_1_5[arg0].nestedUpdate;
                nestedUpdate.addValue(arg2);
              }
            }
          }, [])}
        >
          {children}
        </react.Profiler>
      );
    };
const result = size.fileFinishedImporting("modules/profiling/ComponentProfiler.tsx");

export default tmp2;
export { StatCollector };
export function clearComponentRenderStats() {
  closure_5 = {};
}
export function getComponentRenderStats() {
  return closure_5;
}
export const serializeComponentRenderAverages = function serializeComponentRenderAverages() {
  let str = "";
  if (0 !== Object.keys(closure_5).length) {
    let num = 20;
    if ("id".length <= 20) {
      num = "id".length;
    }
    const substring = "id".substring;
    let substr = "id".substring(0, num);
    let str2 = " ";
    let padEndResult = substr.padEnd(20, " ");
    let str3 = "Mounts";
    let num2 = 8;
    let num3 = 8;
    if ("Mounts".length <= 8) {
      num3 = "Mounts".length;
    }
    const substring2 = "Mounts".substring;
    let substr1 = "Mounts".substring(0, num3);
    let padEndResult1 = substr1.padEnd(8, " ");
    let str4 = "Mount Mean";
    let num4 = 20;
    if ("Mount Mean".length <= 20) {
      num4 = "Mount Mean".length;
    }
    const substring3 = "Mount Mean".substring;
    let substr2 = "Mount Mean".substring(0, num4);
    let padEndResult2 = substr2.padEnd(20, " ");
    let str5 = "Updates";
    let num5 = 8;
    if ("Updates".length <= 8) {
      num5 = "Updates".length;
    }
    const substring4 = "Updates".substring;
    let substr3 = "Updates".substring(0, num5);
    let padEndResult3 = substr3.padEnd(8, " ");
    let str6 = "Update Mean";
    let num6 = 20;
    if ("Update Mean".length <= 20) {
      num6 = "Update Mean".length;
    }
    const substring5 = "Update Mean".substring;
    let substr4 = "Update Mean".substring(0, num6);
    let padEndResult4 = substr4.padEnd(20, " ");
    let str7 = "Nested";
    let num7 = 8;
    if ("Nested".length <= 8) {
      num7 = "Nested".length;
    }
    const substring6 = "Nested".substring;
    let substr5 = "Nested".substring(0, num7);
    let padEndResult5 = substr5.padEnd(8, " ");
    let str8 = "Nested Mean";
    let num8 = 20;
    if ("Nested Mean".length <= 20) {
      num8 = "Nested Mean".length;
    }
    const substring7 = "Nested Mean".substring;
    let substr6 = "Nested Mean".substring(0, num8);
    const _HermesInternal = HermesInternal;
    let str9 = "|\n";
    let str10 = "|";
    let str11 = "|";
    const _Object = Object;
    const text = `Component Render Stats (microseconds):
  ${"|" + tmp + "|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + obj7.padEnd(20, " ") + "|\n"}`;
    const entries = Object.entries(closure_5);
    str = `Component Render Stats (microseconds):
  ${"|" + tmp + "|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + obj7.padEnd(20, " ") + "|\n"}${arr.map(
    (item) => {
      let arr;
      let tmp;
      [arr, tmp] = item;
      let num = 20;
      if (arr.length <= 20) {
        num = arr.length;
      }
      const substr = arr.substring(0, num);
      const padEndResult = substr.padEnd(20, " ");
      const str = tmp.mount.count;
      const str1 = str.toString();
      let num2 = 8;
      if (str1.length <= 8) {
        num2 = str1.length;
      }
      const substr1 = str1.substring(0, num2);
      const padEndResult1 = substr1.padEnd(8, " ");
      const str2 = tmp.mount.mean;
      const str7 = str2.toString();
      let num3 = 20;
      if (str7.length <= 20) {
        num3 = str7.length;
      }
      const substr2 = str7.substring(0, num3);
      const padEndResult2 = substr2.padEnd(20, " ");
      const str3 = tmp.update.count;
      const str8 = str3.toString();
      let num4 = 8;
      if (str8.length <= 8) {
        num4 = str8.length;
      }
      const substr3 = str8.substring(0, num4);
      const padEndResult3 = substr3.padEnd(8, " ");
      const str4 = tmp.update.mean;
      const str9 = str4.toString();
      let num5 = 20;
      if (str9.length <= 20) {
        num5 = str9.length;
      }
      const substr4 = str9.substring(0, num5);
      const padEndResult4 = substr4.padEnd(20, " ");
      const str5 = tmp.nestedUpdate.count;
      const str10 = str5.toString();
      let num6 = 8;
      if (str10.length <= 8) {
        num6 = str10.length;
      }
      const substr5 = str10.substring(0, num6);
      const padEndResult5 = substr5.padEnd(8, " ");
      const str6 = tmp.nestedUpdate.mean;
      const str11 = str6.toString();
      let num7 = 20;
      if (str11.length <= 20) {
        num7 = str11.length;
      }
      const substr6 = str11.substring(0, num7);
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
        padEndResult5 +
        "|" +
        substr6.padEnd(20, " ") +
        "|\n"
      );
    },
  )}`;
  }
  return str;
};
export function resetComponentProfiler() {
  closure_5 = {};
}
export function pauseComponentProfiler() {
  c6 = false;
}
export function resumeComponentProfiler() {
  c6 = true;
}
export function dumpStats() {
  return closure_5;
}
