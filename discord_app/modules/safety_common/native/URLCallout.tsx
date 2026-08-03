import "noop";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { linkCalloutContainer: null, linkCalloutContainerText: null };
createCacheKey = { maxHeight: 300, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_12, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { padding: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_12, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  const tmp = createCacheKey();
  let obj = require(12311) /* useUrlParts */;
  const urlParts = obj.useUrlParts(url.url);
  obj = { style: tmp.linkCalloutContainer, children: null };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  obj = { style: tmp.linkCalloutContainerText, variant: "text-md/normal", children: null };
  const items = [protocol, "//"];
  const items1 = [callback(require(4189) /* Text */.Text, { variant: "text-md/normal", color: "text-muted", children: items }), callback2(require(4189) /* Text */.Text, { variant: "text-md/semibold", color: "text-default", children: hostname }), callback2(require(4189) /* Text */.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl })];
  obj[2] = items1;
  obj[1] = callback(require(4189) /* Text */.Text, obj);
  return callback2(ScrollView, obj);
};