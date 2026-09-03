// === Module 15365: AppIcon ===

// Module 15365 (AppIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import useThemeDefault from "useTheme" /* 4413 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { getIconById } from "items" /* 8191 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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