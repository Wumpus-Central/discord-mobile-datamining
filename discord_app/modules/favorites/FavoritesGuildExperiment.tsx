// === Module 10226: FavoritesGuildExperiment ===

// Module 10226 (FavoritesGuildExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null, 2: { enabled: true } };
obj[2] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const obj1 = { name: "2026-08-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj1.variations = obj2;
let closure_1 = ApexExperiment.createApexExperiment(obj1);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

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