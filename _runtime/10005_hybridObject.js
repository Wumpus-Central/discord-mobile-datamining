// === Module 10005: hybridObject ===

// Module 10005 (hybridObject)
import _mod5220 from "module_5220" /* 5220 */;

const NitroModules = _mod5220.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5220.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5220.NitroModules;
const NitroModules4 = _mod5220.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");