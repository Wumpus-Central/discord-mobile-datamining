// discord_app/modules/monitoring/MonitoringAgentUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import DesignIds from "../../../discord_common/js/shared/shared-constants/DesignIds.tsx";

const result = obj132.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((item, index) => "" + item + ":" + table[item]);
};