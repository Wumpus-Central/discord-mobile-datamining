// === Module 1663: jSReanimatedModule ===

// Module 1663 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1664 */;
import importDefaultResult1 from "importDefaultResult1" /* 1680 */;
import isJest from "isJest" /* 1657 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;