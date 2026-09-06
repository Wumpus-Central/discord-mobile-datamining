// discord_app/modules/monitoring/MonitoringAgentUtils.tsx
import DesignIds from "../../../discord_common/js/shared/shared-constants/DesignIds.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = { design_id: DesignIds.DesignIds.DESIGN_TABS_IA };
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((item) => "" + item + ":" + obj[item]);
};
