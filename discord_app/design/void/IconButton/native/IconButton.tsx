// === Module 13466: IconButton/IconButton ===

// Module 13466 (IconButton/IconButton)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
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
      if (obj.MEDIUM_32 === size) {
        return closure_1.medium;
      } else if (obj.LARGE_40 === tmp) {
        return closure_1.large;
      } else {
        const SMALL_24 = obj.SMALL_24;
        return closure_1.small;
      }
    }, items);
    tmp6 = undefined;
    if (!accessibilityHidden) {
      tmp6 = accessibilityLabel;
    }
    obj = { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: null, children: null };
    items1 = [, , ];
    items1[0] = tmp.container;
    items1[1] = style;
    items1[2] = memo;
    obj.style = items1;
    if (size === closure_4.LARGE_40) {
      REFRESH_SMALL_16 = tmp4(tmp5[6]).Icon.Sizes.MEDIUM;
    } else {
      REFRESH_SMALL_16 = tmp4(tmp5[6]).Icon.Sizes.REFRESH_SMALL_16;
    }
    obj = { size: REFRESH_SMALL_16, style: null, disableColor: null, source: null };
    icon = null;
    if (!disableColor) {
      icon = tmp.icon;
    }
    items2 = [, ];
    items2[0] = icon;
    items2[1] = iconStyle;
    obj.style = items2;
    obj.disableColor = disableColor;
    obj.source = source;
    obj.children = tmp3(tmp4(tmp5[6]).Icon, obj);
    return tmp3(size(closure_1[5]).PressableOpacity, obj);
  }
}
class CircularIconButton {
  constructor(arg0) {
    size = global.size;
    ({ style, disableColor } = global);
    merged = Object.assign(global, Object.assign({ style: 0, size: 0, disableColor: 0 }));
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
    obj = { style: null, size };
    items = [, ];
    items[0] = largeCircular;
    items[1] = style;
    obj.style = items;
    merged1 = Object.assign(merged);
    obj.disableColor = disableColor;
    return tmp3(tmp4, obj);
  }
}
const jsx = fn(21).jsx;
let Sizes = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
fn(4560);
Sizes = { container: null, small: null, medium: null, large: null, smallCircular: null, mediumCircular: null, largeCircular: null, icon: null };
Sizes = { borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: fn(5441).DARK_PRIMARY_700_LIGHT_PRIMARY_230 };
Sizes.container = Sizes;
Sizes.small = { height: Sizes.SMALL_24, width: Sizes.SMALL_24 };
Sizes.medium = { height: Sizes.MEDIUM_32, width: Sizes.MEDIUM_32 };
Sizes.large = { height: Sizes.LARGE_40, width: Sizes.LARGE_40 };
const createStyles = { borderRadius: Sizes.SMALL_24 / 2 };
Sizes.smallCircular = createStyles;
Sizes.mediumCircular = { borderRadius: Sizes.MEDIUM_32 / 2 };
Sizes.largeCircular = { borderRadius: Sizes.LARGE_40 / 2 };
Sizes.icon = { tintColor: fn(5441).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
const hasOwnProperty = createStyles.createStyles(Sizes);
SquareIconButton.Sizes = Sizes;
CircularIconButton.Sizes = Sizes;
let size = fn(2);
const result = size.fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export { SquareIconButton };
export { CircularIconButton };