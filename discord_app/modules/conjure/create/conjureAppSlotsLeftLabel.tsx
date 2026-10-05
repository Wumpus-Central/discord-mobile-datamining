// discord_app/modules/conjure/create/conjureAppSlotsLeftLabel.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3723.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3723.Wy5aK4, obj);
  }
  return stringResult;
};
