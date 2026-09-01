// discord_app/modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx
import set from "../../../../_runtime/00002_set.js";
import logFastestListError from "FastestListLogger.native.tsx";

const result = set.fileFinishedImporting(
  "modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx",
);

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    let obj = logFastestListError;
    obj = {
      itemSizesLength: null,
      itemKeysLength: null,
      listId: null,
      detail:
        "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration.",
    };
    obj[0] = itemSizes.itemSizes.length;
    obj[1] = itemSizes.itemKeys.length;
    obj[2] = itemSizes.listId;
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj);
  }
  return itemSizes;
}
