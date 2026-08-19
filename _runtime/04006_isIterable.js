// === Module 4006: isIterable ===

// Module 4006 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4007) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4008) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);