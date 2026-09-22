// === Module 17005: VibegrationsRestorePanelOp ===

// Module 17005 (VibegrationsRestorePanelOp)
import util from "util" /* 1115 */;
import _modDef3678 from "module_3678" /* 3678 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRestorePanelOp.tsx");

export const RESTORE_WINDOW_DAYS = 30;
export const restorePointOriginLabel = function restorePointOriginLabel(origin) {
  if ("auto_deploy" === origin) {
    const intl3 = util.intl;
    return intl3.string(_modDef3678.h4zhWL);
  } else if ("undo" === origin) {
    const intl2 = util.intl;
    return intl2.string(_modDef3678["c/tNny"]);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3678["jViU+0"]);
  }
};
export const restoreEnvironmentLabel = function restoreEnvironmentLabel(id) {
  const intl = util.intl;
  if ("preview" === id) {
    let prop = _modDef3678["/kYdZe"];
  } else {
    prop = _modDef3678["1/CVzo"];
  }
  return intl.string(prop);
};
export function restorePanelEnvironments(installScope) {
  return "user" === installScope ? ["stable"] : ["preview", "stable"];
}
export const restorePanelStatusForEnvironment = function restorePanelStatusForEnvironment(phase, environment) {
  if ("busy" === phase.phase) {
    if ("restore" !== phase.kind) {
      let obj3 = { kind: "none" };
    }
    obj3 = { kind: "pending" };
  } else {
    if ("settled" === phase.phase) {
      if (phase.environment === environment) {
        ({ tone: obj2.tone, text: obj2.text } = phase);
        let obj = { kind: "notice", tone: null, text: null };
        const obj5 = { kind: "notice", tone: null, text: null };
      }
      return obj;
    }
    obj = { kind: "none" };
  }
};