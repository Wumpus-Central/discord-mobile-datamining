// discord_app/modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
const sm = ThemesDefault.radii.sm;
let closure_5 = createCacheKey.createStyles((width, borderRadius) => {
  const obj = { padding: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 };
  obj[1] = obj;
  return obj;
});
const result = obj132.fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

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