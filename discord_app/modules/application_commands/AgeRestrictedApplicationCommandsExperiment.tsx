// discord_app/modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx
import getUnitIdDefault from "../experiments/apex/ApexExperiment.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;