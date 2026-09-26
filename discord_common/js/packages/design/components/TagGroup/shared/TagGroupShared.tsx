// discord_common/js/packages/design/components/TagGroup/shared/TagGroupShared.tsx
import size from "../../../../../../../_runtime/metro/00002__.js";

let closure_0 = { xs: "text-xs/normal", sm: "text-sm/normal", md: "text-md/normal" };
let closure_1 = { xs: "xxs", sm: "xs", md: "sm" };
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/TagGroup/shared/TagGroupShared.tsx",
);

export const DEFAULT_TAG_GROUP_SIZE = "md";
export const DEFAULT_INLINE_TAG_GROUP_SIZE = "sm";
export function getDefaultTagGroupSize(layout) {
  let str = "md";
  if ("inline" === layout) {
    str = "sm";
  }
  return str;
}
export const getTagTextVariant = function getTagTextVariant(size) {
  return closure_0[size];
};
export const getTagIconSize = function getTagIconSize(size) {
  return closure_1[size];
};
