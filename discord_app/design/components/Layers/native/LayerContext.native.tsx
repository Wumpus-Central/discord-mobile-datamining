// discord_app/design/components/Layers/native/LayerContext.native.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
  closure_0 = key;
  const items = this.items;
  this.items = items.filter((item, index) => item.key !== closure_0);
  const items1 = this.items;
  items1.push({ key, component });
  this.invalidate();
};
prototype["remove"] = function remove(arg0) {
  closure_0 = arg0;
  const items = this.items;
  this.items = items.filter((item, index) => item.key !== closure_0);
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
const context = importAllResult.createContext(obj);
const result = require("obj132").fileFinishedImporting("design/components/Layers/native/LayerContext.native.tsx");

export { LayerContextManager };
export const LayerContext = context;