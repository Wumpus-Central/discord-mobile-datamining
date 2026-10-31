// === Module 11570: MobileTimestampUpdatingExperiment ===

// Module 11570 (MobileTimestampUpdatingExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-mobile-timestamp-updating", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/messages/native/MobileTimestampUpdatingExperiment.tsx");

export function useIsMobileTimestampUpdatingEnabled(MessagesRenderer) {
  return closure_0.useConfig({ location: MessagesRenderer }).enabled;
}