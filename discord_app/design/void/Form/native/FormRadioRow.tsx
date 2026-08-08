// discord_app/design/void/Form/native/FormRadioRow.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { useCheckboxA11yNative } from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import { context } from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import { TableRadioRow } from "../../../components/TableRow/native/TableRadioRow.native.tsx";
import { FormRow } from "FormRow.tsx";

const require = arg1;
const result = require("context").fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  let align;
  let leading;
  let onPress;
  let selected;
  let style;
  let value;
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(context.RedesignCompatContext);
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
      const obj1 = { selected: null };
      obj1[0] = selected;
      tmp8Result = tmp8(tmp9(5390), obj1);
    }
    obj.trailing = tmp8Result;
    let tmp8Result1 = leading;
    if ("left" === align) {
      const obj2 = { selected: null };
      obj2[0] = selected;
      tmp8Result1 = tmp8(tmp9(5390), obj2);
    }
    obj.leading = tmp8Result1;
    tmp8Result = tmp8(FormRow, obj);
    const tmp10 = FormRow;
  }
  return tmp8Result;
};