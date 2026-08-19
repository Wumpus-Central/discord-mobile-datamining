// discord_app/design/void/Form/native/FormRadioRow.tsx
import useCheckboxA11yNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import _modDef6937 from "FormRow.tsx";
import context2 from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRadioDefault from "FormRadio.tsx";
import TableRadioRow from "../../../components/TableRow/native/TableRadioRow.native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

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
    let tmp8Result = jsx(TableRadioRow.TableRadioRow, { icon: null, value: null, legacyCompat_selected: null, legacyCompat_onPress: null });
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
      tmp8Result = jsx(FormRadioDefault, { selected: null });
    }
    obj.trailing = tmp8Result;
    let tmp8Result1 = leading;
    if ("left" === align) {
      const obj2 = { selected: null };
      obj2[0] = selected;
      tmp8Result1 = jsx(FormRadioDefault, { selected: null });
    }
    obj.leading = tmp8Result1;
    tmp8Result = jsx(_modDef6937, {});
  }
  return tmp8Result;
};