// === Module 8255: DidBackgroundAppNativeExperiment ===

// Module 8255 (DidBackgroundAppNativeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-11-mobile-did-background-app-native", defaultConfig: { useNative: false }, variations: { 0: { useNative: false }, 1: { useNative: true } } });
const result = size.fileFinishedImporting("modules/tti_analytics/native/DidBackgroundAppNativeExperiment.tsx");

export default apexExperiment;