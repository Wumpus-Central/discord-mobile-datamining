// _runtime/01663_jSReanimatedModule.js
import _makeShareableClone from "01664__makeShareableClone.js";
import importDefaultResult1 from "01680_importDefaultResult1.js";
import isJest from "01657_isJest.js";

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;