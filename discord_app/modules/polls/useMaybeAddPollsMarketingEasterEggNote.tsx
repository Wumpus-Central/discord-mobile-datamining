// discord_app/modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../user_settings/LocaleStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(arg0) {
  initialize;
  [][0] = closure_2;
  let formatToPlainStringResult = arg0;
  if (":pizza:" === arg0) {
    formatToPlainStringResult = arg0;
    if (tmp4) {
      const intl = tmp(1236).intl;
      const obj = { emojiName: null };
      obj[0] = arg0;
      formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
};