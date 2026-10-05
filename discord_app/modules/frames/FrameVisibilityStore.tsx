// === Module 14300: FrameVisibilityStore ===

// Module 14300 (FrameVisibilityStore)
import size from "module_2" /* 2 */;

class FrameVisibilityStore {
  constructor() {
    const merged = Object.assign({ visibility: null, listeners: null });
    merged[0] = new Map();
    new Map();
    merged[1] = new Set();
    new Set();
    return merged;
  }
  isFramePooled(frameId) {
    const visibility = this.visibility;
    return visibility.has(frameId);
  }
  isFrameVisible(frameId) {
    const visibility = this.visibility;
    return false !== visibility.get(frameId);
  }
  subscribe(arg0) {
    const self = this;
    let closure_0 = arg0;
    let listeners = this.listeners;
    listeners.add(arg0);
    return () => {
      const listeners = self.listeners;
      listeners.delete(closure_0);
    };
  }
  setFrameVisible(arg0, arg1) {
    const self = this;
    const visibility = this.visibility;
    if (visibility.get(arg0) !== arg1) {
      const visibility2 = self.visibility;
      const result = visibility2.set(arg0, arg1);
      self.emit();
    }
  }
  removeFrame(arg0) {
    const self = this;
    const visibility = this.visibility;
    if (visibility.delete(arg0)) {
      self.emit();
    }
  }
  emit() {
    const listeners = this.listeners;
    for (const item10006 of listeners) {
      let item10006Result = item10006();
      continue;
    }
  }
}
const prototype = FrameVisibilityStore.prototype;
let merged = Object.assign({ visibility: null, listeners: null });
const map = new Map();
merged[0] = map;
const set = new Set();
merged[1] = set;
let result = size.fileFinishedImporting("modules/frames/FrameVisibilityStore.tsx");

export default merged;