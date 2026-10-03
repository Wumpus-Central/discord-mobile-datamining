// === Module 12264: openVibegrationsProjectInBuilder ===

// Module 12264 (openVibegrationsProjectInBuilder)
import VibegrationsUtils from "VibegrationsUtils" /* 6746 */;
import VibegrationsActivity from "VibegrationsActivity" /* 12265 */;
import openVibegrationsProject from "openVibegrationsProject" /* 12266 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsProjectInBuilder.tsx");

export default function openVibegrationsProjectInBuilder(id) {
  let result = VibegrationsActivity.vibegrationsProjectGuildId(id);
  if (result == null) {
    result = VibegrationsUtils.resolveVibegrationsWorkspaceGuildId("openVibegrationsProjectInBuilder");
    const tmpResult = VibegrationsUtils;
  }
  let flag = null != result;
  if (flag) {
    const result1 = openVibegrationsProject.openVibegrationsProject(result, id.id);
    flag = true;
    const tmpResult2 = openVibegrationsProject;
  }
  return flag;
};