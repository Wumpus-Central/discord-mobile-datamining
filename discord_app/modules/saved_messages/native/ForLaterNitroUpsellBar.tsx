// === Module 13134: ForLaterNitroUpsellBar ===

// Module 13134 (ForLaterNitroUpsellBar)
import util from "util" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import openForLaterLimitUpsellDefault from "openForLaterLimitUpsell" /* 11336 */;
import noop from "module_19" /* 19 */;

require = fn;
function formatUpsellText(isReminder, isAtLimit) {
  const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (isAtLimit) {
    const obj2 = { nitroTierName: premiumTypeDisplayName, premiumMax: isReminder ? timestampProducer : hasOwnProperty };
    formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj2);
  } else {
    const obj3 = { nitroTierName: premiumTypeDisplayName };
    return formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj3);
  }
}
const PremiumTypes = fn(1379).PremiumTypes;
const SavedMessagesConstants = fn(7482);
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isReminder) => {
  const cResult = isReminder(576).c(10);
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === isReminder) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === isAtLimit) {
      if (cResult[4] === isReminder) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === isAtLimit) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp5) {
            let tmp8 = cResult[9];
          }
          return tmp8;
        }
      }
      const obj2 = { text: tmp5, isAtLimit, onPress: tmp4 };
      const tmp10 = jsx(tmp3(11850), { text: tmp5, isAtLimit, onPress: tmp4 });
      cResult[6] = isAtLimit;
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = tmp10;
      tmp8 = tmp10;
    }
    const tmp7 = formatUpsellText(isReminder, isAtLimit);
    cResult[3] = isAtLimit;
    cResult[4] = isReminder;
    cResult[5] = tmp7;
    tmp5 = tmp7;
  }
  const fn = function s() {
    return openForLaterLimitUpsellDefault(isReminder, analyticsLocations);
  };
  cResult[0] = analyticsLocations;
  cResult[1] = isReminder;
  cResult[2] = fn;
  tmp4 = fn;
  const obj = isReminder(576);
  tmp3 = analyticsLocations;
}) : ((isReminder) => {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  const callback = noop.useCallback(() => openForLaterLimitUpsellDefault(isReminder, analyticsLocations), items);
  const obj = { text: formatUpsellText(isReminder, isAtLimit), isAtLimit, onPress: callback };
  return jsx(analyticsLocations(11850), { text: formatUpsellText(isReminder, isAtLimit), isAtLimit, onPress: callback });
});