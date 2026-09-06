// discord_app/modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx
import createExperiment from "../../experiments/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
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
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(
  guildId,
  location,
) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
