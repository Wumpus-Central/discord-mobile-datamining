// === Module 13123: SquareIconButton ===

// Module 13123 (SquareIconButton)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
class SquareIconButton {
  constructor(arg0) {
    size = global.size;
    ({ disableColor, accessibilityHidden } = global);
    closure_1 = undefined;
    ({ onPress, source, style, iconStyle, accessibilityLabel, disabled } = global);
    tmp = closure_5();
    closure_1 = tmp;
    items = [, ];
    items[0] = size;
    items[1] = tmp;
    tmp3 = jsx;
    tmp4 = size;
    tmp5 = closure_1;
    memo = closure_2.useMemo(() => {
      if (closure_1_4.MEDIUM_32 === size) {
        return closure_1.medium;
      } else if (tmp2.LARGE_40 === tmp) {
        return closure_1.large;
      } else {
        const SMALL_24 = tmp2.SMALL_24;
        return closure_1.small;
      }
    }, items);
    tmp6 = undefined;
    if (!accessibilityHidden) {
      tmp6 = accessibilityLabel;
    }
    obj = { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: items1, children: null };
    items1 = [, , ];
    items1[0] = tmp.container;
    items1[1] = style;
    items1[2] = memo;
    if (size === closure_4.LARGE_40) {
      REFRESH_SMALL_16 = require("Button").Icon.Sizes.MEDIUM;
    } else {
      REFRESH_SMALL_16 = require("Button").Icon.Sizes.REFRESH_SMALL_16;
    }
    obj = { size: REFRESH_SMALL_16, style: null, disableColor: null, source: null };
    icon = null;
    if (!disableColor) {
      icon = tmp.icon;
    }
    items2 = [, ];
    items2[0] = icon;
    items2[1] = iconStyle;
    obj[1] = items2;
    obj[2] = disableColor;
    obj[3] = source;
    obj[6] = tmp3(require("Button").Icon, obj);
    return tmp3(require("PressableBase").PressableOpacity, obj);
  }
}
class CircularIconButton {
  constructor(arg0) {
    size = global.size;
    ({ style, disableColor } = global);
    merged = Object.assign(global, Object.create(null));
    tmp2 = closure_5();
    tmp5 = closure_4;
    tmp3 = jsx;
    tmp4 = SquareIconButton;
    if (closure_4.SMALL_24 === size) {
      largeCircular = tmp2.smallCircular;
    } else if (tmp5.MEDIUM_32 === size) {
      largeCircular = tmp2.mediumCircular;
    } else if (tmp5.LARGE_40 === size) {
      largeCircular = tmp2.largeCircular;
    }
    obj = { style: items, size };
    items = [, ];
    items[0] = largeCircular;
    items[1] = style;
    merged1 = Object.assign(merged);
    obj.disableColor = disableColor;
    return tmp3(tmp4, obj);
  }
}
let obj = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
obj = { container: null, small: null, medium: null, large: null, smallCircular: null, mediumCircular: null, largeCircular: null, icon: null };
obj = { borderRadius: ThemesDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_PRIMARY_700_LIGHT_PRIMARY_230 };
obj[0] = obj;
obj[1] = { height: obj.SMALL_24, width: obj.SMALL_24 };
obj[2] = { height: obj.MEDIUM_32, width: obj.MEDIUM_32 };
obj[3] = { height: obj.LARGE_40, width: obj.LARGE_40 };
createCacheKey = { borderRadius: obj.SMALL_24 / 2 };
obj[4] = createCacheKey;
obj[5] = { borderRadius: obj.MEDIUM_32 / 2 };
obj[6] = { borderRadius: obj.LARGE_40 / 2 };
obj[7] = { tintColor: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_5 = createCacheKey.createStyles(obj);
SquareIconButton.Sizes = obj;
CircularIconButton.Sizes = obj;
const obj2 = { tintColor: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
const result = require("set").fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export { SquareIconButton };
export { CircularIconButton };