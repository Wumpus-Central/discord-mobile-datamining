// === Module 11594: GroupDMNitroCapExperiment ===

// Module 11594 (GroupDMNitroCapExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const tmp2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-06-nitro-gdm-cap-increase", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const config = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/GroupDMNitroCapExperiment.tsx");

export default tmp2;
export const getGroupDMNitroCapConfig = function getGroupDMNitroCapConfig(getGroupDMRecipientLimit) {
  return config.getConfig({ location: getGroupDMRecipientLimit });
};