// discord_app/modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import _modDef17189 from "../../../../../_runtime/metro/17189__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { container: null, icon: null };
let size = {
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  width: 64,
  height: 64,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
};
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
}
