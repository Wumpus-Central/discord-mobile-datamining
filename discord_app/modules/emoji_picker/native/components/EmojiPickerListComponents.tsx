// === Module 10456: EmojiPickerListComponents ===

// Module 10456 (EmojiPickerListComponents)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4636 */;
import _modDef8304 from "module_8304" /* 8304 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 10454 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const EmojiPickerListConstants = fn(10437);
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = EmojiPickerListConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let obj = { section: { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING }, nsfwContainer: null, nsfwText: null };
let obj3 = { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
obj.nsfwContainer = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const obj4 = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const memoResult = noop.memo(() => {
  const tmp = closure_6();
  const obj = { style: tmp.nsfwContainer, children: null };
  const items = [React4(native.Icon, { source: _modDef8304, size: native.Icon.Sizes.SMALL }), ];
  const obj3 = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.SLzV5z);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = noop.memo((useTier0UpsellContent) => {
  ({ label, isSectionNitroLocked } = useTier0UpsellContent);
  const obj = { style: closure_6().section, children: null };
  if (isSectionNitroLocked) {
    const obj2 = { useTier0UpsellContent: useTier0UpsellContent.useTier0UpsellContent };
    isSectionNitroLocked = React4(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj2);
  }
  const items = [isSectionNitroLocked, ];
  let tmp6 = null;
  if ("" !== label) {
    const obj3 = { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label };
    tmp6 = React4(Text_Text.Text, obj3);
  }
  items[1] = tmp6;
  obj.children = items;
  return hasOwnProperty(View, obj);
});