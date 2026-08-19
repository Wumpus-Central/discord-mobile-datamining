// === Module 4985: sanitizeGuildTextChannelName ===

// Module 4985 (sanitizeGuildTextChannelName)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/^-+/, "");
  return str.replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase();
};