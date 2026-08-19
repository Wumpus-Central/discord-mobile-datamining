// === Module 6946: FormCheckbox ===

// Module 6946 (FormCheckbox)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_3 = createCacheKey.createStyles({ checkbox: { width: 22, height: 22 } });
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(Button.Checkbox, { style: callback().checkbox, selected: selected.selected });
};