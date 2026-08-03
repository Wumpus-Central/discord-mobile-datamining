import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { getIconById } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
createCacheKey = { container: null, image: null };
createCacheKey = { overflow: "hidden", borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { resizeMode: "contain", height: "100%", width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("items").fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = createCacheKey();
  const tmp2 = importDefault(4191)();
  let obj = require(4101) /* AccessibilityAnnouncer */;
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  obj = { style: items, children: <closure_3 {...obj} /> };
  items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj = { style: tmp.image, source: getIconById(size.id).iconSource };
  return <closure_4 style={tmp.image} source={getIconById(arg0.id).iconSource} />;
};