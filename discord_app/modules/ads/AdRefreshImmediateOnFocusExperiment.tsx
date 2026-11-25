// === Module 16658: AdRefreshImmediateOnFocusExperiment ===

// Module 16658 (AdRefreshImmediateOnFocusExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-ad-refresh-immediate-on-focus", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: false }, 2: { enabled: true }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true }, 6: { enabled: true }, 7: { enabled: true }, 8: { enabled: true }, 9: { enabled: true } } });
const result = size.fileFinishedImporting("modules/ads/AdRefreshImmediateOnFocusExperiment.tsx");

export const AdRefreshImmediateOnFocusExperiment = apexExperiment;