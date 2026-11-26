// === Module 11476: conjurePublishFailureMessage ===

// Module 11476 (conjurePublishFailureMessage)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
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
    intl2.string(_modDef4245.UXEDPw);
  } else {
    const intl = util.intl;
    intl.string(_modDef4245.gMWZeG);
  }
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;