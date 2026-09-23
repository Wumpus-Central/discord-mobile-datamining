// === Module 9110: useFormattedExpirationLabel ===

// Module 9110 (useFormattedExpirationLabel)
import util from "util" /* 1115 */;
import _modDef4414 from "module_4414" /* 4414 */;
import size from "module_2" /* 2 */;

function formatExpirationLabel(expiry) {
  const tmp2 = _modDef4414();
  if (expiry > tmp2) {
    const diffResult = expiry.diff(tmp2, "days");
    if (diffResult > 1) {
      const intl3 = util.intl;
      const obj2 = { days: diffResult };
      return intl3.formatToPlainString(util.t.dex68a, obj2);
    } else {
      const diffResult1 = expiry.diff(tmp2, "hours");
      if (diffResult1 > 1) {
        const intl2 = util.intl;
        const obj3 = { hours: diffResult1 };
        return intl2.formatToPlainString(util.t.BWqf0c, obj3);
      } else {
        const intl = util.intl;
        const obj = { minutes: expiry.diff(tmp2, "minutes") };
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