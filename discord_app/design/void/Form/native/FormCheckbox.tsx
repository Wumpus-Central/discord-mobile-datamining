// discord_app/design/void/Form/native/FormCheckbox.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ checkbox: { width: 22, height: 22 } });
const result = require("createCacheKey").fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(require("../../native.tsx") /* Button */.Checkbox, { style: callback().checkbox, selected: selected.selected });
};