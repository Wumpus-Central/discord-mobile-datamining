// discord_app/modules/conjure/settings/conjureProjectNameError.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3862 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3862.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = util.intl;
      const range = {
        min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH,
        max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH,
      };
      stringResult = intl.formatToPlainString(util.t.ONSqYd, range);
    }
  }
  return stringResult;
};
