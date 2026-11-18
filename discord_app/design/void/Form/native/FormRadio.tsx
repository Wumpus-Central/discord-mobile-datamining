// === Module 7420: Form/FormRadio ===

// Module 7420 (Form/FormRadio)
import FastImageDefault from "FastImage" /* 5510 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4823);
let closure_3 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: closure_3().radio, source: null };
  const tmp = closure_3();
  obj.source = importDefault(selected.selected ? 7421 : 7422);
  return jsx(FastImageDefault, { style: closure_3().radio, source: null });
};