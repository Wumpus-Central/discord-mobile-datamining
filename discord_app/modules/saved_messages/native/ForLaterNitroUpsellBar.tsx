// discord_app/modules/saved_messages/native/ForLaterNitroUpsellBar.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../intl/index.native.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import openForLaterLimitUpsellDefault from "openForLaterLimitUpsell.tsx";
import react from "../../../../_runtime/00019_react.js";
import SavedMessagesConstants from "../../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
function formatUpsellText(isReminder, isAtLimit) {
  let formatToPlainStringResult;
  const obj = PremiumUtils;
  const premiumTypeDisplayName = obj.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl2.t;
  const tmp2 = isAtLimit;
  if (tmp2) {
    const obj2 = { nitroTierName: premiumTypeDisplayName, premiumMax: isReminder ? metroRequire : hasOwnProperty };
    formatToPlainStringResult = formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj2);
  } else {
    const obj3 = { nitroTierName: premiumTypeDisplayName };
    formatToPlainStringResult = formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj3);
  }
  return formatToPlainStringResult;
}
const PremiumTypes = PremiumConstants.PremiumTypes;
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isReminder) => {
      let analyticsLocations;
      const obj = isReminder(576);
      const cResult = obj.c(10);
      isReminder = isReminder.isReminder;
      const isAtLimit = isReminder.isAtLimit;
      const tmp3 = analyticsLocations;
      analyticsLocations = analyticsLocations(6664)().analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        let tmp4;
        if (cResult[1] === isReminder) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === isAtLimit) {
          let tmp5;
          if (cResult[4] === isReminder) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === isAtLimit) {
            if (cResult[7] === tmp4) {
              let tmp8;
              if (cResult[8] === tmp5) {
                tmp8 = cResult[9];
              }
              return tmp8;
            }
          }
          const tmp10 = jsx(tmp3(11864), { text: tmp5, isAtLimit, onPress: tmp4 });
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
    }
  : (isReminder) => {
      isReminder = isReminder.isReminder;
      const isAtLimit = isReminder.isAtLimit;
      let analyticsLocations;
      analyticsLocations = analyticsLocations(6664)().analyticsLocations;
      const items = [isReminder, analyticsLocations];
      const callback = react.useCallback(() => openForLaterLimitUpsellDefault(isReminder, analyticsLocations), items);
      analyticsLocations(11864);
      return <tmp2 text={formatUpsellText(isReminder, isAtLimit)} isAtLimit={isAtLimit} onPress={callback} />;
    };
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default tmp3;
