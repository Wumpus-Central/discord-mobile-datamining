// === Module 13728: ForumPostNewTag ===

// Module 13728 (ForumPostNewTag)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { container: { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  const obj = { containerStyle: null, variant: "text-xs/bold", color: "badge-primary-text" };
  const items = [containerStyle.containerStyle, closure_3().container];
  obj.containerStyle = items;
  return jsx(native.NewTag, { containerStyle: null, variant: "text-xs/bold", color: "badge-primary-text" });
};