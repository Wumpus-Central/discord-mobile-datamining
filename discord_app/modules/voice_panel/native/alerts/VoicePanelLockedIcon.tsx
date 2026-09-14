// === Module 17299: VoicePanelLockedIcon ===

// Module 17299 (VoicePanelLockedIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import NativeViewDefault from "NativeView" /* 5670 */;
import _modDef17300 from "module_17300" /* 17300 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef17300, size: native.IconSizes.LARGE });
  return <tmp2 style={tmp.container}>{null}</tmp2>;
};