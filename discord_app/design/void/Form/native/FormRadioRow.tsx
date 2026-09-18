// === Module 8846: FormRadioRow ===

// Module 8846 (FormRadioRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4440 */;
import RedesignCompat from "RedesignCompat" /* 5856 */;
import TableRadioRow from "TableRadioRow" /* 5858 */;
import FormRowDefault from "FormRow" /* 7333 */;
import Form_FormRadioDefault from "Form/FormRadio" /* 7339 */;
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
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  if (context) {
    const obj2 = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp8Result = jsx(TableRadioRow.TableRadioRow, { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress });
  } else {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.style = style;
    obj3.onPress = onPress;
    obj3.accessibilityRole = tmp6;
    obj3.accessibilityState = tmp7;
    let tmp8Result3 = null;
    if ("right" === align) {
      const obj4 = { selected };
      tmp8Result3 = jsx(Form_FormRadioDefault, { selected });
    }
    obj3.trailing = tmp8Result3;
    let tmp8Result4 = leading;
    if ("left" === align) {
      const obj5 = { selected };
      tmp8Result4 = jsx(Form_FormRadioDefault, { selected });
    }
    obj3.leading = tmp8Result4;
    tmp8Result = jsx(FormRowDefault, {});
  }
  return tmp8Result;
};