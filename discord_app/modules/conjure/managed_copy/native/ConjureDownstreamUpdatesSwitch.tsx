// discord_app/modules/conjure/managed_copy/native/ConjureDownstreamUpdatesSwitch.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4079 from "../../intl/ConjureUntranslated.messages.js";
import conjureManagedCopyConnection from "../conjureManagedCopyConnection.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { gap: nativeDefault.space.PX_8 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureDownstreamUpdatesSwitch.tsx");

export default function ConjureDownstreamUpdatesSwitch(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_8();
  const conjureDownstreamUpdates = projectId(13093).useConjureDownstreamUpdates(projectId);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  [][0] = projectId;
  let tmp8Result = null;
  if (null != conjureDownstreamUpdates) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { hasIcons: false, children: null };
    const obj5 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
    const intl = tmp2(1113).intl;
    obj5.label = intl.string(_modDef4079["Nf+zrD"]);
    const intl2 = tmp2(1113).intl;
    obj5.subLabel = intl2.string(_modDef4079.heoCNf);
    ({ enabled: obj4.value, pending: obj4.disabled } = conjureDownstreamUpdates);
    obj5.onValueChange = tmp6;
    obj3.children = closure_6(tmp2(7888).TableSwitchRow, obj5);
    items = [closure_6(tmp2(7680).TableRowGroup, obj3)];
    if (tmp5[0]) {
      const obj6 = { accessibilityRole: "alert", children: null };
      const obj11 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
      const intl3 = tmp2(1113).intl;
      obj11.children = intl3.string(tmp11(4079)["UU+oef"]);
      obj6.children = closure_6(tmp2(5866).Text, obj11);
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
}
