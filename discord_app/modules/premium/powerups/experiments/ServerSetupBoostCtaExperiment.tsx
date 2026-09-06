// discord_app/modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-06-server-setup-boost-cta", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx");

export const ServerSetupBoostCtaExperiment = apexExperiment;
