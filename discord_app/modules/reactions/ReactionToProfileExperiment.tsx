// discord_app/modules/reactions/ReactionToProfileExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

const obj = {
  kind: "user",
  name: "2026-07-mobile-reaction-to-profile",
  defaultConfig: { reactionToProfileEnabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { reactionToProfileEnabled: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
