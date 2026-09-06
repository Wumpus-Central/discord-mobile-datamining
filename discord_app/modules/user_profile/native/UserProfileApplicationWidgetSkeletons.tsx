// discord_app/modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { skeleton: null };
createStyles = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles.skeleton = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export const ImageSkeleton = function ImageSkeleton(style) {
  const obj = { style: null };
  const items = [closure_4().skeleton, style.style];
  obj.style = items;
  return <View style={null} />;
};
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export const TextSkeleton = function TextSkeleton(widthChars) {
  let num = widthChars.widthChars;
  if (num === undefined) {
    num = 15;
  }
  const tmp2 = Text_Text.TextStyleSheet[widthChars.variant];
  const obj = { style: null };
  const items = [closure_4().skeleton];
  const size = { width: 0.46 * tmp2.fontSize * num, height: 0.8 * tmp2.lineHeight };
  items[1] = size;
  obj.style = items;
  return <View style={null} />;
};
