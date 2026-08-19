// === Module 1915: ensureValidMode ===

// Module 1915 (ensureValidMode)
import obj132 from "obj132" /* 2 */;
import fluxApi from "fluxApi" /* 1916 */;

const result = obj132.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  } else {
    fluxApi;
  }
  return str;
};