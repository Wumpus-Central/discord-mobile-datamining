// === Module 9956: hybridObject ===

// Module 9956 (hybridObject)
import _mod5240 from "module_5240" /* 5240 */;

const NitroModules = _mod5240.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5240.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5240.NitroModules;
const NitroModules4 = _mod5240.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");