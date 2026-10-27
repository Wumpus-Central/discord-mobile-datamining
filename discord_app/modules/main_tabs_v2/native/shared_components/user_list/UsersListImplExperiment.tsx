// === Module 13885: UsersListImplExperiment ===

// Module 13885 (UsersListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-users-list-impl", defaultConfig: { list: "fast" }, variations: null };
const obj2 = { 1: null };
obj2[1] = { list: "legend" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersListImplExperiment.tsx");

export default apexExperiment;