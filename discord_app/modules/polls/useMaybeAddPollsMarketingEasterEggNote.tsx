// discord_app/modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import util from "../../intl/index.native.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
  initialize;
  [][0] = LocaleStore;
  let formatToPlainStringResult = emojiName;
  if (":pizza:" === emojiName) {
    formatToPlainStringResult = emojiName;
    if (tmp4) {
      const intl = util.intl;
      const obj = { emojiName };
      formatToPlainStringResult = intl.formatToPlainString(util.t["1knDPI"], obj);
    }
  }
  return formatToPlainStringResult;
}
