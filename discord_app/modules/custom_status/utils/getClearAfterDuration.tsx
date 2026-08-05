// discord_app/modules/custom_status/utils/getClearAfterDuration.tsx
import { ClearAfterValues } from "StatusTypes";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { set } from "../../../utils/Durations.tsx";

const result = require("module_38").fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = set.Millis.DAY;
  } else {
    00038__(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};