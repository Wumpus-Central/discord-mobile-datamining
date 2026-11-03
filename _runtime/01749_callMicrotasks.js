// _runtime/01749_callMicrotasks.js
import registerCustomSerializable from "01716_registerCustomSerializable.js";
import _mod1717 from "metro/01717__.js";

const items = [{ code: "(function callMicrotasks_Pnpm_deprecatedTs1(){})" }];
[tmp2] = items;
function callMicrotasks() {}
callMicrotasks.__workletHash = 2444743836321;
callMicrotasks.__initData = tmp2;

export const makeShareable = registerCustomSerializable.makeShareable;
export const makeShareableCloneOnUIRecursive = registerCustomSerializable.makeShareableCloneOnUIRecursive;
export const makeShareableCloneRecursive = registerCustomSerializable.createSerializable;
export const isShareableRef = registerCustomSerializable.isSerializableRef;
export const shareableMappingCache = _mod1717.serializableMappingCache;
export { callMicrotasks };
