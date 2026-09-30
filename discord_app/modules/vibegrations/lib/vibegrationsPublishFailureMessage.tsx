// === Module 16512: vibegrationsPublishFailureMessage ===

// Module 16512 (vibegrationsPublishFailureMessage)
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
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
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3715.xTlB8O, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3715.fNP6Cd);
};