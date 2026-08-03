import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "jsxProd";

const require = arg1;
createCacheKey = { tag: null, tagText: null };
createCacheKey = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: require("Themes").radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").unsafe_rawColors.RED_400 };
createCacheKey[0] = createCacheKey;
const obj1 = { textAlign: "center", color: require("Themes").unsafe_rawColors.WHITE, marginTop: null };
let num = 0;
if (set.isAndroid()) {
  num = -2;
}
obj1[2] = num;
createCacheKey[1] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  let allowFontScaling;
  let style;
  let textStyle;
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.tag, style];
  obj = { variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: null };
  items1 = [tmp.tagText, textStyle];
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t.dI3q4h).toUpperCase();
  obj[1] = jsx(require(4251) /* Text */.Text, { variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: null });
  return <View variant="text-xs/bold" style={items1} lineClamp={1} allowFontScaling={allowFontScaling}>{null}</View>;
};