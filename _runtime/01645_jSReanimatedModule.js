// === Module 1645: jSReanimatedModule ===

// Module 1645 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1646 */;
import importDefaultResult1 from "importDefaultResult1" /* 1662 */;
import isJest from "isJest" /* 1639 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;