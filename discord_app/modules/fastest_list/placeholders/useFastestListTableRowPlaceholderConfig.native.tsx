// === Module 9008: styles ===

// Module 9008 (styles)
import noop from "noop";
import createCacheKey from "createCacheKey";

let require = arg1;
createCacheKey = { placeholder: null, placeholderAvatar: null, placeholderUsername: null, placeholderDivider: null };
createCacheKey = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
const obj1 = { width: null, height: null, borderRadius: null, backgroundColor: null };
obj1[0] = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32];
obj1[1] = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32];
obj1[2] = require("Themes").radii.xl;
obj1[3] = require("Themes").colors.BACKGROUND_MOD_MUTED;
createCacheKey[1] = obj1;
createCacheKey[2] = { height: 20, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
const obj2 = { height: 20, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[3] = { backgroundColor: require("result").DIVIDER_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: require("result").DIVIDER_BACKGROUND };
const result = require("Themes").fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = createCacheKey();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = { type: tmp(outer1_2[5]).FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: tmp.placeholder.backgroundColor, colorHex: tmp.placeholderAvatar.backgroundColor, labelPadding: outer1_1(outer1_2[2]).space.PX_16, labelPaddingInnerRatio: 0, labelSize: tmp.placeholderUsername.height, padding: outer1_1(outer1_2[2]).space.PX_12, shapeSize: tmp.placeholderAvatar.width };
    obj = { divider: true, dividerColorHex: tmp.placeholderDivider.backgroundColor, dividerPaddingLeft: null };
    const sum = outer1_1(outer1_2[2]).space.PX_12 + tmp.placeholderAvatar.width;
    obj[2] = sum + outer1_1(outer1_2[2]).space.PX_16;
    obj = { sectionHeader: null, sectionItem: null, sectionItemAtFront: null, sectionItemAtRear: null, sectionItemSingleton: null };
    obj[0] = { type: tmp(outer1_2[5]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: tmp.placeholder.backgroundColor, paddingVertical: outer1_1(outer1_2[2]).space.PX_16, borderRadius: outer1_1(outer1_2[2]).radii.md, width: outer1_1(outer1_2[2]).space.PX_96 };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    obj[1] = {};
    const obj3 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj);
    obj3.borderTopLeftRadius = outer1_1(outer1_2[2]).radii.lg;
    obj3.borderTopRightRadius = outer1_1(outer1_2[2]).radii.lg;
    obj[2] = obj3;
    const obj4 = {};
    const merged4 = Object.assign(obj);
    obj4.borderBottomLeftRadius = outer1_1(outer1_2[2]).radii.lg;
    obj4.borderBottomRightRadius = outer1_1(outer1_2[2]).radii.lg;
    obj[3] = obj4;
    const obj5 = {};
    const merged5 = Object.assign(obj);
    obj5.borderRadius = outer1_1(outer1_2[2]).radii.lg;
    obj[4] = obj5;
    return obj;
  }, items);
};
export const useFastestListTableRowPlaceholderStyles = createCacheKey;