// === Module 10817: SocialLayerStorefrontBadges ===

// Module 10817 (SocialLayerStorefrontBadges)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import ClydeIcon from "ClydeIcon" /* 10818 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { exclusiveBadge: null, exclusiveBadgeText: null };
createStyles = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.exclusiveBadge = createStyles;
const obj1 = { textTransform: "uppercase", fontSize: nativeDefault.space.PX_12, lineHeight: null };
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj1.lineHeight = PlatformUtils ? space.PX_12 : space.PX_16;
createStyles.exclusiveBadgeText = obj1;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = closure_6();
  let obj = { style: tmp.exclusiveBadge, children: null };
  obj = { size: "xs", color: nativeDefault.colors.WHITE };
  const items = [React4(ClydeIcon.ClydeIcon, obj), ];
  obj = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.RiDMFz);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};