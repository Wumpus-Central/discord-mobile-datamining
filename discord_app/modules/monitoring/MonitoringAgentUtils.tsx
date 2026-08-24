// discord_app/modules/monitoring/MonitoringAgentUtils.tsx
import set from "../../../_runtime/00002_set.js";
import DesignIds from "../../../discord_common/js/shared/shared-constants/DesignIds.tsx";

const obj = { design_id: DesignIds.DesignIds.DESIGN_TABS_IA };
const result = set.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((arg0) => "" + arg0 + ":" + table[arg0]);
};