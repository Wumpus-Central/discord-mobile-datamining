// discord_app/modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let obj = {
  kind: "user",
  name: "2026-05-age-restricted-application-commands",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx",
);

export default apex_ApexExperimentDefault(obj);
