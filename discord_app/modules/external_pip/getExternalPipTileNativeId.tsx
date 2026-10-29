// discord_app/modules/external_pip/getExternalPipTileNativeId.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export function getExternalPipTileNativeId(pip, id) {
  return "external-pip-tile:" + pip + ":" + id;
}
