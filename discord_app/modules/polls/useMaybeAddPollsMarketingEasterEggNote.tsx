import _getSystemLocale from "_getSystemLocale";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default function useMaybeAddPollsMarketingEasterEggNote(arg0) {
  require(589) /* initialize */;
  [][0] = _getSystemLocale;
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