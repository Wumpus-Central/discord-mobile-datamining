// === Module 11804: conjurePublishFailureMessage ===

// Module 11804 (conjurePublishFailureMessage)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
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
    intl2.string(_modDef3863.UXEDPw);
  } else {
    const intl = util.intl;
    intl.string(_modDef3863.gMWZeG);
  }
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;