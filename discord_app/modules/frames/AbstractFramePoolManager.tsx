// === Module 16597: AbstractFramePoolManager ===

// Module 16597 (AbstractFramePoolManager)
import FrameStackLevel from "FrameStackLevel" /* 16598 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, set;

let result = size.fileFinishedImporting("modules/frames/AbstractFramePoolManager.tsx");
class AbstractFramePoolManager {
  constructor(config) {
    const obj = Object.create(new.target.prototype);
    obj.entries = new Map();
    new Map();
    obj.targets = new Map();
    new Map();
    obj.backgrounded = new Map();
    new Map();
    obj.changeListeners = new Set();
    obj.attachSeq = 0;
    obj.subscribe = function subscribe(arg0) {
      let closure_0;
      changeListeners = arg0;
      changeListeners = changeListeners.changeListeners;
      changeListeners.add(arg0);
      return () => {
        changeListeners = obj.changeListeners;
        changeListeners.delete(closure_0);
      };
    };
    obj.config = config;
    new Set();
    return obj;
  }
  emitChange() {
    const changeListeners = this.changeListeners;
    for (const item10006 of changeListeners) {
      let item10006Result = item10006();
      continue;
    }
  }
  registerFrameEntry(id, first1) {
    const entries = this.entries;
    const result = entries.set(id, first1);
    this.reconcile(id);
  }
  removeFrameEntry(id) {
    this.unplace(id);
    const entries = this.entries;
    entries.delete(id);
    this.clearTargets(id);
    this.emitChange();
  }
  getFrameEntry(arg0) {
    const entries = this.entries;
    let value = entries.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  hasFrameEntry(id) {
    const entries = this.entries;
    return entries.has(id);
  }
  registerFrameTarget(id, target, level, state) {
    const self = this;
    const targets = this.targets;
    let value = targets.get(id);
    if (null == value) {
      const _Map = Map;
      const self2 = this;
      const self3 = this;
      map = new Map();
      const targets2 = self.targets;
      const result = targets2.set(id, map);
      value = map;
    }
    const obj = { target, level, seq: +self.attachSeq, state };
    self.attachSeq = +self.attachSeq + 1;
    const result1 = value.set(target, obj);
    self.reconcile(id);
  }
  updateFrameTargetState(arg0, arg1, state) {
    const self = this;
    const targets = this.targets;
    const value = targets.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    const tmp3 = null != value2 && value2.state !== state;
    if (tmp3) {
      value2.state = state;
      self.emitChange();
    }
  }
  removeFrameTarget(id, arg1) {
    const self = this;
    const targets = this.targets;
    const value = targets.get(id);
    const deleteResult = null != value && value.delete(arg1);
    if (deleteResult) {
      self.reconcile(id);
    }
  }
  getWinningTarget(id) {
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
  }
  getWinningTargetState(id) {
    const self = this;
    let tmp = null;
    if (this.hasFrameEntry(id)) {
      const pickWinnerResult = self.pickWinner(id);
      let state;
      if (pickWinnerResult != null) {
        state = pickWinnerResult.state;
      }
      if (state == null) {
        state = null;
      }
      tmp = state;
    }
    return tmp;
  }
  clearTargets(id) {
    const targets = this.targets;
    targets.delete(id);
    this.cancelBackground(id);
  }
  reconcile(id) {
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
  }
  pickWinner(id) {
    const targets = this.targets;
    const value = targets.get(id);
    if (null == value) {
      return null;
    } else {
      let tmp16 = null;
      const values = value.values();
      for (const item10010 of values) {
        let tmp4 = null == tmp16;
        if (!tmp4) {
          tmp4 = FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[item10010.level] > FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[tmp16.level];
        }
        if (!tmp4) {
          let tmp13 = FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[item10010.level] === FrameStackLevel.FRAME_STACK_LEVEL_PRIORITY[tmp16.level];
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
  }
  background(id) {
    const self = this;
    const backgrounded = this.backgrounded;
    if (!backgrounded.has(id)) {
      const backgrounded2 = self.backgrounded;
      const obj = { timer: self.armEviction(id, self.config.timeoutMs), condemned: false };
      set = backgrounded2.set;
      const result = set(id, obj);
      self.reconcileCondemned();
    }
  }
  reconcileCondemned() {
    let tmp6;
    let tmp7;
    const self = this;
    let num = 0;
    const diff = this.backgrounded.size - this.config.maxBackgrounded;
    const tmp2 = this.backgrounded[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let tmp10 = num < diff;
      let tmp11 = tmp10;
      if (tmp10 !== tmp7.condemned) {
        let _clearTimeout = clearTimeout;
        let clearTimeoutResult = clearTimeout(tmp7.timer);
        let num2 = 3000;
        let armEviction = self.armEviction;
        if (!tmp11) {
          num2 = self.config.timeoutMs;
        }
        tmp7.timer = armEviction(tmp6, num2);
        tmp7.condemned = tmp11;
      }
      num = num + 1;
      continue;
    }
  }
  armEviction(id, timeoutMs) {
    const self = this;
    let closure_0 = id;
    return setTimeout(() => self.evict(id), timeoutMs);
  }
  cancelBackground(id) {
    const self = this;
    const backgrounded = this.backgrounded;
    const value = backgrounded.get(id);
    if (null != value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timer);
      const backgrounded2 = self.backgrounded;
      backgrounded2.delete(id);
      self.reconcileCondemned();
    }
  }
  evict(id) {
    this.cancelBackground(id);
    this.destroyFrame(id);
  }
}
const prototype = AbstractFramePoolManager.prototype;

export default AbstractFramePoolManager;