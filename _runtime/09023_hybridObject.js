// _runtime/09023_hybridObject.js
import _mod5325 from "metro/05325__.js";

const NitroModules = _mod5325.NitroModules;
const hybridObject = NitroModules.createHybridObject("NitroFetch");
const NitroModules2 = _mod5325.NitroModules;
const hybridObject1 = NitroModules2.createHybridObject("NativeStorage");
const NitroModules3 = _mod5325.NitroModules;
const NitroModules4 = _mod5325.NitroModules;

export const NitroFetch = hybridObject;
export const NativeStorage = hybridObject1;
export const boxedNitroFetch = NitroModules3.box(hybridObject);
export const NitroCronetSingleton = NitroModules4.createHybridObject("NitroCronet");
