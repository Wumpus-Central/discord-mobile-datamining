import { onGestureHandlerEvent } from "05370_onGestureHandlerEvent.js";
import { toArray } from "05372_toArray.js";
// _runtime/05369_initialize.js
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = false;
arg5.initialize = function initialize() {
  onGestureHandlerEvent /* onGestureHandlerEvent */.startListening();
};
arg5.maybeInitializeFabric = function maybeInitializeFabric() {
  let isFabricResult = toArray /* toArray */.isFabric();
  if (isFabricResult) {
    isFabricResult = !c3;
  }
  if (isFabricResult) {
    module(5377).install();
    c3 = true;
    const obj2 = module(5377);
  }
};