// === Module 12504: URLCallout ===

// Module 12504 (URLCallout)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4440 */;
import useUrlParts from "useUrlParts" /* 12505 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { linkCalloutContainer: null, linkCalloutContainerText: null };
createCacheKey = { maxHeight: 300, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12, textAlign: "center" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { padding: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12, textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  const tmp = callback3();
  let obj = useUrlParts;
  const urlParts = obj.useUrlParts(url.url);
  obj = { style: tmp.linkCalloutContainer, children: null };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  obj = { style: tmp.linkCalloutContainerText, variant: "text-md/normal", children: null };
  const items = [protocol, "//"];
  const items1 = [callback(Text.Text, { variant: "text-md/normal", color: "text-muted", children: items }), callback2(Text.Text, { variant: "text-md/semibold", color: "text-default", children: hostname }), callback2(Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl })];
  obj[2] = items1;
  obj[1] = callback(Text.Text, obj);
  return callback2(ScrollView, obj);
};