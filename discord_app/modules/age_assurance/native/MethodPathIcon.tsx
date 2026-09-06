// discord_app/modules/age_assurance/native/MethodPathIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import inlineStyles from "../../../../_runtime/08453_inlineStyles.js";
import noop from "../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { container: null };
let size = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.lg,
};
createStyles.container = size;
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  _require = undefined;
  let obj = require("useToken");
  _require = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  obj = { style: closure_5().container, children: null };
  const size = { width: 24, height: 24, viewBox: "0 0 24 24", children: null };
  const paths = icon.icon.paths;
  const tmp = closure_5();
  size.children = paths.map((d) => jsx(inlineStyles.Path, { d: d.d, fill, fillRule: d.fillRule }, d.d));
  obj.children = jsx(inlineStylesDefault, { width: 24, height: 24, viewBox: "0 0 24 24", children: null });
  return <View style={closure_5().container}>{null}</View>;
}
