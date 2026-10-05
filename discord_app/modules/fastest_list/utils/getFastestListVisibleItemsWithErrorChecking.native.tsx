// discord_app/modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx
import FastestListLogger from "FastestListLogger.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx",
);

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  const tmp = sectionStart.sectionStart > sections.length || sectionStart.sectionEnd > sections.length;
  if (tmp) {
    const obj2 = { listId, sections, visibleItems: sectionStart };
    const obj = FastestListLogger;
    obj.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj2);
  }
  const tmp5 =
    sectionStart.itemStart > sections[sectionStart.sectionStart] ||
    sectionStart.itemEnd > sections[sectionStart.sectionEnd];
  if (tmp5) {
    const obj4 = { listId, sections, visibleItems: sectionStart };
    const obj3 = FastestListLogger;
    obj3.logFastestListError(
      "Visible items `itemStart/End` is greater than the number of items in the first section",
      obj4,
    );
  }
  return sectionStart;
}
