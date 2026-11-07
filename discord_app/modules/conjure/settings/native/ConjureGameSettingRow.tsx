// === Module 12320: ConjureGameSettingRow ===

// Module 12320 (ConjureGameSettingRow)
import nativeDefault from "native" /* 575 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5374 */;
import ConjureGamePickerSheetDefault from "ConjureGamePickerSheet" /* 12325 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureGameSettingRow.tsx");

export default function ConjureGameSettingRow(def) {
  def = def.def;
  ({ hint, value, pickingEmpty, disabled, onChange: importDefault, onPickingEmptyChange: dependencyMap } = def);
  let tmp = closure_6();
  closure_3 = def(12321).useConjureGameNameLookup();
  items = value;
  if (!Array.isArray(value)) {
    items = [];
  }
  let isArray = Array.isArray(value);
  if (isArray) {
    isArray = 0 === value.length;
  }
  if (isArray) {
    isArray = !pickingEmpty;
  }
  if (def.key === def(12324).CONJURE_OVERLAY_GAMES_SETTING_KEY) {
    const intl = tmp2(1113).intl;
    hint = intl.string(_modDef4026.cqWCNY);
  } else if (hint == null) {
    hint = def.label;
  }
  const mapped = items.map((item) => {
    let tmp = closure_3(item);
    if (tmp == null) {
      tmp = item;
    }
    return tmp;
  });
  let joined = mapped.join(", ");
  let obj2 = { style: tmp.container, children: null };
  const items1 = [items(def(5751).Text, { variant: "body-sm/normal", color: "text-default", children: hint }), , ];
  const obj3 = { label: def.label, subLabel: null, arrow: true, disabled: null, onPress: null };
  if ("" === joined) {
    const intl2 = tmp2(1113).intl;
    joined = intl2.string(_modDef4026["74Afoq"]);
  }
  const obj4 = { hasIcons: false, children: null };
  obj3.subLabel = joined;
  obj3.disabled = disabled;
  obj3.onPress = function onPress() {
    const obj2 = {
      content: React4(ConjureGamePickerSheetDefault, {
        title: def.label,
        selected: items,
        onSubmit(arg0) {
          let tmp = 0 === arg0.length;
          if (tmp) {
            tmp = 0 === length.length;
          }
          if (!tmp) {
            closure_1_2(0 === arg0.length);
            closure_1_1(arg0);
          }
        }
      }),
      key: "ConjureGamePickerSheet",
      stackingBehavior: "stack"
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  const items2 = [items(def(7038).TableRow, obj3), ];
  const obj5 = { label: null, checked: null, disabled: null, onPress: null };
  const intl3 = tmp2(1113).intl;
  obj5.label = intl3.string(_modDef4026.dbuk9m);
  obj5.checked = isArray;
  obj5.disabled = disabled;
  obj5.onPress = function onPress(arg0) {
    dependencyMap(!arg0);
    importDefault([]);
  };
  items2[1] = items(def(7037).TableCheckboxRow, obj5);
  obj4.children = items2;
  items1[1] = closure_5(def(7126).TableRowGroup, obj4);
  let tmp10Result = null;
  if (pickingEmpty) {
    const obj6 = { variant: "body-xs/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: null };
    const intl4 = tmp2(1113).intl;
    obj6.children = intl4.string(_modDef4026["/++Pf+"]);
    tmp10Result = tmp10(tmp2(5751).Text, obj6);
  }
  items1[2] = tmp10Result;
  obj2.children = items1;
  return closure_5(closure_3, obj2);
};