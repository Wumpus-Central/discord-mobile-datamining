// === Module 7146: Form/FormCheckbox ===

// Module 7146 (Form/FormCheckbox)
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = closure_3();
  return jsx(native.Checkbox, { style: closure_3().checkbox, selected: selected.selected });
};