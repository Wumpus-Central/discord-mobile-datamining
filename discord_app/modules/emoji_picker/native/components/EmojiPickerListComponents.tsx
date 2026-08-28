// === Module 9085: NSFWRow ===

// Module 9085 (NSFWRow)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4442 */;
import registerAssetDefault from "registerAsset" /* 8012 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9083 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import IMAGE_SIZE from "IMAGE_SIZE" /* 9040 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = IMAGE_SIZE);
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { section: null, nsfwContainer: null, nsfwText: null };
obj = { justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
obj[0] = obj;
createCacheKey = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
obj[1] = createCacheKey;
obj[2] = { marginLeft: 4, textAlign: "center" };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = { style: tmp.nsfwContainer, children: null };
  obj = { source: registerAssetDefault, size: Button.Icon.Sizes.SMALL };
  const items = [callback(Button.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.SLzV5z);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const memoResult1 = importAllResult.memo((useTier0UpsellContent) => {
  ({ label, isSectionNitroLocked } = useTier0UpsellContent);
  let obj = { style: callback3().section, children: null };
  if (isSectionNitroLocked) {
    obj = { useTier0UpsellContent: null };
    obj[0] = useTier0UpsellContent.useTier0UpsellContent;
    isSectionNitroLocked = callback(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj);
  }
  const items = [isSectionNitroLocked, ];
  let tmp6 = null;
  if ("" !== label) {
    obj = { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: null };
    obj[3] = label;
    tmp6 = callback(Text.Text, obj);
  }
  items[1] = tmp6;
  obj[1] = items;
  return closure_5(View, obj);
});
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = memoResult1;