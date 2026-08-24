// === Module 4009: isIterable ===

// Module 4009 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4010) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4011) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);