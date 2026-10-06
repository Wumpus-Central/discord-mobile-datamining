// === Module 17302: VoicePanelStreamOutputSinkStack ===

// Module 17302 (VoicePanelStreamOutputSinkStack)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(10);
  const id = react.useId();
  if (cResult[0] === id) {
    let tmp3;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === id) {
      let tmp4;
      if (cResult[4] === arg0) {
        tmp4 = cResult[5];
      }
      if (cResult[6] === id) {
        if (cResult[7] === tmp3) {
          let tmp5;
          if (cResult[8] === arg0) {
            tmp5 = cResult[9];
          }
          const effect = react.useEffect(tmp4, tmp5);
          return tmp3;
        }
      }
      const items = [id, tmp3, arg0];
      cResult[6] = id;
      cResult[7] = tmp3;
      cResult[8] = arg0;
      cResult[9] = items;
      tmp5 = items;
    }
    const fn2 = function o() {
      return () => hasActiveVideoOutputSink.clearLock(id);
    };
    cResult[3] = id;
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp4 = fn2;
  }
  const fn = function c(arg0, arg1) {
    const result = hasActiveVideoOutputSink.setHasActiveVideoOutputSink(id, arg0, arg1);
  };
  cResult[0] = id;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0 = arg0;
  const id = react.useId();
  const items = [id, arg0];
  const callback = react.useCallback((arg0, arg1) => {
    const result = hasActiveVideoOutputSink.setHasActiveVideoOutputSink(id, arg0, arg1);
  }, items);
  const items1 = [id, callback, arg0];
  const effect = react.useEffect(() => () => hasActiveVideoOutputSink.clearLock(id), items1);
  return callback;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx");
class VoicePanelStreamOutputSinkStack {
  constructor(mediaEngine) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = Object.create(new.target.prototype);
    obj.activeSinks = new Map();
    obj.timer = -1;
    obj.mediaEngine = mediaEngine;
    new Map();
    if (flag) {
      const _setInterval = setInterval;
      obj.timer = setInterval(() => obj.logSinks(), 2000);
    }
    return obj;
  }
  cleanUp() {
    clearInterval(this.timer);
  }
  logSinks() {
    const items = [];
    const tmp = this.activeSinks[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      let first = tmp4[0];
      let _Array = Array;
      let push = items.push;
      let arr = Array.from(tmp4[1]);
      let _HermesInternal = HermesInternal;
      let str = "[Stream:";
      let str2 = ", Locks:[";
      let str3 = "]]";
      let arr3 = push("[Stream:" + first + ", Locks:[" + arr.join(",") + "]]");
      continue;
    }
  }
  setHasActiveVideoOutputSink(dependencyMap, arg1, arg2) {
    const self = this;
    const activeSinks = this.activeSinks;
    set = activeSinks.get(arg1);
    if (set == null) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      set = new Set();
    }
    const hasItem = set.has(dependencyMap);
    if (arg2) {
      if (!hasItem) {
        set.add(dependencyMap);
        if (1 === set.size) {
          self.setActive(arg1, true, self.sourceId(dependencyMap));
          const activeSinks3 = self.activeSinks;
          const result = activeSinks3.set(arg1, set);
        }
      }
    } else if (hasItem) {
      set.delete(dependencyMap);
      if (0 === set.size) {
        self.setActive(arg1, false, self.sourceId(dependencyMap));
        const activeSinks2 = self.activeSinks;
        activeSinks2.delete(arg1);
      }
    }
  }
  clearLock(dependencyMap) {
    let obj;
    let tmp5;
    const self = this;
    const tmp = this.activeSinks[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      [tmp5, obj] = tmp4;
      if (obj.has(dependencyMap)) {
        let deleteResult = obj.delete(dependencyMap);
        if (0 === obj.size) {
          let setActiveResult = self.setActive(tmp5, false, self.sourceId(dependencyMap));
          let activeSinks = self.activeSinks;
          let deleteResult1 = activeSinks.delete(tmp5);
        }
      }
      continue;
    }
  }
  setActive(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const mediaEngine = this.mediaEngine;
    mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, closure_1, closure_2));
  }
  sourceId(dependencyMap) {
    return "VoicePanelStreamOutputSinkStack-" + dependencyMap;
  }
}
const prototype = VoicePanelStreamOutputSinkStack.prototype;

export default VoicePanelStreamOutputSinkStack;
export const useSetHasActiveVideoOutputSink = tmp2;