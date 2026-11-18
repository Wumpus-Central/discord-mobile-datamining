// discord_app/modules/tti_analytics/native/DidBackgroundAppNativeExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-11-mobile-did-background-app-native",
  defaultConfig: { useNative: false },
  variations: { 0: { useNative: false }, 1: { useNative: true } },
});
const result = size.fileFinishedImporting("modules/tti_analytics/native/DidBackgroundAppNativeExperiment.tsx");

export default apexExperiment;
