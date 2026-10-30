// === Module 4961: DefaultEmojisExperiment ===

// Module 4961 (DefaultEmojisExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-default-emojis", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/emojis/default_emojis/DefaultEmojisExperiment.tsx");

export const DefaultEmojisExperiment = apexExperiment;
export function useDefaultEmojisEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
}