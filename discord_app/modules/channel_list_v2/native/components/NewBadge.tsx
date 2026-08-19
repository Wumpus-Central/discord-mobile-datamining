// discord_app/modules/channel_list_v2/native/components/NewBadge.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import obj132 from "../../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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