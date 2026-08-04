// discord_app/modules/forums/native/ForumOriginalPoster.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
class ForumOriginalPoster {
  constructor() {
    tmp = jsxs();
    obj = { style: tmp.container, children: null };
    obj = { style: items, children: null };
    items = [, ];
    ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp);
    obj1 = { variant: "text-xs/semibold", color: "text-brand", children: null };
    intl = require("getSystemLocale").intl;
    obj1[2] = intl.string(require("getSystemLocale").t.fyE8sH);
    obj[1] = jsx(require("Text").Text, obj1);
    items1 = [, ];
    items1[0] = jsx(View, obj);
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    intl2 = require("getSystemLocale").intl;
    obj2[2] = intl2.string(require("getSystemLocale").t.uN6Emt);
    items1[1] = jsx(require("Text").Text, obj2);
    obj[1] = items1;
    return jsxs(View, obj);
  }
}
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, opIcon: null, opIconBackground: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, marginEnd: 8, paddingHorizontal: 4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("result").DARK_BRAND_260_LIGHT_BRAND_200 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("result").DARK_BRAND_260_LIGHT_BRAND_200 };
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default ForumOriginalPoster;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return callback(ForumOriginalPoster, {});
};