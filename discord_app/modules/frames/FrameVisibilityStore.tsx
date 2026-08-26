// === Module 14001: isFramePooled ===

// Module 14001 (isFramePooled)
import set from "set" /* 2 */;

class FrameVisibilityStore {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    set = new Set();
    obj[1] = set;
    return obj;
  }
}
const prototype = FrameVisibilityStore.prototype;
prototype["isFramePooled"] = function isFramePooled(frameId) {
  const visibility = this.visibility;
  return visibility.has(frameId);
};
prototype["isFrameVisible"] = function isFrameVisible(frameId) {
  const visibility = this.visibility;
  return false !== visibility.get(frameId);
};
prototype["subscribe"] = function subscribe(arg0) {
  const self = this;
  closure_0 = arg0;
  let listeners = this.listeners;
  listeners.add(arg0);
  return () => {
    const listeners = self.listeners;
    listeners.delete(closure_0);
  };
};
prototype["setFrameVisible"] = function setFrameVisible(arg0, arg1) {
  const self = this;
  const visibility = this.visibility;
  if (visibility.get(arg0) !== arg1) {
    const visibility2 = self.visibility;
    const result = visibility2.set(arg0, arg1);
    self.emit();
  }
};
prototype["removeFrame"] = function removeFrame(arg0) {
  const self = this;
  const visibility = this.visibility;
  if (visibility.delete(arg0)) {
    self.emit();
  }
};
prototype["emit"] = function emit() {
  for (const item10006 of tmp) {
    let item10006Result = item10006();
    continue;
  }
};
let obj = Object.create(FrameVisibilityStore.prototype);
obj[0] = new Map();
let set = new Set();
obj[1] = set;
let result = set.fileFinishedImporting("modules/frames/FrameVisibilityStore.tsx");

export default obj;