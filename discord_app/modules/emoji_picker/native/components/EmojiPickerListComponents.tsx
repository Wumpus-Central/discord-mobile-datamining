// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponents.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import IMAGE_SIZE from "IMAGE_SIZE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/08301_registerAsset.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { PremiumUpsellGradientBackground } from "../../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";

let LABEL_BOTTOM_PADDING;
let LABEL_TOP_PADDING;
let NSFW_ROW_HEIGHT;
let c4;
let c5;
const require = arg1;
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = IMAGE_SIZE);
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { section: null, nsfwContainer: null, nsfwText: null };
obj = { justifyContent: "center", overflow: "hidden", backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
obj[0] = obj;
createCacheKey = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
obj[1] = createCacheKey;
obj[2] = { marginLeft: 4, textAlign: "center" };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = { style: tmp.nsfwContainer, children: null };
  obj = { source: null, size: null };
  obj[0] = registerAsset;
  obj[1] = Button.Icon.Sizes.SMALL;
  const items = [callback(Button.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.SLzV5z);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const memoResult1 = importAllResult.memo((useTier0UpsellContent) => {
  let isSectionNitroLocked;
  let label;
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
const result = require("IMAGE_SIZE").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = memoResult1;