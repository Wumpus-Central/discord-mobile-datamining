// === Module 9405: useMaybeAddPollsMarketingEasterEggNote ===

// Module 9405 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;

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