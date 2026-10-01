// === Module 16533: vibegrationsPublishFailureMessage ===

// Module 16533 (vibegrationsPublishFailureMessage)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
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
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3714.xTlB8O, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3714.fNP6Cd);
};