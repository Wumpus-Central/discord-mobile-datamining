// === Module 12710: apexExperiment ===

// Module 12710 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-chat-loading-indicator", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/chat/native/ChatLoadingIndicatorExperiment.tsx");

export const ChatLoadingIndicatorExperiment = apexExperiment;