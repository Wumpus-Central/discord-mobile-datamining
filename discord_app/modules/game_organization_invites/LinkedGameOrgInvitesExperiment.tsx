// === Module 11623: LinkedGameOrgInvitesExperiment ===

// Module 11623 (LinkedGameOrgInvitesExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-linked-game-org-invites-dev", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/LinkedGameOrgInvitesExperiment.tsx");

export const LinkedGameOrgInvitesExperiment = apexExperiment;
export function useLinkedGameOrgInvitesEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
}
export function getLinkedGameOrgInvitesEnabled(MessageCodedLinkManager) {
  return apexExperiment.getConfig({ location: MessageCodedLinkManager }).enabled;
}