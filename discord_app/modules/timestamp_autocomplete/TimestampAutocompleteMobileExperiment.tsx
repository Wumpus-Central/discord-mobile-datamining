// discord_app/modules/timestamp_autocomplete/TimestampAutocompleteMobileExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-timestamp-autocomplete-mobile",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = set.fileFinishedImporting("modules/timestamp_autocomplete/TimestampAutocompleteMobileExperiment.tsx");

export const TimestampAutocompleteMobileExperiment = apexExperiment;
