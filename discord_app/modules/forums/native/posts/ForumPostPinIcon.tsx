// discord_app/modules/forums/native/posts/ForumPostPinIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef12337 from "../../../../../_runtime/metro/12337__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
const obj2 = { pin: null, pinIcon: null };
let size = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  width: 23,
  height: 23,
  marginEnd: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.pin = size;
const size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
obj2.pinIcon = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = closure_5();
  const obj = { style: null, children: jsx(native.Icon, { source: _modDef12337, style: tmp.pinIcon }) };
  const items = [tmp.pin, containerStyle.containerStyle];
  obj.style = items;
  return <View style={null}>{jsx(native.Icon, { source: _modDef12337, style: tmp.pinIcon })}</View>;
}
