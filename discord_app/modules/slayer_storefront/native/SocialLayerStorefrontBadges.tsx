// === Module 10546: SocialLayerStorefrontBadges ===

// Module 10546 (SocialLayerStorefrontBadges)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import ClydeIcon2 from "ClydeIcon" /* 10547 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let PlatformUtils;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let space;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { exclusiveBadge: obj2, exclusiveBadgeText: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { textTransform: "uppercase", fontSize: nativeDefault.space.PX_12, lineHeight: PlatformUtils ? space.PX_12 : space.PX_16 };
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
space = nativeDefault.space;
let closure_6 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp11;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_6();
  const exclusiveBadge = tmp4.exclusiveBadge;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
    const ClydeIcon = ClydeIcon2.ClydeIcon;
    const tmp8 = React3(ClydeIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  const exclusiveBadgeText = tmp4.exclusiveBadgeText;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.RiDMFz);
    cResult[1] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.exclusiveBadgeText) {
    const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: exclusiveBadgeText, children: tmp9 };
    const tmp13 = React3(Text_Text.Text, obj3);
    cResult[2] = tmp4.exclusiveBadgeText;
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.exclusiveBadge) {
    let tmp14;
    if (cResult[5] === tmp11) {
      tmp14 = cResult[6];
    }
    return tmp14;
  }
  const obj4 = { style: exclusiveBadge, children: items };
  items = [first, tmp11];
  const tmp15 = hasOwnProperty(View, obj4);
  cResult[4] = tmp4.exclusiveBadge;
  cResult[5] = tmp11;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  let intl;
  let items;
  const tmp = closure_6();
  const obj = { style: tmp.exclusiveBadge, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
  const ClydeIcon = ClydeIcon2.ClydeIcon;
  items = [React3(ClydeIcon, obj2), ];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: intl.string(intl2.t.RiDMFz) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = tmp6;