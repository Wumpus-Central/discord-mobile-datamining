// === Module 12633: weakMap ===

// Module 12633 (weakMap)
import setupIntegration from "setupIntegration" /* 12615 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = callback(12565).getOriginalFunction(this);
        const obj = callback(12565);
        let self = this;
        if (set.has(obj2.getClient())) {
          self = this;
          if (undefined !== originalFunction) {
            self = originalFunction;
          }
        }
        return toString.apply(self, items);
      };
    } catch (err) {
    }
  },
  setup(arg0) {
    const result = closure_3.set(arg0, true);
  }
}));