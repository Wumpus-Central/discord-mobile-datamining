// discord_app/modules/libdiscore/stores/BridgedStore.tsx
import set from "../../../../_runtime/00002_set.js";
import fluxApi from "../FluxApi.tsx";

const result = set.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(arg0) {
  let str = "typescript";
  if ("typescript" === arg0) {
    str = arg0;
  } else {
    const obj = fluxApi;
  }
  return str;
};