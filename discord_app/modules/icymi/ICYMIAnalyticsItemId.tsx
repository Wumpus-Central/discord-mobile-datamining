// === Module 10226: ICYMIAnalyticsItemId ===

// Module 10226 (ICYMIAnalyticsItemId)
import ICYMITypes from "ICYMITypes" /* 10210 */;
import parseWaterwheelsCard from "parseWaterwheelsCard" /* 10224 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/ICYMIAnalyticsItemId.tsx");

export function getDehydratedAnalyticsItemId(type) {
  if (type.type !== ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM) {
    return type.id;
  } else {
    const data = type.data;
    let item;
    if (data != null) {
      item = data.item;
    }
    if (null != item) {
      if (typeof item === "object") {
        if ("id" in item) {
          if ("type" in item) {
            ({ id, type } = item);
            let tmp4 = null;
            if (typeof id === "string") {
              tmp4 = null;
              if (typeof type === "string") {
                tmp4 = null;
                if (tmpResult.isTypedWaterwheelsId(id, type)) {
                  tmp4 = id;
                }
                tmpResult = parseWaterwheelsCard;
              }
            }
            return tmp4;
          }
        }
      }
    }
    return null;
  }
}
export function getListAnalyticsItemId(data) {
  if ("waterwheelsItem" === data.data.kind) {
    let id = data.data.card.id;
  } else {
    id = data.id;
  }
  return id;
}