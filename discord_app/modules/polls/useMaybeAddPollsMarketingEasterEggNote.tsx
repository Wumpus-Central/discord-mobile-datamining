// === Module 10335: useMaybeAddPollsMarketingEasterEggNote ===

// Module 10335 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import LocaleStore from "LocaleStore" /* 2025 */;

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
};