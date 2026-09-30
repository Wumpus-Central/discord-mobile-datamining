// discord_app/modules/vibegrations/lib/vibegrationsPublishFailureMessage.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPublishFailureMessage.tsx");

export default function vibegrationsPublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    if ("" !== trimmed) {
      const intl2 = util.intl;
      const obj = { reason: trimmed };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3715.xTlB8O, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3715.fNP6Cd);
}
