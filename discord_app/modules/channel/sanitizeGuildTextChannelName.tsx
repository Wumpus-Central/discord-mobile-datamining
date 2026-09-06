// discord_app/modules/channel/sanitizeGuildTextChannelName.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/^-+/, "");
  return str
    .replace(/^-+/, "")
    .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
    .toLowerCase();
}
