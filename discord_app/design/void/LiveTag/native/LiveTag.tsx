// discord_app/design/void/LiveTag/native/LiveTag.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../components/Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import obj132 from "../../../../utils/PlatformUtils.tsx";

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