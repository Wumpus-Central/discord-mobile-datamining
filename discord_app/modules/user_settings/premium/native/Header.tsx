// discord_app/modules/user_settings/premium/native/Header.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const tmp5 = closure_5;
  const tmp6 = View;
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.lpNrPu);
  const tmp8 = preloadDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(7895);
  } else {
    tmp2Result = tmp2(12947);
  }
  obj[3] = tmp2Result;
  const items1 = [closure_4(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp9(1236).intl;
  obj[3] = intl2.string(getSystemLocale.t.SD5MJW);
  items1[1] = closure_4(Text.Text, obj);
  obj[1] = items1;
  return tmp5(tmp6, obj);
};