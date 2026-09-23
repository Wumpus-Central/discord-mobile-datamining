// === Module 11211: useFastestListTableRowPlaceholderConfig ===

// Module 11211 (useFastestListTableRowPlaceholderConfig)
import nativeDefault from "native" /* 576 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7393 */;
import noop from "module_19" /* 19 */;

require = fn;
const createStyles = fn(4827);
let obj2 = { placeholder: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT }, placeholderAvatar: null, placeholderUsername: null, placeholderDivider: null };
let size = { width: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.REFRESH_MEDIUM_32], height: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.placeholderAvatar = size;
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.placeholderUsername = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const obj4 = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.placeholderDivider = { backgroundColor: fn(5744).DIVIDER_BACKGROUND };
const styles = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = styles();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    const obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: closure_0.placeholder.backgroundColor, colorHex: closure_0.placeholderAvatar.backgroundColor, labelPadding: nativeDefault.space.PX_16, labelPaddingInnerRatio: 0, labelSize: closure_0.placeholderUsername.height, padding: nativeDefault.space.PX_12, shapeSize: closure_0.placeholderAvatar.width };
    const obj2 = { divider: true, dividerColorHex: closure_0.placeholderDivider.backgroundColor, dividerPaddingLeft: null };
    const sum = nativeDefault.space.PX_12 + closure_0.placeholderAvatar.width;
    obj2.dividerPaddingLeft = sum + nativeDefault.space.PX_16;
    const obj3 = { sectionHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: closure_0.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 }, sectionItem: null, sectionItemAtFront: null, sectionItemAtRear: null, sectionItemSingleton: null };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    obj3.sectionItem = {};
    const obj6 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj2);
    obj6.borderTopLeftRadius = nativeDefault.radii.lg;
    obj6.borderTopRightRadius = nativeDefault.radii.lg;
    obj3.sectionItemAtFront = obj6;
    const obj7 = {};
    const merged4 = Object.assign(obj);
    obj7.borderBottomLeftRadius = nativeDefault.radii.lg;
    obj7.borderBottomRightRadius = nativeDefault.radii.lg;
    obj3.sectionItemAtRear = obj7;
    const obj8 = {};
    const merged5 = Object.assign(obj);
    obj8.borderRadius = nativeDefault.radii.lg;
    obj3.sectionItemSingleton = obj8;
    return obj3;
  }, items);
};
export const useFastestListTableRowPlaceholderStyles = styles;