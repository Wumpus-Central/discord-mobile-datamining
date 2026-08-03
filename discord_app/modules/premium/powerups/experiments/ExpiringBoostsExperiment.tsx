// === Module 11791: useExpiringBoostsEnabled ===

// Module 11791 (useExpiringBoostsEnabled)
const tmp2 = require("getUnitId")({ name: "2026-05-expiring-boosts", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let c0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ExpiringBoostsExperiment.tsx");

export default tmp2;
export const useExpiringBoostsEnabled = function useExpiringBoostsEnabled(GuildPowerupsRecentActivity) {
  return tmp2.useConfig({ location: GuildPowerupsRecentActivity }).enabled;
};