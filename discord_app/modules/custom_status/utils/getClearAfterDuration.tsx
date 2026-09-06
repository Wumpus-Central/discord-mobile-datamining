// discord_app/modules/custom_status/utils/getClearAfterDuration.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ClearAfterValues = Constants.ClearAfterValues;
const result = size.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = DurationsDefault.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
}
