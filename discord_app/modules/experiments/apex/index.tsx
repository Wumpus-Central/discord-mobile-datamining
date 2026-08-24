// === Module 1472: ApexExperiment ===

// Module 1472 (ApexExperiment)
import set from "set" /* 2 */;
import getUnitId from "getUnitId" /* 1368 */;
import getUnitIdDefault from "getUnitId" /* 1368 */;
import INSTALLATION_UNIT_ID from "INSTALLATION_UNIT_ID" /* 1473 */;

const result = set.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = getUnitId.ApexExperiment;
export const ApexExperimentsMessage = INSTALLATION_UNIT_ID.ApexExperimentsMessage;
export const ExperimentName = INSTALLATION_UNIT_ID.ExperimentName;
export const createApexExperiment = getUnitIdDefault;