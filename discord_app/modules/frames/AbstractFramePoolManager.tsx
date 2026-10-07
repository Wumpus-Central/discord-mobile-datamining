// discord_app/modules/frames/AbstractFramePoolManager.tsx
import FrameStackLevel from "FrameStackLevel.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/AbstractFramePoolManager.tsx");
class AbstractFramePoolManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj.entries = map;
    map1 = new Map();
    obj.targets = map1;
    map2 = new Map();
    obj.backgrounded = map2;
    set = new Set();
    obj.changeListeners = set;
    obj.attachSeq = 0;
    obj.subscribe = function subscribe(arg0) {
      closure_0 = arg0;
      let changeListeners = closure_0.changeListeners;
      changeListeners.add(arg0);
      return () => {
        const changeListeners = obj.changeListeners;
        changeListeners.delete(closure_0);
      };
    };
    obj.config = global;
    return obj;
  }
}
const prototype = AbstractFramePoolManager.prototype;
prototype["emitChange"] = function emitChange() {
  for (const item10006 of tmp) {
    let item10006Result = item10006();
    continue;
  }
};
prototype["registerFrameEntry"] = function registerFrameEntry(id, first1) {
  const entries = this.entries;
  const result = entries.set(id, first1);
  this.reconcile(id);
};
prototype["removeFrameEntry"] = function removeFrameEntry(id) {
  this.unplace(id);
  const entries = this.entries;
  entries.delete(id);
  this.clearTargets(id);
  this.emitChange();
};
prototype["getFrameEntry"] = function getFrameEntry(arg0) {
  const entries = this.entries;
  value = entries.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["hasFrameEntry"] = function hasFrameEntry(id) {
  const entries = this.entries;
  return entries.has(id);
};
prototype["registerFrameTarget"] = function registerFrameTarget(id, target, level, state) {
  const self = this;
  const targets = this.targets;
  value = targets.get(id);
  if (null == value) {
    const _Map = Map;
    const map = new Map();
    const targets2 = self.targets;
    const result = targets2.set(id, map);
    value = map;
  }
  const obj = { target, level, seq: +self.attachSeq, state };
  self.attachSeq = +self.attachSeq + 1;
  const result1 = value.set(target, obj);
  self.reconcile(id);
};
prototype["updateFrameTargetState"] = function updateFrameTargetState(arg0, arg1, state) {
  const self = this;
  const targets = this.targets;
  value = targets.get(arg0);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(arg1);
  }
  if (tmp3) {
    value2.state = state;
    self.emitChange();
  }
};
prototype["removeFrameTarget"] = function removeFrameTarget(id, arg1) {
  const self = this;
  const targets = this.targets;
  value = targets.get(id);
  let deleteResult = null != value;
  if (deleteResult) {
    deleteResult = value.delete(arg1);
  }
  if (deleteResult) {
    self.reconcile(id);
  }
};
prototype["getWinningTarget"] = function getWinningTarget(id) {
  const self = this;
  let tmp = null;
  if (this.hasFrameEntry(id)) {
    const pickWinnerResult = self.pickWinner(id);
    let target;
    if (pickWinnerResult != null) {
      target = pickWinnerResult.target;
    }
    if (target == null) {
      target = null;
    }
    tmp = target;
  }
  return tmp;
};
prototype["getWinningTargetState"] = function getWinningTargetState(id) {
  const self = this;
  let tmp = null;
  if (this.hasFrameEntry(id)) {
    const pickWinnerResult = self.pickWinner(id);
    state = undefined;
    if (pickWinnerResult != null) {
      state = pickWinnerResult.state;
    }
    if (state == null) {
      state = null;
    }
    tmp = state;
  }
  return tmp;
};
prototype["clearTargets"] = function clearTargets(id) {
  const targets = this.targets;
  targets.delete(id);
  this.cancelBackground(id);
};
prototype["reconcile"] = function reconcile(id) {
  const self = this;
  if (this.hasFrameEntry(id)) {
    const pickWinnerResult = self.pickWinner(id);
    if (null == pickWinnerResult) {
      self.unplace(id);
      self.background(id);
    } else {
      self.cancelBackground(id);
      self.place(id, pickWinnerResult.target, pickWinnerResult.level);
    }
    self.emitChange();
  }
};
prototype["pickWinner"] = function pickWinner(id) {
  const targets = this.targets;
  value = targets.get(id);
  if (null == value) {
    return null;
  } else {
    let tmp16 = null;
    const values = value.values();
    for (const item10010 of values) {
      let tmp4 = null == tmp16;
      if (!tmp4) {
        tmp4 =
          FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[item10010.level] >
          FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[tmp16.level];
      }
      if (!tmp4) {
        let tmp13 =
          FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[item10010.level] ===
          FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[tmp16.level];
        if (tmp13) {
          tmp13 = item10010.seq > tmp16.seq;
        }
        tmp4 = tmp13;
      }
      if (tmp4) {
        tmp16 = item10010;
      }
      continue;
    }
    return tmp16;
  }
};
prototype["background"] = function background(id) {
  const self = this;
  const backgrounded = this.backgrounded;
  if (!backgrounded.has(id)) {
    const backgrounded2 = self.backgrounded;
    const obj = { timer: self.armEviction(id, self.config.timeoutMs), condemned: false };
    const result = backgrounded2.set(id, obj);
    self.reconcileCondemned();
  }
};
prototype["reconcileCondemned"] = function reconcileCondemned() {
  const self = this;
  let num = 0;
  const diff = this.backgrounded.size - this.config.maxBackgrounded;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp10 = num < diff;
    let tmp11 = tmp10;
    if (tmp10 !== tmp7.condemned) {
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(tmp7.timer);
      let num2 = 3000;
      if (!tmp11) {
        num2 = self.config.timeoutMs;
      }
      tmp7.timer = self.armEviction(tmp6, num2);
      tmp7.condemned = tmp11;
    }
    num = num + 1;
    continue;
  }
  tmp2 = this.backgrounded[Symbol.iterator]();
};
prototype["armEviction"] = function armEviction(id, timeoutMs) {
  const self = this;
  closure_0 = id;
  return setTimeout(() => self.evict(closure_0), timeoutMs);
};
prototype["cancelBackground"] = function cancelBackground(id) {
  const self = this;
  const backgrounded = this.backgrounded;
  value = backgrounded.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    const backgrounded2 = self.backgrounded;
    backgrounded2.delete(id);
    self.reconcileCondemned();
  }
};
prototype["evict"] = function evict(id) {
  this.cancelBackground(id);
  this.destroyFrame(id);
};

export default AbstractFramePoolManager;
