// === Module 17112: conjurePublishFailureMessage ===

// Module 17112 (conjurePublishFailureMessage)
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    if ("" !== trimmed) {
      const intl2 = util.intl;
      const obj = { reason: trimmed };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3849["7ZsIF1"], obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3849.gMWZeG);
};