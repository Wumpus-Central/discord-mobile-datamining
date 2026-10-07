// discord_app/design/components/TagGroup/native/TagGroupTypes.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TagGroupShared from "../../../../../discord_common/js/packages/design/components/TagGroup/shared/TagGroupShared.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGroupTypes.native.tsx");

export const DEFAULT_INLINE_TAG_GROUP_SIZE = TagGroupShared.DEFAULT_INLINE_TAG_GROUP_SIZE;
export const DEFAULT_TAG_GROUP_SIZE = TagGroupShared.DEFAULT_TAG_GROUP_SIZE;
export const getDefaultTagGroupSize = TagGroupShared.getDefaultTagGroupSize;
export const EXTRA_SMALL_TAG_HEIGHT = 24;
export const SMALL_TAG_HEIGHT = 30;
export const MEDIUM_TAG_HEIGHT = 40;
export const TAG_BORDER_WIDTH = 1;
export function getTagMinHeight(arg0) {
  if ("xs" === arg0) {
    return 24;
  } else if ("sm" === arg0) {
    return 30;
  } else if ("md" === arg0) {
    return 40;
  }
}
export const getTagTextVariant = function getTagTextVariant(size) {
  return TagGroupShared.getTagTextVariant(size);
};
export const getTagIconSize = function getTagIconSize(size) {
  return TagGroupShared.getTagIconSize(size);
};
export function getTagGraphicDimension(size) {
  let num = 12;
  if ("md" === size) {
    num = 16;
  }
  return num;
}
export const getTagBorderRadius = function getTagBorderRadius(arg0, arg1) {
  if ("filter" === arg1) {
    let xs = nativeDefault.radii.round;
  } else if ("md" === arg0) {
    xs = nativeDefault.radii.sm;
  } else {
    xs = nativeDefault.radii.xs;
  }
  return xs;
};
export const getTagHorizontalPadding = function getTagHorizontalPadding(arg0) {
  if ("md" === arg0) {
    let PX_8 = nativeDefault.space.PX_12;
  } else {
    PX_8 = nativeDefault.space.PX_8;
  }
  return PX_8;
};
export const getTagGap = function getTagGap(arg0) {
  if ("md" === arg0) {
    let PX_4 = nativeDefault.space.PX_8;
  } else {
    PX_4 = nativeDefault.space.PX_4;
  }
  return PX_4;
};
export const getTagVerticalPadding = function getTagVerticalPadding(arg0) {
  let num = 0;
  if ("xs" !== arg0) {
    num = nativeDefault.space.PX_4;
  }
  return num;
};
