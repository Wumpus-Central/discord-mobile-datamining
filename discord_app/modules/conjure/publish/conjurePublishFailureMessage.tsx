// === Module 11593: conjurePublishFailureMessage ===

// Module 11593 (conjurePublishFailureMessage)
import util from "util" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  if (20088 === code.code) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3862.UXEDPw);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3862.gMWZeG);
  }
  return stringResult;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;