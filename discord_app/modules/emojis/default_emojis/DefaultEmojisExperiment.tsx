// discord_app/modules/emojis/default_emojis/DefaultEmojisExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-default-emojis",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/emojis/default_emojis/DefaultEmojisExperiment.tsx");

export const DefaultEmojisExperiment = apexExperiment;
export function useDefaultEmojisEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
}
