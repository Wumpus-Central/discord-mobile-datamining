// discord_app/modules/conjure/identity/requestConjureAppIcon.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4089 from "../intl/ConjureUntranslated.messages.js";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4089["hOg/Uu"]));
}
