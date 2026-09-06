// === Module 7065: getFastestListSectionsWithErrorChecking ===

// Module 7065 (getFastestListSectionsWithErrorChecking)
import set from "set" /* 2 */;
import logFastestListError from "logFastestListError" /* 7059 */;

const result = set.fileFinishedImporting("modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx");

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    let obj = logFastestListError;
    obj = { itemSizesLength: null, itemKeysLength: null, listId: null, detail: "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration." };
    obj[0] = itemSizes.itemSizes.length;
    obj[1] = itemSizes.itemKeys.length;
    obj[2] = itemSizes.listId;
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj);
  }
  return itemSizes;
};