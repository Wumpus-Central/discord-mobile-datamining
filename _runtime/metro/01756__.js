// === Module 1756: ? ===

// Module 1756
import NativeWorklets from "NativeWorklets" /* 1712 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1719 */;

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