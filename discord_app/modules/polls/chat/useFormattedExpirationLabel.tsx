// discord_app/modules/polls/chat/useFormattedExpirationLabel.tsx
import intl4 from "../../../intl/index.native.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import size from "../../../../_runtime/metro/00002__.js";

function formatExpirationLabel(expiry) {
  const tmp2 = _modDef4461();
  if (expiry > tmp2) {
    const diffResult = expiry.diff(tmp2, "days");
    if (diffResult > 1) {
      const intl3 = intl4.intl;
      const obj2 = { days: diffResult };
      return intl3.formatToPlainString(intl4.t.dex68a, obj2);
    } else {
      const diffResult1 = expiry.diff(tmp2, "hours");
      if (diffResult1 > 1) {
        const intl2 = intl4.intl;
        const obj3 = { hours: diffResult1 };
        return intl2.formatToPlainString(intl4.t.BWqf0c, obj3);
      } else {
        const diffResult2 = expiry.diff(tmp2, "minutes");
        const intl = intl4.intl;
        const obj = { minutes: diffResult2 };
        return intl.formatToPlainString(intl4.t["3SLXAz"], obj);
      }
    }
  }
}
const result = size.fileFinishedImporting("modules/polls/chat/useFormattedExpirationLabel.tsx");

export default function useFormattedExpirationLabel(expiry) {
  if (null != expiry) {
    return formatExpirationLabel(expiry);
  }
}
export { formatExpirationLabel };
