// discord_app/modules/conjure/remix/conjureCopyDefaultName.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4245 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const re3 = /[\uD800-\uDBFF]$/;
const result = size.fileFinishedImporting("modules/conjure/remix/conjureCopyDefaultName.tsx");

export default function conjureCopyDefaultName(projectName) {
  const intl = util.intl;
  const bound = Math.max(
    0,
    ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH -
      intl.formatToPlainString(_modDef4245.F6fHag, { projectName: "" }).length,
  );
  if (projectName.length <= bound) {
    const intl3 = util.intl;
    const obj = { projectName };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef4245.F6fHag, obj);
  } else {
    const replaced = projectName.slice(0, bound).replace(re3, "");
    const str = projectName.slice(0, bound);
    const intl2 = util.intl;
    const obj2 = { projectName: replaced.trimEnd() };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef4245.F6fHag, obj2);
    const trimEndResult = replaced.trimEnd();
  }
  return formatToPlainStringResult;
}
