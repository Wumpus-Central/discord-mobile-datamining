// discord_app/modules/vibegrations/lib/vibegrationsAppSlotsLeftLabel.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/VibegrationsUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAppSlotsLeftLabel.tsx");

export const vibegrationsAppSlotsLeftLabel = function vibegrationsAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3723.JQU61N);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3723["336dtK"], obj);
  }
  return stringResult;
};
