// === Module 8098: Arrow ===

// Module 8098 (Arrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import _modDef8099 from "module_8099" /* 8099 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef8099, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
};