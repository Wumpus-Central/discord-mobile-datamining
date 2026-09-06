// _runtime/01645_jSReanimatedModule.js
import _makeShareableClone from "01646__makeShareableClone.js";
import importDefaultResult1 from "01662_importDefaultResult1.js";
import isJest from "01639_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
