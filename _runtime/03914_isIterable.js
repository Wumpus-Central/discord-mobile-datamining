// _runtime/03914_isIterable.js
import { isIterable } from "03915_isIterable.js";
import { useShallow } from "03916_useShallow.js";
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return isIterable.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return useShallow.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);