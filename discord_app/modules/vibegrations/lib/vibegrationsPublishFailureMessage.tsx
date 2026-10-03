// === Module 16610: vibegrationsPublishFailureMessage ===

// Module 16610 (vibegrationsPublishFailureMessage)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPublishFailureMessage.tsx");

export default function vibegrationsPublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    if ("" !== trimmed) {
      const intl2 = util.intl;
      const obj = { reason: trimmed };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.xTlB8O, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3723.fNP6Cd);
};