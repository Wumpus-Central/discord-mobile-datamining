// === Module 12663: ? ===

// Module 12663
import setupIntegration from "module_12645" /* 12645 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = closure_1_0(12595).getOriginalFunction(this);
        const obj = closure_1_0(12595);
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
    const result = weakMap.set(arg0, true);
  }
}));