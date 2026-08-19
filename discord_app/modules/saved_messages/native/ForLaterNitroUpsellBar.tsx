// discord_app/modules/saved_messages/native/ForLaterNitroUpsellBar.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";
import SAVED_BOOKMARKS_MAX from "../../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ SAVED_BOOKMARKS_MAX: error, SAVED_REMINDERS_MAX: closure_8 } = SAVED_BOOKMARKS_MAX);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.md, flexDirection: "row", gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16, marginHorizontal: ThemesDefault.space.PX_16, padding: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 20, width: 20 };
createCacheKey[2] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  const tmp = callback();
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  let obj = { style: tmp.container, children: null };
  callback = React.useCallback(() => analyticsLocations(dependencyMap[8])(isReminder, analyticsLocations), items);
  if (isAtLimit) {
    obj = { color: "text-feedback-warning", style: null };
    obj[1] = tmp.icon;
    let tmp7Result = callback(isReminder(8078).WarningIcon, obj);
    let tmp10 = callback;
  } else {
    obj = { source: null, style: null };
    obj[0] = tmp2(9397);
    obj[1] = tmp.icon;
    tmp7Result = callback(closure_4, obj);
    tmp10 = callback;
  }
  const items1 = [tmp7Result, , ];
  obj1 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj2 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = isReminder(1236).intl;
  obj2[2] = intl.string(isReminder(1236).t.oW0eUd).toUpperCase();
  const items2 = [tmp10(isReminder(4734).Text, obj2), " \u00B7 ", ];
  let obj5 = isReminder(4039);
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
    items1[1] = callback2(isReminder(4734).Text, obj1);
    if (isAtLimit) {
      let Button = tmp2(9498);
    } else {
      Button = tmp12(4745).Button;
    }
    obj5 = { size: "sm", text: null, onPress: null };
    const intl3 = tmp12(1236).intl;
    obj5[1] = intl3.string(tmp12(1236).t["8x0jKT"]);
    obj5[2] = callback;
    items1[2] = tmp10(Button, obj5);
    obj[1] = items1;
    return callback2(closure_5, obj);
  }
  const str = intl.string(isReminder(1236).t.oW0eUd);
};