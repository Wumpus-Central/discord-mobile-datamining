// === Module 5556: FormCheckboxRow ===

// Module 5556 (FormCheckboxRow)
import noopAll from "noop" /* 19 */;
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4174 */;
import _modDef5557 from "module_5557" /* 5557 */;
import FormCheckboxDefault from "FormCheckbox" /* 5583 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  selected = selected.selected;
  const merged = Object.assign(selected, Object.create(null));
  let obj = useCheckboxA11yNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp2 = callback();
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = jsx(FormCheckboxDefault, { selected });
  obj.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(_modDef5557, {});
};