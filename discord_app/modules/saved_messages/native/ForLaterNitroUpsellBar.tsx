// === Module 12776: ForLaterNitroUpsellBar ===

// Module 12776 (ForLaterNitroUpsellBar)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import SAVED_BOOKMARKS_MAX from "SAVED_BOOKMARKS_MAX" /* 8528 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ SAVED_BOOKMARKS_MAX: error, SAVED_REMINDERS_MAX: closure_8 } = SAVED_BOOKMARKS_MAX);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.md, flexDirection: "row", gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16, marginHorizontal: ThemesDefault.space.PX_16, padding: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 20, width: 20 };
createCacheKey[2] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  const tmp = callback();
  analyticsLocations = analyticsLocations(5834)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  let obj = { style: tmp.container, children: null };
  callback = React.useCallback(() => analyticsLocations(closure_1_2[8])(isReminder, analyticsLocations), items);
  if (isAtLimit) {
    obj = { color: "text-feedback-warning", style: null };
    obj[1] = tmp.icon;
    let tmp7Result = tmp7(isReminder(8113).WarningIcon, obj);
    let tmp10 = tmp7;
  } else {
    obj = { source: null, style: null };
    obj[0] = tmp2(8877);
    obj[1] = tmp.icon;
    tmp7Result = tmp7(closure_4, obj);
    tmp10 = tmp7;
  }
  const items1 = [tmp7Result, , ];
  obj1 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj2 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = isReminder(1236).intl;
  obj2[2] = intl.string(isReminder(1236).t.oW0eUd).toUpperCase();
  const items2 = [tmp10(isReminder(4376).Text, obj2), " \u00B7 ", ];
  let obj5 = isReminder(4043);
  const premiumTypeDisplayName = obj5.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl2 = isReminder(1236).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = isReminder(1236).t;
  if (isAtLimit) {
    const obj3 = { nitroTierName: null, premiumMax: null };
    obj3[0] = premiumTypeDisplayName;
    obj3[1] = isReminder ? closure_8 : closure_7;
    formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj3);
  } else {
    const obj4 = { nitroTierName: null };
    obj4[0] = premiumTypeDisplayName;
    items2[2] = formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj4);
    obj1[3] = items2;
    items1[1] = tmp5(isReminder(4376).Text, obj1);
    if (isAtLimit) {
      let Button = tmp2(9658);
    } else {
      Button = tmp12(4815).Button;
    }
    obj5 = { size: "sm", text: null, onPress: null };
    const intl3 = tmp12(1236).intl;
    obj5[1] = intl3.string(tmp12(1236).t["8x0jKT"]);
    obj5[2] = callback;
    items1[2] = tmp10(Button, obj5);
    obj[1] = items1;
    return tmp5(closure_5, obj);
  }
};