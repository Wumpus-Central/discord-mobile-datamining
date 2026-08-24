// discord_app/design/void/Form/native/FormCheckbox.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Button from "../../native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ checkbox: { width: 22, height: 22 } });
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(Button.Checkbox, { style: callback().checkbox, selected: selected.selected });
};