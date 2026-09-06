// === Module 5526: RemoveMemberVerificationRouteExperiment ===

// Module 5526 (RemoveMemberVerificationRouteExperiment)
import getUnitIdDefault from "getUnitId" /* 1434 */;

const obj = { 1: null };
obj[1] = { isDeprecated: true };
const tmp2 = getUnitIdDefault({ name: "2026-07-rm-member-verification-route", kind: "user", defaultConfig: { isDeprecated: false }, variations: obj });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx");

export const RemoveMemberVerificationRouteExperiment = tmp2;
export const getIsMemberVerificationRouteDeprecated = function getIsMemberVerificationRouteDeprecated(transitionToMemberVerification) {
  return closure_0.getConfig({ location: transitionToMemberVerification }).isDeprecated;
};
export const useIsMemberVerificationRouteDeprecated = function useIsMemberVerificationRouteDeprecated(MainNavigator) {
  return closure_0.useConfig({ location: MainNavigator }).isDeprecated;
};