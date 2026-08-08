// discord_app/modules/saved_messages/native/ForLaterNitroUpsellBar.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import SAVED_BOOKMARKS_MAX from "SAVED_BOOKMARKS_MAX";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ SAVED_BOOKMARKS_MAX: error, SAVED_REMINDERS_MAX: metroImportAll } = SAVED_BOOKMARKS_MAX);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.md, flexDirection: "row", gap: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_16, marginHorizontal: require("Themes").space.PX_16, padding: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 20, width: 20 };
createCacheKey[2] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("GuildFeatures").fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  const tmp = createCacheKey();
  analyticsLocations = analyticsLocations(5728)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  let obj = { style: tmp.container, children: null };
  const callback = React.useCallback(() => analyticsLocations(outer1_2[8])(isReminder, analyticsLocations), items);
  if (isAtLimit) {
    obj = { color: "text-feedback-warning", style: null };
    obj[1] = tmp.icon;
    let tmp7Result = tmp7(isReminder(7962).WarningIcon, obj);
    let tmp10 = tmp7;
  } else {
    obj = { source: null, style: null };
    obj[0] = tmp2(8730);
    obj[1] = tmp.icon;
    tmp7Result = tmp7(closure_4, obj);
    tmp10 = tmp7;
  }
  const items1 = [tmp7Result, , ];
  const obj1 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj2 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = isReminder(1236).intl;
  obj2[2] = intl.string(isReminder(1236).t.oW0eUd).toUpperCase();
  const items2 = [tmp10(isReminder(4299).Text, obj2), " \u00B7 ", ];
  let obj5 = isReminder(3947);
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
    items1[1] = tmp5(isReminder(4299).Text, obj1);
    if (isAtLimit) {
      let Button = tmp2(9512);
    } else {
      Button = tmp12(4714).Button;
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