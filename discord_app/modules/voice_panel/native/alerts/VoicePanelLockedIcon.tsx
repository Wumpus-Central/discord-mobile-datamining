// === Module 17792: VoicePanelLockedIcon ===

// Module 17792 (VoicePanelLockedIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import NativeViewDefault from "NativeView" /* 6168 */;
import _modDef17793 from "module_17793" /* 17793 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj2.container = size;
obj2.icon = {};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelLockedIcon() {
  const cResult = c.c(5);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4.icon) {
    const obj2 = { style: tmp4.icon, source: _modDef17793, size: native.IconSizes.LARGE };
    const tmp8 = jsx(native.Icon, { style: tmp4.icon, source: _modDef17793, size: native.IconSizes.LARGE });
    cResult[0] = tmp4.icon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = jsx(NativeViewDefault, { style: tmp4.container, children: tmp5 });
  cResult[2] = tmp4.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj3 = { style: tmp4.container, children: tmp5 };
}) : (function VoicePanelLockedIcon() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef17793, size: native.IconSizes.LARGE });
  return <tmp2 style={tmp.container}>{null}</tmp2>;
});