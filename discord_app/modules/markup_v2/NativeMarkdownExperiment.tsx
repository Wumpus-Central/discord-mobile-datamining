// === Module 8165: NativeMarkdownExperiment ===

// Module 8165 (NativeMarkdownExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-04-native-markdown", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/markup_v2/NativeMarkdownExperiment.tsx");

export const NativeMarkdownExperiment = apexExperiment;
export const useNativeMarkdown = function useNativeMarkdown(location) {
  return apexExperiment.useConfig({ location: location.location });
};