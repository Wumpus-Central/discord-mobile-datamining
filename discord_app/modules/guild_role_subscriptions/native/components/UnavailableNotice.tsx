// === Module 15790: UnavailableNotice ===

// Module 15790 (UnavailableNotice)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import preloadDefault from "preload" /* 5449 */;
import registerAssetDefault from "registerAsset" /* 15506 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { justifyContent: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center" };
createCacheKey[4] = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
createCacheKey[5] = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = callback2();
  const items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  const obj = { source: registerAssetDefault };
  const items1 = [callback(preloadDefault, obj), , ];
  const items2 = [tmp.joinCtaTitle, ];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = callback(Text.Text, { variant: "heading-lg/extrabold", color: "text-default", style: items2, children: title });
  items1[2] = callback(Text.Text, { style: tmp.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description });
  obj[1] = items1;
  obj[1] = callback(View, obj);
  return callback(View, obj);
};