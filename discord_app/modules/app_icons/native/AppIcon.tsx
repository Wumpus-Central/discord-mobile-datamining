// discord_app/modules/app_icons/native/AppIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { getIconById } from "AppIconConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
createCacheKey = { container: null, image: null };
createCacheKey = { overflow: "hidden", borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { resizeMode: "contain", height: "100%", width: "100%" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = callback();
  const tmp2 = useThemeDefault();
  let obj = AccessibilityAnnouncer;
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  obj = { style: items, children: <closure_3 {...obj} /> };
  items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj = { style: tmp.image, source: getIconById(size.id).iconSource };
  return <closure_4 style={tmp.image} source={getIconById(arg0.id).iconSource} />;
};