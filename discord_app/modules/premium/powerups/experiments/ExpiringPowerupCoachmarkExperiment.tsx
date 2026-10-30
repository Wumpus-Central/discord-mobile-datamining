// === Module 14033: ExpiringPowerupCoachmarkExperiment ===

// Module 14033 (ExpiringPowerupCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;

const tmp2 = apex_ApexExperimentDefault({ name: "2026-02-expiring-powerup-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return closure_0.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
}