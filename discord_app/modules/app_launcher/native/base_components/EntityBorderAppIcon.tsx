import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { preload } from "../../../../components_native/common/FastImage.tsx";
// discord_app/modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const sm = require("Themes").radii.sm;
let closure_5 = createCacheKey.createStyles((width, borderRadius) => {
  obj = { appIcon: obj, entityWrapper: null };
  obj = { width, height: width, borderRadius };
  obj = { padding: 1, backgroundColor: Themes.colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 };
  obj[1] = obj;
  return obj;
});
const result = require("Themes").fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

export default function EntityBorderAppIcon(iconSize) {
  let iconSource;
  let iconStyle;
  let wrapperStyle;
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
  return <View style={items}>{jsx(preload, { style: items1, source: iconSource })}</View>;
};