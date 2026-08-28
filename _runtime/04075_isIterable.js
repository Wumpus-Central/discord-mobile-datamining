// === Module 4075: isIterable ===

// Module 4075 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4076) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4077) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);