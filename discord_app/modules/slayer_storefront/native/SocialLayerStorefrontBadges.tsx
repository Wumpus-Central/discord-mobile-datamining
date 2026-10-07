// === Module 10559: SocialLayerStorefrontBadges ===

// Module 10559 (SocialLayerStorefrontBadges)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import ClydeIcon from "ClydeIcon" /* 10560 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { exclusiveBadge: { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, exclusiveBadgeText: null };
let obj4 = { textTransform: "uppercase", fontSize: nativeDefault.space.PX_12, lineHeight: null };
let PlatformUtils = fn(1369);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj4.lineHeight = PlatformUtils ? space.PX_12 : space.PX_16;
obj2.exclusiveBadgeText = obj4;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
    const tmp8 = React4(ClydeIcon.ClydeIcon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.RiDMFz);
    cResult[1] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.exclusiveBadgeText) {
    const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp4.exclusiveBadgeText, children: tmp9 };
    const tmp13 = React4(Text_Text.Text, obj3);
    cResult[2] = tmp4.exclusiveBadgeText;
    cResult[3] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.exclusiveBadge) {
    if (cResult[5] === tmp11) {
      let tmp14 = cResult[6];
    }
    return tmp14;
  }
  const obj4 = { style: tmp4.exclusiveBadge, children: null };
  const items = [first, tmp11];
  obj4.children = items;
  const tmp15 = hasOwnProperty(View, obj4);
  cResult[4] = tmp4.exclusiveBadge;
  cResult[5] = tmp11;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  const tmp = closure_6();
  const obj = { style: tmp.exclusiveBadge, children: null };
  const items = [React4(ClydeIcon.ClydeIcon, { size: "xs", color: nativeDefault.colors.WHITE }), ];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.RiDMFz);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});