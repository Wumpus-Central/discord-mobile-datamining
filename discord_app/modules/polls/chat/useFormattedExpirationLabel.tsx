// discord_app/modules/polls/chat/useFormattedExpirationLabel.tsx
function formatExpirationLabel(expiry) {
  const tmp2 = require("../../../../_runtime/03867_t.js")();
  if (expiry > tmp2) {
    const diffResult = expiry.diff(tmp2, "days");
    if (diffResult > 1) {
      const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      let obj = { days: null };
      obj[0] = diffResult;
      return intl3.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.dex68a, obj);
    } else {
      const diffResult1 = expiry.diff(tmp2, "hours");
      if (diffResult1 > 1) {
        const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj = { hours: null };
        obj[0] = diffResult1;
        return intl2.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.BWqf0c, obj);
      } else {
        const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj = { minutes: null };
        obj[0] = expiry.diff(tmp2, "minutes");
        return intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["3SLXAz"], obj);
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