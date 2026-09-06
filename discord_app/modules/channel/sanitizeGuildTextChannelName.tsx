// === Module 4715: sanitizeGuildTextChannelName ===

// Module 4715 (sanitizeGuildTextChannelName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/^-+/, "");
  return str.replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase();
};