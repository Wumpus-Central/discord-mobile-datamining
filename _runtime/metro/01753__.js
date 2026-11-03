// === Module 1753: ? ===

// Module 1753
import NativeWorklets from "NativeWorklets" /* 1709 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1716 */;

require = arg1;
const dependencyMap = arg6;

export function createSynchronizable(__initData, fixedType) {
  fixedType = undefined;
  if (fixedType != null) {
    fixedType = fixedType.fixedType;
  }
  const WorkletsModule = NativeWorklets.WorkletsModule;
  let serializable = __initData;
  if (!fixedType) {
    serializable = registerCustomSerializable.createSerializable(__initData);
    const tmp3Result = registerCustomSerializable;
  }
  return globalThis.__synchronizableUnpacker(WorkletsModule.createSynchronizable(serializable, fixedType), fixedType);
}