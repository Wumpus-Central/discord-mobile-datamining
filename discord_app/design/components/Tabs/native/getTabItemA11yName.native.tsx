// === Module 12513: getTabItemA11yName ===

// Module 12513 (getTabItemA11yName)
import util from "util" /* 1113 */;
import _modDef2075 from "module_2075" /* 2075 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Tabs/native/getTabItemA11yName.native.tsx");

export function getTabItemA11yName(label, count, indicatorDot) {
  if (null == indicatorDot) {
    let formatToPlainStringResult = label;
    if (null != count) {
      const intl3 = util.intl;
      const obj2 = { label, count };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef2075.qbmavE, obj2);
    }
    return formatToPlainStringResult;
  } else {
    const accessibilityLabel = indicatorDot.accessibilityLabel;
    if (null != count) {
      const intl2 = util.intl;
      const obj3 = { label, count, status: accessibilityLabel };
      let formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2075.paONe3, obj3);
    } else {
      const intl = util.intl;
      const obj = { label, status: accessibilityLabel };
      formatToPlainStringResult1 = intl.formatToPlainString(_modDef2075.gmsmxI, obj);
    }
    return formatToPlainStringResult1;
  }
}