// === Module 17074: ConjureStaffAccessNotice ===

// Module 17074 (ConjureStaffAccessNotice)
import router_utils from "router_utils" /* 1112 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinkingDefault from "Linking" /* 4806 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1085).Routes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStaffAccessNotice() {
  let NewInlineNotice = conjureStaffAccessTarget;
  let tmp = dependencyMap;
  const cResult = conjureStaffAccessTarget(576).c(6);
  let obj = conjureStaffAccessTarget(576);
  conjureStaffAccessTarget = conjureStaffAccessTarget(17075).useConjureStaffAccessTarget();
  if (cResult[0] !== conjureStaffAccessTarget) {
    const fn = function n() {
      if (null != conjureStaffAccessTarget) {
        if ("channel" === conjureStaffAccessTarget.kind) {
          router_utils.transitionTo(Routes.CHANNEL(conjureStaffAccessTarget.guildId, conjureStaffAccessTarget.channelId));
        } else {
          LinkingDefault.openURL(conjureStaffAccessTarget.url);
        }
      }
    };
    cResult[0] = conjureStaffAccessTarget;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (null == conjureStaffAccessTarget) {
    return null;
  } else {
    if (cResult[2] !== tmp4) {
      const intl = NewInlineNotice(1126).intl;
      const obj3 = { channel: NewInlineNotice(17075).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
      const formatResult = intl.format(_modDef3849["6anmu1"], obj3);
      cResult[2] = tmp4;
      cResult[3] = formatResult;
      let tmp5 = formatResult;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      NewInlineNotice = NewInlineNotice(7570).NewInlineNotice;
      const obj4 = { type: "info", role: "static", message: tmp5 };
      tmp = <NewInlineNotice type="info" role="static" message={tmp5} />;
      cResult[4] = tmp5;
      cResult[5] = tmp;
    }
  }
  let obj2 = conjureStaffAccessTarget(17075);
}) : (function ConjureStaffAccessNotice() {
  conjureStaffAccessTarget = conjureStaffAccessTarget(17075).useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { type: "info", role: "static", message: null };
    const intl = tmp(1126).intl;
    const obj3 = { channel: tmp(17075).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    obj2.message = intl.format(_modDef3849["6anmu1"], obj3);
    tmp5 = jsx(tmp(7570).NewInlineNotice, { type: "info", role: "static", message: null });
  }
  return tmp5;
});