import _slicedToArray from "_slicedToArray";
import noop from "noop";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx");
class VoicePanelStreamOutputSinkStack {
  constructor(arg0) {
    flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj = Object.create(new.target.prototype);
    _slicedToArray = obj;
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
prototype["setHasActiveVideoOutputSink"] = function setHasActiveVideoOutputSink(noop) {
  const self = this;
  const activeSinks = this.activeSinks;
  let set = activeSinks.get(arg1);
  if (set == null) {
    const _Set = Set;
    set = new Set();
  }
  const hasItem = set.has(noop);
  if (arg2) {
    if (!hasItem) {
      set.add(noop);
      if (1 === set.size) {
        self.setActive(arg1, true, self.sourceId(noop));
        const activeSinks3 = self.activeSinks;
        const result = activeSinks3.set(arg1, set);
      }
    }
  } else if (hasItem) {
    set.delete(noop);
    if (0 === set.size) {
      self.setActive(arg1, false, self.sourceId(noop));
      const activeSinks2 = self.activeSinks;
      activeSinks2.delete(arg1);
    }
  }
};
prototype["clearLock"] = function clearLock(noop) {
  let obj;
  let tmp5;
  const self = this;
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, obj] = tmp4;
    let obj2 = obj;
    if (obj.has(noop)) {
      let tmp6 = obj;
      let deleteResult = obj2.delete(noop);
      if (0 === obj2.size) {
        let tmp8 = tmp5;
        let setActiveResult = self.setActive(tmp5, false, self.sourceId(noop));
        let activeSinks = self.activeSinks;
        let deleteResult1 = activeSinks.delete(tmp5);
      }
    }
    continue;
  }
};
prototype["setActive"] = function setActive(arg0, arg1, arg2) {
  let _slicedToArray = arg0;
  let noop = arg1;
  let closure_2 = arg2;
  const mediaEngine = this.mediaEngine;
  mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(_slicedToArray, noop, closure_2));
};
prototype["sourceId"] = function sourceId(noop) {
  return "VoicePanelStreamOutputSinkStack-" + noop;
};

export default VoicePanelStreamOutputSinkStack;
export const useSetHasActiveVideoOutputSink = function useSetHasActiveVideoOutputSink(streamOutputSinkStack) {
  let _slicedToArray = streamOutputSinkStack;
  id = id.useId();
  const items = [id, streamOutputSinkStack];
  const callback = id.useCallback((arg0, arg1) => {
    const result = streamOutputSinkStack.setHasActiveVideoOutputSink(id, arg0, arg1);
  }, items);
  const items1 = [id, callback, streamOutputSinkStack];
  const effect = id.useEffect(() => () => _slicedToArray.clearLock(noop), items1);
  return callback;
};