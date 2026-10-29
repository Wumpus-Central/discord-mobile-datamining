// === Module 5864: getExternalPipTileNativeId ===

// Module 5864 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export function getExternalPipTileNativeId(pip, id) {
  return "external-pip-tile:" + pip + ":" + id;
}