// === Module 12810: ConjureStaffAccessNotice ===

// Module 12810 (ConjureStaffAccessNotice)
import router_utils from "router_utils" /* 1111 */;
import _modDef3864 from "module_3864" /* 3864 */;
import LinkingDefault from "Linking" /* 5698 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1084).Routes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStaffAccessNotice() {
  let InlineNotice = conjureStaffAccessTarget;
  let tmp = dependencyMap;
  const cResult = conjureStaffAccessTarget(576).c(6);
  let obj = conjureStaffAccessTarget(576);
  conjureStaffAccessTarget = conjureStaffAccessTarget(12811).useConjureStaffAccessTarget();
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
      const intl = InlineNotice(1125).intl;
      const obj3 = { channel: InlineNotice(12811).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
      const formatResult = intl.format(_modDef3864["6anmu1"], obj3);
      cResult[2] = tmp4;
      cResult[3] = formatResult;
      let tmp5 = formatResult;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      InlineNotice = InlineNotice(8011).InlineNotice;
      const obj4 = { type: "info", role: "none", message: tmp5 };
      tmp = <InlineNotice type="info" role="none" message={tmp5} />;
      cResult[4] = tmp5;
      cResult[5] = tmp;
    }
  }
  let obj2 = conjureStaffAccessTarget(12811);
}) : (function ConjureStaffAccessNotice() {
  conjureStaffAccessTarget = conjureStaffAccessTarget(12811).useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { type: "info", role: "none", message: null };
    const intl = tmp(1125).intl;
    const obj3 = { channel: tmp(12811).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    obj2.message = intl.format(_modDef3864["6anmu1"], obj3);
    tmp5 = jsx(tmp(8011).InlineNotice, { type: "info", role: "none", message: null });
  }
  return tmp5;
});