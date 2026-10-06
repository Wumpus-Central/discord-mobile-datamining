// discord_app/modules/conjure/publish/conjurePublishFailureMessage.tsx
import intl3 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    let formatToPlainStringResult;
    if ("" !== trimmed) {
      const intl2 = intl3.intl;
      const obj = { reason: trimmed };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3753["7ZsIF1"], obj);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  formatToPlainStringResult = intl.string(_modDef3753.gMWZeG);
}
