// === Module 4183: experiment ===

// Module 4183 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable File Upload 250MB Powerup", config: { enabled: true, rollbackEnabled: false } }, { id: 2, label: "Rollback UI for File Upload 250MB Powerup", config: { enabled: true, rollbackEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_file_upload_250_mb_powerup", label: "File Upload 250MB Powerup", defaultConfig: { enabled: false, rollbackEnabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/FileUpload250MbPowerupExperiment.tsx");

export const FileUpload250MbPowerupExperiment = experiment;
export const getFileUpload250MbPowerupEnabled = function getFileUpload250MbPowerupEnabled(guildId, GuildPowerupsConstants) {
  return experiment.getCurrentConfig({ guildId, location: GuildPowerupsConstants }, { autoTrackExposure: false }).enabled;
};
export const useFileUpload250MbPowerupEnabled = function useFileUpload250MbPowerupEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
export const useFileUpload250MbPowerupRollbackEnabled = function useFileUpload250MbPowerupRollbackEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).rollbackEnabled;
};
export const getFileUpload250MbPowerupRollbackEnabled = function getFileUpload250MbPowerupRollbackEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).rollbackEnabled;
};