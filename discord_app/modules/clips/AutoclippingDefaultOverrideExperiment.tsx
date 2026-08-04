// discord_app/modules/clips/AutoclippingDefaultOverrideExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-autoclipping-default-override", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/clips/AutoclippingDefaultOverrideExperiment.tsx");

export const AutoclippingDefaultOverrideExperiment = apexExperiment;