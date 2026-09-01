// discord_app/modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import createExperiment from "../../experiments/index.tsx";

const items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({
  kind: "guild",
  id: "2026-04_application_identity_linked_roles",
  label: "Application Identity Linked Roles",
  defaultConfig: { enabled: false },
  treatments: items,
});
const result = set.fileFinishedImporting(
  "modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx",
);

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(
  guildId,
  location,
) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
