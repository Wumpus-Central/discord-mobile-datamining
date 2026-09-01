// === Module 10309: useFavoritesGuildConfig ===

// Module 10309 (useFavoritesGuildConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

let obj = { 1: null, 2: { enabled: true } };
obj[2] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: obj });
obj = { 1: null };
obj[1] = { enabled: true };
let closure_1 = ApexExperiment.createApexExperiment({ name: "2026-08-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  const _location = location.location;
  const config = closure_1.useConfig({ location: _location });
  const tmp2 = config.enabled || closure_0.useConfig({ location: _location }).enabled;
  return { enabled: config.enabled || closure_0.useConfig({ location: _location }).enabled, isFreemium: config.enabled };
};
export const getFavoritesGuildConfig = function getFavoritesGuildConfig(location) {
  const _location = location.location;
  const config = closure_1.getConfig({ location: _location });
  const tmp2 = config.enabled || closure_0.getConfig({ location: _location }).enabled;
  return { enabled: config.enabled || closure_0.getConfig({ location: _location }).enabled, isFreemium: config.enabled };
};