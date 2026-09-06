// discord_app/modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx
import FastestListLogger from "FastestListLogger.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx",
);

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    const obj = {
      itemSizesLength: itemSizes.itemSizes.length,
      itemKeysLength: itemSizes.itemKeys.length,
      listId: itemSizes.listId,
      detail:
        "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration.",
    };
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj);
  }
  return itemSizes;
}
