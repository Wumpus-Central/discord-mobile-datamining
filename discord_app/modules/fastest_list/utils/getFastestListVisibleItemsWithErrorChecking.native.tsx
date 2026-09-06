// discord_app/modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx
import FastestListLogger from "FastestListLogger.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx",
);

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  if (tmp) {
    let obj = { listId, sections, visibleItems: sectionStart };
    obj.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj);
  }
  if (tmp5) {
    obj = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError(
      "Visible items `itemStart/End` is greater than the number of items in the first section",
      obj,
    );
  }
  return sectionStart;
}
