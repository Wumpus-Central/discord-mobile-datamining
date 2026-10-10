// === Module 9625: InviteAcceptAgeGroupErrorsExperiment ===

// Module 9625 (InviteAcceptAgeGroupErrorsExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-09-invite-accept-age-group-errors", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/age_gate/experiments/InviteAcceptAgeGroupErrorsExperiment.tsx");

export const getIsInviteAcceptAgeGroupErrorsEnabled = function getIsInviteAcceptAgeGroupErrorsEnabled(invite_accept_error) {
  return config.getConfig({ location: invite_accept_error }).enabled;
};