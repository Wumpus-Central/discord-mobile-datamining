// discord_app/design/void/Form/native/FormRadioRow.tsx
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import TableRadioRow from "../../../components/TableRow/native/TableRadioRow.native.tsx";
import FormRowDefault from "FormRow.tsx";
import Form_FormRadioDefault from "FormRadio.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const merged = Object.assign(
    arg0,
    Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }),
  );
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp8Result = jsx(TableRadioRow.TableRadioRow, {
      icon: leading,
      value,
      legacyCompat_selected: selected,
      legacyCompat_onPress: onPress,
    });
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
      tmp8Result = jsx(Form_FormRadioDefault, { selected });
    }
    obj.trailing = tmp8Result;
    let tmp8Result1 = leading;
    if ("left" === align) {
      const obj2 = { selected };
      tmp8Result1 = jsx(Form_FormRadioDefault, { selected });
    }
    obj.leading = tmp8Result1;
    tmp8Result = jsx(FormRowDefault, {});
  }
  return tmp8Result;
}
