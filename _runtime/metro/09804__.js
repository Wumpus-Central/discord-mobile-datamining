// === Module 9804: ? ===

// Module 9804
import setupIntegration from "module_9786" /* 9786 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        items = [...arguments];
        const originalFunction = closure_1_0(9736).getOriginalFunction(this);
        const obj = closure_1_0(9736);
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