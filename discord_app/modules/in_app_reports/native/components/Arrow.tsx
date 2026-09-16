// === Module 8773: Arrow ===

// Module 8773 (Arrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import _modDef8774 from "module_8774" /* 8774 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
const obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef8774, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
};