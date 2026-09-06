// === Module 13294: ForLaterNitroUpsellBar ===

// Module 13294 (ForLaterNitroUpsellBar)
import openForLaterLimitUpsellDefault from "openForLaterLimitUpsell" /* 11706 */;
import noop from "module_19" /* 19 */;

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const SavedMessagesConstants = fn(7852);
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  const callback = noop.useCallback(() => openForLaterLimitUpsellDefault(isReminder, analyticsLocations), items);
  let obj = isReminder(4218);
  const premiumTypeDisplayName = obj.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = isReminder(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = isReminder(1114).t;
  if (isAtLimit) {
    obj = { nitroTierName: premiumTypeDisplayName, premiumMax: isReminder ? closure_6 : closure_5 };
    formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj);
  } else {
    obj = { nitroTierName: premiumTypeDisplayName };
    const obj1 = { text: formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj), isAtLimit, onPress: callback };
    return <tmp3 text={formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj)} isAtLimit={isAtLimit} onPress={callback} />;
  }
  const tmp3 = analyticsLocations(12221);
};