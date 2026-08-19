// discord_app/modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import _getSystemLocale from "../user_settings/LocaleStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(arg0) {
  initialize;
  [][0] = closure_2;
  let formatToPlainStringResult = arg0;
  if (":pizza:" === arg0) {
    formatToPlainStringResult = arg0;
    if (tmp4) {
      const intl = getSystemLocale.intl;
      const obj = { emojiName: null };
      obj[0] = arg0;
      formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};