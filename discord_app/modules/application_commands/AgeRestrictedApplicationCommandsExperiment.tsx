// === Module 8445: getUnitId ===

// Module 8445 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;