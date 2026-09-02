// _runtime/01661_jSReanimatedModule.js
import _makeShareableClone from "01662__makeShareableClone.js";
import importDefaultResult1 from "01678_importDefaultResult1.js";
import isJest from "01655_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
