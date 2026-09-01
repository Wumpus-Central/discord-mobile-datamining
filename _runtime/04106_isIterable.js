// _runtime/04106_isIterable.js
import { isIterable } from "04107_isIterable.js";
import { useShallow } from "04108_useShallow.js";
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return isIterable /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return useShallow /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);