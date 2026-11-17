// === Module 14404: conjurePublishFailureMessage ===

// Module 14404 (conjurePublishFailureMessage)
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
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
    intl2.string(_modDef4133.UXEDPw);
  } else {
    const intl = util.intl;
    intl.string(_modDef4133.gMWZeG);
  }
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;