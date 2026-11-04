// discord_app/modules/custom_status/utils/getClearAfterDuration.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ClearAfterValues = Constants.ClearAfterValues;
const result = size.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(num) {
  if (num === ClearAfterValues.TODAY) {
    const _Date = Date;
    const date = new Date();
    const _Date2 = Date;
    const date1 = new Date(date);
    date1.setDate(date.getDate() + 1);
    const time = date1.getTime();
    return time - date.getTime();
  } else {
    _modDef38(typeof num === "number", "Invalid custom status clear timeout");
    return num;
  }
}
