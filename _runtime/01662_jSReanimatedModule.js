// _runtime/01662_jSReanimatedModule.js
import _makeShareableClone from "01663__makeShareableClone.js";
import importDefaultResult1 from "01679_importDefaultResult1.js";
import isJest from "01656_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
