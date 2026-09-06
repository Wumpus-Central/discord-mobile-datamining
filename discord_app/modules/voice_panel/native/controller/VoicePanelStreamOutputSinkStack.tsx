// === Module 17082: cleanUp ===

// Module 17082 (cleanUp)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;

let result = require("set").fileFinishedImporting("modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx");
class VoicePanelStreamOutputSinkStack {
  constructor(arg0) {
    flag = arg1;
    if (arg1 === undefined) {
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
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    let first = tmp4[0];
    let _Array = Array;
    let arr = Array.from(tmp4[1]);
    let _HermesInternal = HermesInternal;
    let str = "[Stream:";
    let tmp6 = first;
    let str2 = ", Locks:[";
    let str3 = "]]";
    arr = items.push("[Stream:" + first + ", Locks:[" + arr.join(",") + "]]");
    continue;
  }
};
prototype["setHasActiveVideoOutputSink"] = function setHasActiveVideoOutputSink(closure_1) {
  const self = this;
  const activeSinks = this.activeSinks;
  let set = activeSinks.get(arg1);
  if (set == null) {
    const _Set = Set;
    set = new Set();
  }
  const hasItem = set.has(closure_1);
  if (arg2) {
    if (!hasItem) {
      set.add(closure_1);
      if (1 === set.size) {
        self.setActive(arg1, true, self.sourceId(closure_1));
        const activeSinks3 = self.activeSinks;
        const result = activeSinks3.set(arg1, set);
      }
    }
  } else if (hasItem) {
    set.delete(closure_1);
    if (0 === set.size) {
      self.setActive(arg1, false, self.sourceId(closure_1));
      const activeSinks2 = self.activeSinks;
      activeSinks2.delete(arg1);
    }
  }
};
prototype["clearLock"] = function clearLock(closure_1) {
  const self = this;
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, obj] = tmp4;
    let obj2 = obj;
    if (obj.has(closure_1)) {
      let tmp6 = obj;
      let deleteResult = obj2.delete(closure_1);
      if (0 === obj2.size) {
        let tmp8 = tmp5;
        let setActiveResult = self.setActive(tmp5, false, self.sourceId(closure_1));
        let activeSinks = self.activeSinks;
        let deleteResult1 = activeSinks.delete(tmp5);
      }
    }
    continue;
  }
};
prototype["setActive"] = function setActive(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const mediaEngine = this.mediaEngine;
  mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, closure_1, closure_2));
};
prototype["sourceId"] = function sourceId(closure_1) {
  return "VoicePanelStreamOutputSinkStack-" + closure_1;
};

export default VoicePanelStreamOutputSinkStack;
export const useSetHasActiveVideoOutputSink = function useSetHasActiveVideoOutputSink(streamOutputSinkStack) {
  closure_0 = streamOutputSinkStack;
  id = id.useId();
  const items = [id, streamOutputSinkStack];
  const callback = id.useCallback((arg0, arg1) => {
    const result = streamOutputSinkStack.setHasActiveVideoOutputSink(id, arg0, arg1);
  }, items);
  const items1 = [id, callback, streamOutputSinkStack];
  const effect = id.useEffect(() => () => closure_0.clearLock(closure_1), items1);
  return callback;
};