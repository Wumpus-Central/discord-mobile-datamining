// discord_app/modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx
import c from "../../../../../_runtime/00576_c.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx");
class VoicePanelStreamOutputSinkStack {
  constructor(arg0) {
    flag = fn;
    if (fn === undefined) {
      flag = false;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj.activeSinks = map;
    obj.timer = -1;
    obj.mediaEngine = global;
    if (flag) {
      _setInterval = setInterval;
      num = 2000;
      obj.timer = setInterval(() => obj.logSinks(), 2000);
    }
    return obj;
  }
}
const prototype = VoicePanelStreamOutputSinkStack.prototype;
prototype["cleanUp"] = function cleanUp() {
  clearInterval(this.timer);
};
prototype["logSinks"] = function logSinks() {
  const items = [];
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    let first = tmp4[0];
    let _Array = Array;
    let arr = Array.from(tmp4[1]);
    let _HermesInternal = HermesInternal;
    let str = "[Stream:";
    let str2 = ", Locks:[";
    let str3 = "]]";
    let arr3 = items.push("[Stream:" + first + ", Locks:[" + arr.join(",") + "]]");
    continue;
  }
  tmp = this.activeSinks[Symbol.iterator]();
};
prototype["setHasActiveVideoOutputSink"] = function setHasActiveVideoOutputSink(dependencyMap, arg1, arg2) {
  const self = this;
  const activeSinks = this.activeSinks;
  let set = activeSinks.get(arg1);
  if (set == null) {
    const _Set = Set;
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
};
prototype["clearLock"] = function clearLock(dependencyMap) {
  const self = this;
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
  tmp = this.activeSinks[Symbol.iterator]();
};
prototype["setActive"] = function setActive(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const mediaEngine = this.mediaEngine;
  mediaEngine.eachConnection((setHasActiveVideoOutputSink) =>
    setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, closure_1, closure_2),
  );
};
prototype["sourceId"] = function sourceId(dependencyMap) {
  return "VoicePanelStreamOutputSinkStack-" + dependencyMap;
};

export default VoicePanelStreamOutputSinkStack;
export const useSetHasActiveVideoOutputSink = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSetHasActiveVideoOutputSink(arg0) {
      const hasActiveVideoOutputSink = arg0;
      const cResult = c.c(10);
      const id = noop.useId();
      if (cResult[0] === id) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === id) {
          if (cResult[4] === arg0) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] === id) {
            if (cResult[7] === tmp3) {
              if (cResult[8] === arg0) {
                let tmp5 = cResult[9];
              }
              const effect = noop.useEffect(tmp4, tmp5);
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
    }
  : function useSetHasActiveVideoOutputSink(arg0) {
      const hasActiveVideoOutputSink = arg0;
      const id = noop.useId();
      const items = [id, arg0];
      const callback = noop.useCallback((arg0, arg1) => {
        const result = hasActiveVideoOutputSink.setHasActiveVideoOutputSink(id, arg0, arg1);
      }, items);
      const items1 = [id, callback, arg0];
      const effect = noop.useEffect(() => () => hasActiveVideoOutputSink.clearLock(id), items1);
      return callback;
    };
