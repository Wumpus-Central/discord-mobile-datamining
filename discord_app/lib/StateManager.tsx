// discord_app/lib/StateManager.tsx
import { isUndefinedOrNull } from "../../_runtime/00659_isUndefinedOrNull.js";
const result = require("set").fileFinishedImporting("lib/StateManager.tsx");
class StateManager {
  constructor() {
    flag = global;
    if (global === undefined) {
      flag = true;
    }
    obj = Object.create(new.target.prototype);
    obj.state = obj.getInitialState();
    obj.alwaysUpdateState = flag;
    return obj;
  }
}
const prototype = StateManager.prototype;
prototype["shouldCommit"] = function shouldCommit() {
  return true;
};
prototype["setState"] = function setState(arg0) {
  const merged = Object.assign(this.state);
  const merged1 = Object.assign(arg0);
  this.state = {};
};
prototype["getState"] = function getState() {
  return this.state;
};
prototype["reset"] = function reset() {
  this.dirty = false;
  this.state = this.getInitialState();
};
prototype["update"] = function update() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  obj = {};
  const merged = Object.assign(this.state);
  const merged1 = Object.assign(obj);
  const nextState = this.getNextState(obj);
  if (flag) {
    self.dirty = !isUndefinedOrNull(nextState, self.getInitialState());
    const tmp14 = isUndefinedOrNull;
  } else {
    const _Object = Object;
    const keys = Object.keys(nextState);
    for (const item10021 of keys) {
      let tmp8 = item10021;
      let dirty = self.dirty;
      if (!dirty) {
        let tmp9 = importDefault;
        let tmp10 = dependencyMap;
        let tmp11 = item10021;
        dirty = !isUndefinedOrNull(self.state[tmp8], nextState[tmp8]);
      }
      self.dirty = dirty;
      continue;
    }
  }
  const tmp15 = self.dirty && self.shouldCommit();
  let alwaysUpdateState = tmp15;
  if (!tmp15) {
    alwaysUpdateState = self.alwaysUpdateState;
  }
  if (alwaysUpdateState) {
    self.state = nextState;
  }
  let flag2 = tmp15;
  if (flag2) {
    self.dirty = false;
    self.didCommit(self.state);
    flag2 = true;
  }
  return flag2;
};
prototype["forceUpdate"] = function forceUpdate() {
  this.dirty = false;
  this.didCommit(this.state);
};

export default StateManager;