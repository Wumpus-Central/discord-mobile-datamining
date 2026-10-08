// discord_app/modules/date/formatDateForAPI.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/date/formatDateForAPI.tsx");

export default function formatDateForAPI(clone) {
  const cloneResult = clone.clone();
  return clone.clone().locale("en").format("YYYY-MM-DD");
}
