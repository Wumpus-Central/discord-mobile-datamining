// _runtime/metro/13001__.js
import setupIntegration from "12983__.js";

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function () {
        const items = [...arguments];
        const originalFunction = closure_1_0(12933).getOriginalFunction(this);
        const obj = closure_1_0(12933);
        let self = this;
        if (set.has(obj2.getClient())) {
          self = this;
          if (undefined !== originalFunction) {
            self = originalFunction;
          }
        }
        return toString.apply(self, items);
      };
    } catch (err) {}
  },
  setup(arg0) {
    const result = weakMap.set(arg0, true);
  },
}));
