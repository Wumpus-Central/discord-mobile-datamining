// === Module 17188: VoicePanelLockedIcon ===

// Module 17188 (VoicePanelLockedIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import _modDef17189 from "module_17189" /* 17189 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { container: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
createStyles.container = size;
createStyles.icon = {};
let closure_4 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = closure_4();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, source: _modDef17189, size: native.IconSizes.LARGE };
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef17189, size: native.IconSizes.LARGE });
  return jsx(NativeViewDefault, { style: tmp.icon, source: _modDef17189, size: native.IconSizes.LARGE });
};