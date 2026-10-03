// === Module 16575: VibegrationsStaffAccessNotice ===

// Module 16575 (VibegrationsStaffAccessNotice)
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import _modDef3723 from "module_3723" /* 3723 */;
import LinkingDefault from "Linking" /* 4565 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Routes = fn(1085).Routes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copy: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStaffAccessNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = vibegrationsStaffAccessTarget(576).c(11);
  const tmp4 = closure_8();
  let obj = vibegrationsStaffAccessTarget(576);
  vibegrationsStaffAccessTarget = vibegrationsStaffAccessTarget(16576).useVibegrationsStaffAccessTarget();
  if (cResult[0] !== vibegrationsStaffAccessTarget) {
    const fn = function n() {
      if (null != vibegrationsStaffAccessTarget) {
        if ("channel" === vibegrationsStaffAccessTarget.kind) {
          router_utils.transitionTo(Routes.CHANNEL(vibegrationsStaffAccessTarget.guildId, vibegrationsStaffAccessTarget.channelId));
        } else {
          LinkingDefault.openURL(vibegrationsStaffAccessTarget.url);
        }
      }
    };
    cResult[0] = vibegrationsStaffAccessTarget;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (null == vibegrationsStaffAccessTarget) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
      const tmp10 = closure_6(tmp(4812).CircleInformationIcon, obj3);
      cResult[2] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const intl = tmp(1126).intl;
      const obj4 = { channel: tmp(16576).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp6 };
      const formatResult = intl.format(_modDef3723["4BsHmp"], obj4);
      cResult[3] = tmp6;
      cResult[4] = formatResult;
      let tmp11 = formatResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.copy) {
      if (cResult[6] === tmp11) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] === tmp4.row) {
        if (cResult[9] === tmp14) {
          let tmp17 = cResult[10];
        }
        return tmp17;
      }
      const obj5 = { variant: "primary", children: null };
      const obj6 = { style: tmp4.row, children: null };
      const items = [tmp7, tmp14];
      obj6.children = items;
      obj5.children = closure_7(View, obj6);
      const tmp21 = closure_6(tmp(5995).Card, obj5);
      cResult[8] = tmp4.row;
      cResult[9] = tmp14;
      cResult[10] = tmp21;
      tmp17 = tmp21;
    }
    const obj7 = { variant: "text-sm/normal", color: "text-default", style: tmp4.copy, children: tmp11 };
    const tmp16 = closure_6(tmp(4886).Text, obj7);
    cResult[5] = tmp4.copy;
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
  let obj2 = vibegrationsStaffAccessTarget(16576);
}) : (() => {
  const tmp = closure_8();
  vibegrationsStaffAccessTarget = vibegrationsStaffAccessTarget(16576).useVibegrationsStaffAccessTarget();
  [][0] = vibegrationsStaffAccessTarget;
  let tmp6 = null;
  if (null != vibegrationsStaffAccessTarget) {
    let obj2 = { variant: "primary", children: null };
    const obj3 = { style: tmp.row, children: null };
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const items = [closure_6(tmp2(4812).CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: null };
    const intl = tmp2(1126).intl;
    const obj6 = { channel: tmp2(16576).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    obj5.children = intl.format(_modDef3723["4BsHmp"], obj6);
    items[1] = closure_6(tmp2(4886).Text, obj5);
    obj3.children = items;
    obj2.children = closure_7(View, obj3);
    tmp6 = closure_6(tmp2(5995).Card, obj2);
  }
  return tmp6;
});