// _runtime/04006_isIterable.js
import { isIterable } from "04007_isIterable.js";
import { useShallow } from "04008_useShallow.js";
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