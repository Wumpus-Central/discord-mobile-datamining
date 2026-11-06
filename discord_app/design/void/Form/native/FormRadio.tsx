// === Module 7399: Form/FormRadio ===

// Module 7399 (Form/FormRadio)
import FastImageDefault from "FastImage" /* 5872 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(5170);
let closure_3 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: closure_3().radio, source: null };
  const tmp = closure_3();
  obj.source = importDefault(selected.selected ? 7400 : 7401);
  return jsx(FastImageDefault, { style: closure_3().radio, source: null });
};