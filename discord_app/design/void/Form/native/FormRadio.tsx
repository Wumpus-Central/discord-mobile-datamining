// discord_app/design/void/Form/native/FormRadio.tsx
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_3 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: closure_3().radio, source: null };
  const tmp = closure_3();
  obj.source = importDefault(selected.selected ? 7310 : 7311);
  return jsx(FastImageDefault, { style: closure_3().radio, source: null });
}
