// discord_app/modules/reactions/ReactionToProfileExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let obj = {
  kind: "user",
  name: "2026-07-mobile-reaction-to-profile",
  defaultConfig: { reactionToProfileEnabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { reactionToProfileEnabled: true };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
