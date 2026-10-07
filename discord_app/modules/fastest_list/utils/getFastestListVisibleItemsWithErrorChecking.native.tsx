// discord_app/modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx
import FastestListLogger from "FastestListLogger.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx",
);

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  if (tmp) {
    const obj2 = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError(
      "Visible items `sectionStart/End` is greater than the number of sections",
      obj2,
    );
  }
  if (tmp5) {
    const obj4 = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError(
      "Visible items `itemStart/End` is greater than the number of items in the first section",
      obj4,
    );
  }
  return sectionStart;
}
