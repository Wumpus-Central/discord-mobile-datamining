// discord_app/modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import _modDef17338 from "../../../../../_runtime/metro/17338__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
const obj2 = { container: null, icon: null };
let size = {
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  width: 64,
  height: 64,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
};
obj2.container = size;
obj2.icon = {};
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef17338, size: native.IconSizes.LARGE });
  return <tmp2 style={tmp.container}>{null}</tmp2>;
}
