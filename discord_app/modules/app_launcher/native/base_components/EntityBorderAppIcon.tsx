// === Module 11639: EntityBorderAppIcon ===

// Module 11639 (EntityBorderAppIcon)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import preloadDefault from "preload" /* 5374 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
const sm = ThemesDefault.radii.sm;
let closure_5 = createCacheKey.createStyles((width, borderRadius) => {
  obj = { appIcon: obj, entityWrapper: null };
  obj = { width, height: width, borderRadius };
  obj = { padding: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 };
  obj[1] = obj;
  return obj;
});
const result = set.fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

export default function EntityBorderAppIcon(iconSize) {
  let num = iconSize.iconSize;
  ({ iconSource, wrapperStyle, iconStyle } = iconSize);
  if (num === undefined) {
    num = 32;
  }
  let iconBorderRadius = iconSize.iconBorderRadius;
  if (iconBorderRadius === undefined) {
    iconBorderRadius = sm;
  }
  const tmp = callback(num, iconBorderRadius);
  const items = [tmp.entityWrapper, wrapperStyle];
  const items1 = [tmp.appIcon, iconStyle];
  return <View style={items}>{jsx(preloadDefault, { style: items1, source: iconSource })}</View>;
};