// discord_app/modules/conjure/publish/conjurePublishFailureMessage.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3831 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

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
    intl2.string(_modDef3831.UXEDPw);
  } else {
    const intl = util.intl;
    intl.string(_modDef3831.gMWZeG);
  }
}
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
