// === Module 16862: experiment ===

// Module 16862 (experiment)
import obj132 from "obj132" /* 2 */;
import createExperiment from "createExperiment" /* 4286 */;

const items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-04_application_identity_linked_roles", label: "Application Identity Linked Roles", defaultConfig: { enabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};