// discord_app/modules/forums/native/posts/ForumPostNewTag.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
const obj2 = { container: { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  const obj = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
  const items = [containerStyle.containerStyle, closure_3().container];
  obj.containerStyle = items;
  return jsx(native.NewTag, { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" });
}
