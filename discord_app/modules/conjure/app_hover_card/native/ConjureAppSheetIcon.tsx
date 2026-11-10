// === Module 13019: ConjureAppSheetIcon ===

// Module 13019 (ConjureAppSheetIcon)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import FastImageDefault from "FastImage" /* 5844 */;
import ConjureAppIconTileDefault from "ConjureAppIconTile" /* 11489 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_4 = createStyles.createStyles((borderRadius) => {
  const obj = { icon: null };
  const size = { width: 48, height: 48, borderRadius, overflow: "hidden" };
  obj.icon = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureAppSheetIcon.tsx");

export default function ConjureAppSheetIcon(arg0) {
  ({ application, radius } = arg0);
  if (radius === undefined) {
    radius = nativeDefault.radii.lg;
  }
  const tmp3 = closure_4(radius);
  if (null == application.icon) {
    const obj4 = { style: tmp3.icon, children: null };
    ({ id: obj5.applicationId, name: obj5.name } = application);
    obj4.children = jsx(ConjureAppIconTileDefault, { applicationId: null, name: null, size: 48 });
    let tmp8 = <View style={tmp3.icon}>{null}</View>;
    const obj8 = { applicationId: null, name: null, size: 48 };
  } else {
    const obj = { source: null, style: null };
    ({ id: obj3.id, icon: obj3.icon } = application);
    obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 48 });
    obj.style = tmp3.icon;
    tmp8 = <tmp7 source={null} style={null} />;
    const obj9 = { id: null, icon: null, size: 48 };
  }
  return tmp8;
};