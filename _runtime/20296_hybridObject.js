// === Module 20296: hybridObject ===

// Module 20296 (hybridObject)
import _mod5219 from "module_5219" /* 5219 */;

const NitroModules = _mod5219.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5219.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5219.NitroModules;
const NitroModules4 = _mod5219.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");