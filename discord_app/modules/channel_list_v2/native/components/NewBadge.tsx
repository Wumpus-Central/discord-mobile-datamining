// === Module 11512: NewBadge ===

// Module 11512 (NewBadge)
import noopAll from "noop" /* 19 */;
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4314 */;
import Text from "Text" /* 4739 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8541 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = set;
  let num = 0;
  if (obj.isIOS()) {
    num = 1;
  }
  obj = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  if (tmpResult.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(712).colors.BACKGROUND_BRAND;
    }
    obj[6] = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj[1] = obj;
    return obj;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(712).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp2 = useIsUsingClientThemeDefault();
  const tmp3 = useThemeDefault();
  const tmp4 = callback(tmp2, tmp3);
  let obj = { style: tmp4.base, children: null };
  obj = { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null };
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj[2] = str;
  const intl = tmp7(1236).intl;
  obj[3] = intl.string(getSystemLocale.t.y2b7CA);
  obj[1] = jsx(Text.Text, { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null });
  return <View variant="text-xxs/bold" style={tmp4.text} color={null}>{null}</View>;
};