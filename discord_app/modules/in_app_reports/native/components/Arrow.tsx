// === Module 10063: Arrow ===

// Module 10063 (Arrow)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _modDef10064 from "module_10064" /* 10064 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4792);
const obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef10064, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
};