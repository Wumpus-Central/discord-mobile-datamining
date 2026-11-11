// _runtime/metro/09805__.js
import setupIntegration from "09787__.js";

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function () {
        items = [...arguments];
        const originalFunction = closure_1_0(9737).getOriginalFunction(this);
        const obj = closure_1_0(9737);
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
