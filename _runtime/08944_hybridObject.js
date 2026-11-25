// === Module 8944: hybridObject ===

// Module 8944 (hybridObject)
import _mod5084 from "module_5084" /* 5084 */;

const NitroModules = _mod5084.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5084.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5084.NitroModules;
const NitroModules4 = _mod5084.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");