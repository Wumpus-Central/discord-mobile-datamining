// === Module 4010: isIterable ===

// Module 4010 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4011) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4012) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);