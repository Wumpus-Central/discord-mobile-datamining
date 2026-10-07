// discord_app/modules/bug_reporter/BugReporterExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-01-bug-reporter",
  kind: "user",
  defaultConfig: { hasBugReporterAccess: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { hasBugReporterAccess: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
