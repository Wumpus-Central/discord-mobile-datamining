// _runtime/metro/13113__.js
import setupIntegration from "13095__.js";

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function () {
        const items = [...arguments];
        const originalFunction = closure_1_0(13045).getOriginalFunction(this);
        const obj = closure_1_0(13045);
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
