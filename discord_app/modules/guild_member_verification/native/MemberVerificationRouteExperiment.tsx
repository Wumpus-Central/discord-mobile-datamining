// discord_app/modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";

let obj = {
  name: "2026-07-rm-member-verification-route",
  kind: "user",
  defaultConfig: { isDeprecated: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { isDeprecated: true };
obj.variations = obj;
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx",
);

export const RemoveMemberVerificationRouteExperiment = tmp2;
export const getIsMemberVerificationRouteDeprecated = function getIsMemberVerificationRouteDeprecated(
  transitionToMemberVerification,
) {
  return closure_0.getConfig({ location: transitionToMemberVerification }).isDeprecated;
};
export const useIsMemberVerificationRouteDeprecated = function useIsMemberVerificationRouteDeprecated(MainNavigator) {
  return closure_0.useConfig({ location: MainNavigator }).isDeprecated;
};
