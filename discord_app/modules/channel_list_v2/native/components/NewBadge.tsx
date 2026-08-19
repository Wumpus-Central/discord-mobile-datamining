// === Module 11463: NewBadge ===

// Module 11463 (NewBadge)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useThemeDefault from "useTheme" /* 4310 */;
import Text from "Text" /* 4734 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8502 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = obj132;
  obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  if (tmpResult.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = ThemesDefault.colors.BACKGROUND_BRAND;
    }
    obj[6] = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj[1] = obj;
    return obj;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = ThemesDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
  tmpResult = AccessibilityAnnouncer;
});
const result = require("obj132").fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp3 = useThemeDefault();
  const tmp4 = callback(useIsUsingClientThemeDefault(), tmp3);
  const obj = { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null };
  const tmp2 = useIsUsingClientThemeDefault();
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj[2] = str;
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.y2b7CA);
  obj[1] = jsx(Text.Text, { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null });
  return <View variant="text-xxs/bold" style={tmp4.text} color={null}>{null}</View>;
};