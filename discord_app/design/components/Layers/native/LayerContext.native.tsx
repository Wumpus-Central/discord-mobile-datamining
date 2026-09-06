// === Module 7157: LayerContext ===

// Module 7157 (LayerContext)
import noop from "module_19" /* 19 */;

class LayerContextManager {
  constructor() {
    merged = Object.assign({ surfaceRef: null, items: null, invalidate: null });
    merged[0] = { current: null };
    merged[1] = [];
    merged[2] = function invalidate() {
      return null;
    };
    return merged;
  }
}
const prototype = LayerContextManager.prototype;
prototype["add"] = function add(key, component) {
  closure_0 = key;
  const items = this.items;
  this.items = items.filter((key) => key.key !== closure_0);
  const items1 = this.items;
  items1.push({ key, component });
  this.invalidate();
};
prototype["remove"] = function remove(arg0) {
  closure_0 = arg0;
  const items = this.items;
  this.items = items.filter((key) => key.key !== closure_0);
  this.invalidate();
};
prototype["setSurfaceRef"] = function setSurfaceRef(current) {
  this.surfaceRef.current = current;
};
let merged = Object.assign({ surfaceRef: null, items: null, invalidate: null });
merged[0] = { current: null };
merged[1] = [];
merged[2] = function invalidate() {
  return null;
};
const context = noop.createContext(merged);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Layers/native/LayerContext.native.tsx");

export { LayerContextManager };
export const LayerContext = context;