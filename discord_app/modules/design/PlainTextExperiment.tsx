// === Module 14132: PlainTextExperiment ===

// Module 14132 (PlainTextExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-react-native-plain-text", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/PlainTextExperiment.tsx");

export const usePlainTextExperiment = function usePlainTextExperiment(RootThemeContextProvider) {
  return closure_0.useConfig({ location: RootThemeContextProvider }).enabled;
};