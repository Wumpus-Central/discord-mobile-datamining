// discord_app/modules/main_tabs_v2/native/you_bar/YouBarButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import CONNECTION_BANNER_HEIGHT from "YouBarConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class YouBarButtonIcon {
  constructor(arg0) {
    hasBadge = global.hasBadge;
    size = hasBadge;
    badgeSize = undefined;
    obj = { size: YOU_BAR_BUTTON_ICON_SIZE, badgeRadius: 4, borderWidth: 2 };
    tmp = YOU_BAR_BUTTON_ICON_SIZE;
    size = undefined;
    badgeSize = undefined;
    c2 = undefined;
    c3 = undefined;
    badgeWidth = undefined;
    borderWidth = undefined;
    size = obj.size;
    num = obj.xOffset;
    ({ icon, badgeStyle } = global);
    if (num === undefined) {
      num = 0;
    }
    badgeSize = num;
    num2 = obj.yOffset;
    if (num2 === undefined) {
      num2 = 0;
    }
    c2 = num2;
    badgeRadius = obj.badgeRadius;
    c3 = badgeRadius;
    badgeWidth = obj.badgeWidth;
    borderWidth = obj.borderWidth;
    obj2 = c3;
    items = [, , , , , ];
    items[0] = badgeRadius;
    items[1] = borderWidth;
    items[2] = size;
    items[3] = num;
    items[4] = num2;
    items[5] = badgeWidth;
    memo = c3.useMemo(() => {
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
    size = undefined;
    badgeSize = undefined;
    c2 = undefined;
    c3 = undefined;
    size2 = obj.size;
    size = size2;
    badgeSize = obj.badgeSize;
    num3 = obj.xOffset;
    if (num3 === undefined) {
      num3 = 0;
    }
    c2 = num3;
    num4 = obj.yOffset;
    if (num4 === undefined) {
      num4 = 0;
    }
    c3 = num4;
    items1 = [, , , ];
    items1[0] = size2;
    items1[1] = badgeSize;
    items1[2] = num4;
    items1[3] = num3;
    items2 = [, ];
    items2[0] = memo;
    items2[1] = hasBadge;
    memo1 = obj2.useMemo(() => ({ position: "absolute", left: size2 - badgeSize + num3, top: size2 - badgeSize + num4, right: "channel_id", bottom: "index", padding: "key", minWidth: "l" }), items1);
    obj1 = { style: { position: "relative", height: tmp, width: tmp }, children: null };
    memo2 = obj2.useMemo(() => {
      if (size2) {
        const items = [badgeSize];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, items2);
    tmp5 = jsxs;
    tmp6 = badgeWidth;
    tmp7 = jsx;
    tmp8 = badgeSize;
    tmp9 = c2;
    items3 = [, ];
    items3[0] = jsx(require("SolidCutout"), { cutouts: memo2, children: icon });
    if (hasBadge) {
      obj2 = { style: null, size: 8, badgeStyle: null };
      obj2[0] = memo1;
      obj2[2] = badgeStyle;
      hasBadge = tmp7(require("DEFAULT_BADGE_SIZE"), obj2);
    }
    items3[1] = hasBadge;
    obj1[1] = items3;
    return tmp5(tmp6, obj1);
  }
}
class YouBarButtonContainer {
  constructor(arg0) {
    obj = { style: closure_9().buttonContainer, children: global.children };
    return jsx(View, obj);
  }
}
let c3 = importAllResult;
({ YOU_BAR_BUTTON_HIT_SLOP: c5, YOU_BAR_BUTTON_ICON_SIZE: closure_6 } = CONNECTION_BANNER_HEIGHT);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { buttonContainer: null };
obj = { position: "relative", borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function YouBarButton(arg0) {
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
  obj[0] = closure_7(IconButton.IconButton, obj);
  return closure_7(YouBarButtonContainer, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default memoResult;
export { YouBarButtonIcon };
export { YouBarButtonContainer };