// discord_app/modules/in_app_reports/native/components/Arrow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef8997 from "../../../../../_runtime/metro/08997__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef8997, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
}
