import { t } from "../../../../_runtime/03867_t.js";
import { getSystemLocale } from "../../../intl/index.native.tsx";
// discord_app/modules/polls/chat/useFormattedExpirationLabel.tsx
function formatExpirationLabel(expiry) {
  const tmp2 = t();
  if (expiry > tmp2) {
    const diffResult = expiry.diff(tmp2, "days");
    if (diffResult > 1) {
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      let obj = { days: null };
      obj[0] = diffResult;
      return intl3.formatToPlainString(getSystemLocale /* getSystemLocale */.t.dex68a, obj);
    } else {
      const diffResult1 = expiry.diff(tmp2, "hours");
      if (diffResult1 > 1) {
        const intl2 = getSystemLocale /* getSystemLocale */.intl;
        obj = { hours: null };
        obj[0] = diffResult1;
        return intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.BWqf0c, obj);
      } else {
        const intl = getSystemLocale /* getSystemLocale */.intl;
        obj = { minutes: null };
        obj[0] = expiry.diff(tmp2, "minutes");
        return intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t["3SLXAz"], obj);
      }
    }
  }
}
const result = require("set").fileFinishedImporting("modules/polls/chat/useFormattedExpirationLabel.tsx");

export default function useFormattedExpirationLabel(expiry) {
  if (null != expiry) {
    return formatExpirationLabel(expiry);
  }
};
export { formatExpirationLabel };