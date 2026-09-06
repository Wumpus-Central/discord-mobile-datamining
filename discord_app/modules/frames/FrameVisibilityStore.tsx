// discord_app/modules/frames/FrameVisibilityStore.tsx
import size from "../../../_runtime/metro/00002__.js";

class FrameVisibilityStore {
  constructor() {
    merged = Object.assign({ visibility: null, listeners: null });
    map = new Map();
    merged[0] = map;
    set = new Set();
    merged[1] = set;
    return merged;
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
let merged = Object.assign({ visibility: null, listeners: null });
merged[0] = new Map();
let map = new Map();
merged[1] = new Set();
let result = size.fileFinishedImporting("modules/frames/FrameVisibilityStore.tsx");

export default merged;
