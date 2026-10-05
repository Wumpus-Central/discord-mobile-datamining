// === Module 13482: StateManager ===

// Module 13482 (StateManager)
import _modDef1342 from "module_1342" /* 1342 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/StateManager.tsx");
class StateManager {
  constructor() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const merged = Object.assign({ dirty: false });
    merged.state = merged.getInitialState();
    merged.alwaysUpdateState = flag;
    return merged;
  }
  shouldCommit() {
    return true;
  }
  setState(arg0) {
    const obj = {};
    const merged = Object.assign(this.state);
    const merged1 = Object.assign(arg0);
    this.state = obj;
  }
  getState() {
    return this.state;
  }
  reset() {
    this.dirty = false;
    this.state = this.getInitialState();
  }
  update() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const self = this;
    const getNextState = this.getNextState;
    const obj2 = {};
    const merged = Object.assign(this.state);
    const merged1 = Object.assign(obj);
    const nextState = getNextState(obj2);
    if (flag) {
      const tmp14 = _modDef1342;
      self.dirty = !tmp14(nextState, self.getInitialState());
    } else {
      const _Object = Object;
      const keys = Object.keys(nextState);
      for (const item10021 of keys) {
        let dirty = self.dirty || !_modDef1342(self.state[item10021], nextState[item10021]);
        self.dirty = dirty;
        continue;
      }
    }
    const tmp15 = self.dirty && self.shouldCommit();
    const tmp16 = tmp15 || self.alwaysUpdateState;
    if (tmp16) {
      self.state = nextState;
    }
    let flag2 = tmp15;
    if (flag2) {
      self.dirty = false;
      self.didCommit(self.state);
      flag2 = true;
    }
    return flag2;
  }
  forceUpdate() {
    this.dirty = false;
    this.didCommit(this.state);
  }
}
const prototype = StateManager.prototype;

export default StateManager;