// === Module 11368: removeConjureServerApp ===

// Module 11368 (removeConjureServerApp)
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _removeConjureServerApp() {
  closure_3 = tmp2;
  closure_2 = tmp3;
  closure_130_0 = _require;
  ConjureActionCreators;
  await ConjureActionCreators.unpublishProject(closure_0.projectId, { guildId: closure_0.guildId, alsoRemovePreviewBot: true }).catch(() => null);
  closure_130_1 = value;
  if (closure_130_1 != null) {
    const ok = closure_130_1.ok;
  }
  let flag2 = true === ok;
  if (flag2) {
    const intl = closure_131_0(closure_131_2[3]).intl;
    const rest = closure_130_0.rest;
    let appName;
    if (rest != null) {
      appName = rest.appName;
    }
    let targetAppName = appName;
    if (appName == null) {
      targetAppName = closure_130_0.targetAppName;
    }
    const obj7 = { key: "CONJURE_APP_REMOVED", content: null, IconComponent: null };
    obj7.content = intl.formatToPlainString(closure_131_1(closure_131_2[4]).SNFGxP, { app: targetAppName, server: closure_130_0.guildName });
    obj7.IconComponent = closure_131_0(closure_131_2[5]).CircleCheckIcon;
    closure_131_1(closure_131_2[2]).open(obj7);
    flag2 = true;
    closure_131_1(closure_131_2[2]);
  }
  return flag2;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/removeConjureServerApp.tsx");

export default function removeConjureServerApp() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};