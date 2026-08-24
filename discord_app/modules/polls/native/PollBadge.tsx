// === Module 15992: PollBadge ===

// Module 15992 (PollBadge)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4739 */;
import registerAssetDefault from "registerAsset" /* 15993 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { borderRadius: ThemesDefault.radii.round, paddingHorizontal: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, color: ThemesDefault.colors.TEXT_MUTED, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 4, textTransform: "uppercase" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { size: Button.IconSizes.EXTRA_SMALL_10, source: registerAssetDefault };
  const items1 = [callback(Button.Icon, obj), ];
  obj = { style: tmp.text, variant: "text-xs/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.RgIi2B);
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};