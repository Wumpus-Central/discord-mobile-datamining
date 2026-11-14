// === Module 9089: hybridObject ===

// Module 9089 (hybridObject)
import _mod5388 from "module_5388" /* 5388 */;

const NitroModules = _mod5388.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5388.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5388.NitroModules;
const NitroModules4 = _mod5388.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");