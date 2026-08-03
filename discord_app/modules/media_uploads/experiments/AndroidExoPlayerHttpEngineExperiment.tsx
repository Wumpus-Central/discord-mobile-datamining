import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-android-exoplayer-http-engine", kind: "user", defaultConfig: { httpEngine: "default" }, variations: { 0: { httpEngine: "default" }, 1: { httpEngine: "okhttp" }, 2: { httpEngine: "cronet" } } });
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/AndroidExoPlayerHttpEngineExperiment.tsx");

export const AndroidExoPlayerHttpEngineExperiment = apexExperiment;