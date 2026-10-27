// === Module 5827: getExternalPipTileNativeId ===

// Module 5827 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export const getExternalPipTileNativeId = function getExternalPipTileNativeId(pip, id) {
  return "external-pip-tile:" + pip + ":" + id;
};