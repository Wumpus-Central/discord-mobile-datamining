// === Module 17440: LinkedGameOrgInvitesExperiment ===

// Module 17440 (LinkedGameOrgInvitesExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-linked-game-org-invites-dev", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/LinkedGameOrgInvitesExperiment.tsx");

export const LinkedGameOrgInvitesExperiment = apexExperiment;
export const useLinkedGameOrgInvitesEnabled = function useLinkedGameOrgInvitesEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getLinkedGameOrgInvitesEnabled = function getLinkedGameOrgInvitesEnabled(MessageCodedLinkManager) {
  return apexExperiment.getConfig({ location: MessageCodedLinkManager }).enabled;
};