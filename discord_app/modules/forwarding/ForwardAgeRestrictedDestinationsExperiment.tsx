// === Module 11181: ForwardAgeRestrictedDestinationsExperiment ===

// Module 11181 (ForwardAgeRestrictedDestinationsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;

const obj = { kind: "user", name: "2026-08-forward-age-restricted-destinations", defaultConfig: { disableAgeRestrictedDestinations: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { disableAgeRestrictedDestinations: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/ForwardAgeRestrictedDestinationsExperiment.tsx");

export default apex_ApexExperimentDefault(obj);