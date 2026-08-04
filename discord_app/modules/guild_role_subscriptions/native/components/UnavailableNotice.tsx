import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, brightTitle: null, unavailableContainer: null, unavailableInfo: null, unavailableDescription: null, joinCtaTitle: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { justifyContent: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center" };
createCacheKey[4] = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
createCacheKey[5] = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  let description;
  let title;
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj = { style: tmp.unavailableInfo, children: null };
  obj = { source: null };
  obj[0] = importDefault(15247);
  const items1 = [callback(importDefault(5236), obj), , ];
  const items2 = [tmp.joinCtaTitle, ];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = callback(require(4281) /* Text */.Text, { variant: "heading-lg/extrabold", color: "text-default", style: items2, children: title });
  items1[2] = callback(require(4281) /* Text */.Text, { style: tmp.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description });
  obj[1] = items1;
  obj[1] = closure_5(View, obj);
  return callback(View, obj);
};