// discord_app/design/components/TableRow/native/TableRowBadge.native.tsx
import native from "../../../utils/native.tsx";
import Badge from "../../Badge/native/Badge.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowBadge.native.tsx");

export function resolveTableRowBadgeProps(badge) {
  if (typeof badge !== "object") {
    const obj = { type: badge };
    let tmp = obj;
  } else {
    tmp = badge;
  }
  return tmp;
}
export function getTableRowAccessibilityLabel(label, subLabel, badge) {
  const nodeText = native.getNodeText(label);
  const nodeText1 = native.getNodeText(subLabel);
  if (null == badge) {
    let str2 = nodeText1;
    if (nodeText1 == null) {
      str2 = "";
    }
    const _HermesInternal = HermesInternal;
    let combined = "" + nodeText + ", " + str2;
  } else {
    items = [nodeText, ,];
    if (typeof badge !== "object") {
      const obj3 = { type: badge };
      let tmp5 = obj3;
    } else {
      tmp5 = badge;
    }
    items[1] = Badge.getBadgeText(tmp5.type);
    items[2] = nodeText1;
    const found = items.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        tmp = "" !== item;
      }
      return tmp;
    });
    combined = found.join(", ");
    const tmpResult = Badge;
  }
  return combined;
}
