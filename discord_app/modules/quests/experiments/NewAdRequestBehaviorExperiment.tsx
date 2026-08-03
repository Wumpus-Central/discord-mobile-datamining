import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enableNewRequestBehavior: false }, 3: { enableNewRequestBehavior: true }, 4: { enableNewRequestBehavior: false }, 5: { enableNewRequestBehavior: true }, 6: { enableNewRequestBehavior: true } };
obj[6] = { enableNewRequestBehavior: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-10-ad-request-behavior-experiment", kind: "user", defaultConfig: { enableNewRequestBehavior: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/NewAdRequestBehaviorExperiment.tsx");

export default apexExperiment;