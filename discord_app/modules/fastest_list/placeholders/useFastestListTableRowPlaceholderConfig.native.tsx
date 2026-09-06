// discord_app/modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastestListPropsPlaceholder from "../props/FastestListPropsPlaceholder.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
fn(4560);
let createStyles = { placeholder: null, placeholderAvatar: null, placeholderUsername: null, placeholderDivider: null };
createStyles = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles.placeholder = createStyles;
let size = {
  width: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32],
  height: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32],
  borderRadius: nativeDefault.radii.xl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.placeholderAvatar = size;
createStyles.placeholderUsername = {
  height: 20,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const obj1 = {
  height: 20,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.placeholderDivider = { backgroundColor: fn(5441).DIVIDER_BACKGROUND };
createStyles = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx",
);

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = createStyles();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    let obj = {
      type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM,
      shape: "circle",
      backgroundColorHex: closure_0.placeholder.backgroundColor,
      colorHex: closure_0.placeholderAvatar.backgroundColor,
      labelPadding: nativeDefault.space.PX_16,
      labelPaddingInnerRatio: 0,
      labelSize: closure_0.placeholderUsername.height,
      padding: nativeDefault.space.PX_12,
      shapeSize: closure_0.placeholderAvatar.width,
    };
    obj = { divider: true, dividerColorHex: closure_0.placeholderDivider.backgroundColor, dividerPaddingLeft: null };
    const sum = nativeDefault.space.PX_12 + closure_0.placeholderAvatar.width;
    obj.dividerPaddingLeft = sum + nativeDefault.space.PX_16;
    obj = {
      sectionHeader: {
        type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
        shape: "rect",
        colorHex: closure_0.placeholder.backgroundColor,
        paddingVertical: nativeDefault.space.PX_16,
        borderRadius: nativeDefault.radii.md,
        width: nativeDefault.space.PX_96,
      },
      sectionItem: null,
      sectionItemAtFront: null,
      sectionItemAtRear: null,
      sectionItemSingleton: null,
    };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    obj.sectionItem = {};
    const obj3 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj);
    obj3.borderTopLeftRadius = nativeDefault.radii.lg;
    obj3.borderTopRightRadius = nativeDefault.radii.lg;
    obj.sectionItemAtFront = obj3;
    const obj4 = {};
    const merged4 = Object.assign(obj);
    obj4.borderBottomLeftRadius = nativeDefault.radii.lg;
    obj4.borderBottomRightRadius = nativeDefault.radii.lg;
    obj.sectionItemAtRear = obj4;
    const obj5 = {};
    const merged5 = Object.assign(obj);
    obj5.borderRadius = nativeDefault.radii.lg;
    obj.sectionItemSingleton = obj5;
    return obj;
  }, items);
}
export const useFastestListTableRowPlaceholderStyles = createStyles;
