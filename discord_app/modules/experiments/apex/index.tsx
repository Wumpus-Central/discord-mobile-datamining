// discord_app/modules/experiments/apex/index.tsx
import set from "../../../../_runtime/00002_set.js";
import getUnitId from "ApexExperiment.tsx";
import getUnitIdDefault from "ApexExperiment.tsx";
import INSTALLATION_UNIT_ID from "ApexTypes.tsx";

const result = set.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = getUnitId.ApexExperiment;
export const ApexExperimentsMessage = INSTALLATION_UNIT_ID.ApexExperimentsMessage;
export const ExperimentName = INSTALLATION_UNIT_ID.ExperimentName;
export const createApexExperiment = getUnitIdDefault;