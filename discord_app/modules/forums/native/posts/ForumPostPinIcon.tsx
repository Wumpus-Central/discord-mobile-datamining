// === Module 12441: ForumPostPinIcon ===

// Module 12441 (ForumPostPinIcon)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import _modDef12442 from "module_12442" /* 12442 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
const obj2 = { pin: null, pinIcon: null };
let size = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.pin = size;
const size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
obj2.pinIcon = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = closure_5();
  const obj = { style: null, children: jsx(native.Icon, { source: _modDef12442, style: tmp.pinIcon }) };
  items = [tmp.pin, containerStyle.containerStyle];
  obj.style = items;
  return <View style={null}>{jsx(native.Icon, { source: _modDef12442, style: tmp.pinIcon })}</View>;
};