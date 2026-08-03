// === Module 3868: isIterable ===

// Module 3868 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3869) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3870) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);