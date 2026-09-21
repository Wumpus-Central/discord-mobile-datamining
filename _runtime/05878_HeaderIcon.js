// _runtime/05878_HeaderIcon.js
import jsxProd from "react/00021_jsxProd.js";
import Link from "01485_Link.js";
import get_ActivityIndicator from "metro/00017__.js";

({ Image: c2, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
const styles = StyleSheet.create({ icon: { width: 24, height: 24, margin: 3 }, flip: { transform: "scaleX(-1)" } });

export const HeaderIcon = function HeaderIcon(arg0) {
  ({ source, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  const obj = Link;
  const obj3 = { source, resizeMode: "contain", fadeDuration: 0, tintColor: obj.useTheme().colors.text, style: null };
  const items = [closure_4.icon, ,];
  let flip = "rtl" === Link.useLocale().direction;
  if (flip) {
    flip = closure_4.flip;
  }
  items[1] = flip;
  items[2] = style;
  obj3.style = items;
  const merged1 = Object.assign(merged);
  return (
    <React2 source={source} resizeMode="contain" fadeDuration={0} tintColor={obj.useTheme().colors.text} style={null} />
  );
};
export const ICON_SIZE = 24;
export const ICON_MARGIN = 3;
