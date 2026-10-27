// discord_app/modules/request_to_stream/MobileRequestToStreamExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/MobileRequestToStreamExperiment.tsx");

export const MobileRequestToStreamExperiment = apex_ApexExperimentDefault({
  kind: "guild",
  name: "2026-09-mobile-request-to-stream",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
