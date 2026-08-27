// discord_app/modules/saved_messages/native/ForLaterNitroUpsellBar.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";
import SAVED_BOOKMARKS_MAX from "../../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ SAVED_BOOKMARKS_MAX: c5, SAVED_REMINDERS_MAX: closure_6 } = SAVED_BOOKMARKS_MAX);
const result = require("set").fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5905)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  const callback = React.useCallback(() => analyticsLocations(closure_1_2[5])(isReminder, analyticsLocations), items);
  let obj = isReminder(4107);
  const premiumTypeDisplayName = obj.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = isReminder(1236).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = isReminder(1236).t;
  if (isAtLimit) {
    obj = { nitroTierName: null, premiumMax: null };
    obj[0] = premiumTypeDisplayName;
    obj[1] = isReminder ? closure_6 : closure_5;
    formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj);
  } else {
    obj = { nitroTierName: null };
    obj[0] = premiumTypeDisplayName;
    obj1 = { text: null, isAtLimit: null, onPress: null };
    obj1[0] = formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj);
    obj1[1] = isAtLimit;
    obj1[2] = callback;
    return <tmp3 text={null} isAtLimit={null} onPress={null} />;
  }
};