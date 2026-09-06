// === Module 1984: BridgedStore ===

// Module 1984 (BridgedStore)
import FluxApi from "FluxApi" /* 1985 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  }
  return str;
};