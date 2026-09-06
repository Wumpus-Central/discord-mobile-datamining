// discord_app/modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
const sm = nativeDefault.radii.sm;
let closure_5 = createStyles.createStyles((width, borderRadius) => {
  let obj = { appIcon: { width, height: width, borderRadius }, entityWrapper: null };
  obj = {
    padding: 1,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
    borderRadius: borderRadius + 1,
  };
  obj.entityWrapper = obj;
  return obj;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

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
  const tmp = closure_5(num, iconBorderRadius);
  let obj = { style: null, children: null };
  const items = [tmp.entityWrapper, wrapperStyle];
  obj.style = items;
  obj = { style: null, source: iconSource };
  const items1 = [tmp.appIcon, iconStyle];
  obj.style = items1;
  obj.children = jsx(FastImageDefault, { style: null, source: iconSource });
  return <View style={null} source={iconSource} />;
}
