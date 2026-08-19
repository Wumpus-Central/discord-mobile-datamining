// discord_app/modules/custom_status/utils/getClearAfterDuration.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import obj132Default from "../../../utils/Durations.tsx";
import StatusTypes from "../Constants.tsx";

const ClearAfterValues = StatusTypes.ClearAfterValues;
const result = obj132.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = obj132Default.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};