// discord_app/modules/vibegrations/lib/openVibegrationsProjectInBuilder.tsx
import VibegrationsUtils from "VibegrationsUtils.tsx";
import VibegrationsActivity from "VibegrationsActivity.tsx";
import openVibegrationsProject from "openVibegrationsProject.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
