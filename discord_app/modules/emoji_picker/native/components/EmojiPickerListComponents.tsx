// === Module 10309: EmojiPickerListComponents ===

// Module 10309 (EmojiPickerListComponents)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef8156 from "module_8156" /* 8156 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 10307 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const EmojiPickerListConstants = fn(10290);
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = EmojiPickerListConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let obj = { section: null, nsfwContainer: null, nsfwText: null };
obj = { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
obj.section = obj;
const createStyles = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.nsfwContainer = createStyles;
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const memoResult = noop.memo(() => {
  const tmp = closure_6();
  let obj = { style: tmp.nsfwContainer, children: null };
  obj = { source: _modDef8156, size: native.Icon.Sizes.SMALL };
  const items = [React4(native.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.SLzV5z);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = noop.memo((useTier0UpsellContent) => {
  ({ label, isSectionNitroLocked } = useTier0UpsellContent);
  let obj = { style: closure_6().section, children: null };
  if (isSectionNitroLocked) {
    obj = { useTier0UpsellContent: useTier0UpsellContent.useTier0UpsellContent };
    isSectionNitroLocked = React4(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj);
  }
  const items = [isSectionNitroLocked, ];
  let tmp6 = null;
  if ("" !== label) {
    obj = { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label };
    tmp6 = React4(Text_Text.Text, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  return hasOwnProperty(View, obj);
});