// === Module 13652: LiveTag ===

// Module 13652 (LiveTag)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import set from "set" /* 500 */;

require = arg1;
noopAll;
createCacheKey = { tag: null, tagText: null };
createCacheKey = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: ThemesDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey[0] = createCacheKey;
const obj1 = { textAlign: "center", color: ThemesDefault.unsafe_rawColors.WHITE, marginTop: null };
let num = 0;
if (set.isAndroid()) {
  num = -2;
}
obj1[2] = num;
createCacheKey[1] = obj1;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.tag, style];
  obj = { variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: null };
  items1 = [tmp.tagText, textStyle];
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.dI3q4h).toUpperCase();
  obj[1] = jsx(Text.Text, { variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: null });
  return <View variant="text-xs/bold" style={items1} lineClamp={1} allowFontScaling={allowFontScaling}>{null}</View>;
};