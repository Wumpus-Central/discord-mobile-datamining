// === Module 12302: ConjureDownstreamUpdatesSwitch ===

// Module 12302 (ConjureDownstreamUpdatesSwitch)
import nativeDefault from "native" /* 575 */;
import _modDef4026 from "module_4026" /* 4026 */;
import conjureManagedCopyConnection from "conjureManagedCopyConnection" /* 11023 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { gap: nativeDefault.space.PX_8 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureDownstreamUpdatesSwitch.tsx");

export default function ConjureDownstreamUpdatesSwitch(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_8();
  const conjureDownstreamUpdates = projectId(12290).useConjureDownstreamUpdates(projectId);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  [][0] = projectId;
  let tmp8Result = null;
  if (null != conjureDownstreamUpdates) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { hasIcons: false, children: null };
    const obj5 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
    const intl = tmp2(1113).intl;
    obj5.label = intl.string(_modDef4026["Nf+zrD"]);
    const intl2 = tmp2(1113).intl;
    obj5.subLabel = intl2.string(_modDef4026.heoCNf);
    ({ enabled: obj4.value, pending: obj4.disabled } = conjureDownstreamUpdates);
    obj5.onValueChange = tmp6;
    obj3.children = closure_6(tmp2(7429).TableSwitchRow, obj5);
    items = [closure_6(tmp2(7126).TableRowGroup, obj3), ];
    if (tmp5[0]) {
      const obj6 = { accessibilityRole: "alert", children: null };
      const obj11 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
      const intl3 = tmp2(1113).intl;
      obj11.children = intl3.string(tmp11(4026)["UU+oef"]);
      obj6.children = closure_6(tmp2(5751).Text, obj11);
      let tmp10Result = closure_6(View, obj6);
    } else {
      tmp10Result = null;
    }
    items[1] = tmp10Result;
    obj2.children = items;
    tmp8Result = closure_7(View, obj2);
    tmp11 = importDefault;
  }
  return tmp8Result;
};