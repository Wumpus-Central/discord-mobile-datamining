// === Module 12003: ForumPostPinIcon ===

// Module 12003 (ForumPostPinIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef12004 from "module_12004" /* 12004 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { pin: null, pinIcon: null };
let size = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.pin = size;
const size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
createStyles.pinIcon = size1;
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = closure_5();
  let obj = { style: null, children: null };
  const items = [tmp.pin, containerStyle.containerStyle];
  obj.style = items;
  obj = { source: _modDef12004, style: tmp.pinIcon };
  obj.children = jsx(native.Icon, { source: _modDef12004, style: tmp.pinIcon });
  return <View source={_modDef12004} style={tmp.pinIcon} />;
};