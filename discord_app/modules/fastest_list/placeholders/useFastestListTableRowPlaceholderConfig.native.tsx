// === Module 10867: styles ===

// Module 10867 (styles)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
createCacheKey = { placeholder: null, placeholderAvatar: null, placeholderUsername: null, placeholderDivider: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], borderRadius: ThemesDefault.radii.xl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
const obj1 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], borderRadius: ThemesDefault.radii.xl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { height: 20, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
const obj2 = { height: 20, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[3] = { backgroundColor: require("result").DIVIDER_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: require("result").DIVIDER_BACKGROUND };
const result = require("set").fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = createCacheKey();
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = { type: lib(closure_1_2[5]).FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: lib.placeholder.backgroundColor, colorHex: lib.placeholderAvatar.backgroundColor, labelPadding: closure_1_1(closure_1_2[2]).space.PX_16, labelPaddingInnerRatio: 0, labelSize: lib.placeholderUsername.height, padding: closure_1_1(closure_1_2[2]).space.PX_12, shapeSize: lib.placeholderAvatar.width };
    obj = { divider: true, dividerColorHex: lib.placeholderDivider.backgroundColor, dividerPaddingLeft: null };
    const sum = closure_1_1(closure_1_2[2]).space.PX_12 + lib.placeholderAvatar.width;
    obj[2] = sum + closure_1_1(closure_1_2[2]).space.PX_16;
    obj = { sectionHeader: { type: lib(closure_1_2[5]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: lib.placeholder.backgroundColor, paddingVertical: closure_1_1(closure_1_2[2]).space.PX_16, borderRadius: closure_1_1(closure_1_2[2]).radii.md, width: closure_1_1(closure_1_2[2]).space.PX_96 }, sectionItem: null, sectionItemAtFront: null, sectionItemAtRear: null, sectionItemSingleton: null };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    obj[1] = {};
    const obj3 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj);
    obj3.borderTopLeftRadius = closure_1_1(closure_1_2[2]).radii.lg;
    obj3.borderTopRightRadius = closure_1_1(closure_1_2[2]).radii.lg;
    obj[2] = obj3;
    const obj4 = {};
    const merged4 = Object.assign(obj);
    obj4.borderBottomLeftRadius = closure_1_1(closure_1_2[2]).radii.lg;
    obj4.borderBottomRightRadius = closure_1_1(closure_1_2[2]).radii.lg;
    obj[3] = obj4;
    const obj5 = {};
    const merged5 = Object.assign(obj);
    obj5.borderRadius = closure_1_1(closure_1_2[2]).radii.lg;
    obj[4] = obj5;
    return obj;
  }, items);
};
export const useFastestListTableRowPlaceholderStyles = createCacheKey;