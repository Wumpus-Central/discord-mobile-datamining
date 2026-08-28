// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponents.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../_runtime/08012_registerAsset.js";
import PremiumUpsellGradientBackground from "../../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import IMAGE_SIZE from "EmojiPickerListConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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