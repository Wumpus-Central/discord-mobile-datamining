// === Module 5570: add ===

// Module 5570 (add)
import importAllResult from "noop";

class LayerContextManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = { current: null };
    obj[1] = [];
    obj[2] = function invalidate() {
      return null;
    };
    return obj;
  }
}
const prototype = LayerContextManager.prototype;
prototype["add"] = function add(key, component) {
  let closure_0 = key;
  const items = this.items;
  this.items = items.filter((key) => key.key !== closure_0);
  const items1 = this.items;
  items1.push({ key, component });
  this.invalidate();
};
prototype["remove"] = function remove(arg0) {
  let closure_0 = arg0;
  const items = this.items;
  this.items = items.filter((key) => key.key !== closure_0);
  this.invalidate();
};
prototype["setSurfaceRef"] = function setSurfaceRef(current) {
  this.surfaceRef.current = current;
};
let obj = Object.create(LayerContextManager.prototype);
obj[0] = { current: null };
obj[1] = [];
obj[2] = function invalidate() {
  return null;
};
const context = require("noop").createContext(obj);
const result = require("set").fileFinishedImporting("design/components/Layers/native/LayerContext.native.tsx");

export { LayerContextManager };
export const LayerContext = context;