// === Module 4105: isIterable ===

// Module 4105 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4106) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4107) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);