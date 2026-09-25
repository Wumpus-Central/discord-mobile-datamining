// === Module 16243: VibegrationsStaffAccessNotice ===

// Module 16243 (VibegrationsStaffAccessNotice)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import _modDef3714 from "module_3714" /* 3714 */;
import LinkingDefault from "Linking" /* 4522 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copy: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStaffAccessNotice.tsx");

export default function VibegrationsStaffAccessNotice() {
  const tmp = closure_8();
  vibegrationsStaffAccessTarget = vibegrationsStaffAccessTarget(16244).useVibegrationsStaffAccessTarget();
  [][0] = vibegrationsStaffAccessTarget;
  let tmp6 = null;
  if (null != vibegrationsStaffAccessTarget) {
    let obj2 = { variant: "primary", children: null };
    const obj3 = { style: tmp.row, children: null };
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const items = [closure_6(tmp2(4783).CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: null };
    const intl = tmp2(1115).intl;
    const obj6 = { channel: tmp2(16244).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    obj5.children = intl.format(_modDef3714["4BsHmp"], obj6);
    items[1] = closure_6(tmp2(4825).Text, obj5);
    obj3.children = items;
    obj2.children = closure_7(View, obj3);
    tmp6 = closure_6(tmp2(5914).Card, obj2);
  }
  return tmp6;
};