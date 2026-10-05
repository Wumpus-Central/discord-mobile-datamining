// discord_app/modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  kind: "user",
  name: "2026-05-age-restricted-application-commands",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting(
  "modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx",
);

export default tmp2;
