// discord_app/modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import createExperiment from "../../experiments/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "guild",
  id: "2026-04_application_identity_linked_roles",
  label: "Application Identity Linked Roles",
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx",
);

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
      const cResult = c.c(4);
      if (cResult[0] === guildId) {
        if (cResult[1] === location) {
          let tmp2 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { autoTrackExposure: false };
          cResult[3] = obj2;
          let tmp4 = obj2;
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
    }
  : function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
      return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
    };
