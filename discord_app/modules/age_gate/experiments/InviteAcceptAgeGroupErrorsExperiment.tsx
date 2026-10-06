// === Module 9442: InviteAcceptAgeGroupErrorsExperiment ===

// Module 9442 (InviteAcceptAgeGroupErrorsExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-invite-accept-age-group-errors", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_gate/experiments/InviteAcceptAgeGroupErrorsExperiment.tsx");

export const getIsInviteAcceptAgeGroupErrorsEnabled = function getIsInviteAcceptAgeGroupErrorsEnabled(invite_accept_error) {
  const obj = { location: invite_accept_error };
  return config.getConfig(obj).enabled;
};