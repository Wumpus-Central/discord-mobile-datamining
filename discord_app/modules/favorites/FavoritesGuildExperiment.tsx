// === Module 10467: FavoritesGuildExperiment ===

// Module 10467 (FavoritesGuildExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
const obj = { name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-08-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
let closure_1 = ApexExperiment.createApexExperiment(obj3);
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