// _runtime/04009_isIterable.js
import { isIterable } from "04010_isIterable.js";
import { useShallow } from "04011_useShallow.js";
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