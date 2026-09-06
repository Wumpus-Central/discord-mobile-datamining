// discord_app/modules/main_tabs_v2/native/you_bar/YouBarButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class YouBarButtonIcon {
  constructor(arg0) {
    hasBadge = global.hasBadge;
    size = hasBadge;
    badgeSize = undefined;
    obj = { size: YOU_BAR_BUTTON_ICON_SIZE, badgeRadius: 4, borderWidth: 2 };
    tmp = YOU_BAR_BUTTON_ICON_SIZE;
    closure_129_0 = undefined;
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    closure_129_4 = undefined;
    closure_129_5 = undefined;
    size = obj.size;
    closure_129_0 = size;
    num = obj.xOffset;
    ({ icon, badgeStyle } = global);
    if (num === undefined) {
      num = 0;
    }
    closure_129_1 = num;
    num2 = obj.yOffset;
    if (num2 === undefined) {
      num2 = 0;
    }
    closure_129_2 = num2;
    badgeRadius = obj.badgeRadius;
    closure_129_3 = badgeRadius;
    badgeWidth = obj.badgeWidth;
    closure_129_4 = badgeWidth;
    borderWidth = obj.borderWidth;
    closure_129_5 = borderWidth;
    obj2 = c3;
    items = [, , , , ,];
    items[0] = badgeRadius;
    items[1] = borderWidth;
    items[2] = size;
    items[3] = num;
    items[4] = num2;
    items[5] = badgeWidth;
    memo = c3.useMemo(() => {
      const sum = num4 + hitSlop;
      const result = 2 * sum;
      let sum1 = result;
      if (null != View) {
        sum1 = tmp4 + 2 * tmp;
      }
      size = {
        shape: ClipView.CutoutShape.RoundedRect,
        x: size2 - (result - tmp) + badgeSize,
        y: size2 - (result - tmp) + num3,
        width: sum1,
        height: result,
        cornerRadius: Math.min(sum, size2 / 2, sum1 / 2),
      };
      return size;
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
    items1 = [, , ,];
    items1[0] = size2;
    items1[1] = badgeSize;
    items1[2] = num4;
    items1[3] = num3;
    items2 = [,];
    items2[0] = memo;
    items2[1] = hasBadge;
    memo1 = obj2.useMemo(() => {
      const rect = {
        position: "absolute",
        left: size2 - badgeSize + num3,
        top: size2 - badgeSize + num4,
        right: "call",
        bottom: "mn",
        padding: "fileFinishedImporting",
        minWidth: "accessible",
      };
      return rect;
    }, items1);
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
    tmp6 = View;
    tmp7 = jsx;
    tmp8 = badgeSize;
    tmp9 = c2;
    items3 = [,];
    items3[0] = jsx(badgeSize(c2[6]), { cutouts: memo2, children: icon });
    if (hasBadge) {
      obj2 = { style: null, size: 8, badgeStyle: null };
      obj2.style = memo1;
      obj2.badgeStyle = badgeStyle;
      hasBadge = tmp7(tmp8(tmp9[7]), obj2);
    }
    items3[1] = hasBadge;
    obj1.children = items3;
    return tmp5(tmp6, obj1);
  }
}
class YouBarButtonContainer {
  constructor(arg0) {
    obj = { style: closure_9().buttonContainer, children: global.children };
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const YouBarConstants = fn(15098);
({ YOU_BAR_BUTTON_HIT_SLOP: hasOwnProperty, YOU_BAR_BUTTON_ICON_SIZE: metroRequire } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { buttonContainer: null };
obj = { position: "relative", borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
obj.buttonContainer = obj;
const React7 = createStyles.createStyles(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default noop.memo(function YouBarButton(arg0) {
  ({ hasNameplate, icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = arg0);
  let obj = {
    accessibilityLabel,
    variant: null,
    size: "sm",
    icon: null,
    onPress: null,
    onLongPress: null,
    hitSlop: null,
  };
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj = {
    children: null,
    variant: str,
    icon: React5(YouBarButtonIcon, { icon, badgeStyle, hasBadge }),
    onPress,
    onLongPress,
    hitSlop,
  };
  obj.children = React5(IconButton.IconButton, obj);
  return React5(YouBarButtonContainer, obj);
});
export { YouBarButtonIcon };
export { YouBarButtonContainer };
