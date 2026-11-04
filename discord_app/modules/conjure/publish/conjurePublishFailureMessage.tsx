// === Module 12295: conjurePublishFailureMessage ===

// Module 12295 (conjurePublishFailureMessage)
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    if ("" !== trimmed) {
      return trimmed;
    }
  }
  if (20088 === detail.code) {
    const intl2 = util.intl;
    intl2.string(_modDef3995.UXEDPw);
  } else {
    const intl = util.intl;
    intl.string(_modDef3995.gMWZeG);
  }
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;