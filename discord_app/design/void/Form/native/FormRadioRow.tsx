// === Module 8387: FormRadioRow ===

// Module 8387 (FormRadioRow)
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4205 */;
import _modDef5600 from "module_5600" /* 5600 */;
import context2 from "context" /* 5606 */;
import TableRadioRow from "TableRadioRow" /* 7702 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(context2.RedesignCompatContext);
  let obj = useCheckboxA11yNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: null, value: null, legacyCompat_selected: null, legacyCompat_onPress: null };
    obj[0] = leading;
    obj[1] = value;
    obj[2] = selected;
    obj[3] = onPress;
    const merged1 = Object.assign(merged);
    let tmp8Result = tmp8(TableRadioRow.TableRadioRow, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj.style = style;
    obj.onPress = onPress;
    obj.accessibilityRole = tmp6;
    obj.accessibilityState = tmp7;
    tmp8Result = null;
    if ("right" === align) {
      obj1 = { selected: null };
      obj1[0] = selected;
      tmp8Result = tmp8(tmp9(5623), obj1);
    }
    obj.trailing = tmp8Result;
    let tmp8Result1 = leading;
    if ("left" === align) {
      const obj2 = { selected: null };
      obj2[0] = selected;
      tmp8Result1 = tmp8(tmp9(5623), obj2);
    }
    obj.leading = tmp8Result1;
    tmp8Result = tmp8(_modDef5600, obj);
    const tmp10 = _modDef5600;
  }
  return tmp8Result;
};