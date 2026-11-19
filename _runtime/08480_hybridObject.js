// === Module 8480: hybridObject ===

// Module 8480 (hybridObject)
import _mod4864 from "module_4864" /* 4864 */;

const NitroModules = _mod4864.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod4864.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod4864.NitroModules;
const NitroModules4 = _mod4864.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");