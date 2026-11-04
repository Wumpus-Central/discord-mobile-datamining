// === Module 9999: hybridObject ===

// Module 9999 (hybridObject)
import _mod5218 from "module_5218" /* 5218 */;

const NitroModules = _mod5218.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5218.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5218.NitroModules;
const NitroModules4 = _mod5218.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");