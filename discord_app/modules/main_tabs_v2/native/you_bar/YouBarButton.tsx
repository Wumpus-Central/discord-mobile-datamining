// discord_app/modules/main_tabs_v2/native/you_bar/YouBarButton.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function YouBarButtonIcon(hasBadge) {
  let badgeStyle;
  let icon;
  hasBadge = hasBadge.hasBadge;
  let size2 = hasBadge;
  let badgeSize;
  let obj = { size: closure_6, badgeRadius: 4, borderWidth: 2 };
  size2 = undefined;
  badgeSize = undefined;
  let num3;
  let num4;
  let badgeWidth;
  let borderWidth;
  const size = obj.size;
  size2 = size;
  let num = obj.xOffset;
  ({ icon, badgeStyle } = hasBadge);
  if (num === undefined) {
    num = 0;
  }
  badgeSize = num;
  let num2 = obj.yOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  num3 = num2;
  const badgeRadius = obj.badgeRadius;
  num4 = badgeRadius;
  badgeWidth = obj.badgeWidth;
  borderWidth = obj.borderWidth;
  let obj1 = num4;
  let items = [badgeRadius, borderWidth, size, num, num2, badgeWidth];
  const memo = num4.useMemo(() => {
    const sum = num4 + borderWidth;
    const result = 2 * sum;
    let sum1 = result;
    if (null != badgeWidth) {
      sum1 = tmp4 + 2 * tmp;
    }
    return { shape: size2(num3[6]).CutoutShape.RoundedRect, x: size2 - (result - borderWidth) + badgeSize, y: size2 - (result - borderWidth) + num3, width: sum1, height: result, cornerRadius: Math.min(sum, size2 / 2, sum1 / 2) };
  }, items);
  badgeSize = memo;
  obj = { size: tmp, badgeSize: 8 };
  size2 = undefined;
  badgeSize = undefined;
  num3 = undefined;
  num4 = undefined;
  size2 = obj.size;
  badgeSize = obj.badgeSize;
  num3 = obj.xOffset;
  if (num3 === undefined) {
    num3 = 0;
  }
  num4 = obj.yOffset;
  if (num4 === undefined) {
    num4 = 0;
  }
  let items1 = [size2, badgeSize, num4, num3];
  const items2 = [memo, hasBadge];
  const memo1 = obj1.useMemo(() => ({ position: "absolute", left: size2 - badgeSize + num3, top: size2 - badgeSize + num4, right: "id", bottom: "k", padding: "key", minWidth: "Date" }), items1);
  obj = { style: { position: "relative", height: tmp, width: tmp }, children: null };
  const memo2 = obj1.useMemo(() => {
    if (size2) {
      const items = [badgeSize];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items2);
  const items3 = [callback(badgeSize(num3[6]), { cutouts: memo2, children: icon }), ];
  if (hasBadge) {
    obj1 = { style: null, size: 8, badgeStyle: null };
    obj1[0] = memo1;
    obj1[2] = badgeStyle;
    hasBadge = callback(badgeSize(num3[7]), obj1);
  }
  items3[1] = hasBadge;
  obj[1] = items3;
  return closure_8(badgeWidth, obj);
}
class YouBarButtonContainer {
  constructor(arg0) {
    obj = { style: jsxs().buttonContainer, children: global.children };
    return jsx(View, obj);
  }
}
let c3 = importAllResult;
({ YOU_BAR_BUTTON_HIT_SLOP: c5, YOU_BAR_BUTTON_ICON_SIZE: closure_6 } = CONNECTION_BANNER_HEIGHT);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { buttonContainer: null };
obj = { position: "relative", borderRadius: require("Themes").modules.button.BORDER_RADIUS, overflow: "hidden" };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function YouBarButton(arg0) {
  let accessibilityLabel;
  let badgeStyle;
  let hasBadge;
  let hasNameplate;
  let icon;
  let onLongPress;
  let onPress;
  ({ hasNameplate, icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = arg0);
  let obj = { accessibilityLabel, variant: null, size: "sm", icon: null, onPress: null, onLongPress: null, hitSlop: null };
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj = { children: null };
  obj[1] = str;
  obj[3] = closure_7(YouBarButtonIcon, { icon, badgeStyle, hasBadge });
  obj[4] = onPress;
  obj[5] = onLongPress;
  obj[6] = closure_5;
  obj[0] = closure_7(require(7672) /* IconButton */.IconButton, obj);
  return closure_7(YouBarButtonContainer, obj);
});
let result = require("CONNECTION_BANNER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default memoResult;
export { YouBarButtonContainer };