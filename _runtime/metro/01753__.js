// _runtime/metro/01753__.js
import NativeWorklets from "../01709_NativeWorklets.js";
import registerCustomSerializable from "../01716_registerCustomSerializable.js";

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
