// === Module 1662: jSReanimatedModule ===

// Module 1662 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1663 */;
import importDefaultResult1 from "importDefaultResult1" /* 1679 */;
import isJest from "isJest" /* 1656 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;