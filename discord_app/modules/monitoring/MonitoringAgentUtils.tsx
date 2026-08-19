// === Module 5010: addGlobalTag ===

// Module 5010 (addGlobalTag)
import obj132 from "obj132" /* 2 */;
import DesignIds from "DesignIds" /* 673 */;

const result = obj132.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((item, index) => "" + item + ":" + table[item]);
};