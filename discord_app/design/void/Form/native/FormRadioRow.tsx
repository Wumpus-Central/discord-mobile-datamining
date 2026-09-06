// === Module 8608: FormRadioRow ===

// Module 8608 (FormRadioRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import RedesignCompat from "RedesignCompat" /* 5686 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import FormRowDefault from "FormRow" /* 7137 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }));
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
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
      const obj1 = { selected };
      tmp8Result = tmp8(tmp9(7143), obj1);
    }
    obj.trailing = tmp8Result;
    let tmp8Result1 = leading;
    if ("left" === align) {
      const obj2 = { selected };
      tmp8Result1 = tmp8(tmp9(7143), obj2);
    }
    obj.leading = tmp8Result1;
    tmp8Result = tmp8(FormRowDefault, obj);
  }
  return tmp8Result;
};