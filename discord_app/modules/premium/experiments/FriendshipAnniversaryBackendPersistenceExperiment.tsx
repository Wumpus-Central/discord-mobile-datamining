// === Module 6183: apexExperiment ===

// Module 6183 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-friendship-anniversary-backend-persistence", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/premium/experiments/FriendshipAnniversaryBackendPersistenceExperiment.tsx");

export const FriendshipAnniversaryBackendPersistenceExperiment = apexExperiment;
export const isFriendshipAnniversaryBackendPersistenceEnabled = function isFriendshipAnniversaryBackendPersistenceEnabled(dismissGiftIntent) {
  return apexExperiment.getConfig({ location: dismissGiftIntent }).enabled;
};