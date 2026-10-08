// discord_app/modules/game_organization_invites/LinkedGameOrgInvitesExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-09-linked-game-org-invites-dev",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/LinkedGameOrgInvitesExperiment.tsx");

export const LinkedGameOrgInvitesExperiment = apexExperiment;
export const useLinkedGameOrgInvitesEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useLinkedGameOrgInvitesEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).enabled;
    }
  : function useLinkedGameOrgInvitesEnabled(location) {
      return apexExperiment.useConfig({ location }).enabled;
    };
export const getLinkedGameOrgInvitesEnabled = function getLinkedGameOrgInvitesEnabled(MessageCodedLinkManager) {
  return apexExperiment.getConfig({ location: MessageCodedLinkManager }).enabled;
};
