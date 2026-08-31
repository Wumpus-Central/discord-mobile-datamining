// === Module 8097: formatExpirationLabel ===

// Module 8097 (formatExpirationLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hooksDefault from "hooks" /* 4045 */;

function formatExpirationLabel(expiry) {
  const tmp2 = hooksDefault();
  if (expiry > tmp2) {
    const diffResult = expiry.diff(tmp2, "days");
    if (diffResult > 1) {
      const intl3 = getSystemLocale.intl;
      let obj = { days: null };
      obj[0] = diffResult;
      return intl3.formatToPlainString(getSystemLocale.t.dex68a, obj);
    } else {
      const diffResult1 = expiry.diff(tmp2, "hours");
      if (diffResult1 > 1) {
        const intl2 = getSystemLocale.intl;
        obj = { hours: null };
        obj[0] = diffResult1;
        return intl2.formatToPlainString(getSystemLocale.t.BWqf0c, obj);
      } else {
        const intl = getSystemLocale.intl;
        obj = { minutes: null };
        obj[0] = expiry.diff(tmp2, "minutes");
        return intl.formatToPlainString(getSystemLocale.t["3SLXAz"], obj);
      }
    }
  }
}
const result = set.fileFinishedImporting("modules/polls/chat/useFormattedExpirationLabel.tsx");

export default function useFormattedExpirationLabel(expiry) {
  if (null != expiry) {
    return formatExpirationLabel(expiry);
  }
};
export { formatExpirationLabel };