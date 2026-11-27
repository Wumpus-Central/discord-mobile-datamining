// === Module 8987: hybridObject ===

// Module 8987 (hybridObject)
import _mod5115 from "module_5115" /* 5115 */;

const NitroModules = _mod5115.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5115.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5115.NitroModules;
const NitroModules4 = _mod5115.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");