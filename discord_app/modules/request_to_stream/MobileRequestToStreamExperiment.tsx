// === Module 14795: MobileRequestToStreamExperiment ===

// Module 14795 (MobileRequestToStreamExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/MobileRequestToStreamExperiment.tsx");

export const MobileRequestToStreamExperiment = apex_ApexExperimentDefault({ kind: "guild", name: "2026-09-mobile-request-to-stream", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });