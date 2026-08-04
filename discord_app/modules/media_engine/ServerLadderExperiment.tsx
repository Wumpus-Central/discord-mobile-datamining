// discord_app/modules/media_engine/ServerLadderExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { bitrate: 3500000, enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-server-ladder", kind: "user", defaultConfig: { bitrate: 9000000, enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;