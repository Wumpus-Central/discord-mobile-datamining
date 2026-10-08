// === Module 14142: Hook ===

// Module 14142 (Hook)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/hook/Hook.native.tsx");

export const attachToProcess = function attachToProcess() {
  return Promise.resolve();
};
export const cancelAttachToProcess = function cancelAttachToProcess() {
  return Promise.resolve();
};
export const findSteamProcess = function findSteamProcess() {
  return Promise.resolve(null);
};