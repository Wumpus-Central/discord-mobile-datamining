// discord_app/modules/custom_status/utils/getClearAfterDuration.tsx
import { ClearAfterValues } from "StatusTypes";

const result = require("module_38").fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = require("../../../utils/Durations.tsx").Millis.DAY;
  } else {
    require("../../../../_runtime/metro/00038__.js")(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};