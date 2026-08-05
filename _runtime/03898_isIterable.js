// _runtime/03898_isIterable.js
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require("03899_isIterable.js") /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require("03900_useShallow.js") /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);