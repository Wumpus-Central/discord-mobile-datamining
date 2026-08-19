// discord_app/modules/hotspot/index.tsx
import importDefaultResult from "HotspotStore.tsx";
import HotspotLocations from "Constants.tsx";
import obj132 from "../../../_runtime/00002_obj132.js";

const result = require("obj132").fileFinishedImporting("modules/hotspot/index.tsx");
for (const key10022 in tmp4) {
  arg5[key10022] = HotspotLocations[key10022];
  continue;
}
for (const key10026 in require("hideHotspot")) {
  arg5[key10026] = require("hideHotspot")[key10026];
  continue;
}

export const HotspotStore = importDefaultResult;