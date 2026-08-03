// === Module 3806: isIterable ===

// Module 3806 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3807) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3808) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);