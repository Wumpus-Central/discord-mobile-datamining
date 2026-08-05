// _runtime/05354_initialize.js
import { onGestureHandlerEvent } from "05355_onGestureHandlerEvent.js";
import { toArray } from "05357_toArray.js";
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = toArray.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5362).install();
    c3 = true;
    const obj2 = module(5362);
  }
};