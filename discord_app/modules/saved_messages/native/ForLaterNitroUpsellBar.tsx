// discord_app/modules/saved_messages/native/ForLaterNitroUpsellBar.tsx
import openForLaterLimitUpsellDefault from "openForLaterLimitUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const SavedMessagesConstants = fn(8098);
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7409)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  const callback = noop.useCallback(() => openForLaterLimitUpsellDefault(isReminder, analyticsLocations), items);
  const tmp3 = analyticsLocations(12478);
  const premiumTypeDisplayName = isReminder(4415).getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = isReminder(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = isReminder(1115).t;
  if (isAtLimit) {
    const obj2 = { nitroTierName: premiumTypeDisplayName, premiumMax: isReminder ? closure_6 : closure_5 };
    formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj2);
  } else {
    const obj3 = { nitroTierName: premiumTypeDisplayName };
    const obj4 = {
      text: formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj3),
      isAtLimit,
      onPress: callback,
    };
    return (
      <tmp3
        text={formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj3)}
        isAtLimit={isAtLimit}
        onPress={callback}
      />
    );
  }
  const obj = isReminder(4415);
}
