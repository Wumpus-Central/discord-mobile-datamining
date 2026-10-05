// discord_app/modules/design/PlainTextExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-07-react-native-plain-text",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/PlainTextExperiment.tsx");

export const usePlainTextExperiment = function usePlainTextExperiment(RootThemeContextProvider) {
  const obj = { location: RootThemeContextProvider };
  return closure_0.useConfig(obj).enabled;
};
