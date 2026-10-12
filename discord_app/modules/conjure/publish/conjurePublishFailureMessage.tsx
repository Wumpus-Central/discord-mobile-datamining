// discord_app/modules/conjure/publish/conjurePublishFailureMessage.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3849 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  if (20088 === code.code) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3849.UXEDPw);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3849.gMWZeG);
  }
  return stringResult;
}
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
