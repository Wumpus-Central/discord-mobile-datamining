// === Module 10038: FavoritesGuildExperiment ===

// Module 10038 (FavoritesGuildExperiment)
import c from "c" /* 576 */;
import ApexExperiment_mod from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
const obj = { name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
let obj3 = { name: "2026-08-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
let closure_3 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const useFavoritesGuildConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(7);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const config = closure_3.useConfig(tmp2);
  if (cResult[2] !== _location) {
    const obj3 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj3;
    let tmp4 = obj3;
  } else {
    tmp4 = cResult[3];
  }
  const config1 = closure_2.useConfig(tmp4);
  if (cResult[4] === config) {
    if (cResult[5] === config1) {
      let tmp6 = cResult[6];
    }
    return tmp6;
  }
  const obj4 = { enabled: config.enabled || config1.enabled, isFreemium: config.enabled };
  cResult[4] = config;
  cResult[5] = config1;
  cResult[6] = obj4;
  tmp6 = obj4;
}) : ((location) => {
  const _location = location.location;
  const config = closure_3.useConfig({ location: _location });
  const tmp2 = config.enabled || closure_2.useConfig({ location: _location }).enabled;
  return { enabled: config.enabled || closure_2.useConfig({ location: _location }).enabled, isFreemium: config.enabled };
});
export const getFavoritesGuildConfig = function getFavoritesGuildConfig(location) {
  const _location = location.location;
  const config = closure_3.getConfig({ location: _location });
  const tmp2 = config.enabled || closure_2.getConfig({ location: _location }).enabled;
  return { enabled: config.enabled || closure_2.getConfig({ location: _location }).enabled, isFreemium: config.enabled };
};