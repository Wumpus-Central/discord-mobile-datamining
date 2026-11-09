// === Module 19714: VoicePanelLockedIcon ===

// Module 19714 (VoicePanelLockedIcon)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import NativeViewDefault from "NativeView" /* 7023 */;
import _modDef19715 from "module_19715" /* 19715 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
const obj2 = { container: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj2.container = size;
obj2.icon = {};
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef19715, size: native.IconSizes.LARGE });
  return <tmp2 style={tmp.container}>{null}</tmp2>;
};