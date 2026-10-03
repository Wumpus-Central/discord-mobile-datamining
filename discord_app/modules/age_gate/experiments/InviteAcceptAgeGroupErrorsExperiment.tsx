// discord_app/modules/age_gate/experiments/InviteAcceptAgeGroupErrorsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-09-invite-accept-age-group-errors",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/age_gate/experiments/InviteAcceptAgeGroupErrorsExperiment.tsx");

export const getIsInviteAcceptAgeGroupErrorsEnabled = function getIsInviteAcceptAgeGroupErrorsEnabled(
  invite_accept_error,
) {
  return config.getConfig({ location: invite_accept_error }).enabled;
};
