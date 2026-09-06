// === Module 17641: ApplicationIdentityLinkedRolesExperiment ===

// Module 17641 (ApplicationIdentityLinkedRolesExperiment)
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-04_application_identity_linked_roles", label: "Application Identity Linked Roles", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};