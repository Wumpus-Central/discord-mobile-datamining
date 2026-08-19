// === Module 13486: LiveTag ===

// Module 13486 (LiveTag)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;

require = fn;
noopAll;
const createCacheKey = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: ThemesDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey[0] = createCacheKey;
const obj1 = { textAlign: "center", color: ThemesDefault.unsafe_rawColors.WHITE, marginTop: null };
let num = 0;
if (obj132.isAndroid()) {
  num = -2;
}
obj1[2] = num;
createCacheKey[1] = obj1;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = callback();
  const items = [tmp.tag, style];
  const obj = { variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: null };
  items1 = [tmp.tagText, textStyle];
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.dI3q4h).toUpperCase();
  obj[1] = jsx(Text.Text, { variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: null });
  return <View variant="text-xs/bold" style={items1} lineClamp={1} allowFontScaling={allowFontScaling}>{null}</View>;
};