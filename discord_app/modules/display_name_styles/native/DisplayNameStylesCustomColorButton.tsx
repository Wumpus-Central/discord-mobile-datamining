// === Module 17329: DisplayNameStylesCustomColorButton ===

// Module 17329 (DisplayNameStylesCustomColorButton)
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import util from "util" /* 1113 */;
import GummyStripesDefault from "GummyStripes" /* 16466 */;
import useCustomSwatchA11yDefault from "useCustomSwatchA11y" /* 17330 */;
import EyeDropperIcon from "EyeDropperIcon" /* 17331 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles((color) => {
  const size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", flexDirection: "row", backgroundColor: null };
  if (null != color) {
    let BACKGROUND_MOD_SUBTLE = utils_ColorUtils.int2hex(color);
  } else {
    BACKGROUND_MOD_SUBTLE = nativeDefault.colors.BACKGROUND_MOD_SUBTLE;
  }
  const obj = { button: size, border: null, selected: null, iconOverlay: null, iconBacking: null, icon: null };
  size.backgroundColor = BACKGROUND_MOD_SUBTLE;
  const obj3 = {};
  const merged = Object.assign(React4.absoluteFillObject);
  obj3.borderWidth = 1;
  obj3.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj3.borderRadius = nativeDefault.radii.sm;
  obj.border = obj3;
  obj.selected = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  const obj5 = {};
  const merged1 = Object.assign(React4.absoluteFillObject);
  obj5.alignItems = "center";
  obj5.justifyContent = "center";
  obj.iconOverlay = obj5;
  const obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.iconBacking = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: "white" };
  const size1 = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20 };
  obj.icon = size1;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesCustomColorButton.tsx");

export default function DisplayNameStylesCustomColorButton(onPress) {
  ({ activeColors, isSelected, showGummyStripes } = onPress);
  if (showGummyStripes === undefined) {
    showGummyStripes = false;
  }
  let tmp2;
  if (isSelected) {
    let first;
    if (activeColors != null) {
      first = activeColors[0];
    }
    tmp2 = first;
  }
  const tmpResult = closure_8(tmp2);
  let items = activeColors;
  if (activeColors == null) {
    items = [];
  }
  ({ customColorDescription, iconContrast } = useCustomSwatchA11yDefault({ selectedColors: items, hasCustomPalette: isSelected, hasCustomSwatchSelected: isSelected }));
  const obj = { style: tmpResult.button, onPress: onPress.onPress, accessibilityRole: "button", accessibilityState: { selected: isSelected }, accessibilityLabel: null, children: null };
  if (customColorDescription == null) {
    const intl = util.intl;
    customColorDescription = intl.string(util.t["FHBa/1"]);
  }
  obj.accessibilityLabel = customColorDescription;
  if (showGummyStripes) {
    showGummyStripes = null != activeColors;
  }
  if (showGummyStripes) {
    const obj2 = { colors: activeColors };
    showGummyStripes = timestampProducer(GummyStripesDefault, obj2);
  }
  const items1 = [showGummyStripes, , ];
  const items2 = [tmpResult.border, ];
  if (isSelected) {
    isSelected = tmpResult.selected;
  }
  items2[1] = isSelected;
  items1[1] = timestampProducer(hasOwnProperty, { style: items2, pointerEvents: "none" });
  const obj3 = { style: tmpResult.iconOverlay, pointerEvents: "none", children: null };
  let needsBacking;
  if (iconContrast != null) {
    needsBacking = iconContrast.needsBacking;
  }
  const obj4 = { style: true === needsBacking && tmpResult.iconBacking, children: null };
  const obj5 = { size: "custom", style: tmpResult.icon, color: null };
  if (null == iconContrast) {
    let str = nativeDefault.colors.ICON_DEFAULT;
  } else {
    str = "white";
    if (iconContrast.useDarkIcon) {
      str = "black";
    }
  }
  obj5.color = str;
  obj4.children = timestampProducer(EyeDropperIcon.EyeDropperIcon, obj5);
  obj3.children = timestampProducer(hasOwnProperty, obj4);
  items1[2] = timestampProducer(hasOwnProperty, obj3);
  obj.children = items1;
  return React5(React3, obj);
};