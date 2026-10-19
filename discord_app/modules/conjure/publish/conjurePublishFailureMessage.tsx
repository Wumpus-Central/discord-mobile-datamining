// === Module 11694: conjurePublishFailureMessage ===

// Module 11694 (conjurePublishFailureMessage)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  if (20088 === code.code) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3883.UXEDPw);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3883.gMWZeG);
  }
  return stringResult;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;