// discord_app/modules/forums/native/ForumOriginalPoster.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
class ForumOriginalPoster {
  constructor() {
    tmp = closure_5();
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
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("result").DARK_BRAND_260_LIGHT_BRAND_200 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("result").DARK_BRAND_260_LIGHT_BRAND_200 };
const result = require("obj132").fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default ForumOriginalPoster;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return callback(ForumOriginalPoster, {});
};