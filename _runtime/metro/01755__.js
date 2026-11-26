// === Module 1755: ? ===

// Module 1755
import NativeWorklets from "NativeWorklets" /* 1711 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1718 */;

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