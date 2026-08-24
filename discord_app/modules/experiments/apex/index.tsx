// discord_app/modules/experiments/apex/index.tsx
import getUnitIdDefault from "ApexExperiment.tsx";
import importDefaultResult from "ApexExperimentStore.tsx";

const result = require("set").fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = require("getUnitId").ApexExperiment;
export const ApexExperimentsMessage = require("INSTALLATION_UNIT_ID").ApexExperimentsMessage;
export const ExperimentName = require("INSTALLATION_UNIT_ID").ExperimentName;
export const createApexExperiment = getUnitIdDefault;
export const ApexExperimentStore = importDefaultResult;