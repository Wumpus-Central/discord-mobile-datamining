// === Module 8824: useFormattedExpirationLabel ===

// Module 8824 (useFormattedExpirationLabel)
import util from "util" /* 1114 */;
import _modDef4196 from "module_4196" /* 4196 */;
import size from "module_2" /* 2 */;

function formatExpirationLabel(expiry) {
  const tmp2 = _modDef4196();
  if (expiry > tmp2) {
    const diffResult = expiry.diff(tmp2, "days");
    if (diffResult > 1) {
      const intl3 = util.intl;
      let obj = { days: diffResult };
      return intl3.formatToPlainString(util.t.dex68a, obj);
    } else {
      const diffResult1 = expiry.diff(tmp2, "hours");
      if (diffResult1 > 1) {
        const intl2 = util.intl;
        obj = { hours: diffResult1 };
        return intl2.formatToPlainString(util.t.BWqf0c, obj);
      } else {
        const intl = util.intl;
        obj = { minutes: expiry.diff(tmp2, "minutes") };
        return intl.formatToPlainString(util.t["3SLXAz"], obj);
      }
    }
  }
}
const result = size.fileFinishedImporting("modules/polls/chat/useFormattedExpirationLabel.tsx");

export default function useFormattedExpirationLabel(expiry) {
  if (null != expiry) {
    return formatExpirationLabel(expiry);
  }
};
export { formatExpirationLabel };