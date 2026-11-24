// === Module 8845: hybridObject ===

// Module 8845 (hybridObject)
import _mod4989 from "module_4989" /* 4989 */;

const NitroModules = _mod4989.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4989.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4989.NitroModules;
const NitroModules4 = _mod4989.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");