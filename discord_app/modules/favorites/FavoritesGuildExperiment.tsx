// === Module 10231: useFavoritesGuildConfig ===

// Module 10231 (useFavoritesGuildConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enabled: true, hasHigherPrivileges: true }, 3: { enabled: true, hasHigherPrivileges: false } };
obj[3] = { enabled: true, hasHigherPrivileges: true, isFreemium: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false, hasHigherPrivileges: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const getFavoritesGuildConfig = function getFavoritesGuildConfig(location) {
  return closure_0.getConfig({ location: location.location });
};