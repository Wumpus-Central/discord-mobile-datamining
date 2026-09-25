// === Module 17419: getGuildTemplateUrl ===

// Module 17419 (getGuildTemplateUrl)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_templates/getGuildTemplateUrl.tsx");

export default function getGuildTemplateUrl() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let str2 = "";
  if (flag) {
    const _location = location;
    const _HermesInternal = HermesInternal;
    str2 = "" + location.protocol;
  }
  return "" + str2 + "//" + window.GLOBAL_ENV.GUILD_TEMPLATE_HOST + "/" + str;
};