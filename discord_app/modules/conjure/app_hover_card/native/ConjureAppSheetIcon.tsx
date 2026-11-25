// === Module 11508: ConjureAppSheetIcon ===

// Module 11508 (ConjureAppSheetIcon)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import FastImageDefault from "FastImage" /* 5699 */;
import ConjureAppIconTileDefault from "ConjureAppIconTile" /* 11509 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5012);
let closure_4 = createStyles.createStyles((width, borderRadius) => {
  const obj = { icon: null };
  const size = { width, height: width, borderRadius, overflow: "hidden" };
  obj.icon = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureAppSheetIcon.tsx");

export default function ConjureAppSheetIcon(size) {
  ({ application, radius } = size);
  if (radius === undefined) {
    radius = nativeDefault.radii.lg;
  }
  let num = size.size;
  if (num === undefined) {
    num = 48;
  }
  const tmp3 = closure_4(num, radius);
  if (null == application.icon) {
    const obj4 = { style: tmp3.icon, children: null };
    const obj8 = { applicationId: null, name: null, size: null };
    ({ id: obj5.applicationId, name: obj5.name } = application);
    obj8.size = num;
    obj4.children = jsx(ConjureAppIconTileDefault, { applicationId: null, name: null, size: null });
    let tmp8 = <View style={tmp3.icon}>{null}</View>;
  } else {
    const obj = { source: null, style: null };
    const obj9 = { id: null, icon: null, size: null };
    ({ id: obj3.id, icon: obj3.icon } = application);
    obj9.size = num;
    obj.source = AvatarUtilsDefault.getApplicationIconSource(obj9);
    obj.style = tmp3.icon;
    tmp8 = <tmp7 source={null} style={null} />;
  }
  return tmp8;
};