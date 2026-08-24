// === Module 9442: useMaybeAddPollsMarketingEasterEggNote ===

// Module 9442 (useMaybeAddPollsMarketingEasterEggNote)
import initialize from "initialize" /* 589 */;
import closure_2 from "_getSystemLocale" /* 1995 */;

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