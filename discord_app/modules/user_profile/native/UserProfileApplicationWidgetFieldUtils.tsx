// discord_app/modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ImageSkeleton } from "UserProfileApplicationWidgetSkeletons.tsx";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { fieldTextRow: null, fieldIcon: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 16, height: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export const formatDurationNarrow = function formatDurationNarrow(arg0) {
  let num = 0;
  if (Number.isFinite(arg0)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(arg0));
  }
  const rounded = Math.floor(num / 3600000);
  const result = Math.floor(num / 60000) % 60;
  const result1 = Math.floor(num / 1000) % 60;
  const items = [];
  if (rounded > 0) {
    const intl = getSystemLocale.intl;
    let obj = { hours: null };
    obj[0] = rounded;
    items.push(intl.formatToPlainString(getSystemLocale.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const intl2 = getSystemLocale.intl;
    obj = { minutes: null };
    obj[0] = result;
    items.push(intl2.formatToPlainString(getSystemLocale.t["XIGt+W"], obj));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const intl3 = getSystemLocale.intl;
    obj = { seconds: null };
    obj[0] = result1;
    items.push(intl3.formatToPlainString(getSystemLocale.t.pyvjRp, obj));
  }
  return items.join(" ");
};
export const FieldText = function FieldText(arg0) {
  let color;
  let field;
  let skeletonWidthChars;
  let variant;
  ({ field, variant } = arg0);
  ({ color, skeletonWidthChars } = arg0);
  const tmp = createCacheKey();
  if ("hidden" === field.status) {
    return null;
  } else if ("skeleton" === field.status) {
    let obj = { variant: null, widthChars: null };
    obj[0] = variant;
    obj[1] = skeletonWidthChars;
    let tmp9Result = callback(ImageSkeleton.TextSkeleton, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.fieldTextRow;
    const obj1 = { variant: null, color: null, lineClamp: 2, children: null };
    obj1[0] = variant;
    obj1[1] = color;
    obj1[3] = field.text;
    const items = [callback(Text.Text, obj1), ];
    let tmp11Result = null != field.icon;
    if (tmp11Result) {
      obj = { source: null, style: null, resizeMode: "contain" };
      const obj2 = { uri: null };
      obj2[0] = field.icon.url;
      obj[0] = obj2;
      obj[1] = tmp.fieldIcon;
      tmp11Result = tmp11(closure_2, obj);
    }
    items[1] = tmp11Result;
    obj[1] = items;
    tmp9Result = closure_5(closure_3, obj);
    const tmp10 = closure_3;
    tmp11 = callback;
    const tmp9 = closure_5;
  }
};