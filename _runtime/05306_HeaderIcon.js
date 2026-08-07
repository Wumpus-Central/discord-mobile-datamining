// _runtime/05306_HeaderIcon.js
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "01481_createStandardNavigationFactories.js";

let Platform;
let StyleSheet;
let obj1;
({ Image: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ icon: { width: 24, height: 24, margin: 3 }, flip: { transform: "scaleX(-1)" } });

export const HeaderIcon = function HeaderIcon(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = createStandardNavigationFactories;
  obj = { source, resizeMode: "contain", fadeDuration: 0, tintColor: obj.useTheme().colors.text, style: null };
  const items = [closure_4.icon, , ];
  let flip = "rtl" === createStandardNavigationFactories.useLocale().direction;
  if (flip) {
    flip = closure_4.flip;
  }
  items[1] = flip;
  items[2] = style;
  obj[4] = items;
  const merged1 = Object.assign(merged);
  return <closure_2 source={source} resizeMode="contain" fadeDuration={0} tintColor={obj.useTheme().colors.text} style={null} />;
};
export const ICON_SIZE = 24;
export const ICON_MARGIN = 3;