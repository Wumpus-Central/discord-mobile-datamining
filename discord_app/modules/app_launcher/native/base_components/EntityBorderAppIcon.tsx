// === Module 12398: EntityBorderAppIcon ===

// Module 12398 (EntityBorderAppIcon)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5892 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const sm = nativeDefault.radii.sm;
let closure_5 = createStyles.createStyles((width, borderRadius) => {
  const obj = { appIcon: { width, height: width, borderRadius }, entityWrapper: { padding: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 } };
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
  const obj = { style: null, children: null };
  const items = [tmp.entityWrapper, wrapperStyle];
  obj.style = items;
  const obj2 = { style: null, source: iconSource };
  const items1 = [tmp.appIcon, iconStyle];
  obj2.style = items1;
  obj.children = jsx(FastImageDefault, { style: null, source: iconSource });
  return <View style={null}>{null}</View>;
};