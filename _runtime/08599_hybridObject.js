// === Module 8599: hybridObject ===

// Module 8599 (hybridObject)
import _mod4985 from "module_4985" /* 4985 */;

const NitroModules = _mod4985.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4985.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4985.NitroModules;
const NitroModules4 = _mod4985.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");