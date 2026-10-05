// discord_app/design/components/Layers/native/LayerContext.native.tsx
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

function invalidate() {
  return null;
}
class LayerContextManager {
  constructor() {
    const merged = Object.assign({ surfaceRef: null, items: null, invalidate: null });
    merged[0] = { current: null };
    merged[1] = [];
    merged[2] = invalidate;
    return merged;
  }
  add(key, component) {
    let closure_0 = key;
    const items = this.items;
    this.items = items.filter((key) => key.key !== closure_0);
    const items1 = this.items;
    const obj = { key, component };
    items1.push(obj);
    this.invalidate();
  }
  remove(arg0) {
    let closure_0 = arg0;
    const items = this.items;
    this.items = items.filter((key) => key.key !== closure_0);
    this.invalidate();
  }
  setSurfaceRef(current) {
    this.surfaceRef.current = current;
  }
}
const prototype = LayerContextManager.prototype;
let merged = Object.assign({ surfaceRef: null, items: null, invalidate: null });
merged[0] = { current: null };
merged[1] = [];
merged[2] = invalidate;
const context = react.createContext(merged);
const result = size.fileFinishedImporting("design/components/Layers/native/LayerContext.native.tsx");

export { LayerContextManager };
export const LayerContext = context;
