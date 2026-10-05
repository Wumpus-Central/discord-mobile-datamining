// === Module 17812: ApplicationIdentityLinkedRolesExperiment ===

// Module 17812 (ApplicationIdentityLinkedRolesExperiment)
import react from "react" /* 576 */;
import createExperiment from "module_4774" /* 4774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2026-04_application_identity_linked_roles", label: "Application Identity Linked Roles", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === guildId) {
    let tmp2;
    let tmp4;
    if (cResult[1] === location) {
      tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: false };
      cResult[3] = obj2;
      tmp4 = obj2;
    } else {
      tmp4 = cResult[3];
    }
    return experiment.useExperiment(tmp2, tmp4).enabled;
  }
  const obj3 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj3;
  tmp2 = obj3;
}) : ((guildId, location) => {
  const obj = { guildId, location };
  return experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
});
const result = size.fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = tmp3;